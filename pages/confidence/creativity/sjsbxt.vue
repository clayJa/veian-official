<template>
  <div>
    <Header></Header>
    <ConfidenceBanner
      :imgae="require('@/static/trust/creativity/sjsbxt_banner.jpg')"
      title="视觉识别系统"
      info="让您的识别系统符号具象化、视觉化、标识化的传达"
     />
     <div class="list-image clearfix">
       <div class="sharp"></div>
       <div class="image-item" v-for="item in imageList" :key="item.infoZh">
         <img :src="item.image" alt="">
         <div class="image-info">
           <div class="zh-title">{{item.infoZh}}</div>
           <div class="en-title">{{item.infoEn}}</div>
         </div>
       </div>
     </div>
     <div class="part2">
       <div class="title-wrapper">
        <div class="part2-title">视觉识别系统</div>
        <div class="part2-info">是企业品牌最外在、最直接、最具象化并且有传播力和感染力的外在视觉部分。将企业标识的基本要素，以规范化方针及形成系统有效地展开，形成企业固有的视觉规划，进而透视出经营者的理念、精神，有效地推广企业及其产品的知名度和形象。</div>
       </div>
       <div class="image-wrapper">
         <img src="@/static/trust/creativity/sjsbxt_image.jpg" alt="">
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
        { image: require('@/static/trust/creativity/sjsbxt_image1.png'), infoZh: '标识', infoEn: 'Logo' },
        { image: require('@/static/trust/creativity/sjsbxt_image2.png'), infoZh: '识别', infoEn: 'Identify' },
        { image: require('@/static/trust/creativity/sjsbxt_image3.png'), infoZh: '记忆', infoEn: 'Memory' },
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
  padding: 97px 135px 144px 135px;
  position: relative;
  background: #F7F7F7;
  .sharp {
    position: absolute;
    width: 176px;
    height: 176px;
    left: 87px;
    top: 248px;
    z-index: 0;
    background-image: url('@/static/Combined_Shape_333.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 24px;
  }
  .image-item {
    float: left;
    width: 370px;
    margin-right: 30px;
    position: relative;
    background: #FFFFFF;
    border-radius: 24px;
    &:last-child {
      margin-right: 0;
    }
    .image-info {
      position: absolute;
      left: 0;
      bottom: 0;
      font-size: 24px;
      width: 100%;
      height: 160px;
      background: #FFFFFF;
      border-radius: 24px;
      padding: 48px;
      .zh-title {
        font-size: 32px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #474747;
        line-height: 32px;
      }
      .en-title {
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #A6AAB1;
        line-height: 32px;
        margin-top: 12px;
      }
    }
  }
}
.part2 {
  padding: 96px 135px;
  background: #fff;
  img {
    width: 100%;
    height: 100%;
  }
  .title-wrapper {
    float: right;
    margin-top: 74px;
  }
  .image-video {
    float: left;
    width: 683px;
  }
  .part2-title {
    font-size: 56px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #474747;
    line-height: 64px;
  }
  .part2-info {
    font-size: 20px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #474747;
    line-height: 32px;
    margin-top: 24px;
    margin-bottom: 96px;
  }
}
</style>
