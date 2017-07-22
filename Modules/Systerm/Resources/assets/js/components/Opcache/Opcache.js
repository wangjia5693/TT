import  AjaxApi from '../../request/systerm';


export default {
  data() {
    return {
      isAble : false,
        loading:false,
        loading1:true,
        loading2:true,
    }
  },
  mounted(){
    this.check();
  },
  methods: {
    check(){
        AjaxApi.opcacheCheck.call(this,{},(ret_data)=>{
           if(ret_data.msg!=='1'){
               this.$message({
                   message: ret_data.msg,
                   type: 'warning'
               });
               return false;
           }
           this.isAble = true;
        })
    },
      clear(){
        if(!this.isAble){
            this.$message.error('Opcache扩展不可用！');
            return false;
        }
          this.loading = true;
          this.loading1 = false;
          AjaxApi.opcacheCache.call(this,{},(ret_data) => {
              this.loading = false;
              this.loading1 = true;
              this.$Notice.success({
                  title: '删除成功',
                  desc: '缓存文件已删除',
                  top: 50,
                  duration: 3
              })
          })
      },
      optimize(){
          if(!this.isAble){
              this.$message.error('Opcache扩展不可用！');
              return false;
          }
          this.loading = true;
          this.loading2 = false;

          AjaxApi.opcacheCacheAdd.call(this,{},(ret_data) => {
              this.loading = false;
              this.loading2 = true;
              this.$Notice.success({
                  title: '优化成功',
                  desc: '恭喜你提升了代码效率',
                  top: 50,
                  duration: 3
              })
          })
      }
  }
}
