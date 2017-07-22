<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/7/5
 * Time: 14:27
 */

namespace App\Api\Backend\Transformers;

use Carbon\Carbon;
use League\Fractal\TransformerAbstract;
use App\Model\Rbac\Role;

class RoleTransformer extends TransformerAbstract
{
    /***
     * 数据转换
     * @param Role $role
     * @return array
     */
    public function transform(Role $role) {

        return [
            'id'         => (int) $role->id,
            'name' => $role['name'],
            'display_name' => $role['display_name'],
            'description' => $role['description'],
            'created_at' => $role['created_at']->toDateString()
        ];
    }
}