<template>
<div>
  <b-navbar toggleable="lg" class="container">
    <b-navbar-brand href="#" class="logo">
      <img src="@/assets/images/logo.png" alt="logo">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto mr-auto">
        <b-nav-item href="#" class="nav_item">首页</b-nav-item>
        <b-nav-item href="#" class="nav_item">简单</b-nav-item>
        <b-nav-item href="#" class="nav_item">信任</b-nav-item>
        <b-nav-item href="#" class="nav_item">快乐</b-nav-item>
        <b-nav-item href="#" class="nav_item">我们</b-nav-item>
        <b-nav-item href="#" class="nav_item">联系</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <InlineSvg :src="require('@/assets/images/icon_search.svg')" class="icon" />
        <InlineSvg :src="require('@/assets/images/icon_phone.svg')" class="icon" />
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script lang="ts">
import InlineSvg from 'vue-inline-svg';
export default {
  components: {
    InlineSvg,
  }
}
</script>
<style lang="less" scoped>
.logo {
  width: 175px;
  height: 54px;
  img {
    width: 100%;
  }
}
.nav_item {
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #474747;
  &:not(:last-child) {
    margin-right: 2em;
  }
}
.icon {
  color: #A6AAB1;
  &:not(:last-child) {
    margin-right: 24px;
  }
}
</style>
