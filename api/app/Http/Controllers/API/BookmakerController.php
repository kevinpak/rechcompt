<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Interfaces\BookmakerRepositoryInterface;

class BookmakerController extends Controller
{
    protected $bookmakerRepositoryInterface;

    public function __construct(BookmakerRepositoryInterface $bookmakerRepositoryInterface)
    {
        $this->bookmakerRepositoryInterface = $bookmakerRepositoryInterface;
    }

    public function checkTransactionStatus($transaction_id)
    {
        return $this->bookmakerRepositoryInterface->checkTransactionStatus($transaction_id);
    }

    public function changeTransactionStatus($transaction_id)
    {
        return $this->bookmakerRepositoryInterface->changeTransactionStatus($transaction_id);
    }

}
