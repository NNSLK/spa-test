import Vue from 'vue'
import Vuex from 'vuex'
import user from './user.js'
import shared from './shared.js'
import Axios from 'axios';

Vue.use(Vuex)
export let client = null;
let errorInterceptor;

export default new Vuex.Store({
  state: {},
  mutations: {
    init(_) {
      if (errorInterceptor) {
        client.interceptors.response.eject(errorInterceptor);
      }
      client = Axios.create({
        baseURL: 'https://emphasoft-test-assignment.herokuapp.com/',
        //headers: { Authorization: `Bearer ${API_TOKEN}` }
      });
      errorInterceptor = client.interceptors.response.use(
        (config) => config,
        (error) => {
          if (error.response.status === 401) {
            //
          }
          return Promise.reject(error.response);
        },
      );
    },
  },
  actions: {
    async authUser({
      commit
    }, {
      username,
      password
    }) {
      const {
        data
      } = await client.post(`api-token-auth/`, {
        username,
        password
        // returnSecureToken: true
      })
      commit('setToken', data.token)
    },
  },
  modules: {
    user,
    shared

  }
})