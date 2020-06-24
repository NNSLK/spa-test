<template>
  <div class="wrapper">

    <header>
      <div class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">Spa Test</div>
            <ul class="navbar-list">
              <li class="navbar-item" v-for="link in links" :key="link.title">
                <router-link class="navbar-link" :title="link.title" :to="link.url">{{ link.title }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>

    <router-view></router-view>

    <!-- ERROR -->
    <template v-if="error">
      <v-snackbar
        @input="closeError"
        :value="true"
        :color="error"
        :multi-line="mode === 'multi-line'"
        :timeout="5000"
      >
        {{error}}
        <v-btn dark text @click="closeError">Close</v-btn>
      </v-snackbar>
    </template>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      links: [
        { title: 'Home', url: '/' },
        { title: 'users', url: '/users' },
        { title: 'login', url: '/login' },
      ]
    }
    },
  methods: {
    closeError() {
      this.$store.dispatch("clearError");
    },
    onLogout () {
      this.$store.dispatch("logoutUser");
      this.$router.push('/')
    }
  },
  computed: {
    error() {
      return this.$store.getters.error;
    }
  }
}
</script>

<style lang="scss">
.navbar-link {
  &.router-link-exact-active {
    color: #5247e7;
  }
}
</style>
