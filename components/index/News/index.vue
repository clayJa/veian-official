<template>
  <div class="news-wrapper">
    <div class="container">
      <div class="en-mark">News</div>
      <div class="title-wrapper clearfix">
        <div class="title">新闻资讯</div>
        <div class="title-slogan">我们的声音　务实创新</div>
      </div>
      <div class="list-wrapper">
        <div class="list clearfix">
          <div class="item" v-for="item in list" :key="item.name">
            <div class="image-wrapper"><img :src="item.image" alt=""></div>
            <div class="info">
              <div class="name">{{ item.name }}</div>
              <div class="content">{{ item.content }}</div>
              <div class="date">{{ item.date }}</div>
            </div>
          </div>
        </div>
        <div class="sharp">
          <img src="@/static/Combined_Shape_light.png" alt="">
        </div>
      </div>
      <div class="more-title">了解更多动态</div>
    </div>
    <div class="address-wrapper d-md-none">
      <div class="container">
        <div class="address clearfix">
          <div class="left">
            <div class="address-title">杭州总部</div>
            <div class="address-info">浙江省 杭州市 西湖区 紫荆花北路 宝港广场A座4F</div>
          </div>
          <div class="right">
            <a target="_blank" rel="nofollow" href="https://www.amap.com/search?id=B0FFLHNFHD&city=330106&geoobj=120.089339%7C30.305415%7C120.09625%7C30.308939&query_type=IDQ&zoom=17.5">
              <PillButton class="navigation">
                <InlineSvg class="icon" :src="require('@/assets/images/index/icon_map.svg')" />
                <span>一键导航</span>
              </PillButton>
            </a>
            <PillButton>
              <InlineSvg class="icon" :src="require('@/assets/images/index/icon_ advisory.svg')" />
              <span>业务咨询</span>
            </PillButton>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-address-wrapper d-none d-md-block">
      <div class="address">
        <div class="address-title">杭州总部</div>
        <div class="address-info">浙江省 杭州市 西湖区 紫荆花北路 宝港广场A座4F</div>
        <div>
          <a target="_blank" rel="nofollow" href="https://www.amap.com/search?id=B0FFLHNFHD&city=330106&geoobj=120.089339%7C30.305415%7C120.09625%7C30.308939&query_type=IDQ&zoom=17.5">
            <PillButton class="navigation">
              <InlineSvg class="icon" :src="require('@/assets/images/index/icon_map.svg')" />
              <span>一键导航</span>
            </PillButton>
          </a>
        </div>
        <PillButton style="margin-top: 24px;">
          <InlineSvg class="icon" :src="require('@/assets/images/index/icon_ advisory.svg')" />
          <span>业务咨询</span>
        </PillButton>
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
.news-wrapper {
  position: relative;
  background: #1A82FF;
  padding-top: 96px;
  .en-mark {
    font-size: 18px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    text-transform: uppercase;
    margin-bottom: 24px;
  }
  .title-wrapper {
    margin-bottom: 48px;
    .title {
      float: left;
      font-size: 56px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 78px;
    }
    .title-slogan {
      float: right;
      font-size: 32px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 32px;
    }
  }
  .list-wrapper {
    position: relative;
    .list {
      z-index: 1;
      position: relative;
      .item {
        float: left;
        background: #FFFFFF;
        border-radius: 16px;
        margin-right: 30px;
        padding: 16px;
        padding-bottom: 36px;
        width: calc((100% - 60px) / 3);
        &:last-child {
          margin-right: 0;
        }
        .image-wrapper {
          img {
            width: 100%;
          }
        }
        .info {
          margin-top: 24px;
          padding-left: 32px;
        }
        .name {
          font-size: 24px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #333333;
          line-height: 32px;
          overflow: hidden;
          text-overflow: ellipsis;
          max-height: 32px;
          white-space: nowrap;
        }
        .content {
          position: relative;
          font-size: 18px;
          font-family: PingFangSC-Light, PingFang SC;
          font-weight: 300;
          color: #A6AAB1;
          line-height: 32px;
          max-height: 64px;
          overflow: hidden;
          margin-top: 16px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
        .date {
          margin-top: 16px;
          font-size: 18px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          line-height: 32px;
        }
      }
    }
    .sharp {
      position: absolute;
      width: 176px;
      height: 176px;
      right: 0;
      top: 0;
      color: fade(#03101F,10);
      transform: translate(36%, -35%);
      z-index: 0;
      img {
        width: 100%;
      }
    }
  }
  .more-title {
    font-size: 32px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: fade(#fff,50%);
    line-height: 32px;
    padding-top: 48px;
    padding-bottom: 64px;
  }
  .address-wrapper {
    height: 208px;
    background-image: linear-gradient(to top,#1E3850 0,#1E3850 50%,#1A82FF 50%,#1A82FF 100%);
    .container {
      height: 100%;
    }
    .address {
      height: 100%;
      background: #FFFFFF;
      box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
      border-radius: 16px;
      padding: 50px 64px;
      .left {
        float: left;
        .address-title {
          font-size: 44px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #03101F;
          line-height: 64px;
        }
        .address-info {
          font-size: 20px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #474747;
          line-height: 32px;
          margin-top: 12px;
        }
      }
      .right {
        float: right;
        margin-top: 30px;
      }
      .right span {
        vertical-align: middle;
      }
      .icon {
        margin-right: 12px;
         vertical-align: middle;
      }
      .navigation {
        margin-right: 48px;
      }
    }
  }
  @media only screen and (max-width: 760px) {
    .en-mark {
      font-size: 14px;
      font-weight: 400;
      line-height: 32px;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .title-wrapper {
      margin-bottom: 48px;
      .title {
        float: none;
        font-size: 40px;
        line-height: 56px;
        margin-bottom: 12px;
      }
      .title-slogan {
        float: none;
        font-size: 24px;
        line-height: 32px;
      }
    }
    .list-wrapper .list .item{
      float: none;
      width: 100%;
      border-radius: 16px;
      padding: 16px;
      margin-bottom: 30px;
      .info {
        margin-top: 24px;
        padding-left: 32px;
      }
      .name {
        font-size: 24px;
        max-height: 32px;
        line-height: 32px;
      }
      .content {
        font-size: 18px;
        line-height: 32px;
        max-height: 64px;
        overflow: hidden;
        margin-top: 16px;
      }
      .date {
        margin-top: 16px;
        font-size: 18px;
        line-height: 32px;
      }
    }
    .more-title {
      font-size: 32px;
      text-align: center;
      line-height: 32px;
      margin-bottom: 64px;
    }
    .mobile-address-wrapper {
      background-image: linear-gradient(to top,#1E3850 0,#1E3850 70%,#1A82FF 70%,#1A82FF 100%);
      padding-bottom: 32px;
      .address {
        margin: 0 16px;
        padding: 48px  32px;
        background: #FFFFFF;
        box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
        border-radius: 16px;
        .address-title {
          font-size: 44px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #03101F;
          line-height: 64px;
        }
        .address-info {
          font-size: 20px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #474747;
          line-height: 32px;
          margin-top: 12px;
          margin-bottom: 24px;
        }
      }
    }
  }
}
</style>
