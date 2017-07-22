
/***
 * 导入封装的回调函数
 */

require('es6-promise').polyfill();
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);
import {gbs,cbs} from './settings.js';
Vue.axios.defaults.baseURL = gbs.host;

/**
 * 封装axios的通用请求
 */
export default function(type, url, data, fn,cache,tokenFlag, errFn) {

	this.$store.dispatch('show_loading');	// 分发显示加载样式任务
	let config = {};
	let configs = {};
	let headers = {};
	let Cache_Control = {};
	let Authorization = {};
	if (tokenFlag !== true&&type !== 'get') {
		Authorization = {'Authorization':'Bearer '+this.$store.state.user.userinfo.token,'Accept': 'application/vnd.app.service+json'};
	}
	if(cache==true&type !== 'get'){
		Cache_Control = {'Cache-Control':'no-cache'};
	}
	Object.assign(configs, Authorization, Cache_Control );
	var isEmptyObject = true;
	for ( let name in configs ) { 
		 isEmptyObject = false; 
	} 
	if(!isEmptyObject)
		config.headers = configs;
	if (type === 'get') {
		Authorization = {'Authorization':'Bearer '+this.$store.state.user.userinfo.token,'Accept': 'application/vnd.app.service+json'};
		var datas = {
			params: data
		};
		if(cache==true)
			Cache_Control = {'Cache-Control':'no-cache'};
		Object.assign(config, Authorization, Cache_Control );
		datas.headers = config;
	}else {
		var datas = data;
	}
	Vue.axios[type](url, datas,config).then((res) => {
		if (res.status == 200) {
			if(res.data.code&&res.data.code!=200){
				cbs.statusError.call(this, res);
				errFn && errFn.call(this);
			}else
				fn(res.data);
		} else {
			// 调用全局配置错误回调
			cbs.statusError.call(this, res);

			// if (tokenFlag === true) {
				errFn && errFn.call(this);
			// }
		}
		this.$store.dispatch('hide_loading');
	}).catch((error) => {
		//调用全局配置错误回调
		this.$store.dispatch('hide_loading');
		if (error.response) {
	      // 请求已发出，但服务器响应的状态码不在 2xx 范围内
	      console.log(error.response.data);
	      console.log(error.response.status);
	      // console.log(error.response.headers);
	      if(error.response.status==401){
	      	this.$message.error('用户信息失效，请登录后操作！');
      		this.$router.push('/login');
	      }else if(error.response.status==500){
	      		if(error.response.data.message=="Token has expired"){
                    this.$message.error('用户信息失效，请登录后操作！');
                    this.$router.push('/login');
				}
	      		else
	      			this.$message.error('服务端错误，请联系技术人员！');
	      }else if(error.response.status==405){
	      		this.$message.error('请求错误：'+error.response.data.message);
	      }else if(error.response.status==422){
	      	let err = error.response.data.errors;
	      	let str = '';
	      	for(  let i in err  ){
				str += i+':'+err[i][0];
			}
              this.$message.error('验证错误：'+str);
		  }else {
			cbs.requestError.call(this, error);

	      }
            errFn && errFn.call(this);
	    } else {
	      console.log('Error', error.message);
	    }
	});

};