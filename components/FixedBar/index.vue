<template>
  <div class="fixed-bar">
    <div class="consult">
      <img src="@/static/icon_consult.png" alt="">
    </div>
    <div class="wechat">
      <img src="@/static/icon_wechat.png" alt="">
    </div>
    <div class="top" @click="scrollToTop">
      <img src="@/static/icon_top.png" alt="">
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: 'FixedBar',
  methods: {
    scrollToTop () {
      let sTop = document.documentElement.scrollTop || document.body.scrollTop
      if (sTop > 0) {
          window.requestAnimationFrame(this.scrollToTop)
          window.scrollTo(0, sTop - sTop / 8)
      }
    }
  }
}
</script>
<style lang="less" scoped>
.fixed-bar {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 64px;
  height: 192px;
  background: #1A82FF;
  box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
  border-radius: 16px 0px 0px 16px;
  padding: 26px 16px;
  z-index: 100;
  .consult,.wechat {
    margin-bottom: 24px;
  }
  .consult,.wechat, .top {
    cursor: pointer;
  }
  img {
    width: 100%;
  }
}

</style>
