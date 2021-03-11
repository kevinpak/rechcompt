<?php

namespace App\Interfaces;

use Illuminate\Http\Request;

interface AggregatorCallbackRepositoryInterface
{
    /**
     * Check and store transaction  in db
     *
     * @param   \Illuminate\Http\Request    $request
     *
     * @method  POST    $prefix/login
     * @access  public
     */
    public function handlePostCallback(Request $request);

    /**
     * Check and store transaction  in db
     *
     * @param   \Illuminate\Http\Request    $request
     *
     * @method  POST    $prefix/login
     * @access  public
     */
    public function handleGetCallback(Request $request);

}
