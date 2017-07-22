<template>
    <div class="home">

        <!--<head-nav></head-nav>-->

        <el-tabs v-model="activeName2" @tab-click="handleClick" >
            <el-tab-pane label="缓存清空" name="first">
                <el-row type="flex"  justify="space-around">
                    <el-col :span="6">
                      <div class="grid-content bg-purple">
                        <el-button type="info" style="width: 100%" @click="sendRequest(1)">清空表缓存
                        </el-button>
                      </div>
                    </el-col>
                    <el-col :span="6">
                      <div class="grid-content bg-purple-light">
                        <el-button type="info" style="width: 100%" @click="sendRequest(2)">清空缓存文件
                        </el-button>
                      </div>
                    </el-col>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="文件查看" name="second" >
                <el-input v-model="input" placeholder="目录" @keyup.13.native="fileGet"  style="margin-bottom:15px"></el-input>
                <el-select v-model="value" placeholder="请选择" style="margin-right:10px">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
                <el-input v-model="linelimit" placeholder="请输入显示的行数(限linux)" style="width: 200px;margin-right:10px"></el-input>
                <el-input v-model="keyword" placeholder="关键词搜索(限linux)" style="width: 200px;margin-right:10px"></el-input>
                <el-button type="success" @click="fileContentGet()">查看</el-button>
                <el-input type="textarea" :autosize="true" placeholder="" v-model="textarea" style="margin-top:15px"></el-input>
            </el-tab-pane>
        </el-tabs>

    </div>
</template>

<script>
    import ControlJs from './Control.js';
    export default ControlJs;
</script>






