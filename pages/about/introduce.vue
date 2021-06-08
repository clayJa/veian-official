<template>
  <div>
    <Header />
    <div>
      <div class="banner" :style="{background: `url('${bannerImg}')  no-repeat center center`}">
        <div class="wrapper clearfix d-md-none">
          <div class="main-data">
            <div class="text-wrapper">
              <div class="title">公司概况</div>
              <div class="subtitle">截止现在</div>
              <div class="subtitle">未苒网络科技概况</div>
            </div>
            <div class="data-intro row row-no-gutters clearfix">
              <div class="data-item">
                <div class="number-wrapper"><RollNum :number="26.4"/> <span class="unit">%</span></div>
                <div class="desc">
                  <span>
                    <img class="icon" src="@/assets/images/about/refresh-ccw.png" alt="">
                    数字增长
                  </span>
                </div>

              </div>
              <div class="data-item">
                <div class="number-wrapper"><RollNum :number="59.1"/><span class="unit">%</span></div>
                <div class="desc">
                  <span>
                    <img class="icon" src="@/assets/images/about/trending-up.png" alt="">
                    互动增长</span>
                </div>

              </div>
              <div class="data-item">
                <div class="number-wrapper"><RollNum :number="31.9"/><span class="unit">%</span></div>
                <div class="desc">
                  <span>
                    <img class="icon" src="@/assets/images/about/bar-chart.png" alt="">
                    数据沉淀</span>
                </div>

              </div>
            </div>
          </div>
          <div class="clients-serve">
            <div class="title">服务客户</div>
            <div class="number"><RollNum :number="5000"/>+</div>
            <div class="unit">client</div>

          </div>

        </div>
        <div class="wrapper clearfix d-md-block d-none">
          <div class="main-data">
            <div class="text-wrapper">
              <div class="title">公司概况</div>
              <div class="subtitle">截止现在</div>
              <div class="subtitle">未苒网络科技概况</div>
            </div>
            <div class="clients-serve">
              <div class="title">服务客户</div>
              <div class="number"><RollNum :number="5000"/>+</div>
              <div class="unit">client</div>
            </div>
            <div class="data-intro clearfix">
              <div class="data-item">
                <div class="number-wrapper"><RollNum :number="26.4"/> <span class="unit">%</span></div>
                <div class="desc">
                  <span>
                    <img class="icon" src="@/assets/images/about/refresh-ccw.png" alt="">
                    数字增长
                  </span>
                </div>

              </div>
              <div class="data-item">
                <div class="number-wrapper"><RollNum :number="59.1"/><span class="unit">%</span></div>
                <div class="desc">
                  <span>
                    <img class="icon" src="@/assets/images/about/trending-up.png" alt="">
                    互动增长</span>
                </div>

              </div>
              <div class="data-item">
                <div class="number-wrapper"><RollNum :number="31.9"/><span class="unit">%</span></div>
                <div class="desc">
                  <span>
                    <img class="icon" src="@/assets/images/about/bar-chart.png" alt="">
                    数据沉淀</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="secondary-block ">
        <div class="tab-wrapper">
          <TabBar active="/about/introduce" />

        </div>
        <div class="media-nav row row-no-gutters">
          <div class="media-wrapper col-md-6 col-xs-12 " >

            <img class="img-back" src="@/assets/images/about/dots_group.png" alt="">
            <div class="media-back" :style="{background: `url('${videoCover}')  no-repeat center center`}"  />
            <img class="play-btn" @click="playVideo()" src="@/assets/images/about/play.png" alt="">
            <template v-if="isPlay">
              <video class="video" controls width="100%" height="100%" autoplay>
                <source src="/media/cc0-videos/flower.mp4" type="video/mp4">

                Sorry, your browser doesn't support embedded videos.
              </video>
            </template>

          </div>
          <div class="media-desc col-md-6 col-xs-12">
            <div class="text-wrapper">
              <div class="title-desc">About us</div>
              <div class="title">关于 未苒科技</div>
              <p class="content">未苒网络科技(杭州)有限公司，位于杭州，秉承实现企业经营同行者的理念，以数据为核心，整合营销、内容、创意、技术、研发等多维度，多年的行业深耕经验，未苒网络致力于为客户提供综合经营数字化创新服务，连结企业商业与互联网前沿，帮助传统企业经营实现数字化转型升级。</p>
              <p class="content">瞬息万变的全球化十代，以互联网范概念为载体，深入到客户日常经营及运维的方方面面，协助其构建经营运作体系，有效对接BAT，形成企业、用户、平台的无缝对接，成为其高效互通的经营枢纽，并利用DT数据，制定精准经营策略，互联未来——致力于成为企业数字化商业前进同行者角色。</p>
            </div>
          </div>
        </div>
      </div>
      <div class="third-block" >
        <div class="wrapper row">
          <div class="main-data col-md-6 col-xs-12">
            <div class="text-wrapper">
              <div class="title-desc">client</div>
              <div class="title">关于 未苒科技</div>
              <div class="subtitle">服务的是你，也是我自己</div>
            </div>
            <div class="data-intro row row-no-gutters">
              <div class="data-item col-md-4 col-xs-6">
                <div class="number-wrapper"><RollNum :number="80"/><span class="unit">%</span></div>
                <div class="desc">
                  <span>执行团队比例</span>
                </div>

              </div>
              <div class="data-item col-md-4 col-xs-6">
                <div class="number-wrapper"><RollNum :number="1000"/>+</div>
                <div class="desc">
                  <span>经典客户案例</span>
                </div>
              </div>
            </div>
          </div>
          <div class="logo-wrapper col-md-6 col-xs-12">
            <img class="logo-item" src="@/assets/images/about/logo_types.png" alt="">
            <img class="logo-item" src="@/assets/images/about/logo_types.png" alt="">

          </div>

        </div>
      </div>
      <div class="four-block" :style="{background: `url('${sceneryImg1}')  no-repeat center center`}">
        <div class="wrapper">
          <div class="text-wrapper">
            <div class="title-desc">vision</div>
            <div class="title">愿景</div>
            <div class="content">致力于互联网前沿，通过互携、探讨，打造企业营销应用市场综合体
              为与企业互联网市场的需求而不断努力。</div>
              <div class="action">
                <Button class="primary">加入我们</Button>
              </div>
          </div>

        </div>
      </div>
      <div class="five-block" :style="{background: `url('${sceneryImg2}')  no-repeat center center`}">
        <div class="wrapper">
          <div class="text-wrapper">
            <div class="title-desc">purpose</div>
            <div class="title">简单、信任、快乐</div>
            <div class="content">因为信任，所以简单快乐！</div>

            <div class="content">开放协作的年代，相互间的纽带与羁绊，我们相信的未来因为信任所以舞台永远比想象的要辽阔。因为信任无间，所以凡事简单，并且快乐其中。苒苒生长。</div>
          </div>

        </div>
      </div>
      <Join />
    </div>
    <Footer />
  </div>
