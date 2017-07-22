
/***
 * 具体模块的请求类；此为用户模块
 * 为了防止冲突，尽量做到每个模块每个人使用单独的文件；只需将本文件import到具体的vue组件中即可使用
 * 此处可视为一个demo；
 */
import ajax from './ajax';

/**
 * 用户模块
 */
const user =  {

	/**
	 * 登录
	 * @param {object} data 参数
	 * @param {string} data.username 登陆用户名
	 * @param {string} data.password 登陆密码
	 * @param {function} fn 成功回调
	 * @param {function} errFn 错误回调
	 */

	login(data, fn, errFn) {
		ajax.call(this, 'post', '/login', data, fn, true,false, errFn);
	},

    /**
	 * 登录验证
     */
	authCheck(data,fn){
        ajax.call(this, 'get', '/auth/check', data, fn, true);
	},

	  /**
	   * 新增用户
	   * @param  {object}   data 参数
	   * @param  {Function} fn   成功回调
	   */
	  userAdd(data,fn) {
		  ajax.call(this, 'post', 'user/add', data, fn);
	  },

	  /**
	   * 用户信息修改
	   * @param  {object}   data 参数
	   * @param  {Function} fn   成功回调
	   */
	  userEdit(data,fn) {
		ajax.call(this, 'post', 'user/edit', data, fn);
	  },

	  /**
	   * 用户信息获取
	   * @param  {object}   data 参数
	   * @param  {Function} fn   成功回调
	   */
	  userGetList(data,fn) {
		ajax.call(this, 'get', 'user/list', data, fn,true);
	  },

    roleList(data,fn){
	  	ajax.call(this,'get','role/list',data,fn);
	},
};

/**
 * 导出模块需要用到接口
 */
export default user;
