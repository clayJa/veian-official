<template>
  <div>
    <Header></Header>
    <Banner />
    <PictureGrid />
    <ServiceContent />
    <About />
    <News />
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
import PictureGrid from '@/components/PictureGrid/index.vue'
import Banner from '@/components/index/Banner/index.vue'
import ServiceContent from '@/components/index/ServiceContent/index.vue'
import About from '@/components/index/About/index.vue'
import News from '@/components/index/News/index.vue'
export default {
  data() {
    return {
    }
  },
  mounted() {
    this.fetchModuleConfig()
  },
  methods: {
    async fetchModuleConfig() {
      const menuMap = localStorage.getItem('menuMap') ? JSON.parse(localStorage.getItem('menuMap')) : {}
      await this.$store.dispatch('fetchModuleConfig',{id: menuMap[this.$nuxt.$route.path]})
    }
  },
  components: {
    Header,
    Footer,
    Banner,
    PictureGrid,
    ServiceContent,
    About,
    News,
  }
}
</script>

<style lang="less" >
</style>
