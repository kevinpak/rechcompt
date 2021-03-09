<?php

namespace App\Services;

trait CreateToken
{

    public function createToken($currentUser)
    {

        return $currentUser->createToken('Rechcompt API Token');

    }

    public function getToken($currentUser)
    {

        $tokenResult = $this->createToken($currentUser);
        $token = $tokenResult->token;

        $token->save();

        return [
            'access_token' => $tokenResult->accessToken,
            'token_type' => 'Bearer',
            'expires_at' => $tokenResult->token->expires_at,
            'first_name' => $currentUser->first_name,
            'last_name' => $currentUser->last_name,
            // 'users_group' => $currentUser->role->name,
        ];
    }

}
