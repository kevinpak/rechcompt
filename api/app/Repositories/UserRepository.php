<?php
namespace App\Repositories;

use App\Services\ResponseAPI;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\CreateUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Interfaces\UserRepositoryInterface;
use App\Services\CreateToken;
use Illuminate\Support\Arr;

class UserRepository implements UserRepositoryInterface
{
    use ResponseAPI;
    use CreateToken;

    public function getAllUsers(){

        return $this->success(User::paginate(10));

    }

    public function getUserById($id){

        $user = User::find($id);
        if(is_null($user)){
            return $this->error404('User');
        }
        return $this->success($user);

    }

    public function createUser(CreateUserRequest $request){

        DB::beginTransaction();
        try {

            $user = User::create([
                'first_name'    => $request->first_name,
                'last_name'     => $request->last_name,
                'email'         => $request->email,
                'phone'         => $request->phone,
                'password'      => bcrypt($request->password),
                'country'       => $request->country,
            ]);

            DB::commit();
            return $this->success($this->getToken($user));
        } catch (\Exception $e) {
            DB::rollBack();
            return $this->error(check_http_response_code($e->getCode()), show_trace_in_error($e->getTrace()), $e->getMessage());
        }

    }

    public function updateUser(UpdateUserRequest $request, $id = null){

        $user = User::find($id);
        if(is_null($user)){
            return $this->error404('User');
        }

        DB::beginTransaction();
        try {

            $user->update([
                'first_name'    => $request->first_name,
                'last_name'     => $request->last_name,
                'email'         => $request->email,
                'phone'         => $request->phone,
                'password'      => bcrypt($request->password),
                'country'       => $request->country,
            ]);

            DB::commit();
            return $this->getUserById($user->id);
        } catch (\Exception $e) {
            DB::rollBack();
            return $this->error(check_http_response_code($e->getCode()), show_trace_in_error($e->getTrace()), $e->getMessage());
        }

    }

}
