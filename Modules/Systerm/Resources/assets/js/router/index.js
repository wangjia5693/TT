import Vue from 'vue'
import Router from 'vue-router'
import Baseroutes from './router'

Vue.use(Router)
const routes = {
	mode: 'history',
    scrollBehavior (to, from, savedPosition) {//锚点定位滚动，暂未做功能
        if (to.hash) {
            return {
                selector: to.hash
            }
        }
    },
};

/*
 * 为了防止多人开发同时修改一个文件造成版本冲突，每人可设置自己的路由文件，
 * 将其import后，通过下面的方法汇成一个对象传入
 */
// Baseroutes.routes.concat();
Object.assign(routes,Baseroutes);

export default {
    init(injection) {
    	return new Router(
            routes
        )
	}
}
