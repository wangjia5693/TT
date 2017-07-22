import {
  system as AjaxApi
} from '../../../request/request.js';
export default {
  data() {
    return {
      form: {
        command: '',
        schedule: '',
        output: '',
        info:'',
        enabled: true,
        debug: false,
        buttonTitle: '创建脚本'
      },
      rules:{
        command:[
          { required: true, message: 'command不能为空', trigger: 'blur' },
        ],
        schedule:[
          { required: true, message: 'schedule不能为空', trigger: 'blur' },
        ],
        output:[
          { required: true, message: 'output不能为空', trigger: 'blur' },
        ],
        info:[
          { required: true, message: 'info不能为空', trigger: 'blur' },
        ]
      }
    };
  },

  mounted(){
    if(this.$route.params.id){
      const cid = this.$route.params.id;
      const data = {cid};
      AjaxApi.crontabEdit.call(this,data,(dataRet)=>{
        //console.log(dataRet);
        this.form = dataRet;
        this.form.buttonTitle = '点击更新';
      })
    }
  },
  methods: {
    onSubmit(form) {
      this.$refs[form].validate((valid) => {
        if(valid){
          //this.form.enabled = true;
          const command = this.form.command;
          const schedule = this.form.schedule;
          const output = this.form.output;
          const info = this.form.info;
          const enabled = this.form.enabled ? 1 : 0;
          const debug = this.form.debug ? 1 : 0;
          if(this.$route.params.id){
            const cid = this.$route.params.id;
            const data = {command,schedule,output,info,enabled,debug,cid};
            AjaxApi.crontabEdit.call(this, data, (dataRet)=>{
              this.$message({
                type: 'info',
                message: dataRet
              });
            })
          }else{
            const data = {command,schedule,output,info,enabled,debug};
            AjaxApi.addCrontab.call(this, data, (dataRet)=>{
              this.$message({
                type: 'info',
                message: dataRet
              });
            })
          }
        }else{
          return false;
        }
      });
    }
  }
};
