/**
 * Created by Administrator on 2017/7/4.
 */
import ajax from './ajax';

/**
 * rbac模块
 */
const rbac =  {

    /**
     * 权限获取
     * @param  {object}   data 参数
     * @param  {Function} fn   成功回调
     */
    permissionGetList(data,fn) {
        ajax.call(this, 'get', 'permission/list', data, fn,true);
    },

    //增加权限
    permissionAdd(data,fn){
        ajax.call(this, 'post', 'permission/addauth', data, fn);
    },
    //编辑权限
    permissionEdit(data,fn){
        ajax.call(this, 'post', 'permission/editauth', data, fn);
    },
    //获取角色列表
    roleGet(data,fn){
        ajax.call(this, 'get', 'role/list', data, fn,true);
    },
    //增加角色
    roleAdd(data,fn){
        ajax.call(this, 'post', 'role/add', data, fn);
    },
    //编辑角色
    roleEdit(data,fn){
        ajax.call(this, 'post', 'role/edit', data, fn);
    },
    //获取角色权限
    rolePerGet(data,fn){
        ajax.call(this, 'post', 'role/perlist', data, fn);
    },
    //编辑角色权限
    rolePerEdit(data,fn){
        ajax.call(this, 'post', 'role/peredit', data, fn);
    }
}

export default rbac;