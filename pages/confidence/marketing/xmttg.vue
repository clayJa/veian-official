<template>
  <div>
    <Header></Header>
    <ConfidenceBanner
      :imgae="require('@/static/trust/marketing/xmttg_banner.jpg')"
      title="新媒体推广"
      info="前沿的线上推广方式之一"
     />
    <div class="list-image">
      <div class="sharp"></div>
      <div class="item-wrapper clearfix">
      <div class="image-item" v-for="item in imageList" :key="item.infoZh">
        <img :src="item.image" alt="">
        <div class="image-info">
          <span class="zh-title">{{item.infoZh}}</span>
        </div>
      </div>
      </div>
      <div class="description">新媒体营销是企业流量碎片化必经思量的推广方式之一。通过微信、微博、亦或者第三方其他媒体资源构建了客户生态体系。在新媒体宣传的成长过程中，改变了我们这个时代人的生活方式和获取信息的习惯。</div>
    </div>
    <div class="service">
      <div class="title">新媒体产业链全流量服务</div>
      <div class="sub-title">新媒体流量全案服务</div>
      <div class="service-list clearfix">
        <div class="service-item" v-for="item in serviceList" :key="item.title">
          <div class="image"><img :src="item.image" alt=""></div>
          <div class="title">{{ item.title }}</div>
        </div>
      </div>
    </div>
    <div class="spreading clearfix">
      <div class="left-part">
        <div class="title">新媒体精准优化推广</div>
        <div class="sub-title">根据客户需求，匹配全网资源，制定相应推广营销策略，让客户推广不仅精准更加实时有效。</div>
        <div class="list clearfix">
          <div class="item" v-for="item in spreadingList" :key="item.title">
            <div class="icon"><img :src="item.image" alt=""></div>
            <div class="item-title">{{ item.title }}</div>
            <div class="item-info">{{ item.info }}</div>
          </div>
        </div>
      </div>
      <div class="right-part">
        <div class="image-wrapper">
          <img
            v-for="(item,index) in imgList" :key="index" :style="{animation: `move${index % 3 + 1} 5s infinite`}"
            :src="item.img"
            :class="`img-${index+1}`" alt="">
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
        { image: require('@/static/trust/marketing/xmttg_image1.png'), infoZh: '高效获客' },
        { image: require('@/static/trust/marketing/xmttg_image2.png'), infoZh: '目标触达' },
        { image: require('@/static/trust/marketing/xmttg_image3.png'), infoZh: '互动宣传' },
      ],
      serviceList: [
        { image: require('@/static/trust/marketing/icon_Integrated_Marketing.png'), title: '整合营销' },
        { image: require('@/static/trust/marketing/icon_Customer_customization.png'), title: '客户定制化' },
        { image: require('@/static/trust/marketing/icon_Resources.png'), title: '全网资源' },
      ],
      spreadingList: [
        { image: require('@/static/trust/marketing/icon_Video.png'), title: '短视频', info: '动态视频赢下流量' },
        { image: require('@/static/trust/marketing/icon_Video_play.png'), title: '直播', info: '实时直播电商转化' },
        { image: require('@/static/trust/marketing/icon_Image.png'), title: '图文', info: '图文传播品牌推广' },
      ],
      imgList: [
        { img: require('@/static/trust/marketing/1.png') },
        { img: require('@/static/trust/marketing/2.png') },
        { img: require('@/static/trust/marketing/3.png') },
        { img: require('@/static/trust/marketing/4.png') },
        { img: require('@/static/trust/marketing/5.png') },
        { img: require('@/static/trust/marketing/6.png') },
        { img: require('@/static/trust/marketing/7.png') },
        { img: require('@/static/trust/marketing/8.png') },
        { img: require('@/static/trust/marketing/9.png') },
        { img: require('@/static/trust/marketing/10.png') },
        { img: require('@/static/trust/marketing/11.png') },
        { img: require('@/static/trust/marketing/12.png') },
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
    }
  }
  .description {
    margin: auto;
    max-width: 1100px;
    font-size: 20px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #474747;
    line-height: 32px;
    margin-top: 144px;
    text-align: center;
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
    padding: 0 235px;
    .service-item {
      float: left;
      margin-right: 185px;
      &:last-child {
        margin-right: 0;
      }
      .image {
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
    }
  }
}
.spreading {
  padding: 144px 135px;
  .left-part {
    float: left;
    .title {
      max-width: 521px;
      font-size: 56px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #474747;
      line-height: 80px;
    }
    .sub-title {
      max-width: 521px;
      font-size: 20px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #474747;
      line-height: 32px;
      margin-bottom: 48px;
    }
    .list {
      .item {
        float: left;
        width: 160px;
        height: 200px;
        background: #F7F7F7;
        border-radius: 12px;
        padding: 24px;
        text-align: center;
        margin-right: 24px;
        &:last-child {
          margin-right: 0;
        }
      }
      .icon {
        width: 92px;
        img {
          width: 100%;
        }
      }
      .item-title {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #474747;
        line-height: 24px;
        margin-top: 12px;
      }
      .item-info {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #A6AAB1;
        line-height: 24px;
      }
    }
  }
  .right-part {
    float: right;
    .image-wrapper {
      position: relative;
      width: 470px;
      height: 370px;
    }
    .img-1 {
      position: absolute;
      top: 37px;
      left: 13px;
    }
    .img-2 {
      position: absolute;
      top: 86px;
      right: 66px;
    }
    .img-3 {
      position: absolute;
      top: 37px;
      right: 42px;
    }
    .img-4 {
      position: absolute;
      top: 153px;
      left: 0px;
    }
    .img-5 {
      position: absolute;
      top: 0px;
      left: 152px;
    }
    .img-6 {
      position: absolute;
      top: 126px;
      left: 249px;
    }
    .img-7 {
      position: absolute;
      bottom: 37px;
      left: 28px;
    }
    .img-8 {
      position: absolute;
      top: 193px;
      left: 187px;
    }
    .img-9 {
      position: absolute;
      top: 276px;
      right: 74px;
    }
    .img-10 {
      position: absolute;
      top: 119px;
      left: 104px;
    }
    .img-11 {
      position: absolute;
      bottom: 63px;
      left: 89px;
    }
    .img-12 {
      position: absolute;
      bottom: 95px;
      right: 0;
    }
  }
}
:global{
}
</style>
