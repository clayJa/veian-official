<template>
  <div>
    <Header></Header>
    <div class="banner">
      <div class="content">
        <img src="@/static/simple_background.jpg" alt="">
        <div class="text">
            <div class="home_banner_title1 mt160">Welcome to weiran technology</div>
            <div class="home_banner_title2">我们的价值是成就客户需求！</div>
            <div class="home_banner_title3">即：客户需求为先的价值取向</div>
            <PillButton @click="toPath">联系我们</PillButton>
        </div>
      </div>
    </div>
    <PictureGrid />
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
   name: 'simple',
  data() {
    return {
    }
  },
  methods: {
    toPath() {

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
}
</style>
