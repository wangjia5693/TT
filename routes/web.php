<?php

/*
|--------------------------------------------------------------------------
| 用户后台 Routes
|--------------------------------------------------------------------------
|
| 采用vue展示前段，后端只提供数据api;所以前端vueRouter的路由都指向于这个路由；
| 接口路由设置于backend文件中；
|
*/
Route::group(['domain'=>'nala.sunshine.app','middleware'=>'user.database'], function()
{
    Route::get('/{main?}', "IndexController@main");
});

/*
|--------------------------------------------------------------------------
| www路由
|--------------------------------------------------------------------------
| 用于平台信息展示；使用modules扩展分离模块代码，便于维护；代码位于modules下的front
|
*/

Route::group(['domain'=>'www.sunshine.app'], function()
{
    Route::get('/', function(){
        return redirect()->route('front');
    });
});

/*
|--------------------------------------------------------------------------
| 超级系统后台路由
|--------------------------------------------------------------------------
| 用于平台信息展示；使用modules扩展分离模块代码，便于维护；代码位于modules下的systerm
|
*/

Route::group(['domain'=>'admin.sunshine.app'], function()
{
    Route::get('/', function(){
        return redirect()->route('system');
    });
});

