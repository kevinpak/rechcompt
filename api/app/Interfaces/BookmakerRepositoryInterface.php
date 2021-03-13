<?php

namespace App\Interfaces;

use Illuminate\Http\Request;

interface BookmakerRepositoryInterface
{
    /**
     * Check if transaction_id exists and is valid
     *
     * @param   $transaction_id
     *
     * @method  POST    $prefix/login
     * @access  public
     */
    public function checkTransactionStatus($transaction_id);

    public function changeTransactionStatus($transaction_id);

}
