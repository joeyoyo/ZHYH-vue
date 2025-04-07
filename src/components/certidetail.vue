<!-- 证书详情页 -->
<template>
  <div id="main">
    <div class="bd-width">
      <div class="bd-left flex1">
        <div class="news-content">
          <h2 id="news_title">{{detailData.certificateName}}</h2>
          <div class="dl-author">
            <div class="f-fl" id="newsinfo">
              <span>时间：<i>{{detailData.createTime}}</i></span>
              <span>证书归属者：<i>{{detailData.username}}</i></span>
              <!-- <span>阅读次数：<i>1167</i></span> -->
            </div>
          </div>
            <p><img :src="detailData.certificateURL" style="max-width:100%;height:auto" /><br /></p>
            <!-- <p></p>
            <p style="text-align: center;"><br /></p>
            <p style="text-align: center;"><span style="font-family: 微软雅黑;">机构热线：0991-2828049/13999934531</span></p>
            <p style="text-align: center;"><span style="font-family: 微软雅黑;">机构邮箱：1932512725@qq.com</span></p>
            <p style="text-align: center;"><span style="font-family: 微软雅黑;">机构地址：新疆乌鲁木齐市天山区延安路1110号新疆老年大学四层</span></p>
            <p style="text-align: center;"><span style="font-family: 微软雅黑;">邮编：830000</span></p> -->
          <div id="pageNews" class="next-news"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sideRight from './childComponents/sideRight2.vue'

export default {
  components: {
    sideRight,
  },
  data() {
    return {
      detailData: {
        "id": "996758777099325440",
        "username": "123",
        "idcard": "11010519491231002X",
        "certificateURL": "https://gw-crm.oss-cn-shenzhen.aliyuncs.com/996758774205255680.png",
        "certificateName": "12345",
        "createTime": "2024-09-19 22:50:22",
        "updateTime": "2024-09-19 22:50:22",
        "createId": "admin"
       }
    }
  },
  created() {
    // const detailData = localStorage.getItem("detailData");
    // console.error('2222',JSON.parse(detailData));
    // this.detailData = JSON.parse(detailData)

    this.detailData = this.$store.state.cetidetail ? this.$store.state.cetidetail :  {
        "id": "996758777099325440",
        "username": "123",
        "idcard": "11010519491231002X",
        "certificateURL": "https://gw-crm.oss-cn-shenzhen.aliyuncs.com/996758774205255680.png",
        "certificateName": "12345",
        "createTime": "2024-09-19 22:50:22",
        "updateTime": "2024-09-19 22:50:22",
        "createId": "admin"
       }
    
  },
  methods: {

  },
  beforeMount: function() {
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
.bd-width {
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  font: 14px / 1.5 '微软雅黑', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #333;
  outline: 0;
  border: 0;
  font-style: normal;
  display: flex;
}
.bd-left {
    float: left;
    width: 890px;
		flex: 1;
}
.news-content {
    background: #fff;
    padding: 20px;
}
.news-content h2 {
    font-weight: normal;
    font-size: 22px;
    text-align: left;
}
.dl-author {
    color: #999;
    font-size: 12px;
    padding: 20px 0 10px;
    margin-bottom: 30px;
    border-bottom: 1px dashed #cccccc;
}
.f-fl {
    float: left;
}
.dl-author span {
    display: inline-block;
    margin-right: 20px;
}
.dl-author:after{
  display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    overflow: hidden;
    content: ".";
}
.dl-news {
    overflow: hidden;
    font-size: 17px;
    font-family: "宋体";
}
.dl-news p {
    text-indent: 2em;
}
.dl-news img {
	  width: 100%;
    max-width: 90% !important;
}
.next-news {
    margin-top: 30px;
    padding-top: 20px;
    border-top: 1px dashed #ccc;
}
</style>
