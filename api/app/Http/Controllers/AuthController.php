<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Services\ResponseAPI;
use App\Services\CreateToken;

class AuthController extends Controller
{
    use ResponseAPI;
    use CreateToken;

    public function login(Request $request){

        $credentials = request(['email', 'password']);
        if(Auth::attempt($credentials)) {
            $token = $this->getToken($request->user());
            return $this->success(['token' => $token]);
        } else {
            return $this->failed(401, ['error' => 'Access denied.']);
        }

    }
}
