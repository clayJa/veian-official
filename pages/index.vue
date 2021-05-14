<template>
  <div>
    <Header></Header>
    <Banner />
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
import Banner from '@/components/index/Banner/index.vue'
export default {
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
    Header,
    Footer,
    Banner,
  }
}
</script>

<style lang="less" >
</style>
