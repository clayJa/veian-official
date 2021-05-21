<template>
  <div>
    <Header></Header>
    <div class="banner">
      <div class="content">
        <img src="@/static/trust/trust_background.jpg" alt="">
        <div class="text">
            <div class="home_banner_title1 mt160">Welcome to weiran technology</div>
            <div class="home_banner_title2">全行业 全渠道</div>
            <div class="home_banner_title2">数字化企业服务</div>
        </div>
      </div>
    </div>
    <div class="creativity">
      <div class="sharp"></div>
      <div class="container clearfix">
        <div class="item-wrapper title-wrapper">
          <div class="en-title">Creativity</div>
          <div class="zh-title">创意</div>
          <div class="info">打破内容与用户之间的壁垒，身临其境感受品牌力量。</div>
        </div>
        <div class="item-wrapper">
          <img src="@/static/trust/creative_image1.png" alt="">
          <div class="content-wrapper">
            <div class="content-title">创意交互设计</div>
            <div class="link">Learn more <i class="iconfont">&#xe627;</i></div>
          </div>
        </div>
        <div class="item-wrapper">
          <img src="@/static/trust/creative_image2.png" alt="">
          <div class="content-wrapper">
            <div class="content-title">视频数字化应用</div>
            <div class="link">Learn more <i class="iconfont">&#xe627;</i></div>
          </div>
        </div>
        <div class="item-wrapper">
          <img src="@/static/trust/creative_image3.png" alt="">
          <div class="content-wrapper">
            <div class="content-title">视觉识别系统 (VI)</div>
            <div class="link">Learn more <i class="iconfont">&#xe627;</i></div>
          </div>
        </div>
        <div class="item-wrapper">
          <img src="@/static/trust/creative_image4.png" alt="">
          <div class="content-wrapper">
            <div class="content-title">全景虚拟现实 (VR)</div>
            <div class="link">Learn more <i class="iconfont">&#xe627;</i></div>
          </div>
        </div>
        <div class="item-wrapper">
          <img src="@/static/trust/creative_image5.png" alt="">
          <div class="content-wrapper">
            <div class="content-title">年度设计服务</div>
            <div class="link">Learn more <i class="iconfont">&#xe627;</i></div>
          </div>
        </div>
      </div>
    </div>
    <div class="development">
      <div class="title-wrapper">
        <div class="en-title">Development</div>
        <div class="zh-title">开发</div>
        <div class="info">全行业定制数字化服务助力企业升级</div>
      </div>
      <div class="list-wrapper clearfix">
        <div class="sharp"></div>
        <div class="item-wrapper" v-for="item in developmentList" :key="item.name">
          <div class="item-content">
            <div class="icon"><i class="iconfont" v-html="item.icon"></i></div>
            <div class="name">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="marketing">
      <div class="title-wrapper">
        <div class="en-title">Marketing</div>
        <div class="zh-title">营销</div>
        <div class="info">全链路营销服务，赋能企业全渠道拓客</div>
      </div>
      <div class="marketing-list clearfix">
        <div class="sharp"></div>
        <div class="marketing-item" v-for="item in marketingList" :key="item.name">
          <img :src="item.image" alt="">
          <div class="content">
            <div class="content-title">{{ item.name }}</div>
            <div class="link">Learn more <i class="iconfont">&#xe627;</i></div>
          </div>
        </div>
      </div>
    </div>
    <div class="operation">
      <div class="title-wrapper">
        <div class="en-title">Operation</div>
        <div class="zh-title">运营</div>
        <div class="info">全渠道运营服务，渗透到每个细节</div>
      </div>
      <div class="operation-list clearfix">
        <div class="sharp"></div>
        <div class="operation-item" v-for="item in operationList" :key="item.name">
          <img :src="item.image" alt="">
          <div class="content-wrapper">
            <div class="content">
              <div class="content-title">{{ item.name }}</div>
              <div class="link">Learn more <i class="iconfont">&#xe627;</i></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
export default {
  data() {
    return {
      developmentList: [
        { icon: '&#xe624;',name: '高端网站定制' },
        { icon: '&#xe626;',name: '小程序定制开发' },
        { icon: '&#xe623;',name: 'APP定制开发' },
        { icon: '&#xe621;',name: 'H5定制开发' },
        { icon: '&#xe625;',name: '电商定制开发' },
        { icon: '&#xe622;',name: '业务系统定制开发' },
      ],
      marketingList: [
        { image: require('@/static/trust/marketing_image1.png'),name: 'SEO&SEM' },
        { image: require('@/static/trust/marketing_image2.png'),name: '新媒体营销' },
        { image: require('@/static/trust/marketing_image3.png'),name: '海外营销' },
      ],
      operationList: [
        { image: require('@/static/trust/operation_image1.png'),name: '电商代运营' },
        { image: require('@/static/trust/operation_image2.png'),name: '网站代运营' },
        { image: require('@/static/trust/operation_image3.png'),name: '新媒体代运营' },
      ],
    }
  },
  methods: {
  },
  components: {
    Header,
    Footer,
  }
}
</script>

