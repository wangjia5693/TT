<?php
/**
 * dingo返回数据处理封装
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/7/3
 * Time: 16:40
 */

namespace App\Api\Backend\Transformers;

use Carbon\Carbon;
use League\Fractal\TransformerAbstract;
use App\User;

class UserTransformer extends TransformerAbstract
{
    /**
     * 数据转换
     * 特别注意将carbon对象转换成string类型
     * $dt = Carbon::create(1975, 12, 25, 14, 15, 16);
     * echo $dt->toDateString();                          // 1975-12-25
     * echo $dt->toFormattedDateString();                 // Dec 25, 1975
     * echo $dt->toTimeString();                          // 14:15:16
     * echo $dt->toDateTimeString();                      // 1975-12-25 14:15:16
     * echo $dt->toDayDateTimeString();                   // Thu, Dec 25, 1975 2:15 PM
    */
    public function transform(User $user) {
        return [
            'id' =>$user['id'],
            'is_super' =>$user['is_super'],
            'name' => $user['name'],
            'email' => $user['email'],
            'created_at' => $user['created_at']->toDateString()
        ];
    }
}