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
 <div class="demo">
   <el-button type="info" icon="search" @click='onSearch'>搜索</el-button>    
   <el-button type="success" @click="submit">导出</el-button>
 </div>
  
</el-col>    
 
  <el-table
    :data="AnalysisData"
    border
    style="width: 100%"
    >
    <el-table-column
      fixed
      prop="specode"
      label="SKU编码"
      width="150"
      align="center"
      >
    </el-table-column>
     <el-table-column
      fixed
      prop="product"
      label="商品名"
      width="150"
      align="center"
      >
    </el-table-column>
     <el-table-column
      prop="barcode"
      label="条形码"
      width="150"
      align="center"
      >
    </el-table-column>
     <el-table-column
      prop="flow_style"
      label="流通属性"
      align="center"
      width="150">
    </el-table-column>
   <!--   <el-table-column
      prop="sku"
      label="补货属性"
      align="center"
      width="150">
    </el-table-column> -->
    <el-table-column label="成本及毛利" align="center">
      <el-table-column
        prop="pur_cost"
        label="加权成本"
        align="center"
        width="120">
      </el-table-column>
        <el-table-column
        prop="last_pur_price"
        label="最近一次价格"
        align="center"
        width="120">
      </el-table-column>
        <el-table-column
        prop="lasr_pur_supplier"
        label="最近一次供应商"
        align="center"
        width="120">
      </el-table-column>
        <el-table-column
        prop="tb_price"
        label="淘宝店销售价格"
        align="center"
        width="120">
      </el-table-column>
        <el-table-column
        prop="gross_profile"
        label="毛利率"
        align="center"
        width="120">
      </el-table-column>
       </el-table-column>
     <!--  <el-table-column label="UV情况" align="center">
        <el-table-column
          prop="province"
          label="日UV"
          align="center"
          width="120">
        </el-table-column>
         <el-table-column
          prop="province"
          label="日转化"
          align="center"
          width="120">
        </el-table-column>   
      </el-table-column> -->
      <el-table-column label="销售情况" align="center">
        <el-table-column
          prop="sale_365"
          label="365天销售量"
          align="center"
          width="120">
        </el-table-column>
         <el-table-column
          prop="sale_n365"
          label="365天销售额"
          align="center"
          width="120">
        </el-table-column>
         <el-table-column
          prop="sale_30"
          label="30天销售量"
          align="center"
          width="120">
        </el-table-column>
         <el-table-column
          prop="sale_n30"
          label="30天销售额"
          align="center"
          width="120">
        </el-table-column>
        <el-table-column
          prop="sale_7"
          label="7天销售量"
          align="center"
          width="120">
        </el-table-column>
        <el-table-column
          prop="sale_n7"
          label="7天销售额"
          align="center"
          width="120">
        </el-table-column>
         <el-table-column
          prop="up_dn_30"
          label="30天销售涨跌"
          align="center"
          width="120">
        </el-table-column>
         <el-table-column
          prop="up_dn_7"
          label="7天销售涨跌"
          align="center"
          width="120">
        </el-table-column>
   </el-table-column>
   <el-table-column label="库存情况" align="center">
          <el-table-column
          prop="qty"
          label="库存量"
          align="center"
          width="120">
        </el-table-column>
         <el-table-column
          prop="qty_sum"
          label="库存总金额"
          align="center"
          width="120">
        </el-table-column>
         <el-table-column
          prop="turnover_day"
          label="周转天数"
          align="center"
          width="120">
        </el-table-column>
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
    import AnalysisJs from './Analysis.js';
    export default AnalysisJs;
</script>
<style scoped>
  .demo{
     margin-bottom: 20px;
    float:right;
  }
  .actions-top{
    margin-bottom: 0px;
  }
  .form-inline{
    float: left;
  }
</style>
