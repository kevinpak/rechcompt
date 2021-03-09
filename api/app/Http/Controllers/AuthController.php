<?php

namespace App\Http\Controllers;

use App\Interfaces\AuthRepositoryInterface;
use App\Http\Requests\AuthRequest;

class AuthController extends Controller
{
    protected $authRepositoryInterface;

    /**
     * Create a new constructor for this controller
     */
    public function __construct(AuthRepositoryInterface $authRepositoryInterface)
    {
        $this->authRepositoryInterface = $authRepositoryInterface;
    }

    public function login(AuthRequest $request)
    {
        return $this->authRepositoryInterface->login($request);
    }

    /**
     * Logout user (Revoke the token)
     *
     * @return [string] message
     */
    public function logout(AuthRequest $request)
    {
        return $this->authRepositoryInterface->logout($request);
    }
}
