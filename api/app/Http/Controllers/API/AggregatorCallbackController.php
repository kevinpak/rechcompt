<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\CreateAggregatorCallbackRequest;
use App\Interfaces\AggregatorCallbackRepositoryInterface;

class AggregatorCallbackController extends Controller
{
    protected $aggregatorCallbackRepositoryInterface;

    public function __construct(AggregatorCallbackRepositoryInterface $aggregatorCallbackRepositoryInterface)
    {
        $this->aggregatorCallbackRepositoryInterface = $aggregatorCallbackRepositoryInterface;
    }

    public function handleGetCallback(Request $request)
    {
        return $this->aggregatorCallbackRepositoryInterface->handleGetCallback($request);
    }

    public function handlePostCallback(Request $request)
    {
        return $this->aggregatorCallbackRepositoryInterface->handlePostCallback($request);
    }

}
