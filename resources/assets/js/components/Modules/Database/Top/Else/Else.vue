<template>
    <div class="list">
        <el-col :span="24" class='actions-top'>
            <el-button type='danger' icon='delete'
                :disabled='batch_flag'
                @click='onDeleteTop(true)'>关注选中</el-button>
            
            <el-form :inline="true" :model='search_data' class="demo-form-inline">
                <el-form-item>
                    <el-input placeholder="商品名称" v-model='search_data.product'></el-input>
                </el-form-item>
                <el-form-item>
                    <el-select v-model="search_data.order_column" placeholder="排序列" >
                        <el-option
                          v-for="item in order_columns"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                </el-form-item>
                   <el-form-item>
                    <el-select v-model="search_data.order" placeholder="顺序" >
                        <el-option
                          v-for="item in orders"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click='onSearch'>查询</el-button>
                </el-form-item>
                <el-form-item>
                   <el-dropdown>
                      <el-button type="primary">
                        更多属性<i class="el-icon-caret-bottom el-icon--right"></i>
                      </el-button>
                      <el-dropdown-menu slot="dropdown" class="attr">
                        
                            <div class="fieldEdit-show">
                                <h3>可见属性<span style="color:#D3DCE6;padding-left:12px;font-size:12px">单击隐藏</span></h3>
                              <span class="wrapper">
                                <el-button type="success" size='small' v-for="(item,key) in show_attr" @click="toggle(key)" >{{item}}</el-button>

                               <!--  <el-button type="success" size='small'>条码</el-button>
                                <el-button type="success" size='small'>使用方法</el-button> -->
                                </span>
                            </div>
                            <section class="fieldEdit-hide">
                                <h3>隐藏属性<span style="color:#D3DCE6;padding-left:12px;font-size:12px;margin-top:10px">单击显示</span></h3>   
                                <span  class="wrapper" >
                                <el-button :plain="true" type="success" size='small' v-for="(item,key) in hide_attr" @click="toggle(key)" >{{item}}</el-button>
                                <!-- <el-button :plain="true" type="success" size='small'>名称</el-button>
                                <el-button :plain="true" type="success" size='small'>产品宽</el-button> -->
                                </span>
                            </section>

                      </el-dropdown-menu>
                    </el-dropdown>
                </el-form-item>
            </el-form>
        </el-col>
        <el-table border style="width: 100%" align='center'
            :data="top_list" 
            stripe
            @selection-change='onSelectionChange'>
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                aligin:center
                v-if="attr.pic_url"
               :prop="fields.pic_url.info.prop"
                :label="fields.pic_url.info.label"
                >
                <template scope="scope">
                    <img :src= scope.row.pic_url alt="图片地址" height="80px" width="80px">
                </template>
            </el-table-column>
            <el-table-column
            v-if="attr.product"
                :prop="fields.product.info.prop"
                :label="fields.product.info.label"
                :align="fields.product.style.align"
                :sortable="fields.product.info.sortable"
                :context="_self"
                >
                 <template scope='scope'>
                    <a
                        @click='onSelectTop(scope.row.specode)'>
                            {{scope.row.product}}
                        </a>
                </template>
            </el-table-column>
            <el-table-column
            v-if="attr.short_name"
                :prop="fields.short_name.info.prop"
                :label="fields.short_name.info.label"
                :align="fields.short_name.style.align"
                :width="fields.short_name.style.width"
                :sortable="fields.short_name.info.sortable">
            </el-table-column>
            <el-table-column
            v-if="attr.spec"
                :prop="fields.spec.info.prop"
                :label="fields.spec.info.label"
                :align="fields.spec.style.align"
                :width="fields.spec.style.width"
                :sortable="fields.spec.info.sortable">
            </el-table-column>
            <el-table-column
            v-if="attr.category"
                :prop="fields.category.info.prop"
                :label="fields.category.info.label"
                :align="fields.category.style.align"
                :width="fields.category.style.width"
                :sortable="fields.category.info.sortable">
            </el-table-column>
            <el-table-column
            v-if="attr.brand_cn"
                :prop="fields.brand_cn.info.prop"
                :label="fields.brand_cn.info.label"
                :align="fields.brand_cn.style.align"
                :sortable="fields.brand_cn.info.sortable">
            </el-table-column>
            <el-table-column
            v-if="attr.costs"
                :prop="fields.costs.info.prop"
                :label="fields.costs.info.label"
                :align="fields.costs.style.align"
                :sortable="fields.costs.info.sortable">
                <template scope="scope">
                    {{scope.row.costs/10000}}
                  </template>
            </el-table-column>
            <el-table-column
            v-if="attr.sale_today"
                :prop="fields.sale_today.info.prop"
                :label="fields.sale_today.info.label"
                :align="fields.sale_today.style.align"
                :sortable="fields.sale_today.info.sortable">
            </el-table-column>
            <el-table-column
                v-if="attr.sale_ntoday"
                :prop="fields.sale_ntoday.info.prop"
                :label="fields.sale_ntoday.info.label"
                :align="fields.sale_ntoday.style.align"
                :sortable="fields.sale_ntoday.info.sortable"
                >
                     <template scope="scope">
                    {{scope.row.sale_ntoday/100}}
                  </template>
            </el-table-column>
            <!-- <el-table-column
                :prop="fields.status.info.prop"
                :label="fields.status.info.label"
                :align="fields.status.style.align"
                :width="fields.status.style.width"
                :sortable="fields.status.info.sortable"
                :formatter="formatterStatus"
                :filters="fields.status.filter.list"
                :filter-method="filterStatus"
                :filter-multiple="fields.status.filter.multiple">
            </el-table-column> -->
           <!--  <el-table-column
                label="操作"
                width="160" 
                align="center"
                :context="_self">
                <template scope='scope'>
                    <el-button 
                        type="info" 
                        icon='view' 
                        size="mini"
                        @click='onSelectTop(scope.row.specode)'></el-button>
                </template>
            </el-table-column> -->
        </el-table>
        <el-col :span="24" class='btm-action'>
            <el-pagination
                v-if='paginations.total>0'
                class='pagination'
                :page-sizes="paginations.page_sizes"
                :page-size="paginations.page_size"
                :layout="paginations.layout"
                :total="paginations.total"
                :current-page='paginations.current_page'
                @current-change='onChangeCurrentPage'
                @size-change='onChangePageSize'>
            </el-pagination>
        </el-col>
        <!-- <el-dialog size="small" 
            :title="dialog.top_info.title" 
            v-model="dialog.show"
            @close='onCloseView'>
            <div v-html="dialog.top_info.content"></div>
        </el-dialog> -->
    </div>
</template>

<script>
    import ElseJs from './Else.js';
    export default ElseJs;
</script>
<style scoped>
    .demo-form-inline{
        display: inline-block;
        float: right;
    }
    .btm-action{
        margin-top: 20px;
        text-align: center;
    }
    .actions-top{
        height: 46px;
    }
    .pagination{
        display: inline-block;
    }
     .attr{
        width: 400px;
        padding:20px;
    }
    .fieldEdit-hide{
        border-top: 1px solid #bfcbd9;
        margin-top: 10px;
    }
    .wrapper button{
        margin-top: 6px;
    }
    .wrapper{
        margin-top: 12px;
    }
    
</style>
