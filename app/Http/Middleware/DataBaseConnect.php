<?php

namespace App\Http\Middleware;
use Closure;
use DB;
use Config;

class DataBaseConnect
{
    /**
     * 多个数据库间切换，手动配置连接麻烦，
     * 为了单一职能，便于维护通过中间件形式动态配置数据库连接
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
//         $connections = DB::table('connection')->where('status','Y')->get();
//        $connections->each(function($item){
//
//                $temp = ["driver" => "mysql",
//                  "host" => $item->host,
//                  "port" => $item->port,
//                  "database" => $item->database,
//                  "username" => $item->username,
//                  "password" => $item->password,
//                  "unix_socket" => "",
//                  "charset" => "utf8mb4",
//                  "collation" => "utf8mb4_unicode_ci",
//                  "prefix" => "",
//                  "strict" => true,
//                  "engine" => null];
//
//                Config::set('database.connections.'.$item->connect,$temp);
//            });

        return $next($request);
    }
}
