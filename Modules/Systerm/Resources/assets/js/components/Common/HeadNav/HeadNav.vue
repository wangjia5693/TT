<template>
    <header class="head-nav">
       <el-row>
            <el-col :span="4" :offset="3" class='logo-container'>
                <a href="/main" style="color:white">
                <i class="fa fa-database" aria-hidden="true" style="font-size:28px;margin-right:6px"></i>
               <!-- <img data-v-7ad4e6e1="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgd2lkdGg9IjMwcHgiIGhlaWdodD0iMzBweCIgdmlld0JveD0iMCAwIDM4IDQ4IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0MCAoMzM3NjIpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPlNoYXBlIENvcHk8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz48L2RlZnM+CiAgICA8ZyBpZD0idjIuMi4wIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i6aaW6aG1Lem7mOiupOaViOaenC1jb3B5LTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03MC4wMDAwMDAsIC0xOS4wMDAwMDApIiBmaWxsPSIjRkZGRkZGIj4KICAgICAgICAgICAgPHBhdGggZD0iTTIxMi4xMzU0NDEsNDUuMTU3ODA3NyBaIE0xMDMuNDE2NTAyLDQ2LjIxNzU1MTEgQzEwMy40MDcwMDgsNDcuNzk0NTY4MiAxMDIuNTg3ODQxLDQ4LjE0NjM0NzQgMTAyLjU4Nzg0MSw0OC4xNDYzNDc0IEMxMDIuNTg3ODQxLDQ4LjE0NjM0NzQgODguNDUyMDQ3OCw1Ni4zMTQ1MDg3IDg3LjUzMjk5NTYsNTYuODI2Mjc1MSBDODYuNjIyMzM2LDU3LjIxNzE1NjEgODYuMDEzNjcwMyw1Ni44MjYyNzUxIDg2LjAxMzY3MDMsNTYuODI2Mjc1MSBDODYuMDEzNjcwMyw1Ni44MjYyNzUxIDcxLjIyMjU3MDYsNDguMjQ3OTU3MiA3MC42ODI2OTYyLDQ3Ljg3MDg0NDQgQzcwLjE0MjY4NDMsNDcuNDkzNzMxNiA3MC4xMzAxNjQzLDQ2LjkwNjM3NzQgNzAuMTMwMTY0Myw0Ni45MDYzNzc0IEM3MC4xMzAxNjQzLDQ2LjkwNjM3NzQgNzAuMTQ1MDIzMiwyOS45MTk5MTc0IDcwLjEzMDE2NDMsMjkuMTMzMzM2NCBDNzAuMTE1MzA1MywyOC4zNDY2MTc3IDcxLjA5Njk1NzYsMjcuNzU1NTQ2MSA3MS4wOTY5NTc2LDI3Ljc1NTU0NjEgTDg1Ljg3NTUzNzMsMTkuMjEzNDM4NyBDODYuNzg1MzcxNCwxOC43MzMyMDE2IDg3LjY3MTEyODYsMTkuMjEzNDM4NyA4Ny42NzExMjg2LDE5LjIxMzQzODcgQzg3LjY3MTEyODYsMTkuMjEzNDM4NyAxMDAuNzI2NjIzLDI2LjgwMjA5MzcgMTAyLjE3MzQ0MiwyNy42MTc3MjU3IEMxMDMuNTkxNTA3LDI4LjI5MTk1NzcgMTAzLjQxNjUwMiwyOS42ODQzNDI0IDEwMy40MTY1MDIsMjkuNjg0MzQyNCBDMTAzLjQxNjUwMiwyOS42ODQzNDI0IDEwMy40MjUzMDcsNDQuNzUxOTE5MiAxMDMuNDE2NTAyLDQ2LjIxNzU1MTEgTDEwMy40MTY1MDIsNDYuMjE3NTUxMSBaIE05Ny41MTYwMTA1LDI5LjE2OTEzMzkgQzk0LjQ5MDAxNzMsMjcuNDI3NDQ4MyA4Ny4zNjE1ODQyLDIzLjI5NzEwNjMgODcuMzYxNTg0MiwyMy4yOTcxMDYzIEM4Ny4zNjE1ODQyLDIzLjI5NzEwNjMgODYuNjY2MTAzOSwyMi45MjEyMzI2IDg1Ljk1MTc3NDcsMjMuMjk3MTA2MyBMNzQuMzQ4NzQwNiwyOS45ODIxNSBDNzQuMzQ4NzQwNiwyOS45ODIxNSA3My41NzgwMDI1LDMwLjQ0NDkwMTQgNzMuNTg5Njk3LDMxLjA2MDQ4MDUgQzczLjYwMTM5MTUsMzEuNjc2MDU5NyA3My41ODk2OTcsNDQuOTY5ODcwOCA3My41ODk2OTcsNDQuOTY5ODcwOCBDNzMuNTg5Njk3LDQ0Ljk2OTg3MDggNzMuNTk5NDY1NCw0NS40Mjk1OTMyIDc0LjAyMzQ5NTEsNDUuNzI0NjQ3MiBDNzQuNDQ3Mzg3Myw0Ni4wMTk3MDExIDg2LjA2MDE4OTgsNTIuNzMzMjQ1MSA4Ni4wNjAxODk4LDUyLjczMzI0NTEgQzg2LjA2MDE4OTgsNTIuNzMzMjQ1MSA4Ni41MzgxNTIsNTMuMDM5MTc1OSA4Ny4yNTMwMzE1LDUyLjczMzI0NTEgQzg3Ljk3NDY1MjYsNTIuMzMyNzI2MiA5OS4wNzMwMzM1LDQ1Ljk0MDI1ODIgOTkuMDczMDMzNSw0NS45NDAyNTgyIEM5OS4wNzMwMzM1LDQ1Ljk0MDI1ODIgOTkuNzE2MjMyNSw0NS42NjQ4OTI5IDk5LjcyMzY2MTksNDQuNDMwNzA1NiBDOTkuNzI1NzI1Nyw0NC4wNzQ3OTU5IDk5LjcyNjU1MTIsNDIuNjkzMjg4MSA5OS43MjY2ODg3LDQwLjk1NzUyMjkgTDg2LjY2MDA1MDIsNDguODc1MjM5NCBMODYuNjYwMDUwMiw0NS44NDYyMjEgQzg2LjY2MDA1MDIsNDQuNjAyMTIwNSA4Ny42MjMxMjg5LDQzLjc4MDk4MTEgODcuNjIzMTI4OSw0My43ODA5ODExIEw5OS4xODA3NjA3LDM2LjgxNjU3OTMgQzk5LjYxNjg5NzgsMzYuMzYxMTI1MSA5OS43MDY4NzY4LDM1LjYzMTU0NDcgOTkuNzI1NDUwNSwzNS4zNTU2Mjg3IEM5OS43MjUwMzc4LDM0LjA5MDQ2MjcgOTkuNzI0NDg3NCwzMi45ODUyODQxIDk5LjcyNDA3NDcsMzIuMjg1MTY3OCBMODYuNjYwMDUwMiw0MC4yMDEyMzIxIEw4Ni42NjAwNTAyLDM3LjAzNDUzMSBDODYuNjYwMDUwMiwzNS43OTA0MzA1IDg3LjQ4NTU0NjIsMzUuMjQ0NjU2NCA4Ny40ODU1NDYyLDM1LjI0NDY1NjQgTDk3LjUxNjAxMDUsMjkuMTY5MTMzOSBaIiBpZD0iU2hhcGUtQ29weSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" alt="element-logo" class="logo"> -->
               <span style="font-size: 22px;">NALA商品库</span></a>
            </el-col>
            <el-col :span="13">
                <el-menu theme="dark" :default-active="$store.state.router.headerCurRouter" class="el-menu-demo" mode="horizontal" unique-opened router>
                  <el-submenu index="8" @mouseleave.native="styleChange2">
                    <template slot="title">商品类目</template>
                    <el-row style="width:428px;">
                      <el-col style="width:114px;display:inline;float:left;">
                        <el-menu-item v-for="(value,key) in show_data.lev1" index="9" @mouseenter.native="styleChange(1,value)" style="width:114px;color:#48576a">
                          {{value}}
                        </el-menu-item>
                      </el-col>
                      <el-col v-show="is_show.lev2_show" style="width:114px;display:inline;float:left;">
                        <el-menu-item v-for="(value,key) in show_data.lev2" index="9" @mouseenter.native="styleChange(2,value)" style="width:114px;color:#48576a">
                          {{value}}
                        </el-menu-item>
                      </el-col>
                      <el-col v-show="is_show.lev3_show" style="width:200px;display:inline;float:left;">
                        <el-menu-item v-for="(value,key) in show_data.lev3" index="9" @click.native="categoryChoose(value,key)" style="width:114px;color:#48576a">
                          {{value}}
                        </el-menu-item>
                      </el-col>
                    </el-row>
                  </el-submenu>
                    <!-- <el-menu-item index="1">最新采购</el-menu-item> -->
                    <!-- <el-menu-item index="3"  :route="{path: '/database'}">TOP100</el-menu-item> -->
                    <el-menu-item index="4"  :route="{path: '/database/top/else'}">商品列表</el-menu-item>
                    <el-menu-item index="2" :route="{path: '/outside'}">商业数据</el-menu-item>
                    <el-menu-item index="5" :route="{path: '/material'}">成分查询</el-menu-item>
                     <el-menu-item index="6"  :route="{path: '/showdata'}">数据分析</el-menu-item>
                  <el-menu-item index="99"  :route="{path: '/brand'}">品牌展示</el-menu-item>
                      <el-submenu v-for="(item, index) in nodelist"  index="6" >
                        <template slot="title">{{index}}</template>
                        <el-menu-item v-for="(itemi,keyi) in item"  index="7" :route="{path: keyi}" style="color:#48576a">{{itemi}}</el-menu-item>
                      </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="3"  class="userinfo" v-if="this.$store.state.user.userinfo.username">
                <!-- <span class='username'><i class='fa fa-user'></i>{{this.$store.state.user.userinfo.username}}</span> -->
                <span class='username'>
                    <el-dropdown
                        trigger="click"
                        @command='setDialogInfo'>
                        <span class="el-dropdown-link">
                            {{this.$store.state.user.userinfo.username}}<i class="el-icon-caret-bottom el-icon--right"></i>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <!-- <el-dropdown-item command='info'>修改信息</el-dropdown-item> -->
                            <el-dropdown-item
                                command='pass'>修改密码</el-dropdown-item>
                            <!-- <el-dropdown-item
                                command='set'
                                v-if='$store.state.user.userinfo.pid==0'>系统设置</el-dropdown-item> -->
                        </el-dropdown-menu>
                    </el-dropdown>
                </span>
                <i class="fa fa-sign-out logout" @click='logout'></i>
            </el-col>
            <el-col :span="3"  class="logo-container" v-if="!this.$store.state.user.userinfo.username">
                <a href="/login" style="border:1px solid #e2e2e2; border-radius: 3px;color:#fff;padding:4px 8px;">登录</a>
            </el-col>
        </el-row>

        <el-dialog size="tiny" :title="dialog.title" class="el-dialogi" :modal=false
            v-model="dialog.show_pass">
            <el-form style="margin:20px;width:80%;"
                label-width="100px"
                :model="dialog.user_info"
                :rules="dialog.user_info_rules"
                ref='user_info'>
                <el-form-item class='edit-form'
                    label="邮箱"
                    prop='email'>
                    <el-input v-model="dialog.user_info.email" disabled placeholder='常用邮箱'></el-input>
                </el-form-item>
                <el-form-item class='edit-form'
                    label="用户名称"
                    prop='username'>
                    <el-input v-model="dialog.user_info.username" disabled placeholder='用户名'></el-input>
                </el-form-item>
                <el-form-item class='edit-form'
                    label="当前密码"
                    prop='old_password'>
                    <el-input
                        type='password'
                        placeholder='当前密码'
                        auto-complete='off'
                        v-model="dialog.user_info.old_password"></el-input>
                </el-form-item>
                <el-form-item class='edit-form'
                    label="新密码"
                    prop='password'>
                    <el-input
                        type='password'
                        placeholder='新密码'
                        auto-complete='off'
                        v-model="dialog.user_info.password"></el-input>
                </el-form-item>
                <el-form-item class='edit-form'
                    label="确认密码"
                    prop='password_confirm'>
                    <el-input
                        type='password'
                        placeholder='确认密码'
                        auto-complete='off'
                        v-model="dialog.user_info.password_confirm"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialog.show_pass = false">取 消</el-button>
                <el-button type="primary" @click="updUserPass('user_info')">确 定</el-button>
            </span>
        </el-dialog>


        <!-- <el-dialog size="small" :title="dialog.title"
            v-model="dialog.show_set">
            <el-form style="margin:20px;width:80%;"
                label-width="100px"
                v-model='dialog.set_info'
                ref='set_info'>
                <el-form-item label="登录方式">
                    <el-select placeholder="请选择登录方式"
                        v-model='dialog.set_info.login_style'>
                        <el-option label="单一登录" value="1"></el-option>
                        <el-option label="多点登录" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="禁止修改密码">
                    <el-select placeholder="请选择用户"
                        multiple
                        v-model='dialog.set_info.disabled_update_pass'>

                        <el-option
                            v-for='user in dialog.set_info.select_users'
                            :label='user.username'
                            :value='user.id+""'></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialog.show_set = false">取 消</el-button>
                <el-button type="primary" @click="onUpdateSetting">确 定</el-button>
            </span>
        </el-dialog> -->
    </header>
</template>

<script>
    import HeadNavJs from './HeadNav.js';
    export default HeadNavJs;
</script>

<style scoped>
    .logo-container{
        height: 60px;
        line-height: 60px;
    }
    .logo{
        height: 50px;
        width: auto;
        float:left;
        margin-left: 10px;
        margin-top: 10px;
    }
    .fa-user{
        position: relative;
        top:-2px;
        margin-right: 4px;
    }
    .head-nav{
        width:100%;
        height: 60px;
        background: #324057;
        position: fixed;
        top:0px;
        left:0px;
        z-index: 999;
        color:#FFF;
        border-bottom: 1px solid #1F2D3D;
    }
    .logout{
            width:60px;
            height: 60px;
            line-height: 60px;
            text-align: center;
            float: right;
            cursor: pointer;
        }
    .userinfo{
        text-align: right;
    }
    .username{
        height: 60px;
        line-height: 60px;
        cursor: pointer;

    }
    .el-dropdown{
            color:#FFF;
        }
</style>
