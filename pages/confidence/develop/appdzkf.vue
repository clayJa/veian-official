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
       <div class="image-item" v-for="item in imageList" :key="item.title">
         <img :src="item.image" alt="">
         <div class="image-info">
           <span class="zh-title">{{item.title}}</span>
         </div>
       </div>
     </div>
     <div class="part2 clearfix">
       <div class="title-wrapper">
        <div class="part2-title">APP</div>
        <div class="part2-info">如果希望在移动端搭建有自己专属的业务平台，形成独有的可掌控的会员、商品、营销数据资源，那么建议您使用APP开发。APP基于移动系统建立个性化的拓展应用，不仅可以提供更出色的用户交互体验，同时可以给予更丰富的业务功能。</div>
       </div>
       <div class="image-video">
         <img src="@/static/trust/develop/appdzkf_app.png" alt="">
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
        { image: require('@/static/trust/develop/appdzkf_image1.png'), title: '可拓展性强' },
        { image: require('@/static/trust/develop/appdzkf_image2.png'), title: '数据归属唯一' },
        { image: require('@/static/trust/develop/appdzkf_image3.png'), title: '客户关系强关联'},
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
    ProjectStep,
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
  padding: 144px 135px 96px 135px;
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
      border-radius: 8px;
    }
    .image-item {
      float: none;
      width: 100%;
      margin-right: 0;
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
  }
}
.part2 {
  padding: 96px 135px 144px 122px;
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
    line-height: 80px;
    margin-top: 122px;
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
      margin-top: 0;
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
