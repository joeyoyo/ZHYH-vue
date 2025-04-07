<template>
  <div class="query">
    <div class="bd-width ">
      <ul class="lst-query">
        <li id="ActivityType">
          <span class="tl">活动类型：</span>

          <a data-value="0" class="s-bg">全部</a><a data-value="合唱团">合唱团</a><a data-value="太极国学班">太极国学班</a><a data-value="文以化企">文以化企</a
          ><a data-value="爱心环保餐厅">爱心环保餐厅</a><a data-value="家庭家教家风公益课堂">家庭家教家风公益课堂</a><a data-value="AED急救行动">AED急救行动</a><a data-value="师资班">师资班</a
          ><a data-value="文以化校">文以化校</a><a data-value="慈善超市">慈善超市</a><a data-value="扶危济困">扶危济困</a><a data-value="乡村振兴">乡村振兴</a><a data-value="艺术馆">艺术馆</a
          ><a data-value="书法国学班">书法国学班</a><a data-value="志愿服务组">志愿服务组</a><a data-value="党建活动">党建活动</a><a data-value="蓝态幸福社区">蓝态幸福社区</a
          ><a data-value="其他">其他</a>
        </li>
        <!--
          <li id="ActivityProcess">
              <span class="tl">活动进程：</span>
              <a onclick="" class="s-bg">全部</a>
              <a onclick="">正在报名</a>
              <a onclick="">正在进行</a>
              <a onclick="">已经结束</a>
          </li>
          <li>
              <div class="f-fl" id="ActivitySort">
                  <span class="tl">活动排序：</span>
                  <a onclick="" class="s-bg">默认</a>
                  <a onclick="">最新上线↓</a>
                  <a onclick="">支持人数↓</a>
              </div>
          </li>
        -->
        <li>
          <!--
            <div class="f-fl" id="">
                <span class="tl">所属团队：</span>
                <select class="set-value" id="TeamId"></select>
            </div>
          -->
          <div class="f-fr"><input type="text" class="rs-input" id="int_actName" placeholder="请输入活动名称" /> <input type="button" id="int_btnSerach" class="btn-query" value="查询" /></div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      workTask: [],
    }
  },
  created() {
    // this.workTask = this.$route.query.id
    // console.log(this.workTask)
  },
  beforeMount: function() {
    //挂载前状态
  },
}
</script>

<style scoped>
.query {
    padding: 10px 0;
    background: #fff;
}
.bd-width {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
}
.lst-query {
    padding: 10px 10px 0;
}
.lst-query>li {
    padding: 10px 0;
    list-style: none;
}
.lst-query>li a {
    display: inline-block;
    margin-right: 10px;
    padding: 3px 10px;
    cursor: pointer;
}
.f-fr {
    float: right;
}
.rs-input {
    color: #ccc;
    width: 220px;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    margin-right: 25px;
    text-indent: 20px;
    border: 1px solid #ccc;
    font: 14px / 1.5 '微软雅黑', "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #333;
    outline: 0;
    font-style: normal;
}
button, html input[type=button], input[type=reset], input[type=submit] {
    -webkit-appearance: button;
    cursor: pointer;
    background: #ff8200;
    color: #fff !important;
    border-radius: 2px;
}
.btn-query {
    display: inline-block;
    padding: 5px 25px;
    border-radius: 2px;
    font: 14px / 1.5 '微软雅黑', "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #333;
    outline: 0;
    border: 0;
    font-style: normal;
}
</style>
