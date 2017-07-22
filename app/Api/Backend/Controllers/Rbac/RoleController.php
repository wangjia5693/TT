<?php
/**
 * 角色管理
 * User: Administrator
 * Date: 2017/7/5
 * Time: 15:09
 */
namespace App\Api\Backend\Controllers\Rbac;

use Illuminate\Http\Request;
use App\Http\Requests\Rbac\Role\CreateRequest;
use App\Http\Requests\Rbac\Role\UpdateRequest;
use App\Api\BaseController;
use App\Model\Rbac\Role;
use App\Model\Rbac\Permission;
use App\Api\Backend\Transformers\RoleTransformer;

class RoleController extends BaseController
{
    /***
     * 获取列表数据
     * @param Request $request
     * @return mixed
     */
    public function roleList(Request $request){
        $pageSize = $request->input('rows');
        $users = Role::paginate($pageSize);
        return $this->response->paginator($users,new RoleTransformer);
    }

    /***
     * 新增列表数据
     * @param CreateRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function roleCreate(CreateRequest $request){

        $user = Role::create($request->all());
        return response()->json(['msg' => !$user ? '角色创建失败！' : '角色创建成功！']);
    }

    /***
     * 修改数据
     * @param UpdateRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function roleEdite(UpdateRequest $request){

        $id = $request->input('id');
        $isAble = Role::where('id', '<>', $id)->where('name', $request['name'])->count();
        if($isAble)
            response()->json(['msg' => '更新失败！']);
        $role = Role::findOrFail($id);
        $result = $role->update($request->intersect(['description','display_name']));
        return response()->json(['msg' => !$result ? '更新失败！' : '更新成功！']);
    }

    /***
     * 获取对应角色的权限
     * 需要的注意的是我们更改了model默认的存放地址，
     * 为了不影响entrust功能需更改config文件
     * @param Request $request
     * @return mixed
     */
    public function permissions(Request $request){
        $id = $request->input('id');
        $permissions = Permission::where('fid', 0)->orderBy('sort', 'asc')->orderBy('id', 'asc');
        $permissionsl = array();
        $permissions->each(function($item)use(&$permissionsl){
            $temp = array();
            $temp['id'] = $item['id'];
            $temp['label'] = $item['display_name'];
            $temp['children'] =[];
            $item['sub_permission']->each(function($ite)use(&$temp){
                $tem = array();
                $tem['id'] = $ite['id'];
                $tem['label'] = $ite['display_name'];
                $temp['children'] [] = $tem;
            });
            $permissionsl[] = $temp;
        });
        $rolePermissions = [];
        Role::find($id)->perms()->each(function($item)use(&$rolePermissions){
            $rolePermissions[] = $item->id;
        });

        return $this->response->array(compact('permissionsl','rolePermissions'));
    }

    /***
     * 保存权限
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function storePermissions(Request $request)
    {
        $id = $request->input('id');
        $result = Role::find($id)->perms()->sync($request->input('permissions', []));
        return response()->json(['msg' => !$result ? '更新失败！' : '更新成功！']);
    }
}