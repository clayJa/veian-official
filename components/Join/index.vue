<template>
<div class="join-us">
  <div class="content">
    <div>发现不同</div>
    <div>让每一个梦想脱颖而出</div>
    <PillButton class="button" @click="$router.push('/contact')">更多发现，由你开启</PillButton>
  </div>
</div>
</template>
<script lang="ts">
export default {
  name: 'Join',
}
</script>
<style lang="less" scoped>
.join-us {
  width: 100%;
  height: 448px;
  background: url('@/static/join_background.jpg') no-repeat;
  background-size: 100% 100%;
  .content {
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
}
</style>
