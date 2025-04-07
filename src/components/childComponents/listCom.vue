<template>
  <div class="bd-left flex1">
    <div class="news-box">
      <h2 class="tt-news">{{ parentMenuName }} {{ menuName ? ' / ' : '' }} {{ menuName }}</h2>
      <div class="lst-news">
        <!--
          <div
            class="project-item"
            v-for="(item, index) in listData"
            :key="item.id"
            :index="index"
            onclick="window.open('/customercase?action=news-detail&amp;id=163623677200000001&amp;typeText=机构章程&amp;right=undefined')"
          >
        -->
        <div class="project-item" v-for="(item, index) in listData" :key="item.id" :index="index" @click="watchDetail(item)">
          <img class="headimg" :src="item.imgURL" alt="" />
          <div class="item-content">
            <div class="news-title">{{ item.title }}</div>
            <div class="news-detail" v-html="unescapeHtml(item.content)"></div>
            <div class="item-foot">
              <div class="name">
                <!-- <img class="pub-avatar" src="https://tapi.hyejia.org/headImg/default.jpg" alt="" style="display:none" /> -->
                <span>{{ item.createUsername }}</span
                ><span>{{ item.publishTime }}</span>
              </div>
              <div class="value">
                <img class="read-num" style="margin-right: 10px;" src="http://www.ltxfwh.org//images/pc/eye.png" alt="" /><span>{{ item.visitTimes }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--
      <div style="width:100%;text-align:center;margin-top:10px" class="hy-fright pagination btn-group portal_news" id="Pagination">
        <span class="current prev disabled">首页</span><span class="current prev">上一页</span><span class="current">1</span><span class="current next">下一页</span
        ><span class="current prev disabled">尾页</span>
      </div>
    -->
    <el-pagination background layout="prev, pager, next" :total="count" :current-page="pageNum" :page-size="pageSize" @current-change="handlePageChange"> </el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    //新闻数据数组,必传
    listData: {
      type: Array,
      required: true,
    },
    count: {
      type: Number,
      default: 0,
    },
    parentMenuName: {
      type: String,
      default: '',
    },
    menuName: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      pageNum: 1, // 第几页
      pageSize: 10, // 每页多少条
      // total: 0 // 总记录数
    }
  },
  created() {},
  methods: {
    //详情跳转
    watchDetail(item) {
      if (item.outlink) {
        // window.open('http://' + item.outlink, '_blank')
        window.open(item.outlink, '_blank')

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

    // html转义处理方法
    escapeHtml(str) {
      var arrEntities = {
        lt: '<',
        gt: '>',
        nbsp: ' ',
        amp: '&',
        quot: '"',
      }
      let strC = str.replace(/&(lt|gt|nbsp|amp|quot);/gi, function(all, t) {
        return arrEntities[t]
      })
      // 然后，手动替换解码后的字符串中的 '&amp; lt;' 和 '&amp; gt;' 为 '<' 和 '>'
      let decodedString = strC.replace(/\&amp\; lt;/g, '<').replace(/\&amp\; gt;/g, '>')
      console.error(decodedString)
      return decodedString
    },
    unescapeHtml(str) {
      return str
        .replace(/&amp;/g, '&')
        .replace(/& lt;/g, '<')
        .replace(/& gt;/g, '>')
        .replace(/& quot;/g, '"')
        .replace(/& #39;/g, "'") // 替换HTML实体编码的单引号
        .replace(/& nbsp;/g, ' ') // 替换非断行空格
    },

    //处理页数变化
    handlePageChange(currentPage) {
      this.pageNum = currentPage
      this.$emit('handlePageChange', currentPage)
      // 在此刷新数据
    },
  },
  beforeMount: function() {
    //挂载前状态
  },
}
</script>

<style scoped>
.bd-left {
  float: left;
  width: 890px;
  flex: 1;
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
  padding: 10px 0;
  text-align: left;
}
.lst-news {
  margin-top: 1px;
  padding: 0 10px 20px 10px;
  overflow: hidden;
}
.project-item {
  display: flex;
  justify-content: left;
  padding: 16px 0;
  border-bottom: 1px dashed #dbdbdb;
}
.project-item .headimg {
  width: 260px;
  height: 147px;
  border: 1px solid #eee;
  margin-right: 30px;
  max-width: 100%;
}
.project-item .item-content {
  flex: 1;
  height: 147px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.news-title {
  line-height: 34px;
  font-size: 18px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  padding-top: 5px;
  text-align: left;
}
.news-detail {
  margin-top: 10px;
  color: #888;
  height: 48px;
  font-size: 14px;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.project-item .item-foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #888;
}
.pub-avatar {
  display: inline-block;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  vertical-align: middle;
  display: none;
}
.project-item .name span {
  margin-left: 10px;
}
.project-item .value {
  display: flex;
  justify-content: left;
  align-items: center;
}
.read-num {
  margin-right: 10px;
  width: 22px;
  height: 12px;
  max-width: 100%;
}
</style>
