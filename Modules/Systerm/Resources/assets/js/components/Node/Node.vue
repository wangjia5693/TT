<template>
  <div>
    <el-row style="margin-bottom: 30px;">
      <el-col :span="2" style="float: left;"><h1 style="font-size: 20px;">节点管理</h1></el-col>
      <el-col :span="4" style="float: right;"><el-button style="margin-top: -3px;" @click="nodeAdd" :case="mycase">新建</el-button></el-col>
    </el-row>

    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="title" label="名称"></el-table-column>
      <el-table-column prop="url" label="url路径"></el-table-column>
      <el-table-column prop="status" label="是否有效"></el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <el-button
            @click.native.prevent="nodeEdit(scope.row)"
            type="text"
            size="small">
            编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--form-dialog-->
    <el-dialog :title="title" v-model="dialogFormVisible" class="el-dialogi">
      <el-form :model="form">
        <el-form-item label="名称" :label-width="formLabelWidth" :status="status">
          <el-input v-model="form.title" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="url路径" :label-width="formLabelWidth">
          <el-input v-model="form.url" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="父级节点" :label-width="formLabelWidth">
          <el-input v-model="form.par" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="当前节点" :label-width="formLabelWidth">
          <el-input v-model="form.level" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="是否启用" :label-width="formLabelWidth">
          <el-switch v-model="form.status" on-color="#13ce66" off-color="#ff4949"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit()">确 定</el-button>
      </div>
    </el-dialog>

    <el-row  style="float: right;margin-top:30px;">
      <el-col :span="16">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="10"
          layout="total, prev, pager, next"
          :total="total">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import NodeJs from './Node.js';
  export default NodeJs;
</script>






