<?php

namespace App\Services;

trait ResponseAPI
{
    /**
     * Core of response
     *
     * @param   string          $message
     * @param   array|object    $data
     * @param   integer         $code
     * @param   string         $status
     */
    public function coreResponse($status, $code, $data = null, $message = null)
    {
        switch ($status) {
            case 'success':
                return response()->json([
                    'status' => 'success',
                    'data' => $data
                ], $code);
                break;

            case 'failed':
                return response()->json([
                    'status' => 'failed',
                    'message' => $message,
                    'errors' => $data,
                ], $code);
                break;

            case 'error':
                return response()->json([
                    'status' => 'error',
                    'message' => $message,
                    'errors' => $data,
                    'code' => $code
                ], $code);
                break;

            default:
                return response()->json('Invalid status parameter provided for the JSON formater', 500);
                break;
        }
    }

    /**
     * Send success response
     * @param   array|object    $data
     */
    public function success($data = null)
    {//TODO: Add 201 created status
        return $this->coreResponse('success', 200, $data);
    }

    /**
     * Send faileded response
     *
     * @param   array|object    $data
     * @param   integer         $code
     */
    public function failed($code = 403, $data, $message = 'Request failed')
    {
        return $this->coreResponse('failed', $code, $data, $message);
    }

    /**
     * Send error response
     *
     * @param   string          $message
     * @param   array|object    $data
     * @param   integer         $code
     */
    public function error($code, $data = null, $message = "Une erreur s'est produite.")
    {
        return $this->coreResponse('error', $code, $data, $message);
    }

    public function error404($target = '')
    {
        return $this->error(404, [], "$target Not Found ! ");
    }
}
