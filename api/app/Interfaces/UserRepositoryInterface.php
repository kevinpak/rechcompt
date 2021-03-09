<?php

namespace App\Interfaces;
use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\UpdateUserRequest;

interface UserRepositoryInterface
{
    /**
     * Get all Users
     *
     * @method  GET api/vx/customer/users
     * @access  public
     */
    public function getAllUsers();

    /**
     * Get one User By ID
     *
     * @param   $id
     *
     * @method  GET api/vx/customer/users/$id
     * @access  public
     */
    public function getUserById($id);

    /**
     * Create Users
     *
     * @param   \App\Http\Requests\CreateUserRequest    $request
     *
     * @method  POST    api/vx/customer/users
     * @access  public
     */
    public function createUser(CreateUserRequest $request);

    /**
     * Update Users
     *
     * @param   \App\Http\Requests\UpdateUserRequest    $request
     * @param   integer                                     $id
     *
     * @method  PUT     api/vx/customer/users/$id
     * @access  public
     */
    public function updateUser(UpdateUserRequest $request, $id = null);

}
