<?php
/*
|--------------------------------------------------------------------------
| 环境检测
|--------------------------------------------------------------------------
| 开发上线过程中会使用到不同的开发环境，使用不同的env配置文件；此段代码解决的
| 就是该问题；在.env文件中只写环境名称（local、production），
| 具体的配置位于.loacl.env或者.production.env文件中；代码提交时.env不提交跟踪；
| 生产环境中.env由运维添加
*/
use Dotenv\Dotenv;

$env = $app->detectEnvironment(function () {
    $environmentPath = __DIR__ . '/../.env';
    $setEnv = trim(file_get_contents($environmentPath));
    if(file_exists($environmentPath)) {
        putenv("APP_ENV=$setEnv");
        if(getenv('APP_ENV') && file_exists(__DIR__ . '/../.' . getenv('APP_ENV') . '.env')) {
            $dotenv = new Dotenv(__DIR__ . '/../', '.' . getenv('APP_ENV') . '.env');
            $dotenv->load();
        }
    }
});