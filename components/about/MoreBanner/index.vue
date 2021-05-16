<template>
  <div class="more-banner" :style="{background: `url('${bannerImg}')  no-repeat center center`}">
    <div class="text-wrapper">
        <div class="title">发现不同</div>
        <div class="title">让每一个梦想脱颖而出</div>
        <div class="action">
          <Button class="primary">更多发现，由你开启</Button>
        </div>

      </div>

  </div>

</template>

<script lang="ts">
import bannerImg from '@/assets/images/about/bg_girl.jpg'

export default {
  name: 'moreBanner',
  data() {
    return {
      bannerImg: bannerImg,

    }
  },
  methods: {
    toPath() {
      console.log(1111)
    }
  },
  components: {

  }
}
</script>

<style lang="less" scoped>
.more-banner {
  height: 448px;
  padding: 98px 0 0 135px;
  .text-wrapper {
    color: @white;
    font-weight: 400;

    .title-desc {

      font-size: 18px;
      line-height: 32px;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
    .title {
      font-size: 56px;
      font-weight: 400;
      line-height: 64px;
      &+.title {
        margin-top: 24px;
      }
    }

    .content {
      font-size: 16px;
      line-height: 32px;
      &+.content {
        margin-top: 32px;
      }
    }
    .action {
      margin-top: 48px;
      button {
        width: 400px;
        height: 56px;
        font-size: 18px;
      }
    }

  }

}

</style>
