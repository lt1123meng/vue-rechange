<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import {GetUserInfo} from '@/api/api'

  export default {
    name: 'App',
    created() {
      if (this.$route.query.oid) {
        sessionStorage.oid = this.$route.query.oid
      }
      GetUserInfo().then((res) => {
        console.log(res)
        this.$root.info = res.data
      })
    }
  }
</script>

<style>

</style>
