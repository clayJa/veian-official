<template>
  <div>
    <Header></Header>
    <ConfidenceBanner
      :imgae="require('@/static/trust/creativity/qjxnxs_banner.jpg')"
      title="全景虚拟现实"
      info="运用极致思维，塑造沉浸式的场景，向虚拟现实世界沉浸，开启全新的体验方式"
     />
     <div class="list-image clearfix">
       <div class="sharp"></div>
       <div class="image-item" v-for="item in imageList" :key="item.infoZh">
         <img :src="item.image" alt="">
         <div class="image-info">
           <span class="zh-title">{{item.infoZh}}</span>
           <span class="en-title">{{item.infoEn}}</span>
         </div>
       </div>
     </div>
     <div class="part2 clearfix">
       <div class="title-wrapper">
        <div class="part2-title">全景虚拟现实</div>
        <div class="part2-info">全景虚拟场景化的影像，是根据现实基制作生成真实度更强，利用全景信息优秀的交互性，增加品牌、业务为目的控制表达更多的图像信息。经过对图像的透视处理模拟真实三维实景。</div>
       </div>
       <div class="image-video">
         <img src="@/static/trust/creativity/qjxnxs_glasses.png" alt="">
       </div>
     </div>
    <Discover />
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
import ConfidenceBanner from '@/components/confidence/ConfidenceBanner/index.vue'
import Discover from '@/components/confidence/Discover/index.vue'
export default {
  data() {
    return {
      imageList: [
        { image: require('@/static/trust/creativity/qjxnxs_image1.png'), infoZh: '塑造', infoEn: 'Shape' },
        { image: require('@/static/trust/creativity/qjxnxs_image2.png'), infoZh: '传达', infoEn: 'Convey' },
        { image: require('@/static/trust/creativity/qjxnxs_image3.png'), infoZh: '沉浸', infoEn: 'Immersed' },
      ]
    }
  },
  methods: {
  },
  components: {
    Header,
    Footer,
    ConfidenceBanner,
    Discover,
  }
}
</script>

<style lang="less" scoped>
.list-image {
  padding: 144px 135px;
  position: relative;
  .sharp {
    position: absolute;
    width: 176px;
    height: 176px;
    right: 91px;
    top: 76px;
    z-index: 0;
    background-image: url('@/static/Combined_Shape_333.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
  }
  .image-item {
    float: left;
    width: 370px;
    margin-right: 30px;
    position: relative;
    background: #FFFFFF;
    box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    &:last-child {
      margin-right: 0;
    }
    .image-info {
      position: absolute;
      left: 32px;
      bottom: 32px;
      width: 146px;
      height: 48px;
      background: #FFFFFF;
      border-radius: 24px;
      font-size: 14px;
      color: #474747;
      line-height: 48px;
      text-align: center;
      .zh-title {
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
      }
      .en-title {
        font-family: PingFang SC;
        font-weight: 300;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    padding: 96px 16px;
    .sharp {
      position: absolute;
      width: 176px;
      height: 176px;
      right: 0;
      top: 56px;
      z-index: 0;
      background-image: url('@/static/Combined_Shape_333.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
    .image-item {
      float: none;
      width: 100%;
      margin-right: 0px;
      box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      margin-bottom: 30px;
      &:last-child {
        margin-bottom: 0;
      }
      .image-info {
        left: 32px;
        bottom: 32px;
        width: 146px;
        height: 48px;
        border-radius: 24px;
        font-size: 14px;
        line-height: 48px;
      }
    }
  }
}
.part2 {
  padding: 150px 135px 85px 56px;
  background: #F7F7F7;
  img {
    width: 100%;
    height: 100%;
  }
  .title-wrapper {
    float: right;
    margin-top: 44px;
  }
  .image-video {
    float: left;
    width: 640px;
  }
  .part2-title {
    max-width: 492px;
    font-size: 56px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #474747;
    line-height: 64px;
    line-height: 80px;
  }
  .part2-info {
    max-width: 492px;
    font-size: 20px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #474747;
    line-height: 32px;
    margin-top: 48px;
  }
  @media only screen and (max-width: 760px) {
    padding: 96px 16px;
    img {
      width: 100%;
      height: 100%;
    }
    .title-wrapper {
      float: none;
      margin-top: 0;
    }
    .image-video {
      float: none;
      width: 100%;
      margin-top: 48px;
    }
    .part2-title {
      max-width: 100%;
      font-size: 40px;
      line-height: 56px;
    }
    .part2-info {
      max-width: 100%;
      font-size: 20px;
      line-height: 32px;
      margin-top: 48px;
    }
  }
}
</style>
