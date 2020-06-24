import Vue from 'vue'
import App from './App.vue'

import router from './routes'
import store from './store'
import * as fb from 'firebase'
import './assets/scss/main.scss'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  created() {
    fb.initializeApp({
      apiKey: "AIzaSyDO74VNm47fJ2e4O3cuOuIBEOryxyMN890",
      authDomain: "itc-ads-6a05c.firebaseapp.com",
      databaseURL: "https://itc-ads-6a05c.firebaseio.com",
      projectId: "itc-ads-6a05c",
      storageBucket: "itc-ads-6a05c.appspot.com",
      messagingSenderId: "60438506219",
      appId: "1:60438506219:web:2e26b17ded2ce5630fecae"
    })
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
    
  },
  render: h => h(App)
}).$mount('#app')