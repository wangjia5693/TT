<?php

namespace App\Http\Requests\Rbac\Role;

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
            'display_name' => 'sometimes|max:100',
            'description' => 'sometimes|max:100',
        ];
    }

    public function messages()
    {
        return [
            'display_name.max' => '角色显示名称最多100个字符',
            'description.max' => '角色说明最多100字符'
        ];
    }
}
