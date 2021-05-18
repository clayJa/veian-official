<template>
  <div>
    <Header />
    <div>
      <div class="banner" :style="{background: `url('${bannerImg}')  no-repeat center center`}">
        <div class="wrapper">
          <div class="text-wrapper">
            <div class="title-desc">Welcome to weiran technology</div>
            <div class="title">资质荣誉</div>
            <div class="subtitle">我们的声音，务实求新</div>
          </div>

        </div>
      </div>
      <div class="secondary-block ">
        <div class="tab-wrapper">
          <TabBar :active="curPath" />

        </div>

        <div class="wrapper">
          <div class="show-box-nav clearfix">
            <div class="show-box" v-for="item in dataArray">
              <div class="box-item">
                <div class="img-wrapper">
                  <img class="img" :src="item.img" alt="">
                </div>
                <div class="text-wrapper">
                  <div class="title">{{item.title}}</div>
                  <div class="text-content">{{item.desc}}</div>
                </div>

              </div>
            </div>


          </div>

          <nav aria-label="...">
            <ul class="pagination">
              <li class="disabled"><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
              <li class="active"><a href="#">1 <span class="sr-only">(current)</span></a></li>
            </ul>
          </nav>
        </div>

      </div>

      <MoreBanner />
    </div>
    <Footer />
  </div>
</template>

<script>
import TabBar from '@/components/about/TabBar'
import MoreBanner from '@/components/about/MoreBanner'
const bannerImg = require('@/assets/images/about/honour/banner_back.jpg')

export default {
  components: {
    TabBar,
    MoreBanner,
  },
  data() {
    console.log('data')
    return {
      curPath: '/about/honour',
      bannerImg: bannerImg,
      dataArray: [],

      perPage: 3,
      currentPage: 1,
      rows: 9,
    }
  },
  created() {
    this.requestData({limit: 20})
  },
  methods: {
    requestData(params) {
      const {limit = 15, page = 1} = params
      const arr = []
      for (let i = 0; i < limit; i++) {
        arr.push({
          title: '国家高新技术企业证书' + i,
          desc: '2008-3-23',
          img: require('@/assets/images/about/honour/certificate.jpg'),
        })
      }

      this.dataArray = arr
    },
  },
  fetch () {
    // The fetch method is used to fill the store before rendering the page
    console.log('fetch')
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
  }

  .secondary-block {
    background: @white;
    position: relative;
    .wrapper {
      padding: 135px;
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
      }
      .subtitle {
        height: 32px;
        font-size: 24px;
        font-weight: 300;
        line-height: 32px;
      }
    }

  }
  .tab-wrapper {
    position: absolute;
    top: -40px;
    left: 135px;
    right: 135px;
  }
  .show-box-nav {

  }
  .show-box {
    position: relative;
    float: left;
    padding: 0 17.5px 32px 0;
    //width: 560px;
    .box-item{
      width: 260px;
      height: 230px;
    }
    .text-wrapper {
      font-weight: 300;
      text-align: center;
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
        color: #171717;
        font-size: 16px;
        font-weight: 400;
        line-height: 22px;
        height: 22px;
        white-space: nowrap;
        overflow: hidden;

        margin-bottom: 4px;

      }

      .subtitle {
        color: #8F92A1;
        font-size: 14px;
        line-height: 20px;
        height: 20px;
        position: relative;
        white-space: pre-line;

      }
    }
    .img-wrapper {
      //width: 260px;
      height: 160px;
      position: relative;

      margin-bottom: 24px;
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

  img {
    width: 100%;
    height: 100%;
  }

</style>