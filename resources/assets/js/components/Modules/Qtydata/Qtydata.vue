<template>
  <div>
   <el-col  class='actions-top'>
   <!-- <form   action="http://localhost:1826/index.php/Analysis/export" method="get">  
       <input type="text" name="name"> 
      <input type="submit" value="提交">  
  </form>   -->
 <el-form :inline="true" :model="search_data" class="form-inline">
   <el-form-item label="SKU编码">
    <el-input v-model="search_data.specode"></el-input>
  </el-form-item>
   <el-form-item label="商品条码">
    <el-input v-model="search_data.barcode"></el-input>
  </el-form-item>
  <el-form-item label="商品名称">
    <el-input v-model="search_data.product"></el-input>
  </el-form-item>
</el-form>
 <div class="adc" >
   <el-button type="info" icon="search" @click='onSearch'>搜索</el-button>    
   <!-- <el-button type="success" @click="submit">导出</el-button> -->
 </div>
  
</el-col>    
       <el-table
    :data="QtyData"
    border
    style="width: 100%">  
     <el-table-column
       fixed
      prop="importance"
      label="sku重要性"
      width="150">
    </el-table-column>
    <el-table-column
       fixed
      prop="specode"
      label="sku编码"
      width="150">
    </el-table-column>
     <el-table-column
     fixed
      prop="product"
      label="商品名"
      width="150">
    </el-table-column>
     <el-table-column
      prop="barcode"
      label="条形码"
      width="120">
    </el-table-column>
     <el-table-column
      prop="flow_style"
      label="流通属性"
      width="120">
    </el-table-column>
      <el-table-column
      prop="replay_attr"
      label="补货属性"
      width="120">
    </el-table-column>
      <el-table-column
        prop="pur_cost"
        label="加权成本"
        width="120">
        <template scope="scope">
             {{scope.row.pur_cost/10000}}
         </template>
      </el-table-column>

       <el-table-column
        prop="month_3"
        label="前三月均销量"
        width="120">
       
      </el-table-column>
        <el-table-column
        prop="month_cost"
        label="月均成本金额"
        width="120">
      </el-table-column>     
        <el-table-column
          prop="month_predict"
          label="本月预测销量"
          width="120">
        </el-table-column>
        <el-table-column
          prop="qty"
          label="库存"
          width="120">
        </el-table-column>
        <el-table-column
          prop="qty_way"
          label="在途库存"
          width="120">
        </el-table-column>
        <el-table-column
          prop="qty_standard"
          label="库存水准"
          width="120">
        </el-table-column>
        <el-table-column
          prop="qty_order"
          label="库存+订单水准"
          width="120">
        </el-table-column>
          <el-table-column
          prop="plan_num"
          label="计划下单量"
          width="120">
        </el-table-column>
       
  </el-table>
     <div class="block" >
   <el-col :span="24" class='btm-action' align="center"  style="margin-top:30px;">
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
    </div>
  </div>
</template>
<script>
    import QtydataJs from './Qtydata.js';
    export default QtydataJs;
</script>
<style >
  .adc{   
      float:right;
  }
  .actions-top{
    margin-bottom: 9px;
  }
  .form-inline{
    float: left;
  }
</style>