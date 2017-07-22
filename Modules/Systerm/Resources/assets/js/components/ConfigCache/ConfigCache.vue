<template>
  <div>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;color:#ff666b;font-weight:bold;font-size:13px"><Icon type="ios-pulse-strong" style="font-size:14px;margin-right:4px;"></Icon>配置缓存优化</span>
      </div>
      <div>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="line-height: 36px;font-size: 14px">说明：</span>
            <br/>
            <blockquote>
              config目录下切分了很多针对于不同功能的不同配置文件，目录清晰，但对于系统的效率却是阻碍
            </blockquote>
          </div>
          <div >
            <el-button type="primary" v-if="loading1" @click="clear">清除缓存</el-button>
            <el-button type="primary" v-if="loading2" @click="optimize">生成缓存</el-button>
            <el-button type="primary" :loading="true" v-if="loading">加载中</el-button>
          </div>
        </el-card>
      </div>
    </el-card>

  </div>
</template>

<script>
  import ConfigCacheJs from './ConfigCache.js';
  export default ConfigCacheJs;
</script>






