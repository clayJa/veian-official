<template>
  <div>
    <Header></Header>
    <ConfidenceBanner
      :imgae="bannerObj.image"
      :title="bannerObj.name"
      :info="bannerObj. description"
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
      ],
      bannerObj: {}
    }
  },
  mounted() {
    this.getPageData()
  },
  methods: {
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
    ConfidenceBanner,
    Discover,
  }
}
</script>

<style lang="less" scoped>
.list-image {
  padding: 97px 135px 144px 135px;
  position: relative;
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
  @media only screen and (max-width: 760px) {
      padding: 97px 16px;
      .sharp {
        position: absolute;
        width: 176px;
        height: 176px;
        right: 16px;
        top: 56px;
        left: auto;
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
        float: none;
        width: 100%;
        margin-right: 0;
        box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
        border-radius: 24px;
        padding: 24px;
        margin-bottom: 30px;
        &:last-child {
          margin-bottom: 0;
        }
        .image-info {
          left: 56px;
          bottom: 54px;
          font-size: 24px;
          line-height: 32px;
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
  @media only screen and (max-width: 760px) {
    padding: 96px 16px;
    img {
      width: 100%;
      height: 100%;
    }
    .title-wrapper {
      float: none;
      margin-top: 48px;
    }
    .image-video {
      float: none;
      width: 100%;
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
      margin-top: 24px;
    }
  }
}
</style>
