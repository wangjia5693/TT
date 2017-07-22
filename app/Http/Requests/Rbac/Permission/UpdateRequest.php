<?php

namespace App\Http\Requests\Rbac\Permission;

use Dingo\Api\Http\FormRequest;

class UpdateRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => 'required|max:100',
            'display_name' => 'sometimes|max:100',
            'description' => 'sometimes|max:100',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => '权限名称必须',
            'name.max' => '权限名称最多100个字符',
            'display_name.max' => '权限显示名称最多100个字符',
            'description.max' => '权限说明最多100字符'
        ];
    }
}
