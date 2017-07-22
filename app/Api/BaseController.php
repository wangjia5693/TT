<?php

namespace App\Api;

use Dingo\Api\Routing\Helpers;
use Illuminate\Routing\Controller;

/***
 * 使用dingo的helpers  trait来构件自定义响应；
 * 所有的API Controller继承该基类
 * @package App\Api
 */

class BaseController extends Controller
{
    use Helpers;
}
