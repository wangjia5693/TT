import Api from '../../request/request';

export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.form.checkPwd !== '') {
          this.$refs.form.validateField('checkPwd');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.form.pwd) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
        checkList:[],
        roles:[],
      currentPage:1,
      pageSize:2,
      tableData: [],
      total: 0,
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        user:'',
        pwd: '',
        checkPwd:'',
        email:'',
        phone:''
      },
      formLabelWidth: '120px',
      value:'',
      mycase: 0,
      status:0,
      rules:{
        pwd: [
          {validator: validatePass,trigger : 'blur'}
        ],
        checkPwd: [
          {validator:validatePass2,trigger: 'blur'}
        ]
      },
      title:''
    }
  },
  mounted(){;
    const data = {rows: this.pageSize};
    Api.userGetList.call(this,data,(dataRet)=>{
      this.total = dataRet.meta.pagination.total;
      this.currentPage = dataRet.meta.pagination.current_page;
      this.tableData = dataRet.data;
    });
      this.roleList();
  },
  methods: {
    handleCurrentChange(val) {
      this.currentPage = val;
      const data = {rows: this.pageSize,page:val};
      Api.userGetList.call(this,data,(dataRet) => {
          this.total = dataRet.meta.pagination.total;
          this.currentPage = dataRet.meta.pagination.current_page;
          this.tableData = dataRet.data;
      });
    },
      handleSizeChange(){},
    userAdd(){
      this.title = '新增用户';
      //this.status = 1;
      this.form.user = '';
      this.form.email = '';
      this.form.is_super = '';
      this.form.pwd = '';
      this.form.checkPwd = '';
      this.mycase = 0;
      //this.form.status = true;
      this.dialogFormVisible = true;
    },
      roleList(){
        Api.roleList.call(this,{rows:100},(ret_data)=>{
          // console.log(ret_data);
          this.roles = ret_data.data;
        })



      },

    userEdit(row){
      this.title = '编辑用户';
      this.form.user = row.name;
      this.form.email = row.email;
      this.form.is_super = row.is_super;
      this.mycase = row.id;
      this.dialogFormVisible = true;
    },

    onSubmit(form){
      this.$refs[form].validate((valid) => {
        if(valid){
          if(this.mycase == 0){
            const name = this.form.user;
            const password = this.form.pwd;
            const password_confirmation = this.form.checkPwd;
            const email = this.form.email;
            const data = {name,password,email,password_confirmation};
            Api.userAdd.call(this,data,(dataRet)=>{
              this.$message({
                type: 'info',
                message: dataRet.msg
              });
              this.reload();
            })
          }else{
              const id = this.mycase;
              const name = this.form.user;
              const password = this.form.pwd;
              const password_confirmation = this.form.checkPwd;
              const data = {id,name,password,password_confirmation};
            Api.userEdit.call(this,data,(dataRet) => {
              this.$message({
                type: 'info',
                message: dataRet.msg
              });
              this.reload();
            });
          }
          this.dialogFormVisible = false;
        }else{
          return false;
        }
      });
    },

    reload(){
      const data = {rows: this.pageSize};
      Api.userGetList.call(this,data,(dataRet)=>{
        this.total = dataRet.meta.pagination.total;
        this.currentPage = dataRet.meta.pagination.current_page;
        this.tableData = dataRet.data;
      });
    }
  },
}
