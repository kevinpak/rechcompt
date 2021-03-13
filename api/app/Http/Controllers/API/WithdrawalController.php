<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\CreateWithdrawalRequest;
use App\Http\Controllers\Controller;
use App\Interfaces\WithdrawalRepositoryInterface;

class WithdrawalController extends Controller
{
    protected $withdrawalRepositoryInterface;

    public function __construct(WithdrawalRepositoryInterface $withdrawalRepositoryInterface)
    {
        $this->withdrawalRepositoryInterface = $withdrawalRepositoryInterface;
    }

    public function checkWithdrawalStatusOfBookmaker($withdrawal_id)
    {
        return $this->withdrawalRepositoryInterface->checkWithdrawalStatusOfBookmaker($withdrawal_id);
    }

    public function createWithdrawal(CreateWithdrawalRequest $request)
    {
        return $this->withdrawalRepositoryInterface->createWithdrawal($request);
    }

}
