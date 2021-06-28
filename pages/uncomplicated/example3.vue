<template>
  <div class="simple-example3">
    <Header></Header>
    <div class="banner">
      <div class="content">
        <img :src="`/imageHost/${pageData.bannerImage}`" alt="">
        <div class="text">
          <div class="container">
            <div class="info1">{{pageData.bannerTitleEn}}</div>
            <div class="info2">{{pageData.bannerTitle1}}</div>
            <div class="info3">{{pageData.bannerTitle2}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="introduction">
      <div class="description container clearfix">
        <div class="project-info">
          <div class="project">{{pageData.brandTitle}}</div>
          <div class="detail">{{pageData.brandInfo}}</div>
        </div>
        <div class="logo">
          <img :src="`/imageHost/${pageData.brandLogo}`" alt="">
        </div>
      </div>
      <div class="image-list">
        <div :class="['image-wrapper',item.hasEffects === 1 ? 'fixed-image' : 'container']"
          v-for="(item,index) in list" :key="index"
          :style="{backgroundImage: item.hasEffects === 1 ? `url(${item.img})` : 'none'}"
          :ref="`list_${index}`"
        >
          <img :src="item.img" alt="" v-if="item.hasEffects !== 1">
          <template v-else>
            <div class="before"></div>
            <div class="after"></div>
          </template>
        </div>
        <!-- <div class="image-wrapper container">
          <img src="@/static/simple/example3_image2.jpg" alt="">
        </div>
        <div class="image-wrapper fixed-image"
          :style="{backgroundImage: `url(${require('@/static/simple/example3_image3.jpg')})`}"
          ref="list_2"
        >
          <div class="before"></div>
          <div class="after"></div>
        </div> -->
        <!-- <div class="info container">
          <div class="info-title">微交互设计，卡片式布局结合</div>
          <div class="info-detail">运用微交互设计理念搭建Shop、Inspire、Discover、Connect等多个服务平台，结合卡片式布局提升网站美观性、实用性，搭配精美图片合理布局，有效吸引消费者注意力，全方位满足用户浏览体验。</div>
        </div> -->
        <!-- <div class="image-wrapper container">
          <img src="@/static/simple/example3_image4.jpg" alt="">
        </div>
        <div class="image-wrapper container">
          <img src="@/static/simple/example3_image5.jpg" alt="">
        </div>
        <div class="image-wrapper container">
          <img src="@/static/simple/example3_image6.jpg" alt="">
        </div>
        <div class="image-wrapper container">
          <img src="@/static/simple/example3_image7.jpg" alt="">
        </div>
        <div class="image-wrapper fixed-image"
          :style="{backgroundImage: `url(${require('@/static/simple/example3_image8.jpg')})`}"
          ref="list_7"
        >
          <div class="before"></div>
          <div class="after"></div>
        </div> -->
      </div>
    </div>
    <Join />
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
import Join from '@/components/Join/index.vue'
import { caseDetail } from '@/service/news'
export default {
  //  name: 'simple-example3',
  data() {
    return {
      scroll: false,
      list: [],
      pageData: {}
    }
  },
  methods: {
    toPath() {
    },
    async requestData() {
      const query = this.$route.query
      const res: any = await caseDetail({case_id: query.id})
      this.pageData = res.content_body
      const effects = (res.content_body.effects || '').split(',').map(Number)
      const list = (res.content_body.images || [] ).map((it,index)=> {
        return {
          img: `/imageHost/${it}`,
          hasEffects: effects.includes(index + 1) ? 1 : 0
        }
      })
      this.list = list
      this.$nextTick(() => {
        window.addEventListener('scroll', this.getElement)
      })
    },
    getElement() {
      this.list.forEach((item,index) => {
        if(item.hasEffects === 1) {
          const el = this.$refs[`list_${index}`][0]
          const { height, top } = el.getBoundingClientRect()
          if(top <= 100 + height && top >= 100) {
            el.querySelector('.before').style.width =  (top - 100) / (100 + height) * 20 + '%';
            el.querySelector('.after').style.width =  (top - 100) / (100 + height) * 20 + '%';
          } else {
            el.querySelector('.before').style.width =  0;
            el.querySelector('.after').style.width =  0;
          }
        }
      });
    }
  },
  mounted() {
    this.requestData()
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.getElement)
  },
  components: {
    Header,
    Footer,
    Join,
  }
}
</script>

