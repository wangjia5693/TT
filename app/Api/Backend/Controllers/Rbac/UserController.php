<?php
/**
 * 用户管理
 *
 * User: Administrator
 * Date: 2017/7/3
 * Time: 15:09
 */
namespace App\Api\Backend\Controllers\Rbac;

use Illuminate\Http\Request;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Http\Requests\UserRequest;
use Illuminate\Support\Facades\Validator;
use App\Api\BaseController;
use App\User;
use App\Api\Backend\Transformers\UserTransformer;
use App\Events\UserRegister;

class UserController extends BaseController
{
    /***
     * 获取所有用户列表
     * @param Request $request
     * @return \Dingo\Api\Http\Response
     */
    public function userList(Request $request){
       $pageSize = $request->input('rows');
       #对数据进行处理后返回，dingo提供便捷的方案；跟随第二个参数transformer
       $users = User::paginate($pageSize);
       return $this->response->paginator($users,new UserTransformer);

    }

    /***
     * 创建用户
     * 之后添加验证码方案；存储的cache中；
     */
    public function userCreate(UserRequest $request){
        #此种数据验证方式自定义返回信息比较麻烦；#$this->validate($request, []);修改用户信息处使用该方案
        #所以采用php artisan make:request ，在新request类重定义规则及错误消息；不通过不会执行下面代码
        #ajax请求直接返回422状态码及错误，所以建议修改exceptions\handler

        $newUser = [
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password'))
        ];

        $user = User::create($newUser);
        //触发创建用户事件
        event(new UserRegister($user));
        return response()->json(['msg' => !$user ? '用户创建失败！' : '用户创建成功！']);
    }

    /***
     * 修改用户信息
     */
    public function userEdite(Request $request){
        $rules = [
            'id' => 'required',
            'name' => 'bail|required|unique:users',
            'password' => 'bail|required|confirmed|alpha_dash|between:6,10',
            'password_confirmation' => 'required',
        ];

        $payload = $request->only('name', 'password','password_confirmation','id');
        $validator = Validator::make($payload, $rules);
        if ($validator->fails()) {
            return $this->response->array(['error' => $validator->errors()]);
        }

        #常规更新操作；
         $id = $request->input('id');
         $user = User::findOrFail($id);
         $request->password =  bcrypt($request->input('password')) ;
         $result = $user->update($request->intersect(['name','password']));

        #此种方式更改的是登录帐号信息
//        $result = $request->user()->fill([
//            'password' => bcrypt($request->password),
//            'name' => $request->name
//        ])->save();
        return response()->json(['msg' => !$result ? '更新失败！' : '更新成功！']);
    }
}