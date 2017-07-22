<?php
/*
   |--------------------------------------------------------------------------
   | 自定义sendCloud邮件服务
   |--------------------------------------------------------------------------
   | 默认的smtp服务容易被屏蔽
   |
*/
namespace App\Service\Facades;
use Illuminate\Support\Facades\Facade;

class SendCloudFacade extends Facade {

    protected static function getFacadeAccessor() { return 'SendCloudService'; }

}