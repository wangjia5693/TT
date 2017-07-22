<?php
/*
   |--------------------------------------------------------------------------
   | 权限管理中的权限模型
   |--------------------------------------------------------------------------
   |
   | 使用entrust扩展包，模型不在继承Illuminate\Database\Eloquent\Model;
   | 而继承于Zizaco\Entrust\EntrustPermission;该类继承了Model,所以拥有model的方法
   |
*/


namespace App\Model\Rbac;

use Zizaco\Entrust\EntrustPermission;

class Permission extends EntrustPermission
{
    protected $connection = "mysql";
    /***
     * 设置可修改字段
     */
    protected $fillable = ['fid', 'icon', 'name', 'display_name', 'description', 'is_menu', 'sort'];

    /***
     * 设置自定义字段；同时添加获取值的方法
     */
    protected $appends = ['icon_html', 'sub_permission','status'];

    /***
     * 与append的icon_html对应
     * @return string
     */
    public function getIconHtmlAttribute()
    {
        return $this->attributes['icon'] ? '<i class="fa fa-' . $this->attributes['icon'] . '"></i>' : '';
    }

    /**
     *  偷懒了，直接返回true；业务中是需要前段返回数据
    */
    public function getStatusAttribute()
    {
        return  true;
    }

    /***
     * 对name值的存取做处理
     * @param $value
     * @return mixed
     */
    public function getNameAttribute($value)
    {
        if(starts_with($value, '#')) {
            return head(explode('-', $value));
        }
        return $value;
    }

    /***
     * 对name值的存取做处理
     * @param $value
     */
    public function setNameAttribute($value)
    {
        $this->attributes['name'] = ($value == '#') ? '#-' . time() : $value;
    }

    /***
     * 与append的sub_permission对应
     * @return null
     */
    public function getSubPermissionAttribute()
    {
        return ($this->attributes['fid'] == 0) ? $this->where('fid',$this->attributes['id'])->orderBy('sort', 'asc')->get() : null;
    }
}
