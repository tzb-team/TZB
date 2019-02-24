import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'

Vue.use(Vuex);

// const store = new Vuex.Store({
//   // 定义状态
//   state: {
//     author: '基本信息'
//   },
//   mutations:{
//     newAuthor (state,msg){
//       state.author = msg
//     }
//
//   }
// })
//
// export default store

export default new Vuex.Store({
  state: {
    user: {},
    token: null,
    title: '',
  },
  mutations: {
    [types.LOGIN]: (state, data) => {
      localStorage.token = data
      state.token = data
    },
    [types.LOGOUT]: (state) => {
      localStorage.removeItem('token')
      state.token = null
    },
    [types.TITLE]: (state, data) => {
      state.title = data
    }
  }
})

