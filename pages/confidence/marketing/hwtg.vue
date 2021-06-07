<template>
  <div>
    <Header></Header>
    <ConfidenceBanner
      :imgae="require('@/static/trust/marketing/hwtg_banner.jpg')"
      title="海外推广"
      info="打开巨量外贸蓝海市场"
     />
     <div class="list-image clearfix">
       <div class="sharp"></div>
       <div class="item-wrapper clearfix">
        <div class="image-item" v-for="item in imageList" :key="item.infoZh">
          <img :src="item.image" alt="">
          <div class="image-info">
            <span class="zh-title">{{item.infoZh}}</span>
          </div>
        </div>
       </div>
       <div class="description">海外推广是在企业扩张海外业务市场版图的的重要拓展手段，具有较强的针对性以及相对客观的回报率。</div>
     </div>
     <div class="google-ads-source">
       <div class="title">Google广告资源</div>
       <div class="wrapper clearfix">
         <div class="item" v-for="item in adsSource" :key="item.text">
           <div class="image">
             <img :src="item.image" alt="">
           </div>
           <div class="text">{{ item.text }}</div>
         </div>
       </div>
     </div>
     <div class="google-ads-benefits">
       <div class="title">Google推广 6大优势</div>
       <div class="wrapper clearfix">
         <div class="item" v-for="item in adsAdvantage" :key="item.title">
           <div class="image">
             <img :src="item.image" alt="">
           </div>
           <div class="text">{{ item.title }}</div>
           <div class="info">{{ item.info }}</div>
         </div>
       </div>
     </div>
     <div class="choose-google clearfix">
       <div class="content-wrapper">
         <div class="title">选择Google推广</div>
         <div class="item-list">
           <div class="item" v-for="item in chooseList" :key="item.title">
             <div class="image">
               <img :src="item.image" alt="">
             </div>
             <div class="text">{{ item.title }}</div>
             <div class="info" v-html="item.info"></div>
           </div>
         </div>
       </div>
       <div class="image-wrapper">
         <img src="@/static/trust/marketing/google_image.png" alt="">
       </div>
     </div>
    <div class="service">
      <div class="title">我们的服务</div>
      <div class="service-list clearfix">
        <div class="service-item" v-for="item in serviceList" :key="item.title">
          <div class="image"><img :src="item.image" alt=""></div>
          <div class="text">{{ item.title }}</div>
          <div class="info" v-html="item.info"></div>
        </div>
      </div>
    </div>
    <div class="steps">
      <div class="title">Google Ads付费推广广告步骤</div>
      <div class="sub-title">引擎力帮助您量身定制广告策略，1对1专业服务，杜绝广告浪费</div>
      <div class="image">
        <img src="@/static/trust/marketing/image_google_ads.png" alt="">
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
        { image: require('@/static/trust/marketing/hwtg_image1.png'), infoZh: 'Google' },
        { image: require('@/static/trust/marketing/hwtg_image2.png'), infoZh: 'Facebook' },
        { image: require('@/static/trust/marketing/hwtg_image3.png'), infoZh: 'Twitter' },
      ],
      adsSource: [
        { image: require('@/static/trust/marketing/icon_Google_Ads.png'), text: 'Google ads广告' },
        { image: require('@/static/trust/marketing/icon_Google_Shopping.png'), text: 'Google 购物广告' },
        { image: require('@/static/trust/marketing/icon_Google_New.png'), text: 'Google 展示广告' },
        { image: require('@/static/trust/marketing/icon_Google_phone.png'), text: 'Google 移动广告' },
        { image: require('@/static/trust/marketing/icon_Google_Gmail.png'), text: 'Gmail 广告' },
        { image: require('@/static/trust/marketing/icon_Google_youtube.png'), text: 'Youtube 广告' },
      ],
      adsAdvantage: [
        { image: require('@/static/trust/marketing/icon_advantage1.png'), title: '超强曝光',
          info: '全球最大的搜索引擎，用户覆盖200多个国家和地区，一个账户，广告投放全球。' },
        { image: require('@/static/trust/marketing/icon_advantage2.png'), title: '性价比高',
          info: '按点击付费，单次点击最低仅需1美分，可自主设置每日预算，按点击效果付费 展示免费。' },
        { image: require('@/static/trust/marketing/icon_advantage3.png'), title: '覆盖面广',
          info: '多种广告投放平台，谷歌搜索以及谷歌旗下的Gmail，YouTube等，还有相关的内容及搜索合作伙伴。' },
        { image: require('@/static/trust/marketing/icon_advantage4.png'), title: '定向精准',
          info: '精准地域定向，快速找到目标客户群体，通过关键词搜索，产品只展示给有兴趣的人，可按国家、地区、语言来投放，精准定位目标客户群。' },
        { image: require('@/static/trust/marketing/icon_advantage4.png'), title: '长效营销',
          info: '先进的算法技术，为企业提供再营销，转化更好。' },
        { image: require('@/static/trust/marketing/icon_advantage6.png'), title: '获客成本低',
          info: '依托算法、定向、计价等诸多优势，广告价格更低，获取客户的成本更低。' },
      ],
      chooseList: [
        { image: require('@/static/trust/marketing/google_icon1.png'), title: '搜索量大',
          info: '平均每日搜索<br />请求高达54亿次' },
        { image: require('@/static/trust/marketing/google_icon2.png'), title: '多语言版本',
          info: '拥有130多种语言版本<br />满足各种用户阅读习惯' },
        { image: require('@/static/trust/marketing/google_icon3.png'), title: '用户分布广',
          info: '用户分布于<br />200多个国家和地区' },
        { image: require('@/static/trust/marketing/google_icon4.png'), title: '市场占有率高',
          info: '全球占有率高达91%<br />拥有全球超过90%的流量' },
      ],
      serviceList: [
        { image: require('@/static/trust/marketing/hwtg_icon1.png'), title: '海外建站',
          info: '98种语言建站服务<br />快速上线推广<br />开辟更多国家市场' },
        { image: require('@/static/trust/marketing/hwtg_icon2.png'), title: '账号托管',
          info: '提供从开户到账号搭建<br />广告制作、投放与优化<br />数据汇报等一站式服务' },
        { image: require('@/static/trust/marketing/hwtg_icon3.png'), title: '社媒营销',
          info: '搭建海外社交媒体账号<br />如Facebook、Twitter<br />等，轻松获取海外粉丝' },
        { image: require('@/static/trust/marketing/hwtg_icon4.png'), title: '海外优化推广',
          info: '48课时的海外营销<br />课程培训，专业讲解<br />让您更懂外贸推广' },
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
  .description {
    font-size: 20px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #474747;
    line-height: 32px;
    margin-top: 144px;
    text-align: center;
  }
  @media only screen and (max-width: 760px) {
    padding: 96px 16px;
    position: relative;
    .sharp {
      position: absolute;
      width: 176px;
      height: 176px;
      left: auto;
      top: 56px;
      right: 16px;
    }
    img {
      border-radius: 24px;
    }
    .image-item {
      float: none;
      width: 100%;
      margin-right: 0;
      margin-bottom: 30px;
      box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
      border-radius: 24px;
      padding: 24px;
      &:last-child {
        margin-bottom: 0;
      }
      .image-info {
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
    .description {
      position: relative;
      margin: 0 -16px;
      max-width: calc(100% + 32px);
      padding: 0 16px;
      font-size: 20px;
      line-height: 32px;
      text-align: left;
      margin-top: 96px;
      background-color: #eff2f5;
    }
  }
}
.google-ads-source {
  margin-bottom: 114px;
  .title {
    font-size: 56px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #474747;
    line-height: 80px;
    margin-bottom: 64px;
    text-align: center;
  }
  .wrapper {
    background: #FFFFFF;
    box-shadow: 10px 10px 40px 0px rgba(54, 33, 0, 0.1);
    border-radius: 12px;
    margin: 0 135px;
    padding: 64px;
    width: calc(100% - 270px);
    display: table;
    .item {
      display: table-cell;
      margin: auto;
      text-align: center;
      .image {
        display: inline-block;
        width: 64px;
        img {
          width: 100%;
        }
      }
      .text {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #474747;
        line-height: 24px;
        margin-top: 32px;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    margin-bottom: 0;
    padding: 96px 16px;
    .title {
      font-size: 40px;
      line-height: 56px;
      margin-bottom: 0;
      text-align: center;
    }
    .wrapper {
      background: #FFFFFF;
      box-shadow: 10px 10px 40px 0px rgba(54, 33, 0, 0.1);
      border-radius: 12px;
      margin: 0;
      padding: 0;
      padding-top: 64px;
      width: 100%;
      display: block;
      .item {
        display: block;
        float: left;
        width: 50%;
        margin: 0;
        text-align: center;
        margin-bottom: 64px;
        .image {
          display: inline-block;
          width: 64px;
          img {
            width: 100%;
          }
        }
        .text {
          font-size: 14px;
          line-height: 24px;
          margin-top: 32px;
        }
      }
    }
  }
}
.google-ads-benefits {
  .title {
    font-size: 56px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #474747;
    line-height: 80px;
    text-align: center;
    margin-bottom: 100px;
  }
  .wrapper {
    padding-left: 135px;
    padding-right: 24px;
    padding-bottom: 76px;
    .item {
      float: left;
      width: 530px;
      margin-right: 110px;
      margin-bottom: 68px;
      text-align: center;
    }
    .image {
      display: inline-block;
      width: 96px;
      img {
        width: 100%;
      }
    }
    .text {
      font-size: 32px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #474747;
      line-height: 48px;
      text-align: center;
      margin-top: 30px;
    }
    .info {
      font-size: 20px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #A6AAB1;
      line-height: 32px;
      text-align: center;
      margin-top: 32px;
    }
  }
  @media only screen and (max-width: 760px) {
    .title {
      font-size: 40px;
      line-height: 56px;
      margin-bottom: 68px;
    }
    .wrapper {
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 28px;
      .item {
        float: none;
        width: 100%;
        margin-right: 0;
        margin-bottom: 68px;
      }
      .image {
        display: inline-block;
        width: 96px;
        img {
          width: 100%;
        }
      }
      .text {
        font-size: 32px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #474747;
        line-height: 48px;
        text-align: center;
        margin-top: 30px;
      }
      .info {
        font-size: 20px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #A6AAB1;
        line-height: 32px;
        text-align: center;
        margin-top: 32px;
      }
    }
  }
}
.choose-google {
  padding-left: 135px;
  .content-wrapper {
    float: left;
    margin-top: 176px;
    width: 410px;
    .title {
      font-size: 56px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #474747;
      line-height: 80px;
      margin-bottom: 48px;
    }
    .item {
      float: left;
      width: 164px;
      height: 220px;
      background: #FFFFFF;
      box-shadow: 10px 10px 40px 0px rgba(0, 0, 0, 0.1);
      border-radius: 12px;
      padding: 24px 0;
      margin-right: 32px;
      margin-bottom: 36px;
      text-align: center;
      .image {
        width: 92px;
        margin: 0 36px;
        margin-bottom: 18px;
        img {
          width: 100%;
        }
      }
      .text {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #474747;
        line-height: 24px;
        margin-bottom: 4px;
      }
      .info {
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #A6AAB1;
        line-height: 20px;
      }
    }
  }
  .image-wrapper {
    float: right;
    width: 820px;
    img {
      width: 100%;
    }
  }
  @media only screen and (max-width: 760px) {
    padding: 96px 16px;
    .content-wrapper {
      float: none;
      margin-top: 0;
      width: 100%;
      .title {
        font-size: 40px;
        line-height: 56px;
        margin-bottom: 48px;
      }
      .item {
        float: left;
        width: calc(50% - 16px);
        height: 220px;
        box-shadow: 10px 10px 40px 0px rgba(0, 0, 0, 0.1);
        border-radius: 12px;
        padding: 24px 0;
        margin-right: 32px;
        margin-bottom: 36px;
        text-align: center;
        &:nth-child(2n) {
          margin-right: 0;
        }
        .image {
          display: inline-block;
          width: 92px;
          margin: 0 36px;
          margin-bottom: 18px;
          img {
            width: 100%;
          }
        }
        .text {
          font-size: 14px;
          line-height: 24px;
          margin-bottom: 4px;
        }
        .info {
          font-size: 12px;
          line-height: 20px;
        }
      }
    }
    .image-wrapper {
      float: none;
      width: 100%;
      margin-top: 48px;
      img {
        width: 100%;
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
  .service-list {
    margin-top: 64px;
    margin-bottom: 96px;
    padding-left: 135px;
    padding-right: 12px;
    .service-item {
      float: left;
      margin-right: 123px;
      &:last-child {
        margin-right: 0;
      }
      .image {
        width: 200px;
        img {
          width: 100%;
        }
      }
      .text {
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #474747;
        line-height: 42px;
        margin-top: 32px;
        margin-bottom: 12px;
      }
      .info {
        max-width: 200px;
        text-align: center;
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #A6AAB1;
        line-height: 32px;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    .title {
      font-size: 40px;
      line-height: 56px;
    }
    .service-list {
      margin-top: 64px;
      margin-bottom: 96px;
      padding-left: 0;
      padding-right: 0;
      .service-item {
        float: none;
        margin-right: 0;
        margin-bottom: 64px;
        text-align: center;
        &:last-child {
          margin-bottom: 0;
        }
        .image {
          width: 200px;
          display: inline-block;
          img {
            width: 100%;
          }
        }
        .text {
          font-size: 24px;
          line-height: 42px;
          margin-top: 32px;
          margin-bottom: 12px;
        }
        .info {
          max-width: 200px;
          margin: auto;
          text-align: center;
          font-size: 18px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #A6AAB1;
          line-height: 32px;
        }
      }
    }
  }
}
.steps {
  text-align: center;
  .title {
      font-size: 56px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #474747;
      line-height: 80px;
      margin-bottom: 24px;
  }
  .sub-title {
    font-size: 20px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #474747;
    line-height: 32px;
  }
  .image {
    margin-left: 106px;
    margin-right: 87px;
    margin-top: 96px;
    margin-bottom: 104px;
    img {
      width: 100%;
    }
  }
  @media only screen and (max-width: 760px) {
    padding: 96px 16px;
    .title {
        font-size: 40px;
        line-height: 56px;
        margin-bottom: 24px;
    }
    .sub-title {
      font-size: 20px;
      line-height: 32px;
      margin-bottom: 64px;
    }
    .image {
      margin: 0;
      img {
        width: 100%;
      }
    }
  }
}
</style>
