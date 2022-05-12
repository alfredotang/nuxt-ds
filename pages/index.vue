<template>
  <div>
    <div>home</div>
    <client-only>
      <template v-if="isNeedLoginStoreReady">
        <div>{{ faker2Country }}</div>
        <page-block :data="faker2Data" />
      </template>
    </client-only>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PageBlock from '~/components/page-block'

export default {
  // async asyncData({ isDev, route, store, env, params, query, req, res, redirect, error }) {
  //   await store.dispatch('onBeforeCreate')
  // },
  components: {
    PageBlock,
  },
  computed: {
    ...mapGetters({
      faker2Country: 'faker2/faker2Country',
      faker2Data: 'faker2/faker2Data',
      isNeedLoginStoreReady: 'user/isNeedLoginStoreReady',
      isLogin: 'user/isLogin',
    }),
  },
  methods: {
    ...mapActions({
      fetchFaker2Country: 'faker2/fetchFaker2Country',
    }),
  },
}
</script>
