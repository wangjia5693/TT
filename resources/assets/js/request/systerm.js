/**
 * Created by Administrator on 2017/7/7.
 */
import ajax from './ajax';

const systerm =  {
    //清除config
    confCache(data,fn){
        ajax.call(this, 'get', 'systerm/conf/clear', data, fn,true);
    },
    //清除opcache
    opcacheCache(data,fn){
        ajax.call(this, 'get', 'systerm/opcache/clear', data, fn,true);
    },

    //清除route
   routeCache(data,fn){
        ajax.call(this, 'get', 'systerm/route/clear', data, fn,true);
    },

    routeCacheAdd(data,fn){
        ajax.call(this, 'get', 'systerm/route/add', data, fn,true);
    },
    //清除route
    configCache(data,fn){
        ajax.call(this, 'get', 'systerm/config/clear', data, fn,true);
    },

    configCacheAdd(data,fn){
        ajax.call(this, 'get', 'systerm/config/add', data, fn,true);
    },
    //类自动加载优化
    composerOp(data,fn){
        ajax.call(this, 'get', 'systerm/composer/optimize', data, fn,true);
    },
    opcacheCheck(data,fn){
        ajax.call(this, 'get', 'systerm/opcache/check', data, fn,true);
    },
    opcacheCacheAdd(data,fn){
        ajax.call(this, 'get', 'systerm/opcache/optimize', data, fn,true);
    },
    opcacheCache(data,fn){
        ajax.call(this, 'get', 'systerm/opcache/clear', data, fn,true);
    },


}

export default systerm;

