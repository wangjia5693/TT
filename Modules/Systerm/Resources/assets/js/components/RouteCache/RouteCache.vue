<template>
  <div>

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span style="line-height: 36px;color:#ff666b;font-weight:bold;font-size:13px"><Icon type="ios-pulse-strong" style="font-size:14px;margin-right:4px;"></Icon>缓存路由</span>
      </div>
      <div>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="line-height: 36px;font-size: 14px">说明：</span>
            <br/>
            <blockquote>
              路由切分成多个文件，需要生成一个缓存文件一次加载提升效率，生成缓存位于bootstrap/cache/routes.php；
              同时注意对于闭包路由生成缓存会报错
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
  import RouteCacheJs from './RouteCache.js';
  export default RouteCacheJs;
</script>






