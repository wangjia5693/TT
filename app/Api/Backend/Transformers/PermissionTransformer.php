<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/7/4
 * Time: 17:04
 */


namespace App\Api\Backend\Transformers;

use Carbon\Carbon;
use League\Fractal\TransformerAbstract;
use App\Model\Rbac\Permission;

class PermissionTransformer extends TransformerAbstract
{
    /**
     * 数据转换
     */
    public function transform(Permission $permission) {

        return [
            'id' =>$permission['id'],
            'icon' => $permission['icon_html'],
            'name' => $permission['name'],
            'display_name' => $permission['display_name'],
            'description' => $permission['description'],
            'sub_permission' => $permission['sub_permission']
        ];
    }
}