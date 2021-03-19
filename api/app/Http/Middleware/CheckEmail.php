<?php

namespace App\Http\Middleware;

use App\Services\ResponseAPI;
use Closure;
use Illuminate\Http\Request;

class CheckEmail
{
    use ResponseAPI;
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if(!auth()->user()->hasVerifiedEmail()){
            return $this->error(403, [], 'Email not verified');
        }
        return $next($request);
    }
}
