<template>
  <div>
    <Header />
    <div>
      <div class="banner" :style="{background: `url('${bannerImg}')  no-repeat center center`}">
        <div class="wrapper">
          <div class="text-wrapper">
            <div class="title-desc">Welcome to weiran technology</div>
            <div class="title">未苒模样</div>
            <div class="subtitle">我们的声音，务实求新</div>
          </div>

        </div>
      </div>
      <div class="secondary-block ">
        <div class="tab-wrapper">
          <TabBar :active="curPath" />

        </div>

        <div class="wrapper">
          <img class="img-back" src="@/assets/images/about/dots_group.png" alt="">

          <div class="show-box-nav clearfix">
            <div class="show-box" v-for="item in dataArray">
              <div class="box-item">
                <div class="img-wrapper">
                  <img class="img" :src="item.img" alt="">
                </div>
                <div class="text-wrapper">
                  <div class="title">{{item.title}}</div>
                  <div class="subtitle">{{item.desc}}</div>
                </div>

              </div>
            </div>


          </div>
          <div class="pagination-nav">
            <Pagination
                :pageSize="pageSize"
                :total="total"
                @onchange="changePage"
            />
          </div>


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
import Pagination from '@/components/Pagination'

const bannerImg = require('@/assets/images/about/show/banner_back.jpg')

export default {
  components: {
    TabBar,
    MoreBanner,
    Pagination,
  },
  data() {
    console.log('data')
    return {
      curPath: '/about/show',
      bannerImg: bannerImg,
      dataArray: [],

      pageSize: 9,
      currentPage: 1,
      total: 50,
    }
  },
  created() {
    this.requestData({limit: this.pageSize, page: 1})
  },
  methods: {
    requestData(params) {
      const {limit = 15, page = 1} = params
      const arr = []
      for (let i = 0; i < limit; i++) {
        arr.push({
          title: '年中总结' + (i + 1 + ((page - 1) * limit)),
          desc: '2008-3-23',
          img: require('@/assets/images/about/show/photo.jpg'),
        })
      }

      this.dataArray = arr
    },
    changePage(page, pageSize) {
      console.log('page, pageSize', page, pageSize)
      this.requestData({
        limit: pageSize,
        page: page,
      })
    }
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
      padding: 135px 135px 72px 135px;

    }

  }
  .tab-wrapper {
    position: absolute;
    top: -40px;
    left: 135px;
    right: 135px;
  }
  .show-box-nav {
    margin-bottom: 12px;
  }
  .pagination-nav {
    text-align: center;
  }
  .show-box {
    position: relative;
    float: left;
    padding: 0 15px 48px 15px;
    //width: 560px;
    .box-item{
      width: 370px;
      height: 370px;
      box-shadow: 10px 10px 40px 0px rgba(54, 33, 0, 0.1);
      border-radius: 12px;
    }
    .text-wrapper {
      font-weight: 300;
      text-align: center;
      padding: 24px 32px 20px 32px;
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
        color: #474747;
        font-size: 24px;
        font-weight: 400;
        line-height: 32px;
        height: 32px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow:ellipsis;

        margin-bottom: 5px;

      }

      .subtitle {
        color: #A6AAB1;
        font-size: 16px;
        line-height: 32px;
        height: 32px;
        position: relative;
        white-space: nowrap;
        overflow: hidden;

      }
    }
    .img-wrapper {
      //width: 260px;
      height: 256px;
      position: relative;

      img {
        object-fit: cover;
        border-top-right-radius: 12px;
        border-top-left-radius: 12px;
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