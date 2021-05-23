<template>
  <div>
    <Header></Header>
    <ConfidenceBanner
      :imgae="require('@/static/trust/creativity/spszhyy_banner.jpg')"
      title="视频数字化应用"
      info="用更全面、更生动、更贴切的方式，塑造更饱满、立体、鲜活的品牌形象。给您的客户讲故事"
     />
     <div class="list-image clearfix">
       <div class="image-item" v-for="item in imageList" :key="item.infoZh">
         <img :src="item.image" alt="">
         <div class="image-info">
           <span class="zh-title">{{item.infoZh}}</span>
           <span class="en-title">{{item.infoEn}}</span>
         </div>
       </div>
     </div>
     <div class="part2 clearfix">
       <div class="image-video">
         <img src="@/static/trust/creativity/spszhyy_image_video.png" alt="">
       </div>
       <div class="title-wrapper">
        <div class="part2-title">满足您在不同场景下的视频应用需要</div>
        <div class="part2-info">专业视频导演、拍摄、剪辑团队为您提供多种形式并极具创意的视频作品。</div>
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
        { image: require('@/static/trust/creativity/spszhyy_image1.png'), infoZh: '表现', infoEn: 'Expression' },
        { image: require('@/static/trust/creativity/spszhyy_image2.png'), infoZh: '应用', infoEn: 'Application' },
        { image: require('@/static/trust/creativity/spszhyy_image3.png'), infoZh: '传达', infoEn: 'Convey' },
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
    box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
    border-radius: 24px;
    padding: 24px;
    &:last-child {
      margin-right: 0;
    }
    .image-info {
      position: absolute;
      left: 56px;
      bottom: 54px;
      font-size: 24px;
      color: #FFFFFF;
      line-height: 32px;
      .zh-title {
        font-family: PingFangSC-Medium;
        font-weight: 500;
      }
      .en-title {
        font-family: PingFang SC;
        font-weight: 300;
      }
    }
  }
}
.part2 {
  padding: 140px 135px 110px 100px;
  background: #1A82FF;
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
    max-width: 492px;
    font-size: 56px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 80px;
  }
  .part2-info {
    max-width: 492px;
    font-size: 20px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #FFFFFF;
    line-height: 32px;
    margin-top: 48px;
  }
  .user-centered-design {
    padding-bottom: 144px;
    .left-model {
      float: left;
      width: 685px;
      img {
        width: 100%;
      }
    }
    .feature {
      float: right;
      .feature-item {
        margin-bottom: 48px;
        .title {
          position: relative;
          font-size: 24px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #1A82FF;
          line-height: 33px;
          margin-bottom: 8px;
          .line {
            position: absolute;
            left: 0;
            top: 50%;
            transform: translate(-156px,-50%);
            width: 100px;
            border-bottom: 1px dashed #1A82FF;
          }
          .dot {
            right: 0;
            top: 50%;
            transform: translate(16px,-50%);
            position: absolute;
            width: 10px;
            height: 10px;
            background: #1A82FF;
            border-radius: 50%;
          }
        }
        .info {
          position: relative;
          font-size: 20px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #474747;
          line-height: 30px;
          &::after {
            position: absolute;
            content: '·';
            left: -1em;
          }
        }
      }
    }
  }
}
</style>
