import {
    system as AjaxApi
} from '../../request/request.js';
export default {
  data() {
    return {
      activeName2: 'first',
      textarea: '',
      input: '',
      options: '',
      value: '',
      linelimit:'',
      keyword: ''
    };
  },
  methods: {
    handleClick(tab, event) {
      //console.log(tab, event);
    },
    sendRequest(status){
      if(status == 1){
        AjaxApi.fieldCacheDelete.call(this,'',(dataRet)=>{
          this.$message({
            type: 'info',
            message: dataRet
          });
        });
      }else if(status == 2){
        AjaxApi.fileCacheDelete.call(this,'',(dataRet)=>{
          this.$message({
            type: 'info',
            message: dataRet
          });
        });
      }
    },
    fileContentGet() {
      const path = this.input;
      const file = this.value;
      const linelimit = this.linelimit;
      const keyword = this.keyword;
      const data = {path,file,linelimit,keyword};
      AjaxApi.fileContentGet.call(this,data,(dataRet)=>{
        //console.log(dataRet);
        this.textarea = dataRet;
      });
    },
    fileGet() {
      const path = this.input;
      const data = {path};
      AjaxApi.fileGet.call(this,data,(dataRet)=>{
          this.options = dataRet;
        });
    }
  }
};
