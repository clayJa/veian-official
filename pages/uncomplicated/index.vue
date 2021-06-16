<template>
  <div>
    <Header></Header>
    <div class="banner">
      <div class="content">
        <img :src="bannerObj.image" alt="">
        <div class="text">
            <div class="home_banner_title1 mt160">{{bannerObj.title_en}}</div>
            <div class="home_banner_title2">{{bannerObj.name}}</div>
            <div class="home_banner_title3">{{bannerObj.description}}</div>
            <PillButton @click="toPath">联系我们</PillButton>
        </div>
      </div>
    </div>
    <PictureGrid hasMore />
    <Join />
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
import Join from '@/components/Join/index.vue'
import PictureGrid from '@/components/PictureGrid/index.vue'
export default {
   name: 'index',
  data() {
    return {
      bannerObj: {

      }
    }
  },
  mounted() {
    this.getPageData()
  },
  methods: {
    toPath() {
      this.$router.push('/contact')
    },
    async getPageData() {
      const menuMap = localStorage.getItem('menuMap') ? JSON.parse(localStorage.getItem('menuMap')) : {}
      const res = await this.$store.dispatch('getPageData',{id: menuMap[this.$nuxt.$route.path]})
      const data = res.data[0] || {}
      this.bannerObj = {
        image: `/imageHost/${data.cover_picture ? data.cover_picture[0] : ''}`,
        ...data
      }
    }
  },
  components: {
    Header,
    Footer,
    Join,
    PictureGrid,
  }
}
</script>

<style lang="less" scoped>
.banner {
  .content {
    position: relative;
    img {
      width: 100%;
    }
    .text {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      text-align: center;
    }
    .mt160 {
      margin-top: 160px;
    }
    .home_banner_title1 {
      font-family: PingFangSC-Regular;
      font-size: 18px;
      color: #FFFFFF;
      line-height: 32px;
      text-transform: uppercase;
    }
    .home_banner_title2 {
      padding: 24px 0;
      font-family: PingFangSC-Semibold;
      font-size: 72px;
      color: #FFFFFF;
      letter-spacing: 0.51px;
    }
    .home_banner_title3 {
      font-family: PingFangSC-Light;
      font-size: 32px;
      color: #FFFFFF;
      letter-spacing: 0.4px;
      line-height: 42px;
      padding-bottom: 48px;
    }
  }
  @media only screen and (max-width: 760px) {
    height: 600px;
    .content {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit:cover;
      }
      .text {
        padding-left: 16px;
        text-align: left;
      }
      .mt160 {
        margin-top: 143px;
      }
      .home_banner_title1 {
        font-size: 14px;
        line-height: 32px;
        text-align: left;
      }
      .home_banner_title2 {
        text-align: left;
        max-width: 8em;
        padding: 24px 0;
        font-size: 40px;
        font-weight: 600;
        line-height: 56px;
      }
      .home_banner_title3 {
        text-align: left;
        font-size: 24px;
        line-height: 42px;
        margin-bottom: 32px;
      }
    }
  }
}
</style>
