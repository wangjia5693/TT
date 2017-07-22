<template>
    <main class="main-content">
      
    
  <div style="border:1px solid #ccc;border-radius:5px" class="bg" >
      <el-row>
        <el-col :span="5">
        <div class="grid-content bg-purple"  style="height:300px;width:150px;margin-left:100px;"  >
          <div style="height:110px;"></div>
          <div style="height:200px;border-right:1px solid #ccc;line-height:200px;">
              <img id='img_40' src="../../../assets/u2240.png" style="height: 32px;margin-left:10px;">
          </div>

        </div>
        </el-col>
        <el-col :span="18" class="ii">
        <div class="grid-content bg-purple-light " style="height:300px;padding-top:70px;padding-left:200px;;">
            
              <el-row :gutter="20" style="margin-top:20px;">
              <el-col :span="3"><div class="grid-content bg-purple" ><img src="../../../assets/u2216.png" style="height:30px;"></div></el-col>
              <el-col :span="3" >
              <div class="grid-content bg-purple" @click="analysis"><h3><a style="cursor:pointer">商品分析表</a></h3></div>
               </el-col>
              <el-col :span="3"><div class="grid-content bg-purple"><h3><a style="cursor:pointer">商品分析表</a></h3></div></el-col>
              <el-col :span="3"><div class="grid-content bg-purple"><h3><a style="cursor:pointer">商品分析表</a></h3></div></el-col>
              <el-col :span="3"><div class="grid-content bg-purple"><h3><a style="cursor:pointer">商品分析表</a></h3></div></el-col>
            </el-row>
                <el-row :gutter="20">
              <el-col :span="3"><div class="grid-content bg-purple"><img src="../../../assets/u2218.png" style="height:30px;"></div></el-col>
              <el-col :span="3"><div class="grid-content bg-purple"><h3>会员分析表</h3></div></el-col>
              <el-col :span="3"><div class="grid-content bg-purple"><h3>会员分析表</h3></div></el-col>
              <el-col :span="3"><div class="grid-content bg-purple"><h3>会员分析表</h3></div></el-col>
              <el-col :span="3"><div class="grid-content bg-purple"><h3>会员分析表</h3></div></el-col>
            </el-row>
                <el-row :gutter="20">
              <el-col :span="3"><div class="grid-content bg-purple"><img src="../../../assets/u2220.png" style="height:30px;"></div></el-col>
              <el-col :span="3">
              <div class="grid-content bg-purple" @click="Qtydata"><h3><a style="cursor:pointer">库存分析表</a></h3></div></el-col>
              <el-col :span="3"><div class="grid-content bg-purple"><h3>库存分析表</h3></div></el-col>
              <el-col :span="3"><div class="grid-content bg-purple"><h3>库存分析表</h3></div></el-col>
              <el-col :span="3"><div class="grid-content bg-purple"><h3>库存分析表</h3></div></el-col>
            </el-row>
                <el-row :gutter="20">
              <el-col :span="3"><div class="grid-content bg-purple"><img src="../../../assets/u2222.png" style="height:30px;"></div></el-col>
              <el-col :span="3"><div class="grid-content bg-purple"><h3>商品分析表</h3></div></el-col>
              <el-col :span="3"><div class="grid-content bg-purple"><h3>商品分析表</h3></div></el-col>
              <el-col :span="3"><div class="grid-content bg-purple"><h3>商品分析表</h3></div></el-col>
              <el-col :span="3"><div class="grid-content bg-purple"><h3>商品分析表</h3></div></el-col>
            </el-row>
      



        </div>
        </el-col>
      </el-row>
  
</div>
</main>
</template>
<script>
    import showdataJs from './showdata.js';
    export default showdataJs;
</script>
<style scoped>
    .main-content{
    position: relative;
    width: 1200px;
    margin:20px auto;
    background-color: #FFFFFF;
    height: auto;
  }
    .bg{
       background: rgb(255, 255, 255);
      
    }
  .el-row {
    margin-bottom: 35px;
    &:last-child {
      margin-bottom: 0;
    }

  }
  .el-col {
    border-radius: 4px;
   
  }

  .bg-purple {
    background: rgb(255, 255, 255);
  }
/*  .bg-purple-light {
   
    
  }*/
  .grid-content {
  
    background: rgb(255, 255, 255);
    border-radius: 4px;
    min-height: 30px;
  }
 .ii{
  width:900px;
  background: #e5e9f2;
  margin-right: 10px;
 }
</style>