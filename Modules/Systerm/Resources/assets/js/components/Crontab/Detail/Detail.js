import {
    system as AjaxApi
} from '../../../request/request.js';

export default {
    data() {
      return {
        tableData: [],
        input:'',
        total:0
      }
    },
    mounted(){
      const curpage = 1;
      const data = {curpage};
      AjaxApi.crontabGet.call(this, data ,(dataRet)=>{
        //console.log(dataRet);
        const counts = dataRet[0]['count'];
        //alert(counts);
        this.total = counts;
        dataRet.shift();
        this.tableData = dataRet;
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
        //console.log(`当前页: ${val}`);
        const data = {curpage};
        AjaxApi.crontabGet.call(this,data,(dataRet) => {
          const counts = dataRet[0]['count'];
          //alert(counts);
          this.total = counts;
          dataRet.shift();
          this.tableData = [];
          this.tableData = dataRet;
        });
      },
      crontabAdd(){
        this.$router.push({ name: 'Crontab_add', params: {}});
      },

      keywordSearch(){
        const keyword = this.input;
        const curpage  = 1;
        const data = {keyword,curpage};
        AjaxApi.crontabGet.call(this, data, (dataRet) => {
          const counts = dataRet[0]['count'];
          this.total = counts;
          dataRet.shift();
          this.tableData = [];
          this.tableData = dataRet;
        })
      },

      crontabEdit(id){
        this.$router.push({ name: 'Crontab_add', params: {id : id}});
      },

      /*crontabDel(id){
        const cid = id;
        const data = {cid};
        AjaxApi.crontabDel.call(this,data,(dataRet)=>{
          this.$message({
            type: 'info',
            message: dataRet
          });
        })
        //alert(id);
      }*/
    },

  }
