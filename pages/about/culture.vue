<template>
  <div>
    <Header />
    <div>
      <div class="banner" :style="{background: `url('${bannerImg}')  no-repeat center center`}">
        <div class="wrapper">
          <div class="text-wrapper">
            <div class="title-desc">Welcome to weiran technology</div>
            <div class="title">未苒文化</div>
            <div class="subtitle">简单、信任、快乐</div>
          </div>

        </div>
      </div>
      <div class="secondary-block ">
        <div class="tab-wrapper">
          <TabBar :active="curPath" />

        </div>
        <div class="wrapper row row-no-gutters">
          <div class="col-md-6 col-xs-12">
            <div class="show-box">
              <div class="box-item">
                <img class="img-back" src="@/assets/images/about/dots_group.png" alt="">
                <div class="text-wrapper clearfix">
                  <div class="title-desc">Simple</div>
                  <div class="clearfix text">
                    <div class="title">简单</div>
                    <div class="subtitle-nav">
                      <div class="subtitle">时间长流，我们认为</div>
                      <div class="subtitle">最可贵的是能够体会，被信任的满足感。</div>
                    </div>
                  </div>

                </div>
                <div class="img-wrapper">
                  <img class="img" src="@/assets/images/about/culture/photo1.jpg" alt="">

                </div>
              </div>
            </div>
            <div class="show-box">
              <div class="box-item">
                <img class="img-back" src="@/assets/images/about/dots_group.png" alt="">
                <div class="text-wrapper clearfix">
                  <div class="title-desc">Happy</div>
                  <div class="clearfix text">
                    <div class="title">快乐</div>
                    <div class="subtitle-nav">
                      <div class="subtitle">因为快乐</div>
                      <div class="subtitle">所以我们是不会辜负的！</div>
                    </div>
                  </div>

                </div>
                <div class="img-wrapper">
                  <img class="img" src="@/assets/images/about/culture/photo2.jpg" alt="">

                </div>
              </div>
            </div>

          </div>
          <div class="right-block col-md-6 col-xs-12">
            <div class="show-box">
              <div class="box-item">
                <img class="img-back" src="@/assets/images/about/dots_group.png" alt="">
                <div class="text-wrapper clearfix">
                  <div class="title-desc">trusting</div>
                  <div class="clearfix text">
                    <div class="title">信任</div>
                    <div class="subtitle-nav">
                      <div class="subtitle">因为信任</div>
                      <div class="subtitle">所有的事最终都将只是简单的出发和到达。</div>
                    </div>
                  </div>

                </div>
                <div class="img-wrapper">
                  <img class="img" src="@/assets/images/about/culture/photo3.jpg" alt="">

                </div>
              </div>
            </div>
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
import Join from '@/components/Join/index'
const bannerImg = require('@/assets/images/about/culture/banner_back.jpg')


export default {
  components: {
    TabBar,
    Join,
  },
  data() {
    return {
      curPath: '/about/culture',
      bannerImg: bannerImg,

    }
  },
  methods: {

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
      color: @white;
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
    .right-block {
      padding-left: 58px;
      .show-box {
        margin-top: 232px;
        .img-back {
          right: -50px;
          left: auto;
        }
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
      .right-block {
        padding-left: 0;
        .show-box {
          margin-top: 232px;
          .img-back {
            right: auto;
            left: 0;
          }
        }
      }
    }
  }
  .show-box {
    position: relative;
    width: 560px;
    &+.show-box {
      margin-top: 118px;
    }
    .box-item{
      width: 100%;
    }
    .text-wrapper {
      margin-bottom: 32px;
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
        float: left;
        color: @fontColor;
        font-size: 44px;
        font-weight: 500;
        line-height: 56px;
        height: 56px;
        margin-right: 32px;

      }
      .subtitle-nav {
        //float: right;
      }
      .subtitle {
        color: @fontColor3;
        font-size: 20px;
        line-height: 34px;
        font-weight: 400;
        position: relative;

      }
    }
    .img-wrapper {
      height: 560px;
      position: relative;
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
      width: 100%;
      &+.show-box {
        margin-top: 120px;
      }
      .box-item{
        width: 100%;
      }
      .text-wrapper {
        margin-bottom: 32px;
        .title-desc {
          font-size: 18px;
          line-height: 24px;
          letter-spacing: 1px;
          margin-bottom: 12px;
          width: 100%;
        }
        .text {
          display: flex;
        }
        .title {
          float: none;
          font-size: 44px;
          line-height: 56px;
          height: 56px;
          margin-right: 32px;
          flex-shrink: 0;
        }
        .subtitle-nav {
        }
        .subtitle {
          font-size: 20px;
          line-height: 34px;
        }
      }
      .img-wrapper {
        height: 343px;
        position: relative;
        border-radius: 16px;
        img {
          object-fit: cover;
          border-radius: 16px;
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
