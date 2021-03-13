<?php

namespace App\Providers;

use App\Interfaces\AuthRepositoryInterface;
use App\Interfaces\AggregatorCallbackRepositoryInterface;
use App\Interfaces\BookmakerRepositoryInterface;
use App\Interfaces\LoginHistoryRepositoryInterface;
use App\Interfaces\TransactionRepositoryInterface;
use App\Interfaces\UserRepositoryInterface;
use App\Interfaces\WithdrawalRepositoryInterface;
use App\Repositories\AuthRepository;
use App\Repositories\AggregatorCallbackRepository;
use App\Repositories\BookmakerRepository;
use App\Repositories\LoginHistoryRepository;
use App\Repositories\TransactionRepository;
use App\Repositories\UserRepository;
use App\Repositories\WithdrawalRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        // Register Interface and Repository in here
        // You must place Interface in first place
        // If you dont, the Repository will not get readed.

        $this->app->bind(
            UserRepositoryInterface::class,
            UserRepository::class
        );

        $this->app->bind(
            AuthRepositoryInterface::class,
            AuthRepository::class
        );

        $this->app->bind(
            LoginHistoryRepositoryInterface::class,
            LoginHistoryRepository::class
        );

        $this->app->bind(
            TransactionRepositoryInterface::class,
            TransactionRepository::class
        );

        $this->app->bind(
            AggregatorCallbackRepositoryInterface::class,
            AggregatorCallbackRepository::class
        );

        $this->app->bind(
            BookmakerRepositoryInterface::class,
            BookmakerRepository::class
        );

        $this->app->bind(
            WithdrawalRepositoryInterface::class,
            WithdrawalRepository::class
        );

    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