</template>

<script>
import TabBar from '@/components/about/TabBar'
import Button from '@/components/Button'
import RollNum from '@/components/RollNum'
import Join from '@/components/Join'


const bannerImg = require('@/assets/images/about/banner_back.jpg')
import videoCover from '@/assets/images/about/advisor.png'
import sceneryImg1 from '@/assets/images/about/bg_scenery1.jpg'
import sceneryImg2 from '@/assets/images/about/bg_scenery2.jpg'

export default {
  components: {
    TabBar,
    Button,
    Join,
    RollNum,
  },
  data() {
    return {
      bannerImg: bannerImg,
      videoCover: videoCover,
      sceneryImg1: sceneryImg1,
      sceneryImg2: sceneryImg2,
      isPlay: false,
    }
  },
  methods: {
    playVideo() {
      console.log('play')
      this.isPlay = true
    },
  },
  asyncData (context) {
    // called every time before loading the component
    return { name: 'World' }
  },
  fetch () {
    // The fetch method is used to fill the store before rendering the page
  },
  head () {
    // Set Meta Tags for this Page
  },
  // and more functionality to discover
}
</script>

<style lang="less" scoped>
@DINCondensedFont: DINCondensed-Bold, DINCondensed;
@MontserratFont: Montserrat-ExtraBold, Montserrat;
  .banner {
    height: 600px;
    color: @white;
    padding: 115px 135px;
    .main-data {
      float: left;
      //width: 696px;
      //height: 370px;
      padding: 36px 0 24px 0;
    }
    .clients-serve {
      float: right;
      width: 370px;
      height: 370px;
      border-radius: 4px;
      border: 2px solid #FFFFFF;
      padding-top: 87px;
      padding-left: 58px;
      .title {
        height: 45px;
        font-size: 32px;
        font-weight: 500;
        line-height: 45px;
        margin-bottom: 12px;
      }
      .number {
        font-family: @MontserratFont;
        height: 97px;
        font-size: 80px;
        font-weight: 800;
        //line-height: 97px;
        margin-bottom: 12px;

      }
      .unit {
        font-size: 22px;
        font-weight: 400;
        line-height: 30px;
        text-transform: uppercase;
      }

    }

    .text-wrapper {
      margin-bottom: 32px;
      .title {
        font-size: 72px;
        font-weight: 600;
        margin-bottom: 24px;
        line-height: 72px;
        height: 72px;
      }
      .subtitle {
        font-size: 18px;
        line-height: 32px;
        height: 32px;
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
    .data-intro {
      font-weight: 400;
      width: 600px;
      .data-item {
        //&+.data-item {
        //  margin-left: 36px;
        //}
        float: left;
        padding-right: 36px;

        .number-wrapper {
          font-family: @DINCondensedFont;
          font-size: 80px;
          height: 80px;
          line-height: 80px;
          letter-spacing: 2px;
          margin-bottom: 13px;

          .unit {
            font-size: 48px;
            letter-spacing: 2px;
          }
        }

        .desc {
          height: 22px;
          font-size: 14px;
          line-height: 22px;
          .icon {
            width: 22px;
            height: 22px;
            object-fit: contain;
          }
        }

      }
    }
    @media only screen and (max-width: 760px) {
      height: 600px;
      color: @white;
      padding: 109px 16px;
      .main-data {
        float: none;
        padding: 0;
      }
      .clients-serve {
        float: none;
        width: 120px;
        height: 120px;
        border-radius: 4px;
        border: 2px solid #FFFFFF;
        padding-top: 20px;
        padding-left: 20px;
        .title {
          height: 18px;
          font-size: 14px;
          font-weight: 500;
          line-height: 18px;
          margin-bottom: 4px;
        }
        .number {
          font-family: @MontserratFont;
          height: 32px;
          font-size: 30px;
          font-weight: 800;
          line-height: 36px;
          margin-bottom: 0px;
        }
        .unit {
          font-size: 12px;
          font-weight: 400;
          line-height: 20px;
          text-transform: uppercase;
        }

      }

      .text-wrapper {
        margin-bottom: 24px;
        .title {
          margin-bottom: 24px;
          font-size: 40px;
          line-height: 56px;
          height: 56px;
        }
        .subtitle {
          font-size: 18px;
          line-height: 32px;
          height: 32px;
        }
      }
      .data-intro {
        font-weight: 400;
        width: 100%;
        margin-top: 24px;
        text-align: center;
        .data-item {
          display: inline-block;
          padding-right: 30px;
          &:last-child {
            padding-right: 0;
          }
          .number-wrapper {
            font-family: @DINCondensedFont;
            font-size: 40px;
            height: 40px;
            line-height: 40px;
            letter-spacing: 1px;
            margin-bottom: 13px;
            .unit {
              font-size: 24px;
              letter-spacing: 1px;
            }
          }
          .desc {
            height: 20px;
            font-size: 14px;
            line-height: 20px;
            .icon {
              width: 22px;
              height: 22px;
              object-fit: contain;
              vertical-align: middle;
            }
          }

        }
      }
    }
  }
  .secondary-block {
    background: @white;

    padding: 108px 135px 0 135px;
    position: relative;
    .tab-wrapper {
      position: absolute;
      top: -40px;
      left: 135px;
      right: 135px;
    }
    .media-nav {
      .media-wrapper {
        //width: 618px;
        height: 528px;
        position: relative;
        border-radius: 15px;
        .media-back {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: @bgColor;
          border-radius: 15px;
        }
        .img-back {
          position: absolute;
          width: 176px;
          height: 176px;
          bottom: -88px;
          left: -88px;
        }
        .play-btn {
          position: absolute;
          width: 112px;
          height: 112px;
          top: 50%;
          left: 50%;
          margin-left: -56px;
          margin-top: -56px;
        }
        .video {
          position: absolute;
          top: 0;
          //left: 0;
          //right: 0;
          bottom: 0;
          border-radius: 15px;
        }

      }
      .media-desc {
        padding: 32px 0 32px 72px;
        .text-wrapper {
          margin-bottom: 38px;

          .title-desc {
            color: @fontColor2;

            font-size: 18px;
            font-weight: 400;
            line-height: 32px;
            letter-spacing: 2px;
            text-transform: uppercase;
          }
          .title {
            font-size: 56px;
            font-weight: 400;
            margin: 24px 0;
            line-height: 64px;
            height: 64px;
          }
          .subtitle {
            font-size: 18px;
            line-height: 32px;
            height: 32px;
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
          .content {
            color: @fontColor3;
            font-size: 16px;
            font-weight: 400;
            line-height: 32px;
            &+.content {
              margin-top: 32px;
            }
          }
        }
      }
    }
    @media only screen and (max-width: 760px) {
        background: @white;
        padding: 136px 16px 0 16px;
        position: relative;
        .tab-wrapper {
          position: absolute;
          top: -40px;
          left: 16px;
          right: 0;
        }
        .media-nav {
          .media-wrapper {
            //width: 618px;
            height: 528px;
            position: relative;
            border-radius: 15px;
            .media-back {
              border-radius: 15px;
            }
            .img-back {
              width: 176px;
              height: 176px;
              bottom: -48px;
              left: 0;
            }
            .play-btn {
              position: absolute;
              width: 112px;
              height: 112px;
              top: 50%;
              left: 50%;
              margin-left: -56px;
              margin-top: -56px;
            }
            .video {
              border-radius: 15px;
            }
          }
          .media-desc {
            padding: 112px 0 32px 0px;
            .text-wrapper {
              margin-bottom: 38px;

              .title-desc {
                font-size: 18px;
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
                font-size: 16px;
                line-height: 32px;
                height: 32px;
              }
              .content {
                color: @fontColor3;
                font-size: 16px;
                font-weight: 400;
                line-height: 32px;
                &+.content {
                  margin-top: 32px;
                }
              }
            }
          }
        }
    }
  }
  .third-block {
    padding: 115px 135px;

    .main-data {
      //width: 696px;
      //height: 370px;
      .text-wrapper {
        margin-bottom: 38px;

        .title-desc {
          color: @fontColor2;

          font-size: 18px;
          font-weight: 400;
          line-height: 32px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .title {
          font-size: 56px;
          font-weight: 400;
          margin: 24px 0;
          line-height: 64px;
          height: 64px;
        }
        .subtitle {
          font-size: 18px;
          line-height: 32px;
          height: 32px;
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
        .content {
          color: @fontColor3;
          font-size: 16px;
          font-weight: 400;
          line-height: 32px;
          &+.content {
            margin-top: 32px;
          }
        }
      }
      .data-intro {

        .data-item {
          //&+.data-item {
          //  margin-left: 36px;
          //}
          padding-right: 36px;

          .number-wrapper {
            font-family: @DINCondensedFont;
            //font-size: 80px;
            font-size: 55px;

            height: 80px;
            line-height: 80px;
            letter-spacing: 2px;

            margin-bottom: 13px;
            //white-space: nowrap;
            .unit {
              font-size: 48px;

              letter-spacing: 2px;
            }
          }
          .desc {
            height: 20px;
            font-size: 14px;
            font-weight: 400;
            color: @fontColor2;
            line-height: 20px;
          }

        }
      }

    }
    .logo-wrapper {

      .logo-item {
        &:first-child {
          margin-top: 27px;
        }
        &+.logo-item {
          margin-top: 47px;
        }
      }
    }

    @media only screen and (max-width: 760px) {
      padding: 96 16px;
      .main-data {
        .text-wrapper {
          margin-bottom: 32px;
          .title-desc {
            font-size: 18px;
            line-height: 32px;
            letter-spacing: 2px;
          }
          .title {
            font-size: 40px;
            font-weight: 400;
            margin: 24px 0;
            line-height: 56px;
            height: 56px;
          }
          .subtitle {
            font-size: 16px;
            line-height: 32px;
            height: 32px;
            position: relative;
          }
        }
        .data-intro {

          .data-item {
            padding-right: 36px;
            &:last-child {
              padding-right: 0;
            }
            .number-wrapper {
              font-family: @DINCondensedFont;
              font-size: 55px;
              height: 60px;
              line-height: 60px;
              letter-spacing: 2px;
              margin-bottom: 0px;
              .unit {
                font-size: 48px;
                letter-spacing: 2px;
              }
            }
            .desc {
              height: 20px;
              font-size: 14px;
              font-weight: 400;
              color: @fontColor2;
              line-height: 20px;
            }

          }
        }

      }
      .logo-wrapper {
        .logo-item {
          &:first-child {
            margin-top: 27px;
          }
          &+.logo-item {
            margin-top: 47px;
          }
        }
      }
    }
  }
  .four-block {
    height: 700px;
    margin-bottom: 48px;
    .text-wrapper {
      margin: 0 auto;
      color: @white;
      text-align: center;
      padding-top: 210px;
      width: 480px;
      .title-desc {

        font-size: 18px;
        font-weight: 400;
        line-height: 32px;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
      .title {
        font-size: 56px;
        font-weight: 400;
        margin: 24px 0;
        line-height: 64px;
        height: 64px;
      }
      .content {
        font-size: 16px;
        line-height: 32px;
      }
      .action {
        margin-top: 14px;
      }
    }
    @media only screen and (max-width: 760px) {
      height: 700px;
      margin-bottom: 48px;
      .text-wrapper {
        padding-top: 198px;
        width: 100%;
        .title-desc {
          font-size: 18px;
          line-height: 32px;
          letter-spacing: 2px;
        }
        .title {
          font-size: 40px;
          margin: 24px 0;
          line-height: 56px;
          height: 56px;
        }
        .content {
          font-size: 16px;
          line-height: 32px;
          padding: 0 16px;
        }
        .action {
          margin-top: 24px;
          text-align: center;
        }
      }
    }
  }
  .five-block {
    height: 700px;
    padding: 0 135px;

    .text-wrapper {
      margin: 0 auto;
      float: right;
      color: @white;
      text-align: right;
      padding-top: 246px;
      width: 480px;
      font-weight: 400;

      .title-desc {

        font-size: 18px;
        line-height: 32px;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
      .title {
        font-size: 56px;
        font-weight: 400;
        margin: 24px 0;
        line-height: 64px;
        height: 64px;
      }

      .content {
        font-size: 16px;
        line-height: 32px;
        &+.content {
          margin-top: 32px;
        }
      }

    }
    @media only screen and (max-width: 760px) {
      height: 700px;
      padding: 0 16px;
      .text-wrapper {
        margin: 0 auto;
        padding-top: 202px;
        width: 100%;
        .title-desc {
          font-size: 18px;
          line-height: 32px;
          letter-spacing: 2px;
        }
        .title {
          font-size: 40px;
          margin: 24px 0;
          line-height: 56px;
          height: 56px;
        }
        .content {
          font-size: 16px;
          line-height: 32px;
          &+.content {
            margin-top: 32px;
          }
        }
      }
    }
  }


  .action-button {
    display: inline-block;
    border-radius: 24px;
    //border: 1px solid #3b8070;
    text-decoration: none;
    padding: 10px 30px;
    &.primary {
      color: @white;
      background: @mainColor;
    }
    &.secondary {
      color: @white;
      background: @mainColor1;
    }

    .icon {
      margin-right: 12px;
    }
    @media only screen and (max-width: 760px) {
      border-radius: 24px;
      padding: 12px 48px;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
  .pd-r-36 {
    padding-right: 36px;
  }
  .pd-l-36 {
    padding-left: 36px;
  }
</style>
