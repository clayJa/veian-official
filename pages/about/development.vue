<template>
  <div>
    <Header />
    <div>
      <div class="banner" :style="{background: `url('/imageHost/${pageData.cover_picture ? pageData.cover_picture[0] : ''}')  no-repeat center center`}">
        <div class="wrapper">
          <div class="text-wrapper">
            <!-- <div class="title-desc">Welcome to weiran technology</div>
            <div class="title">发展历程</div>
            <div class="subtitle">2004年创立以来，致力提供数字化综合服务</div> -->
            <div class="title-desc">{{ pageData.title_en}}</div>
            <div class="title">{{ pageData.title}}</div>
            <div class="subtitle">{{ pageData.description}}</div>
          </div>

        </div>
      </div>
      <div class="secondary-block ">
        <div class="tab-wrapper">
          <TabBar :active="curPath" />

        </div>

        <div class="wrapper row row-no-gutters">
          <div class="page-title-nav">
            <div class="title">Development path</div>
            <div class="subtitle">{{developList[0] ? developList[0].time : ''}}年成立至今</div>
          </div>
          <ul class="timeline-nav">
<!--            <img class="img-back" src="@/assets/images/about/dots_group.png" alt="">-->
            <li class="timeline-item first">
              <div class="tail small"></div>
              <div class="head black"
                  :style="{animation: activeIndex === -1 ? `moveCircle 1.5s linear` : '', zIndex:  activeIndex === -1 ? 99 : ''}"
                  @animationend.stop="handleAnimationEnd(-1)">
                <div class="dot">
                </div>
              </div>
            </li>
            <li :class="`timeline-item ${i % 2 === 0 ? 'left': 'right'}`"
                 v-for="(item, i) in developList" :key="i">
              <div class="tail"></div>
              <div class="head blue"
                :style="{
                  animation: activeIndex === i ? `scaleAnimation 3s linear` : '',
                }"
              >
              </div>
              <div class="dot"
                :style="{
                  animation: activeIndex === i ? `moveCircle 3s linear` : '',
                  backgroundColor: activeIndex === i ? '#474747' : '#fff',
                  zIndex: activeIndex === i ? 99 : '',
                }"
                @animationend.stop="handleAnimationEnd(i)"
              ></div>
              <div class="dot-copy"></div>
              <div class="content">
                <div :class="['show-box', { active: activeIndex === i }]"
                  :style="{
                    animation: activeIndex === i ? `scaleAnimation 3s linear` : '',
                     zIndex: activeIndex === i ? 100 : '',
                  }"
                >
                  <div class="box-item d-md-none">
                    <div class="img-wrapper">
                      <img class="img" :src="item.img" alt="">
                    </div>
                    <div class="text-wrapper">
                      <div class="title">{{item.time}}</div>
                      <div :class="`text-content ${i % 2 === 0 ? 'left': 'right'}`">{{item.content}}</div>
                    </div>
                  </div>
                  <div class="box-item d-md-block d-none">
                    <div class="mobile-title">
                      <div class="title">{{item.time}}</div>
                      <div class="img-wrapper">
                        <img class="img" :src="item.img" alt="">
                      </div>
                    </div>
                    <div class="text-wrapper">
                      <div :class="`text-content ${i % 2 === 0 ? 'left': 'right'}`">{{item.content}}</div>
                    </div>

                  </div>
                </div>

              </div>
            </li>
            <li class="timeline-item last">
              <div class="text">Feature</div>
            </li>
          </ul>

        </div>

      </div>

      <Join />
    </div>
    <Footer />
  </div>
</template>

