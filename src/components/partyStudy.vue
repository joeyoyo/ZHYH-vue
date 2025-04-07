<!-- 党建学习 -->
<template>
  <div id="main">
    <div class="bd-width">
      <!-- <ListCom></ListCom> -->
      <ListCom :listData="listData" :count="count" @handlePageChange="handlePageChange" :parentMenuName="parentMenuName" :menuName="menuName"></ListCom>
      <sideRight :rightData="rightData"></sideRight>
    </div>
  </div>
</template>

<script>
import ListCom from './childComponents/listCom.vue'
import sideRight from './childComponents/sideRight2.vue'
import { queryMenuInfo, queryNewMenuInfo } from '@/api/home'

export default {
  components: {
    ListCom,
    sideRight,
  },
  data() {
    return {
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
    if (this.$route.query.parentMenuName) {
      this.parentMenuName = this.$route.query.parentMenuName
    }
    if (this.$route.query.menuName) {
      this.menuName = this.$route.query.menuName
    }
    this.getQueryMenuInfo()
    this.queryNewMenuInfo() //获取最新资讯
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
    //获取最新资讯
    queryNewMenuInfo() {
      let data = {
        limit: this.limit,
        page: this.page,
      }
      queryNewMenuInfo(data)
        .then((res) => {
          if (res.code === 0) {
            console.log(res)
            this.rightData = res.data
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
</style>
