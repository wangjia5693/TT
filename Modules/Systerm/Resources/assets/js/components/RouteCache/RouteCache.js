import  AjaxApi from '../../request/systerm';


export default {
  data() {
    return {
        loading:false,
        loading1:true,
        loading2:true,
    }
  },
  mounted(){
  
  },
  methods: {
      optimize(){
          this.loading = true;
          this.loading2 = false;

          AjaxApi.routeCacheAdd.call(this,{},(ret_data) => {
              this.loading = false;
              this.loading2 = true;
              this.$Notice.success({
                  title: '优化成功',
                  desc: '恭喜你提升了代码效率',
                  top: 50,
                  duration: 3
              })
          })
      },
      clear(){
          this.loading = true;
          this.loading1 = false;
          AjaxApi.routeCache.call(this,{},(ret_data) => {
              this.loading = false;
              this.loading1 = true;
              this.$Notice.success({
                  title: '删除成功',
                  desc: '缓存文件已删除',
                  top: 50,
                  duration: 3
              })
          })
      }


    }
}
