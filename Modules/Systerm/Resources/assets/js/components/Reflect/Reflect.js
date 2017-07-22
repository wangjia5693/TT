import  AjaxApi from '../../request/systerm';

export default {
  data() {
    return {
      loading:false,
    }
  },
  mounted(){
  
  },
  methods: {
      optimize(){
        this.loading = true;
        AjaxApi.composerOp.call(this,{},(ret_data) => {
            this.loading = false;
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

