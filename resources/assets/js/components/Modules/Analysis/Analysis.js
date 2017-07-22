 import {
    analysis as anaApi
} from '../../../request/newAnalysis.js';

export default{
	data(){
		return{
			AnalysisData : [
              {
              	specode: '',
              	product: '',
              	barcode:'',
              	flow_style:'',
              	pur_cost:'',
              	last_pur_price:'',
              	lasr_pur_supplier:'',
              	sale_365:'',
              	sale_n365:'',
              	sale_30:'',
              	sale_n30:'',
              	sale_7:'',
              	sale_n7:'',
              	qty:'',
              	qty_sum:'',
              	up_dn_30:'',
              	up_dn_7:'',
              	tb_price:'',
              	gross_profile:''

              }
			],
      search_data : 
              {
                specode:'',
               barcode:'',
               product:''
              },
               
      

			  //需要给分页组件传的信息
          paginations: {
              current_page: 1,
              total: 0,
              page_size: 10,
              page_sizes: [ 10, 100, 150, 200, 250],
              layout: "total, sizes, prev, pager, next, jumper"
          },         
		}
	},
	methods:{
        //导出excel
        submit(){         
           window.location.href = 'http://pdcapi.simbaerp.com.cn/index.php/Analysis/export'     
         
        },


        //搜索
         onSearch(){
            console.log(this.search_data);
            var query = this.$route.query;
            var sd = {};

            var query = this.$route.query;
            for (var p in query) {
                sd[p] = query[p];
            }

            var where = {};

            for (var s in this.search_data) {
                if (this.search_data[s]) {
                    where[s] = this.search_data[s];
                } else {
                    if (sd[s]) {
                        delete sd[s];
                    }
                }
            }
                this.getListData({
                where,
                fn: () => {
                    this.setPath(Object.assign(sd, where));
                }
            });

        },

        

        /**
         * 改变页码和当前页时需要拼装的路径方法
         * @param {string} field 参数字段名
         * @param {string} value 参数字段值
         */
       setPath(field, value) {
            var path = this.$route.path,
                query = Object.assign({}, this.$route.query);

            if (typeof field === 'object') {
                query = field;
            } else {
                query[field] = value;
            }

            this.$router.push({
                path,
                query
            });
        },

    /**
         * 改变当前页事件
         * @param  {number} page 当前页码
         */
        onChangeCurrentPage(page) {
            this.getListData({
                page,
                fn: () => {
                    this.setPath('page', page);
                }
            });
        },

      
        /**
         * 改变每页显示数量事件
         * @param  {number} size 当前每页显示数量
         */
        onChangePageSize(page_size) {
         // alert(page_size);
            this.getListData({
                page_size,
                fn: () => {
                    this.setPath('page_size', page_size);
                }
            });
        },

		getListData({
              page,
              page_size,
              where,
              fn
          } = {}){
          	var query = this.$route.query;
            
            this.paginations.current_page = page || parseInt(query.page) || 1;
             this.paginations.page_size = page_size || parseInt(query.page_size) || this.paginations.page_size;

            var data = {
                page: this.paginations.current_page,
                page_size: this.paginations.page_size
            };

             if (where) {
                data = Object.assign(data, where || {});
            } else {
                for (var s in query) {
                    if (this.search_data[s] !== undefined) {
                        this.search_data[s] = query[s];
                        data[s] = query[s];
                    }
                }
            }
			
            anaApi.AnalysisData.call(this,data,(dataRet)=>{
                     //console.log(dataRet);
                    this.AnalysisData=dataRet.list.data;
                    this.AnalysisData.tb_price=dataRet.data3;
                    this.paginations.total = dataRet.list.total;
                 
                fn && fn();

            });
		}  

	},
	mounted() {
        this.getListData({
            fn: () => {    
            }
        });
    },
     '$route' (to, from) {

    }
}