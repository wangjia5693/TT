<template>
  <div>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;color:#ff666b;font-weight:bold;font-size:13px"><Icon type="ios-pulse-strong" style="font-size:14px;margin-right:4px;"></Icon>Opcache优化</span>
      </div>
      <div>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="line-height: 36px;font-size: 14px">说明：</span>
            <br/>
            <blockquote>
              开发环境不建议开启Opcache,不然会坑死
              <br>
              安装laravel-opcache扩展包
            </blockquote>
            <span style="line-height: 36px;font-size: 14px">最佳配置：</span>
            <br/>
            <pre>
              opcache.enable=1
              opcache.memory_consumption=512
              opcache.interned_strings_buffer=64
              opcache.max_accelerated_files=32531
              opcache.validate_timestamps=0
              opcache.save_comments=1
              opcache.fast_shutdown=0
            </pre>
          </div>
          <div >
            <el-button type="primary" v-if="loading1" @click="clear">清除缓存</el-button>
            <el-button type="primary" v-if="loading2" @click="optimize">预编译</el-button>
            <el-button type="primary" :loading="true" v-if="loading">加载中</el-button>
          </div>
        </el-card>
      </div>
    </el-card>

  </div>
</template>

<script>
  import OpcacheJs from './Opcache.js';
  export default OpcacheJs;
</script>






