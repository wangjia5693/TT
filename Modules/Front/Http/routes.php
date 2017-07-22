<?php

Route::group(['middleware' => 'web', 'prefix' => 'front','domain'=>'www.sunshine.app', 'namespace' => 'Modules\Front\Http\Controllers'], function()
{
    Route::get('/', 'FrontController@index')->name('front');
});
