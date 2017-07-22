<?php
/*
   |--------------------------------------------------------------------------
   | 用户模型
   |--------------------------------------------------------------------------
   |
   | 为了使用entrust权限rbac的功能，需引入use Zizaco\Entrust\Traits\EntrustUserTrait;
   | 其中包含roles()、hasRole($name)、can($permission)以及ability($roles,$permissions,$options)方法支持权限管理
   | Eloquent 维护 created_at 和 updated_at 字段，在模型中添加以下属性：public $timestamps = false;
   |
*/


namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Zizaco\Entrust\Traits\EntrustUserTrait;

class User extends Authenticatable
{
    use Notifiable,EntrustUserTrait;

    protected $connection = "mysql";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','is_super'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $visiable = ['id'];
    /**
     * created_at,updated_at字段的数据类型是datetime也可以改为int
    */
//    public function fromDateTime($value){
//        return strtotime(parent::fromDateTime($value));
//    }
}
