<template>
  <div class="picture-grid">
    <div class="picture-item" v-for="item in list" :key="item.name">
      <img :src="item.img" alt="">
      <div class="mask" @click="toPath(item.url)">
        {{ item.name }}
      </div>
    </div>
    <div class="more-wrapper" v-if="hasMore">
      <div class="more-buttom">查看更多案例 <i class="iconfont">&#xe61e;</i></div>
    </div>
  </div>
</template>

<script lang="ts">
// import { PropOptions } from 'vue';
type DataProps = {
}
export default {
  props: {
    list: {
      default() {
        return [
          { name: '白塔岭画室官网', url: '#', img: require('@/static/image-test/白塔岭画室官网.png')},
          { name: '南孚电池官网', url: '#', img: require('@/static/image-test/南孚电池官网.png')},
          { name: '奇瑞控股官网', url: '#', img: require('@/static/image-test/奇瑞控股官网.png')},
          { name: '新日电动车官网', url: '#', img: require('@/static/image-test/新日电动车官网.png')},
          { name: '徐工集团官网', url: '#', img: require('@/static/image-test/徐工集团官网.png')},
          { name: '张裕集团官网', url: '#', img: require('@/static/image-test/张裕集团官网.png')},
          { name: '中联重科官网', url: '#', img: require('@/static/image-test/中联重科官网.png')},
          { name: 'G42', url: '#', img: require('@/static/image-test/G42.png')},
          { name: '瑰珀翠官网', url: '#', img: require('@/static/image-test/瑰珀翠官网.png')},
          { name: '喜临门官网', url: '#', img: require('@/static/image-test/喜临门官网.png')},
          { name: 'CCTV', url: '#', img: require('@/static/image-test/CCTV.png')},
          { name: '李宁官网', url: '#', img: require('@/static/image-test/李宁官网.png')},
        ]
      }
    },
    hasMore: {
      type: Boolean,
      default: true,
    }
  },
  data() {
    return {
    } as DataProps
  },
  methods: {
    toPath(path: string) {
      console.log(path)
    }
  },
  components: {
  }
}
</script>

<style lang="less" >
.picture-grid {
  display: flex;
  flex-wrap: wrap;
  .picture-item {
    position: relative;
    width: 25%;
    cursor: pointer;
    img {
      width: 100%;
    }
    &:hover {
      .mask {
        visibility: visible;
        opacity: 1;
      }
    }
    .mask {
      visibility: hidden;
      opacity: 0;
      transition: 1s all;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: rgba(26, 130, 255, 0.9);
      font-size: 22px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .more-wrapper {
    background: #1A82FF;
    width: 100%;
    text-align: center;
    padding: 48px 0;
    .more-buttom {
      display: inline-block;
      font-size: 20px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      width: 230px;
      height: 70px;
      line-height: 70px;
      border-radius: 35px;
      border: 1px solid rgba(255, 255, 255, 0.5);
    }
  }
}
</style>
