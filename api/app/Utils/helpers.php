<?php

if (!function_exists('great')) {
    function great()
    {
        echo "èka'san";
    }
}

if (!function_exists('available_status')) {
    function available_status()
    {
        return [
            'enable', 'validated', 'disable', 'pending',
            'blocked', 'failed'
        ];
    }
}

if (!function_exists('available_level_1_status')) {
    function available_level_1_status()
    {
        return [
            'enable', 'validated', 'disable'
        ];
    }
}

if (!function_exists('available_level_2_status')) {
    function available_level_2_status()
    {
        return [
            'enable', 'validated', 'disable', 'pending', 'rejected'
        ];
    }
}

if (!function_exists('available_level_3_status')) {
    function available_level_3_status()
    {
        return [
            'enable', 'validated', 'disable', 'pending',
            'blocked', 'failed', 'rejected'
        ];
    }
}

if (!function_exists('available_status_number')) {
    function available_status_number($status)
    {
        switch ($status) {
            case "enable":
                return 2;
                break;

            case "validated":
                    return 2;
                    break;

            case "disable":
                return 1;
                break;

            case "pending":
                    return 1;
                    break;

            case "blocked":
                return 0;
                break;

            case "failed":
                return 0;
                break;

            case "rejected":
                return 0;
                break;

            default:
                return '';
                break;
        }
    }
}

if (!function_exists('available_country')) {
    function available_country()
    {
        return [

            "AF", "ZA", "AL", "DZ", "DE", "AD", "AO", "AI", "AQ", "AG", "AN",
            "SA", "AR", "AM", "AW", "AU", "AT", "AZ", "BS", "BH", "BD", "BB",
            "BY", "BE", "BZ", "BJ", "BM", "BT", "BO", "BA", "BW", "BR", "BN",
            "BG", "BF", "BI", "KH", "CM", "CA", "CV", "EA", "CL", "CN", "CY",
            "CO", "KM", "CG", "KP", "KR", "CR", "CI", "HR", "CU", "DK", "DG",
            "DJ", "DM", "EG", "SV", "AE", "EC", "ER", "ES", "EE", "VA", "FM",
            "US", "ET", "FJ", "FI", "FR", "GA", "GM", "GE", "GS", "GH", "GI",
            "GR", "GD", "GL", "GP", "GU", "GT", "GG", "GN", "GQ", "GW", "GY",
            "GF", "HT", "HN", "HU", "BV", "CX", "CP", "AC", "IM", "NF", "AX",
            "KY", "IC", "CC", "CK", "FO", "HM", "FK", "MP", "MH", "UM", "SB",
            "TC", "VG", "VI", "IN", "ID", "IQ", "IR", "IE", "IS", "IL", "IT",
            "JM", "JP", "JE", "JO", "KZ", "KE", "KG", "KI", "KW", "LA", "LS",
            "LV", "LB", "LR", "LY", "LI", "LT", "LU", "MK", "MG", "MY", "MW",
            "MV", "ML", "MT", "MA", "MQ", "MU", "MR", "YT", "MX", "MD", "MC",
            "MN", "ME", "MS", "MZ", "MM", "NA", "NR", "NP", "NI", "NE", "NG",
            "NU", "NO", "NC", "NZ", "OM", "UG", "UZ", "PK", "PW", "PA", "PG",
            "PY", "NL", "PE", "PH", "PN", "PL", "PF", "PR", "PT", "QA", "HK",
            "MO", "QO", "CF", "CD", "DO", "CZ", "RE", "RO", "GB", "RU", "RW",
            "EH", "BL", "KN", "SM", "MF", "PM", "VC", "SH", "LC", "WS", "AS",
            "ST", "SN", "RS", "CS", "SC", "SL", "SG", "SK", "SI", "SO", "SD",
            "LK", "SE", "CH", "SR", "SJ", "SZ", "SY", "TJ", "TW", "TZ", "TD",
            "TF", "IO", "PS", "TH", "TL", "TG", "TK", "TO", "TT", "TA", "TN",
            "TM", "TR", "TV", "UA", "EU", "UY", "VU", "VE", "VN", "WF", "YE",
            "ZM", "ZW"

        ];
    }
}

// check_http_response_code
if (!function_exists('check_http_response_code')) {
    function check_http_response_code($code) {

        $status_code = array(
            "100","101","200","201","202","203","204",
            "205","206","300","301","302","303","304","305","306",
            "307","400","401","402","403","404","405","406","407",
            "408","409","410","411","412","413","414","415","416","417",
            "500","501","502","503","504","505"
        );

        if(in_array($code, $status_code)){
            return $code;
        }else{
            return 500;
        }
    }
}

if (!function_exists('show_trace_in_error')) {
    function show_trace_in_error($trace) {

        if(config('env') != 'production'){
            return $trace;
        }else {
            return [];
        }
    }
}

if (!function_exists('getIp')) {
    function getIp(){
        foreach (array('HTTP_CLIENT_IP', 'HTTP_X_FORWARDED_FOR', 'HTTP_X_FORWARDED', 'HTTP_X_CLUSTER_CLIENT_IP', 'HTTP_FORWARDED_FOR', 'HTTP_FORWARDED', 'REMOTE_ADDR') as $key){
            if (array_key_exists($key, $_SERVER) === true){
                foreach (explode(',', $_SERVER[$key]) as $ip){
                    $ip = trim($ip); // just to be safe
                    if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE) !== false){
                        return $ip;
                    }
                }
            }
        }
        return request()->ip(); // it will return server ip when no client ip found
    }
}

if (!function_exists('aggregator')) {
    /**
     * Retrieve aggregator informations from config file
     */
    function aggregator($argument){

        $aggregator_name = config('payment.default');

        $availableArguments = [
            'public_key',
            'private_key',
            'secret',
        ];

        if(in_array($argument, $availableArguments)){
            return config("payment.aggregators.$aggregator_name")[$argument];
        } else {
            return 'Not found!';
        }

    }
}

if (!function_exists('generate_random_code')) {
    function generate_random_code(){
        $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_";
        $chars = str_shuffle( $chars );
        return substr( str_shuffle( $chars ), 0, 12 );
    }
}
