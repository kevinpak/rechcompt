<?php
namespace App\Repositories;

use App\Services\ResponseAPI;
use Illuminate\Http\Request;
use App\Interfaces\BookmakerRepositoryInterface;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Support\Facades\Log;
use App\Factories\AggregatorFactory;

class BookmakerRepository implements BookmakerRepositoryInterface
{
    use ResponseAPI;

    protected $aggregatorFactory;

    public function __construct(AggregatorFactory $aggregatorFactory)
    {
        $this->aggregatorFactory = $aggregatorFactory;
    }

    public function checkTransactionStatus($transaction_id)
    {
        $transaction = Transaction::where('transaction_id', $transaction_id)
        ->where('type', 1)->first();

        if (is_null($transaction)) {
            return $this->error404('Transaction');
        }

        if ($transaction->status != 2) {
            return $this->failed(403, ['status' => 'Not valid'], 'The transaction is no longer valid.');
        } else {

            $user = User::find($transaction->user_id);

            $transaction_data = [
                "first_name" => $user->first_name,
                "last_name" => $user->last_name,
                "email" => $user->email,
                "transaction_id" => $transaction->transaction_id,
                "amount" => $transaction->amount,
            ];

            return $this->success($transaction_data);
        }

    }

    public function changeTransactionStatus($transaction_id)
    {
        $transaction = Transaction::where('transaction_id', $transaction_id)
        ->where('type', 1)->first();

        if (is_null($transaction)) {
            return $this->error404('Transaction');
        }

        if ($transaction->status != 2) {
            return $this->failed(403, ['status' => 'Not valid'], 'The transaction is no longer valid.');
        }

        $transaction->update([
            'status' => 3
        ]);

        return $this->success();
    }
}
