<template>
        <div class="wrap">
            <div class="header cle">
                <h1>NALA&nbsp;Data</h1>
                <ul class="nav fr">
                    <!-- <li><a href="javascript:;">最新采购</a></li> -->
                    <!-- <li><a href="/database">Top100</a></li> -->
                    <li><a href="/database/top/else">商品列表</a></li>
                    <li><a href="/outside">商业数据</a></li>
                    <li><a href="/material">成分查询</a></li>
                    <li><a href="/showdata">数据分析</a></li>
                    <li><a href="/brand">品牌展示</a></li>
                    <li><a href="login" class="login" style="border:1px solid #e2e2e2; border-radius: 3px; margin-top: 10px;">登录</a></li>
                </ul>
            </div>
            <div class="banner">
                <video preload="auto" autoplay="autoplay" loop="loop" src="http://pdcapi.simbaerp.com.cn/erp.mp4"></video>
                <div class="container">
                    <div class="info">
                        <h3>NALA Data 数据分析平台</h3>
                        <h4>nala data erp</h4>                      
                    </div>

                </div>
            </div>
            <div class="hotBrand cle">
                <h3>热销品牌</h3>
                <a href="javascript:;" class="more fr">所有品牌></a>
                <ul class="brandList cle">
                    <li><a href="javascript:;"></a></li>
                    <li><a href="javascript:;"></a></li>
                    <li><a href="javascript:;"></a></li>
                    <li><a href="javascript:;"></a></li>
                    <li><a href="javascript:;"></a></li>
                    <li><a href="javascript:;"></a></li>
                    <li><a href="javascript:;"></a></li>
                    <li><a href="javascript:;"></a></li>
                    <li><a href="javascript:;"></a></li>
                    <li><a href="javascript:;"></a></li>
                </ul>
            </div>
            <div class="hotClass">
                <h3>热门分类</h3>
                <ul class="classList cle">
                    <li>
                        <h4>护肤</h4>
                        <ul class="detailList cle">
                            <li><a href="javascript:;">面膜</a></li>
                            <li><a href="javascript:;">乳液/面霜</a></li>
                            <li><a href="javascript:;">洗面奶/洁面</a></li>
                            <li><a href="javascript:;">唇部护理</a></li>
                            <li><a href="javascript:;">化妆水</a></li>
                            <li><a href="javascript:;">防晒</a></li>
                            <li><a href="javascript:;">精华</a></li>
                            <li><a href="javascript:;">精油芳疗</a></li>
                            <li><a href="javascript:;">眼部护理</a></li>
                        </ul>
                    </li>
                    <li>
                        <h4>彩妆</h4>
                        <ul class="detailList cle">
                            <li><a href="javascript:;">BB霜/粉底/散粉</a></li>
                            <li><a href="javascript:;">睫毛</a></li>
                            <li><a href="javascript:;">隔离</a></li>
                            <li><a href="javascript:;">腮红</a></li>
                            <li><a href="javascript:;">卸妆</a></li>
                            <li><a href="javascript:;">唇部</a></li>
                            <li><a href="javascript:;">眉妆</a></li>
                            <li><a href="javascript:;">修容</a></li>
                            <li><a href="javascript:;">眼妆</a></li>
                            <li><a href="javascript:;">香氛</a></li>
                        </ul>
                    </li>
                    <li>
                        <h4>护理</h4>
                        <ul class="detailList cle">
                            <li><a href="javascript:;">身体护理</a></li>
                            <li><a href="javascript:;">女性用品</a></li>
                            <li><a href="javascript:;">头发护理</a></li>
                            <li><a href="javascript:;">成人用品</a></li>
                            <li><a href="javascript:;">口腔护理</a></li>
                            <li><a href="javascript:;">手足护理</a></li>
                            <li><a href="javascript:;">颈部护理</a></li>
                        </ul>
                    </li>
                    <li>
                        <h4>工具</h4>
                        <ul class="detailList cle">
                            <li><a href="javascript:;">化妆工具</a></li>
                            <li><a href="javascript:;">身体工具</a></li>
                            <li><a href="javascript:;">护肤工具</a></li>
                            <li><a href="javascript:;">养发工具</a></li>
                        </ul>
                    </li>
                    <li>
                        <h4>健康食品</h4>
                        <ul class="detailList cle">
                            <li><a href="javascript:;">胶原蛋白</a></li>
                            <li><a href="javascript:;">维C</a></li>
                            <li><a href="javascript:;">燕窝</a></li>
                            <li><a href="javascript:;">阿胶</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div class="hotArea cle">
                <h3>热门产地</h3>
                <a href="javascript:;" class="more fr">所有产地></a>
                <ul class="areaList cle">
                    <li><a href="javascript:;">韩国</a></li>
                    <li><a href="javascript:;">美国</a></li>
                    <li><a href="javascript:;">中国</a></li>
                    <li><a href="javascript:;">法国</a></li>
                    <li><a href="javascript:;">英国</a></li>
                    <li><a href="javascript:;">希腊</a></li>
                    <li><a href="javascript:;">意大利</a></li>
                    <li><a href="javascript:;">日本</a></li>
                    <li><a href="javascript:;">泰国</a></li>
                    <li><a href="javascript:;">瑞士</a></li>
                </ul>
            </div>
            <div class="footer">
                <img src="../../assets/main_03.jpg" width="1920">
                <img src="../../assets/main_04.jpg" width="1920">
            </div>
        </div>
    
