<template>
  <div id="app">
    <el-container>
      <!-- 顶部 -->
      <el-header style="height: auto;background-color:#fff;" class="fixed-header">
        <el-row>
          <el-col :span="20" :offset="2" style="width: 100%;">
            <el-row>
              <el-col :xs="8" :sm="6" :md="4" :lg="4" :xl="4">
                <div class="logo">
                  <!-- <img src="./assets/3917_jdbaq5ph(2).png" alt=""> -->
                  <img src="./assets/zh/logo.png" alt="" />
                </div>
              </el-col>
              <el-col :xs="16" :sm="18" :md="20" :lg="20" :xl="20">
                <div class="header_nav">
                  <el-menu class="hidden-sm-and-down" mode="horizontal" background-color="#fff" active-text-color="#c22c30">
                    <template v-for="yylist in menulist">
                      <el-submenu v-if="yylist.children && yylist.children.length > 0" :index="yylist.id + ''" :key="yylist.id" >
                        <template slot="title" >
                          <span @click.capture="menuTag(yylist.path,yylist)">{{ yylist.menuName }}</span>
                        </template>
                        <template v-for="eelist in yylist.children">
                          <template v-if="eelist.children.length == 0">
                            <el-menu-item v-if="yylist.children && yylist.children.length > 0"  :index="eelist.id + ''" :key="eelist.id " @click.shop="subMenuTag(yylist.path,eelist)">
                              {{ eelist.menuName }}
														</el-menu-item>
                          </template>
                        </template>
                      </el-submenu>

                      <el-menu-item v-else="yylist.children && yylist.children.length == 0"  :index="yylist.id  + ''" :key="yylist.id"  @click.self="menuTag(yylist.path,yylist)">
                        {{ yylist.menuName }}
                      </el-menu-item>
                    </template>
                  </el-menu>
                  <el-menu class="hidden-md-and-up" mode="horizontal">
                    <el-menu-item index="1"> <i class="el-icon-menu" @click="navshow = !navshow"></i> </el-menu-item>
                  </el-menu>
                </div>
              </el-col>
            </el-row>
            <transition name="el-zoom-in-top">
              <!-- 移动端 -->
              <el-row v-show="navshow" class="mobel hidden-md-and-up transition-box">
                <el-col :xs="24" class="transition-box">
                  <el-menu default-active="2" class="el-menu-vertical-demo transition-box">
                    <template v-for="yylist in menulist">
                      <!-- 一级  有二级 -->
                      <el-submenu class="transition-box" v-if="yylist.children && yylist.children.length > 0" :index="yylist.id" :key="yylist.id">
                        <template slot="title">
                          <i class="el-icon-location"></i>
                          <router-link :to="{ path: yylist.path, query: yylist.id }">{{ yylist.menuName }}</router-link>
                        </template>
                        <el-menu-item-group>
                          <template v-for="eelist in yylist.children">
                            <!-- 二级 有三级 -->
                            <template v-if="eelist.children.length > 0">
                              <el-submenu :index="eelist.id">
                                <template slot="title">{{ eelist.menuName }}</template>
                                <el-menu-item v-for="sslist in eelist.children" :index="sslist.id" :key="sslist.id">
                                  <router-link :to="{ path: '/three', query: { id: eelist.id } }">{{ sslist.menuName }}</router-link>
                                </el-menu-item>
                              </el-submenu>
                            </template>
                            <!-- 二级 没有三级 -->
                            <template v-if="eelist.children.length == 0">
                              <el-menu-item v-if="yylist.children && yylist.children.length > 0" :key="eelist.id" :index="eelist.id" >
                                <!-- <router-link :to="{ path: '/three', query: { id: eelist.id } }"> -->
																	{{ eelist.menuName }}
																<!-- </router-link> -->
                              </el-menu-item>
                            </template>
                          </template>
                        </el-menu-item-group>
                      </el-submenu>
                      <!-- 一级 没有二级 -->
                      <el-menu-item class="transition-box" v-else="yylist.children && yylist.children.length == 0" :key="yylist.id" :index="yylist.id">
                        <i class="el-icon-document"></i>
                        <span slot="title">
                          <router-link v-if="yylist.id != 1" :to="{ path: yylist.path, query: yylist.id }">{{ yylist.menuName }}</router-link>
                          <router-link v-if="yylist.id == 1" to="/">{{ yylist.menuName }}</router-link>
                        </span>
                      </el-menu-item>
                    </template>
                  </el-menu>
                </el-col>
              </el-row>
            </transition>
          </el-col>
        </el-row>
      </el-header>
      <!-- 中部 -->
      <el-main> <router-view /> </el-main>
      <!-- 底部 -->
      <el-footer style="height: auto;" class="footer">
        <!-- <el-row> -->

        <!--
          <template v-for="(value,key,index) in menulist">
          	<el-col v-if="value.ylist.length != 0" :key="value.yyid" :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
          		<ul>
          			<h3>
          				<router-link :to="{path: value.yrouterul,query: value.yid}">{{value.yname}}</router-link>
          			</h3>
          			<li v-for="navylistlist in value.ylist" :key="navylistlist.eeid">
          				<router-link :to="{path: value.yrouterul,query: value.yid}">{{navylistlist.ename}}</router-link>

          			</li>
          		</ul>
          	</el-col>
          </template>
        -->

        <!--
          <el-col :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
          	<ul>
          		<h3>快捷导航</h3>
          		<li>公司简介</li>
          		<li>客户案例</li>
          		<li>新闻资讯</li>
          	</ul>
          </el-col>
          <el-col :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
          	<ul>
          		<h3>快捷导航</h3>
          		<li>公司简介</li>
          		<li>客户案例</li>
          		<li>新闻资讯</li>
          	</ul>
          </el-col>
          <el-col :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
          	<ul>
          		<h3>快捷导航</h3>
          		<li>公司简介</li>
          		<li>客户案例</li>
          		<li>新闻资讯</li>
          	</ul>
          </el-col>
        -->

        <!--
          <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
          		<ul>
          			<li><i class="el-icon-phone-outline"></i>电话：100-000-0000</li>
          			<li><i class="el-icon-message"></i>邮箱：10000000@qq.com</li>
          			<li><i class="el-icon-location-outline"></i>地址：中国互联网省域名市网站区666号</li>
          		</ul>
          	</el-col>
          	<el-col :xs="24" :sm="24" :md="4" :lg="4" :xl="4">
          		<li><img width="50%" src="./assets/1765_iz4wlezw.png" alt=""></li>
          		<li>关注微信公众号</li>
          	</el-col>
          </el-row>
          <el-row class="footer_row2">
          	<el-col :xs="24">
          		COPYRIGHT (©) 2017模板板块.
          	</el-col>
          </el-row>
        -->
        <div class="c" style="background: #f2f2f2;margin-top: 20px;">
          <div class="copyright">
            <div class="bd-width" style="overflow: visible;">
              <div class="cp1"><img src="./assets/zh/jjh-logo.png" alt="" style="width:185px;height: 185px;" /></div>
              <div class="cp2" style="margin-left:15px;">
                <p class="tel"><img src="./assets/zh/tel.png" alt="" />机构热线：0991-2828049/13999934531</p>
                <p class="addr"><img src="./assets/zh/email.png" alt="" />机构邮箱：1932512725@qq.com</p>
                <p class="addr"><img src="./assets/zh/address.png" alt="" />机构地址：新疆乌鲁木齐市天山区延安路1110号新疆老年大学四层</p>
              </div>
              <div class="cp3">
                <div class="weixin" style="margin-top:0px">
                  <img src="./assets/zh/gzh.jpg" style="width: 115px !important;height: 115px;" id="qrcode" alt="" />
                  <p>微信公众号</p>
                </div>
                <div class="weixin" style="margin-top:0px">
                  <img src="./assets/zh/douyin.png" style="width: 115px !important;height: 115px;" id="qrcode" alt="" />
                  <p>基金会官方抖音号</p>
                </div>
                <div class="weixin" style="margin-top:0px">
                  <img src="./assets/zh/juankuan.jpg" style="width: 115px !important;height: 115px;" id="qrcode" alt="" />
                  <p>捐款二维码</p>
                </div>
                <div class="weixin" style="margin-top:0px">
                  <img src="./assets/zh/gzwx.jpg" style="width: 115px !important;height: 115px;" id="qrcode" alt="" />
                  <p>工作微信二维码</p>
                </div>
              </div>
            </div>
          </div>
          <div class="bdri">
            <div class="bd-width" style="display: flex;justify-content:center;color:#333;">
              <div style="display: flex;align-items: center;">
                <a href="https://beian.miit.gov.cn" style="color:#333;font-size:14px;font-weight:400;">Copyright © 2024 新疆维吾尔自治区老龄事业发展基金会 All Rights Reserved 粤ICP备123456789号</a>
                <!-- <img style="width: 20px;height: 20px;margin: 0 5px 0 20px;" src="./assets/icon-beian.png" alt=""> -->
                <!-- <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44011302004151" target="_blank">粤公网安备 44011302004151号</a> -->
                <!-- <div style="margin-left:280px;"><a href="/manager/index.html">系统管理</a></div> -->
              </div>
            </div>
          </div>
        </div>
      </el-footer>
    </el-container>
    <!-- 返回顶部 -->
    <el-button size="mini" circle class="buttontop" @click="backTop" v-show="backTopShow"> <i class="el-icon-upload2"></i> </el-button>
  </div>
