<?php
namespace App\Repositories;

use App\Services\ResponseAPI;
use Illuminate\Http\Request;
use App\Interfaces\AggregatorCallbackRepositoryInterface;
use App\Models\Transaction;
use App\Models\User;
use App\Models\Code;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use App\Factories\AggregatorFactory;

class AggregatorCallbackRepository implements AggregatorCallbackRepositoryInterface
{
    use ResponseAPI;

    protected $aggregatorFactory;

    public function __construct(AggregatorFactory $aggregatorFactory)
    {
        $this->aggregatorFactory = $aggregatorFactory;
    }

    public function handlePostCallback(Request $request)
    {
        if (!$request->filled('isPaymentSucces') || !$request->isPaymentSucces) {
            return ;
        }

        DB::beginTransaction();
        try {

            $aggregator = $this->aggregatorFactory->getAggregator(config('payment.default'));
            $isTransactionVerified = $aggregator->verifyTransaction($request->transactionId);

            if($isTransactionVerified) {
                $transactionDetails = $aggregator->getTransactionDetails();

                $user = User::find($transactionDetails->state->userId);
                if(is_null($user)){
                    return $this->error404('User');
                }

                $code = Code::create([
                    'user_id' => $transactionDetails->state->userId,
                    'content' => generate_random_code(),
                ]);

                Transaction::create([
                    'user_id' => $transactionDetails->state->userId,
                    'code_id' => $code->id,
                    'type'    => 'purchase',
                    'amount'  => $transactionDetails->amount,
                ]);
            }

            DB::commit();
            return $this->success();
        } catch (\Exception $e) {
            DB::rollBack();
            return $this->error(check_http_response_code($e->getCode()), show_trace_in_error($e->getTrace()), $e->getMessage());
        }





    }

    public function handleGetCallback(Request $request)
    {
        if (!$request->filled('transaction_id')) {
            return redirect(config('payment.redirect_url').'?status=failed');
        }

        $aggregator = $this->aggregatorFactory->getAggregator(config('payment.default'));
        $isTransactionVerified = $aggregator->verifyTransaction($request->query('transaction_id'));

        if($isTransactionVerified) {
            return redirect(config('payment.redirect_url').'?status=success');
        } else {
            return redirect(config('payment.redirect_url').'?status=failed');
        }
    }
}
