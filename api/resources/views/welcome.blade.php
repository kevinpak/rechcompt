<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Rechcompt API</title>

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <!-- Prism CSS -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/themes/prism.min.css"
        integrity="sha512-tN7Ec6zAFaVSG3TpNAKtk4DOHNpSwKHxxrsiw4GHKESGPs5njn/0sMCUMl2svV4wo4BK/rCP7juYz+zx+l6oeQ=="
        crossorigin="anonymous" />

    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

    <style>
        body {
            font-family: 'Nunito';
        }

        .version-badge {
            position: relative;
            top: -19px;
            font-size: 15px;
        }

        .accordion-button {
            font-size: 30px;
            font-weight: bold;
        }

    </style>
</head>

<body>
    <div class="container-fluid text-center mt-2">
        <h1>
            Rechcompt <span style="color: rgb(211, 99, 25); font-weight: bold;">API</span>
            <small class="version-badge">
                <span class="badge rounded-pill bg-secondary">v1</span>
            </small>
        </h1>
    </div>

    <div class="container mb-3">
        {{-- <div class="alert alert-info" role="alert">
            Replace {bearerToken} by token got while login
          </div> --}}

        <!-- Customer -->
        <div class="accordion mb-4" id="accordion-1">

            <button type="button" class="btn btn-light btn-outline-primary btn-lg my-1">Customer</button>

            <!-- Auth -->
            <div class="accordion-item">
                <h2 class="accordion-header" id="accordion-1__heading-1">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#accordion-1__collapse-1" aria-expanded="false" aria-controls="accordion-1__collapse-1">
                        Auth
                    </button>
                </h2>
                <div id="accordion-1__collapse-1" class="accordion-collapse collapse" aria-labelledby="accordion-1__heading-1"
                    data-bs-parent="#accordion-1">
                    <div class="accordion-body">

                        <x-api-doc-operation request-method="post" operation-name="Login" http-code="
                        curl --request POST \
                        --url http://rechcompt.dev-spw.com/api/api/v1/customer/login \
                        --header 'Accept: application/json' \
                        --header 'Content-Type: multipart/form-data' \
                        --header 'content-type: multipart/form-data; boundary=---011000010111000001101001' \
                        --form email=boko@gmail.com \
                        --form password=rech_pass
                        " />

                        <x-api-doc-operation request-method="post" operation-name="Logout" http-code="
                        curl --request POST \
                        --url http://rechcompt.dev-spw.com/api/api/v1/customer/logout \
                        --header 'Accept: application/json' \
                        --header 'Authorization: Bearer {bearerToken}'
                        " />

                    </div>
                </div>
            </div>

            <!-- Users -->
            <div class="accordion-item">
                <h2 class="accordion-header" id="accordion-1__heading-2">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#accordion-1__collapse-2" aria-expanded="false" aria-controls="accordion-1__collapse-2">
                        Users
                    </button>
                </h2>
                <div id="accordion-1__collapse-2" class="accordion-collapse collapse" aria-labelledby="accordion-1__heading-2"
                    data-bs-parent="#accordion-1">
                    <div class="accordion-body">

                        <x-api-doc-operation request-method="post" operation-name="Create" http-code="
                          curl --request POST \
                          --url http://rechcompt.dev-spw.com/api/api/v1/customer/users \
                          --header 'Accept: application/json' \
                          --header 'Content-Type: multipart/form-data; boundary=---011000010111000001101001' \
                          --form 'first_name=Yémalin' \
                          --form last_name=BOKO \
                          --form email=boko@gmail.com \
                          --form 'phone=+229 97010200' \
                          --form password=rech_pass \
                          --form country=BJ
                          " />

                        <x-api-doc-operation request-method="update" operation-name="Update" http-code="
                          curl --request POST \
                          --url http://rechcompt.dev-spw.com/api/api/v1/customer/users/1 \
                          --header 'Accept: application/json' \
                          --header 'Authorization: Bearer {bearerToken}' \
                          --header 'Content-Type: multipart/form-data; boundary=---011000010111000001101001' \
                          --form 'first_name=Yémanlin' \
                          --form last_name=BOKO \
                          --form 'phone=+229 97010204' \
                          --form password=rech_pass \
                          --form country=BJ \
                          --form _method=PUT
                          " />

                        <x-api-doc-operation request-method="get" operation-name="Show" http-code="
                          curl --request GET \
                          --url http://rechcompt.dev-spw.com/api/api/v1/customer/users/1 \
                          --header 'Accept: application/json' \
                          --header 'Authorization: Bearer {bearerToken}'
                          " />

                        <x-api-doc-operation request-method="get" operation-name="Get All" http-code="
                          curl --request GET \
                          --url http://rechcompt.dev-spw.com/api/api/v1/customer/users \
                          --header 'Accept: application/json' \
                          --header 'Authorization: Bearer {bearerToken}'
                          " />

                    </div>
                </div>
            </div>

            <!-- Withdrawals -->
            <div class="accordion-item">
                <h2 class="accordion-header" id="accordion-1__heading-3">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#accordion-1__collapse-3" aria-expanded="false" aria-controls="accordion-1__collapse-3">
                        Withdrawals
                    </button>
                </h2>
                <div id="accordion-1__collapse-3" class="accordion-collapse collapse" aria-labelledby="accordion-1__heading-3"
                    data-bs-parent="#accordion-1">
                    <div class="accordion-body">

                        <x-api-doc-operation request-method="post" operation-name="Create" http-code="
                          curl --request POST \
                          --url http://rechcompt.dev-spw.com/api/api/v1/customer/withdrawals/ \
                          --header 'Accept: application/json' \
                          --header 'Authorization: Bearer {bearerToken}' \
                          --header 'Content-Type: multipart/form-data; boundary=---011000010111000001101001' \
                          --form account_alias=97010203 \
                          --form amount=29000 \
                          --form withdraw_mode=mtn-benin \
                          --form withdrawal_id=code-betwinner
                          " />

                        <x-api-doc-operation request-method="get" operation-name="Verify Code" http-code="
                          curl --request GET \
                          --url http://rechcompt.dev-spw.com/api/api/v1/customer/withdrawals/{withdrawalCode}/status \
                          --header 'Accept: application/json' \
                          --header 'Authorization: Bearer {bearerToken}' \
                          --header 'Content-Type: multipart/form-data; boundary=---011000010111000001101001'
                          " />

                    </div>
                </div>
            </div>

            <!-- Transactions -->
            <div class="accordion-item">
                <h2 class="accordion-header" id="accordion-1__heading-4">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#accordion-1__collapse-4" aria-expanded="false" aria-controls="accordion-1__collapse-4">
                        Transactions
                    </button>
                </h2>
                <div id="accordion-1__collapse-4" class="accordion-collapse collapse" aria-labelledby="accordion-1__heading-4"
                    data-bs-parent="#accordion-1">
                    <div class="accordion-body">

                        <x-api-doc-operation request-method="get" operation-name="Get All" http-code="
                          curl --request GET \
                          --url http://rechcompt.dev-spw.com/api/api/v1/customer/transactions \
                          --header 'Accept: application/json' \
                          --header 'Authorization: Bearer {bearerToken}' \
                          --header 'Content-Type: multipart/form-data; boundary=---011000010111000001101001'
                          " />

                    </div>
                </div>
            </div>
        </div>

        <!-- Admin -->
        <div class="accordion mb-4" id="accordion-2">

            <button type="button" class="btn btn-light btn-outline-primary btn-lg my-1">Admin</button>

            <!-- Login History -->
            <div class="accordion-item">
                <h2 class="accordion-header" id="accordion-2__heading-2">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#accordion-2__collapse-2" aria-expanded="false" aria-controls="accordion-2__collapse-2">
                        Login History
                    </button>
                </h2>
                <div id="accordion-2__collapse-2" class="accordion-collapse collapse" aria-labelledby="accordion-2__heading-2"
                    data-bs-parent="#accordion-2">
                    <div class="accordion-body">

                        <x-api-doc-operation request-method="get" operation-name="Get All" http-code="
                        curl --request GET \
                        --url http://rechcompt.dev-spw.com/api/api/v1/admin/login-history \
                        --header 'Accept: application/json' \
                        --header 'Authorization: Bearer {bearerToken}'
                        " />

                        <x-api-doc-operation request-method="get" operation-name="Show" http-code="
                        curl --request GET \
                        --url http://rechcompt.dev-spw.com/api/api/v1/admin/login-history/{loginHistoryId} \
                        --header 'Accept: application/json' \
                        --header 'Authorization: Bearer {bearerToken}'
                        " />

                    </div>
                </div>
            </div>

        </div>

        <!-- Aggregator -->
        <div class="accordion mb-4" id="accordion-3">

            <button type="button" class="btn btn-light btn-outline-primary btn-lg my-1">Aggregator</button>

            <!-- Payment -->
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#accordion-3__collapse-3" aria-expanded="false" aria-controls="accordion-3__collapse-3">
                        Payment
                    </button>
                </h2>
                <div id="accordion-3__collapse-3" class="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordion-3">
                    <div class="accordion-body">

                        <x-api-doc-operation request-method="post" operation-name="Callback" http-code="
                        curl --request POST \
                        --url http://rechcompt.dev-spw.com/api/api/v1/customer/aggregator/payment-callback \
                        --header 'Accept: application/json' \
                        --header 'Content-Type: multipart/form-data; boundary=---011000010111000001101001'
                        " />

                        <x-api-doc-operation request-method="get" operation-name="Callback" http-code="
                        curl --request GET \
                        --url http://rechcompt.dev-spw.com/api/api/v1/customer/aggregator/payment-callback \
                        --header 'Accept: application/json' \
                        --header 'Content-Type: multipart/form-data; boundary=---011000010111000001101001'
                        " />

                    </div>
                </div>
            </div>

        </div>

        <!-- Bookmaker -->
        <div class="accordion mb-4" id="accordion-4">

            <button type="button" class="btn btn-light btn-outline-primary btn-lg my-1">Bookmaker</button>

            <!-- Transactions -->
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                        data-bs-target="#accordion-4__collapse-4" aria-expanded="false" aria-controls="accordion-4__collapse-4">
                        Transactions
                    </button>
                </h2>
                <div id="accordion-4__collapse-4" class="accordion-collapse collapse" aria-labelledby="headingFour"
                    data-bs-parent="#accordion-4">
                    <div class="accordion-body">

                        <x-api-doc-operation request-method="post" operation-name="Verify Code" http-code="
                          curl --request POST \
                          --url http://rechcompt.dev-spw.com/api/api/v1/customer/transactions/{transactionCode}/status \
                          --header 'Accept: application/json' \
                          --header 'Content-Type: multipart/form-data; boundary=---011000010111000001101001'
                          " />

                        <x-api-doc-operation request-method="put" operation-name="Change Status Of Code"
                            http-code="
                          curl --request PUT \
                          --url http://rechcompt.dev-spw.com/api/api/v1/customer/transactions/{transactionCode}/status \
                          --header 'Accept: application/json' \
                          --header 'Content-Type: multipart/form-data; boundary=---011000010111000001101001'
                          " />

                    </div>
                </div>
            </div>

        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous">
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.23.0/prism.min.js"
        integrity="sha512-YBk7HhgDZvBxmtOfUdvX0z8IH2d10Hp3aEygaMNhtF8fSOvBZ16D/1bXZTJV6ndk/L/DlXxYStP8jrF77v2MIg=="
        crossorigin="anonymous"></script>
</body>

</html>
