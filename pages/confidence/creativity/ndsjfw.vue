<template>
  <div>
    <Header></Header>
    <ConfidenceBanner
      :imgae="bannerObj.image"
      :title="bannerObj.name"
      :info="bannerObj.description"
      class="banner"
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
     <div class="part2 clearfix">
       <div class="title-wrapper">
        <div class="part2-title">保障日常运营留有高质量的运营素材供给</div>
        <div class="part2-info">在每一个运营特定结点为您提供充分的素材物料，使您的业务平台、品牌运营始终有优秀的高品质的内容输出并抵达给目标客群。</div>
       </div>
       <div class="image-wrapper">
         <img src="@/static/trust/creativity/ndsjfw_image.png" alt="">
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
        { image: require('@/static/trust/creativity/ndsjfw_image1.png'), infoZh: '运用', infoEn: 'Use' },
        { image: require('@/static/trust/creativity/ndsjfw_image2.png'), infoZh: '推广', infoEn: 'Promote' },
        { image: require('@/static/trust/creativity/ndsjfw_image3.png'), infoZh: '宣传', infoEn: 'Propaganda' },
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
.banner {
  /deep/ .content .text .info {
    max-width: 19em;
  }
}
.list-image {
  padding: 144px 159px;
  position: relative;
  .sharp {
    position: absolute;
    width: 176px;
    height: 176px;
    right: 189px;
    top: 56px;
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
    width: 322px;
    margin-right: 78px;
    position: relative;
    box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
    border-radius: 24px;
    &:last-child {
      margin-right: 0;
    }
    .image-info {
      position: absolute;
      left: -24px;
      right: -24px;
      bottom: 48px;
      height: 124px;
      background: #FFFFFF;
      border-radius: 15px;
      padding-top: 30px;
      padding-left: 64px;
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
        color: #474747;
        line-height: 22px;
        margin-top: 12px;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    padding: 96px 40px;
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
      border-radius: 24px;
    }
    .image-item {
      float: none;
      width: 100%;
      margin-right: 0;
      position: relative;
      box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
      border-radius: 24px;
      margin-bottom: 30px;
      &:last-child {
        margin-bottom: 0;
      }
      .image-info {
        left: -24px;
        right: -24px;
        bottom: 48px;
        height: 124px;
        border-radius: 15px;
        padding-top: 30px;
        padding-left: 64px;
        .zh-title {
          font-size: 32px;
          line-height: 32px;
        }
        .en-title {
          font-size: 16px;
          line-height: 22px;
          margin-top: 12px;
        }
      }
    }
  }
}
.part2 {
  padding: 96px 199px 96px 135px;
  background: #F7F7F7;
  img {
    width: 100%;
    height: 100%;
  }
  .title-wrapper {
    float: left;
    margin-top: 44px;
  }
  .image-wrapper {
    float: right;
    width: 360px;
    border-radius: 50%;
  }
  .part2-title {
    max-width: 521px;
    font-size: 56px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #474747;
    line-height: 80px;
  }
  .part2-info {
    max-width: 521px;
    font-size: 20px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #474747;
    line-height: 32px;
    margin-top: 24px;
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
    .image-wrapper {
      float: none;
      width: 100%;
      border-radius: 50%;
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
      margin-bottom: 48px;
    }
  }
}
</style>
