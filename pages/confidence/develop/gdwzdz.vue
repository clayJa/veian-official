<template>
  <div>
    <Header></Header>
    <ConfidenceBanner
      :imgae="require('@/static/trust/develop/gdwzdz_banner.jpg')"
      title="高端网站定制"
      info="打造品牌专属定制网站，驱动品牌创新发展。每一个细节都将恒久远的纯高品质"
     />
     <div class="list-image clearfix">
       <div class="sharp"></div>
       <div class="image-item" v-for="item in imageList" :key="item.infoZh">
         <img :src="item.image" alt="">
         <div class="image-info">
           <div class="zh-title">{{item.infoZh}}</div>
           <div class="en-title">{{item.infoEn}}</div>
         </div>
       </div>
     </div>
     <div class="part2 clearfix">
       <div class="title-wrapper">
        <div class="part2-info">遵循以用户切身需求为中心的原则，建立规范严谨的执行方法论，通过全方位挖掘客户真实诉求，达成明确需求共识。在执行过程中，寻求以实现客户需求为最大价值的核心思想导向，满足客户在品宣、能力、调性、呈现等不同层面的需要以及形象。</div>
       </div>
       <div class="image-wrapper">
         <img src="@/static/trust/develop/gdwzdz_image.png" alt="">
       </div>
     </div>
     <div class="service">
       <div class="service-title">
         <div class="en">our service</div>
         <div class="zh">我们的服务</div>
       </div>
       <div class="service-list">
         <div class="sharp"></div>
         <div class="service-item clearfix" v-for="item in serviceList" :key="item.titleZh">
           <div class="image">
             <img :src="item.image" alt="">
           </div>
           <div class="description">
             <div class="en-title">{{ item.titleEn }}</div>
             <div class="zh-title">{{ item.titleZh }}</div>
             <div class="info">{{ item.info }}</div>
           </div>
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
        { image: require('@/static/trust/develop/gdwzdz_image1.png'), infoZh: '用户画像', infoEn: 'User portrait' },
        { image: require('@/static/trust/develop/gdwzdz_image2.png'), infoZh: '严谨原则', infoEn: 'Rigorous principle' },
        { image: require('@/static/trust/develop/gdwzdz_image3.png'), infoZh: '品质输出', infoEn: 'Quality output' },
      ],
      serviceList: [
        { image: require('@/static/trust/develop/service1.png'), titleZh: '网站建设', titleEn: 'Web',
          info: '具备成熟的规划策略与开发技术，为客户提供全链路全方位的高端定制网站建设服务'
        },
        { image: require('@/static/trust/develop/service2.png'), titleZh: '电子商务解决方案', titleEn: 'E-commerce',
          info: '以企业电商化的战略高度为出发点，提供多种商业模式的电商解决方案建设服务'
        },
        { image: require('@/static/trust/develop/service3.png'), titleZh: '平台化整体解决方案', titleEn: 'Platformization',
          info: '根据品牌以及业务需求，打通行业全生态产业资源，一体化的服务平台'
        },
        { image: require('@/static/trust/develop/service4.png'), titleZh: '大数据可视化', titleEn: 'Big Data',
          info: '将巨量数据提炼成简洁、生动的视觉呈现，进而以丰富的交互效果，最终实现数据价值以及规律视觉化'
        },
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
.list-image {
  padding: 144px 159px;
  position: relative;
  .sharp {
    position: absolute;
    width: 176px;
    height: 176px;
    right: 189px;
    top: 56px;
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
    width: 322px;
    margin-right: 78px;
    position: relative;
    box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
    border-radius: 24px;
    &:last-child {
      margin-right: 0;
    }
    .image-info {
      position: absolute;
      left: -24px;
      right: -24px;
      bottom: 48px;
      height: 124px;
      background: #FFFFFF;
      border-radius: 15px;
      padding-top: 30px;
      padding-left: 64px;
      .zh-title {
        font-size: 32px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #474747;
        line-height: 32px;
      }
      .en-title {
        font-size: 16px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #474747;
        line-height: 22px;
        margin-top: 12px;
      }
    }
  }
}
.part2 {
  padding: 77px 61px 25px 135px;
  background: #F7F7F7;
  img {
    width: 100%;
    height: 100%;
  }
  .title-wrapper {
    float: left;
    margin-top: 85px;
  }
  .image-wrapper {
    float: right;
    width: 683px;
  }
  .part2-info {
    max-width: 521px;
    font-size: 24px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #474747;
    line-height: 42px;
  }
}
.service {
  padding: 96px 135px 48px 135px;
  .service-title {
    .en {
      text-align: center;
      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #474747;
      line-height: 32px;
      letter-spacing: 2px;
      margin-bottom: 24px;
      text-transform: uppercase;
    }
    .zh {
      text-align: center;
      font-size: 56px;
      font-family: PingFangSC-Semibold, PingFang SC;
      font-weight: 600;
      color: #03101F;
      line-height: 64px;
    }
  }
  .service-list {
    margin-top: 96px;
    position: relative;
    border: 1px solid red;
      .sharp {
        position: absolute;
        width: 176px;
        height: 176px;
        right: 32px;
        top: 16px;
        z-index: 0;
        background-image: url('@/static/Combined_Shape_333.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
    .service-item {
      margin-bottom: 96px;
      &:nth-child(2n + 1) {
        .image {
          float: right;
        }
        .description {
          float: left;
        }
      }
      .image {
        float: left;
        width: 510px;
        border-radius: 24px;
        img {
          width: 100%;
          border-radius: 24px;
        }
      }
      .description {
        float: right;
        margin-top: 154px;
        max-width: 510px;
        .en-title {
          width: 170px;
          height: 40px;
          background: fade(#1A82FF,10);
          border-radius: 3px;
          font-size: 17px;
          font-family: PingFangSC-Light, PingFang SC;
          font-weight: 300;
          color: #1A82FF;
          line-height: 40px;
          margin-bottom: 34px;
          text-align: center;
        }
        .zh-title {
          font-size: 56px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #474747;
          line-height: 80px;
          margin-bottom: 24px;
        }
        .info {
          font-size: 20px;
          font-family: PingFangSC-Light, PingFang SC;
          font-weight: 300;
          color: #474747;
          line-height: 32px;
        }
      }
    }
  }
}
</style>
