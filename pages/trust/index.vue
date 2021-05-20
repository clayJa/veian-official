<template>
  <div>
    <Header></Header>
    <div class="banner">
      <div class="content">
        <img src="@/static/trust/trust_background.jpg" alt="">
        <div class="text">
            <div class="home_banner_title1 mt160">Welcome to weiran technology</div>
            <div class="home_banner_title2">全行业 全渠道</div>
            <div class="home_banner_title2">数字化企业服务</div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
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
      margin-bottom: 10px;
    }
    .home_banner_title2 {
      font-size: 72px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #FFFFFF;
      line-height: 100px;
    }
  }
}
</style>
