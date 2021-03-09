<?php

use App\Http\Controllers\API\LoginHistoryController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('v1')->group(function () {

    Route::prefix('customer')->group(function () {

        Route::middleware(['guest'])->group(function () {

            Route::post('login', [AuthController::class, 'login']);
            Route::apiResource('users', UserController::class)->only('store');

        });

        Route::middleware(['auth:api'])->group(function () {

            Route::post('logout', [AuthController::class, 'logout']);
            Route::apiResource('users', UserController::class)->except('store');

        });

    });

    Route::prefix('admin')->group(function () {

        Route::middleware(['guest'])->group(function () {

        });

        Route::middleware(['auth:api'])->group(function () {

            Route::apiResource('login-history', LoginHistoryController::class)->only(['index', 'show']);

        });

    });

});
