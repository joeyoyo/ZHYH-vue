<template>
  <div class="bd-right new-information" id="showright" style="margin-left: 10px;">
    <div class="g-place">
      <h2 class="mjg-title"><span>最新资讯</span></h2>
      <ul class="lst-recommend pglf">
        <li v-for="(item,index) in rightData" :key="item.id" :index="index" @click="itemTag(item)">
          <a><img :src="item.src" alt=""/></a>
          <p>{{ item.title }}</p>
        </li>
        <!-- <li>
          <a href="/?action=news-detail&amp;id=165989575400000001"><img src="http://gzlt.hyejia.org/images/gzlt/2022/08/166061258400000001.png" alt=""/></a>
          <p>广东省蓝态幸福文化公益基金会简介</p>
        </li>
        <li>
          <a href="https://mp.weixin.qq.com/s/uhXW_E_3iuLrYsi2SbW6xA"><img src="http://gzlt.hyejia.org/images/gzlt/2024/08/7b94de91e8c64c3e8a9ddf1c6b1178f1.png" alt=""/></a>
          <p>蓝态公益2024年7月月报｜慈善月报</p>
        </li>
        <li>
          <a href="/?action=news-detail&amp;id=172114996701000001"><img src="http://gzlt.hyejia.org/images/gzlt/Common/Default.png?0.5913919547808995" alt=""/></a>
          <p>广东省蓝态幸福文化公益基金会 2024年第二季度财务简报</p>
        </li>
        <li>
          <a href="https://mp.weixin.qq.com/s/Ix-lHoEGUqnlQ7295_GWhw"><img src="http://gzlt.hyejia.org/images/gzlt/2024/07/d96753d89c62452a98cdd2b8ea10b989.png" alt=""/></a>
          <p>蓝态公益2024年6月月报｜慈善月报</p>
        </li>
        <li>
          <a href="/?action=news-detail&amp;id=171925758301000001"><img src="http://gzlt.hyejia.org/images/gzlt/Common/Default.png?0.3647262846412591" alt=""/></a>
          <p>蓝态公益基金会2023年年度报告</p>
        </li>
        <li>
          <a href="https://mp.weixin.qq.com/s/g5Ln0RkLGnKu5ejY304Y9g"><img src="http://gzlt.hyejia.org/images/gzlt/2024/06/171717752401000001.png" alt=""/></a>
          <p>蓝态公益2024年5月月报｜慈善月报</p>
        </li>
        <li>
          <a href="https://mp.weixin.qq.com/s/kVZMJA9VA0CYsIGkk6Z-Dg"><img src="http://gzlt.hyejia.org/images/gzlt/2024/05/171451619501000001.png" alt=""/></a>
          <p>蓝态公益2024年4月月报｜慈善月报</p>
        </li>
        <li>
          <a href="/?action=news-detail&amp;id=171337786301000001"><img src="http://gzlt.hyejia.org/images/gzlt/Common/Default.png?0.5913919547808995" alt=""/></a>
          <p>广东省蓝态幸福文化公益基金会 2024年第一季度财务简报</p>
        </li>
        <li>
          <a href="https://mp.weixin.qq.com/s/Ox23KbDxjToRb5qhBiPGaQ"><img src="http://gzlt.hyejia.org/images/gzlt/2024/04/171268344401000001.png" alt=""/></a>
          <p>蓝态公益2024年3月月报｜慈善月报</p>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    //右侧最新资讯,必传
    rightData: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
    }
  },
  created() {
   
  },
  beforeMount: function() {
    //挂载前状态
  },
}
</script>

<style scoped>
.bd-right {
    float: right;
    width: 300px;
    margin-left: 10px;
}
.mjg-title {
    line-height: 40px;
    padding: 0 10px;
    font-size: 16px;
    background: #fcfcfc;
    border: 1px solid #f2f2f2;
}
.lst-recommend {
    border-left: 1px solid #f2f2f2;
    border-right: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
    margin: 0px;
    padding: 0 10px;
}
.lst-recommend li {
    margin: 0px;
    padding: 10px;
    border-bottom: 1px dashed #e6e6e6;
}
.lst-recommend li a {
    display: block;
    height: auto !important;
    border: 1px solid #e0e0e0;
    text-decoration: none;
    color: #333 !important;
}
.lst-recommend li p {
    padding: 10px;
    text-align: center;
    width: 250px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>
