<?php

namespace App\Http\Middleware;

use Closure;
use JWTAuth;
use Route;

class JwtCheck
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {

        //判断是否登陆
        $userLogin = JWTAuth::parseToken()->authenticate();
        if(!$userLogin)
            response()->json(['error'=>'please login'],401);

        //判断是否为超级管理员@todo：增加is_super字段
        if($userLogin->is_super){
          return $next($request);
        }

        //权限判断
        if(!$userLogin->can(Route::currentRouteName())) {
              return response()->json([
                    'status' => -1,
                    'code' => 403,
                    'msg' => '您没有权限执行此操作'
                ]);

        }
        return $next($request);
    }
}
