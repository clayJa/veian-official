<template>
<div class="join-us">
  <!-- <img src="@/static/join_background.jpg" alt=""> -->
  <img :src="concatInfoImage" alt="">
  <div class="content">
    <!-- <div>发现不同</div>
    <div class="text2">让每一个梦想脱颖而出</div>
    <PillButton class="button" @click="$router.push('/contact')">更多发现，由你开启</PillButton> -->
    <div>{{ concatInfo.title1 }}</div>
    <div class="text2">{{ concatInfo.title2 }}</div>
    <PillButton class="button" @click="$router.push(concatInfo.buttonLink)">{{ concatInfo.buttonText }}</PillButton>
  </div>
</div>
</template>
<script lang="ts">
export default {
  name: 'Join',
  data() {
    return {
      concatInfo: {},
      concatInfoImage: ''
    }
  },
  mounted() {
    this.fetchGlobalSetting()
  },
  methods: {
    async fetchGlobalSetting() {
      const res1 = await this.$store.dispatch('fetchGlobalSetting',{name: 'concatInfo_image'})
      const res2 = await this.$store.dispatch('fetchGlobalSetting',{name: 'concatInfo'})
      this.concatInfoImage = res1.data[0].value
      this.concatInfo = JSON.parse(res2.data[0].value)
    }
  }
}
</script>
<style lang="less" scoped>
.join-us {
  width: 100%;
  height: 448px;
  position: relative;
  img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .content {
    position: relative;
    font-size: 56px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 78px;
    margin-left: 135px;
    padding-top: 98px;
    .button {
      width: 400px;
      margin-top: 48px;
      padding-top: 16px;
      padding-bottom: 16px;
      border-radius: 28px;
    }
  }
  @media only screen and (max-width: 760px) {
    height: 448px;
    img {
      object-fit: cover;
      object-position: 70% 10%;
    }
    .content {
      margin-left: 16px;
      font-size: 40px;
      line-height: 56px;
      padding-top: 86px;
      .text2 {
        max-width: 5em;
      }
      .button {
        margin: 0 16px;
        width: calc(100% - 32px);
        margin-top: 48px;
        padding-top: 16px;
        padding-bottom: 16px;
        border-radius: 28px;
      }
    }
  }
}
</style>
