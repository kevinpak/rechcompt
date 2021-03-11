<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Interfaces\LoginHistoryRepositoryInterface;

class CallbackController extends Controller
{

    public function index(Request $request)
    {
        return $request->query();
    }

    public function show()
    {

    }

    public function store(Request $request)
    {

    }
}
