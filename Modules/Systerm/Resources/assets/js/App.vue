<template>
    <div id="app" style="height: 100%;width: 100%">
        <router-view></router-view>
    </div>
</template>

<script>

    import store from './local_store';
    import api from './request/request';

    export default{
        name: 'app',
        data(){
            return {

            }
        },
        watch: {
            '$route'(to, from) {
                //每次路由变更时触发；可在此处判断是否已经登录，但会增加一次额外的请求，生产环境下直接在路由端设中间件即可
            }
        },
        methods: {
            authLogin: function () {
                let user = store.get('userinfo');
                if (user == null || user == 'undefined') {
                    this.$router.push({path: 'login'});
                    return false;
                }
                //验证jwt是否过期，过期则重新登录
                api.authCheck.call(this,{user},(dataRet)=>{
                    if(!dataRet){
                        this.$router.push({path: 'login'});
                    }
                })

            }
        },
        created: function () {
            this.authLogin();
        }
    }
</script>