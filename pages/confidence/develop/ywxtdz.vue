<template>
  <div>
    <Header></Header>
    <ConfidenceBanner
      :imgae="require('@/static/trust/develop/ywxtdz_banner.jpg')"
      title="业务系统定制"
      class="banner"
      info="升级企业的个性化管理，并提高效率"
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
     <div class="part2">
       <div class="title-wrapper">
        <div class="part2-title d-md-none">数字化转型 <span style="font-weight: 300;">(Digital transformation)</span></div>
        <div class="part2-title d-md-block d-none">数字化转型 <br /><span style="font-size: 20px;line-height: 1;">(Digital transformation)</span></div>
        <div class="part2-info">是建立在数字化建立、数字化转换 、数字化复盘、数字化升级基础上，进一步渗透核心业务，以不断从塑进化商业模式为目标的高层次转型。业务系统定制充实了数字化转型的每一个过程。</div>
       </div>
       <div class="image-wrapper">
         <img src="@/static/trust/develop/ywxtdz_image.png" alt="">
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
        { image: require('@/static/trust/develop/ywxtdz_image1.png'), title: '提升效率' },
        { image: require('@/static/trust/develop/ywxtdz_image2.png'), title: '拓展品牌' },
        { image: require('@/static/trust/develop/ywxtdz_image3.png'), title: '降低成本'},
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
    ProjectStep,
  }
}
</script>

<style lang="less" scoped>
.banner {
  /deep/ .content .text .info {
    max-width: 11em;
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
      right: 16px;
      top: 56px;
      z-index: 0;
    }
    img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
    }
    .image-item {
      float: none;
      width: 100%;
      margin-right: 0;
      margin-bottom: 30px;
      box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      &:last-child {
        margin-bottom: 0;
      }
      .image-info {
        position: absolute;
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
  padding: 96px 135px;
  img {
    width: 100%;
    height: 100%;
  }
  .image-wrapper {
    width: 100%;
  }
  .part2-title {
    font-size: 56px;
    font-family: PingFang SC;
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
    img {
      width: 100%;
      height: 100%;
    }
    .image-wrapper {
      width: 100%;
    }
    .part2-title {
      font-size: 40px;
      line-height: 40px;
      margin-bottom: 16px;
    }
    .part2-info {
      font-size: 20px;
      line-height: 32px;
      margin-top: 24px;
      margin-bottom: 24px;
    }
  }
}
</style>
