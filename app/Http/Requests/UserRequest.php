<?php

namespace App\Http\Requests;

#正常情况下我们继承的是下面的FormRequest；然而使用dingo需要更改为dingo
//use Illuminate\Foundation\Http\FormRequest;
use Dingo\Api\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     * 默认时false，需要改成true，不然一直返回 action inauthorized
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * 验证规则
     * bail规则当有一条不符合规则则不再验证其他规则，节省效率
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'bail|required|unique:users',
            'email' => 'bail|required|email|unique:users',
            'password' => 'bail|required|confirmed|alpha_dash|between:6,10',
            'password_confirmation' => 'required',
            //'phone' => 'nullable|phone'//nullable表示可选
        ];
    }

    /**
     * 获取被定义验证规则的错误消息.
     * 注意between:6,10这类含有限定条件的，自定义消息时不需要条件
     * @return array
     * @translator laravelacademy.org
     */
    public function messages(){
        return [
            'name.required' => '用户名为必填项！',
            'email.required'  => '邮箱为必填项',
            'password.required'  => '密码为必填项',
            'password_confirmation.required'  => '核准密码为必填项',
            'email.email'  => '邮箱规则不正确',
            'password.confirmed'  => '两次密码不一致',
            'password.between'  => '密码位数6到10位',
        ];
    }
}
