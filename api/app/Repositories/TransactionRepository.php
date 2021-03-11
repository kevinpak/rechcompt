<?php
namespace App\Repositories;

use App\Services\ResponseAPI;
use App\Http\Requests\CreateTransactionRequest;
use App\Interfaces\TransactionRepositoryInterface;
use App\Models\Transaction;
use Illuminate\Support\Arr;
use App\Factories\AggregatorFactory;

class TransactionRepository implements TransactionRepositoryInterface
{
    use ResponseAPI;

    protected $aggregatorFactory;

    public function __construct(AggregatorFactory $aggregatorFactory)
    {
        $this->aggregatorFactory = $aggregatorFactory;
    }

    public function createTransaction(CreateTransactionRequest $request)
    {
        $aggregator = $this->aggregatorFactory->getAggregator(config('payment.default'));
        $isTransactionVerified = $aggregator->verifyTransaction($request->transaction_id);
        return $isTransactionVerified;
    }
}
