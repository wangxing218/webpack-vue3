/***
 * @file:
 * @author: wangxing
 * @Date: 2021-07-07 20:36:04
 */
import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    user: '这个好',
  },
  mutations: {
    user(state, data) {
      state.user = data
    },
  },
})

export default store
