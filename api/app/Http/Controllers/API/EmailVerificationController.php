<?php

namespace App\Http\Controllers\API;

use App\Models\User;
use App\Services\ResponseAPI;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EmailVerificationController extends Controller
{
    use ResponseAPI;

    public function verify($user_id, Request $request) {
        if (!$request->hasValidSignature()) {
            return redirect(config('auth.email.users.verify_url').'?status=fail');
        }

        $user = User::find($user_id);
        if(is_null($user)) {
            return $this->error404('User');
        }

        if (!$user->hasVerifiedEmail()) {
            $user->markEmailAsVerified();
        }

        return redirect(config('auth.email.users.verify_url').'?status=success');
    }

    public function resend() {

        //auth()->user()->hasVerifiedEmail()
        $user = User::find(Auth::id());
        if(is_null($user)){
            return $this->error404('User');
        }

        if ($user->hasVerifiedEmail()) {
            return $this->error(401, [], 'Email already verified.');
        }

        $user->sendEmailVerificationNotification();

        return $this->success();
    }
}
