<?php

namespace App\Interfaces;

use App\Http\Requests\CreateWithdrawalRequest;

interface WithdrawalRepositoryInterface
{
    /**
     * Get all Withdrawals
     *
     * @access  public
     */
    public function checkWithdrawalStatusOfBookmaker($withdrawal_id);

    /**
     * Check and store transaction  in db
     *
     * @param   \App\Http\Requests\CreateWithdrawalRequest    $request
     *
     * @method  POST    $prefix/login
     * @access  public
     */
    public function createWithdrawal(CreateWithdrawalRequest $request);

}