<script>
import TabBar from '@/components/about/TabBar'
import Join from '@/components/Join'
const bannerImg = require('@/assets/images/about/development/banner_back.jpg')
import _get from 'lodash/get'
export default {
  components: {
    TabBar,
    Join,
  },
  data() {
    return {
      curPath: '/about/development',
      bannerImg: bannerImg,
      activeIndex: -1,
      // developList: [
      //   {
      //     img: require('@/assets/images/about/development/photo1.jpg'),
      //     time: '2004',
      //     content: '2004年，中国互联网公司开启第二轮境外上市热潮，盛大网络、腾讯公司、空中网等网络公司纷纷在海外上市，在互联网之都杭州，未苒网络科技应声创立。',
      //   },
      //   {
      //     img: require('@/assets/images/about/development/photo2.jpg'),
      //     time: '2008',
      //     content: '进入2008年，房地产政策方向由“控”到“放”，未苒网络科技快速响应市场政策的变化决定进行房地产行业深挖，创新业务格局。',
      //   },
      //   {
      //     img: require('@/assets/images/about/development/photo3.jpg'),
      //     time: '2010',
      //     content: '推动消费增长的医疗、教育、媒体等行业持续创新，中小企业增长动力强劲，经济出现新的增长点未苒网络科技再次进行市场扩张，服务客户中上市企业及五百强企业占有率超30%。',
      //   },
      //   {
      //     img: require('@/assets/images/about/development/photo4.jpg'),
      //     time: '2015',
      //     content: '2015年，“互联网+”大潮袭来\n未苒网络科技顺应时代潮流完成股改更改为股份有限公司。',
      //   },
      //   {
      //     img: require('@/assets/images/about/development/photo5.jpg'),
      //     time: '2018',
      //     content: '2018年，未苒网络科技以杭州为总部、长三角为核心区，分别在北京、南京、成都、青岛成立分公司，正式布局全国市场',
      //   },

      // ],
      pageData: {}

    }
  },
  mounted() {
    this.getPageData()
    this.fetchModuleConfig()
    // console.log(this.moduleConfig,'moduleConfig')
  },
  computed: {
    moduleConfig() {
      return this.$store.getters['getModuleConfig']
    },
    developList() {
      const developList =  _get(this.moduleConfig,'developmentList',[])
      const result = developList.map(it => {
        return {
          img: `/imageHost/${it.cover_picture}`,
          time: it.title,
          content: it.description,
        }
      })
      return result;
    },
  },

  methods: {
    playVideo() {
      console.log('play')
      this.isPlay = true
    },
    handleAnimationEnd(index) {
      // console.log(index)
      this.activeIndex = index === this.developList.length - 1 ? -1 : index + 1
    },
    async fetchModuleConfig() {
      const menuMap = localStorage.getItem('menuMap') ? JSON.parse(localStorage.getItem('menuMap')) : {}
      await this.$store.dispatch('fetchModuleConfig',{id: menuMap[this.$nuxt.$route.path]})
    },
    async getPageData() {
      const menuMap = localStorage.getItem('menuMap') ? JSON.parse(localStorage.getItem('menuMap')) : {}
      const res = await this.$store.dispatch('getPageData',{id: menuMap[this.$nuxt.$route.path]})
      this.pageData = res.data[0]
    }
  },

}
</script>

