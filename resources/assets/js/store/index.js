import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import router from './router/';
// 用户信息
import user from './userinfo/';
//数据加载提示
import global from './global/';

export default new Vuex.Store({

    modules: {
        global,
        router,
        user
    }
});