<style lang="less" scoped>
.simple-example3 {
  .static {
    &.header-nav {
      position: fixed;
      z-index: 999;
    }
    /deep/ .header {
      background-color: transparent;
      border-bottom: 1px solid fade(#D0E5FF, 10);
    }
    /deep/ .header-wrapper .logo {
      background-image: url('@/assets/images/logo_white.png');
    }
    /deep/ .header-wrapper .nav-wrapper .nav-item > a {
      color: fade(#fff,60) ;
    }
    /deep/ .header-wrapper .nav-wrapper .nav-item:hover > a {
      color: #1A82FF;
    }
    /deep/ .header-wrapper .search-wrapper .icon {
      color: fade(#fff,60) ;
    }
  }
}
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
      top: 239px;
      text-align: center;
      .info1 {
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 32px;
        margin-bottom: 24px;
        text-transform: uppercase;
      }
      .info2 {
        font-size: 72px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        line-height: 100px;
        margin-bottom: 24px;
      }
      .info3 {
        font-size: 32px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #FFFFFF;
        line-height: 42px;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    height: 700px;
    .content {
      height: 100%;
      .text {
        top: 266px;
        .info1 {
          font-size: 14px;
          line-height: 32px;
          margin-bottom: 24px;
        }
        .info2 {
          font-size: 40px;
          line-height: 56px;
          margin-bottom: 24px;
        }
        .info3 {
          font-size: 24px;
          line-height: 32px;
        }
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 32% 0;
    }
  }
}
.introduction {
  background: #F7F7F7;
  img {
    width: 100%;
  }
  .description {
    padding-top: 80px;
    .project-info {
      width: 850px;
      float: left;
      .project {
        font-size: 56px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #03101F;
        line-height: 78px;
        margin-bottom: 24px;
      }
      .detail {
        font-size: 16px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #474747;
        line-height: 32px;
      }
    }
    .logo {
      float: right;
      width: 240px;
      height: 240px;
      background: #FFFFFF;
      box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.2);
      border-radius: 16px;
      padding: 0 20px;
      display: flex;
      align-items: center;
    }
  }
  .image-list {
    .image-wrapper {
      margin-top: 96px;
    }
    .info {
      padding-top: 96px;
      .info-title {
        font-size: 56px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #474747;
        line-height: 64px;
        margin-bottom: 36px;
      }
      .info-detail {
        font-size: 16px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #474747;
        line-height: 32px
      }
    }
    .fixed-image {
      position: relative;
      width: 100%;
      height: 100vh;
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
      z-index: 90;
      image-rendering: auto;
      .before {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 0%;
        background: #F7F7F7;
      }
      .after {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 0%;
        background: #F7F7F7;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    padding: 32px 16px;
    .description {
      background: #fff;
      padding: 64px 24px;
      .project-info {
        width: 100%;
        float: none;
        .title {
          font-size: 32px;
          line-height: 45px;
          padding-bottom: 16px;
          margin-bottom: 26px;
          &::after {
            width: 45px;
            height: 2px;
            border-radius: 4px;
          }
        }
        .project {
          font-size: 20px;
          line-height: 28px;
          margin-bottom: 20px;
        }
        .detail {
          font-size: 16px;
          line-height: 32px;
          margin-bottom: 24px;
          max-width: 100%;
        }
      }
      .logo {
        float: none;
        width: 240px;
        height: 240px;
        border-radius: 16px;
        border: 2px solid #E5E5E5;
        padding: 0 26px;
        margin: auto;
      }
    }
    .image-list {
      padding: 64px 24px;
      margin-top: 32px;
    }
  }
}
</style>
