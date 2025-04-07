<!-- 志愿服务 -->
<template>
  <div id="main">
    <div class="g-body">
      <div class="bd-width">
        <!-- <div class="bd-left">
          <div class="news-box">
            <h2 class="tt-news">志愿服务</h2>
            <div class="tb-box">
              <div class="fm-group f-fl">
                <p style="padding-left:31px">统计结果：共查询到<span style="color:#ff8200" id="totalNumber">52989</span>条记录，合计<span style="color:#ff8200" id="totalSerTime">452042.5</span>小时
                </p>
              </div>
              <div class="fm-group f-fr" style="display:none">
                <button class="btn-query f-fr" id="queryTiemBank">查询</button>
              </div>
              <el-table :data="tableData" stripe style="width: 100%">
                <el-table-column prop="address" label="服务内容" width="400">
                </el-table-column>
                <el-table-column prop="name" label="志愿者">
                </el-table-column>
                <el-table-column prop="time" label="服务时长">
                </el-table-column>
                <el-table-column prop="date" label="服务时间" width="180">
                </el-table-column>
              </el-table>

            </div>
          </div>
          <div style="width:100%;text-align:center;margin-top:15px" class="hy-fright pagination btn-group portal_news" id="Pagination"><span class="current prev disabled">首页</span><span class="current prev">上一页</span><span class="current">1</span><a href="#">2</a><a href="#">3</a><a href="#">4</a><span>...</span><a href="#">1060</a><a href="#" class="next">下一页</a><a href="#" class="prev disabled">尾页</a></div>
        </div> -->
        <ListCom :listData="listData" :count="count" @handlePageChange="handlePageChange" :parentMenuName="parentMenuName" :menuName="menuName"></ListCom>

        <div class="bd-right">
          <div class="g-place">
            <h2 class="m-title">
              总服务明星
              <span style="float:right;color:#666;font-size: 12px;display:none" onclick="window.location.href='/?action=time-bank&amp;set-bnum=0'">更多&gt;</span>
            </h2>
            <ul class="ranking">
              <li>
                <ol class="time_img rg-wh">排名</ol>
                <ol>姓名</ol>
                <ol>服务时长</ol>
              </li>
            </ul>
            <ul class="ranking lst-rank zongRanking">
              <li>
                <ol class="time_img " id="imgnum" num="0"><img style=" display:inline-block;" src="../assets/zh/gold.png"></ol>
                <ol class="time_img ">谢**</ol>
                <ol class="time_img ">4920小时</ol>
              </li>
              <li>
                <ol class="time_img " id="imgnum" num="1"><img style=" display:inline-block;" src="../assets/zh/silvery.png"></ol>
                <ol class="time_img ">金**</ol>
                <ol class="time_img ">3575.5小时</ol>
              </li>
              <li>
                <ol class="time_img " id="imgnum" num="2"><img style=" display:inline-block;" src="../assets/zh/copper.png"></ol>
                <ol class="time_img ">刘**</ol>
                <ol class="time_img ">3067.5小时</ol>
              </li>
              <!-- <li>
                <ol class="time_img " id="imgnum" num="3">4</ol><ol class=" time_img ">天**</ol><ol class=" time_img ">2611.5小时</ol></li><li><ol class=" time_img " id=" imgnum" num="4" >5</ol><ol class=" time_img ">曹**</ol><ol class=" time_img ">2610.0小时</ol></li><li><ol class=" time_img " id=" imgnum" num="5" >6</ol><ol class=" time_img ">黄**</ol><ol class=" time_img ">2485.5小时</ol></li><li><ol class=" time_img " id=" imgnum" num="6" >7</ol><ol class=" time_img ">冬**</ol><ol class=" time_img ">2404.0小时</ol></li><li><ol class=" time_img " id=" imgnum" num="7" >8</ol><ol class=" time_img ">L**</ol><ol class=" time_img ">2284.5小时</ol></li><li><ol class=" time_img " id=" imgnum" num="8" >9</ol><ol class=" time_img ">苏**</ol><ol class=" time_img ">2240.5小时</ol></li><li><ol class=" time_img " id=" imgnum" num="9" >10</ol><ol class=" time_img ">雅**</ol><ol class=" time_img ">2066.0小时</ol></li> -->
              </ul>
            </div>
            <div class="g-place">
                  <h2 class="m-title">
                    年服务明星
                    <span style="float:right;color:#666;font-size: 12px;display:none" id="yearRanking">更多&gt;</span>
                  </h2>
                  <ul class="ranking">
                    <li>
                      <ol class="time_img rg-wh">排名</ol>
                      <ol>姓名</ol>
                      <ol>服务时长</ol>
                    </li>
                  </ul>
                  <ul class="ranking lst-rank yearRanking">
                    <li>
                      <ol class="time_img " id="imgnum" num="0"><img style=" display:inline-block;" src="../assets/zh/gold.png"></ol>
                      <ol class="time_img ">谢**</ol>
                      <ol class="time_img ">1492小时</ol>
                    </li>
                    <li>
                      <ol class="time_img " id="imgnum" num="1" ><img style=" display:inline-block;" src="../assets/zh/silvery.png"></ol>
                      <ol class="time_img ">黄**</ol>
                      <ol class="time_img ">1081.0小时</ol>
                    </li>
                    <li>
                      <ol class="time_img " id="imgnum" num="2" ><img style=" display:inline-block;" src="../assets/zh/copper.png"></ol>
                      <ol class="time_img ">金**</ol>
                      <ol class="time_img ">819小时</ol>
                    </li>
                    <!-- <li>
                      <ol class="time_img " id="imgnum" num="3" >4</ol><ol class=" time_img ">苏**</ol><ol class=" time_img ">691.5小时</ol></li><li><ol class=" time_img " id=" imgnum" num="4" >5</ol><ol class=" time_img ">阿**</ol><ol class=" time_img ">691.5小时</ol></li><li><ol class=" time_img " id=" imgnum" num="5" >6</ol><ol class=" time_img ">诗**</ol><ol class=" time_img ">684.5小时</ol></li><li><ol class=" time_img " id=" imgnum" num="6" >7</ol><ol class=" time_img ">天**</ol><ol class=" time_img ">648.0小时</ol></li><li><ol class=" time_img " id=" imgnum" num="7" >8</ol><ol class=" time_img ">朱**</ol><ol class=" time_img ">609小时</ol></li><li><ol class=" time_img " id=" imgnum" num="8" >9</ol><ol class=" time_img ">刘**</ol><ol class=" time_img ">524小时</ol></li><li><ol class=" time_img " id=" imgnum" num="9" >10</ol><ol class=" time_img ">大**</ol><ol class=" time_img ">515.0小时</ol></li> -->
                      </ul>
            </div>
            <div class="g-place">
                        <h2 class="m-title">
                          月服务明星
                          <span style="float:right;color:#666;font-size: 12px;display:none" id="monthRanking">更多&gt;</span>
                        </h2>
                        <ul class="ranking">
                          <li>
                            <ol class="time_img rg-wh">排名</ol>
                            <ol>姓名</ol>
                            <ol>服务时长</ol>
                          </li>
                        </ul>
                        <ul class=" ranking lst-rank monthRanking">
                          <li>
                            <ol class="time_img " id="imgnum" num="0" ><img style=" display:inline-block;" src="../assets/zh/gold.png"></ol>
                            <ol class="time_img ">谢**</ol>
                            <ol class="time_img ">93小时</ol>
                          </li>
                          <li>
                            <ol class="time_img " id="imgnum" num="1" ><img style=" display:inline-block;" src="../assets/zh/silvery.png"></ol>
                            <ol class="time_img ">爱**</ol>
                            <ol class="time_img ">68小时</ol>
                          </li>
                          <li>
                            <ol class="time_img " id="imgnum" num="2" ><img style=" display:inline-block;" src="../assets/zh/copper.png"></ol>
                            <ol class="time_img ">太**</ol>
                            <ol class="time_img ">67.5小时</ol>
                          </li>
                          <!-- <li>
                            <ol class="time_img " id="imgnum" num="3" >4</ol><ol class=" time_img ">朱**</ol><ol class=" time_img ">67.5小时</ol></li><li><ol class=" time_img " id=" imgnum" num="4" >5</ol><ol class=" time_img ">星**</ol><ol class=" time_img ">66.5小时</ol></li><li><ol class=" time_img " id=" imgnum" num="5" >6</ol><ol class=" time_img ">王**</ol><ol class=" time_img ">66.0小时</ol></li><li><ol class=" time_img " id=" imgnum" num="6" >7</ol><ol class=" time_img ">陈**</ol><ol class=" time_img ">65小时</ol></li><li><ol class=" time_img " id=" imgnum" num="7" >8</ol><ol class=" time_img ">C**</ol><ol class=" time_img ">64.5小时</ol></li><li><ol class=" time_img " id=" imgnum" num="8" >9</ol><ol class=" time_img ">荒**</ol><ol class=" time_img ">63小时</ol></li><li><ol class=" time_img " id=" imgnum" num="9" >10</ol><ol class=" time_img ">虾**</ol><ol class=" time_img ">62.0小时</ol></li> -->
                            </ul>
            </div>
        </div>
    </div>
