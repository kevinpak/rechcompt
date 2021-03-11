<?php

namespace App\Services;

use App\Interfaces\AggregatorInterface;

class KkiapayAggregator implements AggregatorInterface
{
    protected $kkiapay;
    protected $transactionDetails;

    public function __construct()
    {
        $public_key = aggregator('public_key');
        $private_key = aggregator('private_key');
        $secret = aggregator('secret');

        $this->kkiapay = new \Kkiapay\Kkiapay($public_key,
        $private_key,
        $secret,
        $sandbox = true);
    }

    public function verifyTransaction($transaction_id)
    {
        $data = $this->kkiapay->verifyTransaction($transaction_id);

        if($data->status == 'SUCCESS'){
            $this->transactionDetails = $data;
            return true;
        } else {
            return false;
        }
    }

    public function getTransactionDetails(){
        return $this->transactionDetails;
    }
}
