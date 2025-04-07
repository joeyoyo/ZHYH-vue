<!-- 资讯中心 -->
<template>
  <div id="main">
    <div class="bd-width">
      <sideCom :leftData="leftData" @getSideData="getSideData" @getSubId="getSubId"></sideCom>
      <ListCom :listData="listData" :count="count" @handlePageChange="handlePageChange" :parentMenuName="parentMenuName" :menuName="menuName"></ListCom>
    </div>
  </div>
</template>

<script>
import ListCom from './childComponents/listCom.vue'
import sideCom from './childComponents/side.vue'
import { queryMenuInfo } from '@/api/home'

export default {
  components: {
    sideCom,
    ListCom,
  },
  data() {
    return {
      currentId: '',
      parentMenuName: '',
      menuName: '',
      limit: 10,
      page: 1,
      count: 0,
      leftData: [], //左侧导航数据
      listData: [], //新闻分页数据
    }
  },
  created() {
    if (this.$route.query.id) {
      this.currentId = this.$route.query.id
    } else {
      this.currentId = this.$route.query.subid
    }
    if (this.$route.query.parentMenuName) {
      this.parentMenuName = this.$route.query.parentMenuName
    }
    if (this.$route.query.menuName) {
      this.menuName = this.$route.query.menuName
    }

    // console.log(this.$route.query.parentMenuName)

    // console.log(this.currentId)
    // this.leftData = this.$store.state.leftSide
    console.log(this.$route.query.parentMenuName)

    console.log(this.currentId)
    const leftSideData = localStorage.getItem("leftSideData");
    console.error('2222',leftSideData);
    console.error('333',JSON.parse(leftSideData));


    let data = (JSON.parse(leftSideData)).find(u => u.menuName === this.parentMenuName)
    console.error('4444',data);
    console.error('5555', this.$store.state.leftSide);


    this.leftData = this.$store.state.leftSide.length !== 0 ? this.$store.state.leftSide : data.children

    this.getQueryMenuInfo()
  },
  methods: {
 

    getSubId() {
      this.parentMenuName = this.$route.query.parentMenuName
      this.menuName = this.$route.query.menuName
      this.getQueryMenuInfo()
    },
    getSideData(item) {
      this.currentId = item.id
      this.parentMenuName = item.parentMenuName
      this.menuName = item.menuName
      console.error('获取到的左侧数据', item)
      this.getQueryMenuInfo()
    },
    //获取新闻
    getQueryMenuInfo() {
      let data = {
        parentMenuName: this.parentMenuName,
        menuName: this.menuName,
        limit: this.limit,
        page: this.page,
        // menuId:this.currentId
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
