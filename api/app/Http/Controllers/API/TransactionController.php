<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Interfaces\TransactionRepositoryInterface;

class TransactionController extends Controller
{
    protected $transactionRepositoryInterface;

    public function __construct(TransactionRepositoryInterface $transactionRepositoryInterface)
    {
        $this->transactionRepositoryInterface = $transactionRepositoryInterface;
    }

    public function index()
    {
        return $this->transactionRepositoryInterface->getAllTransactions();
    }

}
