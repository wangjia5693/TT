<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;color:#f4645f;font-weight: 600">角色管理</span>
        <el-button style="float: right;" type="primary"  @click="roleAdd" size="small">新建</el-button>
      </div>
      <div>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="name" label="角色标识"></el-table-column>
          <el-table-column prop="display_name" label="角色名称"></el-table-column>
          <el-table-column prop="description" label="说明"></el-table-column>
          <el-table-column prop="created_at" label="创建时间"></el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <el-button
                    @click.native.prevent="roleEdit(scope.row)"
                    :plain="true" type="success"
                    size="small">
              编辑
            </el-button>
              <el-button
                      @click.native.prevent="roleperEdit(scope.row.id)"
                      :plain="true" type="warning"
                      size="small">
                权限
              </el-button>
              <el-button
                      :plain="true" type="danger"
                      size="small">
                删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-row  style="float: right;margin-top:30px;">
          <el-col :span="16">
            <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page.sync="currentPage"
                    :page-size="20"
                    :page-sizes="[20,50,80,100]"
                    layout="total, prev, pager, next"
                    :total="total">
            </el-pagination>
          </el-col>
        </el-row>
      </div>
    </el-card>


    <!--角色-->
    <el-dialog :title="title" v-model="dialogFormVisible" class="el-dialogi">
      <el-form :model="form" ref="form">
        <el-form-item label="角色标识" :label-width="formLabelWidth">
          <el-input v-model="form.name" ></el-input>
        </el-form-item>
        <el-form-item label="角色名称" :label-width="formLabelWidth">
          <el-input v-model="form.display_name"></el-input>
        </el-form-item>
        <el-form-item label="说明" :label-width="formLabelWidth">
          <el-input v-model="form.description" ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit()">确 定</el-button>
      </div>
    </el-dialog>


    <!--权限-->
    <el-dialog :title="title" v-model="perFormVisible" class="el-dialogi"  title="编辑权限">
      <el-tree :data="perList" :default-checked-keys="checkKeys" ref="tree" highlight-current  show-checkbox="" default-expand-all="" node-key="id" :props="defaultProps" >
      </el-tree>
      <div slot="footer" class="dialog-footer">
        <el-button @click="perFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="changePer()">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>

    import RoleJs from './Role.js';
    export default RoleJs;
</script>

<style>
  .unique-width{
    width: 100%;
  }
  .el-tree-node__children .el-tree-node{
    float:left;
  }
</style>