</template>

<script>
import { getOneArr } from '@/utils/arrayUtil'
import { getMenuList } from '@/api/home'

export default {
  name: 'App',
  data() {
    return {
      backTopShow: false,
      logo: '/static/img/3917_jdbaq5ph(2).png',
      navshow: false,
      menulist: [
        {
          yid: 0,
          yyid: '0',
          yname: '首页',
          ylist: [],
          yrouterul: '/',
        },
        {
          yid: 1,
          yyid: '1',
          yname: '关于我们',
          ylist: [
            {
              eid: 11,
              eeid: '1-1',
              ename: '机构简介',
              elist: [],
            },
            {
              eid: 12,
              eeid: '1-2',
              ename: '理事会',
              elist: [],
            },
            {
              eid: 13,
              eeid: '1-3',
              ename: '组织架构',
              elist: [],
            },
            {
              eid: 14,
              eeid: '1-4',
              ename: '机构章程',
              elist: [],
            },
            {
              eid: 15,
              eeid: '1-5',
              ename: '专项基金',
              elist: [],
            },
            {
              eid: 16,
              eeid: '1-6',
              ename: '项目办',
              elist: [],
            },
          ],
          yrouterul: '/about',
        },
        {
          yid: 2,
          yyid: '2',
          yname: '党建学习',
          ylist: [],
          yrouterul: '/partyStudy',
        },

        {
          yid: 3,
          yyid: '3',
          yname: '资讯中心',
          yrouterul: '/InformationCenter',
          ylist: [
            {
              eid: 31,
              eeid: '3-1',
              ename: '老龄新闻',
              elist: [],
            },
            {
              eid: 32,
              eeid: '3-2',
              ename: '法律法规',
              elist: [],
            },
            {
              eid: 33,
              eeid: '3-3',
              ename: '通知公告',
              elist: [],
            },
            {
              eid: 34,
              eeid: '3-4',
              ename: '老龄动态',
              elist: [],
            },
            {
              eid: 35,
              eeid: '3-5',
              ename: '电子刊物',
              elist: [],
            },
            {
              eid: 36,
              eeid: '3-6',
              ename: '慈善故事',
              elist: [],
            },
          ],
        },
        {
          yid: 4,
          yyid: '4',
          yname: '基金会活动',
          ylist: [
            {
              eid: 41,
              eeid: '4-1',
              ename: '公益课程',
              elist: [],
            },
            {
              eid: 42,
              eeid: '4-2',
              ename: '咨询报名',
              elist: [],
            },
            {
              eid: 43,
              eeid: '4-3',
              ename: '名单公示',
              elist: [],
            },
          ],
          yrouterul: '/customercase',
        },
        {
          yid: 5,
          yyid: '5',
          yname: '慈善项目',
          ylist: [
            {
              eid: 51,
              eeid: '5-1',
              ename: '项目介绍',
              elist: [],
            },
            {
              eid: 52,
              eeid: '5-2',
              ename: '项目进展',
              elist: [],
            },
            {
              eid: 53,
              eeid: '5-3',
              ename: '项目共建',
              elist: [],
            },
          ],
          yrouterul: '/newsandinformation',
        },
        {
          yid: 6,
          yyid: '6',
          yname: '信息公开',
          ylist: [
            {
              eid: 61,
              eeid: '6-1',
              ename: '财务公示',
              elist: [],
            },
            {
              eid: 62,
              eeid: '6-2',
              ename: '年度报告',
              elist: [],
            },
            {
              eid: 63,
              eeid: '6-3',
              ename: '年度审计',
              elist: [],
            },
            {
              eid: 64,
              eeid: '6-4',
              ename: '规章制度',
              elist: [],
            },
            {
              eid: 65,
              eeid: '6-5',
              ename: '其他公示',
              elist: [],
            },
          ],
          yrouterul: '/InformationDisclosure',
        },
        {
          yid: 7,
          yyid: '7',
          yname: '爱心公示',
          ylist: [
            {
              eid: 71,
              eeid: '7-1',
              ename: '理事单位',
              elist: [],
            },
            {
              eid: 72,
              eeid: '7-2',
              ename: '爱心企业',
              elist: [],
            },
            {
              eid: 73,
              eeid: '7-3',
              ename: '爱心人士',
              elist: [],
            },
          ],
          yrouterul: '/newsandinformation',
        },
        {
          yid: 8,
          yyid: '8',
          yname: '志愿服务',
          ylist: [],
          yrouterul: '/Volunteering',
        },
        {
          yid: 9,
          yyid: '9',
          yname: '电子证书查询',
          ylist: [],
          yrouterul: '/Certificate',
        },
        {
          yid: 10,
          yyid: '10',
          yname: '联系我们',
          ylist: [],
          yrouterul: '/contactus',
        },
      ],
    }
  },
  methods: {
    backTop() {
      let back = setInterval(() => {
        if (document.body.scrollTop || document.documentElement.scrollTop) {
          document.body.scrollTop -= 100
          document.documentElement.scrollTop -= 100
        } else {
          clearInterval(back)
        }
      })
    },
    handleScroll() {
      if (document.documentElement.scrollTop + document.body.scrollTop > 100) {
        this.backTopShow = true
      } else {
        this.backTopShow = false
      }
    },
    // 菜单点击
    menuTag(path,item){
      console.error(path,item.id);
      let data = this.menulist.find(u => u.id === item.id)
      console.error('data',data);
      let obj = {id:item.id,parentMenuName:item.menuName}
      if(data.children && data.children.length > 0){
        this.$store.commit('setLeftSide', data.children)
        obj.subid = data.children[0].id
        obj.menuName = data.children[0].menuName
      }
      this.$router.push({path: path, query: obj});
      console.error(this.$store.state.leftSide);
     },
      // 子菜单点击
    subMenuTag(path,item){
      console.error(path,item);
      let data = this.menulist.find(u => u.id === item.parentMenuId)
      this.$router.push({path: path, query: {id:item.parentMenuId,subid: item.id,parentMenuName:item.parentMenuName,menuName:item.menuName}});
      if(data.children && data.children.length > 0){
        this.$store.commit('setLeftSide', data.children)
      }
      
    }
  },
  watch: {
    $route: {
      handler: function() {
        this.navshow = false
      },
      // 深度观察监听
      deep: true,
    },
  },
  mounted: function() {
    //挂载结束状态

    window.addEventListener('scroll', this.handleScroll)
    /* 加载完成在页面顶部 */
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0)
    })
    //获取菜单
    getMenuList()
      .then((res) => {
        if (res.status.code === 200) {
          res.data.sort(function(a, b) {
            return a.sort - b.sort
          })
					res.data.forEach((item,index) => {
						let routes = this.$router.options.routes
						res.data[index].path = routes[index].path
					});
          console.log(res)
					this.menulist = res.data
          localStorage.setItem('leftSideData', JSON.stringify(this.menulist))

        }
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
</script>

<style>
body {
  margin: 0;
}

ul,
li,
ol {
  list-style: none;
}

a {
  text-decoration: none;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.fixed-header {
  position: sticky;
  top: 0;
  z-index: 1000; /* 确保头部在最上层 */
}

a:-webkit-any-link {
  font-size: 16px;
  font-weight: bold;
  color: #000000;
}

.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
}

.el-menu--horizontal > .el-menu-item a,
.el-menu--horizontal > .el-menu-item a:hover {
  font-size: 16px;
  font-weight: bold;
  color: #000000;
}

/* herder */
.el-header {
  color: #333;
  text-align: center;
  line-height: 90px;
  box-sizing: border-box;
  overflow: hidden;
}

.logo,
.logo img {
  width: 100%;
  height: 100%;
}

.logo img {
  vertical-align: middle;
  width: 88px;
  height: 88px;
}

.header_nav {
  height: 85px;
}

.el-menu {
  padding-left: 50;
}

.header_nav ul {
  height: 100%;
  float: right;
}

.header_nav ul li {
  height: 100%;
}

.el-menu--horizontal > .el-menu-item,
.el-menu--horizontal > .el-submenu .el-submenu__title {
  height: 90px;
  line-height: 90px;
}

.el-menu.el-menu--horizontal {
  border-bottom: 0;
}

.el-menu--horizontal > .el-menu-item,
.el-menu--horizontal > .el-submenu {
  /* float: right; */
}

.mobel .el-menu {
  border-right: 0;
}

.mobel .el-menu > li {
  border-bottom: 1px solid #8cc5ff;
}

/* main */
.el-main {
  /* background-color: #E9EEF3; */
  color: #edf2fc;
  text-align: center;
  /* line-height: 90px; */
  padding: 0;
}

/* footer */
.footer {
  /* background-color: rgb(31, 37, 38); */
  background-color: #f2f2f2;
  /* color: #F0F2F5; */
  padding: 0;
}

/* .footer_row2 {
		margin: 20px;
		padding: 20px 20px;
		border-top: 1px solid #EBEEF5;
	} */

/*  */
.buttontop {
  position: fixed;
  right: 50px;
  bottom: 50px;
}

/* .footer h3,
	.footer a {
		color: #FFFFFF;
	} */

.copyright .bd-width {
  width: 1200px;
  height: 214px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
}
.cp2 > p {
  display: flex;
  justify-content: left;
  align-items: center;
  line-height: 32px;
  color: #333;
}
.cp2 img {
  width: 16px;
  height: 16px;
  margin-right: 6px;
}
.cp3 {
  display: flex;
  justify-content: right;
}
.cp3 > div {
  margin-left: 20px;
  text-align: center;
}
.bdri {
  width: 100%;
  height: 84px;
  border-top: 2px solid #ddd;
}
.bdri .bd-width {
  width: 1200px;
  margin: 0 auto;
  height: 84px;
  line-height: 84px;
  font-size: 14px;
  color: #666;
}
</style>
