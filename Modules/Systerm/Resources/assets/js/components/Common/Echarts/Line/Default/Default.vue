<template>
    <section class="chart">
        <el-row>
            <el-col :span="24">
                <div :id="data.id" style="width:640px;height:300px;"></div>
            </el-col>
        </el-row>
    </section>
</template>
<script>
    import DefaultJs from './Default.js';
    export default DefaultJs;
</script>
<style scoped>
    .chart{
    	margin-top: 30px;
    	margin-bottom: 30px;
    }
</style>
