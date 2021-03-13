<?php
namespace App\Repositories;

use App\Models\Withdrawal;
use Illuminate\Support\Arr;
use App\Services\ResponseAPI;
use App\Factories\AggregatorFactory;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\CreateWithdrawalRequest;
use App\Interfaces\WithdrawalRepositoryInterface;
use App\Services\WithdrawalService;

class WithdrawalRepository implements WithdrawalRepositoryInterface
{
    use ResponseAPI;

    protected $withdrawalService;

    public function __construct(WithdrawalService $withdrawalService)
    {
        $this->withdrawalService = $withdrawalService;
    }

    public function checkWithdrawalStatusOfBookmaker($withdrawal_id)
    {
        try {

            $statusData = $this->withdrawalService->checkStatus($withdrawal_id);
            if($statusData){
                return $this->success($statusData);
            }else{
                return $this->error404('Withdrawal ID');
            }

        } catch (\Exception $e) {
            return $this->error(check_http_response_code($e->getCode()), show_trace_in_error($e->getTrace()), $e->getMessage());
        }

    }

    public function createWithdrawal(CreateWithdrawalRequest $request)
    {
        try {

            $statusData = $this->withdrawalService->checkStatus($request->withdrawal_id);

            if( $statusData ){

                $response = $this->withdrawalService->makeWithdrawalRequest($request->account_alias, $request->amount, $request->withdraw_mode, $request->withdrawal_id);

                if($response){
                    return $this->success();
                }else{
                    return $this->failed(500, [], 'The request failed.');
                }

            } else {
                return $this->error404( 'Withdrawal ID' );
            }

        } catch (\Exception $e) {
            return $this->error(check_http_response_code($e->getCode()), show_trace_in_error($e->getTrace()), $e->getMessage());
        }
    }
}