</template>


<script>
    import MainJs from './Main.js';
    export default MainJs;
</script>


<style scoped >
     @import '../../assets/css/base.css';
     @import '../../assets/css/nalaMain.css';

     #home_video{
        position: absolute;
        right: 0;
        top: 0;
        width: auto;
        /*z-index: -10;*/
     }
     .title{
        margin: 0 auto;
        max-width: 960px;
        padding: 0;
        position: relative;
        width: 100%;
        z-index: 999;
        color:white;
        font-size:60px;
        padding-top: 90px;
        padding-left:560px;
     }

    /*热销品牌*/
.hotBrand,.hotClass,.hotArea { padding: 90px 0; width: 1110px; text-align: center; margin: 0 auto;}
.brandList { margin-top: 40px;}
.brandList li,.areaList li { width: 210px; float: left; border:1px solid #d6d6d6; margin-right: 12px; margin-bottom: 20px;}
.brandList li:nth-child(5),.brandList li:last-child,.areaList li:nth-child(5),.areaList li:last-child { margin-right: 0;}
.brandList li a { background: url(../../assets/iconfont.png); display: block; height: 98px; width: 210px;  background-color: #fff; }
.brandList li:nth-child(1) a { background-position: -8px -49px;} 
.brandList li:nth-child(2) a { background-position: -234px -49px;}
.brandList li:nth-child(3) a { background-position: -461px -47px;}
.brandList li:nth-child(4) a { background-position: -692px -45px;}
.brandList li:nth-child(5) a { background-position: -921px -47px;}
.brandList li:nth-child(6) a { background-position: -8px -168px;}
.brandList li:nth-child(7) a { background-position: -237px -168px;}
.brandList li:nth-child(8) a { background-position: -461px -168px;}
.brandList li:nth-child(9) a { background-position: -684px -168px;}
.brandList li:nth-child(10) a { background-position: -915px -168px;}
/*热门分类*/
.hotClass { background-color: #eff3fd; width: 100%; }
.classList { width: 1110px; margin: 40px auto 0;}
.classList li { float: left; width: 210px; margin-right: 12px; padding: 19px; box-sizing:border-box; background-color: #f9fafe; height: 268px;}
.classList li:last-child { margin-right: 0;}
.classList li h4 { font-size: 18px; font-weight: 700; background: url(../../assets/iconfont.png); padding:20px 0 30px;}
.classList li:nth-child(1) h4 { background-position: -80px -310px; text-indent: 2em;}
.classList li:nth-child(2) h4 { background-position: -306px -306px;}
.classList li:nth-child(3) h4 { background-position: -522px -304px;}
.classList li:nth-child(4) h4 { background-position: -750px -306px;}
.classList li:nth-child(5) h4 { background-position: -978px -306px; text-indent: 2em;}
.classList li .detailList li { width: 86px; margin-right: 0px; padding: 0; height: 25px; }
.classList li .detailList li a { display: block; color: #525e88; line-height: 25px;}
/*热门产地*/
.areaList { margin: 40px auto 0;}
.areaList li { border:none; height: 100px; background: #eff3fd url(../../assets/iconfont.png); cursor: pointer; margin-right: 15px;}
.areaList li a { color: #525e88; display: block; font-size: 22px; text-indent: 4em; margin-top: 35px;}
.areaList li:nth-child(1) { background-position: -47px -408px;}
.areaList li:nth-child(2) { background-position: -275px -408px;}
.areaList li:nth-child(3) { background-position: -498px -408px;}
.areaList li:nth-child(4) { background-position: -720px -408px;}
.areaList li:nth-child(5) { background-position: -942px -408px;}
.areaList li:nth-child(6) { background-position: -47px -528px;}
.areaList li:nth-child(7) { background-position: -266px -528px;}
.areaList li:nth-child(8) { background-position: -498px -528px;}
.areaList li:nth-child(9) { background-position: -720px -528px;}
.areaList li:nth-child(10) { background-position: -942px -528px;}

</style>
