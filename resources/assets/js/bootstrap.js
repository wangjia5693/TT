
window._ = require('lodash');

/**
 * 引入jquery与bootstrap支持；本项目将使用element-ui 与vue理论上不使用该两项；可注释
 * 当然为了方便部分同学，还是将jquery引入
 */

try {
    window.$ = window.jQuery = require('jquery');
    // require('bootstrap-sass');
} catch (e) {}

/**
 * 所有的请求我们使用vue2推荐的axios，可支持并发请求；文档自求
 */

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * 为了防止CSRF 防护兼容laravel自带的安全服务，需要添加csrf-token头；注意在blade中需加入meta头
 */

let token = document.head.querySelector('meta[name="csrf-token"]');
if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}