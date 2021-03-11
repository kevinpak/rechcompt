<?php

namespace App\Factories;

use App\Services\ResponseAPI;
use App\Services\KkiapayAggregator;

class AggregatorFactory
{
    use ResponseAPI;

    public function getAggregator (String $type)
    {
        switch ($type) {
            case 'kkiapay':
                return new KkiapayAggregator();
                break;

            default:
                throw new \Exception("Aggregator method not supported");
                break;
        }
    }
}
