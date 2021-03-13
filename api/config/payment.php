<?php

return [

    'default' => env('PAYMENT_AGGREGATOR', 'kkiapay'),

    'aggregators' => [

        'kkiapay' => [
            'public_key' => env('KKIAPAY_PUBLIC_KEY'),
            'private_key' => env('KKIAPAY_PRIVATE_KEY'),
            'secret' => env('KKIAPAY_SECRET'),
        ],
    ],

    'redirect_url' => env('PAYMENT_REDIRECT_URL'),

    'withdrawal_url' => env('PAYMENT_WITHDRAWAL_URL'),

];
