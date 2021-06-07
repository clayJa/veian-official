<template>
  <div>
    <Header></Header>
    <ConfidenceBanner
      :imgae="require('@/static/trust/operation/wzdyy_banner.jpg')"
      title="网站运营维护"
      class="banner"
      info="让您更省心的聚焦于经营的核心"
     />
     <div class="list-image">
       <div class="sharp"></div>
       <div class="list-wrapper clearfix">
        <div class="image-item" v-for="item in imageList" :key="item.title">
          <img :src="item.image" alt="">
          <div class="image-info">
            <span class="zh-title">{{item.title}}</span>
          </div>
        </div>
       </div>
     </div>
    <div class="service">
      <div class="title">优势</div>
      <div class="sub-title">整体系统化运作、专业化思考、规范化的流程管理，让您不仅省心，而且安心</div>
      <div class="service-list clearfix">
        <div class="service-item" v-for="item in serviceList" :key="item.title">
          <div class="image"><img :src="item.image" alt=""></div>
          <div class="title">{{ item.title }}</div>
          <div class="info">{{ item.info }}</div>
        </div>
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
        { image: require('@/static/trust/operation/wzdyy_image1.png'), title: '省时' },
        { image: require('@/static/trust/operation/wzdyy_image2.png'), title: '省心' },
        { image: require('@/static/trust/operation/wzdyy_image3.png'), title: '贴心'},
      ],
      serviceList: [
        { image: require('@/static/trust/operation/wzdyy_icon1.png'), title: '资源丰富',
          info: '建站专业人员为您提供高品质的资源调度，为您提供网站规划以及建设服务' },
        { image: require('@/static/trust/operation/wzdyy_icon2.png'), title: '经验丰富',
          info: '我们的团队拥有深层次的从业经验' },
        { image: require('@/static/trust/operation/wzdyy_icon3.png'), title: '专家团队',
          info: '丰富且资深的团队资源、市场前沿实战团队让客户少走弯路' },
      ],
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
    position: relative;
    .sharp {
      position: absolute;
      width: 176px;
      height: 176px;
      right: 16px;
      top: 56px;
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
      }
    }
  }
}
.service {
  text-align: center;
  .title {
    font-size: 56px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #474747;
    line-height: 80px;
  }
  .sub-title {
    font-size: 20px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #474747;
    line-height: 32px;
    margin-top: 24px;
  }
  .service-list {
    margin-top: 64px;
    padding: 0 135px;
    margin-bottom: 100px;
    .service-item {
      float: left;
      margin-right: 105px;
      &:last-child {
        margin-right: 0;
      }
      .image {
        display: inline-block;
        width: 200px;
        img {
          width: 100%;
        }
      }
      .title {
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #474747;
        line-height: 42px;
        margin-top: 32px;
      }
      .info {
        max-width: 320px;
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #A6AAB1;
        line-height: 32px;
        margin-top: 12px;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    .title {
      font-size: 40px;
      line-height: 56px;
      margin-bottom: 24px;
    }
    .sub-title {
      font-size: 20px;
      line-height: 32px;
      margin-top: 0;
      padding: 0 16px;
      margin: auto;
    }
    .service-list {
      margin-top: 64px;
      padding: 0;
      margin-bottom: 96px;
      .service-item {
        float: none;
        margin-right: 0;
        margin-bottom: 64px;
        text-align: center;
        &:last-child {
          margin-right: 0;
          margin-bottom: 0;
        }
        .image {
          display: inline-block;
          width: 200px;
          img {
            width: 100%;
          }
        }
        .title {
          font-size: 24px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #474747;
          line-height: 42px;
          margin-top: 32px;
        }
        .info {
          max-width: 320px;
          font-size: 18px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #A6AAB1;
          line-height: 32px;
          margin-top: 12px;
          margin: auto;
        }
      }
    }
  }
}
</style>
