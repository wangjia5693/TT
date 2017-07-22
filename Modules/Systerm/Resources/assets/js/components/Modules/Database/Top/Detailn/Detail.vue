<template>
        <div class="content cle">
            <!-- 左侧 -->
            <div class="leftInfo fl">
                <div class="product_details info_boxs">
                    <div class="item_box cle">
                        <div class="item_title fl">
                            <h3>
                                {{product.product}}
                            </h3>
                            <span style="font-size:14px">SPU/SKU&nbsp;编 码：{{product.specode}}</span>
                        </div>
                        <div class="fl" style="margin-left:18px;margin-top:-8px;">
                          <span v-if="!is_on_sale" >
                              <el-badge  class="itemsa">
                                <el-button type="warning" size="small">已下架</el-button>
                              </el-badge>
                          </span>
                          <span v-if="is_on_sale">
                              <el-badge :value=sale_rate class="itemsa">
                                    <el-button type="success" size="small" @click="saleListShow">上架中</el-button>
                              </el-badge>
                          </span>

                        </div>
                        <div class="time fr">
                            {{product.mdate}}<br>
                        </div>
                    </div>
                    <div class="details cle">
                        <ul class="details_01 fl">
                            <li style="min-width:482px;">

                              <el-row >
                                <el-col :span="7">
                                    <p>售价
                                      <strong>{{sale.avg_price}}</strong>
                                      <!-- <i class="iconfont up"><img src="../../../../../assets/up.png"></i> -->
                                    </p>
                                </el-col>
                                <el-col :span="7">
                                    <p>日销
                                    <!-- <i class="iconfont down"><img src="../../../../../assets/down.png"></i> -->
                                     <strong>{{sale.sale_today}}</strong>
                                     </p>
                                </el-col>
                                <el-col :span="10">
                                    <el-tooltip content="任务完成进度指标百分比" placement="bottom" effect="light" >
                                        <p>
                                          信息完善度
                                          <i class="fa fa-question-circle-o" aria-hidden="true"></i>
                                          <strong>93.6%</strong>
                                        </p>
                                  </el-tooltip>
                                </el-col>


                              </el-row>

                            </li>
                            <!-- <li>辛巴指数<strong>1.236</strong></li> -->
                            <li style="min-width:482px;">
                                <el-row >
                                  <el-col :span="7">
                                      <el-tooltip content="总可用库存" placement="bottom" effect="light" >
                                        <p>库存<i class="fa fa-question-circle-o" aria-hidden="true"></i>
                                        <strong>{{stock.qty}}</strong></p>
                                      </el-tooltip>
                                  </el-col>
                                  <el-col :span="7">
                                      <p>月销<strong>{{sale.sale_month_true}}</strong></p>
                                  </el-col>
                                   <el-col :span="10">
                                       <p>最新采购<strong>{{purchase.last_pur_num}}</strong></p>
                                  </el-col>
                                </el-row>
                            </li>
                            <li style="margin-top:6px">
                                <el-button type="info" class='attention' size="small">&nbsp;关 注&nbsp;</el-button>
                               <!--  <a href="javascript:;" class="btn current">取消关注</a> -->
                            </li>
                        </ul>

                        <ul class="details_03 fr">
                            <li><img :src="product.pic_url" alt="悦诗风吟"></li>
                        </ul>
                    </div>
                   <!--  <div class="DNA">(DNA:Ysld09sh2zHyH8hsxZi8dujKLseji39wISjUgski)</div> -->
                </div>
                    <div class="itemInfo info_boxs">
                    <div class="hd" style="float:left">
                        <h2>商品信息</h2>
                    </div>
                    <div style="float:right">
                       <el-button size="small" class="editei" @click="prodEdite">编辑</el-button>
                    </div>
                    <table class="infomation" style="table-layout: fixed;">
                        <tr>
                            <td colspan="4"><span class="resources"> {{product.short_name}}</span></td>
                        </tr>
                        <tr>
                            <td>品 牌：<span class="resources"> {{product.brand_cn}}</span></td>
                            <td>品牌地：<span class="resources"> {{product.country}}</span></td>
                            <td colspan="2">上市时间：<span class="resources"> {{product.lnage}}</span></td>
                        </tr>
                        <tr>
                            <!-- <td>sku编码：<span class="resources"> {{product.specode}}</span></td> -->
                            <td colspan="2">商品条码：<span class="resources"> {{product.barcode}}</span></td>
                            <td colspan="2">类 目：<span class="resources"> {{product.category_name}}</span></td>
                        </tr>
                       <!--  <tr>
                            <td colspan="4">类 目：<span class="resources"> {{product.category_name}}</span></td>
                        </tr> -->
                        <tr>
                            <td>行业绰号：<span class="resources"> {{product.nick_name}}</span></td>
                            <td>档 次：<span class="resources"> {{product.grade}}</span></td>
                             <el-tooltip content="色号，容量，型号，中小样等" placement="bottom" effect="light" >
                                <td>
                                      规 格<i class="fa fa-question-circle-o" aria-hidden="true"></i>：
                                    <span class="resources"> {{product.spec}}-{{product.color}}-{{product.volumn}}-{{product.type}}</span>
                                </td>
                            </el-tooltip>
                            <td></td>
                        </tr>
                      <!--   <tr>
                            <td>色 号：<span class="resources"> {{product.color}}</span></td>
                            <td>容 量：<span class="resources"> {{product.volumn}}</span></td>
                            <td>型 号：<span class="resources"> {{product.type}}</span></td>
                            <td>净 重：<span class="resources"> {{product.weighti}}</span></td>
                        </tr> -->
                        <tr>
                            <td>重 量：<span class="resources"> {{product.weight}}</span></td>
                            <td>体 积：<span class="resources"> {{product.capacity}}&nbsp;cm<sup>3</sup></span></td>
                            <td>包 装：<span class="resources"> {{product.package}}</span></td>
                            <td>箱 规：<span class="resources"> {{product.boxstyle}}</span></td>
                        </tr>

                        <tr>
                            <td class="overfl">功 效：
                              <el-tooltip :content="product.effect" placement="bottom" effect="light" >
                                <span class="resources"> {{product.effect}}</span>
                                </el-tooltip>
                            </td>
                            <td class="overfl">适合肤质：
                                <el-tooltip :content="product.skin" placement="left" effect="light" >
                                  <span class="resources"> {{product.skin}}</span>
                                </el-tooltip>
                            </td>
                            <td class="overfl">适合年龄：

                                    <span class="resources"> {{product.age}}</span>

                            </td>
                            <td class="overfl">适用人群：
                             <el-tooltip :content="product.suite" placement="bottom" effect="light" >
                                <span class="resources"> {{product.suite}}</span>
                              </el-tooltip>
                            </td>
                        </tr>
                         <tr>
                            <td class="overfl">质 地：<span class="resources"> {{product.materials}}</span></td>
                            <td class="overfl">成 分：
                               <el-tooltip :content="product.element" placement="left" effect="light" >
                                <span class="resources"> {{product.element}}</span>
                              </el-tooltip>
                            </td>
                            <td class="overfl">属 性：<span class="resources"> {{product.prod_attr}}</span></td>
                              <el-tooltip content="生产执行标准，参见外包装" placement="bottom" effect="light" >
                            <td>执行标准<i class="fa fa-question-circle-o" aria-hidden="true"></i>：<span class="resources"> {{product.standard}}</span></td>
                            </el-tooltip>
                        </tr>
                        <tr>
                            <td class="overfl">使用方法：
                               <el-tooltip :content="product.way" placement="left" effect="light" >
                                  <span class="resources"> {{product.way}}</span>
                              </el-tooltip>
                            </td>
                            <td>保质期限：<span class="resources"> {{product.shelflife}}</span></td>
                            <td colspan="2">开封保质期：<span class="resources"> {{product.life}}</span></td>
                        </tr>
                    </table>
                </div>
                <div class="saleInfo info_boxs" v-if="this.$store.state.user.userinfo.username">
                    <div class="hd" style="float:left">
                        <h2>销售信息</h2>
                    </div>
                         <div style="float:right">
                       <el-button size="small" class="editei" @click="saleEdite">编辑</el-button>
                    </div>
                    <table class="infomation">
                        <tr>
                            <!-- <td>标准售价：<span class="resources"> {{sale.price}} </span></td> -->
                            <td>平均售价： <span class="resources"> {{sale.avg_price}}</span></td>
                            <td>热卖价格带：<span class="resources"> {{sale.price_rang}}</span></td>
                            <td>专柜价：<span class="resources">{{sale.shoppe_pri/100}}</span></td>
                            <td></td>
                        </tr>
                        <tr>
                          <td>近日销量：<span class="resources"><a @click="showdetails('近日销量')" class="bitem">{{sale.sale_today}}</a></span></td>
                            <td>当月销量：<span class="resources"><a @click="showdetails('当月销量')" class="bitem">{{sale.sale_month_true}}</a></span></td>
                            <td>全年总销量：<span class="resources"> {{sale.sale_year}}</span></td>
                            <td>历史最高月销量：<span class="resources"> {{sale.top_salem}}</span></td>
                        </tr>
                        <tr>
                            <td>本月毛利额：{{sale.gross_profile_month}}</td>
                            <td>本月毛利率：{{sale.gross_profile_rate_month}}</td>
                            <td>毛利浮动带：{{sale.floating_margin}}</td>
                            <!-- <td>月度销售资产回报率：</td> -->
                            <td></td>
                        </tr>
                        <tr>
                            <td colspan="4">
                                <p style="margin-bottom:20px">其余渠道售价、销售:</p>
                                  <el-tabs v-model="activeName" @tab-click="handleClick" type="card">

                                                 <el-tab-pane name="first" >
                                                  <span slot="label"><i class="fa fa-line-chart" aria-hidden="true" ></i> 销 售&nbsp;&nbsp;|</span>
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
                                                             <el-button :plain="true"  size="small" style="border-radius: 50% !important;width:36px !important;height: 36px !important;padding:7px 6px!important; " @click="echarts_first_range('quarter')" v-bind:class="{active:quarter_isActive}">90天</el-button>
                                                          <el-button :plain="true"  size="small" style="border-radius: 50% !important;width:36px !important;height: 36px !important; padding:7px 6px!important;" @click="echarts_first_range('year')" v-bind:class="{active:year_isActive}">12月</el-button>
                                                         </template>
                                                    </el-col>
                                                  </el-row>

                                                   <el-row :gutter="20">
                                                    <el-col :span="20" :offset="1">
                                                      <div style="border:1px dashed #E5E9F2"></div>
                                                    </el-col>
                                                    </el-row>

                                                    <el-row :gutter="20" v-loading="loading4" element-loading-text="拼命加载中">
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
                                                  <span slot="label"><i class="fa fa-area-chart" aria-hidden="true"></i> 成 本&nbsp;&nbsp;|</span>



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
                                                     <el-row :gutter="20" v-loading="loading3" element-loading-text="拼命加载中">
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
                                                  <span slot="label"><i class="fa fa-bar-chart" aria-hidden="true"></i> 毛 利&nbsp;&nbsp;|</span>


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
                                                  <span slot="label"><i class="fa fa-pie-chart" aria-hidden="true"></i> 渠道对比</span>


                                                    <el-row :gutter="20">
                                                     <el-col :span="16" :offset="1">
                                                          <el-select v-model="echarts_scatter.selectlegend" multiple  clearable  placeholder="请选择查询的店铺" size="small" style="width:100%!important" @visible-change="selcetChoosei" @remove-tag="removetagi">
                                                            <el-option
                                                              v-for="item in shops"
                                                              :label="item.shopname"
                                                              :value="item.sh_id">
                                                            </el-option>
                                                          </el-select>
                                                      </el-col>
                                                      <el-col :span="4" >
                                                          <el-button type="success" @click="changePie">切换饼状图</el-button>
                                                      </el-col>
                                                    </el-row>


                                                      <el-row :gutter="20">
                                                    <el-col :span="20" :offset="1">
                                                      <div style="border:1px dashed #E5E9F2"></div>
                                                    </el-col>
                                                    </el-row>

                                                    <el-row :gutter="20" v-loading="loading1" element-loading-text="拼命加载中">
                                                    <el-col :span="20" :offset="1" v-if="!salepie">
                                                      <scatter
                                                      :id='echarts_scatter.id'
                                                      :title='echarts_scatter.title'
                                                      :legend='echarts_scatter.legend'
                                                      :datalist='echarts_scatter.datalist'></scatter>
                                                    </el-col>
                                                    <el-col :span="20" :offset="1" v-if="salepie">
                                                    <pie
                                                      :id='echarts_pie.id'
                                                      :title='echarts_pie.title'
                                                      :subtext='echarts_pie.subtext'
                                                      :hovertitle='echarts_pie.hovertitle'
                                                      :datalist='echarts_pie.datalist'
                                                      class="stock_pie"
                                                      ></pie>
                                                    </el-col>
                                                    </el-row>



                                                </el-tab-pane>
                                              </el-tabs>

                            </td>
                        </tr>

                        <tr>
                            <td>淘宝首屏销量：{{top.qty}}</td>
                            <td>淘宝售价区间：{{top.price_range}}</td>
                            <td>最佳销量-价格：{{top.price_best}}</td>
                            <td>旗舰店售价：{{top.price_shop}}</td>
                        </tr>
                        <tr>
                            <!-- <td>前五店铺：</td> -->
                            <!-- <td>运营销售提成：0</td> -->
                            <td colspan="4">显示名称:<span class="resources"> {{sale.top_name}}</span></td>
                        </tr>
                        <tr>
                            <td colspan="4">关键词：<span class="resources"> {{sale.top_keys}}</span></td>
                        </tr>
                         <tr style="display:none">
                            <td colspan="4">
                                <el-row :gutter="20" class="rowp">
                                              <el-col :span="20" :offset="1">
                                              </el-col>
                                            </el-row>
                                            <el-row :gutter="20">
                                                    <el-col :span="20" :offset="1">
                                                        <template>
                                                          <el-button :plain="true"  size="small" v-bind:class="{ active: tsale_fee_isActive }" @click="echarts_top_column('sale_fee')">销售额</el-button>
                                                          <el-button :plain="true" size="small" v-bind:class="{ active: tsale_qty_isActive }" @click="echarts_top_column('sale_qty')">销量</el-button>
                                                          <el-button :plain="true" size="small" v-bind:class="{ active: tsale_price_isActive }" @click="echarts_top_column('sale_price')">售价</el-button>
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
                             <tr>
                            <!-- 凑数 -->
                        </tr>
                        <tr>
                          <!-- 淘宝抓取列表数据 -->
                          <td colspan="4">
                               <el-table
                                :data="tableDataTop"
                                style="width: 100%">
                                <el-table-column
                                    aligin:center
                                    prop="pic_url"
                                    label="图片"
                                    >
                                    <template scope="scope" class="pic_url">
                                        <img :src= scope.row.pic_url alt="图片地址" height="80px" width="80px">
                                    </template>
                                </el-table-column>
                                <el-table-column
                                  prop="title"
                                  label="商品名称"
                                  width="180">
                                </el-table-column>
                                <el-table-column
                                  prop="price"
                                  label="售价"
                                >
                                </el-table-column>
                                <el-table-column
                                  prop="get_count"
                                  label="销量">
                                </el-table-column>
                                <el-table-column
                                  prop="review_count"
                                  label="评价数">
                                </el-table-column>
                                <el-table-column
                                  prop="shop_name"
                                  label="店铺名">
                                </el-table-column>
                              </el-table>
                          </td>
                        </tr>
                    </table>
                </div>
                <div class="selectInfo info_boxs" v-if="this.$store.state.user.userinfo.username">
                    <div class="hd" style="float:left">
                        <h2>采购信息</h2>
                    </div>
                     <div style="float:right">
                       <el-button size="small" class="editei" @click="purchaseEdite">编辑</el-button>
                    </div>
                    <table class="infomation">
                        <tr>
                            <td colspan="2">最新采购：￥{{purchase.last_pur_price/10000}}-{{purchase.last_pur_num}}个（{{purchase.last_pur_time}}）</td>
                             <td>最近采购供应商：<span class="resources"> {{purchase.lasr_pur_supplier}}</span></td>
                        </tr>
                        <tr>
                            <td>加权平均成本：<span class="resources"> {{purchase.pur_cost/10000}}</span></td>
                            <td>成本浮动带：<span class="resources"> {{purchase.min_cost/10000}}~{{purchase.max_cost/10000}}</span></td>
                            <td>历史最低成本：<span class="resources"> {{purchase.hist_min/10000}}</span></td>
                        </tr>
                        <!-- <tr>
                            <td>内控询价成本：<span class="resources"> {{purchase.cost_check}}</span></td>
                            <td>内控询价成本差异：<span class="resources"> {{purchase.cost_check-purchase.pur_cost/10000}}</span></td>
                            <td>最新成本与加权成本差异：<span class="resources"> {{purchase.last_cost-purchase.pur_cost/10000}}</span></td>
                        </tr>
                        <tr>
                            <td>销售需求量：<span class="resources"> {{purchase.need}}</span></td>
                            <td>需求采购量：<span class="resources"> {{purchase.need_calc}}</span></td>
                            <td>销售运营提报采购量：<span class="resources"> {{purchase.need_pur}}</span></td>
                        </tr> -->
                        <tr>
                            <!-- <td>销售提报时间:<span class="resources"> {{purchase.need_pur_time}}</span></td> -->
                            <td>缺货时间：<span class="resources"> {{purchase.lack_time}}</span></td>
                            <td>缺货天数: <span class="resources"> {{purchase.lack_day}}</span></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td colspan="3">
                                <!-- <p>其余渠道售价、销售:</p> -->
                                <!-- <img src="images/chart.jpg"> -->
                            </td>
                        </tr>
                        <tr>
                            <!-- 凑数 -->
                        </tr>
                        <tr>
                            <td colspan="3">总代公司：</td>
                        </tr>
                        <tr>
                            <td>授 权：</td>
                            <td>流通属性：<span class="resources"> {{purchase.flow_style}}</span></td>
                            <td>真假问题：<span class="resources"> {{purchase.true_f}}</span></td>
                        </tr>
                        <tr>
                            <td colspan="3">
                                <el-collapse accordion >
                                  <el-collapse-item @click.native='supplierShow()'>
                                    <template slot="title" >
                                      近一年主要供应商&nbsp;&nbsp;
                                      <el-tag type="primary" v-if="!suppliershow">点击查看</el-tag>
                                      <el-tag type="success" v-if="suppliershow">共{{Object.keys(supplierList).length}}家</el-tag>
                                    </template>

                                    <el-row   v-loading="supplierloading"
                                        element-loading-text="拼命加载中">
                                      <el-col :span="12" v-for="(time,supplier) in supplierList">
                                          <i class="fa fa-buysellads" aria-hidden="true"></i>
                                          {{supplier}}<i style="font-size:12px;color:#ccc;padding-left:4px">(采购时间：{{time}})</i>
                                      </el-col>
                                    </el-row>

                                  </el-collapse-item>
                                </el-collapse>
                            </td>
                        </tr>
