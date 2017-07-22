<template>
  <div>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;color:#f4645f;font-weight: 600">用户管理</span>
        <el-button style="float: right;" type="primary"  @click="userAdd" size="small">新建</el-button>
      </div>
      <div>
          <!--用户列表-->
          <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="name" label="用户"></el-table-column>
            <el-table-column prop="email" label="邮箱"></el-table-column>
            <el-table-column prop="roles" label="所属角色"></el-table-column>
            <el-table-column prop="is_super" label="是否超级管理员">
              <template scope="scope">
                {{scope.row.is_super =='Y' ? '是': '否'}}
              </template>
            </el-table-column>
            <el-table-column prop="created_at" label="创建时间"></el-table-column>
            <el-table-column label="操作">
              <template scope="scope">
                <el-button
                        @click.native.prevent="userEdit(scope.row)"
                        type="text"
                        size="small">
                  编辑
                </el-button>
              </template>
            </el-table-column>
          </el-table>
          <!--分页-->
          <el-row  style="float: right;margin-top:30px;">
            <el-col :span="16">
              <el-pagination
                      @size-change="handleSizeChange"
                      @current-change="handleCurrentChange"
                      :current-page.sync="currentPage"
                      :page-sizes="[2, 50, 80, 100, 200]"
                      :page-size="pageSize"
                      layout="total, prev, pager, next"
                      :total="total">
              </el-pagination>
            </el-col>
          </el-row>
      </div>
    </el-card>

    <!--新增、编辑用户-->
    <el-dialog :title="title" v-model="dialogFormVisible" class="el-dialogi">
      <el-form :model="form" :rules="rules" ref="form">

        <el-form-item label="角色:" :label-width="formLabelWidth">
          <el-checkbox-group v-model="checkList">
            <div v-for="role in roles">
              <el-checkbox :label="role.display_name"></el-checkbox>
            </div>
          </el-checkbox-group>
        </el-form-item>


        <el-form-item label="用户" :label-width="formLabelWidth">
          <el-input v-model="form.user" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd" :label-width="formLabelWidth">
          <el-input type="password" v-model="form.pwd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPwd" :label-width="formLabelWidth">
          <el-input type="password" v-model="form.checkPwd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" prop="email" label="邮箱" :rules="[
                  { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                  { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }]">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth" prop="is_super" label="管理员">
          <el-switch on-text="" off-text="" v-model="form.is_super"></el-switch>
        </el-form-item>
        <!--<el-form-item label="是否启用" :label-width="formLabelWidth">
          <el-switch v-model="form.status" on-color="#13ce66" off-color="#ff4949"></el-switch>
        </el-form-item>-->
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit('form')">确 定</el-button>
      </div>
    </el-dialog>


  </div>
</template>

<script>
  import UserJs from './User.js';
  export default UserJs;
</script>






