<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/7/7
 * Time: 15:51
 */
namespace App\Api\Backend\Controllers\Systerm;

use Illuminate\Http\Request;
use App\Api\BaseController;
use Illuminate\Support\Facades\Artisan;

class OptimizeController extends BaseController
{
    /***
     * 代码执行 php artisan optimize方法
     * @return \Illuminate\Http\JsonResponse
     */
    public function composer()
    {
        $exitCode = Artisan::call('optimizi', [
        ]);
        return response()->json(['msg' => $exitCode]);
    }

    /***
     * 清除路由缓存
     * @return \Illuminate\Http\JsonResponse
     */
    public function routeClear()
    {
        $exitCode = Artisan::call('route:clear', [
        ]);
        return response()->json(['msg' => $exitCode]);
    }

    /***
     * 生成路由缓存
     * 注意本项目需要执行两个命令
     * @return \Illuminate\Http\JsonResponse
     */
    public function  routeAdd()
    {
        Artisan::call('route:cache', [
        ]);
        $exitCode = Artisan::call('api:cache', [
        ]);
        return response()->json(['msg' => $exitCode]);
    }
    /***
     * 清除配置缓存
     * @return \Illuminate\Http\JsonResponse
     */
    public function configClear()
    {
        $exitCode = Artisan::call('config:clear', [
        ]);
        return response()->json(['msg' => $exitCode]);
    }

    /***
     * 生成配置缓存
     * @return \Illuminate\Http\JsonResponse
     */
    public function  configAdd()
    {
        $exitCode = Artisan::call('config:cache', [
        ]);
        return response()->json(['msg' => $exitCode]);
    }

    /***
     * 检测是否开启opcache功能
     * @return \Illuminate\Http\JsonResponse
     */
    public function opcacheCheck()
    {

        if (! extension_loaded ( 'zend opcache' ))
            return response()->json(['msg' => 'zend opcache扩展未安装！']);
        $isAble = ini_get('opcache.enable');
        if(!$isAble)
            return response()->json(['msg' => 'zend opcache扩展未开启！']);
        return response()->json(['msg' => $isAble]);
    }

    public function opcacheOptimize()
    {

         $exitCode = Artisan::call('opcache:optimize', [
         ]);
         return response()->json(['msg' => $exitCode]);
    }

     public function opcacheClear()
     {
         $exitCode = Artisan::call('opcache:clear', [
         ]);
         return response()->json(['msg' => $exitCode]);
    }
}