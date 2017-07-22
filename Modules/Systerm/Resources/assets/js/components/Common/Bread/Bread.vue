<template>
    <div class='bread'>
        <strong style="color:#8492A6">{{$route.matched.length ? $route.matched[$route.matched.length-1].namei : '首页'}}</strong>
        <el-breadcrumb separator="/" class='el-bread'>
            <el-breadcrumb-item :to="{ path: '/404' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for='(item,index) in $route.matched'>{{item.namei}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
    export default {
        name: 'bread',
        data () {
            return {
                
            }
        },
        methods:{
            
        },
        mounted(){

        },
        created(){
            // console.log(this.$route);
        }
    }
</script>

<style scoped>
    .bread{
        height: 30px;
        line-height: 26px;
         background-color: #f5f5f5;
        border-radius: 4px;
        list-style: outside none none;
        margin-bottom: 20px;
        padding: 8px 15px;
    }
    .bread .el-bread{
            display: inline-block;
            float: right;
            text-align: right;
            line-height: 26px;
        }
</style>
