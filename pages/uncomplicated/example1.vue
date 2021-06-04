<template>
  <div class="simple-example1">
    <Header :class="scroll ? '' : 'static'"></Header>
    <div class="banner">
      <div class="content">
        <img src="@/static/simple/example1_bannner.jpg" alt="">
      </div>
    </div>
    <div class="introduction">
      <div class="title">南孚电池</div>
      <div class="content-wrapper">
        <div class="container">
          <div class="info-wrapper">
            <div class="info">南孚电池品牌官网，以产品为导向，进一步锁定年轻群体，将南孚的产品形象和企业形象年轻化、国际化</div>
            <div class="logo">
                <img src="@/static/simple/example1_logo.png" alt="">
              </div>
          </div>
          <div class="image1">
            <div class="image-wrapper">
              <img src="@/static/simple/example1_image1.jpg" alt="">
            </div>
            <div class="sharp"></div>
          </div>
          <div class="title-wrapper">
            <h2>科技创新，闪耀国际舞台</h2>
            <p>专注于小电池领域，坚持以科技为先导、以产品为重心、以客户为中心。</p>
          </div>
          <div class="image2">
            <div class="image-wrapper">
              <img src="@/static/simple/example1_image2.jpg" alt="">
            </div>
            <div class="sharp"></div>
          </div>
          <div class="image-wrapper image3">
            <img src="@/static/simple/example1_image3.jpg" alt="">
          </div>
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
  //  name: 'simple-example1',
  data() {
    return {
      scroll: false
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
    }
  },
  mounted() {
    window.addEventListener('scroll', this.getScrollStatus)
  },
  components: {
    Header,
    Footer,
    Join,
  }
}
</script>

<style lang="less" scoped>
.simple-example1 {
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
  }
  @media only screen and (max-width: 760px) {
  .content {
    position: relative;
    height: 506px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 12% 0;
    }
  }
}
}
.introduction {
  background-color: #fff;
  img {
    width: 100%;
  }
  .title {
    font-size: 56px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #03101F;
    line-height: 78px;
    padding-top: 96px;
    padding-left: 135px;
    padding-bottom: 48px;
  }
  .content-wrapper {
    background: #1A82FF;
    border-top-left-radius: 102px;
    border-top-right-radius: 102px;
    padding-bottom: 144px;
    padding-top: 96px;
    .info {
      font-size: 20px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #FFFFFF;
      line-height: 32px;
      padding-bottom: 112px;
    }
    .info-wrapper {
      position: relative;
      .logo {
        position: absolute;
        right: 0;
        top: 0;
        width: 240px;
        height: 240px;
        background: #FFFFFF;
        box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
        border-radius: 16px;
        padding: 0 10px;
        transform: translateY(-87%);
        img {
          margin-top: 50%;
          transform: translateY(-50%);
        }
      }
    }
    .image-wrapper {
      position: relative;
      padding: 16px;
      border-radius: 16px;
      background: #fff;
      z-index: 1;
    }
    .title-wrapper {
      margin-top: 100px;
      margin-bottom: 92px;
      h2 {
        font-size: 56px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 64px
      }
      p {
        height: 32px;
        font-size: 20px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #FFFFFF;
        line-height: 32px;
        margin-bottom: 0;
        margin-top: 24px;
      }
    }
    .sharp {
      position: absolute;
      width: 176px;
      height: 176px;
      right: 0;
      top: 0;
      z-index: 0;
      background-image: url('@/static/Combined_Shape_light.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
    .image1 {
      position: relative;
      .sharp {
        transform: translate(25%, -25%);
      }
    }
    .image2 {
      position: relative;
      margin-bottom: 96px;
      .sharp {
        transform: translate(25%, -52%);
      }
    }
  }
  @media only screen and (max-width: 760px) {
    .title {
      font-size: 40px;
      line-height: 56px;
      padding-top: 96px;
      padding-bottom: 158px;
      padding-left: 16px;
    }
      .content-wrapper {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      padding-bottom: 144px;
      padding-top: 162px;
      .info {
        font-size: 20px;
        font-weight: 300;
        line-height: 32px;
        padding-bottom: 48px;
      }
      .info-wrapper {
        .logo {
          right: 0;
          left: 16px;
          width: 240px;
          height: 240px;
          box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
          border-radius: 16px;
          padding: 0 10px;
          transform: translateY(-118%);
          img {
            margin-top: 50%;
            transform: translateY(-50%);
          }
        }
      }
      .image-wrapper {
        padding: 16px;
        border-radius: 10px;
      }
      .title-wrapper {
        margin-top: 96px;
        margin-bottom: 96px;
        h2 {
          font-size: 40px;
          line-height: 56px
        }
        p {
          height: 32px;
          font-size: 20px;
          line-height: 32px;
          margin-bottom: 0;
          margin-top: 24px;
        }
      }
      .sharp {
        position: absolute;
        width: 176px;
        height: 176px;
        right: 0;
        top: 0;
        z-index: 0;
        background-image: url('@/static/Combined_Shape_light.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }
      .image1 {
        position: relative;
        .sharp {
          transform: translate(10%, -10%);
        }
      }
      .image2 {
        position: relative;
        margin-bottom: 96px;
        .sharp {
          transform: translate(25%, -20%);
        }
      }
    }
  }
}
</style>
