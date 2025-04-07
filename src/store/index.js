import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    leftSide:[], //左侧导航数据
    cetidetail:{} //证书详情
  },
  getters: {
  },
  mutations: {
    setLeftSide(state, data) {
      state.leftSide = data
    },
    setcetidetail(state, data) {
      state.cetidetail = data
    }
  },
  actions: {
  },
  modules: {
  }
})
