<template>
  <div>
    <Header></Header>
    <ConfidenceBanner
      :imgae="bannerObj.image"
      :title="bannerObj.name"
      :info="bannerObj.description"
      class="banner"
     />
     <div class="list-wrapper">
      <div class="sharp"></div>
      <div class="list-image clearfix">
        <div class="image-item" v-for="item in imageList" :key="item.title">
          <img :src="item.image" alt="">
          <div class="image-info">
            <div class="title">{{item.title}}</div>
            <div class="info">{{item.info}}</div>
          </div>
        </div>
      </div>
     </div>
     <div class="part2">
       <div class="title-wrapper">
         <div class="part2-title">微信小程序</div>
        <div class="part2-info">随着业务介质的不断改变，商业规模不断扩大，标准电商业务流程，已无法满足企业在电商业务上的深度定制需求。电商定制开发可以根据客户自身的业务特点以及业务模式进行业务规划，量身定制电商业务系统。</div>
       </div>
       <div class="image-wrapper">
         <img src="@/static/trust/develop/dsdzkf_image.png" alt="">
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
import Discover from '@/components/confidence/Discover/index.vue'
import ProjectStep from '@/components/confidence/ProjectStep/index.vue'
export default {
  data() {
    return {
      imageList: [
        { image: require('@/static/trust/develop/dsdzkf_image1.png'), title: 'B2C', info: '看看微信体量就知道、推广方便' },
        { image: require('@/static/trust/develop/dsdzkf_image2.png'), title: '销售', info: '扫一扫、附近、搜索、分享...' },
        { image: require('@/static/trust/develop/dsdzkf_image3.png'), title: '数据', info: '用户体验方便到极致，不用下载很方便' },
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
    max-width: 13em;
  }
}
.list-wrapper {
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
  @media only screen and (max-width: 760px){
     .sharp {
      width: 176px;
      height: 176px;
      left: auto;
      right: 16px;
      top: 56px;
    }
  }
}
.list-image {
  padding: 144px 93px 199px 135px;
  text-align: center;
  img {
    width: 100%;
    height: 100%;
    border-radius: 24px;
  }
  .image-item {
    width: 320px;
    position: relative;
    border-radius: 24px;
    margin-right: 84px;
    display: inline-block;
    vertical-align: top;
    .image-info {
      position: absolute;
      left: 62px;
      bottom: -55px;
      width: 300px;
      background: #FFFFFF;
      box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.1);
      border-radius: 16px;
      padding-top: 30px;
      padding-left: 32px;
      padding-bottom: 30px;
      text-align: left;
      .title {
        font-size: 22px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #3D3D3D;
        line-height: 30px;
      }
      .info {
        max-width: 238px;
        font-size: 14px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #A5A5A5;
        line-height: 20px;
        margin-top: 4px;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    padding: 96px 16px;
    padding-right: 39px;
    img {
      border-radius: 24px;
    }
    .image-item {
      width: 100%;
      position: relative;
      border-radius: 24px;
      margin-right: 0;
      margin-bottom: 85px;
      &:last-child {
        margin-bottom: 0;
      }
      .image-info {
        position: absolute;
        left: 43px;
        bottom: -55px;
        width: 300px;
        background: #FFFFFF;
        box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.1);
        border-radius: 16px;
        padding-top: 30px;
        padding-left: 32px;
        padding-bottom: 30px;
        text-align: left;
        .title {
          font-size: 22px;
          font-family: PingFangSC-Light, PingFang SC;
          font-weight: 300;
          color: #3D3D3D;
          line-height: 30px;
        }
        .info {
          max-width: 238px;
          font-size: 14px;
          font-family: PingFangSC-Light, PingFang SC;
          font-weight: 300;
          color: #A5A5A5;
          line-height: 20px;
          margin-top: 4px;
        }
      }
    }
  }
}
.part2 {
  padding: 96px 135px;
  background: #fff;
  .image-wrapper {
    text-align: center;
    margin-top: 80px;
    img {
      width: 945px;
      height: 680px;
    }
  }
  .part2-title {
    font-size: 56px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #474747;
    line-height: 80px;
  }
  .part2-info {
    font-size: 20px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #474747;
    line-height: 32px;
    margin-top: 24px;
  }
  @media only screen and (max-width: 760px) {
    padding: 96px 16px;
    .image-wrapper {
      margin-top: 48px;
      img {
        width: 100%;
        height: auto;
      }
    }
    .part2-title {
      font-size: 40px;
      line-height: 56px;
    }
    .part2-info {
      font-size: 20px;
      line-height: 32px;
      margin-top: 48px;
    }
  }
}
</style>
