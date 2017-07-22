<template>
  <div>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;color:#f4645f;font-weight: 600">权限管理</span>
        <el-button style="float: right;" type="primary"  @click="authAdd" size="small">新建</el-button>
      </div>
      <div >
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="expand">
            <template scope="props">
              <table style="width: 100%;border: none">
                <tr v-for=" sub_per in props.row.sub_permission">
                  <td width="20%" style="border: none;padding-left:16px;">
                    {{ sub_per.display_name}}
                  </td>
                  <td width="20%" style="border: none;padding-left:16px;">
                    {{ sub_per.name }}
                  </td>
                  <td width="20%" style="border: none;padding-left:16px;">
                    {{ sub_per.icon_html }}
                  </td>
                  <td width="20%" style="border: none;padding-left:16px;">
                    {{ sub_per.description}}
                  </td>
                  <td width="20%" style="border: none;padding-left:16px;">
                    <el-button
                            size="small"
                            @click="handleEdit(sub_per)">编辑</el-button>
                    <el-button
                            size="small"
                            type="danger"
                            @click="handleDelete(sub_per.id)">删除</el-button>
                  </td>
                </tr>
              </table>
            </template>
          </el-table-column>
          <el-table-column label="显示名称" prop="display_name" >
          </el-table-column>
          <el-table-column label="路由" prop="name" >
          </el-table-column>
          <el-table-column label="图标">
            <template scope="scope">
              <p v-html="scope.row.icon">{{scope.row.icon}}</p>
            </template>
          </el-table-column>
          <el-table-column label="说明" prop="description">
          </el-table-column>
          <el-table-column label="操作" >
            <template scope="scope">
              <el-button
                      size="small"
                      @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                      size="small"
                      type="danger"
                      @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-card>

    <!--权限编辑创建-->
    <el-dialog :title="title" v-model="dialogFormVisible" class="el-dialogi">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="所属权限组" prop="fid">
          <el-select v-model="ruleForm.fid" placeholder="请选择" >
            <el-option
                    v-for="itemu in useroptions"
                    :key="itemu.value"
                    :label="itemu.label"
                    :value="itemu.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="权限路由" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="显示名称" prop="display_name">
          <el-input v-model="ruleForm.display_name"></el-input>
        </el-form-item>
        <el-form-item label="说明" prop="description">
          <el-input v-model="ruleForm.description"></el-input>
        </el-form-item>
        <el-form-item label="图标" prop="icon">
          <el-input v-model="ruleForm.icon" ></el-input>

        </el-form-item>
        <el-form-item label="排序" prop="sort">
          <el-input v-model="ruleForm.sort"></el-input>
        </el-form-item>
        <el-form-item label="有效">
          <el-switch on-text="" off-text="" v-model="ruleForm.status"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
    import AuthJs from './Auth.js';
    export default AuthJs;
</script>







