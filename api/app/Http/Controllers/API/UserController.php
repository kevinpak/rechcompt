<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Interfaces\UserRepositoryInterface;

class UserController extends Controller
{
    protected $userRepositoryInterface;

    public function __construct(UserRepositoryInterface $userRepositoryInterface)
    {
        $this->userRepositoryInterface = $userRepositoryInterface;
    }

    public function index()
    {
        return $this->userRepositoryInterface->getAllUsers();
    }

    public function store(CreateUserRequest $request)
    {
        return $this->userRepositoryInterface->createUser($request);
    }

    public function show($id)
    {
        return $this->userRepositoryInterface->getUserById($id);
    }

    public function update(UpdateUserRequest $request, $id)
    {
        return $this->userRepositoryInterface->updateUser($request, $id);
    }
}
