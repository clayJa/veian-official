<template>
  <div>
    <Header></Header>
    <ConfidenceBanner
      :imgae="bannerObj.image"
      :title="bannerObj.name"
      :info="bannerObj.description"
     />
     <div class="list-wrapper">
      <div class="sharp"></div>
      <div class="list-image clearfix">
        <div class="image-item" v-for="item in imageList" :key="item.infoZh">
          <img :src="item.image" alt="">
          <div class="image-info">
            <div class="zh-title">{{item.infoZh}}</div>
            <div class="en-title">{{item.infoEn}}</div>
          </div>
        </div>
      </div>
     </div>
     <div class="part2 container">
        <div class="part2-title">场景、情感化设计原理</div>
        <div class="part2-info">从客户切身定位出发，充分了解客户，挖掘客户实际需求。根据用户浏览、行为等特点进行创意化设计。以完成响应客户情感以及需求，并达成客户共鸣，从而达到用户访问和相互传播的需要。</div>
        <div class="user-centered-design clearfix">
          <div class="left-model">
            <img src="@/static/trust/creativity/user_centered_design.png" alt="">
          </div>
          <div class="feature">
            <div class="feature-item">
              <div class="title">
                <div class="line"><div class="dot"></div></div>
                <span>浏览特点</span>
              </div>
              <div class="info">W型的阅读曲线</div>
              <div class="info">快速浏览重要信息取代细致阅读</div>
              <div class="info">视觉浏览规律有行为轨迹可循</div>
            </div>
            <div class="feature-item">
              <div class="title">
                <div class="line"><div class="dot"></div></div>
                <span>用户特点</span>
              </div>
              <div class="info">用户在表现层很忙</div>
              <div class="info">用户都比较懒</div>
              <div class="info">选择即成本</div>
              <div class="info">时间碎片化</div>
            </div>
            <div class="feature-item">
              <div class="title">
                <div class="line"><div class="dot"></div></div>
                <span>行为特点</span>
              </div>
              <div class="info">与日常的行为有所差异</div>
              <div class="info">反义需求重点倒置</div>
              <div class="info">行为轨迹特点可以得到合理利用</div>
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
import ProjectStep from '@/components/confidence/ProjectStep/index.vue'
import Discover from '@/components/confidence/Discover/index.vue'
export default {
  data() {
    return {
      imageList: [
        { image: require('@/static/trust/creativity/cyjhsj_image1.png'), infoZh: '为塑造', infoEn: 'Shape' },
        { image: require('@/static/trust/creativity/cyjhsj_image2.png'), infoZh: '为联想', infoEn: 'Lenovo' },
        { image: require('@/static/trust/creativity/cyjhsj_image3.png'), infoZh: '为传达', infoEn: 'Convey' },
        { image: require('@/static/trust/creativity/cyjhsj_image4.png'), infoZh: '为传播', infoEn: 'Spread' },
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
    ProjectStep,
    Discover,
  }
}
</script>

<style lang="less" scoped>
.list-wrapper {
  position: relative;
  .sharp {
    position: absolute;
    width: 176px;
    height: 176px;
    right: 189px;
    top: 64px;
    z-index: 0;
    background-image: url('@/static/Combined_Shape_333.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}
.list-image {
  padding: 152px 135px 135px 114px;
  img {
    width: 100%;
    height: 100%;
    border-radius: 24px;
  }
  .image-item {
    float: left;
    width: 570px;
    margin-right: 30px;
    margin-bottom: 30px;
    position: relative;
    &:nth-child(2n) {
      margin-right: 0;
    }
    .image-info {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 276px;
      height: 103px;
      background: #FFFFFF;
      border-radius: 0px 24px 0px 24px;
      padding-top: 18px;
      padding-left: 48px;
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
        color: #A6AAB1;
        line-height: 22px;
        margin-top: 12px;
      }
    }
  }
  @media only screen and (max-width: 760px) {
      padding: 96px 16px 0px 16px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 24px;
      }
      .image-item {
        float: none;
        width: 100%;
        height: 319px;
        margin-right: 0;
        margin-bottom: 0;
        border-radius: 24px;
        margin-bottom: 30px;
        &:last-child {
          margin-bottom: 0;
        }
        .image-info {
          width: 276px;
          height: 103px;
          border-radius: 0px 24px 0px 24px;
          padding-top: 18px;
          padding-left: 48px;
          .zh-title {
            font-size: 32px;
            line-height: 32px;
          }
          .en-title {
            font-size: 16px;
            line-height: 22px;
            margin-top: 12px;
          }
        }
      }
  }
}
.part2 {
  .part2-title {
    font-size: 56px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #474747;
    line-height: 64px;
  }
  .part2-info {
    font-size: 20px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #474747;
    line-height: 32px;
    margin-top: 24px;
    margin-bottom: 96px;
  }
  .user-centered-design {
    padding-bottom: 144px;
    .left-model {
      float: left;
      width: 685px;
      img {
        width: 100%;
      }
    }
    .feature {
      float: right;
      .feature-item {
        margin-bottom: 48px;
        .title {
          position: relative;
          font-size: 24px;
          font-family: PingFangSC-Semibold, PingFang SC;
          font-weight: 600;
          color: #1A82FF;
          line-height: 33px;
          margin-bottom: 8px;
          .line {
            position: absolute;
            left: 0;
            top: 50%;
            transform: translate(-156px,-50%);
            width: 100px;
            border-bottom: 1px dashed #1A82FF;
          }
          .dot {
            right: 0;
            top: 50%;
            transform: translate(16px,-50%);
            position: absolute;
            width: 10px;
            height: 10px;
            background: #1A82FF;
            border-radius: 50%;
          }
        }
        .info {
          position: relative;
          font-size: 20px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #474747;
          line-height: 30px;
          &::after {
            position: absolute;
            content: '·';
            left: -1em;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 760px) {
    padding-top: 96px;
      .part2-title {
        font-size: 40px;
        line-height: 56px;
      }
      .part2-info {
        margin-top: 24px;
        margin-bottom: 35px;
        font-size: 20px;
        line-height: 32px;
      }
      .user-centered-design {
        padding-bottom: 96px;
        .left-model {
          float: none;
          width: 100%;
          margin-bottom: 48px;
          img {
            width: 100%;
          }
        }
        .feature {
          float: right;
          .feature-item {
            margin-bottom: 24px;
            .title {
              position: relative;
              font-size: 22px;
              font-family: PingFangSC-Semibold, PingFang SC;
              font-weight: 600;
              color: #1A82FF;
              line-height: 28px;
              margin-bottom: 8px;
              .line {
                position: absolute;
                left: 0;
                top: 50%;
                transform: translate(-86px,-50%);
                width: 60px;
                border-bottom: 1px dashed #1A82FF;
              }
              .dot {
                right: 0;
                top: 50%;
                transform: translate(16px,-50%);
                position: absolute;
                width: 10px;
                height: 10px;
                background: #1A82FF;
                border-radius: 50%;
              }
            }
            .info {
              position: relative;
              font-size: 18px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #474747;
              line-height: 30px;
              &::after {
                position: absolute;
                content: '·';
                left: -1em;
              }
            }
          }
        }
      }
  }
}
</style>
