<template>
  <div class="simple-example3">
    <Header :class="scroll ? '' : 'static'"></Header>
    <div class="banner">
      <div class="content">
        <img src="@/static/simple/example3_banner.jpg" alt="">
        <div class="text">
          <div class="container">
            <div class="info1">Project Introduction</div>
            <div class="info2">瑰珀翠</div>
            <div class="info3">用户体验 / 交互设计</div>
          </div>
        </div>
      </div>
    </div>
    <div class="introduction">
      <div class="description container">
        <div class="project-info">
          <div class="project">瑰珀翠</div>
          <div class="detail">瑰珀翠（英文名字Crabtree & Evelyn），灵感来自十七世纪极负盛名的作家与园艺学家“John Evelyn”（约翰•爱芙蓉）。由制造香皂的家庭企业起家，至今已有30年的历史。作为象征英国优雅贵族气息的品牌，许多好莱坞影片里都可以看见Crabtree & Evelyn的影子。</div>
        </div>
        <div class="logo">
          <img src="@/static/simple/example3_logo.png" alt="">
        </div>
      </div>
      <div class="image-list">
        <div class="image-wrapper container">
          <img src="@/static/simple/example3_image1.jpg" alt="">
        </div>
        <div class="image-wrapper container">
          <img src="@/static/simple/example3_image2.jpg" alt="">
        </div>
        <div class="image-wrapper fixed-image"
          :style="{backgroundImage: `url(${require('@/static/simple/example3_image3.jpg')})`}"
          ref="list_2"
        >
          <div class="before"></div>
          <div class="after"></div>
        </div>
        <div class="info container">
          <div class="info-title">微交互设计，卡片式布局结合</div>
          <div class="info-detail">运用微交互设计理念搭建Shop、Inspire、Discover、Connect等多个服务平台，结合卡片式布局提升网站美观性、实用性，搭配精美图片合理布局，有效吸引消费者注意力，全方位满足用户浏览体验。</div>
        </div>
        <div class="image-wrapper container">
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
        </div>
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
export default {
   name: 'simple-example3',
  data() {
    return {
      scroll: false,
      list: [0,0,1,0,0,0,0,1]
    }
  },
  methods: {
    toPath() {
    },
    getScrollStatus() {
      const doc = document.documentElement
      const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
      if (top > 100) {
        this.scroll = true
      } else if (top < 100) {
        this.scroll = false
      }
    },
    getElement() {
      this.list.forEach((item,index) => {
        if(item === 1) {
          const el = this.$refs[`list_${index}`]
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
    window.addEventListener('scroll', this.getScrollStatus)
    window.addEventListener('scroll', this.getElement)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.getScrollStatus)
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
    /deep/ .header-wrapper .nav-wrapper .nav-item:hover a {
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
}
.introduction {
  background: #F7F7F7;
  img {
    width: 100%;
  }
  .description {
    padding-top: 80px;
    display: flex;
    justify-content: space-between;
    .project-info {
      width: 850px;
      flex-grow: 0;
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
      width: 240px;
      height: 240px;
      background: #FFFFFF;
      box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.2);
      border-radius: 16px;
      padding: 0 20px;
      flex-shrink: 0;
      margin-left: 80px;
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
}
</style>
