<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Illuminate\Http\Exceptions\HttpResponseException;

class AuthRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        // "request()->route('login')" is just to verify if its a login request
        // to make an exception we use the actual authenticated user's id with "Auth::id()"
        return [
            'email' => request()->route('login') ?
                'required|email|max:255|unique:users' : 'nullable',
            'password' => request()->route('login') ?
                'required|max:50' : 'nullable'
        ];
    }

}
