
/**
 * 引入启动文件bootstrap；vue项目会用到一些es6的代码；不清楚的请自行查文档
 * 文档特别注意：对象与模块两部分
 */

require('./bootstrap');
window.Vue = require('vue');
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

/**
 * 像laravel中colletion一样操作数据
 */
import collect from 'collect.js'
window.collect = collect;
/**
 * 状态管理（用户信息等公共状态存放）
 */

import store from './store/';

/**
 * 页面顶部进度条
 */

import NProgress from 'nprogress';
import 'nprogress/nprogress.css';


Vue.use(ElementUI)

import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView)
/**
 * 创建vue前端实例
 */

// Vue.component('example', require('./components/Example.vue'));
import App from './App.vue';
import injection from './injection';
Vue.use(injection);
/**
 * 进度条启动回收，及登陆验证
 */

injection.router.beforeEach((to, from, next) => {
    window.scroll(0, 0);
    NProgress.start();
    next();
});

/**
 * 关闭进度条
 */

injection.router.afterEach(transition => {
    NProgress.done();
});
const app = new Vue({
    el: '#app',
    template: '<App/>',
    router: injection.router,
    store,
    components: { App }
}).$mount('#app');
