<template>
  <div class="about-wrapper">
    <div class="background-wrapper">
      <img :src="require('@/assets/images/index/home_about_background.png')" class="background" />
      <svg width="1440px" height="553px" viewBox="0 0 1440 553" version="1.1" class="dot"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <title>Image_Portfolio</title>
          <defs>
              <rect id="path-1" x="0" y="0" width="1440" height="553"></rect>
          </defs>
          <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="Image_Portfolio">
                  <mask id="mask-2" fill="white">
                      <use xlink:href="#path-1"></use>
                  </mask>
                  <use id="Background" fill="transparent" xlink:href="#path-1"></use>
                  <circle id="Dot2" stroke="#1A82FF" fill="#D0E5FF" mask="url(#mask-2)" cx="314" cy="483" r="3.5">
                    <animate attributeName="r" values="3.5;6;3.5" dur="2.5s" repeatCount="indefinite" class="magnify"/>
                  </circle>
                  <circle id="Dot3" stroke="#1A82FF" fill="#D0E5FF" mask="url(#mask-2)" cx="540" cy="40" r="3.5">
                    <animate attributeName="r" values="3.5;6;3.5" dur="2.5s" repeatCount="indefinite" class="magnify"/>
                  </circle>
                  <circle id="Dot4" stroke="#1A82FF" fill="#D0E5FF" mask="url(#mask-2)" cx="174" cy="207" r="3.5">
                    <animate attributeName="r" values="3.5;6;3.5" dur="2.5s" repeatCount="indefinite" class="magnify"/>
                  </circle>
                  <circle id="Dot8" stroke="#1A82FF" fill="#D0E5FF" mask="url(#mask-2)" cx="1231" cy="489" r="3.5">
                    <animate attributeName="r" values="3.5;6;3.5" dur="2.5s" repeatCount="indefinite" class="magnify"/>
                  </circle>
                  <circle id="Dot8-Copy" stroke="#1A82FF" fill="#D0E5FF" mask="url(#mask-2)" cx="1086" cy="371" r="3.5">
                    <animate attributeName="r" values="3.5;6;3.5" dur="2.5s" repeatCount="indefinite" class="magnify"/>
                  </circle>
                  <circle id="Dot9-Copy" stroke="#1A82FF" fill="#D0E5FF" mask="url(#mask-2)" cx="74" cy="96" r="3.5">
                    <animate attributeName="r" values="3.5;6;3.5" dur="2.5s" repeatCount="indefinite" class="magnify"/>
                  </circle>
                  <circle id="Dot11" stroke="#1A82FF" fill="#D0E5FF" mask="url(#mask-2)" cx="1405" cy="337" r="3.5">
                    <animate attributeName="r" values="3.5;6;3.5" dur="2.5s" repeatCount="indefinite" class="magnify"/>
                  </circle>
                  <circle id="Dot11-copy" stroke="#1A82FF" fill="#D0E5FF" mask="url(#mask-2)" cx="1246" cy="141" r="3.5">
                    <animate attributeName="r" values="3.5;6;3.5" dur="2.5s" repeatCount="indefinite" class="magnify"/>
                  </circle>
              </g>
          </g>
          <!-- <script type="text/ecmascript" :xlink:href="require('@/static/js/smil.check.js')" /> -->
      </svg>
    </div>
    <div class="content">
      <div class="title">关于 未苒科技</div>
      <div class="description">
        <div class="d-md-none">
          <div>未苒网络科技（杭州）成立于2017年，作为中国互联网资深服务商</div>
          <div>专注于互联网平台开发、新媒体运营服务、云计算服务三大板块，致力于为一流的品牌提供互联网全案服务。</div>
          <div>未苒网络科技已经成功为众多世界五百强、中国五百强企业提供网站建设服务，</div>
          <div>并在微信公众号运营、云架构咨询服务得到客户和行业的一致认可。</div>
        </div>
        <div class="d-none d-md-block">
          未苒网络科技（杭州）成立于2017年，作为中国互联网资深服务商。专注于互联网平台开发、新媒体运营服务、云计算服务三大板块，致力于为一流的品牌提供互联网全案服务。未苒网络科技已经成功为众多世界五百强、中国五百强企业提供网站建设服务，并在微信公众号运营、云架构咨询服务得到客户和行业的一致认可。
        </div>
      </div>
      <a href="/about/introduce">
        <PillButton class="button">
          <span>了解未苒科技</span>
          <i class="iconfont" style="margin-left: 12px;">&#xe61e;</i>
        </PillButton>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import PillButton from '@/components/PillButton/index.vue'
export default {
  name: 'About',
  data() {
    return {
    }
  },
  methods: {
    toPath() {
      console.log(1111)
    }
  },
  components: {
    PillButton,
  }
}
</script>

<style lang="less" scoped>
// @keyframes scale_dot  {
//   from { transform: scale(1); opacity: 1; }
//   to { transform: scale(1.5); opacity: 1; }
// }
.about-wrapper {
  position: relative;
  overflow: hidden;
  .background {
    width: 100%;
  }
  .background-wrapper {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 0;
  }
  .dot {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    z-index: 0;
  }
  .content {
    position: relative;
    text-align: center;
    .title {
      margin-top: 96px;
      margin-bottom: 60px;
      font-size: 56px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #03101F;
      line-height: 78px;
      position: relative;
      &::after {
        bottom: -24px;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
        content: '';
        display: block;
        background: #1A82FF;
        width: 45px;
        height: 5px;
        border-radius: 3.5px;
      }
    }
    .description {
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: fade(#03101F, 60);
      line-height: 30px;
      margin-bottom: 32px;
    }
    .button {
      font-size: 20px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      padding: 20px 44px;
      border-radius: 35px;
      margin-bottom: 96px;
    }
    @media only screen and (max-width: 760px) {
      .title {
        margin-top: 96px;
        margin-bottom: 60px;
        font-size: 40px;
        line-height: 56px;
        &::after {
          bottom: -24px;
          width: 45px;
          height: 5px;
          background: #1A82FF;
          border-radius: 4px;
        }
      }
      .description {
        padding: 0 16px;
        font-size: 16px;
        line-height: 30px;
        margin-bottom: 32px;
      }
      .button {
        font-size: 20px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        padding: 20px 44px;
        border-radius: 35px;
        margin-bottom: 96px;
      }
    }
  }
}
</style>
