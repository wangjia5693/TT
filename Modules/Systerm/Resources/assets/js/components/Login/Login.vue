<template>
    <div class="contentl">
    <el-row :gutter="0">
      <el-col :span="8" :offset="8">
        <!-- <div class="grid-content bg-purple"></div> -->
            <!--<div class="contenti">-->
                <el-form label-position="left" label-width="0px" class="loginform"
                    v-loading="login_actions.disabled"
                    element-loading-text="正在登录..."
                    :model='data'
                    :rules="rule_data"
                    ref='data'>
                    <div class="title">超级管理员登录</div>
                    <el-form-item
                        prop='username'>
                        <el-input type="text" auto-complete="off" placeholder="账号" 
                            v-model='data.email'
                            @keyup.native.enter="login('data')"></el-input>
                    </el-form-item>
                    <el-form-item
                        prop='password'>
                        <el-input type="password" auto-complete="off" placeholder="密码"
                            v-model='data.password'
                            @keyup.native.enter="login('data')"></el-input>
                    </el-form-item>
                    <el-checkbox style="margin:0px 0px 35px 0px;"
                        :checked='remumber.remumber_flag'
                        v-model='remumber.remumber_flag'>记住密码</el-checkbox>
                    <el-form-item style="width:100%;">
                        <el-button type="primary" @click='login("data")'>登录</el-button>
                        <el-button @click='resetForm("data")'>重置</el-button>
                    </el-form-item>
                </el-form>
            <!--</div>-->
      </el-col>
    </el-row>

    </div>
</template>

<script>
    import LoginJs from './Login.js';
    export default LoginJs;
</script>


<style scoped>
    .contentl{
        background-color:#5cadff;
        height: 100%;
        left: 0;
        position: absolute;
        top: 0;
        width: 100%;
    }


    .title {
        margin: 0px auto 40px auto;
        color: #505458;
        font-size: 24px;
        height: 40px;
        line-height: 40px;
        text-align: center;
    }

     .loginform {
        padding: 35px 35px 15px 35px;
         background: #fff;
         border-radius: 6px;
         box-shadow: 0 0 30px rgba(0, 100, 202, 0.5);
         height: 350px;
         margin:0 auto;
         /*position: absolute;*/
         margin-top:150px;
         width: 400px;
    } 
</style>