<!--                         <tr>
                            <td>1.A公司</td>
                            <td colspan="2">2.B公司</td>
                        </tr> -->
                    </table>
                </div>

                <div class="stockInfo info_boxs" v-if="this.$store.state.user.userinfo.username">
                    <div class="hd" style="float:left">
                        <h2>库存信息</h2>
                    </div>
                   <div style="float:right">
                       <el-button size="small" class="editei" @click="">编辑</el-button>
                    </div>
                    <table class="infomation">
                        <tr>
                            <td>总可用库存：<span class="resources"> {{stock.qty}}</span></td>
                            <td>在途库存：<span class="resources"> {{stock.qty_way}}</span></td>
                            <td>在仓库存：<span class="resources"> {{stock.qty_use}}</span></td>
                            <td>库 龄：<span class="resources">{{stock.age}}</span></td>
                        </tr>
                        <tr>
                            <td>库存总金额：{{purchase.pur_cost*stock.qty/10000}}</td>
                            <td>库位号：{{stock.storge}}</td>
                            <td>盘点准确率：99.99%</td>
                            <td>盘点数据：</td>
                        </tr>
                        <tr>
                            <td>折损数：</td>
                             <td>折损成本：</td>
                            <el-tooltip content="折损商品出售产生销售额" placement="bottom" effect="light" >
                              <td>折损销售<i class="fa fa-question-circle-o" aria-hidden="true"></i>：</td>
                            </el-tooltip>
                            <el-tooltip content="折损数*折损成本-折损销售" placement="bottom" effect="light" >
                            <td>亏损金额<i class="fa fa-question-circle-o" aria-hidden="true"></i>：</td>
                            </el-tooltip>
                        </tr>
                        <tr>
                          <td colspan="4">
                                <pie
                                  :id='echarts_stock.id'
                                  :title='echarts_stock.title'
                                  :subtext='echarts_stock.subtext'
                                  :hovertitle='echarts_stock.hovertitle'
                                  :datalist='echarts_stock.datalist'
                                  class="stock_pie"
                                  ></pie>
                              </el-row>
                          </td>
                        </tr>
                    </table>
                </div>
                <div class="customInfo info_boxs">
                    <div class="hd" style="float:left">
                        <h2>客服信息</h2>
                    </div>
                     <div style="float:right">
                       <el-button size="small" class="editei" @click="createCust">新增</el-button>
                    </div>
                    <table class="infomation">
                      <!--   <tr>
                            <td>客服促成销量：</td>
                            <td>静默下单量：</td>
                            <td>客服销售提成：</td>
                        </tr> -->
                        <tr>
                            <td colspan="3" style="background-color:#fff">推荐话术：</td>
                        </tr>
                        <tr>
                            <td colspan="3" class="overfl">
                                <el-table
                                  :data="customInfos"
                                   stripe
                                  style="width: 100%">
                                  <el-table-column
                                    prop="keyword"
                                    label="关键词"
                                   >
                                  </el-table-column>
                                  <el-table-column
                                    prop="desc"
                                    label="话术"
                                    :show-overflow-tooltip="true"
                                    >
                                  </el-table-column>
                                  <!-- <el-table-column
                                    prop="url"
                                    label="链接"
                                    >
                                  </el-table-column> -->
                                   <el-table-column
                                    label="操作"
                                    width="160"
                                    align="center"
                                    :context="_self">
                                    <template scope='scope'>
                                        <el-button
                                            type="info"
                                            icon='edit'
                                            size="mini"
                                            @click='onEdit(scope.row)'></el-button>
                                        <el-button
                                            type="danger"
                                            icon='delete'
                                            size="mini"
                                            @click='onDelete(scope.row)'></el-button>
                                    </template>
                                </el-table-column>
                                </el-table>

                                <el-col :span="24" class='btm-action'>
                                  <el-pagination
                                      v-if='paginations.total>0'
                                      class='pagination'
                                      :page-sizes="paginations.page_sizes"
                                      :page-size="paginations.page_size"
                                      :layout="paginations.layout"
                                      :total="paginations.total"
                                      :current-page='paginations.current_page'
                                      @current-change='onChangeCurrentPage'
                                      @size-change='onChangePageSize'>
                                  </el-pagination>
                              </el-col>
                            </td>
                        </tr>

                    </table>
                </div>

                   <div class="customInfo info_boxs">
                    <div class="hd" style="float:left">
                        <h2>商品素材 <a style="font-size:14px;font-weight:normal;cursor:pointer" @click="showImg">(查看素材)</a></h2>
                       
                    </div>
                     <div style="float:right">
                       <el-button size="small" class="editei" @click="downImg">一键下载</el-button>
                       <el-button size="small" class="editei" @click="uploadImg">上传</el-button>
                    </div>
                    <div style="clear:both" v-if="imgshow">
                      <el-row :gutter="20">

                        <el-col :span="6" v-for="url in imgList">
                            <img :src="url" alt="" width="100%" height="100%">
                        </el-col>
                        
                      </el-row>
                    </div>
                </div>
            </div>
            <!-- 右侧 -->
            <div class="rightInfo fr">
                <div class="similarItems">

                    <div style="float:left">
                      <h2>关联商品</h2>
                    </div>
                    <div style="float:right">
                       <el-button size="small" class="editei" @click="relationc">新增</el-button>
                    </div>

                    <ul class="itemList" style="clear:both; border-top: 1px solid #e3e3e3;" >
                        <li class="cle" v-for="relation in relations">
                            <img :src="relation.pic_url" alt="悦诗风吟" @click='deleteRelation(relation.id)'>
                            <div class="info fl">
                                <h3 style="max-width:218px;margin-bottom:12px">
                                  <a @click='goRelation(relation.relation)' style="cursor: pointer;">{{relation.product}}</a>
                                </h3>
                                <p>昨日销量：<strong>{{relation.sale_today}}</strong></p>
                            </div>
                        </li>
                        <li class="cle" v-if="relationnone" style="    background: rgba(73,195,140,0.1);
    border-radius: 2px;margin-top:10px;height:80px;padding-left:16px;color:#8492A6">
                            <h4>暂无数据</h4>
                        </li>

                    </ul>
                    <div class="evaluate">
                        <p>Baidu指数：</p>
                        <p>微信指数：</p>
                        <p>
                            <h4>客户评价：</h4>
                            <p class="info">貨收到了，跟我以前用的味道和使用感一樣的都是正品哦很好用??? 很保湿水润都是正品哦很好用??? 很保湿水润都是正品哦很好用??? 很保湿水润都是正品哦很好用??? 很保湿水润都是正品哦很好用??? 很保湿水润都是正品哦很好用??? 很保湿水润都是正品哦很好用??? 很保湿水润都是正品哦很好用??? 很保湿水润</p>
                        </p>
                    </div>
                    <div class="link">
                        最新百度搜索有价值链接：5-10
                    </div>
                    <div class="rule">
                        <h4>算法规则：</h4>
                        <p>1.可以取同订单内的商品；</p>
                        <p>2.数云里的数据（？）</p>
                        <p>3.生e经（？）</p>
                    </div>
                </div>
            </div>

            <!-- 各渠道数量展示 -->
            <el-dialog title="销量详情" v-model="dialogTableVisible" style="width: 100%;" size="tiny" class="el-dialogi">
              <el-table :data="shopinfo" height="250" show-summary  >
                <el-table-column property="shop" label="店铺名称"></el-table-column>
                <el-table-column property="sales" label="销量"></el-table-column>
              </el-table>
            </el-dialog>



             <!-- 上架数据显示 -->
            <el-dialog title="已上架店铺" v-model="onSaleVisible" style="width: 100%;" size="tiny" class="el-dialogi">
              <el-table :data="saleList" height="250" >
                <el-table-column property="shopname" label="店铺名称"></el-table-column>
                <!-- <el-table-column property="sales" label="销量"></el-table-column> -->
              </el-table>
            </el-dialog>


            <!-- 商品编辑页 -->
            <el-dialog title="商品信息编辑" v-model="dialogFormVisible" class="el-dialogi">
              <div class="itemInfo info_boxs info_boxsi">
                <table class="infomation">
                  <tr>
                    <td colspan="4">商品简称：
                      <el-input v-model="productEditor.short_name" size="small" class="editeInput"></el-input>
                    </td>
                  </tr>
                  <tr>
                    <td>品 牌：<el-input  v-model="productEditor.brand_cn"  size="small" class="editeInput" ></el-input></td>
                    <td>品牌地：<el-input  v-model="productEditor.country"  size="small" class="editeInput" ></el-input></td>
                    <td colspan="2">上市时间：
                    <!-- <el-input v-model="productEditor.lnage" size="small" class="editeInput"  ></el-input> -->
                      <el-date-picker
                        size="small" class="editeInput"
                        v-model="lnage"
                        type="date"
                        @change="dateChange"
                        placeholder="选择日期"
                       >
                      </el-date-picker>
                    </td>
                  </tr>
                  <tr>
                    <td>sku编码：
                    <el-input  v-model="productEditor.specode"  size="small" class="editeInput" :disabled="true"></el-input>
                    </td>
                    <td colspan="3">商品条码：
                    <el-input  v-model="productEditor.barcode"  size="small" class="editeInput" ></el-input>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="4">类 目：
                    <!-- <el-input  v-model="productEditor.category"  size="small" class="editeInput"></el-input> -->
                     <el-cascader
                      :options="categoryOptions"
                      size="small"
                      class="category"
                       v-model="selectedCategory"
                     >
                    </el-cascader>

                    </td>
                  </tr>
                  <tr>
                    <td>行业绰号：<el-input v-model="productEditor.nick_name" size="small" class="editeInput" ></el-input></td>
                    <td>档 次：
                      <el-select placeholder="请选择" v-model="value" size="small" class="editeInput">
                        <el-option
                          v-for="itemi in gradeoptions"
                          :key="itemi.value"
                          :label="itemi.label"
                          :value="itemi.value">
                        </el-option>
                      </el-select>
                    </td>
                    <td>规 格：<el-input v-model="productEditor.spec" size="small" class="editeInput" placeholder="80ml"></el-input></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>色 号：<el-input v-model="productEditor.color" size="small" class="editeInput" ></el-input></td>
                    <td>容 量：<el-input v-model="productEditor.volumn" size="small" class="editeInput" ></el-input></td>
                    <td>型 号：<el-input v-model="productEditor.type" size="small" class="editeInput" ></el-input></td>
                    <td>净 重：<el-input v-model="productEditor.weighti" size="small" class="editeInput" ></el-input></td>
                  </tr>
                  <tr>
                    <td>重 量：<el-input v-model="productEditor.weight" size="small" class="editeInput" ></el-input></td>
                    <td>体 积：<el-input v-model="productEditor.capacity" size="small" class="editeInput" ></el-input></td>
                    <td>包 装：<el-input v-model="productEditor.package" size="small" class="editeInput" placeholder="纸盒装"></el-input></td>
                    <td>箱 规：<el-input  v-model="productEditor.boxstyle"  size="small" class="editeInput" ></el-input></td>
                  </tr>
                  <tr>
                    <td>质 地：<el-input v-model="productEditor.materials" size="small" class="editeInput" placeholder="液体"></el-input></td>
                    <td>主要成分：<el-input v-model="productEditor.element" size="small" class="editeInput" ></el-input></td>
                    <td>生成属性：<el-input  v-model="productEditor.prod_attr"  size="small" class="editeInput" ></el-input></td>
                    <td>执行标准：<el-input v-model="productEditor.standard" size="small" class="editeInput" ></el-input></td>
                  </tr>
                  <tr>
                    <td>功 效：<el-input v-model="productEditor.effect" size="small" class="editeInput" ></el-input></td>
                    <td>适合肤质：<el-input  v-model="productEditor.skin"  size="small" class="editeInput" ></el-input></td>
                    <td>适合年龄：<el-input  v-model="productEditor.age"  size="small" class="editeInput" ></el-input></td>
                    <td>适用人群：<el-input v-model="productEditor.suite" size="small" class="editeInput" ></el-input></td>
                  </tr>
                  <tr>
                    <td>使用方法：<el-input v-model="productEditor.way" size="small" class="editeInput" ></el-input></td>
                    <td>保质期限：<el-input v-model="productEditor.shelflife" size="small" class="editeInput" ></el-input></td>
                    <td colspan="2">开封保质期：<el-input v-model="productEditor.life" size="small" class="editeInput" ></el-input></td>
                  </tr>
                </table>
              </div>
              <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="infoEdite('product')" class="editei" size="small">保 存</el-button>
                <el-button @click="dialogFormVisible = false" size="small" class="editeii">取 消</el-button>

              </div>
            </el-dialog>
            <!-- 销量编辑页 -->
              <el-dialog title="销售信息编辑" v-model="dialogFormsVisible" class="el-dialogi">
              <div class="itemInfo info_boxs info_boxsi">
                        <table class="infomation">
                        <tr>
                            <td>标准售价：<el-input  v-model="saleEditor.price"  size="small" class="editeInput" :disabled="true"></el-input></td>
                            <td>平均售价： <el-input  v-model="saleEditor.avg_price"  size="small" class="editeInput" :disabled="true"></el-input></td>
                            <td>热卖价格带：<el-input  v-model="saleEditor.price_rang"  size="small" class="editeInput" ></el-input></td>
                            <td>专柜价：<el-input  v-model="saleEditor.shoppe_pri"  size="small" class="editeInput" ></el-input></td>
                        </tr>
                        <tr>
                            <td>昨日销量：<el-input  v-model="saleEditor.sale_today"  size="small" class="editeInput" :disabled="true"></el-input></td>
                            <td>当月销量：<el-input  v-model="saleEditor.sale_month_true"  size="small" class="editeInput" :disabled="true"></el-input></td>
                            <td>全年总销量：<el-input   size="small" class="editeInput" :disabled="true"></el-input></td>
                            <td>历史最高月销量：<el-input  v-model="saleEditor.top_salem"  size="small" class="editeInput" :disabled="true"></el-input></td>
                        </tr>
                        <tr>
                            <td>本月毛利额：<el-input    size="small" class="editeInput" :disabled="true"></el-input></td>
                            <td>本月毛利率：<el-input    size="small" class="editeInput" :disabled="true"></el-input></td>
                            <td>毛利浮动带：<el-input    size="small" class="editeInput" :disabled="true"></el-input></td>
                            <td>月度销售资产回报率：<el-input    size="small" class="editeInput" :disabled="true"></el-input></td>
                        </tr>
                        <tr>
                            <td>淘宝首屏销量：<el-input    size="small" class="editeInput" ></el-input></td>
                            <td>淘宝售价区间：<el-input    size="small" class="editeInput" :disabled="true"></el-input></td>
                            <td>最佳销量-价格：<el-input    size="small" class="editeInput" :disabled="true"></el-input></td>
                            <td>旗舰店售价：<el-input   size="small" class="editeInput" :disabled="true"></el-input></td>
                        </tr>
                        <tr>
                            <td>前五店铺：</td>
                            <td>运营销售提成：40</td>
                            <td colspan="2">显示名称：<el-input  v-model="saleEditor.top_name"  size="small" class="editeInput" ></el-input></td>
                        </tr>
                        <tr>
                            <td colspan="4">关键词：<el-input  v-model="saleEditor.top_keys"  size="small" class="editeInput" ></el-input></td>
                        </tr>
                    </table>
              </div>
              <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="infoEdite('sale')" class="editei" size="small">保 存</el-button>
                <el-button @click="dialogFormsVisible = false" size="small" class="editeii">取 消</el-button>

              </div>
            </el-dialog>
            <!-- 采购编辑页 -->
              <el-dialog title="采购信息编辑" v-model="dialogFormpVisible" class="el-dialogi">
              <div class="itemInfo info_boxs info_boxsi">
                       <table class="infomation">
                        <tr>
                            <td colspan="2">最新采购：￥{{purchaseEditor.last_pur_price/10000}}-{{purchaseEditor.last_pur_num}}个（{{purchaseEditor.last_pur_time}}）</td>
                             <td>最新采购成本：<el-input v-model="purchaseEditor.last_pur_price" size="small" class="editeInput" :disabled="true"></el-input></td>
                        </tr>
                        <tr>
                            <td>加权平均成本：<el-input v-model="purchaseEditor.pur_cost" :disabled="true" size="small" class="editeInput"></el-input></td>
                            <td>成本浮动带：<el-input v-model="purchaseEditor.min_cost" :disabled="true" size="small" class="editeInput"></el-input></td>
                            <td>历史最低成本：<el-input v-model="purchaseEditor.hist_min" :disabled="true" size="small" class="editeInput"></el-input></td>
                        </tr>
                        <!-- <tr>
                            <td>内控询价成本：<el-input v-model="purchaseEditor.cost_check" size="small" class="editeInput"></el-input></td>
                            <td>内控询价成本差异：<el-input v-model="purchaseEditor.cost_check" :disabled="true" size="small" class="editeInput"></el-input></td>
                            <td>最新成本与加权成本差异：<el-input v-model="purchaseEditor.last_cost" :disabled="true" size="small" class="editeInput"></el-input></td>
                        </tr>
                        <tr>
                            <td>销售需求量：<el-input v-model="purchaseEditor.need"  :disabled="true" size="small" class="editeInput"></el-input></td>
                            <td>需求采购量：<el-input v-model="purchaseEditor.need_calc" :disabled="true" size="small" class="editeInput"></el-input></td>
                            <td>销售运营提报采购量：<el-input v-model="purchaseEditor.need_pur" size="small" class="editeInput"></el-input></td>
                        </tr> -->
                        <tr>
                            <td>销售提报时间:<el-input v-model="purchaseEditor.need_pur_time"  :disabled="true" size="small" class="editeInput"></el-input></td>
                            <td>缺货时间：<el-input v-model="purchaseEditor.lack_time" :disabled="true" size="small" class="editeInput"></el-input></td>
                            <td>缺货天数:<el-input v-model="purchaseEditor.lack_day" :disabled="true" size="small" class="editeInput"></el-input></td>
                        </tr>
                        <tr>
                            <td colspan="3">
                                <p>其余渠道售价、销售:</p>
                                <!-- <img src="images/chart.jpg"> -->
                            </td>
                        </tr>
                        <tr>
                            <!-- 凑数 -->
                        </tr>
                        <tr>
                            <td colspan="3">总代公司：</td>
                        </tr>
                        <tr>
                            <td>授 权：</td>
                            <td>流通属性：<el-input v-model="purchaseEditor.flow_style" size="small" class="editeInput"></el-input></td>
                            <td>真假问题:<el-input v-model="purchaseEditor.true_f" size="small" class="editeInput"></el-input></td>
                        </tr>
                        <tr>
                            <td colspan="3">主要供应商：</td>
                        </tr>
                        <tr>
                            <td>1.A公司</td>
                            <td colspan="2">2.B公司</td>
                        </tr>
                    </table>
              </div>
              <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="infoEdite('purchase')" class="editei" size="small">保 存</el-button>
                <el-button @click="dialogFormpVisible = false" size="small" class="editeii">取 消</el-button>

              </div>
            </el-dialog>

             <!-- 关联编辑页 -->
              <el-dialog title="新增关联商品" v-model="dialogFormrVisible" class="el-dialogi">
              <div class="itemInfo info_boxs info_boxsi">
                    <el-row>
                      <el-col :span="24">
                        <el-input type="textarea"  :rows="6" placeholder="输入关联商品SKU（最多x个，用分号；隔开）"  v-model="relation"></el-input>
                      </el-col>
                    </el-row>

              </div>
              <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="relationEdite" class="editei" size="small">保 存</el-button>
                <el-button @click="dialogFormrVisible = false" size="small" class="editeii">取 消</el-button>

              </div>
            </el-dialog>

               <!-- 话术编辑页 -->
              <el-dialog :title="dialogctitle" v-model="dialogFormcVisible" class="el-dialogi">
              <div class="itemInfo info_boxs info_boxsi">
                  <el-form ref="dialogFormc" label-width="100px" class="demo-ruleForm"  :rules="rule_data" :model="custinfo">
                    <el-form-item label="关键字：" prop="keyword" >
                      <el-input type="text" auto-complete="off" placeholder="请输入关键词"   v-model='custinfo.keyword'></el-input>
                    </el-form-item>
                    <el-form-item label="话术：" prop="desc" >
                      <el-input type="textarea" rows="6" placeholder="请输入具体话术内容"   v-model='custinfo.desc'></el-input>
                    </el-form-item>
                    <el-form-item label="链接：" prop="url" >
                      <el-input type="textarea" rows="2" placeholder="请输入链接"   v-model='custinfo.url'></el-input>
                    </el-form-item>
                  </el-form>
              </div>
              <div slot="footer" class="dialog-footer">
                <el-button type="primary" @click="saveCusterm" class="editei" size="small">保 存</el-button>
                <el-button @click="dialogFormcVisible = false" size="small" class="editeii">取 消</el-button>

              </div>
            </el-dialog>

        </div>
