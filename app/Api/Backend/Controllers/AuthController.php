<?php

namespace App\Api\Backend\Controllers;

use Illuminate\Http\Request;
use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use App\Http\Requests;
use Illuminate\Support\Facades\Validator;
use App\Api\BaseController;
use App\User;
use Dingo\Api\Exception\StoreResourceFailedException;


class AuthController extends BaseController
{
    /**
     * 判断是否痛通过验证
     * 本项目使用前端路有变化时请求验证；也可以作为中间件
     * @todo做为中间件，验证并进行权限验证
     * @return mixed false或者用户信息
     */
    public function check()
    {
        return JWTAuth::parseToken()->authenticate();
    }

    /***
     * 登陆
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
//        $token = bcrypt('123456');
//        return $token;
        try {
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'invalid_credentials'], 401);
            }
        } catch (JWTException $e) {
            return response()->json(['error' => 'could_not_create_token'], 500);
        }
        $where = [
            'email' => $credentials['email']
        ];

        $name = User::where($where)->value('name');

        // 返回 token值与用户名
        return response()->json(['userinfo'=>compact('token', 'name')]);
    }

    /***
     * 刷新token
     * @return mixed
     */
    public function updateToken()
    {
        $token = JWTAuth::refresh();
        return $this->response->array(['token' => $token]);
    }


    /***
     * 注册用户
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function register(Request $request)
    {
        $rules = [
            'name' => 'required|unique:user',
            'email' => 'required|email|unique:user',
            'password' => 'required|confirmed|alpha_dash|between:6,10',
            'password_confirmation' => 'required'
        ];

        // validata
        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            // return the error msg
            throw new StoreResourceFailedException('Could not create new user.', $validator->errors());
        }

        $newUser = [
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'password' => bcrypt($request->input('password'))
        ];

        $user = User::create($newUser);
        $token = JWTAuth::fromUser($user);

        $name = $newUser['name'];

        // all good so return the token and name
        return response()->json(compact('token', 'name'));
    }
}