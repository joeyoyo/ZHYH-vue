<template>
  <div class="hello">
    <main>
      <div class="index_main">
        <div class="cnt_A">
          <div class="A1">
            <div class="swiper1">
              <div class="swiper-container swiper_container1 swiper-container-horizontal">
                <div class="swiper-wrapper">
                  <div class="swiper-slide" style="width: 510px;">
                    <a href="https://mp.weixin.qq.com/s/z979zTl0DZfJnIy4X6ihuw" target="_blank">
                      <img src="../assets/zh/ZHYH/swiper1.png" alt="" />
                      <!-- <div class="mask s26"></div> -->
                    </a>
                  </div>
                  <div class="swiper-slide swiper-slide-prev" style="width: 510px;">
                    <a href="https://mp.weixin.qq.com/s/iguynzcl3wOu3SxrSjeZiQ" target="_blank">
                      <img src="../assets/zh/ZHYH/swiper2.png" alt="" />
                      <!-- <div class="mask s26"></div> -->
                    </a>
                  </div>
                  <div class="swiper-slide swiper-slide-active" style="width: 510px;">
                    <a href="https://mp.weixin.qq.com/s/J9KmRdSL20gOsB3bydYZtw" target="_blank">
                      <img src="../assets/zh/ZHYH/swiper3.png" alt="" />
                      <!-- <div class="mask s26"></div> -->
                    </a>
                  </div>
                  <div class="swiper-slide swiper-slide-next" style="width: 510px;">
                    <a href="https://mp.weixin.qq.com/s/UvB7Yj0CKp4gCb3cmYQuhQ" target="_blank">
                      <img src="../assets/zh/ZHYH/swiper4.png" alt="" />
                      <!-- <div class="mask s26"></div> -->
                    </a>
                  </div>
                  <div class="swiper-slide" style="width: 510px;">
                    <a href="https://mp.weixin.qq.com/s/bGkgBPM4GD8-fQp4kmNBtQ" target="_blank">
                      <img src="../assets/zh/ZHYH/swiper5.png" alt="" />
                      <!-- <div class="mask s26"></div> -->
                    </a>
                  </div>
                  <div class="swiper-slide" style="width: 510px;">
                    <a href="https://mp.weixin.qq.com/s/6uRHnDUBsIgH5PPHyhpl_w" target="_blank">
                      <img src="../assets/zh/ZHYH/swiper6.png" alt="" />
                      <!-- <div class="mask s26"></div> -->
                    </a>
                  </div>
                  <div class="swiper-slide" style="width: 510px;">
                    <a href="https://mp.weixin.qq.com/s/7ZcmvAj8ivPV1qgYf1gbNw" target="_blank">
                      <img src="../assets/zh/ZHYH/swiper7.png" alt="" />
                      <!-- <div class="mask s26"></div> -->
                    </a>
                  </div>
                </div>
                <div class="swiper-pagination swiper-pagination1 swiper-pagination-clickable swiper-pagination-bullets">
                  <span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span
                  ><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span
                  ><span class="swiper-pagination-bullet"></span>
                </div>
              </div>
            </div>

            <div class="text1">
              <div class="text1_title">
                <p class="s30 LH2 shortcut">老龄新闻</p>
                <p class="s24" @click="oldAgeClick"><a class="shortcut">更多&gt;&gt;</a></p>
              </div>
              <div class="text1_cnt s24 news" style="text-align: left;">
                <p v-for="(item, index) in oldAgelist" :index="index" :key="item.id" @click="watchDetail(item)">● {{ item.title }}：<span v-html="unescapeHtml(item.content)"></span></p>
                <!--
                  <p><a href="/details/2340.html">● N视频：为避免家庭矛盾，广州一位三婚老人遗赠财产给无血缘养子</a></p>
                  <p><a href="/details/2318.html">● 央视新闻：财政部发行50年期超长期特别国债 超长期国债是否能继承？</a></p>
                  <p><a href="/details/2317.html">● 央视新闻：50年期超长期特别国债可以继承 金融产品写进遗嘱 规避继承风险</a></p>
                  <p><a href="/details/2316.html">● 城事特搜：老人热衷办理遗赠业务</a></p>
                  <p><a href="/details/2286.html">● 首都经济报道：如何避免遗产继承纠纷？财产提前规划 房产最受关注</a></p>
                -->
              </div>
            </div>
          </div>
          <div class="A1 A2">
            <div class="text2">
              <img src="/upload/image/system/web_logo_1/20220113/202201131644528650.png" alt="" />
              <h3 class="s28" style="text-align: left;">基金会简介</h3>
              <p class="s25" style="text-align: left;">
                新疆维吾尔自治区老龄事业发展基金会（以下简称基金会）成立于1992年8月8日，2023年4月21日选举产生了第五届理事会。<br />
                第五届理事会由23名理事组成。理事会设理事长1名，副理事长4名，理事18名。基金会设监事会，监事会成员由自治区卫生健康委员会选派。<br />
                自治区民政厅为基金会的登记管理机关，业务主管单位是自治区卫生健康委员会。基金会为公募基金会，办公地址在乌鲁木齐市延安路1110号新疆老年大学，业务范围：开展募捐、弘扬尊老、养老、助老、传统美德，推进老龄事业的发展。
              </p>
            </div>
            <div class="text1">
              <div class="text1_title">
                <p class="s30 LH2 shortcut">老龄动态</p>
                <p class="s24"  @click="newInfoClick"><a class="shortcut">更多&gt;&gt;</a></p>
              </div>
              <div class="text1_cnt s24 news" style="text-align: left;">
                <p v-for="(item, index) in rightData" :index="index" :key="item.id" @click="watchDetail(item)">● {{ item.title }}：<span v-html="unescapeHtml(item.content)"></span></p>

                <!--
                  <p><a href="/details/2370.html">● 中国江苏网：90后开始立遗嘱，有的涉虚拟财产</a></p>
                  <p><a href="/details/2369.html">● 光明网-时评频道：【光明观澜】订立遗嘱年轻化成趋势，该关注什么</a></p>
                  <p><a href="/details/2368.html">● 光明网：遗产管理人职业化进程再迎新进展</a></p>
                  <p><a href="/details/2365.html">● 中国经济网：游戏账号能纳入遗产？虚拟财产进入遗嘱值得提倡</a></p>
                  <p><a href="/details/2339.html">● 信息时报：黄昏恋、重组家庭财产留给谁？他们这样选择</a></p>
                  <p><a href="/details/2338.html">● 广州日报新花城：“黄昏恋”老人立遗嘱，避免财产纷争</a></p>
                -->
              </div>
            </div>
          </div>
          <div class="A1 A3">
            <div class="text3">
              <div class="icon">
                <a  class="shortcut" v-for="(item, index) in shortcutList" :index="index" :key="index" @click="shortcutClick(item)" >
                  <div>
                    <img :src="item.imgURL" alt="" />
                    <p class="s28">{{item.name}}</p>
                  </div>
                </a>
                <!-- <a href="#" target="_blank">
                  <div>
                    <img src="https://www.will.org.cn/public/home/1000000/images/icon(2).png" alt="" />
                    <p class="s28">网上预约</p>
                  </div>
                </a>
              </div>
              <div class="icon">
                <a href="#">
                  <div>
                    <img src="https://www.will.org.cn/public/home/1000000/images/icon(3).png" alt="" />
                    <p class="s28">网点查询</p>
                  </div>
                </a>
                <a href="#" target="_blank" rel="nofollow" @click="">
                  <div>
                    <img src="https://www.will.org.cn/public/home/1000000/images/icon(4).png" alt="" />
                    <p class="s28">证书查询</p>
                  </div>
                </a> -->
              </div>
              <div class="cnt1">
                <p class="title s30">全国咨询热线</p>
                <p class="phone s60">0991-2828049 <br />13999934531</p>
              </div>
              <div class="cnt1">
                <p class="title s30">基金会业务范围</p>
                <a href="/list/55.html" class="icon5">
                  <!-- <img src="https://www.will.org.cn/public/home/1000000/images/icon(5).png" alt="" /> -->
                  <div>
                    <p class="s30">开展募捐、弘扬尊老、<br />养老、助老、传统美德，<br />推进老龄事业的发展</p>
                    <!-- <p class="s24">电话:17316812316(同微信)</p> -->
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div id="news">
        <div class="news_classify">
          <div class="tab" :class="{'tab_active' :index === menuiIdex}" v-for="(item, index) in menuName" :index="index" :key="item.index" @click="tabClick(index)">{{item}}</div>
        </div>
        <div class="bd_width news_content">
          <div id="banner2">
            <div class="swiper swiper-container-initialized swiper-container-horizontal" id="swiper2">
              <div class="swiper-wrapper" style="transition-duration: 0ms; transform: translate3d(-580px, 0px, 0px);">
                <div class="swiper-slide" style="width: 580px;" @click="watchDetail(item)" v-for="(item, index) in listData" :index="index" :key="item.id">
                  <img :src="item.imgURL" alt="" />
                  <div class="shadow">
                    <div class="txt">{{ item.title }}</div>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination pagination2"></div>
              <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            </div>
          </div>
          <div class="news_item" v-for="(item, index) in listData" :index="index" :key="item.id" @click="watchDetail(item)">
            <div class="datetime">
              <div class="date">{{ getday(item.createTime) }}</div>
              <div class="year">{{ getyearMonth(item.createTime) }}</div>
            </div>
            <div class="item_center">
              <div class="newtitle">{{ item.title }} | 党建学习</div>
              <div class="summary" v-html="unescapeHtml(item.content)"></div>
            </div>
          </div>
        
        </div>
        <div id="static">
          <div class="bd_width content">
            <div class="static-item">
              <div class="value">3.3<span>万人</span></div>
              <div class="name">注册人数</div>
            </div>
            <div class="static-item">
              <div class="value">3139<span>场次</span></div>
              <div class="name">本年度志愿活动</div>
            </div>
            <div class="static-item">
              <div class="value">45<span>万小时</span></div>
              <div class="name">本年度服务时长</div>
            </div>
            <div class="static-item">
              <div class="value">57<span>个</span></div>
              <div class="name">慈善活动</div>
            </div>
            <div class="static-item">
              <div class="value">1336.6<span>万元</span></div>
              <div class="name">本年度爱心捐赠</div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- 党建学习 -->
      <div id="party">
        <div class="head">
          <span></span>
          <div class="tip">
            <img class="title_icon" src="http://www.ltxfwh.org/template/gzlt/pc/images/icon1.png" alt="" />
            <p>党建学习</p>
          </div>
          <span></span>
        </div>
        <div class="bd_width news_content">
          <div id="banner4">
            <div class="swiper swiper-container-initialized swiper-container-horizontal" id="swiper4" ref="swiperRef">
              <div class="swiper-wrapper" >
                <div class="swiper-slide swiper-slide-prev" style="width: 580px;" v-for="(item, index) in partyStudylist" :index="index" :key="item.id" @click="watchDetail(item)">
                  <img :src="item.imgURL" alt="" />
                  <div class="shadow">
                    <div class="txt">{{ item.title }} | 党建学习</div>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination pagination4"></div>
              <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
            </div>
          </div>
          <div class="news_item" v-for="(item, index) in partyStudylist" :index="index" :key="item.id" @click="watchDetail(item)">
            <div class="datetime">
              <div class="date">{{ getday(item.createTime) }}</div>
              <div class="year">{{ getyearMonth(item.createTime) }}</div>
            </div>
            <div class="item_center">
              <div class="newtitle">{{ item.title }} | 党建学习</div>
              <div class="summary" v-html="unescapeHtml(item.content)"></div>
            </div>
          </div>
          <!--
            <div class="news_item" onclick="window.open('https://mp.weixin.qq.com/s/GXG_jcidgLappIOi5bJKLg')">
              <div class="datetime">
                <div class="date">15</div>
                <div class="year">2024-04</div>
              </div>
              <div class="item_center">
                <div class="newtitle">马克思主义基本原理同中华优秀传统文化相结合的历程、经验和未来展望｜党建学习</div>
                <div class="summary">
                  马克思主义基本原理同中华优秀传统文化相结合是近三千年中华文明史上的伟大转折，也是五百年世界社会主义运动史上的光辉篇章。马克思主义基本原理同中华优秀传统文化相结合是作为普遍世界意义的社会主义学说在中国寻
                </div>
              </div>
            </div>
            <div class="news_item" onclick="window.open('https://mp.weixin.qq.com/s/PDjqai1__usrQ0GdpGWelQ')">
              <div class="datetime">
                <div class="date">31</div>
                <div class="year">2022-03</div>
              </div>
              <div class="item_center">
                <div class="newtitle">马克思主义与中华优秀传统文化相契合的内在逻辑｜党建学习</div>
                <div class="summary">
                  习近平总书记强调：“坚持把马克思主义基本原理同中国具体实际相结合、同中华优秀传统文化相结合。”“两个结合”是我们党不断推进马克思主义中国化时代化的内在要求和宝贵经验。深入把握马克思主义与中华优秀传统文
                </div>
              </div>
            </div>
            <div class="news_item" onclick="window.open('https://mp.weixin.qq.com/s/fIn0NgltiOzjz_nj_XXPkg')">
              <div class="datetime">
                <div class="date">23</div>
                <div class="year">2022-03</div>
              </div>
              <div class="item_center">
                <div class="newtitle">党的群众路线和优秀传统文化相通｜志愿者感悟</div>
                <div class="summary">
                  《弟子规》说：“身有伤，贻亲忧；德有伤，贻亲羞。”保持身体健康也是尽孝。郭文斌老师认为，要让我们的生命保持一种状态，就要活在“现场感“里。“现场感”就是专注、不走神、不起杂念。
                </div>
              </div>
            </div>
            <div class="news_item" onclick="window.open('https://mp.weixin.qq.com/s/7-DbAH4j7wwBcWr0yVSRFQ')">
              <div class="datetime">
                <div class="date">21</div>
                <div class="year">2022-03</div>
              </div>
              <div class="item_center">
                <div class="newtitle">实事求是就是最大的党性｜党建学习</div>
                <div class="summary">实事求是，是马克思主义的根本观点，是中国共产党人认识世界、改造世界的根本要求，是我们党的基本思想方法、工作方法、领导方法。</div>
              </div>
            </div>
          -->
        </div>
        <div class="morebox"><div class="morenews" id="morenews" style="margin-bottom: 0px;display: inline-block;" @click="partystudyClick">查看更多+</div></div>
      </div>
      <div class="bigbanner"><img src="../assets/zh/ZHYH/box1.png" alt="" /></div>
      <!-- 项目介绍 -->
      <div id="project">
        <div class="head">
          <span></span>
          <div class="tip">
            <img class="title_icon" src="http://www.ltxfwh.org/template/gzlt/pc/images/icon1.png" alt="" />
            <p>项目介绍</p>
          </div>
          <span></span>
        </div>
        <div class="bd_width project_content">
          <div class="swiper pro_swiper swiper-container-initialized swiper-container-horizontal" style="width: 1200px;position: relative;">
            <div class="swiper-wrapper" id="pro_slide" style="transform: translate3d(0px, 0px, 0px);">
              <div class="swiper-slide" style="width: 380px; margin-right: 30px;" v-for="(item, index) in projectlist" :index="index" :key="item.id" @click="watchDetail(item)">
                <div class="project_item">
                  <div class="shadow shadow_163630604500000001">
                    <div data-id="163630604500000001" class="mask"></div>
                    <img :src="item.imgURL" alt="" />
                    <div class="project_info">
                      <div class="title">{{ item.title }}</div>
                      <div class="summary"  v-html="unescapeHtml(item.content)">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="swiper-slide swiper-slide-active" style="width: 380px; margin-right: 30px;">
                <div class="project_item" onclick="window.open('/?action=news-detail&id=163630594500000001')">
                  <div class="shadow shadow_163630594500000001">
                    <div data-id="163630594500000001" class="mask"></div>
                    <img src="http://www.ltxfwh.org/images/gzlt/2021/11/163631651400000001.png" alt="" />
                    <div class="project_info">
                      <div class="title">蓝态公益合唱团</div>
                      <div class="summary">
                        蓝态公益合唱团于2018年7月28日正式启动，截至2021年合唱团已经招募六期学员，总团员达300多人。合唱团由一群乐于奉献、热爱歌唱、喜欢用歌声传递正能量的音乐爱好者组成，团员来自各行各业，不同的年
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide swiper-slide-next" style="width: 380px; margin-right: 30px;">
                <div class="project_item" onclick="window.open('/?action=news-detail&id=163630581300000001')">
                  <div class="shadow shadow_163630581300000001">
                    <div data-id="163630581300000001" class="mask"></div>
                    <img src="http://www.ltxfwh.org/images/gzlt/2021/11/163631648000000001.png" alt="" />
                    <div class="project_info">
                      <div class="title">蓝态太极国学公益学习班</div>
                      <div class="summary">
                        吴式太极又称为“行走的道德经”，将太极与中华优秀传统文化相结合，相得益彰，本项目教学以循序渐进的方式，开展太极国学公益班、太极国学定势提高班、太极国学连势提高班课程、吴图南所传吴式太极拳师资等级考评等
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide" style="width: 380px; margin-right: 30px;">
                <div class="project_item" onclick="window.open('/?action=news-detail&id=163630557100000001')">
                  <div class="shadow shadow_163630557100000001">
                    <div data-id="163630557100000001" class="mask"></div>
                    <img src="http://www.ltxfwh.org/images/gzlt/2021/11/163631644700000001.png" alt="" />
                    <div class="project_info">
                      <div class="title">蓝态亲子经典公益学习班</div>
                      <div class="summary">
                        蓝态亲子经典公益学习班，根植于中华优秀传统文化，以儒家经典为基础，遵照“育人为本，德育为先”的教育方针，把“立德树人”作为教育的根本任务。倡导以经典为师，与圣贤为友；立君子品，做有德人。通过学习与力行
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide" style="width: 380px; margin-right: 30px;">
                <div class="project_item" onclick="window.open('/?action=news-detail&id=163630449800000001')">
                  <div class="shadow shadow_163630449800000001">
                    <div data-id="163630449800000001" class="mask"></div>
                    <img src="http://www.ltxfwh.org/images/gzlt/2021/11/163631637800000001.png" alt="" />
                    <div class="project_info">
                      <div class="title">蓝态爱心环保餐厅</div>
                      <div class="summary">
                        蓝态爱心环保餐厅从2017年12月2日正式开业，本项目旨在为老年人提供一个老有所养、老有所学、老有所为、老有所乐的平台；为志愿者提供一个践行中华传统孝悌文化“孝亲敬老”的平台。主要为60岁以上老人及残
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide" style="width: 380px; margin-right: 30px;">
                <div class="project_item" onclick="window.open('/?action=news-detail&id=163630431700000001')">
                  <div class="shadow shadow_163630431700000001">
                    <div data-id="163630431700000001" class="mask"></div>
                    <img src="http://www.ltxfwh.org/images/gzlt/2021/11/163631641300000001.png" alt="" />
                    <div class="project_info">
                      <div class="title">蓝态文以化企</div>
                      <div class="summary">
                        蓝态文以化企以中华优秀传统文化为理论依据，帮助企业建立良好企业文化，帮助更多企业家实现基业长青和人生幸福，积极承担社会责任，实现共同富裕。2017年8月企业家常态化共学的文以化企分享会正式开启。201
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide" style="width: 380px; margin-right: 30px;">
                <div class="project_item" onclick="window.open('/?action=news-detail&id=163630410200000001')">
                  <div class="shadow shadow_163630410200000001">
                    <div data-id="163630410200000001" class="mask"></div>
                    <img src="http://www.ltxfwh.org/images/gzlt/2021/11/163631633700000001.png" alt="" />
                    <div class="project_info">
                      <div class="title">蓝态家庭家教家风公益课堂</div>
                      <div class="summary">
                        蓝态家庭家教家风公益课堂深入贯彻落实中共中央办公厅、国务院办公厅印发的《关于实施中华优秀传统文化传承发展工程的意见》精神，以儒家经典为基础，弘扬讲仁爱、重民本、守诚信、崇正义、尚和合、求大同等核心思想
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide" style="width: 380px; margin-right: 30px;">
                <div class="project_item" onclick="window.open('/?action=news-detail&id=163630407600000001')">
                  <div class="shadow shadow_163630407600000001">
                    <div data-id="163630407600000001" class="mask"></div>
                    <img src="http://www.ltxfwh.org/images/gzlt/2021/11/163631629800000001.png" alt="" />
                    <div class="project_info">
                      <div class="title">蓝态优秀传统文化公益师资班</div>
                      <div class="summary">
                        蓝态优秀传统文化公益师资班以“知行合一”为办学理念，注重德育培养，注重让学员持续、系统地学习和践行圣贤文化，以《弟子规》《大学》《学记》《中庸》等国学经典作为学习的载体，体悟并契入圣贤的存心，将经典智
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide" style="width: 380px; margin-right: 30px;">
                <div class="project_item" onclick="window.open('/?action=news-detail&id=163630604500000001')">
                  <div class="shadow shadow_163630604500000001">
                    <div data-id="163630604500000001" class="mask"></div>
                    <img src="http://www.ltxfwh.org/images/gzlt/2021/11/163631621800000001.png" alt="" />
                    <div class="project_info">
                      <div class="title">蓝态AED急救行动</div>
                      <div class="summary">
                        蓝态AED急救行动从2020年12月开始启动，本项目以“守护生命为爱护航”为主题，旨在践行“人民至上，生命至上”的理念，守护广大市民生命安全。项目通过为校园、公园景点、公共交通（地铁、机场、客运站）、
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-slide" style="width: 380px; margin-right: 30px;">
                <div class="project_item" onclick="window.open('/?action=news-detail&id=166190358200000001')">
                  <div class="shadow shadow_166190358200000001">
                    <div data-id="166190358200000001" class="mask"></div>
                    <img src="http://www.ltxfwh.org/images/gzlt/2022/08/166190352800000001.png" alt="" />
                    <div class="project_info">
                      <div class="title">蓝态文以化校</div>
                      <div class="summary">
                        蓝态文以化校项目为响应国家倡导“六进”工程---传统文化进校园，回应学校、家庭的强烈需求，于2020年1月8日正式启动。本项目从与广州市白云区携手共建、大学生爱心支教培训、文以化校研讨会三方面着手，通
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
        <div class="morebox"><div class="morenews" id="morenews" style="margin-bottom: 0px;display: inline-block;" @click="projectClick">查看更多+</div></div>
      </div>
      <div class="bigbanner"><img src="../assets/zh/ZHYH/box2.png" alt="" /></div>
      <!-- 信息公开 -->
      <div id="publicity">
        <div class="head">
          <span></span>
          <div class="tip">
            <img class="title_icon" src="http://www.ltxfwh.org/template/gzlt/pc/images/icon1.png" alt="" />
            <p>信息公开</p>
          </div>
          <span></span>
        </div>
        <div class="bd_width content">
          <div class="left">
            <!-- <img onclick="window.open(&quot;/?action=news-list&typetext=财务公示&quot;)" src="http://www.ltxfwh.org/template/gzlt/pc/images/publicity1.png" alt="" class="img" />
            <img onclick="window.open(&quot;/?action=news-list&typetext=年度报告&quot;)" src="http://www.ltxfwh.org/template/gzlt/pc/images/publicity2.png" alt="" class="img" />
            <img onclick="window.open(&quot;/?action=news-list&typetext=年度审计&quot;)" src="http://www.ltxfwh.org/template/gzlt/pc/images/publicity3.png" alt="" class="img" />
            <img onclick="window.open(&quot;/?action=finance&quot;)" src="http://www.ltxfwh.org/template/gzlt/pc/images/publicity4.png" alt="" class="img" /> -->
            <img v-for="(item, index) in moneyList" :index="index" :key="item.name" :src="item.imgURL" alt="" class="img" @click="moneyClick(item)"/>

          </div>
          <div id="publicityList" class="right">
            <div class="item"  v-for="(item, index) in infolist" :index="index" :key="item.id" @click="watchDetail(item)">
              <div>
                <span></span>
                <div class="newstitle">{{item.title}}</div>
              </div>
              <div class="time">{{item.createTime}}</div>
            </div>
            <!-- <div class="item" onclick="window.open('/?action=news-detail&id=172114996701000001')">
              <div>
                <span></span>
                <div class="newstitle">广东省蓝态幸福文化公益基金会 2024年第二季度财务简报</div>
              </div>
              <div class="time">2024-07-17</div>
            </div>
            <div class="item" onclick="window.open('/?action=news-detail&id=171925758301000001')">
              <div>
                <span></span>
                <div class="newstitle">蓝态公益基金会2023年年度报告</div>
              </div>
              <div class="time">2024-06-25</div>
            </div>
            <div class="item" onclick="window.open('/?action=news-detail&id=171337786301000001')">
              <div>
                <span></span>
                <div class="newstitle">广东省蓝态幸福文化公益基金会 2024年第一季度财务简报</div>
              </div>
              <div class="time">2024-04-18</div>
            </div>
            <div class="item" onclick="window.open('/?action=news-detail&id=170960162501000001')">
              <div>
                <span></span>
                <div class="newstitle">2023年审计报告</div>
              </div>
              <div class="time">2024-03-05</div>
            </div>
            <div class="item" onclick="window.open('/?action=news-detail&id=169577194500000001')">
              <div>
                <span></span>
                <div class="newstitle">蓝态公益基金会2022年年度报告</div>
              </div>
              <div class="time">2023-09-27</div>
            </div>
            <div class="item" onclick="window.open('/?action=news-detail&id=169766716300000001')">
              <div>
                <span></span>
                <div class="newstitle">2023年8月捐赠公示</div>
              </div>
              <div class="time">2023-09-01</div>
            </div>
            <div class="item" onclick="window.open('/?action=news-detail&id=169568564500000001')">
              <div>
                <span></span>
                <div class="newstitle">2023年7月捐赠公示</div>
              </div>
              <div class="time">2023-08-01</div>
            </div>
            <div class="item" onclick="window.open('/?action=news-detail&id=168987842200000001')">
              <div>
                <span></span>
                <div class="newstitle">2023年6月捐赠公示</div>
              </div>
              <div class="time">2023-06-30</div>
            </div>
            <div class="item" onclick="window.open('/?action=news-detail&id=168731082700000001')">
              <div>
                <span></span>
                <div class="newstitle">2022年审计报告</div>
              </div>
              <div class="time">2023-06-21</div>
            </div>
            <div class="item" onclick="window.open('/?action=news-detail&id=168987637700000001')">
              <div>
                <span></span>
                <div class="newstitle">2023年5月捐赠公示</div>
              </div>
              <div class="time">2023-05-31</div>
            </div> -->
          </div>
        </div>
      </div>
      <!-- 友情链接 -->
      <div id="links">
        <div class="head">
          <span></span>
          <div class="tip">
            <img class="title_icon" src="http://www.ltxfwh.org/template/gzlt/pc/images/icon1.png" alt="" />
            <p>友情链接</p>
          </div>
          <span></span>
        </div>
        <div class="links_content">
          <a class="links_content_a" href="https://cszg.mca.gov.cn/platform/login.html?service=%2Fj_spring_security_check&renew=true" target="_blank"> <img src="../assets/zh/ZHYH/lianjie1.png" alt="" /> </a>
          <a class="links_content_a" href="https://mzt.xinjiang.gov.cn/xjmzt/index.shtml" target="_blank"> <img src="../assets/zh/ZHYH/lianjie2.png" alt="" /> </a>
          <a class="links_content_a" href="https://chinanpo.mca.gov.cn/" target="_blank"> <img src="../assets/zh/ZHYH/lianjie3.png" alt="" /> </a>
          <a class="links_content_a" href="https://www.mca.gov.cn/" target="_blank"> <img src="../assets/zh/ZHYH/lianjie4.png" alt="" /> </a>
          <a class="links_content_a" href="https://yanglao.mca.gov.cn/#/homePage" target="_blank"> <img src="../assets/zh/ZHYH/lianjie5.png" alt="" /> </a>
          <!-- <a href="http://smzt.gd.gov.cn/shzz/gdnpo_index.html" target="_blank"> <img src="https://timg.hyejia.org//images/440000-cszh/2022/01/164175510000000001.png" alt="" /> </a>
          <a href="http://www.ltgy.org.cn/" target="_blank"> <img src="https://timg.hyejia.org//images/gzlt/2022/10/166656524000000001.png" alt="" /> </a>
          <a href="http://www.gzfso.org.cn/web/index.do" target="_blank"> <img src="https://timg.hyejia.org//images/gzlt/2022/08/166000993100000001.png" alt="" /> </a>
          <a href="https://www.guangzhoucishan.org.cn/" target="_blank"> <img src="https://timg.hyejia.org//images/440000-cszh/2022/01/164175522900000001.png" alt="" /> </a> -->
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Swiper from 'swiper' // 注意引入的是Swiper
import 'swiper/css/swiper.min.css' // 注意这里的引入
import { getMenuList, queryMenuInfo, queryNewMenuInfo } from '@/api/home'

