<template>
  <div>
    <Header></Header>
    <ConfidenceBanner
      :imgae="require('@/static/trust/develop/xcxdzkf_banner.jpg')"
      title="小程序定制开发"
      info="在微信流量池前沿，快速形成个性化的流量入口"
      class="banner"
     />
     <div class="list-image clearfix">
       <div class="image-item" v-for="item in imageList" :key="item.title">
         <img :src="item.image" alt="">
         <div class="image-info">
           <div class="title">{{item.title}}</div>
           <div class="info">{{item.info}}</div>
         </div>
       </div>
     </div>
     <div class="part2">
       <div class="title-wrapper">
         <div class="part2-title">微信小程序</div>
        <div class="part2-info">一种全新的连接用户与服务的方式，它可以在微信内被便捷地获取和传播，同时具有出色的使用体验。<br />小程序官方基于微信社交关系链，为小程序开放了大量的社交入口和社交功能，从而创造了小程序市场的更多商业机会。</div>
       </div>
       <div class="content-wrapper clearfix">
         <div class="list-wrapper">
           <div class="item" v-for="item in introList" :key="item.title">
             <div class="icon"><i class="iconfont" v-html="item.icon"></i></div>
             <div class="zh">{{ item.title }}</div>
             <div class="en">{{ item.en }}</div>
           </div>
         </div>
         <div class="mini-image">
           <img src="@/static/trust/develop/xcxdzkf_mini.png" alt="">
         </div>
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
        { image: require('@/static/trust/develop/xcxdzkf_imgae1.png'), title: '千亿级市场', info: '看看微信体量就知道、推广方便' },
        { image: require('@/static/trust/develop/xcxdzkf_imgae2.png'), title: '获取流程成本低', info: '扫一扫、附近、搜索、分享...' },
        { image: require('@/static/trust/develop/xcxdzkf_imgae3.png'), title: '更轻触达', info: '用户体验方便到极致，不用下载很方便' },
        { image: require('@/static/trust/develop/xcxdzkf_imgae4.png'), title: '功能全面', info: '可以开发各种想要的功能' },
        { image: require('@/static/trust/develop/xcxdzkf_imgae5.png'), title: '快速接入', info: '快速接入微信，入口规则清晰' },
        { image: require('@/static/trust/develop/xcxdzkf_imgae6.png'), title: '减轻手机负担', info: '安装微信就可以实现很多APP的功能' },
        { image: require('@/static/trust/develop/xcxdzkf_imgae7.png'), title: '减轻个人负担', info: '微信账号走天下，支付、会员、线上、线下' },
        { image: require('@/static/trust/develop/xcxdzkf_imgae8.png'), title: '基础设施好', info: '微信解决了会员、账号、支付、安全等问题' },
      ],
      introList: [
        { icon: '&#xe630;', title: '二维码', en: 'QR code' },
        { icon: '&#xe62d;', title: '附近的店', en: `Isabella's` },
        { icon: '&#xe62e;', title: '社交分享', en: 'Share' },
        { icon: '&#xe631;', title: '公众号', en: 'Tencent_isux' },
        { icon: '&#xe62a;', title: '搜索', en: 'Search' },
        { icon: '&#xe62b;', title: '广告', en: 'Advertising' },
        { icon: '&#xe62c;', title: '小程序市场', en: 'Applet' },
        { icon: '&#xe62f;', title: '卡包', en: 'Card Pack' },
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
    ProjectStep,
  }
}
</script>

<style lang="less" scoped>
.banner {
  /deep/ .content .text .info {
    max-width: 12em;
  }
}
.list-image {
  padding: 144px 93px 84px 135px;
  text-align: center;
  background: #F7F7F7;
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
    margin-bottom: 135px;
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
    img {
      border-radius: 24px;
    }
    .image-item {
      width: 100%;
      border-radius: 24px;
      margin-right: 0;
      margin-bottom: 85px;
      display: inline-block;
      vertical-align: top;
      &:last-child {
        margin-bottom: 75px;
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
  padding: 96px 199px 112px 135px;
  background: #fff;
  img {
    width: 100%;
    height: 100%;
  }
  .list-wrapper {
    float: left;
    width: 656px;
    margin-top: 48px;
    .item {
      display: inline-block;
      width: 140px;
      height: 200px;
      background: #F7F7F7;
      border-radius: 12px;
      margin-right: 24px;
      margin-bottom: 32px;
      text-align: center;
      padding: 24px;
      .icon {
        display: inline-block;
        width: 92px;
        height: 92px;
        background: #FFFFFF;
        border-radius: 50%;
        line-height: 92px;
        margin-bottom: 12px;
        i {
          font-size: 36px;
        }
      }
      .zh {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #474747;
        line-height: 24px;
      }
      .en {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #A6AAB1;
        line-height: 24px;
      }
    }
  }
  .mini-image {
    width: 360px;
    float: right;
    margin-top: 68px;
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
    background: #fff;
    img {
      width: 100%;
      height: 100%;
    }
    .list-wrapper {
      float: none;
      width: 100%;
      margin-top: 48px;
      text-align: center;
      .item {
        display: inline-block;
        width: 140px;
        height: 200px;
        background: #F7F7F7;
        border-radius: 12px;
        margin-right: 24px;
        margin-bottom: 32px;
        text-align: center;
        padding: 24px;
        &:nth-child(2n) {
          margin-right: 0;
        }
        .icon {
          display: inline-block;
          width: 92px;
          height: 92px;
          background: #FFFFFF;
          border-radius: 50%;
          line-height: 92px;
          margin-bottom: 12px;
          i {
            font-size: 36px;
          }
        }
        .zh {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #474747;
          line-height: 24px;
        }
        .en {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #A6AAB1;
          line-height: 24px;
        }
      }
    }
    .mini-image {
      width: 100%;
      float: none;
      margin-top: 48px;
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
