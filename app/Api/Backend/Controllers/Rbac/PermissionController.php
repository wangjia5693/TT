<?php
/**
 * 权限管理
 * User: Administrator
 * Date: 2017/7/4
 * Time: 15:09
 */
namespace App\Api\Backend\Controllers\Rbac;

use Illuminate\Http\Request;
use App\Http\Requests\Rbac\Permission\CreateRequest;
use App\Http\Requests\Rbac\Permission\UpdateRequest;
use App\Api\BaseController;
use App\Model\Rbac\Permission;
use App\Api\Backend\Transformers\PermissionTransformer;

class PermissionController extends BaseController
{
    /***
     * 获取权限列表数据
     * @param Request $request
     * @return mixed
     */
    public function perList(Request $request){
        $permissions = Permission::where('fid', 0)->orderBy('sort', 'asc')->orderBy('id', 'asc')->get();

        return $this->response->collection($permissions,new PermissionTransformer);
    }

    /***
     * 新增权限列表数据
     * @param CreateRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function authCreate(CreateRequest $request){

        $user = Permission::create($request->all());
        return response()->json(['msg' => !$user ? '权限创建失败！' : '权限创建成功！']);
    }

    /***
     * 修改权限列表数据
     * @param UpdateRequest $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function authEdite(UpdateRequest $request){

        $id = $request->input('id');
        if(starts_with($request['name'], '#')) {
            $inputs['name'] = '#-' . time();
        }
        $isAble = Permission::where('id', '<>', $id)->where('name', $request['name'])->count();
        if($isAble)
            response()->json(['msg' => '更新失败！']);
        $permission = Permission::findOrFail($id);
        $result = $permission->update($request->intersect(['name','display_name','fid','description','icon','sort']));
        return response()->json(['msg' => !$result ? '更新失败！' : '更新成功！']);
    }

}