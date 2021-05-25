<template>
  <div>
    <Header></Header>
    <ConfidenceBanner
      :imgae="require('@/static/trust/develop/h5dzkf_banner.jpg')"
      title="H5定制开发"
      info="H5的创新性，始终是用户聚焦的需求阵地"
     />
     <div class="list-wrapper">
      <div class="sharp"></div>
      <div class="list-image clearfix">
        <div class="image-item" v-for="item in imageList" :key="item.infoZh">
          <img :src="item.image" alt="">
          <div class="image-info">
            <div class="zh-title">{{item.infoZh}}</div>
            <div class="en-title">{{item.infoEn}}</div>
          </div>
        </div>
      </div>
     </div>
     <div class="part2 clearfix">
        <div class="image-wrapper">
          <img src="@/static/trust/develop/h5dzkf_HTML5.png" alt="">
        </div>
        <div class="title-wrapper">
          <div class="part2-title">HTML5</div>
          <div class="part2-info">H5作为新型的宣传手段途径，与传统的图文广告有着先天的差异以及优势。标新立异的H5作品，在宣传效果也十分理想。</div>
          <div class="part2-info">社交为王的新媒体时代，H5已经不仅仅在宣传体验，而是向不同行业的业务层、品宣方面不断深入。</div>
        </div>
     </div>
    <ProjectStep />
    <Discover />
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
import ConfidenceBanner from '@/components/confidence/ConfidenceBanner/index.vue'
import ProjectStep from '@/components/confidence/ProjectStep/index.vue'
import Discover from '@/components/confidence/Discover/index.vue'
export default {
  data() {
    return {
      imageList: [
        { image: require('@/static/trust/develop/h5dzkf_image1.png'), infoZh: '传播策略' },
        { image: require('@/static/trust/develop/h5dzkf_image2.png'), infoZh: 'IP打造' },
        { image: require('@/static/trust/develop/h5dzkf_image3.png'), infoZh: '多媒体矩阵' },
        { image: require('@/static/trust/develop/h5dzkf_image4.png'), infoZh: '用户运营' },
      ]
    }
  },
  methods: {
  },
  components: {
    Header,
    Footer,
    ConfidenceBanner,
    ProjectStep,
    Discover,
  }
}
</script>

<style lang="less" scoped>
.list-wrapper {
  position: relative;
  .sharp {
    position: absolute;
    width: 176px;
    height: 176px;
    right: 189px;
    top: 64px;
    z-index: 0;
    background-image: url('@/static/Combined_Shape_333.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}
.list-image {
  padding: 152px 135px 135px 114px;
  img {
    width: 100%;
    height: 100%;
  }
  .image-item {
    float: left;
    width: 570px;
    margin-right: 30px;
    margin-bottom: 30px;
    position: relative;
    &:nth-child(2n) {
      margin-right: 0;
    }
    .image-info {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 276px;
      height: 103px;
      background: #FFFFFF;
      border-radius: 0px 24px 0px 24px;
      padding-top: 36px;
      padding-left: 48px;
      .zh-title {
        font-size: 32px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #474747;
        line-height: 32px;
      }
    }
  }
}
.part2 {
  background: #F5F5F5;
  .image-wrapper {
    float: left;
    width: 805px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .title-wrapper {
    float: left;
    margin-left: 79px;
  }
  .part2-title {
    font-size: 56px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #474747;
    line-height: 80px;
    margin-top: 276px;
  }
  .part2-info {
    max-width: 421px;
    font-size: 20px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #474747;
    line-height: 32px;
    margin-top: 24px;
  }
}
</style>
