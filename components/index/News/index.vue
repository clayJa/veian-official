<template>
  <div class="news-wrapper">
    <div class="en-mark">News</div>
    <div class="title-wrapper">
      <div class="title">新闻资讯</div>
      <div class="title-slogan">我们的声音　务实创新</div>
    </div>
    <div class="list-wrapper">
      <div class="list">
        <div class="item" v-for="item in list" :key="item.name">
          <div class="image-wrapper"><img :src="item.image" alt=""></div>
          <div class="name">{{ item.name }}</div>
          <div class="content">{{ item.content }}</div>
          <div class="date">{{ item.date }}</div>
        </div>
      </div>
    </div>
    <div class="more-title">了解更多动态</div>
    <div class="address-wrapper">
      <div class="container">
        <div class="address">
          <div class="left">
            <div class="address-title">杭州总部</div>
            <div class="address-info">浙江省 杭州市 西湖区 紫荆花北路 宝港广场A座4F</div>
          </div>
          <div class="right">
            <PillButton>一键导航</PillButton>
            <PillButton>业务咨询</PillButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import PillButton from '@/components/PillButton/index.vue'
import InlineSvg from 'vue-inline-svg';
export default {
  data() {
    return {
      list: [
        { name: '浙江广播电台 FM 104.5…', content: '近日，我们鼎易科技的创始人刘总受邀参加了浙江广播电台',date: '2020.09.17',
          image: require('@/assets/images/index/news_image_1.png'),
        },
        { name: '微信小程序如何实现知识…', content: '在目前经济受创的市场大环境下可以说各大行业市场都处于发展…',date: '2021.04.14',
          image: require('@/assets/images/index/news_image_2.png'),
        },
        { name: '大数据环境下，网站建设…', content: '在创新时代，网站建设的到底有什么实际的意义呢？',date: '2021.03.25',
          image: require('@/assets/images/index/news_image_3.png'),
        },
      ]
    }
  },
  methods: {
    toPath() {
      console.log(1111)
    }
  },
  components: {
    PillButton,
    InlineSvg,
  }
}
</script>

<style lang="less" scoped>
.about-wrapper {
  position: relative;
  overflow: hidden;
  .background {
    width: 100%;
    height: 553px;
  }
  .dot {
    position: absolute;
    left: 70px;
    right: 32px;
    bottom: 60px;
  }
  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    text-align: center;
    .title {
      margin-top: 96px;
      margin-bottom: 60px;
      font-size: 56px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #03101F;
      line-height: 78px;
      position: relative;
      &::after {
        bottom: -24px;
        left: 50%;
        transform: translateX(-50%);
        position: absolute;
        content: '';
        display: block;
        background: #1A82FF;
        width: 45px;
        height: 5px;
        border-radius: 3.5px;
      }
    }
    .description {
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: fade(#03101F, 60);
      line-height: 30px;
      margin-bottom: 32px;
    }
    .button {
      font-size: 20px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      padding: 20px 44px;
      border-radius: 35px;
    }
  }
}
</style>
