<?php

namespace App\Interfaces;

use App\Http\Requests\CreateTransactionRequest;

interface TransactionRepositoryInterface
{
    /**
     * Check and store transaction  in db
     *
     * @param   \App\Http\Requests\CreateTransactionRequest    $request
     *
     * @method  POST    $prefix/login
     * @access  public
     */
    public function createTransaction(CreateTransactionRequest $request);

}
