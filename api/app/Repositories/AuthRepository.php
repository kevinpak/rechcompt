<?php
namespace App\Repositories;

use App\Services\CreateToken;
use App\Services\ResponseAPI;
use App\Services\AuthService;
use App\Http\Requests\AuthRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Interfaces\AuthRepositoryInterface;

class AuthRepository implements AuthRepositoryInterface
{
    use ResponseAPI;
    use CreateToken;

    protected $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }

    public function login(AuthRequest $request)
    {
        DB::beginTransaction();
        try {

            $credentials = request(['email', 'password']);
            if(Auth::attempt($credentials)) {
                $token = $this->getToken($request->user());
            } else {
                return $this->failed(401, ['error' => 'Access denied.']);
            }

            $this->authService->updateLoginHistory($request, 'login');

            DB::commit();

            return $this->success(['token' => $token]);
        } catch (\Exception $e) {
            DB::rollBack();
            return $this->error(check_http_response_code($e->getCode()), show_trace_in_error($e->getTrace()), $e->getMessage());
        }
    }

    public function logout(AuthRequest $request)
    {
        DB::beginTransaction();
        try {
            $request->user()->token()->revoke();

            $this->authService->updateLoginHistory($request, 'logout');

            DB::commit();

            return $this->success();
        } catch (\Exception $e) {
            DB::rollBack();
            return $this->error(check_http_response_code($e->getCode()), show_trace_in_error($e->getTrace()), $e->getMessage());
        }
    }
}
