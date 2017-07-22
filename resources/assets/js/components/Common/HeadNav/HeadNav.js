import {
    node as nodeApi,
    user as UserApi,
    system as SystemApi
} from '../../../request/request.js';


export default{
    name: 'head-nav',
    data() {
        return {
            nodelist: [],
            dialog: {
                show_set: false,
                show_pass: false,
                title: '修改密码',
                user_info: this.$store.state.user.userinfo,

                set_info: {
                    login_style: '',
                    disabled_update_pass: [],
                    select_users: []
                },

                user_info_rules: {
                    old_password: [{
                        required: true,
                        message: '旧密码不能为空！',
                        trigger: 'blur'
                    }],
                    password: [{
                        required: true,
                        message: '新密码不能为空！',
                        trigger: 'blur'
                    }, {
                        trigger: 'blur',
                        validator: (rule, value, callback) => {
                            if (value === '') {
                                callback(new Error('请再次输入密码'));
                            } else {
                                if ('' !== this.dialog.user_info.password) {
                                    this.$refs.user_info.validateField('password_confirm');
                                }
                                callback();
                            }
                        }
                    }],
                    password_confirm: [{
                        required: true,
                        message: '确认密码不能为空！',
                        trigger: 'blur'
                    }, {
                        trigger: 'blur',
                        validator: (rule, value, callback) => {
                            if (value === '') {
                                callback(new Error('请再次输入密码'));
                            } else if (value !== this.dialog.user_info.password) {
                                callback(new Error('两次输入密码不一致!'));
                            } else {
                                callback();
                            }
                        }
                    }],
                }
            },
            category:{
            },
            show_data:{
                lev1:[],
                lev2:[],
                lev3:[]
            },
            is_show:{
                lev1_show:true,
                lev2_show:'',
                lev3_show:''
            },
            indexs:{
                index_lev1:'',
                index_lev2:'',
                index_lev3:'',
            }
        }
    },
    mounted() {
        // this.onGetSetting();
      const action = 'head';
      const data = {action};
      if(this.$store.state.user.userinfo.email){
          nodeApi.NodeList.call(this,data,(dataRet) => {
            // console.log(dataRet);
            this.nodelist = dataRet;
          });   
      }
      SystemApi.categoryGet.call(this,'',(dataRet) => {
            this.category = dataRet;
            var keys = Object.keys(this.category);
            this.show_data.lev1 = keys;
          });

    },
    methods: {

        showwindow(){
            var url = "https://www.baidu.com";
            window.open (url, "", "height=1000, width=480, top=200,right=100 toolbar =no, menubar=no, scrollbars=no, resizable=no, location=no, status=no");
        },
        /**
         * 退出登录
         */
        logout() {
            this.$confirm('你确定退出登录么?', '确认退出', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$store.dispatch('remove_userinfo').then(() => {
                    this.$router.push('/login');
                });
            });
        },

        /**
         * 弹出框-修改密码或者系统设置
         * @param {string} cmditem 弹框类型
         */
        setDialogInfo(cmditem) {
            if (!cmditem) {
                this.$message.error('菜单选项缺少command属性');
                return;
            }
            switch (cmditem) {
                case 'info':
                    this.$router.push({
                        path: '/demo/user/edit',
                        query: {
                            id: this.$store.state.user.userinfo.id
                        }
                    });
                    break;
                case 'pass':
                    this.dialog.show_pass = true;
                    this.dialog.title = '修改密码';
                    break;
                case 'set':
                    this.onGetSetting();
                    this.dialog.show_set = true;
                    this.dialog.title = '系统设置';
                    break;
            }
        },

        /**
         * 修改密码
         * @param  {object} userinfo 当前修改密码的表单信息
         */
        updUserPass(userinfo) {
            this.$refs[userinfo].validate((valid) => {
                if (valid) {
                    UserApi.updPass.call(this, {
                        email:this.$store.state.user.userinfo.email,
                        old_password: this.dialog[userinfo].old_password,
                        password: this.dialog[userinfo].password,
                        password_confirm: this.dialog[userinfo].password_confirm
                    }, (data) => {
                        this.dialog.show_pass = false;
                        // this.$nextTick(() => {
                        this.$message.success('修改成功！');
                        // });
                    });
                }
            });
        },

        /**
         * 获取系统设置信息
         */
        onGetSetting() {
            //获取系统设置信息
            if (this.$store.state.user.userinfo.pid == 0) {
                SystemApi.getSetting.call(this, (data) => {
                    // console.log(data);
                    if (data.setting_info.disabled_update_pass) {
                        data.setting_info.disabled_update_pass = data.setting_info.disabled_update_pass.split(',');
                    } else {
                        data.setting_info.disabled_update_pass = [];
                    }
                    data.setting_info.login_style = data.setting_info.login_style + '';

                    this.dialog.set_info = data.setting_info;
                });
            } else {
                this.$message.error('只有管理员才能操作！');
            }
        },

        /**
         * 修改系统设置信息
         */
        onUpdateSetting() {
            // console.log(this.dialog.set_info.login_style);
            // console.log(this.dialog.set_info.disabled_update_pass);
            // console.log(this.dialog.set_info.id);

            SystemApi.updateSetting.call(this, {
                id: this.dialog.set_info.id,
                login_style: this.dialog.set_info.login_style,
                disabled_update_pass: this.dialog.set_info.disabled_update_pass && this.dialog.set_info.disabled_update_pass.length ? this.dialog.set_info.disabled_update_pass.join(',') : ''
            }, (data) => {
                // console.log(data);
                this.dialog.show_set = false;
            });
        },
        categoryChoose(value,key){
            this.$router.push({ name: 'productList', params: { category: value }});
            
        },
      styleChange(status,content){
          if (status == 1) {
            this.indexs.index_lev1 = content;
            this.show_data.lev2 = Object.keys(this.category[content]);
            this.is_show.lev2_show = true;
            this.show_data.lev3 = '';
            this.is_show.lev3_show = false;
          } else if(status == 2) {
            this.indexs.index_lev2 = content;
            this.show_data.lev3 = this.category[this.indexs.index_lev1][this.indexs.index_lev2];
            this.is_show.lev3_show = true;
          } else if(status == 3) {

            //this.indexs.index_lev3 = content;
          }
      },
      styleChange2(){
        this.is_show = [{
                    lev2_show:false,
                    lev3_show:false,
                }];
      }
    }
}
