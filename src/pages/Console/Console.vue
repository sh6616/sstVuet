<template>
  <div class="Console">
    <Layout></Layout>
  </div>
</template>

<script>
import Layout from '../Layout/Layout'
export default {
  name: 'Console',
  components: {Layout},
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style scoped>

</style>
