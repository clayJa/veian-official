<template>
  <ol class="breadcrumb-nav breadcrumb">
    <i class="icon iconfont icon-icon_wechat">&#xe600;</i>
    <li v-for="(item, i) in routeList" :key="i">
      <nuxt-link
        :class="`${currentPath === item.path ? 'active' : 'black'}`"
        :to="item.path"
      >{{ item.name }}</nuxt-link>
    </li>
  </ol>
</template>
<script lang="ts">
export default {
  props: {
    data: {
      type: Array,
      default: []
    }
  },
  data() {
    const path = this.$route.path
    console.log('path', path)
    return {
      currentPath: path,
      routeList: this.data
    }
  },
}
</script>
<style lang="less" scoped>
.breadcrumb-nav {
  height: 63px;
  line-height: 63px;
  background: transparent;
  a {
    font-size: 13px;
    font-weight: 400;
    color: @fontColor3;
  }
  .active {
    a {
      color: @mainColor;
    }
  }
  .icon {
    color: @mainColor;
    margin-right: 10px;
  }
  @media only screen and (max-width: 760px) {
    height: 63px;
    line-height: 63px;
    a {
      font-size: 13px;
    }
    .icon {
      margin-right: 10px;
    }
  }
}


</style>
