<template>
  <div>
    <header class="p-6 flex justify-center items-center flex space-x-5">
      <nav class="space-x-5 flex-1">
        <nuxt-link
          v-for="item in routeList"
          :key="item.name"
          :to="item.href"
          class="bg-green-500 p-3 rounded text-white shadow hover:bg-green-400 hover:shadow-md"
          >{{ item.name }}</nuxt-link
        >
      </nav>
      <nav class="space-x-5 flex">
        <button
          class="bg-blue-500 p-3 rounded text-white shadow hover:bg-blue-400 hover:shadow-md"
          @click="loginHandler"
        >
          {{ loginValue }}
        </button>
      </nav>
    </header>
    <main class="text-red p-5 text-center">
      <nuxt />
    </main>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  // middleware: ['register-store'],
  // async fetch({ store }) {
  //   console.log('==== fetch ====')
  //   await store.dispatch('onBeforeCreate')
  // },
  data() {
    return {
      readyToRender: false,
    }
  },
  computed: {
    ...mapGetters({
      isLogin: 'user/isLogin',
    }),
    routeList() {
      return [
        { name: 'home', href: '/' },
        { name: 'about', href: '/about' },
        // { name: ' hello', href: '/hello' },
      ]
    },
    loginValue() {
      if (this.isLogin) return 'logout'
      return 'login'
    },
  },
  methods: {
    ...mapActions({
      onLogin: 'user/onLogin',
      onLogout: 'user/onLogout',
      onBeforeCreate: 'onBeforeCreate',
    }),
    loginHandler() {
      if (this.isLogin) {
        this.onLogout()

        return
      }

      this.onLogin()
    },
  },
  // async mounted() {
  //   console.log('==== layout mounted ====')
  //   await this.onBeforeCreate()
  //   console.log('==== layout mounted finish ====')
  // },
  async beforeCreate() {
    console.log('==== layout beforeCreate ====')
    await this.$store.dispatch('onBeforeCreate')
    console.log('==== layout beforeCreate finish ====')
  },
}
</script>

<style scoped>
.nuxt-link-exact-active {
  background-color: #ff5545 !important;
}
</style>
