<?php

Route::group(['middleware' => 'web', 'prefix' => 'systerm','domain'=>'admin.sunshine.app', 'namespace' => 'Modules\Systerm\Http\Controllers'], function()
{
    Route::get('/', 'SystermController@index')->name('system');
});
