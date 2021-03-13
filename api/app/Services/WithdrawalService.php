<?php

namespace App\Services;
use Illuminate\Support\Facades\Http;
use App\Jobs\ProcessUpdateBookmakerWithrawalStatus;

class WithdrawalService{


    public function checkStatus($withdrawal_id)
    {
        $api_url = config('withdrawal.api.check_status').$withdrawal_id.'/status';

        $response = Http::withHeaders([
            'Accept' => 'application/json',
        ])->get($api_url);

        if ($response['response_code'] == '00') {
            return $response['data'];
        }else {
            return false;
        }
    }

    public function makeWithdrawalRequest($account_alias, $amount, $withdraw_mode, $withdrawal_id)
    {
        $api_url = config('payment.withdrawal_url');

        $response = Http::post($api_url, [
            "account_alias" => $account_alias,
            "amount" => $amount,
            "withdraw_mode" => $withdraw_mode,
        ]);

        if ($response->successful()) {
            return $this->updateStatusOnBookmaker($withdrawal_id);
        }else {
            return false;
        }
    }

    public function updateStatusOnBookmaker($withdrawal_id)
    {
        ProcessUpdateBookmakerWithrawalStatus::dispatch($withdrawal_id);

        return true;
    }
}
