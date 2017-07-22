<template>
  <div class="home">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="目录" prop="command">
        <el-input v-model="form.command"></el-input>
      </el-form-item>
      <el-form-item label="周期" prop="schedule">
        <el-input v-model="form.schedule"></el-input>
      </el-form-item>
      <el-form-item label="输出" prop="output">
        <el-input v-model="form.output"></el-input>
      </el-form-item>
      <el-form-item label="作用" prop="output">
        <el-input v-model="form.info"></el-input>
      </el-form-item>
      <el-form-item label="是否启用">
        <el-switch v-model="form.enabled" on-color="#13ce66" off-color="#ff4949"></el-switch>
      </el-form-item>
      <el-form-item label="是否调试">
        <el-switch v-model="form.debug" on-color="#13ce66" off-color="#ff4949"></el-switch>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">{{form.buttonTitle}}</el-button>
        <!-- <el-button>取消</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import AddJs from './Add.js';
  export default AddJs;
</script>





