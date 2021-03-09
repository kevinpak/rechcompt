<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Interfaces\LoginHistoryRepositoryInterface;

class LoginHistoryController extends Controller
{
    protected $loginHistoryRepositoryInterface;

    public function __construct(LoginHistoryRepositoryInterface $loginHistoryRepositoryInterface)
    {
        $this->loginHistoryRepositoryInterface = $loginHistoryRepositoryInterface;
    }

    public function index()
    {
        return $this->loginHistoryRepositoryInterface->getAllLoginHistory();
    }

    public function show($id)
    {
        return $this->loginHistoryRepositoryInterface->getLoginHistoryById($id);
    }
}
