<?php

namespace App\Services;

use App\Models\LoginHistory;

class AuthService{

    public function updateLoginHistory($request, $type){
        LoginHistory::create([
            'user_id'    => $request->user()->id,
            'ip_address' => getIp(),
            'type'       => $type,
        ]);
    }

}
