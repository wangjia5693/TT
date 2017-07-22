<template>
  <div>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;color:#ff666b;font-weight:bold;font-size:13px"><Icon type="ios-pulse-strong" style="font-size:14px;margin-right:4px;"></Icon>composer加载优化</span>
      </div>
      <div>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="line-height: 36px;font-size: 14px">说明：</span>
            <br/>
            <blockquote>
               Composer会自动加载引入的第三方包，Laravel也利用Composer自动加载机制加载框架的类。当开发时添加类时未被找到时，或者开发结束上线时，执行此命令；
            </blockquote>
          </div>
          <div >
            <el-button type="primary" v-if="!loading" @click="optimize">重载优化</el-button>
            <el-button type="primary" :loading="true" v-if="loading">加载中</el-button>
          </div>
        </el-card>

      </div>
    </el-card>

  </div>
</template>

<script>
  import ReflectJs from './Reflect.js';
  export default ReflectJs;
</script>

<style >
  blockquote {
    font-size:12px;
    padding: 10px 20px;
    margin: 0 0 20px;
    border-left: 5px solid #eee;
  }
</style>




