<template>
  <div>
    <Header></Header>
    <ConfidenceBanner
      :imgae="require('@/static/trust/operation/xmtdyy_banner.jpg')"
      title="新媒体代运营"
      class="banner"
      info="碎片化流量为王时代中的新起点"
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
      <div class="title">新媒体运营</div>
      <div class="sub-title">相较于日常不断加快的生活工作节奏，个体时间不断碎片化，切身的快速运营响应显得尤为重要。</div>
      <div class="service-list clearfix">
        <div class="service-item" v-for="item in serviceList" :key="item.title">
          <div class="image"><img :src="item.image" alt=""></div>
          <div class="title">{{ item.title }}</div>
          <div class="info" v-html="item.info"></div>
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
        { image: require('@/static/trust/operation/xmtdyy_image1.png'), title: '内容运营' },
        { image: require('@/static/trust/operation/xmtdyy_image2.png'), title: '互动沉淀' },
        { image: require('@/static/trust/operation/xmtdyy_image3.png'), title: '数据积累'},
      ],
      serviceList: [
        { image: require('@/static/trust/operation/xmtdyy_icon1.png'), title: '运营平台',
          info: '微信公众号<br />微博' },
        { image: require('@/static/trust/operation/xmtdyy_icon2.png'), title: '内容运营',
          info: '软文写作<br />话题策划<br />图文创意<br />···' },
        { image: require('@/static/trust/operation/xmtdyy_icon3.png'), title: '活动运营',
          info: '活动策划<br />线上活动<br />线下活动<br />···' },
        { image: require('@/static/trust/operation/xmtdyy_icon3.png'), title: '用户运营',
          info: '线上互动<br />社群运营<br />···' },
        { image: require('@/static/trust/operation/xmtdyy_icon3.png'), title: '数据分析',
          info: '平台数据<br />用户数据<br />···' },
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
  .description {
    font-size: 20px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #474747;
    line-height: 32px;
    text-align: center;
    margin-top: 144px;
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
      margin-right: 42px;
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
}
</style>
