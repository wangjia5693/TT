import AjaxApi from '../../request/rbac';


export default {
    data() {

        return {
            dialogTableVisible: false,
            dialogFormVisible: false,
            ruleForm: {
                name: '',
                display_name: '',
                fid: 0,
                description: '',
                icon: '',
                sort: 0,
                status:true
            },
            rules: {
                name: [
                    { required: true, message: '请输入路由名称', trigger: 'blur' },
                    { min: 1, max: 15, message: '长度在 1 到 15 个字符', trigger: 'blur' }
                ]
            },
            formLabelWidth: '120px',
            options:[],
            useroptions:[{'label':'顶级权限组','value':0}],
            value:'',
            mycase: 0,
            status:0,
            title:'',
            tableData: [
            ]
        }
    },
    mounted(){
        this.getData();
    },
    methods: {
        getData(){
            const data = {};
            AjaxApi.permissionGetList.call(this,data,(dataRet)=>{
                this.tableData = dataRet.data;
                if(dataRet.data.length>0){
                    let options = [{'label':'顶级权限组','value':0}];
                    collect(dataRet.data).each(function(item){
                        let option = {};
                        option.lable = item['display_name'];
                        option.value = item['id'];
                        options.push(option)
                    });
                    this.useroptions  = options;

                }
            })
        },

        handleCurrentChange(val) {
            this.currentPage = val;
            // this.getData();

        },
        handleSizeChange(){},
        authAdd(){
            this.title = '新增权限';
            this.dialogFormVisible = true;
            this.ruleForm = {
                name: '',
                display_name: '',
                fid: '',
                description: '',
                icon: '',
                sort: 0,
                status:true
            };
            this.mycase = 0;
        },

        handleEdit(row){
            this.title = '权限编辑';
            this.ruleForm = {
                name: row.name,
                display_name: row.display_name,
                fid: row.fid,
                description: row.description,
                icon: row.icon,
                sort: row.sort,
                status: row.status
            };
            this.mycase = row.id;
            this.dialogFormVisible = true;
        },

        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    if(this.mycase){
                        const id = this.mycase;
                        const data = {id};
                        Object.assign(data,this.ruleForm);
                        AjaxApi.permissionEdit.call(this,data,(dataRet)=>{
                            this.$message({
                                type: 'info',
                                message: dataRet.msg
                            });
                            this.getData();
                        });
                    }else{
                        const data = this.ruleForm;
                        // console.log(data);return false;
                        AjaxApi.permissionAdd.call(this,data,(dataRet)=>{
                            this.$message({
                                type: 'info',
                                message: dataRet.msg
                            });
                            this.getData();
                        });
                    }
                    this.dialogFormVisible = false
                } else {
                    this.$message.error('表单验证不通过！');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
}