</template>

<script>
    import DetailJs from './Detail.js';
    export default DetailJs;
</script>
<style scoped>
     @import '../../../../../assets/css/base.css';

     @import '../../../../../assets/css/nalaItems.css';
    .leftInfo .info_boxs .hd { background: url(../../../../../assets/icon.jpg) no-repeat;}


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
  .overfl{
    /*width: 130px !important;*/
    white-space:nowrap !important;          /*不换行*/
    text-overflow:ellipsis !important;         /*超出的显示省略号*/
    overflow:hidden !important;                  /*超出部分隐藏*/
    word-wrap:normal !important;             /*长单词不换行-兼容ie*/
  }
  .stock_pie{
    margin-top: 30px;
    margin-left: 40px;
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
.bitem{
 text-decoration:underline;
}
.tagtitle{

    font-size: 18px;
    border-bottom: 1px dashed #ccc !important;
}
.resources{
    color:#777;
}

.dialog-footer{
  margin:0 auto;
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

  .editei{
    padding-left: 18px;
    padding-right: 18px;
    background-color: rgba(79, 96, 139, 1);
    color:#FFFFFF;
  }

.editeii{
    padding-left: 18px;
    padding-right: 18px;
  }
.itemsa{
  margin-top: 10px;
  margin-right: 40px;
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
.editeInput{
  width:50%;
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
.category{
  width:50%;
}
.attention{
  background-color: #ada;
   border-color: #ada
}

.info_boxsi table { width: 100%;}
.info_boxsi table td { padding:6px; font-size: 12px;}
.info_boxsi table tr:nth-child(2n+1) { background-color: #eef1f6;}

</style>
<style>
.el-dialogi .el-dialog__header{
  background-color: rgba(79, 96, 139, 1) !important;
  text-align: center;
  padding-bottom: 8px;
}
.el-dialog__title{
  color:#fff;
}
.el-dialog__footer{
  text-align: center !important;

  background-color: #eef1f6;


}
.el-dialog__body{
  background-color: #eef1f6;

}
</style>
