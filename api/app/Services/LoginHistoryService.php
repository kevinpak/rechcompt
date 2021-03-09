<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Support\Arr;

class LoginHistoryService{

    public function addUserInformations($arrayOfData){
        foreach($arrayOfData['data'] as $key => $data){
            $user = User::find($data['user_id']);

            $arrayOfData['data'][$key] = Arr::add($arrayOfData['data'][$key], 'first_name', $user->first_name);
            $arrayOfData['data'][$key] = Arr::add($arrayOfData['data'][$key], 'last_name', $user->last_name);
        }

        return $arrayOfData;
    }

}
