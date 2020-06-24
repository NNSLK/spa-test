import Vue from 'vue'
import Vuex from 'vuex'
import user from './user.js'
import shared from './shared.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    shared

  }
})