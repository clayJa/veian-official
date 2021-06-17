<template>
  <div class="service-content">
    <div class="container d-md-none">
      <b-row class="flex">
        <b-col md="4" sm="5">
          <div class="left">
            <div class="title-en">{{serviceContent.title_en}}</div>
            <div class="title-zh">{{serviceContent.title}}</div>
            <div class="control clearfix">
              <div :class="['control-item', { active: index === current }]"
                v-for="(item,index) in serviceList" :key="item.name"
                @mouseover="changeCurrent(index)"
              >
                <div class="icon-wrapper">
                  <i v-html="item.icon" class="icon iconfont"></i>
                </div>
                <div class="zh-name">{{ item.name }}</div>
                <div class="en-name">{{ item.en }}</div>
              </div>
            </div>
          </div>
        </b-col>
        <b-col md="7" offset-md="1" sm="5">
          <div class="right-wrapper">
            <div class="right">
              <div class="seq">0{{ current + 1}}</div>
              <div class="image"><img :src="serviceList[current] && serviceList[current].image" alt=""></div>
              <div class="content">
                <div class="title-zh">{{ serviceList[current] && serviceList[current].name }}</div>
                <div class="title-en">{{ serviceList[current] && serviceList[current].en }}</div>
                <div class="description">{{ serviceList[current] && serviceList[current].title }}</div>
                <div class="detail">{{ serviceList[current] && serviceList[current].content }}</div>
              </div>
            </div>
            <div class="sharp"></div>
          </div>
        </b-col>
      </b-row>
    </div>
    <div class="mobile-wrapper d-none d-md-block">
      <div class="service-list">
        <div class="title-en">{{serviceContent.title_en}}</div>
        <div class="title-zh">{{serviceContent.title}}</div>
         <div class="my-swiper" v-swiper:mySwiper="swiperOption" :key="randomKey">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in serviceList" :key="item.name">
              <div :class="['control-item']">
                <div class="icon-wrapper">
                  <i v-html="item.icon" class="icon iconfont"></i>
                </div>
                <div class="zh-name">{{ item.name }}</div>
                <div class="en-name">{{ item.en }}</div>
              </div>
              <div class="control-item-content">
                <div class="service-content-wrapper">
                  <div class="service-container">
                    <div class="image">
                      <div class="seq">0{{ index + 1}}</div>
                      <img :src="serviceList[index] && serviceList[index].image" alt="">
                    </div>
                    <div class="content">
                      <div class="title-zh">{{ serviceList[index] && serviceList[index].name }}</div>
                      <div class="title-en">{{ serviceList[index] && serviceList[index].en }}</div>
                      <div class="description">{{ serviceList[index] && serviceList[index].title }}</div>
                      <div class="detail">{{ serviceList[index] && serviceList[index].content }}</div>
                    </div>
                  </div>
                  <div class="sharp"></div>
                </div>
              </div>
            </div>
          </div>
         </div>
      </div>
      <!-- <div class="service-content-wrapper">
        <div class="service-container">
          <div class="image">
            <div class="seq">0{{ current + 1}}</div>
            <img :src="list[current].image" alt="">
          </div>
          <div class="content">
            <div class="title-zh">{{ list[current].name }}</div>
            <div class="title-en">{{ list[current].en }}</div>
            <div class="description">{{ list[current].title }}</div>
            <div class="detail">{{ list[current].content }}</div>
          </div>
        </div>
        <div class="sharp"></div>
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import _get from 'lodash/get'
type DataProps = {
  list: any[]
  current: any
}
export default {
  data() {
    return {
      list: [
        { name: '创意', en: 'Development', title: '洞悉市场趋势演变 让传播回归社会',
          icon: '&#xe63d;',
          image: require('@/assets/images/index/Bitmap_Creativity.png'),
          content: '网站建设、微信开发、小程序开发、微信运营托管、并有朋友圈广告、数字营销等全新服务内容让企业微信不止有关注度，更有内容精度'},
        { name: '开发', en: 'Development', title: 'O2O系统 商城系统 互联网金融 小程序 解决方案',
          icon: '&#xe63f;',
          image: require('@/assets/images/index/Bitmap_Development.png'),
          content: '我们的核心技术引擎，面向家居、电商、教育、医疗、金融等行业，提供平台开发、软件开发、APP开发等解决方案。'},
        { name: '营销', en: 'Marketing', title: '“轻营销”助力线上转型 迅速达成效果转化',
          icon: '&#xe63e;',
          image: require('@/assets/images/index/Bitmap_Marketing.png'),
          content: '博采网络全案数字营销服务，独创“轻营销”理念，利用自身全网资源、大数据精准营销、创意策略等...'},
        { name: '运营', en: 'Operation', title: '缔造人人参与的营销态势',
          icon: '&#xe63c;',
          image: require('@/assets/images/index/Bitmap_Operation.png'),
          content: '未苒网络科技社会化数字营销服务，利用创意事件、数字信息、网络媒体，帮助企业实现，具有影响力的线上、线下社会化营销战略。'},
      ],
      current: 0,
      timer: null,
      swiperOption: {
        loop: true,
        // autoplay: 1000,
        spaceBetween: 24,
        slidesPerView: 2.2,
        paginationClickable :true,
        preventClicks: false,
        updateOnImagesReady : true,
        resizeReInit : true,
      },
      randomKey: Math.random()
    } as DataProps
  },
  computed: {
    moduleConfig() {
      return this.$store.getters['getModuleConfig']
    },
    serviceContent() {
      return _get(this.moduleConfig,'serviceContent',{})
    },
    serviceList() {
      return _get(this.moduleConfig,'serviceContent.serviceList',[])
    }
  },
  watch: {
    serviceList() {
      this.randomKey = Math.random();
    }
  },
  mounted() {
  },
  methods: {
    changeCurrent(current: number) {
      this.current = current
    },
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
.flex {
  display: flex;
}
.service-content {
  padding-top: 120px;
  padding-bottom: 160px;
  .left {
    .title-en {
      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #474747;
      line-height: 32px;
      margin-bottom: 24px;
      text-transform: uppercase;
    }
    .title-zh {
      font-size: 56px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
      line-height: 64px;
      margin-bottom: 48px;
    }
    .control {
      .control-item {
        float: left;
        cursor: pointer;
        width: 140px;
        min-width: 40%;
        height: 200px;
        background: #F7F7F7;
        border-radius: 12px;
        padding: 24px;
        margin-right: 24px;
        margin-bottom: 32px;
        text-align: center;
        .icon-wrapper {
          display: inline-block;
          text-align: center;
          width: 92px;
          height: 92px;
          border-radius: 50%;
          background: #fff;
          color: #474747;
          .icon {
            font-size: 40px;
            line-height: 92px;
          }
        }
        .zh-name {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #474747;
          line-height: 24px;
          margin-top: 12px;
        }
        .en-name {
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #A6AAB1;
          line-height: 24px;
        }
        &.active, &:hover {
          background: #FFFFFF;
          box-shadow: 10px 10px 40px 0px rgba(0, 0, 0, 0.1);
          .icon-wrapper {
            background: #F7F7F7;
            color: #1A82FF;
          }
          .zh-name {
            color: #1A82FF;
          }
        }
      }
    }
  }
  .right-wrapper {
    position: relative;
    height: calc(100% - 40px);
    margin-top: 40px;
    .sharp {
      position: absolute;
      right: 0;
      top: 0;
      color: fade(#03101F,10);
      transform: translate(36%, -24%);
      z-index: 0;
      width: 176px;
      height: 176px;
      background-image: url('@/static/Combined_Shape_333.png');
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }
  .right {
    position: relative;
    background: #F7F7F7;
    height: 100%;
    width: 742px;
    border-radius: 16px;
    margin-top: 40px;
    z-index: 1;
    .seq {
      position: absolute;
      left: 48px;
      top: 48px;
      font-size: 72px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #E5E5E5;
      line-height: 80px
    }
    .image {
      position: absolute;
      top: 32px;
      right: 48px;
      width: 288px;
      height: 288px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
    .content {
      position: absolute;
      left: 48px;
      right: 48px;
      bottom: 48px;
      .title-zh,.title-en {
        font-size: 40px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #03101F;
        line-height: 48px;
      }
      .description {
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #474747;
        line-height: 32px;
        margin-top: 32px;
      }
      .detail {
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #A6AAB1;
        line-height: 32px;
      }
    }
  }
}
.mobile-wrapper {
  .service-list {
    padding-left: 16px;
    .title-en {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #474747;
      line-height: 32px;
      margin-bottom: 12px;
      text-transform: uppercase;
    }
    .title-zh {
      font-size: 40px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #333333;
      line-height: 64px;
      margin-bottom: 64px;
    }
    .my-swiper {
      height: 1000px;
      .swiper-slide {
        position: relative;
        &.swiper-slide-active {
          .control-item-content {
            z-index: 100;
            display: block;
          }
          .control-item {
            background: #FFFFFF;
            box-shadow: 10px 10px 40px 0px rgba(0, 0, 0, 0.1);
            .icon-wrapper {
              background: #F7F7F7;
              color: #1A82FF;
            }
            .zh-name {
              color: #1A82FF;
            }
          }
        }
        .control-item-content {
          position: absolute;
          left: -16px;
          display: none;
          width: 100vw;
          text-align: center;
        }
      }
    }
    .control-item {
      cursor: pointer;
      width: 140px;
      min-width: 40%;
      height: 200px;
      background: #F7F7F7;
      border-radius: 12px;
      padding: 24px;
      margin-right: 24px;
      margin-bottom: 32px;
      text-align: center;
      .icon-wrapper {
        display: inline-block;
        text-align: center;
        width: 92px;
        height: 92px;
        border-radius: 50%;
        background: #fff;
        color: #474747;
        .icon {
          font-size: 40px;
          line-height: 92px;
        }
      }
      .zh-name {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #474747;
        line-height: 24px;
        margin-top: 12px;
      }
      .en-name {
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #A6AAB1;
        line-height: 24px;
      }
    }
  }
  .service-content-wrapper {
    display: inline-block;
    width: 346px;
    padding: 48px 24px;
    background: #F7F7F7;
    border-radius: 16px;
    .image {
      width: 298px;
      height: 298px;
      border-radius: 50%;
      position: relative;
      margin-bottom: 24px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
      .seq {
        position: absolute;
        left: 0;
        top: 0;
        font-size: 72px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #E5E5E5;
        line-height: 80px;
      }
    }
    .title-zh,.title-en {
      font-size: 40px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #03101F;
      line-height: 48px;
    }
    .description {
      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #474747;
      line-height: 32px;
      margin-top: 32px;
    }
    .detail {
      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #A6AAB1;
      line-height: 32px;
    }
  }
}
</style>
