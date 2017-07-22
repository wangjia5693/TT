import AjaxApi from '../../request/rbac';

export default {
  data() {
    return {
        perList: [],
        chooseRow:'',
        checkKeys:[],
        defaultProps: {
            children: 'children',
            label: 'label'
        },
      currentPage: 1,
      pageSize:20,
      tableData: [],
      total: 0,
      dialogTableVisible: false,
      dialogFormVisible: false,
      perFormVisible: false,
      form: {
        name:'',
        display_name: '',
        description:'',
      },
      formLabelWidth: '120px',
      options:[],
      value:'',
      mycase: 0,
      title:''
    }
  },
  mounted(){
      this.getData();
  },
  methods: {
    getData(){
          const data = {rows: this.pageSize,page:this.currentPage};
          AjaxApi.roleGet.call(this,data,(dataRet)=>{
              this.total = dataRet.meta.pagination.total;
              this.currentPage = dataRet.meta.pagination.current_page;
              this.tableData = dataRet.data;
          })
      },
    handleClick() {
    },
    handleSizeChange(val) {
    },
    handleCurrentChange(val) {
        this.currentPage = val;
        this.getData();
    },

    roleAdd(){
      this.title = '新增角色';
      this.dialogFormVisible = true;
      this.form = {
          name:'',
          display_name: '',
          description:'',
      };
      this.mycase = 0;
    },

    roleEdit(row){
      this.title = '角色编辑';
      this.dialogFormVisible = true;
      this.form = {
          name:row.name,
          display_name:row.display_name,
          description:row.description,
      };
      this.mycase = row.id;
    },

    onSubmit(){
      if(this.mycase){
        const id = this.mycase;
        const data = {id};
        Object.assign(data,this.form);
        AjaxApi.roleEdit.call(this,data,(dataRet)=>{
          this.$message({
            type: 'info',
            message: dataRet.msg
          });
          this.getData();
        });
      }else{
          let data = {};
        Object.assign(data,this.form);
        AjaxApi.roleAdd.call(this,data,(dataRet)=>{
          this.$message({
            type: 'info',
            message: dataRet.msg
          });
          this.getData();
        });
      }

      this.dialogFormVisible = false;
    },

    roleperEdit(row){
        let id = row;
        this.chooseRow = row;
        AjaxApi.rolePerGet.call(this,{id},(dataRet)=>{
            this.perList = dataRet.permissionsl;
            this.checkKeys = dataRet.rolePermissions;
            this.perFormVisible = true
        })
      },
      changePer(){
        var permissions = this.$refs.tree.getCheckedKeys();
        var id = this.chooseRow;
        if(permissions.length<1){
            this.$message({
                type: 'error',
                message: '请选择具体的权限设置'
            });
            return false;
        }
        var data = {id,permissions};
          AjaxApi.rolePerEdit.call(this,data,(dataRet)=>{
              this.$message({
                  type: 'info',
                  message: dataRet.msg
              });
              this.perFormVisible = false;
          })
      }
  },
}
