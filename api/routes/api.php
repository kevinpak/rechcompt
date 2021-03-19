<?php

use App\Http\Controllers\API\LoginHistoryController;
use App\Http\Controllers\API\AggregatorCallbackController;
use App\Http\Controllers\API\BookmakerController;
use App\Http\Controllers\API\UserController;
use App\Http\Controllers\API\ForgotPasswordController;
use App\Http\Controllers\API\ResetPasswordController;
use App\Http\Controllers\API\WithdrawalController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\API\EmailVerificationController;
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

    Route::prefix('aggregator')->group(function () {

        Route::post('payment-callback', [AggregatorCallbackController::class, 'handlePostCallback']);
        Route::get('payment-callback', [AggregatorCallbackController::class, 'handleGetCallback']);

    });

    Route::prefix('bookmaker')->group(function () {

        Route::get('transactions/{transaction_id}/status', [BookmakerController::class, 'checkTransactionStatus']);
        Route::put('transactions/{transaction_id}/status', [BookmakerController::class, 'changeTransactionStatus']);

    });

    Route::prefix('customer')->group(function () {

        Route::middleware(['guest'])->group(function () {

            Route::post('login', [AuthController::class, 'login']);
            Route::apiResource('users', UserController::class)->only('store');

            Route::post('forgot-password', ForgotPasswordController::class);
            Route::post('reset-password', ResetPasswordController::class);

            Route::get('email/verify/{id}', [EmailVerificationController::class, 'verify'])->name('verification.verify');

        });

        Route::middleware(['auth:api, isEmailVerified'])->group(function () {

            Route::post('logout', [AuthController::class, 'logout']);
            Route::apiResource('users', UserController::class)->except('store');

            Route::get('transactions', [TransactionController::class, 'index']);

            Route::get('withdrawals/{withdrawal_id}/status', [WithdrawalController::class, 'checkWithdrawalStatusOfBookmaker']);
            Route::post('withdrawals', [WithdrawalController::class, 'createWithdrawal']);

            Route::get('email/resend', [EmailVerificationController::class, 'resend'])->name('verification.send')
            ->withoutMiddleware('isEmailVerified');

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
