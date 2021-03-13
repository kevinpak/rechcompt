<?php
namespace App\Repositories;

use App\Models\Transaction;
use Illuminate\Support\Arr;
use App\Services\ResponseAPI;
use App\Factories\AggregatorFactory;
use Illuminate\Support\Facades\Auth;
use App\Http\Requests\CreateTransactionRequest;
use App\Interfaces\TransactionRepositoryInterface;

class TransactionRepository implements TransactionRepositoryInterface
{
    use ResponseAPI;

    protected $aggregatorFactory;

    public function __construct(AggregatorFactory $aggregatorFactory)
    {
        $this->aggregatorFactory = $aggregatorFactory;
    }

    public function getAllTransactions()
    {
        return $this->success(Transaction::where('user_id', Auth::id())->get());
    }

    public function createTransaction(CreateTransactionRequest $request)
    {
        //
    }
}