</div>
  </div>
</template>

<script>
import ListCom from './childComponents/listCom.vue'
import sideCom from './childComponents/side.vue'
import { queryMenuInfo, queryNewMenuInfo } from '@/api/home'

export default {
  components: {
    sideCom,
    ListCom,
  },
  data() {
    return {
      // workTask: [],
      tableData: [{
          time: '2.5小时',
          name: '王小虎',
          address: '【志愿者报名】第214期蓝态家庭家教家风公益课堂',
          date:'2024-08-12'
        }, {
          time: '2.5小时',
          name: '王小虎',
          address: '【志愿者报名】第214期蓝态家庭家教家风公益课堂',
          date:'2024-08-12'
        }, {
          time: '2.5小时',
          name: '王小虎',
          address: '【志愿者报名】第214期蓝态家庭家教家风公益课堂',
          date:'2024-08-12'
        }, {
          time: '2.5小时',
          name: '王小虎',
          address: '【志愿者报名】第214期蓝态家庭家教家风公益课堂',
          date:'2024-08-12'
        }],
      listData: [], //新闻分页数据
      rightData:[],//最新资讯数据
      parentMenuName: '',
      menuName: '',
      limit: 10,
      page: 1,
      count: 0,
    }
  },
  created() {
    // this.workTask = this.$route.query.id
    // console.log(this.workTask)
     if (this.$route.query.parentMenuName) {
      this.parentMenuName = this.$route.query.parentMenuName
    }
    if (this.$route.query.menuName) {
      this.menuName = this.$route.query.menuName
    }
    this.getQueryMenuInfo()
    // this.queryNewMenuInfo() //获取最新资讯
  },
  methods: {
    //获取新闻
    getQueryMenuInfo() {
      let data = {
        parentMenuName: this.parentMenuName,
        limit: this.limit,
        page: this.page,
      }
      // 检查 this.menuName 是否存在且不为空
      if (this.menuName) {
        data.menuName = this.menuName // 如果不为空，则添加到 data 对象中
      }
      queryMenuInfo(data)
        .then((res) => {
          if (res.code === 0) {
            console.log(res)
            this.listData = res.data
            this.count = res.count
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    //处理页数变化
    handlePageChange(page) {
      this.page = page
      this.getQueryMenuInfo()
    },
  },
  beforeMount: function () {
    //挂载前状态
  },
}
</script>

<style scoped>
#main {
  background: #fff;
  /* margin-top: 194px; */
  min-height: 700px;
}
.g-body {
  width: 100%;
  overflow: hidden;
  min-height: 521px;
  font: 14px / 1.5 "微软雅黑", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333;
  outline: 0;
  border: 0;
  font-style: normal;
}
.bd-width {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  font: 14px / 1.5 "微软雅黑", "Helvetica Neue", Helvetica, Arial, sans-serif;
  color: #333;
  outline: 0;
  border: 0;
  font-style: normal;
  display: flex;
}
.bd-left {
  float: left;
  width: 890px;
}
.news-box {
  background: #fff;
  padding: 10px 10px;
}
.tt-news {
  padding-bottom: 10px;
  font-size: 20px;
  padding-left: 10px;
  font-weight: bold;
  border-bottom: 1px solid #f1f1f1;
  text-align: left;
}
.tb-box {
  margin: 20px 20px 0 20px;
}
.tb-box .fm-group {
  width: 400px;
  margin-bottom: 20px;
  position: relative;
}
.bd-right {
  float: right;
  width: 300px;
}
.g-place {
  overflow: hidden;
  margin-bottom: 10px;
  padding: 0px !important;
  background: #fff;
}
.m-title {
  line-height: 41px;
  padding: 0 10px;
  font-size: 16px;
  background: #fcfcfc;
  border: 1px solid #f2f2f2;
}
.ranking {
  padding: 0 10px;
}
.ranking li {
  color: #999;
  padding: 10px 0;
  border-bottom: 1px dashed #f1f1f1;
}
.ranking li ol:nth-of-type(1) {
  width: 60px;
  /* text-align: left; */
  margin: 0 auto;
}
.ranking li ol:nth-of-type(2) {
  width: 120px;
  /* text-align: left; */
  margin: 0 auto;
}
.ranking li ol {
  display: table-cell;
  text-align: center;
}
.lst-rank li {
  color: #333;
}
.lst-rank li ol:nth-of-type(1) img {
  vertical-align: middle;
  width: 20px;
  height: 26px;
}
</style>
