import {
    top as TopApi
} from '../../../../../request/request.js';

//引入echarts插件
import
 Statis
 from '../../../../common/Echarts/Line/';
 import
 Scatter
 from '../../../../common/Echarts/Scatter/';

 import Pie from '../../../../common/Echarts/Pie/';

 var moment = require('moment');

export default {
  name: 'top-detail',
    components: {
        Statis,
        Scatter,
        Pie
    },
    data() {
        return {
          imgList:[],
          imgshow:false,
          relationnone:false,
          relations:[
          ],
          salepie:false,
          echarts_pie: {
                id: 'echartssalePie',
                title: '近30天各店铺销售额占比',
                subtext: '销售额占比分布描述信息',
                hovertitle: '近30天各店铺销售额占比',
                textlist:[],
                datalist: []
            },
          echarts_stock: {
                id: 'echartsStock',
                title: '库龄分布',
                subtext: '各批次商品库龄分布描述信息',
                hovertitle: '库龄占比',
                textlist:[],
                datalist: []
            },
          rule_data:{
                  keyword: [{
                      required: true,
                      message: '关键字不能为空！',
                      trigger: 'blur'
                  }],
                  desc: [{
                      required: true,
                      message: '话术不能为空！',
                      trigger: 'blur'
                  }],
                    url: [{
                      required: true,
                      message: '链接不能为空！',
                      trigger: 'blur'
                  }],
          },
            //需要给分页组件传的信息
            paginations: {
                current_page: 1,
                total: 0,
                page_size: 20,
                page_sizes: [20, 30, 40, 50],
                layout: "total, sizes, prev, pager, next, jumper"
            },
          customInfos:[],
          custac:'',
          custinfo:{
            keyword:'',
            desc:'',
            url:''
          },
          relation:'',
           value: '中档',
           lnage:'',
           dialogFormVisible: false,
           dialogFormsVisible: false,
            dialogFormpVisible: false,
            dialogFormrVisible: false,
            dialogFormcVisible:false,
            dialogctitle:'',
            gradeoptions:[{
              value: '中档',
              label: '中档'
            },
            {
              value: '高档',
              label: '高档'
            },
            {
              value: '低档',
              label: '低档'
            },
            ],
            productEditor:{},
            saleEditor:{},
            purchaseEditor:{},
            categoryOptions:[],
            selectedCategory:[],
          loading2:false,
          loading1:false,
          loading3:false,
          loading4:false,
          sale_qty_isActive:false,
          sale_price_isActive:false,
          sale_fee_isActive:true,
          tsale_qty_isActive:false,
          tsale_price_isActive:false,
          tsale_fee_isActive:true,
          week_isActive:true,
          month_isActive:false,
          quarter_isActive:false,
          year_isActive:false,
          sweek_isActive:true,
          sweek1_isActive:false,
          sweek2_isActive:false,
          sweek3_isActive:false,
          tweek_isActive:true,
          tweek1_isActive:false,
          tweek2_isActive:false,
          tweek3_isActive:false,
          echarts_first:{
            id:'echarts_first',
            column:'sale_fee',
            range:'week',
            title:'渠道销售曲线图',
            selectlegend: ['2'],
            legend:['nala淘宝店','所有店铺'],
            xaxis:[],
            datalist: [
            ]
          },
          echarts_top:{
            id:'echarts_top',
            title:'淘宝前五店铺',
            legend:['视频广告','直接访问','搜索引擎'],
            xaxis:[
                '周一','周二','周三','周四','周五','周六','周日'
            ],
            datalist: [
                {
                    name:'视频广告',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'直接访问',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'搜索引擎',
                    type:'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: {normal: {}},
                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
          },
          echarts_second:{
            id:'echarts_second',
            title:'周、月、季度、年成本情况 ',
            range:'week',
            legend:['成本'],
            xaxis:[],
            datalist: [


            ]
          },
          echarts_third:{
            id:'echarts_third',
            title:'周、月、季度、年毛利情况',
            range:'week',
            legend:['毛利'],
            xaxis:[],
            datalist: [

            ]
          },
          echarts_scatter:{
            id:'echarts_scatter',
            selectlegend:['2','5402'],
            title:'近30天各店铺情况',
            legend:['nala淘宝店','丽子美妆蘑菇街店','全部'],
            datalist: {}
          },
          shops:[],//所有店铺
          shopsord:[],
          activeName: 'first',//图表默认选项第一个
          images:[{pic_url:1},{pic_url:2},{pic_url:3},{pic_url:4}],
           sale:{
                'price':0,
                'avg_price':0,
                'price_rang':'0-0',
                'shoppe_pri':'0',
                'sale_today':0,
                'sale_month_true':0,
                'top_salem': 0,
                'top_name':'',
                'top_keys':'',
                'sale_year':'',
                'gross_profile_month':'',
                'gross_profile_rate_month':'',
                'floating_margin':''
           },
           top:{
            'qty':0,
            'price_range':0,
            'price_best':0,
            'price_shop':0
           },
           stock:{
                qty_use:0,
                qty:0,
                qty_way:0,
                age:0,
           },
           purchase:{
                'last_cost': 0,
                'last_purchase': '',
                'cost':0,
                'cost_range':'0-0',
                'cost_low': 0,
                'cost_check':0,
                need: 0,
                need_calc:0,
                need_pur:0,
                need_pur_time:'',
                lack_time:0,
                lack_day:0,
                flow_style:'',
                true_f:''
           },
           product:{
              product:'',//名称
              short_name:'',//简称
              brand_cn:'',//品牌
              country:'',//产地
              lnage:'',//上市时间
              grade:'',//档次
              specode:'',//sku
              spu:'',//spu
              barcode:'',//编码
              category:'',//类目
              'spec':'',//规格
              nick_name:'',//昵称
              materials:'',//质地
              element:'',//成分
              diameter:'',//直径
              weight:'',//重量
              height:'',//高
              width:'',//宽
              length:'',//长
              DNA:'Ysld09sh2zHyH8hsxZi8dujKLseji39wISjUgski',//
              effect:'',//功效
              pic_url:'',//图片
              skin:'',//适合肤质
              age:'',//适合年龄
              'shelflife':'',//保质期
              package:'',//包装
              prod_attr:'',//生成属性
              standard:'',//执行标准
              effect:'',//功效
              color:'',//色号
              volumn:'',//容量
              type:'',//型号
              weighti:'',//净重
              boxstyle:'',//箱规
              suite:'',//适用人群
              way:'',//使用方法
              life:'',//开封保质期
              mdate:'',//最后更新时间
              capacity:'',//体积
           },
           services:{},
           market:{},
           info:{},
           supplierloading:false,
          supplierList:[],
          suppliershow :false,
          dialogTableVisible:false,
          shopinfo:[],
          info_title:'',
          is_on_sale:true,
          sale_rate:'0%',
          saleList:[],
          onSaleVisible:false,
          tableDataTop:[],
        }
    },
    watch: {
      '$route':['routerW']
    },
    methods:{
      routerW(){
        this.tableDataTop = [];
         if (this.$route.params.specode) {
            this.product.specode = this.$route.params.specode;
            //获取商品数据
            TopApi.findTop.call(this, {'specode':this.$route.params.specode}, (detail_data) => {
               this.product = detail_data.product;
               this.sale = detail_data.sale;
               this.stock = detail_data.stock;
               this.purchase = detail_data.purchase;
                this.getToptData(this.sale.top_keys);
            });
            //获取所有店铺信息
            TopApi.shopList.call(this,{},(shopList) => {
                  this.shops = shopList.ret;
                  this.shopsord = shopList.ord;
            })
            //获取渠道销售曲线最初数据（销售额，nala淘宝店，7天）
            this.echarts_first_range('week');

            //获取话术信息
            this.getList({
            where:{'specode':this.$route.params.specode},
            fn: () => {

            }
            });
           //上架信息获取
             TopApi.onSale.call(this, {'specode':this.$route.params.specode}, (ret_data) => {
               // console.log(ret_data);
                if(ret_data.data===0){
                    this.is_on_sale = false;
                }else{
                   this.is_on_sale = true;
                    this.sale_rate = ret_data.rate+'%';
                    this.saleList = ret_data.data;
                }

            });
            //库龄信息获取
             TopApi.stockAge.call(this, {'specode':this.$route.params.specode}, (ret_data) => {
              this.stock.age = ret_data.avg;

              if(ret_data.list.length<1){
                 var defult = {
                    name: '0库存',
                    value: '0'
                }
                this.$set(this.echarts_stock.datalist, 0, defult);
              }else{
                  // Object.assign(this.echarts_stock.datalist,ret_data.list);
                  for (var f in ret_data.list) {
                      var value = {};
                      value.value =ret_data.list[f]['value'];
                      value.name = ret_data.list[f]['name'];
                      this.$set(this.echarts_stock.datalist, f, value);
                  }
              }


            });
             //获取关联商品
             this.getRelationsData();

        }else{
           this.$message({
            showClose: true,
            message: '警告哦，商品信息传输错误！请从TOP进入！',
            type: 'warning'
          });
        }
      },
      //showImg
      showImg(){
          if(  this.imgshow ==false){
            TopApi.imgList.call(this,{'specode':this.$route.params.specode},(imgList) => {
               
                this.imgList = imgList;
                  this.imgshow = true;
            })
          }        
      },
      //downImg
      downImg(){

      },
      //uploadImg
      uploadImg(){

      },
      //跳转关联商品
      goRelation(specode){
          this.$router.push({ name: 'top_detail', params: { specode: specode }});
      },

      saleListShow(){
          this.onSaleVisible = !this.onSaleVisible;
      },
      supplierShow(){
          if(this.suppliershow==false){
              this.supplierloading = true;
            //获取供应商信息
             TopApi.supplierList.call(this,{'specode':this.$route.params.specode},(supplierList) => {
                  this.supplierloading = false;
                  this.supplierList = supplierList;
                  this.suppliershow = true;
            })
          }

      },
      onEdit(row){
          this.dialogFormcVisible = true;
          this.dialogctitle = '编辑话术';
          this.custac = 'edite';
          let info  = {'id':row.id,'keyword':row.keyword,'desc':row.desc,'url':row.url}
          this.custinfo = info;
      },
      onDelete(row){
           this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            let data = {'id':row.id}
          TopApi.deleteCutom.call(this,data,(dataRet)=>{
              this.$message({
                type: 'info',
                message: '删除成功'
              });
              this.getList({
                where:{'specode':this.$route.params.specode},
                fn: () => {

                }

                });
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      //获取话术信息列表
      getList({
            page,
            page_size,
            where,
            fn
        } = {}) {

            var query = this.$route.query;

            this.paginations.current_page = page || parseInt(query.page) || 1;
            this.paginations.page_size = page_size || parseInt(query.page_size) || this.paginations.page_size;

            var data = {
                page: this.paginations.current_page,
                page_size: this.paginations.page_size
            };

            data = Object.assign(data, where || {});

            TopApi.customInfoList.call(this, data, (top_data) => {

                this.customInfos = top_data.list.data;
                this.paginations.total = top_data.list.total;
                fn && fn();
            });
        },
      createCust(){
          this.dialogFormcVisible = true;
          this.dialogctitle = '新增话术';
          this.custac = 'create';
          this.custinfo = {
            keyword:'',
            desc:'',
            url:''
          };
      },
      saveCusterm(){
          let data = {'specode':this.product.specode};
          Object.assign(data,this.custinfo);
          if(this.custac=='create'){
              data.action = 'create'
          }else{
            data.action = 'edite'
          }
          TopApi.custormEdite.call(this,data,(dataRet)=>{
                 this.$message({
                          message: dataRet.data,
                          type: 'success'
                  });
                  this.dialogFormcVisible = false;
                  this.getList({
                    where:{'specode':this.$route.params.specode},
                    fn: () => {

                    }
                    });
            });
      },
      attension(){
        // alert(this.product.product);
         // this.product.product = 'ddd';
      },
      dateChange(val){
          this.lnage = val;
      },
      infoEdite(tab){
           this.$confirm('此操作将永久编辑该内容, 是否继续?', '请确认', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {

                switch(tab){
                    case 'product':
                      let data = {};
                      let category = {};
                      category.category_3 = this.selectedCategory[0];
                      category.category_2 = this.selectedCategory[1];
                      category.category = this.selectedCategory[2];
                      Object.assign(data,this.productEditor,category);
                      data.grade = this.value;
                      data.lnage = this.lnage;
                      TopApi.productEdite.call(this,data,(dataRet)=>{
                          this.$message({
                            message: dataRet.msg,
                            type: 'success'
                          });
                          TopApi.productReload.call(this,{'specode':data.specode},(dataR)=>{

                              this.product = dataR.product;
                              this.dialogFormVisible = false;
                          })

                      })
                    break;
                    case 'sale':
                        let data_sale = {};
                        data_sale.specode = this.product.specode;
                        data_sale.price_rang = this.saleEditor.price_rang;
                        data_sale.shoppe_pri = (this.saleEditor.shoppe_pri)*100;
                        data_sale.top_name = this.saleEditor.top_name;
                        data_sale.top_keys = this.saleEditor.top_keys;
                        TopApi.saleEdite.call(this,data_sale,(dataRet)=>{
                          this.$message({
                            message: dataRet.msg,
                            type: 'success'
                          });
                          const datar  = {'specode':data_sale.specode}

                          TopApi.saleReload.call(this,datar,(dataR)=>{
                              this.sale = dataR.sale;
                              this.dialogFormsVisible = false;
                          });
                        });
                    break;
                    case 'purchase':
                       let data_pur = {};
                        data_pur.specode = this.product.specode;
                        data_pur.flow_style = this.purchaseEditor.flow_style;
                        data_pur.true_f = this.purchaseEditor.true_f;
                        data_pur.cost_check = this.purchaseEditor.cost_check;
                        data_pur.need_pur = this.purchaseEditor.need_pur;

                        TopApi.purchaseEdite.call(this,data_pur,(dataRet)=>{
                          this.$message({
                            message: dataRet.msg,
                            type: 'success'
                          });
                          const datar  = {'specode':data_pur.specode}
                          TopApi.purchaseReload.call(this,datar,(dataR)=>{
                              this.purchase = dataR.purchase;
                              this.dialogFormpVisible = false;
                          });
                        });
                    break;
                    case 'stock':
                    break;
                    case 'custom':
                    break;
                }

            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消编辑'
              });
            });
      },
      relationEdite(){
        let data = {};
        data.specode = this.product.specode;
        data.relation = this.relation;
        TopApi.relationEdite.call(this,data,(dataRet)=>{
            this.$message({
              message: dataRet.msg,
              type: 'success'
            });
            this.dialogFormrVisible = false;
            // TopApi.productReload.call(this,{'specode':data.specode},(dataR)=>{

            //     this.product = dataR.product;
            //     this.dialogFormVisible = false;
            // })

        })
      },

      //图标tab选择
      handleClick(tab, event) {
        // console.log(tab.name);
        switch(tab.name){
            case "second":
              this.echarts_second_range('week','second');
            break;
            case "third":
              this.loading2 = true;
              this.echarts_second_range('week','third');
            break;
            case "fourth":
              this.loading1 = true;
              this.getScatterData();
            break;
        }


      },
      //渠道销售曲线选择关注店铺
      selcetChoose(data){
        if(data==false){
            //首先更改图标中的数据元
            var arrayl = [];
            for(let i in this.echarts_first.selectlegend){
                let name = this.shopsord[this.echarts_first.selectlegend[i]];
                arrayl.push(name);
            }
            arrayl.push('所有店铺');
            this.echarts_first.legend = arrayl;
            this.getFirstData();
        }
      },
      //渠道销售曲线去除关注店铺
      removetag(tage){
          var a = this.echarts_first.legend.indexOf(tage.label);
          this.echarts_first.legend.splice(a,1);
      },
      //店铺销售情况
      selcetChoosei(data){
        if(data==false){
            //首先更改图标中的数据元
            var arrayl = [];
            for(let i in this.echarts_scatter.selectlegend){
                let name = this.shopsord[this.echarts_scatter.selectlegend[i]];
                arrayl.push(name);
            }
            arrayl.push('全部');
            this.echarts_scatter.legend = arrayl;
            this.loading1 = true;
            this.getScatterData();
        }
      },
      //店铺销售情况
      removetagi(tage){
          var a = this.echarts_scatter.legend.indexOf(tage.label);
          this.echarts_scatter.legend.splice(a,1);
      },

      //渠道销售曲线时间选择
      echarts_first_range(data){
        var arraylist = [];
        const styleArr = ['week_isActive','month_isActive','quarter_isActive','year_isActive'];
          for(let i in styleArr){
                this[styleArr[i]] = false;
            }
        this.echarts_first.range = data;
        switch(data){
          case 'week':
              this.week_isActive = true;
              for(let i=7;i>0;i--){
                  let now = moment().subtract(i, "days").format("MM-DD");
                  arraylist.push(now);
              }
              break;
          case 'month':
            this.month_isActive = true;
            for(let i=30;i>0;i--){
                  let now = moment().subtract(i, "days").format("MM-DD");
                  arraylist.push(now);
              }

              break;
           case 'quarter':
            this.quarter_isActive = true;
            for(let i=90;i>0;i--){
                  let now = moment().subtract(i, "days").format("MM-DD");
                  arraylist.push(now);
              }

              break;
          case 'year':
              this.year_isActive = true;
              for(let i=12;i>0;i--){
                  let now = moment().subtract(i, "months").format("YYYY-MM");
                  arraylist.push(now);
              }
              break;

        }
        this.echarts_first.xaxis = arraylist;
        this.getFirstData();
      },
      //渠道销售曲线项目选择
      echarts_first_column(data){
          const styleArr = ['sale_qty_isActive','sale_price_isActive','sale_fee_isActive'];
          for(let i in styleArr){
                this[styleArr[i]] = false;
            }
          switch(data){
            case 'sale_qty':
              this.sale_qty_isActive = true;
            break;
            case 'sale_fee':
              this.sale_fee_isActive = true;
            break;
            case 'sale_price':
              this.sale_price_isActive = true;
            break;
          }
          this.echarts_first.column = data;
          this.getFirstData()

      },
      //渠道销售曲线获取数据
      getFirstData(){
        this.loading4 = true;
        const column = this.echarts_first.column;
        const range = this.echarts_first.range;
        const shops = this.echarts_first.selectlegend;
        let specode = this.product.specode;
        if(column==''||range==''||shops==[]){
          this.$message({
            showClose: true,
            message: '请求错误： 请选择查看的具体店铺！！',
            type: 'error'
          });
          return;
        }
        const data = {column,range,shops,specode};
        TopApi.saleInfo.call(this,data,(dataRet)=>{
             this.loading4 = false;
            var array = [];
            for (let key in dataRet) {
                let a = {
                    name:'',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[]
                };
                a.name = key;
                a.data = dataRet[key];
                array.push(a);
            }
            this.echarts_first.datalist  = array;
        }
        ,()=>{
          this.loading4 = false;
        }
        )
      },
      //店铺销售情况数据获取
      getScatterData(){
        const shops = this.echarts_scatter.selectlegend;
        let specode = this.product.specode;
        if(shops==[]){
          this.$message({
            showClose: true,
            message: '请求错误： 请选择查看的具体店铺！！',
            type: 'error'
          });
          return;
        }
        const data = {shops,specode};
        TopApi.salepInfo.call(this,data,(dataRet)=>{
            this.loading1 = false;
            this.echarts_scatter.datalist  = dataRet;
        })
      },
      //成本、毛利率时间节点选择变更情况
      echarts_second_range(data,tab){
        var arraylist = [];
        const styleArr = ['sweek_isActive','sweek1_isActive','sweek2_isActive','sweek3_isActive'];
        const styleArri = ['tweek_isActive','tweek1_isActive','tweek2_isActive','tweek3_isActive'];
        var styleArrt = tab=='second' ? styleArr : styleArri;
          for(let i in styleArrt){
                this[styleArrt[i]] = false;
            }
        if(tab=='second')
            this.echarts_second.range = data;
        else
          this.echarts_third.range = data;
        switch(data){
          case 'week':
              if(tab=='second')
                this.sweek_isActive = true;
              else
                this.tweek_isActive = true;
              for(let i=7;i>0;i--){
                  let now = moment().subtract(i, "days").format("MM-DD");
                  arraylist.push(now);
              }
              break;
          case 'month':
            if(tab=='second')
              this.sweek1_isActive = true;
            else
              this.tweek1_isActive = true;
            for(let i=30;i>0;i--){
                  let now = moment().subtract(i, "days").format("MM-DD");
                  arraylist.push(now);
              }

              break;
          case 'seasion':
            // 12周
            if(tab=='second')
              this.sweek2_isActive = true;
            else
              this.tweek2_isActive = true;
            for(let i=120;i>0;i--){
                  let now = moment().subtract(i, "days").format("MM-DD");
                  arraylist.push(now);
              }

              break;
          case 'year':
            if(tab=='second')
              this.sweek3_isActive = true;
            else
              this.tweek3_isActive = true;
            for(let i=360;i>0;i--){
                  let now = moment().subtract(i, "days").format("MM-DD");
                  arraylist.push(now);
            }
              // for(let i=12;i>0;i--){
              //     let now = moment().subtract(i, "months").format("YYYY-MM");
              //     arraylist.push(now);
              // }
              break;

        }
        if(tab=='second'){
            this.loading3 = true;
            this.echarts_second.xaxis = arraylist;
            this.getSecondData();
        }else{
            this.loading2 = true;
            this.echarts_third.xaxis = arraylist;
            this.getThirdData();
        }

      },
      //成本获取脚本
      getSecondData(){
          const range = this.echarts_second.range;
           let specode = this.product.specode;
          if(range==''){
          this.$message({
            showClose: true,
            message: '请求错误： 请选择查看的时间节点！！',
            type: 'error'
          });
          return;
        }
        const data = {range,specode};
        TopApi.costInfo.call(this,data,(dataRet)=>{
            this.loading3 = false;
             var a = {
                    name:'成本',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data: dataRet
                };
              this.echarts_second.datalist = [a];
        }
        )

      },
      //毛利获取
      getThirdData(){
          const range = this.echarts_third.range;
          let specode = this.product.specode;
          if(range==''){
          this.$message({
            showClose: true,
            message: '请求错误： 请选择查看的时间节点！！',
            type: 'error'
          });
          return;
        }
        const data = {range,specode};
        TopApi.profitInfo.call(this,data,(dataRet)=>{
            this.loading2 = false;
             var a = {
                    name:'毛利',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data: dataRet
                };
              this.echarts_third.datalist = [a];
        })
      },

      //淘宝前五数据获取
      echarts_top_column(tab){
        this.$message({
            showClose: true,
            message: '请求错误： 数据抓取开发处理中，敬请期待！！',
            type: 'error'
          });

           const styleArr = ['tsale_qty_isActive','tsale_price_isActive','tsale_fee_isActive'];
          for(let i in styleArr){
                this[styleArr[i]] = false;
            }
          switch(tab){
            case 'sale_qty':
              this.tsale_qty_isActive = true;
            break;
            case 'sale_fee':
              this.tsale_fee_isActive = true;
            break;
            case 'sale_price':
              this.tsale_price_isActive = true;
            break;
          }
          this.echarts_top.column = data;
          this.getTopData();
      },
      //真实获取淘宝数据
      getTopData(){
        // this.loadingt = true;
        const column = this.echarts_top.column;
        const top_keys = this.sale.top_keys;
        let specode = this.product.specode;
        if(column==''||specode==''){
          this.$message({
            showClose: true,
            message: '请求错误： 请选择查看的查看项目！！',
            type: 'error'
          });
          return;
        }
        const data = {column,top_keys,specode};
         TopApi.getTopData.call(this,data,(dataRet)=>{
          console.log(dataRet);
            // this.categoryOptions = dataRet;
            // this.selectedCategory = [dataRet.category3,dataRet.category2,dataRet.category]
            // this.dialogFormVisible = true;
        })
      },


      //编辑商品信息
      prodEdite(){
        Object.assign(this.productEditor,this.product)
        this.value = this.product.grade;
        TopApi.categoryList.call(this,{},(dataRet)=>{
            this.categoryOptions = dataRet;
            this.selectedCategory = [dataRet.category3,dataRet.category2,dataRet.category]
            this.dialogFormVisible = true;
        })

      },
      //渠道对比（从气泡图切换到饼状图）
      changePie(){
          this.loading1 = true;
          this.salepie = true;
          let specode = this.product.specode;
          const data = {specode};
          TopApi.salePie.call(this,data,(dataRet)=>{
              this.loading1 = false;
              if(dataRet.length<1){
                 var defult = {
                    name: '0',
                    value: '0'
                }
                this.$set(this.echarts_pie.datalist, 0, defult);
              }else{

                  for (var f in dataRet) {
                      var value = {};
                      value.value =dataRet[f]['value'];
                      value.name = dataRet[f]['name'];
                      this.$set(this.echarts_pie.datalist, f, value);
                  }
              }
          })
      },

      //编辑销量
      saleEdite(){
        Object.assign(this.saleEditor,this.sale)
        this.saleEditor.shoppe_pri = this.saleEditor.shoppe_pri/100;
         this.dialogFormsVisible = true;
      },
      //编辑采购
      purchaseEdite(){
        Object.assign(this.purchaseEditor,this.purchase)
         this.dialogFormpVisible = true;
         this.purchaseEditor.pur_cost =  this.purchaseEditor.pur_cost/10000;
         this.purchaseEditor.last_pur_price = this.purchaseEditor.last_pur_price/10000;p
         this.purchaseEditor.hist_min =  this.purchaseEditor.hist_min/10000;
         this.purchaseEditor.min_cost =  this.purchaseEditor.min_cost/10000+'~'+this.purchaseEditor.max_cost/10000;
      },
      relationc(){
        this.dialogFormrVisible = true
      },

      /* 获取店铺详细销量*/
      showdetails(content){
        this.dialogTableVisible = true;
        const action = content == '近日销量' ? 'day' : 'month';
        const specode = this.$route.params.specode;
        const data = {action,specode};
        this.shopinfo = [];
        TopApi.getDetailOfShips.call(this,data,(dataRet)=>{
            // console.log(dataRet);
            this.shopinfo = dataRet;
        });
      },
         /*获取相关商品信息*/
           getRelationsData(){
         let specode = this.product.specode;
         let data = {specode};
         TopApi.getRelations.call(this,data,(dataRet)=>{
            //console.log(dataRet);
            this.relations = dataRet;
            if(dataRet.length<1)
              this.relationnone = true;
        });
      },


         deleteRelation(id) {
        this.$confirm('确定删除该关联商品吗, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
                let data = {};
            data.relation = id;
            TopApi.deleteRelation.call(this,data,(dataRet)=>{
              this.$message({
                          type: 'success',
                          message: '删除成功!'
                        });

              this.getRelationsData();
            });

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },

      getSummaries(param){
        const { columns, data } = param;
        //console.log(param);
        const sums = [];
        columns.forEach((column, index) => {
          if (index === 0) {
            sums[index] = '合计';
            return;
          }
          const values = data.map(item => Number(item[column.property]));
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += ' 元';
          } else {
            sums[index] = 'N/A';
          }
        });

        return sums;
      },

      //获取淘宝table抓取数据
      getToptData(keyword){
          if(keyword.length>0){
             TopApi.getToptData.call(this, {'search':keyword}, (detail_data) => {
               if(detail_data.data.length>0) {
                 this.tableDataTop = detail_data.data;
                 this.top = detail_data.agg;
               }
            });
          }
      },

    },
    created(){
        if (this.$route.params.specode) {
            this.product.specode = this.$route.params.specode;
            //获取商品数据
            TopApi.findTop.call(this, {'specode':this.$route.params.specode}, (detail_data) => {
               this.product = detail_data.product;
               this.sale = detail_data.sale;
               this.stock = detail_data.stock;
               this.purchase = detail_data.purchase;
               this.getToptData(this.sale.top_keys);
               //console.log(this.sale);
            });
            //获取所有店铺信息
            TopApi.shopList.call(this,{},(shopList) => {
                  this.shops = shopList.ret;
                  this.shopsord = shopList.ord;
            })
            //获取渠道销售曲线最初数据（销售额，nala淘宝店，7天）
            this.echarts_first_range('week');

            //获取话术信息
            this.getList({
            where:{'specode':this.$route.params.specode},
            fn: () => {

            }
            });
           //上架信息获取
             TopApi.onSale.call(this, {'specode':this.$route.params.specode}, (ret_data) => {
               // console.log(ret_data);
                if(ret_data.data===0){
                    this.is_on_sale = false;
                }else{
                   this.is_on_sale = true;
                    this.sale_rate = ret_data.rate+'%';
                    this.saleList = ret_data.data;
                }

            });
            //库龄信息获取
             TopApi.stockAge.call(this, {'specode':this.$route.params.specode}, (ret_data) => {
              this.stock.age = ret_data.avg;

              if(ret_data.list.length<1){
                 var defult = {
                    name: '0库存',
                    value: '0'
                }
                this.$set(this.echarts_stock.datalist, 0, defult);
              }else{
                  // Object.assign(this.echarts_stock.datalist,ret_data.list);
                  for (var f in ret_data.list) {
                      var value = {};
                      value.value =ret_data.list[f]['value'];
                      value.name = ret_data.list[f]['name'];
                      this.$set(this.echarts_stock.datalist, f, value);
                  }
              }


            });
             //获取关联商品
             this.getRelationsData();


        }else{
           this.$message({
            showClose: true,
            message: '警告哦，商品信息传输错误！请从TOP进入！',
            type: 'warning'
          });
        }
    }
}
