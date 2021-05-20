<template>
  <div class="card-nav">
    <div class="card-title">
      {{title}}
    </div>
    <div class="card-body">
      <div class="card-item" v-for="(item, i) in showList" :key="i">
        <a :class="`text black`" :href="`${item[pathKey] || defaultPath}${item.id ? '?id='+ item.id : ''}`"  >{{item[labelKey]}}</a>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'RankList',
  components: {
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    labelKey: {
      type: String,
      default: 'title',
    },
    pathKey: {
      type: String,
      default: 'path',
    },
    path: {
      type: String,
      default: '',
    },
    data: {
      type: Array,
      default: [],
    },

  },
  data() {
    return {
      showList: this.data,
      defaultPath: this.path,
    }
  },

}
</script>

<style lang="less" scoped>
.card-nav {
  width: 350px;
  background-color: #fff;
  .card-title {
    font-size: 24px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #03101F;
    line-height: 33px
  }
  .card-item {
    height: 45px;
    line-height: 45px;
    border-bottom: 1px solid #E5E5E5;
    .text {
      font-size: 14px;
      font-weight: 400;
      color: #A6AAB1;
      display: inherit;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}



</style>