<style lang="less" scoped>
.banner {
  .content {
    position: relative;
    img {
      width: 100%;
    }
    .text {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      text-align: center;
    }
    .mt160 {
      margin-top: 160px;
    }
    .home_banner_title1 {
      font-family: PingFangSC-Regular;
      font-size: 18px;
      color: #FFFFFF;
      line-height: 32px;
      text-transform: uppercase;
      margin-bottom: 10px;
    }
    .home_banner_title2 {
      font-size: 72px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #FFFFFF;
      line-height: 100px;
    }
  }
}
.creativity {
  background: #F7F7F7;
  padding-top: 128px;
  padding-bottom: 80px;
  position: relative;
  .sharp {
    position: absolute;
    width: 176px;
    height: 176px;
    left: 491px;
    top: 347px;
    z-index: 0;
    background-image: url('@/static/Combined_Shape_333.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
  img {
    width: 100%;
  }
  .title-wrapper {
    margin-top: 36px;
  }
  .item-wrapper {
    width: 370px;
    float: left;
    margin-right: 30px;
    margin-bottom: 32px;
    position: relative;
    &:nth-child(3n) {
      margin-right: 0px;
    }
    &:hover {
      .content-wrapper {
        background: #fff;
        box-shadow: 20px 20px 40px 0px rgba(0, 0, 0, 0.1);
        border-radius: 12px 0px 0px 12px;
        transition: all 1s;
      }
      .content-title {
        color: #474747 !important;
        transition: all 1s;
      }
      .link {
        color: #1A82FF !important;
        transition: all 1s;
      }
    }
    .content-wrapper {
      position: absolute;
      right: 0;
      left: 24px;
      bottom: 24px;
      height: 112px;
      padding-left: 32px;
      padding-top: 26px;
      .content-title {
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 32px;
        margin-bottom: 12px;
      }
      .link {
        font-size: 16px;
        font-family: Avenir-Light, Avenir;
        font-weight: 300;
        color: fade(#fff,80);
        line-height: 25px;
        cursor: pointer;
        i {
          font-size: 12px;
        }
      }
    }
  }
}
.title-wrapper {
  .en-title {
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #474747;
    line-height: 32px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .zh-title {
    font-size: 56px;
    font-family: PingFangSC-Semibold, PingFang SC;
    font-weight: 600;
    color: #03101F;
    line-height: 64px;
    margin: 24px 0;
  }
  .info {
    font-size: 18px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #474747;
    line-height: 32px;
    max-width: 269px;
  }
}
.development {
  padding: 96px 0;
  .title-wrapper {
    text-align: center;
    .info {
      max-width: 10em;
      margin: 0 auto;
    }
  }
  .list-wrapper {
    margin: 0 235px;
    text-align: center;
    padding-top: 68px;
    position: relative;
    .sharp {
      position: absolute;
      width: 176px;
      height: 176px;
      right: -70px;
      top: 24px;
      z-index: 0;
      background-image: url('@/static/Combined_Shape_333.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
    .item-wrapper {
      width: 308px;
      height: 208px;
      background: #F7F7F7;
      border-radius: 16px;
      float: left;
      margin-right: 22px;
      margin-bottom: 24px;
      position: relative;
      cursor: pointer;
      &:hover {
        background: #FFFFFF;
        box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
        transition: all 1s;
        transform: scale(1.3);
        z-index: 10;
        .icon i, .name {
          color: #1A82FF;
        }

      }
      &:nth-child(3n + 1) {
        margin-right: 0px;
      }
      .item-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
      }
      .icon i{
        font-size: 80px;
        color: #A6AAB1;
      }
      .name {
        font-size: 20px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #A6AAB1;
        line-height: 32px;
        white-space: nowrap;
      }
    }
  }
}
.marketing {
  background: #1A82FF;
  padding: 96px 0;
  .title-wrapper {
    text-align: center;
    .info {
      max-width: 100%;
    }
    .en-title,.zh-title,.info {
      color: #fff;
    }
  }
  .marketing-list {
    margin-top: 48px;
    position: relative;
    padding: 0 135px;
    .sharp {
      position: absolute;
      width: 176px;
      height: 176px;
      right: 190px;
      top: -88px;
      z-index: 0;
      background-image: url('@/static/Combined_Shape_light.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
    img {
      width: 100%;
    }
    .marketing-item {
      width: 370px;
      float: left;
      margin-right: 30px;
      margin-left: auto;
      position: relative;
      border-radius: 16px;
      &:last-child {
        margin-right: 0;
      }
      .content {
        padding-top: 40px;
        padding-left: 32px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        .content-title {
          font-size: 24px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 32px;
          letter-spacing: 1px;
        }
        .link {
          font-size: 16px;
          font-family: Avenir-Light, Avenir;
          font-weight: 300;
          color: fade(#fff,80);
          line-height: 25px;
          cursor: pointer;
          &:hover {
            color: #1A82FF;
          }
          i {
            font-size: 12px;
          }
        }
      }
    }
  }
}
.operation {
  background: #FFFFFF;
  padding: 96px 0;
  .title-wrapper {
    text-align: center;
    .info {
      max-width: 100%;
    }
  }
  .operation-list {
    margin-top: 48px;
    position: relative;
    padding: 0 135px;
    .sharp {
      position: absolute;
      width: 176px;
      height: 176px;
      right: 190px;
      top: -88px;
      z-index: 0;
      background-image: url('@/static/Combined_Shape_light.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
    img {
      width: 100%;
    }
    .operation-item {
      width: 360px;
      float: left;
      margin-right: 45px;
      margin-left: auto;
      position: relative;
      border-radius: 16px;
      &:last-child {
        margin-right: 0;
      }
      .content-wrapper {
        padding-top: 40px;
        padding-left: 32px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        border-radius: 16px;
        &:hover {
          background: fade(#4298FF,80);
          transition: all 1s;
        }
        .content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          text-align: center;
        }
        .content-title {
          font-size: 24px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #FFFFFF;
          line-height: 32px;
          letter-spacing: 1px;
          white-space: nowrap;
        }
        .link {
          font-size: 16px;
          font-family: Avenir-Light, Avenir;
          font-weight: 300;
          color: fade(#fff,80);
          line-height: 25px;
          cursor: pointer;
          white-space: nowrap;
          i {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
