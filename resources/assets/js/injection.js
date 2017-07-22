/**
 * vue自定义插件;
 * Created by Administrator on 2017/7/3.
 */
import {
    // mixinModule,
    mixinNavigation,
    mixinRouter,
    mixinSidebar,
    // mixinUse,
} from './mixes/injection';
const injection = {};

function install(Vue) {

    mixinNavigation(injection);
    mixinRouter(injection);
    mixinSidebar(injection);
    // mixinUse(injection);
    // mixinModule(injection);
}

export default Object.assign(injection, {
    install,
});