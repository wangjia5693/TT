<template>
    <div class="list">
        <el-row>
          <el-col :span="3">
                <ul class="leftse">
                    <li><router-link to="#salep">
                        <el-tag type="gray" class="tagst">销售信息</el-tag>
                    </router-link></li>
                    <li><router-link to="#purchasep">
                        <el-tag type="primary" class="tagst">采购信息</el-tag>
                    </router-link></li>
                    <li><router-link to="#productp">
                        
                        <el-tag type="success" class="tagst">商品信息</el-tag>
                    </router-link></li>
                    <li><router-link to="#qtyp"><el-tag type="warning" class="tagst">库存信息</el-tag></router-link></li> 
                    <li><router-link to="#servicep"><el-tag type="danger" class="tagst">客服信息</el-tag></router-link></li>
                    <li><router-link to="#infop"><el-tag type="danger" class="tagst">商业情报</el-tag></router-link></li>
                    <li><router-link to="#marketp"><el-tag type="danger" class="tagst">市场数据</el-tag></router-link></li>
                </ul>
          </el-col>
          <el-col :span="17">
                <div style="min-height:900px;">
                    <el-row class="rowp">
                      <el-col :span="24">
                            <el-row>
                              <el-col :span="16">
                                    <table class="table" style="width:100%;">
                                      <tbody>
                                        <tr>
                                          <td style="color:#4078c0;font-size:20px;width:369px !important;">{{product.product}}</td>
                                          <td style="width:222px;">SPU编码：{{product.spu}}</td>
                                          <td>SKU编码： {{product.specode}}</td>
                                        </tr>
                                        <tr>
                                          <td >当前售价：</td>
                                          <td>当日销量：{{sale.sale_today}}</td>
                                          <td></td>
                                        </tr>
                                        <tr>
                                          <td>辛巴指数：1.22</td>
                                          <td>
                                            <el-button type="success" @click="attension">关注</el-button>
                                            <el-button type="warning">取消关注</el-button>
                                          </td>
                                          <td> </td>
                                        </tr>
                                        <tr>
                                          <td>DNA:{{product.DNA}}</td>
                                          <td>信息完善度：76.25%</td>
                                          <td></td>
                                        </tr>
                                      </tbody>
                                    </table>
                              </el-col>
                              <el-col :span="8">
                                  <div class="block" style="width:340px;margin:0 auto;">
                                    <el-carousel trigger="click" height="150px">
                                      <el-carousel-item v-for="item in images">
                                        <!-- <h3>{{ item.pic_url }}</h3> -->

                                      </el-carousel-item>
                                    </el-carousel>
                                  </div>
                              </el-col>
                            </el-row>
                      </el-col>
                    </el-row>
                    <el-row  class="rowp" >
                      <el-col :span="24">
                             <table class="table " style="width:100%;" >
                                      <tbody>
                                       <tr>
                                          <td colspan="4" class="tagtitle" style="color:#48576a;" id="salep">销售信息：</td>
                                        </tr>
                                        <tr class="table-striped">
                                          <td >标准售价：<span class="resources"> {{sale.price}} </span></td>
                                          <td>平均售价：<span class="resources"> {{sale.avg_price}}</span></td>
                                          <td>热卖价格带：<span class="resources"> {{sale.price_rang}}</span></td>
                                          <td>专柜价：<span class="resources">{{sale.shoppe_pri}}</span></td>
                                        </tr>
                                        <tr>
                                          <td>当日销量：<span class="resources"> {{sale.sale_today}}</span></td>
                                          <td>当月销量：<span class="resources"> {{sale.sale_month}}</span></td>
                                          <td>历史最高月销量：<span class="resources"> {{sale.top_salem}}</span></td>
                                          <td>可用库存：<span class="resources">{{stock.qty}}</span></td>
                                        </tr>
                                        <tr class="table-striped">
                                          <td>最新采购成本：<span class="resources"> {{purchase.last_cost}}{{purchase.last_purchase}}</span></td>
                                          <td>加权平均成本：<span class="resources"> {{purchase.cost}}</span></td>
                                          <td> 成本浮动带：<span class="resources">{{purchase.cost_range}}</span></td>
                                          <td><span class="resources"> </span></td>
                                        </tr>
                                        <tr>
                                          <td>本月毛利额：<span class="resources"> </span></td>
                                          <td>本月毛利率：<span class="resources"> </span></td>
                                          <td>毛利浮动带：<span class="resources"> 9.9~14</span></td>
                                          <td></td>
                                        </tr>
                                        <tr>
                                          <td colspan="4">
                                                      
                                              <el-tabs v-model="activeName" @tab-click="handleClick" type="card">
                                    
                                                 <el-tab-pane name="first" >
                                                  <span slot="label"><i class="fa fa-line-chart" aria-hidden="true" ></i> 渠道销售曲线图&nbsp;&nbsp;|</span>
                                                  <el-row :gutter="20">
                                                    <el-col :span="6" :offset="1">
                                                        <template>
                                                          <el-button :plain="true"  size="small" v-bind:class="{ active: sale_fee_isActive }" @click="echarts_first_column('sale_fee')">销售额</el-button>
                                                          <el-button :plain="true" size="small" v-bind:class="{ active: sale_qty_isActive }" @click="echarts_first_column('sale_qty')">销量</el-button>
                                                          <el-button :plain="true" size="small" v-bind:class="{ active: sale_price_isActive }" @click="echarts_first_column('sale_price')">售价</el-button>
                                                        </template>
                                                          
                                                    </el-col>
                                                      <el-col :span="9" :offset="1">
                                                          <el-select v-model="echarts_first.selectlegend" multiple  clearable  placeholder="请选择查询的店铺" size="small" style="width:100%!important" @visible-change="selcetChoose" @remove-tag="removetag">
                                                            <el-option
                                                              v-for="item in shops"
                                                              :label="item.shopname"
                                                              :value="item.sh_id">
                                                            </el-option>
                                                          </el-select>
                                                      </el-col>
                                                    <el-col :span="6" :offset="1">
                                                         <template>
                                                          <el-button :plain="true"  size="small" style="border-radius: 50% !important;width:36px !important;height: 36px !important; padding:7px 6px!important;" @click="echarts_first_range('week')" v-bind:class="{active:week_isActive}">7天</el-button>
                                                          <el-button :plain="true"  size="small" style="border-radius: 50% !important;width:36px !important;height: 36px !important;padding:7px 6px!important; " @click="echarts_first_range('month')" v-bind:class="{active:month_isActive}">30天</el-button>
                                                          <el-button :plain="true"  size="small" style="border-radius: 50% !important;width:36px !important;height: 36px !important; padding:7px 6px!important;" @click="echarts_first_range('year')" v-bind:class="{active:year_isActive}">12月</el-button>
                                                         </template>
                                                    </el-col>
                                                  </el-row>

                                                   <el-row :gutter="20">
                                                    <el-col :span="20" :offset="1">
                                                      <div style="border:1px dashed #E5E9F2"></div>
                                                    </el-col>
                                                    </el-row>
                                                    
                                                    <el-row :gutter="20">
                                                    <el-col :span="20" :offset="1">
                                                      <statis
                                                      :id='echarts_first.id' 
                                                      :title='echarts_first.title' 
                                                      :legend='echarts_first.legend' 
                                                      :xaxis='echarts_first.xaxis' 
                                                      :datalist='echarts_first.datalist'></statis>
                                                    </el-col>
                                                    </el-row>

                                                   
                                                  
                                                </el-tab-pane>
                                                <el-tab-pane name="second">
                                                  <span slot="label"><i class="fa fa-area-chart" aria-hidden="true"></i> 周、月、季度、年成本情况&nbsp;&nbsp;|</span>



                                                    <el-row :gutter="20">
                                                    
                                                    <el-col :span="8" :offset="15">
                                                         <template>
                                                          <el-button :plain="true"  size="small" style="border-radius: 50% !important;width:36px !important;height: 36px !important; " @click="echarts_second_range('week','second')" v-bind:class="{active:sweek_isActive}">周</el-button>
                                                          <el-button :plain="true"  size="small" style="border-radius: 50% !important;width:36px !important;height: 36px !important; " @click="echarts_second_range('month','second')" v-bind:class="{active:sweek1_isActive}">月</el-button>
                                                          <el-button :plain="true"  size="small" style="border-radius: 50% !important;width:36px !important;height: 36px !important; " @click="echarts_second_range('seasion','second')" v-bind:class="{active:sweek2_isActive}">季</el-button>
                                                          <el-button :plain="true"  size="small" style="border-radius: 50% !important;width:36px !important;height: 36px !important; " @click="echarts_second_range('year','second')" v-bind:class="{active:sweek3_isActive}">年</el-button>
                                                         </template>
                                                    </el-col>
                                                  </el-row>

                                                   <el-row :gutter="20">
                                                    <el-col :span="20" :offset="1">
                                                      <div style="border:1px dashed #E5E9F2"></div>
                                                    </el-col>
                                                    </el-row>
                                                     <el-row :gutter="20">
                                                        <el-col :span="20" :offset="1">
                                                      <statis
                                                          :id='echarts_second.id' 
                                                          :title='echarts_second.title' 
                                                          :legend='echarts_second.legend' 
                                                          :xaxis='echarts_second.xaxis' 
                                                          :datalist='echarts_second.datalist'></statis>
                                                    </el-col>
                                                      </el-row>
                                                     

                                                </el-tab-pane>
                                                <el-tab-pane name="third">
                                                  <span slot="label"><i class="fa fa-bar-chart" aria-hidden="true"></i> 周、月、季度、年毛利情况&nbsp;&nbsp;|</span>
                                                  

                                                    <el-row :gutter="20">
                                                    
                                                    <el-col :span="8" :offset="15">
                                                         <template>
                                                          <el-button :plain="true"  size="small" style="border-radius: 50% !important;width:36px !important;height: 36px !important; " @click="echarts_second_range('week','third')" v-bind:class="{active:tweek_isActive}">周</el-button>
                                                          <el-button :plain="true"  size="small" style="border-radius: 50% !important;width:36px !important;height: 36px !important; " @click="echarts_second_range('month','third')" v-bind:class="{active:tweek1_isActive}">月</el-button>
                                                          <el-button :plain="true"  size="small" style="border-radius: 50% !important;width:36px !important;height: 36px !important; " @click="echarts_second_range('seasion','third')" v-bind:class="{active:tweek2_isActive}">季</el-button>
                                                          <el-button :plain="true"  size="small" style="border-radius: 50% !important;width:36px !important;height: 36px !important; " @click="echarts_second_range('year','third')" v-bind:class="{active:tweek3_isActive}">年</el-button>
                                                         </template>
                                                    </el-col>
                                                  </el-row>

                                                   <el-row :gutter="20">
                                                    <el-col :span="20" :offset="1">
                                                      <div style="border:1px dashed #E5E9F2"></div>
                                                    </el-col>
                                                    </el-row>

                                                    <el-row :gutter="20" v-loading="loading2" element-loading-text="拼命加载中">
                                                        <el-col :span="20" :offset="1">
                                                          <statis
                                                          :id='echarts_third.id' 
                                                          :title='echarts_third.title' 
                                                          :legend='echarts_third.legend' 
                                                          :xaxis='echarts_third.xaxis' 
                                                          :datalist='echarts_third.datalist'></statis>
                                                        </el-col>
                                                      </el-row>


                                                </el-tab-pane>
                                                <el-tab-pane name="fourth">
                                                  <span slot="label"><i class="fa fa-pie-chart" aria-hidden="true"></i> 其余渠道售价、销售</span>
                                                 

                                                    <el-row :gutter="20">
                                                     <el-col :span="20" :offset="1">
                                                          <el-select v-model="echarts_scatter.selectlegend" multiple  clearable  placeholder="请选择查询的店铺" size="small" style="width:100%!important" @visible-change="selcetChoosei" @remove-tag="removetagi">
                                                            <el-option
                                                              v-for="item in shops"
                                                              :label="item.shopname"
                                                              :value="item.sh_id">
                                                            </el-option>
                                                          </el-select>
                                                      </el-col>
                                                    </el-row>


                                                      <el-row :gutter="20">
                                                    <el-col :span="20" :offset="1">
                                                      <div style="border:1px dashed #E5E9F2"></div>
                                                    </el-col>
                                                    </el-row>

                                                    <el-row :gutter="20" v-loading="loading1" element-loading-text="拼命加载中">
                                                    <el-col :span="20" :offset="1">
                                                      <scatter
                                                      :id='echarts_scatter.id' 
                                                      :title='echarts_scatter.title' 
                                                      :legend='echarts_scatter.legend' 
                                                      :datalist='echarts_scatter.datalist'></scatter>
                                                    </el-col>
                                                    </el-row>



                                                </el-tab-pane>
                                              </el-tabs>

                                          </td>
                                        </tr>
                                         <!-- <tr>
                                          <td><el-button type="text">其余渠道售价、销售</el-button></td>
                                          <td></td>
                                          <td></td>
                                          <td>月度销售资产回报率：</td>
                                        </tr> -->
                                         <!-- <tr>
                                          <td>
                                            日、周、月、季度、年销售和售价情况：
                                    

                                          </td>
                                          <td>
                                            日、周、月、季度、年成本情况：
                                    
                                          </td>
                                          <td>
                                            日、周、月、季度、年毛利情况：
                                
                                          </td>
                                          <td>其余渠道售价、销售</td>
                                        </tr> -->
                                        <tr>
                                          <td>淘宝首屏销量：<span class="resources"> </span></td>
                                          <td>淘宝售价区间：<span class="resources"> </span></td>
                                          <td>最佳销量-价格：<span class="resources"> </span></td>
                                          <td>旗舰店售价：<span class="resources"> </span></td>
                                        </tr>
                                        <tr>
                                          <td>前五店铺：<span class="resources"> </span></td>
                                          <td>关键词：<span class="resources"> </span></td>
                                          <td>显示名称：<span class="resources"> </span></td>
                                          <td>：</td>
                                        </tr>
                                        <tr>
                                          <td>运营销售提成：<span class="resources"> </span></td>
                                          <td ></td>
                                          <td ></td>
                                          <td ></td>
                                        </tr>
                                        <tr>
                                          <td colspan="4">
                                            <el-row :gutter="20" class="rowp">
                                              <el-col :span="20" :offset="1">
                                              </el-col>
                                            </el-row>
                                            <el-row :gutter="20">
                                                    <el-col :span="20" :offset="1">
                                                        <template>
                                                          <el-button :plain="true"  size="small" v-bind:class="{ active: sale_fee_isActive }" @click="echarts_top_column('sale_fee')">销售额</el-button>
                                                          <el-button :plain="true" size="small" v-bind:class="{ active: sale_qty_isActive }" @click="echarts_top_column('sale_qty')">销量</el-button>
                                                          <el-button :plain="true" size="small" v-bind:class="{ active: sale_price_isActive }" @click="echarts_top_column('sale_price')">售价</el-button>
                                                        </template>
                                                          
                                                    </el-col>
                                                    
                                                  </el-row>

                                                   <el-row :gutter="20">
                                                    <el-col :span="20" :offset="1">
                                                      <div style="border:1px dashed #E5E9F2"></div>
                                                    </el-col>
                                                    </el-row>
                                                    
                                                    <el-row :gutter="20">
                                                    <el-col :span="20" :offset="1">
                                                      <statis
                                                      :id='echarts_top.id' 
                                                      :title='echarts_top.title' 
                                                      :legend='echarts_top.legend' 
                                                      :xaxis='echarts_top.xaxis' 
                                                      :datalist='echarts_top.datalist'></statis>
                                                    </el-col>
                                                    </el-row>


                                          </td>
                                             
                                        </tr>
                                      </tbody>
                                    </table>
                        </el-col>
                    </el-row>
                    <el-row  class="rowp" >
                      <el-col :span="24">
                             <table class="table" style="width:100%;" >
                                      <tbody>
                                      <tr>
                                          <td colspan="4" class="tagtitle" style="color:#20a0ff;" id="purchasep">采购信息：</td>
                                        </tr>
                                        <tr>
                                          <td>最新采购成本：<span class="resources"> {{purchase.last_cost}}{{purchase.last_purchase}}</span></td>
                                          <td>加权平均成本：<span class="resources"> {{purchase.cost}}</span></td>
                                          <td>成本浮动带：<span class="resources"> {{purchase.cost_range}}</span></td>
                                          <td></td>
                                        </tr>
                                        <tr>
                                          <td>历史最低成本：<span class="resources"> {{purchase.cost_low}}</span></td>
                                          <td>内控询价成本：<span class="resources"> {{purchase.cost_check}}</span></td>
                                          <td>内控询价成本差异：<span class="resources"> {{purchase.cost_check-purchase.cost}}</span></td>
                                          <td>最新成本与加权成本差异：<span class="resources"> {{purchase.last_cost-purchase.cost}}</span></td>
                                        </tr>
                                        <tr>
                                          <td>销售需求量：<span class="resources"> {{purchase.need}}</span></td>
                                          <td>需求采购量：<span class="resources"> {{purchase.need_calc}}</span></td>
                                          <td>销售运营提报采购量：<span class="resources"> {{purchase.need_pur}}</span></td>
                                          <td>销售提报时间:<span class="resources"> {{purchase.need_pur_time}}</span></td>
                                        </tr>
                                        <tr>
                                          <td>缺货时间：<span class="resources"> {{purchase.lack_time}}</span></td>
                                          <td>缺货天数: <span class="resources"> {{purchase.lack_day}}</span></td>
                                          <td></td>
                                          <td></td>
                                        </tr>
                                         <tr>
                                          <td>采购图表：（时间，数量，价格，人，标注自主采购还是运营需求）</td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                        </tr>
                                         <tr>
                                          <td>总代公司：</td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                        </tr>
                                          <tr>
                                          <td>授权：</td>
                                          <td>流通属性：</td>
                                          <td>真假问题：</td>
                                          <td>真假概率：</td>
                                        </tr>
                                          <tr>
                                          <td>主要供应商：</td>
                                          <td>合同</td>
                                          <td>账期   发票</td>
                                          <td>可返货   赠品</td>
                                        </tr>
                                         </tr>
                                          <tr>
                                          <td>1.A公司：</td>
                                          <td>2.B公司</td>
                                          <td></td>
                                          <td></td>
                                        </tr>
                                      </tbody>
                                    </table>
                        </el-col>
                    </el-row>
                    
                    <el-row :gutter="20"  class="rowp" >

                      <el-col :span="24">
                             <table class="table" style="width:100%;">
                                      <tbody>
                                      <tr>
                                          <td colspan="4" class="tagtitle" style="color:#13ce66;" id="productp">商品信息：</td>
                                        </tr>
                                        <tr>
                                          <td><span class="resources"> {{product.product}}</span></td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                        </tr>
                                        <tr>
                                          <td >品牌：<span class="resources"> {{product.brand_cn}}</span></td>
                                          <td>品牌地：<span class="resources"> {{product.country}}</span></td>
                                          <td>上市时间：<span class="resources"> {{product.lnage}}</span></td>
                                          <td>档次：<span class="resources"> {{product.grade}}</span></td>
                                        </tr>
                                        <tr>
                                          <td>SKU 编码：<span class="resources"> {{product.specode}}</span></td>
                                          <td>商品条码：<span class="resources"> {{product.barcode}}</span></td>
                                          <td></td>
                                          <td></td>
                                        </tr>
                                        <tr>
                                          <td>类目：<span class="resources"> {{product.category}}</span></td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                        </tr>
                                         <tr>
                                          <td></td>
                                          <td>规格：<span class="resources"> {{product.spec}}</span></td>
                                          <td> 净重：<span class="resources"> {{product.weight}}</span></td>
                                          <td>行业绰号：<span class="resources"> {{product.nick_name}}</span></td>
                                        </tr>
                                         <tr>
                                          <td>重量：<span class="resources"> {{product.weight}}</span></td>
                                          <td>体积：<span class="resources"> {{product.length}}x{{product.width}}x{{product.height}}mm</span></td>
                                          <td>包装：<span class="resources"> {{product.package}}</span></td>
                                          <td>箱规：</td>
                                        </tr> <tr>
                                          <td>质地：<span class="resources"> {{product.materials}}</span></td>
                                          <td>主要成分：<span class="resources"> {{product.element}}</span></td>
                                          <td>生产属性：<span class="resources"> {{product.prod_attr}}</span></td>
                                          <td>执行标准：<span class="resources"> {{product.standard}}</span></td>
                                        </tr> <tr>
                                          <td>功效：<span class="resources"> {{product.effect}}</span></td>
                                          <td>适合肤质：<span class="resources"> {{product.skin}}</span></td>
                                          <td>适合年龄：<span class="resources"> {{product.age}}</span></td>
                                          <td>适用人群：所有</td>
                                        </tr> <tr>
                                          <td>使用方法：</td>
                                          <td>保质期限：<span class="resources"> {{product.shelflife}}</span></td>
                                          <td>开封保质期：</td>
                                          <td></td>
                                        </tr>
                                          <tr>
                                          <td>+显示其他抓取到的属性数据项</td>
                                          <td></td>
                                          <td></td>
                                          <td></td>
                                        </tr>
                                      </tbody>
                                    </table>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20"  class="rowp" id="qtyp">
                      <el-col :span="24">
                             <table class="table" style="width:100%;">
                                      <tbody>
                                      <tr>
                                          <td colspan="4" class="tagtitle" style="color:#f7ba2a;">库存信息：</td>
                                        </tr>
                                        <tr>
                                          <td>总可用库存：<span class="resources"> {{stock.qty}}</span></td>
                                          <td>在途库存：<span class="resources"> {{stock.qty_way}}</span></td>
                                          <td>在仓库存：<span class="resources"> {{stock.qty_use}}</span></td>
                                          <td>库龄：</td>
                                        </tr>
                                        <tr>
                                          <td >库存总金额：</td>
                                          <td>库位号：</td>
                                          <td>盘点准确率：99.99%</td>
                                          <td>盘点数据:</td>
                                        </tr>
                                        <tr>
                                          <td>折损数：</td>
                                          <td>折损定价：</el-button></td>
                                          <td> 折损毛利：</td>
                                          <td></td>
                                        </tr>
                                        
                                      </tbody>
                                    </table>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20"  class="rowp" id="servicep">
                      <el-col :span="24"> 
                             <table class="table" style="width:100%;">
                                      <tbody>
                                      <tr>
                                          <td colspan="4" class="tagtitle" style="color:#ff4949;">客服信息：</td>
                                        </tr>
                                        <tr>
                                          <td>客服促成销量：</td>
                                          <td>静默下单量：</td>
                                          <td>客服销售提成：</td>
                                          <td></td>
                                        </tr>
                                        <tr>
                                          <td colspan="4">推荐话术：</td>
                                        </tr>
                                        <tr>
                                          <td colspan="2"></td>
                                          <td>A：</td>
                                          <td>S</td>
                                        </tr>
                                      </tbody>
                                    </table>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20"  class="rowp">
                      <el-col :span="24">
                             <table class="table" style="width:100%;">
                                      <tbody>
                                      <tr>
                                          <td colspan="4" class="tagtitle" style="color:#ff4949;" id="infop">商业情报：</td>
                                        </tr>
                                        <!-- <tr>
                                          <td>悦诗风吟 绿茶茶籽保湿滋润精华液80ml</td>
                                          <td>SPU编码：复古风格</td>
                                          <td>SKU编码： DSDFGDFG</td>
                                          <td>SKU编码： DSDFGDFG</td>
                                        </tr>
                                        <tr>
                                          <td colspan="2">当前售价：</td>
                                          <td>当日销量：</td>
                                          <td>SKU编码： DSDFGDFG</td>
                                        </tr>
                                        <tr>
                                          <td>辛巴指数：1.22</td>
                                          <td><el-button type="success">关注</el-button></td>
                                          <td> <el-button type="warning">取消关注</el-button></td>
                                          <td>SKU编码： DSDFGDFG</td>
                                        </tr>
                                        <tr>
                                          <td>DNA:Ysld09sh2zHyH8hsxZi8dujKLseji39wISjUgski</td>
                                          <td>信息完善度：76.25%</td>
                                          <td>SKU编码： DSDFGDFG</td>
                                          <td>SKU编码： DSDFGDFG</td>
                                        </tr> -->
                                      </tbody>
                                    </table>
                        </el-col>
                    </el-row>
                    <el-row :gutter="20"  class="rowp">
                      <el-col :span="24">
                             <table class="table" style="width:100%;">
                                      <tbody>
                                      <tr>
                                          <td colspan="4" class="tagtitle" style="color:#ff4949;" id="marketpp">市场数据：</td>
                                        </tr>
                                        <!-- <tr>
                                          <td>悦诗风吟 绿茶茶籽保湿滋润精华液80ml</td>
                                          <td>SPU编码：复古风格</td>
                                          <td>SKU编码： DSDFGDFG</td>
                                          <td>SKU编码： DSDFGDFG</td>
                                        </tr>
                                        <tr>
                                          <td colspan="2">当前售价：</td>
                                          <td>当日销量：</td>
                                          <td>SKU编码： DSDFGDFG</td>
                                        </tr>
                                        <tr>
                                          <td>辛巴指数：1.22</td>
                                          <td><el-button type="success">关注</el-button></td>
                                          <td> <el-button type="warning">取消关注</el-button></td>
                                          <td>SKU编码： DSDFGDFG</td>
                                        </tr>
                                        <tr>
                                          <td>DNA:Ysld09sh2zHyH8hsxZi8dujKLseji39wISjUgski</td>
                                          <td>信息完善度：76.25%</td>
                                          <td>SKU编码： DSDFGDFG</td>
                                          <td>SKU编码： DSDFGDFG</td>
                                        </tr> -->
                                      </tbody>
                                    </table>
                        </el-col>
                    </el-row>
                </div>
          </el-col>
          <el-col :span="3">
                <div class="relation">
                    <p style="border-bottom:1px solid #ccc;padding-bottom:6px;font-size:14px;color:#8492a6">&nbsp;&nbsp;&nbsp;&nbsp;关联商品</p>
                </div>
                <ul class="relationul">
                    <li>
                        <img class="img" src="../../../../../assets/u1969.png">
                    </li>
                    <li>
                        <img class="img" src="../../../../../assets/u1969.png">
                    </li>
                    <li>
                        <img class="img" src="../../../../../assets/u1969.png">
                    </li>
                </ul>
          </el-col>
        </el-row>
    </div>
</template>

<script>
    import DetailJs from './Detail.js';
    export default DetailJs;
</script>
<style scoped>

  .circle {
    border-radius: 50%;
    width: 34px;
    height: 34px;
    }
  .list{
        font-size:14px ;
  }
   
  .leftse{
         list-style:none;
         text-align: center;
  }
  .leftse li{
        margin-bottom: 18px;

  }
  .tagst{
    font-size: 14px
  }
  .relation{
    /*padding-left: 16px;*/
    /*text-align: center;*/
  }
  .relationul{
    list-style: none;
  }
  .relationul li{
    margin-bottom: 16px
  }
.rowp{
    border-bottom: 1px solid #ccc;
}
table td{
    border:none !important;

}

.tagtitle{

    font-size: 18px;
    border-bottom: 1px dashed #ccc !important;
}
.resources{
    color:#777;
    text-decoration:underline;
}



  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }





 .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }

  .box-card {
    width: 480px;
  }

.active{
    color: #fff;
    background-color: #50bfff;
    border-color: #50bfff;
}



.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .table-striped  td {
    background-color: #eef1f6!important;
  }




</style>
