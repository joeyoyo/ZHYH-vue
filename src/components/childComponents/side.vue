<template>
    <div class="category" style="height: 330px;">
      <!-- <div class="category-item cate_active" data-type="机构章程">机构章程</div>
      <div class="category-item" data-type="机构简介">机构简介</div>
      <div class="category-item" data-type="组织架构">组织架构</div>
      <div class="category-item" data-type="机构资质">机构资质</div> -->

      <div class="category-item" :class="{'cate_active': getActive(item.id,index)}" v-for="(item,index) in leftData" :key="item.id" :index="index" @click="itemTag(item)">{{item.menuName}}</div>
    </div>
</template>

<script>
export default {
  props: {
    //左侧导航数组,必传
    leftData: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      currentId:''
    }
  },
  methods: {
    itemTag(item) {
     this.currentId = item.id
     this.$emit('getSideData',item)
    },
    getActive(id,index) {
      let value = (this.currentId === id) || (!this.currentId && index === 0)
      return value
    },
  },
  created() {
    // if(this.$route.query.id){
    //   this.currentId = ''
    // }else{
    //   this.currentId = this.$route.query.subid
    // }
    if(!this.$route.query.subid){
      this.currentId = ''
    }else{
      this.currentId = this.$route.query.subid
    }
    // this.currentId = this.$route.query.id
    console.log(this.currentId)
  },
  watch: {
  '$route.query.subid': function(newVal, oldVal) {
    console.error(newVal,oldVal)
    this.currentId = newVal
    this.$emit('getSubId',newVal)
    // 在这里处理参数变化的逻辑
  }
  },
  mounted() {
    // this.currentId = this.$route.query.id
    // console.log(this.currentId)
  },
  beforeMount: function() {
    //挂载前状态
  },
}
</script>

<style scoped>
.category {
    width: 200px !important;
    background: #fff;
    margin-right: 20px;
    padding: 20px 0 100px;
}
.category .category-item {
    width: 200px;
    height: 50px;
    line-height: 50px;
    padding-left: 30px;
    cursor: pointer;
}
.cate_active {
    background: #f1f1f1;
}
	
</style>
