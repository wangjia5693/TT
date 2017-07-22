import {
  node as AjaxApi
} from '../../request/request.js';


export default {
  data() {
    return {
      currentPage:1,
      tableData: [],
      total: 0,
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name:'',
        title: '',
        status:true,
        par:'',
        level:''
      },
      formLabelWidth: '120px',
      value:'',
      mycase: 0,
      status:0,
      title:''
    }
  },
  mounted(){
    const curpage = 1;
    const data = {curpage};
    AjaxApi.nodeGet.call(this,data,(dataRet)=>{
      var count = dataRet.pop();
      this.total = count[0]['count'];
      this.tableData = dataRet[0];
    })
  },
  methods: {
    handleClick() {
      //console.log(1);
    },
    handleSizeChange(val) {
      //console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      const curpage = this.currentPage = val;
      const action = 'page';
       const data = {curpage,action};
       AjaxApi.nodeGet.call(this,data,(dataRet) => {
        this.tableData = dataRet[0];
       });
    },

    nodeAdd(){
      this.title = '新增节点';
      this.status = 1;
      this.form.url = '';
      this.form.title = '';
      this.form.status = true;
      this.form.par = '';
      this.form.level = '';
      this.mycase = 0;
      //this.form.status = true;
      this.dialogFormVisible = true;
    },

    nodeEdit(row){
      this.title = '节点编辑';
      this.form.url = row.url;
      this.form.title = row.title;
      this.form.par = row.par;
      this.form.level = row.level;
      this.mycase = row.id;
      this.status = 0;
      this.dialogFormVisible = true;
    },

    onSubmit(){
      const title = this.form.title;
      const url = this.form.url;
      const status = this.form.status ? 1 : 0;
      const level = this.form.level;
      const par = this.form.par;
      if(this.mycase){
        const id = this.mycase;
        const data = {id,title,url,status,level,par};
        AjaxApi.nodeEdit.call(this,data,(dataRet)=>{
          this.$message({
            type: 'info',
            message: dataRet
          });
          this.loadData();
        });
      }else{
        const data = {title,url,status};
        AjaxApi.nodeAdd.call(this,data,(dataRet)=>{
          this.$message({
            type: 'info',
            message: dataRet
          });
          this.loadData();
        });
      }
      this.dialogFormVisible = false
    },

    loadData(){
      const curpage = 1;
      const data = {curpage};
      AjaxApi.nodeGet.call(this,data,(dataRet)=>{
        var count = dataRet.pop();
        this.total = count[0]['count'];
        this.tableData = dataRet[0];
        this.currentPage = 1;
      })
    }
  },
}
