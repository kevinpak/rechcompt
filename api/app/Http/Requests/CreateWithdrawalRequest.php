<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rule;
use Illuminate\Http\Exceptions\HttpResponseException;

class CreateWithdrawalRequest extends FormRequest
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
        return [
            'account_alias' => 'required|numeric',
            'withdraw_mode' => 'required|string',
            'amount' => 'required|numeric',
            'withdrawal_id' => 'required|string',
        ];
    }

}
