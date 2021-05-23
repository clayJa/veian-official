<template>
  <div>
    <div class="banner">
      <div class="content">
        <img :src="imgae" alt="">
        <div class="text container">
          <div class="title">{{ title }}</div>
          <div class="info">{{ info }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    imgae: String,
    title: String,
    info: String,
  },
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
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
      top: 0;
      .title {
        font-size: 72px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        line-height: 72px;
        margin-top: 210px;
      }
      .info {
        font-size: 32px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #FFFFFF;
        line-height: 42px;
        margin-top: 24px;
        max-width: 1000px;
      }
    }
  }
}
</style>
