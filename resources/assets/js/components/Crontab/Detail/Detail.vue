<template>
  <div>

    <el-row>
      <el-col :span="2" style="float: left;"><h1 style="font-size: 20px;">脚本编辑</h1></el-col>
      <el-col :span="4"><el-button style="margin-top: -3px;" @click="crontabAdd">新建</el-button></el-col>

      <!--<div style="float: right;">-->
      <el-col :span="2" style="margin-left: 900px;"><el-input v-model="input" placeholder="请输入关键词"></el-input></el-col>
      <el-col :span="2"><el-button style="margin-left: 10px;" @click="keywordSearch">搜索</el-button></el-col>
      <!--</div>-->
    </el-row>

    <el-table :data="tableData" border style="width: 100%;margin-top: 30px;">
      <el-table-column prop="date" label="创建时间"></el-table-column>
      <el-table-column prop="command" label="命令"></el-table-column>
      <el-table-column prop="schedule" label="运行时间"></el-table-column>
      <el-table-column prop="output" label="输出目录"></el-table-column>
      <el-table-column prop="info" label="脚本描述"></el-table-column>
      <el-table-column prop="enabled" label="是否启用"></el-table-column>
      <el-table-column prop="debug" label="是否调试"></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button  type="text" size="small" @click="crontabEdit(scope.row.id)">编辑</el-button>
          <!--<el-button  type="text" size="small" @click="crontabDel(scope.row.id)">删除</el-button>-->
        </template>
      </el-table-column>
    </el-table>
    <el-row  style="float: right;margin-top:30px;">
      <!--<el-col :span="3"  style="float: left; widht:30px;" class="showtotal"><span class="demonstration">总数</span></el-col>-->
      <el-col :span="16">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-size="10"
          layout="total, prev, pager, next"
          :total="total">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    import DetailJs from './Detail.js';
    export default DetailJs;
</script>

<style>

  .showtotal{
    margin-top:8px !important;
  }
</style>
