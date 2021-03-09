<?php

namespace App\Interfaces;

use App\Http\Requests\AuthRequest;

interface AuthRepositoryInterface
{
    /**
     * Login user and create token
     *
     * @param   \App\Http\Requests\AuthRequest    $request
     *
     * @method  POST    $prefix/login
     * @access  public
     */
    public function login(AuthRequest $request);

    /**
     * Logout user (Revoke the token)
     *
     * @param   \App\Http\Requests\AuthRequest    $request
     *
     * @method  POST    $prefix/logout
     * @access  public
     */
    public function logout(AuthRequest $request);
}
