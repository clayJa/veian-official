<template>
  <div class="discover-wrapper clearfix">
    <div class="discover" @click="clickPrev">
      <img src="@/static/trust/creativity/discover_image.jpg" alt="">
      <div class="text-wrapper">
        <div class="text">
          <div class="title">发现不同</div>
          <div class="info">让每一个梦想脱颖而出</div>
          <div class="button">更多发现，由你开启</div>
        </div>
      </div>
    </div>
    <div class="join" @click="clickNext">
       <img src="@/static/trust/creativity/join_image.jpg" alt="">
      <div class="text-wrapper">
       <div class="text">
        <div class="title">用户 最亲密的朋友</div>
        <div class="info">下一个故事·由你讲述</div>
        <div class="button">详细了解</div>
       </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      pages: [
        { name: '创意交互设计', path: '/confidence/creativity/cyjhsj', title: '', info: '' },
        { name: '视频数字化应用', path: '/confidence/creativity/spszhyy' , title: '', info: ''},
        { name: '视觉识别系统 (VI)', path: '/confidence/creativity/sjsbxt' , title: '', info: ''},
        { name: '全景虚拟现实 (VR)', path: '/confidence/creativity/qjxnxs' , title: '', info: ''},
        { name: '年度设计服务', path: '/confidence/creativity/ndsjfw' , title: '', info: ''},
        { name: '高端网站定制', path: '/confidence/develop/gdwzdz' , title: '', info: ''},
        { name: '小程序定制开发', path: '/confidence/develop/xcxdzkf' , title: '', info: ''},
        { name: 'APP定制开发', path: '/confidence/develop/appdzkf' , title: '', info: ''},
        { name: 'H5定制开发', path: '/confidence/develop/h5dzkf' , title: '', info: ''},
        { name: '电商定制开发', path: '/confidence/develop/dsdzkf' , title: '', info: ''},
        { name: '业务系统定制开发', path: '/confidence/develop/ywxtdz' , title: '', info: ''},
        { name: 'SEO&SEM', path: '/confidence/marketing/seo' , title: '', info: ''},
        { name: '新媒体营销', path: '/confidence/marketing/xmtyx' , title: '', info: ''},
        { name: '海外营销', path: '/confidence/marketing/hwyx' , title: '', info: ''},
        { name: '电商代运营', path: '/confidence/operation/dsdyy' , title: '', info: ''},
        { name: '网站代运营', path: '/confidence/operation/wzdyy' , title: '', info: ''},
        { name: '新媒体代运营', path: '/confidence/operation/xmtdyy' , title: '', info: ''},
      ],
      activeIndex: 0
    }
  },
  mounted() {
    const current = this.$nuxt.$route.path;
    this.activeIndex = this.pages.findIndex(it => it.path === current || current.includes(it.path))
  },
  computed: {
    nextIndex() {
      return this.activeIndex === this.pages.length - 1 ? 0 : this.activeIndex + 1
    },
    prevIndex() {
      return this.activeIndex === 0 ? this.pages.length - 1 : this.activeIndex - 1
    },
  },
  methods: {
    clickNext() {
      this.$router.push(this.pages[this.nextIndex].path)
    },
    clickPrev() {
      this.$router.push(this.pages[this.prevIndex].path)
    }
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
.discover-wrapper {
  img {
    width: 100%;
    height: 100%;
  }
  .discover,.join {
    width: 50%;
    position: relative;
    float: left;
  }
  .text-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: #FFFFFF;
    background: fade(#192030,60);
    &:hover {
      background: fade(#1A82FF,80);
      transition: all 1s;
    }
    .text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
    }
    .title {
      font-size: 56px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 78px;
      white-space: nowrap;
    }
    .info {
      font-size: 20px;
      white-space: nowrap;
    }
    .button {
      display: inline-block;
      padding: 16px 32px;
      border-radius: 28px;
      border: 1px solid #FFFFFF;
      cursor: pointer;
      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 25px;
      margin-top: 48px;
      min-width: 226px;
      text-align: center;
    }
  }
  @media only screen and (max-width: 760px) {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .discover,.join {
      width: 100%;
      height: 448px;
      float: none;
    }
    .text-wrapper {
      .title {
        font-size: 40px;
        line-height: 56px;
      }
      .info {
        font-size: 20px;
      }
      .button {
        white-space: nowrap;
        padding: 16px 32px;
        border-radius: 28px;
        border: 1px solid #FFFFFF;
        font-size: 18px;
        line-height: 25px;
        margin-top: 48px;
        min-width: 226px;
      }
    }
  }
}
</style>
