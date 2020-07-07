<template>
  <div id="app">
    <div id="nav">
      <div></div>
    </div>
    <router-view/>
  </div>
</template>

<script>

// import { mapState } from 'vuex'

export default {
  name: 'app'
  // mounted () {
  //   this.$store.dispatch('register')
  // },
  // computed: {
  //   ...mapState([
  //     'payload'
  //   ])
  // }
}
</script>

<style lang="scss">

</style>