export default {
  name: 'carrousel',
  data() {
    return {
      parentMenuName: '首页',
      menuName: ['蓝态新闻','慈善月报','蓝态动向'],
      menuiIdex: 0,
      limit: 5,
      page: 1,
      oldAgelist: [], //老龄新闻数组
      rightData: [], //最新资讯数组
      partyStudylist: [], //党建学习数组
      projectlist: [], //项目介绍数组
      infolist: [], //信息公开数组
      listData: [], //首页的蓝泰新闻 慈善月报 老龄动态
      shortcutList:[
        {
          name:'慈善知识',
          imgURL:"https://www.will.org.cn/public/home/1000000/images/icon(1).png",
          path:'',
          url:'https://mp.weixin.qq.com/s/qXydbgH1P35RCccuy8eXXg'
        },
        {
          name:'网上预约',
          imgURL:"https://www.will.org.cn/public/home/1000000/images/icon(2).png",
          path:''

        },
        {
          name:'网点查询',
          imgURL:"https://www.will.org.cn/public/home/1000000/images/icon(3).png",
          path:'/contactus'
        
        },
        {
          name:'证书查询',
          imgURL:"https://www.will.org.cn/public/home/1000000/images/icon(4).png",
          path:'/Certificate'

        },
      ],
      moneyList:[
        {
          name:'财务公示',
          imgURL:require("../assets/zh/ZHYH/icon/publicity1.png"),
          path:'/InformationDisclosure',
        },
        {
          name:'年度报告',
          imgURL:require("../assets/zh/ZHYH/icon/publicity2.png"),
          path:'/InformationDisclosure',
        },
        {
          name:'年度审计',
          imgURL:require("../assets/zh/ZHYH/icon/publicity3.png"),
          path:'/InformationDisclosure',
        },
        {
          name:'规章制度',
          imgURL:require("../assets/zh/ZHYH/icon/publicity4.png"),
          path:'/InformationDisclosure',
        },
      ]
    }
  },

  //计算属性
  computed: {},
  created() {
    this.getOldQueryMenuInfo()
    this.queryNewMenuInfo()
    this.getpartyStudy()
    // this.getQueryMenuInfo()
    this.getproject()
    this.getinfo()
  },

  //设置自定义的按钮，点击后将前往目标也页
  methods: {
       //详情跳转
    watchDetail(item) {
      if (item.outlink) {
        window.open(item.outlink, '_blank')
        // window.open('http://' + item.outlink, '_blank')
      } else {
        localStorage.setItem('detailData', JSON.stringify(item))
        const { href } = this.$router.resolve({
          path: `/detail`,
          query: {
            id: '1',
          },
        })
        window.open(href, '_blank')
      }
    },
    moneyClick(item){
      this.$router.push({path: item.path,query: { parentMenuName: '信息公开',menuName:item.name,}});
    },
    projectClick(){
      this.$router.push({path: '/partyStudy',query: { parentMenuName: '慈善项目',menuName: '项目介绍',}});
    },
    partystudyClick(){
      this.$router.push({path: '/partyStudy',query: {parentMenuName:'党建学习'}});
    },
    oldAgeClick(){
     this.$router.push({path: '/InformationCenter',query: {parentMenuName:'资讯中心',menuName:'老龄新闻'}});
    },
    newInfoClick(){
      let parentMenuName = null
      let menuName = null
      if (this.$route.query.parentMenuName) {
        parentMenuName = this.$route.query.parentMenuName
      }
      if (this.$route.query.menuName) {
        menuName = this.$route.query.menuName
      }
      const leftSideData = localStorage.getItem("leftSideData");

      let data = (JSON.parse(leftSideData)).find(u => u.menuName === '资讯中心')
      let obj = data.children.find(u => u.menuName === '老龄动态')
    
      console.error('4444',data);
      console.error('5555', this.$store.state.leftSide);
     this.$router.push({path: '/InformationCenter',query: {subid:obj.id,parentMenuName:'资讯中心',menuName:'老龄动态'}});


    //  this.$router.push({path: '/InformationCenter',query: {parentMenuName:'资讯中心',menuName:'老龄新闻'}});
    },
    shortcutClick(item){
      if(item.path){
       this.$router.push({path: item.path});
      }else{
        if(item.url){
          window.open(item.url, '_blank')
        }
      }
    },
    tabClick(index){
      this.menuiIdex = index
      this.getQueryMenuInfo()
    },
    to(index) {
      this.swiper.slideTo(index)
      console.log(this.swiper)
    },
    //获取老龄新闻
    getOldQueryMenuInfo() {
      let data = {
        parentMenuName: '资讯中心',
        menuName: '老龄新闻',
        limit: 6,
        page: 1,
      }
      queryMenuInfo(data)
        .then((res) => {
          if (res.code === 0) {
            console.log(res)
            this.oldAgelist = res.data
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    //获取老龄动态
    queryNewMenuInfo() {
      let data = {
        parentMenuName: '资讯中心',
        menuName: '老龄动态',
        limit: 6,
        page: 1,
      }
      queryMenuInfo(data)
        .then((res) => {
          if (res.code === 0) {
            console.log('老龄动态',res)
            this.rightData = res.data
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    //获取党建学习
    getpartyStudy() {
      let data = {
        parentMenuName: '党建学习',
        limit: 5,
        page: 1,
      }
      queryMenuInfo(data)
        .then((res) => {
          if (res.code === 0) {
            console.log(res)
            this.partyStudylist = res.data
            this.$nextTick(() => {
              this.$refs.swiperRef.swiper.update();
            });
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
     //获取项目介绍
     getproject() {
      let data = {
        parentMenuName: '慈善项目',
        menuName: '项目介绍',
        limit: 3,
        page: 1,
      }
      queryMenuInfo(data)
        .then((res) => {
          if (res.code === 0) {
            console.log(res)
            this.projectlist = res.data
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
     //获取信息公开
     getinfo() {
      let data = {
        parentMenuName: '信息公开',
        // menuName: '项目介绍',
        limit: 10,
        page: 1,
      }
      queryMenuInfo(data)
        .then((res) => {
          if (res.code === 0) {
            console.log(res)
            this.infolist = res.data
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    //获取蓝泰新闻 慈善月报 老龄动态
    getQueryMenuInfo() {
      let data = {
        parentMenuName: "首页",
        menuName: this.menuName[this.menuiIdex],
        limit: this.limit,
        page: this.page,
      }
      queryMenuInfo(data)
        .then((res) => {
          if (res.code === 0) {
            console.log(res)
            this.listData = res.data
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    unescapeHtml(str) {
      let strC = str
        .replace(/&amp;/g, '&')
        .replace(/& lt;/g, '<')
        .replace(/& gt;/g, '>')
        .replace(/& quot;/g, '"')
        .replace(/& #39;/g, "'") // 替换HTML实体编码的单引号
        .replace(/& nbsp;/g, ' ') // 替换非断行空格
      return strC.replace(/<[^>]*>/g, '') //去除所有的标签
      // return strC.replace(/<img[^>]*>/g, '') //去除监测到的图片
    },
    getyearMonth(str) {
      const parts = str.split(' ')
      const dateParts = parts[0].split('-')
      let yearMonth = `${dateParts[0]}-${dateParts[1]}`
      return yearMonth
    },
    getday(str) {
      const parts = str.split(' ')
      const dateParts = parts[0].split('-')
      let day = dateParts[2]
      return day
    },
  },
  mounted() {
    var mySwiper = new Swiper('.swiper-container', {
      // direction: 'vertical', // 垂直切换选项
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },
      autoplay: true,
      // autoplay: {
      //   delay: 3000, // 每次轮播间隔的ms数，默认3000ms
      //   stopOnLastSlide: false, // 播放完最后一张图片后是否停留在最后一张图片上，停止继续轮播。默认false
      //   disableOnInteraction: true, // 用户操作轮播图后，比如点击轮播按钮或小圆点，停止轮播
      // },

      // 如果需要前进后退按钮
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // },

      // // 如果需要滚动条
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
    })

    var mySwiper2 = new Swiper('#swiper2', {
      loop: true, // 循环模式选项
      autoplay: true,
    })
    this.$nextTick(() => {
      var mySwiper3 = new Swiper(this.$refs.swiperRef, {
      loop: true, // 循环模式选项
      autoplay: true,
    })
    });
   
  },
}
</script>

<style scoped>
.bd_width {
  width: 1200px;
  margin: 0 auto;
  /* overflow: hidden; */
}
#news .news_classify {
  height: 113px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#news .news_classify .tab {
  width: 124px;
  height: 36px;
  line-height: 36px;
  background: #e6e6e6;
  border-radius: 18px;
  font-size: 18px;
  color: #666;
  text-align: center;
  margin-left: 22px;
  cursor: pointer;
}
#news .news_classify .tab_active {
  background: #d50915 !important;
  color: #fff !important;
}
.news_content {
  height: 320px;
}
.news_content > div {
  float: left;
}
#news .morebox {
  width: 100%;
  height: 40px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
#news .morebox .morenews {
  display: inline-block;
  color: #fff;
  background: #d50915;
  text-align: center;
  width: 140px;
  line-height: 40px;
  height: 40px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
}

#party .morebox {
  width: 100%;
  height: 40px;
  margin-top: 30px;
  display: flex;
  justify-content: center;
}
#party .morebox .morenews {
  display: inline-block;
  color: #fff;
  background: #d50915;
  text-align: center;
  width: 140px;
  line-height: 40px;
  height: 40px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
}

#project .morebox {
  width: 100%;
  height: 40px;
  /* margin-top: 30px; */
  display: flex;
  justify-content: center;
}
#project .morebox .morenews {
  display: inline-block;
  color: #fff;
  background: #d50915;
  text-align: center;
  width: 140px;
  line-height: 40px;
  height: 40px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
}

#banner2,
#banner4 {
  width: 580px;
  height: 310px;
  background: #fff;
  margin-right: 30px;
  cursor: pointer;
  position: relative;
}
#swiper2,
#swiper4 {
  width: 100%;
  overflow: hidden;
  position: relative;
}
#banner2 img,
#banner4 img {
  width: 580px;
  height: 310px;
  display: block;
}
#banner2 .swiper-slide,
#banner4 .swiper-slide {
  width: 580px;
  height: 310px;
  position: relative;
}
#banner2 .shadow,
#banner4 .shadow {
  width: 580px;
  height: 40px;
  position: absolute;
  bottom: 0;
  left: 0px;
  background: rgba(0, 0, 0, 0.65);

  padding-left: 16px;
}
#banner2 .shadow .txt,
#banner4 .shadow .txt {
  width: 440px;
  height: 40px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #fff;
  line-height: 40px;
  font-size: 14px;
  text-align: left;
}
#banner2 .pagination2,
#banner4 .pagination4 {
  width: 130px;
  left: 450px;
  bottom: 10px;
}
#banner2 .swiper-pagination .swiper-pagination-bullet-active,
#banner4 .swiper-pagination .swiper-pagination-bullet-active {
  background: #d50915;
}
.news_item {
  display: flex;
  justify-content: left;
  margin-bottom: 20px;
  cursor: pointer;
}
.news_item .datetime {
  height: 46px;
  text-align: right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 12px;
  margin: 0;
  font-size: 14px;
  color: #666;
  border-right: 1px solid #eee;
}
.news_item .date {
  font-size: 16px;
  color: #333333;
  font-weight: 600;
}
.item_mar {
  margin: 0 15px 30px;
}
.news_item .item_center {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
}
.news_item .newtitle {
  width: 480px;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  color: #3b3b3b;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0;
  border: 0;
}
.news_item .summary {
  width: 480px;
  font-size: 12px;
  font-weight: 400;
  color: #888888;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
#static {
  width: 100%;
  height: 168px;
  background: #ffeded;
  margin-top: 60px;
}
.content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
}
.static-item {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}
.value {
  margin-bottom: 10px;
  font-size: 32px;
  color: #d50915;
  font-weight: bold;
}
.value > span {
  font-size: 14px;
  font-weight: 500;
}
.name {
  font-size: 16px;
  color: #333;
}
.head {
  width: 100%;
  height: 112px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.head > span {
  width: 45px;
  height: 4px;
  background: #ededed;
}
.tip {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  color: #d50915;
  line-height: 60px;
  margin: 0 30px;
}
.title_icon {
  width: 25px;
  height: 25px;
  margin-right: 18px;
}
.bigbanner {
  width: 100%;
  margin-top: 60px;
}
.bigbanner > img {
  width: 100%;
  height: auto;
}
.project_content,
.links_content,
.fund_content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto;
  padding-top: 30px;
  max-width: 1200px;
  overflow: hidden;
}
.project_item {
  width: 380px;
  cursor: pointer;
}
.project_item .shadow {
  position: relative;
}
.mask {
  position: absolute;
  top: 0px;
  filter: alpha(opacity = 60);
  background-color: #000;
  z-index: 1002;
  left: 0px;
  opacity: 0.7;
  -moz-opacity: 0.7;
  width: 100%;
}
.project_item img {
  width: 380px;
  height: 216px;
}
.project_info {
  margin: 20px 0 30px 0;
  text-align: left;
}
.title {
  color: #333;
  font-size: 18px;
  font-weight: 800;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0;
  border: 0;
}
.project_item .summary {
  font-size: 12px;
  font-weight: 400;
  margin-top: 10px;
  word-break: break-all;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  color: #808080;
  height: 48px;
  line-height: 24px;
}
#publicity .content {
  margin-top: 36px;
  display: flex;
  justify-content: space-between;
}
#publicity .left {
  width: 700px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
#publicity .img {
  margin-bottom: 20px;
}
#publicity .img {
  width: 340px;
  height: 195px;
  display: block;
  cursor: pointer;
}
#publicity .right {
  flex: 1;
  margin-left: 40px;
}
#publicity .right .item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  cursor: pointer;
}
#publicity .right .item > div {
  display: flex;
  align-items: center;
}
#publicity .right span {
  width: 4px;
  height: 4px;
  background-color: #d50915;
  margin-right: 10px;
}
#publicity .right .item .newstitle {
  color: #3b3b3b;
  font-size: 16px;
  width: 335px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
}
#publicity .right .item .time {
  font-size: 14px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #929292;
}
.links_content {
  justify-content: left !important;
}
.links_content img {
  /* width: 300px; */
  width: 290px;
  height: 80px;
  margin-bottom: 6px;
  cursor: pointer;
}
.links_content_a{
  margin: 0 4px;

}
main .cnt_A .text3 .cnt1 .phone {
  line-height: 0.8rem !important;
}

.news p {
  font-size: 16px;
  font-weight: bold;
  color: #000000;
}
.shortcut{
  font-size: 16px;
  font-weight: bold;
  color: #000000;
  cursor: pointer;
}
main .cnt_A .text3 .icon {
  flex-wrap: wrap;
}
</style>
