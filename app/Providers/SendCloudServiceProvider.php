<?php
/*
   |--------------------------------------------------------------------------
   | 自定义sendCloud邮件服务
   |--------------------------------------------------------------------------
   | 默认的smtp服务容易被屏蔽
   | 在app.php 挂载上provider和aliases
*/

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use \App\Service\Services\SendCloudService;

class SendCloudServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap the application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }

    /**
     * Register the application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('SendCloudService', function () {
            return new SendCloudService();
        });
    }
}
