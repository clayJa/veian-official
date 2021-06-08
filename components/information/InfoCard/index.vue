<template>
  <div class="card-nav">
    <div class="card-title">
      <span class="divider-title"></span>
      <span class="title-text">{{title}}</span>
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
  name: 'TabBar',
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
  padding: 24px 24px 20px 24px;
  width: 390px;
  height: 520px;
  border-radius: 16px;
  border: 1px solid #E5E5E5;
  background-color: #fff;
  position: relative;
  .card-title {
    position: relative;
    margin-bottom: 12px;
    height: 24px;
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    .divider-title {
      position: absolute;
      display: inline-block;
      width: 3px;
      height: 16px;
      background: #1A82FF;
      border-radius: 4px;
      top: 4px;
    }
    .title-text {
      margin-left: 15px;
    }
  }
  .card-item {
    height: 45px;
    line-height: 45px;
    .text {
      font-size: 14px;
      font-weight: 400;
      color: #03101F;

      display: inherit;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    &:not(:last-child) {
      border-bottom: 1px solid #E5E5E5;
    }
  }
  @media only screen and (max-width: 760px) {
    padding: 24px 24px 20px 24px;
    width: 100%;
    height: 520px;
    border-radius: 16px;
    border: 1px solid #E5E5E5;
    .card-title {
      margin-bottom: 12px;
      height: 24px;
      font-size: 16px;
      line-height: 24px;
      .divider-title {
        width: 3px;
        height: 16px;
        border-radius: 4px;
        top: 4px;
      }
      .title-text {
        margin-left: 15px;
      }
    }
    .card-item {
      height: 45px;
      line-height: 45px;
      .text {
        font-size: 14px;
      }
      &:not(:last-child) {
        border-bottom: 1px solid #E5E5E5;
      }
    }
  }
}



</style>
