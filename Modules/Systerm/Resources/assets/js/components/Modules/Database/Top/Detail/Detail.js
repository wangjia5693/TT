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
 var moment = require('moment');

export default {
  name: 'top-detail',
    components: {
        Statis,
        Scatter
    },
    data() {
        return {
          loading2:false,
          loading1:false,
          sale_qty_isActive:false,
          sale_price_isActive:false,
          sale_fee_isActive:true,
          week_isActive:true,
          month_isActive:false,
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
            title:'淘宝前五店铺（数据为测试数据）',
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
                'price':140,
                'avg_price':125,
                'price_rang':'120-160',
                'shoppe_pri':'210',
                'sale_today':40,
                'sale_month':2058,
                'top_salem': 3620
           },
           stock:{
                qty_use:3023,
                qty:5455,
                qty_way:360
           },
           purchase:{
                'last_cost': 91.00,
                'last_purchase': '（2017-03-18）',
                'cost':92.00,
                'cost_range':'68-102',
                'cost_low': 80,
                'cost_check':96,
                need: 152,
                need_calc:263,
                need_pur:156,
                need_pur_time:'2017-03-18',
                lack_time:3,
                lack_day:4
           },
           product:{
              product:'悦诗风吟 绿茶茶籽保湿滋润精华液',
              brand_cn:'INNISFREE/悦诗风吟',
              country:'韩国',
              lnage:'2017-3-8',
              grade:'中',
              specode:'IFRAA002401N',
              spu:'DSFDFEFREFGR',
              barcode:'8806173517534',
              category:'护肤',
              'spec':'80ml',
              nick_name:'小绿瓶',
              materials:'液体',
              element:'',
              diameter:'',
              weight:112,
              height:115,
              width:44,
              length:144,
              DNA:'Ysld09sh2zHyH8hsxZi8dujKLseji39wISjUgski',
              effect:'',
              skin:'任何肤质',
              age:'18-25',
              'shelflife':'3年',
              package:'纸包装',
              prod_attr:'dd',
              standard:'fdd',
              effect:''

           },
           services:{},
           market:{},
           info:{}

            
        }
    },
    methods:{
      attension(){
        // alert(this.product.product);
         // this.product.product = 'ddd';
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
        const styleArr = ['week_isActive','month_isActive','year_isActive'];
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
        })
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

             var a = {
                    name:'成本',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data: dataRet
                }; 
              this.echarts_second.datalist = [a];
        })
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
      echarts_top_column(){
        this.$message({
            showClose: true,
            message: '请求错误： 数据抓取开发处理中，敬请期待！！',
            type: 'error'
          });
      }

    },
    mounted(){
        if (this.$route.params.specode) {
            //获取商品数据
            TopApi.findTop.call(this, {'specode':this.$route.params.specode}, (detail_data) => {
               this.product = detail_data.product;
               this.sale = detail_data.sale;
               this.stock = detail_data.stock;
               this.purchase = detail_data.purchase;
            });
            //获取所有店铺信息
            TopApi.shopList.call(this,{},(shopList) => {
                  this.shops = shopList.ret;
                  this.shopsord = shopList.ord;
            })
            //获取渠道销售曲线最初数据（销售额，nala淘宝店，7天）
            this.echarts_first_range('week');
            
        }else{
           this.$message({
            showClose: true,
            message: '警告哦，商品信息传输错误！请从TOP进入！',
            type: 'warning'
          });
        }
    }
}