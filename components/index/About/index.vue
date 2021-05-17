<template>
  <div class="about-wrapper">
    <img :src="require('@/assets/images/index/home_about_background.png')" class="background" />
    <InlineSvg :src="require('@/assets/images/index/about_dot.svg')" class="dot" />
    <div class="content">
      <div class="title">关于 未苒科技</div>
      <div class="description">
        <div>未苒网络科技（杭州）成立于2017年，作为中国互联网资深服务商</div>
        <div>专注于互联网平台开发、新媒体运营服务、云计算服务三大板块，致力于为一流的品牌提供互联网全案服务。</div>
        <div>未苒网络科技已经成功为众多世界五百强、中国五百强企业提供网站建设服务，</div>
        <div>并在微信公众号运营、云架构咨询服务得到客户和行业的一致认可。</div>
      </div>
      <PillButton class="button">
        <span>了解未苒科技</span>
         <InlineSvg :src="require('@/assets/images/icon_Link_Last.svg')" style="margin-left: 12px;" />
      </PillButton>
    </div>
  </div>
</template>

<script lang="ts">
import PillButton from '@/components/PillButton/index.vue'
import InlineSvg from 'vue-inline-svg';
export default {
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
    InlineSvg,
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
    height: 553px;
  }
  .dot {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
  }
  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
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
    }
  }
}
</style>
