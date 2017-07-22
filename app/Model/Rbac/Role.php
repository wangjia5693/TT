<?php
/*
   |--------------------------------------------------------------------------
   | 权限管理中的角色模型
   |--------------------------------------------------------------------------
   |
   | 使用entrust扩展包，模型不在继承Illuminate\Database\Eloquent\Model;
   | 而继承于Zizaco\Entrust\EntrustRole;该类继承了Model,所以拥有model的方法
   |
*/

namespace App\Model\Rbac;

use Zizaco\Entrust\EntrustRole;


class Role extends EntrustRole
{
    protected $connection = "mysql";
    protected $fillable = ['name', 'display_name', 'description'];

    /***
     * 设立与user模型的多对多关系
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function users()
    {
        return $this->belongsToMany('App\User');
    }
}
