<!-- 基金会活动 -->
<template>
  <div id="main">
    <div class="g-body">
			<query></query>
			<mainList></mainList>

		</div>
  </div>
</template>

<script>
import query from './childComponents/query.vue'
import mainList from './childComponents/mainList.vue'


// import sideCom from './childComponents/side.vue'
export default {
  components: {
    query,
		mainList
  },
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
#main {
  background: #fff;
  /* margin-top: 194px; */
  min-height: 700px;
}

.g-body {
  width: 100%;
  overflow: hidden;
  min-height: 521px;
  font: 14px / 1.5 '微软雅黑', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  color: #333;
  outline: 0;
  border: 0;
  font-style: normal;
}
</style>
