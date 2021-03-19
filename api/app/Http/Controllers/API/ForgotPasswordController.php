<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Password;
use App\Services\ResponseAPI;

class ForgotPasswordController extends Controller
{
    use ResponseAPI;

    public function __invoke(Request $request){
        $request->validate(['email' => 'required|email']);

        $status = Password::sendResetLink(
            $request->only('email')
        );

        if($status === Password::INVALID_USER){
            $this->success();
        }

        return $status === Password::RESET_LINK_SENT
            ? $this->success()
            : $this->error('500', [], __($status));
    }
}
