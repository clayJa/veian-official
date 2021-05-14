<template>
  <div>
    <Header></Header>
    <Banner />
    <PictureGrid />
    <ServiceContent />
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
import PictureGrid from '@/components/PictureGrid/index.vue'
import Banner from '@/components/index/Banner/index.vue'
import ServiceContent from '@/components/index/ServiceContent/index.vue'
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
    PictureGrid,
    ServiceContent,
  }
}
</script>

<style lang="less" >
</style>
