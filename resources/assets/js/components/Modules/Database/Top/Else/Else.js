import {
    top as TopApi
} from '../../../../../request/request.js';
export default {
    name: 'top-list',
    data() {
        return {
            top_list: [],
             show_attr:{'pic_url':'图片','product':'商品名','category':'类目','spec':'规格','costs':'加权成本','brand_cn':'品牌','sale_today':'昨日销量','sale_ntoday':'昨日销售额'},
            hide_attr:{'short_name':'商品简称'},
            attr_ch:{'pic_url':'图片','product':'商品名','spec':'规格','costs':'加权成本','short_name':'商品简称','category':'类目','brand_cn':'品牌','sale_today':'昨日销量','sale_ntoday':'昨日销售额'},
            attr:{
                'pic_url':true,
                'product':true,
                'spec':true,
                'costs':true,
                'short_name':false,
                'category':true,
                'brand_cn':true,
                 'sale_today':true,
                 'sale_ntoday':true,
            },
            batch_id: '', //批量删除时这是多个用逗号隔开的id字符串
            batch_flag: true, //符合批量删除为true,否则为false

            //需要给分页组件传的信息
            paginations: {
                current_page: 1,
                total: 0,
                page_size: 100,
                page_sizes: [100, 150, 200, 250],
                layout: "total, sizes, prev, pager, next, jumper"
            },

            search_data: {
                product: '',
                order:'',
                order_column:''
            },

            //详情弹框信息
            dialog: {
                show: false,
                top_info: {}
            },

              //排序列
            order_columns: [{
              value: 'costs',
              label: '加权成本'
            }, {
              value: 'sale_today',
              label: '昨日销量'
            }],
            //顺序
            orders:[
                {
              value: 'ASC',
              label: '正序'
            }, {
              value: 'DESC',
              label: '逆序'
            }
            ],

            fields: {
                status: {
                    info: {
                        prop: 'status',
                        label: '状态',
                        sortable: true
                    },
                    filter: {
                        list: [{
                            text: '启用',
                            value: 1
                        }, {
                            text: '禁用',
                            value: 2
                        }],
                        multiple: false
                    },
                    style: {
                        width: '130',
                        align: 'center'
                    }
                },
                product: {
                    info: {
                        prop: 'product',
                        label: '商品名',
                    },
                    filter: {

                    },
                    style: {
                        width: '280',
                        align: 'center'
                    }
                },
                pic_url: {
                    info: {
                        prop: 'pic_url',
                        label: '图片',
                    }
                },
                short_name: {
                    info: {
                        prop: 'short_name',
                        label: '商品简称',
                    },
                    filter: {

                    },
                    style: {
                        width: '260',
                        align: 'center'
                    }
                },
                spec: {
                    info: {
                        prop: 'spec',
                        label: '规格',
                    },
                    filter: {

                    },
                    style: {
                        width: '150',
                        align: 'center'
                    }
                },
                category: {
                    info: {
                        prop: 'category',
                        label: '类目',
                    },
                    filter: {

                    },
                    style: {
                        width: '150',
                        align: 'center'
                    }
                },
                brand_cn: {
                    info: {
                        prop: 'brand_cn',
                        label: '品牌',
                    },
                    filter: {

                    },
                    style: {
                        width: '150',
                        align: 'center'
                    }
                },
                costs: {
                    info: {
                        prop: 'costs',
                        label: '加权成本',
                    },
                    filter: {

                    },
                    style: {
                        width: '150',
                        align: 'center'
                    }
                },
                sale_today: {
                    info: {
                        prop: 'sale_today',
                        label: '昨日销量',
                    },
                    filter: {

                    },
                    style: {
                        width: '150',
                        align: 'center'
                    }
                },
                sale_ntoday: {
                    info: {
                        prop: 'sale_ntoday',
                        label: '昨日销售额',
                        // sortable: true
                    },
                    filter: {

                    },
                    style: {
                        width: '150',
                        align: 'center'
                    }
                }
            }
        }
    },
    methods: {

        /**
         * 格式化状态
         */
        formatterStatus(item) {
            return item.status == 1 ? '启用' : '禁用';
        },

        filterSex(value, item) {
            return item.sex == value;
        },
        filterStatus(value, item) {
            return item.status == value;
        },
         /*
         * 显示隐藏列
         */
        toggle(item){
            if(item=='costs'&&!this.$store.state.user.userinfo.username){
                this.$message({
                    showClose: true,
                    message: '未登录不可查看',
                    type: 'warning'
                });
                return false;
            }
            // alert(this.attr[item]);
            if(this.attr[item]){
               delete this.show_attr[item];
               let obj = {};
               obj[item] = this.attr_ch[item];
               this.hide_attr = Object.assign(this.hide_attr,obj);
               this.attr[item] = !this.attr[item];
            }else{
                delete this.hide_attr[item];
               let obj = {};
               obj[item] = this.attr_ch[item];
               this.show_attr = Object.assign(this.show_attr,obj);
               this.attr[item] = !this.attr[item];
            }

        },


        /**
         * 表格列表触发CheckBox的事件
         * @param  {array} val 当前选中的用户信息数组，每个元素是用户信息对象
         */
        onSelectionChange(val) {
            // console.log(val);
            if (val.length) {
                this.batch_flag = false;
                var ids = [];
                for (var i = 0; i < val.length; i++) {
                    ids.push(val[i].id);
                }
                this.batch_id = ids.join(',');
            } else {
                this.batch_flag = true;
                this.batch_id = '';
            }
        },


        /**
         * 搜索事件
         */
        onSearch() {
            // console.log(this.search_data);
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



            this.getList({
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
            this.getList({
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
            this.getList({
                page_size,
                fn: () => {
                    this.setPath('page_size', page_size);
                }
            });
        },


        /**
         * 删除文章事件
         * @param  {object || boolean} top  当前文章信息对象或者为布尔值,为布尔值时，代表是批量删除
         * @param  {number} index 当前文章列表索引
         * @param  {array} list  当前文章列表数组
         */
        onDeleteTop(top, index, list) {
            // console.dir(user);

            if (top === true) {
                var id = this.batch_id;
            } else {
                var id = top.id;
            }

            TopApi.deleteTop.call(this, {
                id: id
            }, (data) => {
                if (top === true) {
                    this.top_list = this.top_list.filter(function(item, idx) {
                        return id.indexOf(item.id) === -1;
                    });
                } else {
                    list.splice(index, 1);
                }

                this.getList();
            });
        },


        /**
         * 修改文章
         * @param  {object} top 当前文章信息对象
         */
        onEditTop(top) {
            if (top && top.id) {
                this.$router.push('/database/top/edit?id=' + top.id);
            } else {
                this.$message({
                    showClose: true,
                    message: 'ID跑哪去了？',
                    type: 'error'
                });
            }
        },


        /**
         * 跳转进详情页面
         * @param  {object} top 当前文章信息对象
         */
        onSelectTop(top) {
            if(top){
                //name与params是一对，query与path是一对
                this.$router.push({ name: 'top_detail', params: { specode: top}});
             } else {
                this.$message({
                    showClose: true,
                    message: '商品跑哪去了？',
                    type: 'error'
                });
            }
        },


        onCloseView() {

        },


        /**
         * 获取文章列表
         * @param  {number} options.page      当前页码，切换页码时用
         * @param  {number} options.page_size 每页显示数量，改变每页数量时用
         * @param  {function} options.fn                            } 获取列表后的回调函数
         */
        getList({
            page,
            page_size,
            where,
            fn
        } = {}) {

            var query = this.$route.query;
            this.paginations.current_page = page || parseInt(query.page) || 1;
            this.paginations.page_size = page_size || parseInt(query.page_size) || this.paginations.page_size;
            this.paginations.brand = query.brand || '';
            var data = {
                page: this.paginations.current_page,
                page_size: this.paginations.page_size,
                brand:this.paginations.brand
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
            TopApi.elseTop.call(this, data, (top_data) => {
               
                this.top_list = top_data.list.data;
                this.paginations.total = top_data.list.total;
                fn && fn();
            });
        },
    },
    mounted() {
        this.$store.state.router.headerCurRouter = '4';
        if (this.$route.params.category) {
            var sd = {};
            let where = {'category':this.$route.params.category};
           this.getList({ 
                where,
                fn: () => {
                    // this.setPath(Object.assign(sd, where));
                }
            });
        }else{
            this.getList({
            fn: () => {
             
            }
        });
        }
        if(!this.$store.state.user.userinfo.username){
            this.attr.costs = false;
        }
        
    },
    '$route' (to, from) {

    }
}