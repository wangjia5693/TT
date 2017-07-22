<?php
/*
|--------------------------------------------------------------------------
| Api Routes    Route:: resource('permission','PermissionController'); api不能使用该方法
|--------------------------------------------------------------------------
| 后端数据请求路由；此处与文件api不同处在于api文件提供的是对外接口服务；
| 此处提供的是页面数据展示的接口，使用dingo/api扩展；
| 为了防止多人协作修改同一个文件导致冲突，可编写自己的路由文件，但需要
| 在RouteServiceProvider中加载；多文件会降低效率，所以在实际上线时，需执行
| php artisan route:cache 生成一个缓存文件
|
*/
$api = app('Dingo\Api\Routing\Router');


//$app['Dingo\Api\Exception\Handler']->register(function( Dingo\Api\Exception\ValidationHttpException $exception){
//    return Response::make(['error' => 'Hey, what do you think you are doing!?'], 200);
//});

// 将所有的 Exception 全部交给 App\Exceptions\Handler 来处理
//app('api.exception')->register(function (Exception $exception) {
//    $request = Illuminate\Http\Request::capture();
//    return app('App\Exceptions\Handler')->render($request, $exception);
//});

$api->version('service', function ($api) {

    /***
     * 增加登陆限制；3分钟5次
     */
    $api->group([
        'namespace' => 'App\Api\Backend\Controllers',
        'middleware' => 'api.throttle', 'limit' => 50, 'expires' => 3
    ], function ($api) {
        $api->post('/login',  'AuthController@login');
        $api->post('/register', 'AuthController@register');
    });

    $api->get('/auth/check', 'App\Api\Backend\Controllers\AuthController@check');

    /***
     * 登陆才能访问，权限认证经过中间件jwt.auth
     */
    $api->group([
        'namespace' => 'App\Api\Backend\Controllers',
        'middleware' => 'jwt.api.auth'
    ], function ($api) {


        $api->group([
            'namespace'=>'Rbac'
        ], function ($api) {
            $api->get('/user/list', 'UserController@userList');
            $api->post('/user/add', 'UserController@userCreate');
            $api->post('/user/edit', 'UserController@userEdite');
            $api->get('/permission/list', 'PermissionController@perList');
            $api->post('/permission/addauth',  'PermissionController@authCreate');
            $api->post('/permission/editauth', 'PermissionController@authEdite');
            $api->get('/role/list', 'RoleController@roleList');
            $api->post('/role/add',  'RoleController@roleCreate');
            $api->post('/role/edit', 'RoleController@roleEdite');
            $api->post('/role/perlist', 'RoleController@permissions');
            $api->post('/role/peredit', 'RoleController@storePermissions');
        });

        $api->group([
            'namespace'=>'Systerm'
        ], function ($api) {
            $api->get('/systerm/composer/optimize', 'OptimizeController@composer');
            $api->get('/systerm/route/clear', 'OptimizeController@routeClear');
            $api->get('/systerm/config/clear', 'OptimizeController@configClear');
            $api->get('/systerm/route/add', 'OptimizeController@routeAdd');
            $api->get('/systerm/config/add', 'OptimizeController@configAdd');
            $api->get('/systerm/opcache/check', 'OptimizeController@opcacheCheck');
            $api->get('/systerm/opcache/optimize', 'OptimizeController@opcacheOptimize');
            $api->get('/systerm/opcache/clear', 'OptimizeController@opcacheCLear');
        });

    });
});