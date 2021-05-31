<template>
  <div>
    <Header></Header>
    <ConfidenceBanner
      :imgae="require('@/static/trust/operation/dsdyy_banner.jpg')"
      title="电商代运营"
      class="banner"
      info="全链路电商托管服务"
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
       <div class="description">
         我们将深入为品牌提供全电商平台的一站式全链路的代运营方案，深入企业开展电商经营过程中的每一个环节，<br />匠心打造客户体验，提升品牌竞争力。
       </div>
     </div>
     <div class="operation-steps">
       <div class="title">电商精细化运营服务</div>
       <div class="wrapper clearfix">
        <div
          :class="['item',index + 1 > 4 ? 'right' : 'left', { spItem: index === 3 }, { noLine: index === 4 } ]"
          v-for="(item, index) in stepList"  :key="item.title">
          <div class="image">
            <img :src="item.image" alt="">
          </div>
          <div class="text">{{ item.title }}</div>
          <div class="info">{{ item.info }}</div>
          <div class="line"></div>
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
        { image: require('@/static/trust/operation/dsdyy_image1.png'), title: '深度运营' },
        { image: require('@/static/trust/operation/dsdyy_image2.png'), title: '实时沉淀' },
        { image: require('@/static/trust/operation/dsdyy_image3.png'), title: '深度挖掘'},
      ],
      stepList: [
        { image: require('@/static/trust/operation/dsdyy_step1.png'), title: '开店服务',
          info: '组织建构建立，店铺入驻申请，开店前期' },
        { image: require('@/static/trust/operation/dsdyy_step2.png'), title: '日常运营',
          info: '宝贝编辑上下架、标题优化、商品信息库存维护店铺评价处理等' },
        { image: require('@/static/trust/operation/dsdyy_step3.png'), title: '活动运营',
          info: '双十一、双十二、618、聚划算、淘抢购等活动规范与运营' },
        { image: require('@/static/trust/operation/dsdyy_step4.png'), title: '数据运营',
          info: '店铺分析诊断、竞店分析、行业分析、定制数据包、品牌数据银行等' },
        { image: require('@/static/trust/operation/dsdyy_step8.png'), title: '商品管理',
          info: '库存效期预警、库存周转管理、商品生产' },
        { image: require('@/static/trust/operation/dsdyy_step7.png'), title: '客户运营',
          info: '客户分组、淘宝群维护、微淘内容策划等' },
        { image: require('@/static/trust/operation/dsdyy_step6.png'), title: '设计制造',
          info: '首页与商品详情、商品文案与拍摄、活动策划与设计等' },
        { image: require('@/static/trust/operation/dsdyy_step5.png'), title: '营销推广',
          info: '直通车、钻展、聚划算、淘抢购、内容推广、淘内直播平台类等内容资源' },
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
.operation-steps {
  .title {
    font-size: 56px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #474747;
    line-height: 80px;
    text-align: center;
  }
  .wrapper {
    padding-left: 178px;
    padding-right: 124px;
    margin-top: 64px;
    margin-bottom: 80px;
    .item {
      float: left;
      margin-right: 58px;
      margin-bottom: 64px;
      position: relative;
      &.left {
        .line {
          position: absolute;
          top: 109px;
          right: -40px;
          width: 37px;
          height: 3px;
          background: #E5E5E5;
          &::after {
            position: absolute;
            content: '';
            display: block;
            right: -8px;
            top: -4px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #E5E5E5;
          }
        }
      }
      &.right {
        .line {
          position: absolute;
          top: 109px;
          left: -50px;
          width: 37px;
          height: 3px;
          background: #E5E5E5;
          &::after {
            position: absolute;
            content: '';
            display: block;
            left: -8px;
            top: -4px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #E5E5E5;
          }
        }
      }
      &.noLine {
        .line {
          display: none;
        }
      }
      &.spItem {
        .line {
          position: absolute;
          top: 292px;
          right: -40px;
          width: 3px;
          height: 156px;
          background: #E5E5E5;
          transform: rotate(-180deg);
          &::after {
            position: absolute;
            content: '';
            display: block;
            left: -4px;
            bottom: 0px;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: #E5E5E5;
          }
        }
      }
    }
    .image {
      width: 224px;
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
      text-align: center;
    }
    .info {
      max-width: 200px;
      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #A6AAB1;
      line-height: 32px;
      margin-top: 12px;
      text-align: center;
    }
  }
}
</style>