<style lang="less" scoped>
@DINCondensedFont: DINCondensed-Bold, DINCondensed;
@MontserratFont: Montserrat-ExtraBold, Montserrat;
  .banner {
    height: 600px;
    color: @white;

    .wrapper {
      padding: 182px 135px 0 135px;
      .text-wrapper {
        margin-bottom: 32px;
        .title-desc {
          font-size: 18px;
          font-weight: 400;
          line-height: 32px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .title {
          font-size: 72px;
          font-weight: 600;
          margin: 24px 0;
          line-height: 72px;
          height: 72px;
        }
        .subtitle {
          font-size: 32px;
          line-height: 42px;
          height: 42px;
          position: relative;
          .icon {
            width: 30px;
            height: 30px;
            position: absolute;

          }
          .text {
            margin-left: 48px;
          }
          &+.subtitle {
            //margin-top: 8px;
          }
        }
      }

    }
    @media only screen and (max-width: 760px) {
      height: 600px;
      .wrapper {
        padding: 216px 16px;
        .text-wrapper {
          margin-bottom: 32px;
          .title-desc {
            font-size: 14px;
            line-height: 32px;
            letter-spacing: 2px;
          }
          .title {
            font-size: 40px;
            margin: 24px 0;
            line-height: 56px;
            height: 56px;
          }
          .subtitle {
            font-size: 24px;
            line-height: 32px;
            height: 32px;
            position: relative;
          }
        }

      }
    }
  }

  .secondary-block {
    background: @white;
    position: relative;
    .wrapper {
      padding: 135px;
    }
    .tab-wrapper {
      position: absolute;
      top: -40px;
      left: 135px;
      right: 135px;
    }
    .page-title-nav {
      text-align: center;
      margin-bottom: 48px;
      .title {
        height: 64px;
        font-size: 56px;
        font-weight: 600;
        line-height: 64px;
        white-space: nowrap;
        margin-bottom: 32px;
      }
      .subtitle {
        height: 32px;
        font-size: 24px;
        font-weight: 300;
        line-height: 32px;
      }
    }
    @media only screen and (max-width: 760px) {
      .wrapper {
        padding: 135px 16px;
      }
     .tab-wrapper {
        position: absolute;
        top: -40px;
        left: 16px;
        right: 0;
      }
      .page-title-nav {
        text-align: left;
        margin-bottom: 48px;
        .title {
          height: 45px;
          font-size: 32px;
          font-weight: 600;
          line-height: 45px;
          margin-bottom: 32px;
        }
        .subtitle {
          height: 32px;
          font-size: 24px;
          line-height: 32px;
        }
      }
    }
  }
  .timeline-nav {
    position: relative;
    box-sizing: border-box;
    //color: rgba(0,0,0,.85);
    //font-feature-settings: "tnum";
    //font-size: 14px;
    //font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    margin: 0;
    padding: 0;
    .timeline-item {
      list-style: none;
      margin: 0;
      padding-bottom: 20px;
      position: relative;
      height: 300px;
      &.first {
        height: 100px;
      }
      &.last {
        height: auto;
        margin-top: 35px;
        .text {
          text-align: center;
          height: 32px;
          font-size: 24px;
          font-weight: 300;
          line-height: 32px;
        }
      }

      .tail {
        border-left: 2px solid #f0f0f0;
        height: calc(100% - 48px);
        position: absolute;
        top: 48px;
        left: 50%;
        &.small {
          height: calc(100% - 10px);
          top: 10px;
        }
      }
      .dot,.dot-copy {
        position: absolute;
        width: 15px;
        height: 15px;
        border-radius: 100%;
        background-color: @white;
        top: calc(24px - 7.5px);
        left: calc(50% - 7.5px);
      }
      .head {
        background-color: @blackColor2;
        //border: 2px solid transparent;
        border-radius: 12px;
        position: absolute;
        width: 48px;
        height: 48px;

        margin-left: -22px;

        left: 50%;


        &.blue {

          background-color: @mainColor;

        }
        &.black {
          width: 15px;
          height: 15px;
          margin-left: -6px;
          .dot {
            display: none;
            //background-color: @blackColor2;
            //margin-top: calc(50% - 7.5px);

          }

        }

      }
      .content {
        margin: 0 0 0 26px;
        position: relative;
        top: -7.001px;
        word-break: break-word;
      }
      &.right {
        .content {
          left: calc(50% + 48px);
          text-align: left;
          width: calc(50% - 14px);
        }

      }
      &.left {
        .content {
          margin: 0;
          text-align: right;
          width: calc(50% - 23px - 48px);
        }

      }
    }

    .img-back {
      position: absolute;
      width: 176px;
      height: 176px;
      top: 0;
      right: 0;
    }
    @media only screen and (max-width: 760px) {
      position: relative;
      box-sizing: border-box;
      line-height: 1.5715;
      list-style: none;
      margin: 0;
      padding: 0;
      .timeline-item {
        list-style: none;
        margin: 0;
        padding-bottom: 20px;
        position: relative;
        height: 300px;
        &.first {
          height: 100px;
        }
        &.last {
          height: auto;
          margin-top: 35px;
          .text {
            text-align: left;
            height: 32px;
            font-size: 24px;
            line-height: 32px;
          }
        }

        .tail {
          border-left: 2px solid #f0f0f0;
          height: calc(100% - 48px);
          top: 48px;
          left: 22px;
          &.small {
            height: calc(100% - 10px);
            top: 10px;
          }
        }
        .dot, .dot-copy {
          width: 15px;
          height: 15px;
          top: calc(24px - 7.5px);
          left: calc(24px - 7.5px);
        }
        .head {
          border-radius: 12px;
          width: 48px;
          height: 48px;
          margin-left: -22px;
          left: 22px;
          &.black {
            width: 15px;
            height: 15px;
            margin-left: -6px;
          }

        }
        .content {
          margin: 0;
          position: relative;
          top: -7.001px;
          word-break: break-word;
        }
        &.right {
          .content {
            left: 72px;
            text-align: left;
            width: calc(100% - 72px);
          }

        }
        &.left {
          .content {
            margin: 0;
            text-align: left;
            left: 72px;
            width: calc(100% - 72px);
          }
        }
      }

      .img-back {
        position: absolute;
        width: 176px;
        height: 176px;
        top: 0;
        right: 0;
      }
    }
  }
  .show-box {
    position: relative;
    //width: 560px;
    &.active {
      background: #FFFFFF;
      box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
      padding: 40px;
      border-radius: 16px;
    }
    &+.show-box {
      margin-top: 118px;
    }
    .box-item{
      width: 100%;
      display: flex;
    }
    .text-wrapper {
      margin-bottom: 32px;
      flex: 1;
      .title-desc {
        color: @mainColor;
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 1px;
        text-transform: uppercase;
        margin-bottom: 12px;
      }
      .title {
        color: @fontColor;
        font-size: 44px;
        font-weight: 400;
        line-height: 48px;
        height: 48px;
        white-space: nowrap;

        margin-bottom: 26px;

      }

      .text-content {
        font-size: 20px;
        line-height: 32px;
        font-weight: 300;
        position: relative;
        white-space: pre-line;

      }
    }
    .img-wrapper {
      width: 100px;
      height: 100px;
      position: relative;

      margin-right: 49px;
      //float: left;

      img {
        object-fit: cover;
      }
    }
    .img-back {
      position: absolute;
      width: 176px;
      height: 176px;
      bottom: -50px;
      left: -50px;
    }
    @media only screen and (max-width: 760px) {
      position: relative;
      animation: none !important;
      &.active {
        background: transparent;
        box-shadow: none;
        padding: 0;
        border-radius: 0;
        z-index: auto !important;
      }
      &+.show-box {
        margin-top: 118px;
      }
      .box-item{
        width: 100%;
        display: flex;
      }
      .text-wrapper {
        margin-bottom: 32px;
        margin-top: 32px;
        flex: 1;
        .title-desc {
          color: @mainColor;
          font-size: 18px;
          font-weight: 500;
          line-height: 24px;
          letter-spacing: 1px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }
        .text-content {
          font-size: 16px;
          line-height: 24px;
        }
      }

      .mobile-title {
        position: relative;
        .title {
          color: @fontColor;
          font-size: 44px;
          font-weight: 400;
          line-height: 48px;
          height: 48px;
          white-space: nowrap;
          margin-bottom: 0;
        }
      }
      .img-wrapper {
        width: 100px;
        height: 100px;
        position: absolute;
        margin-right: 0;
        right: 0;
        bottom: 0;
        img {
          object-fit: cover;
        }
      }
      .img-back {
        position: absolute;
        width: 176px;
        height: 176px;
        bottom: -50px;
        left: -50px;
      }
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
</style>
