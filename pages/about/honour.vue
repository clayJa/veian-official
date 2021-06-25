<template>
  <div>
    <Header />
    <div>
      <div class="banner" :style="{background: `url('/imageHost/${pageData.cover_picture ? pageData.cover_picture[0] : ''}')  no-repeat center center`}">
        <div class="wrapper">
          <div class="text-wrapper">
            <!-- <div class="title-desc">Welcome to weiran technology</div>
            <div class="title">资质荣誉</div>
            <div class="subtitle">我们的声音，务实求新</div> -->
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

        <div class="wrapper">

          <div class="show-box-nav clearfix">
            <div class="show-box" v-for="(item,index) in dataArray" :key="index">
              <div class="box-item">
                <div class="img-wrapper">
                  <img class="img" :src="`/imageHost/${item.cover_picture}`" alt="">
                </div>
                <div class="text-wrapper">
                  <div class="title">{{item.title}}</div>
                  <div class="subtitle">{{item.updated_at}}</div>
                </div>

              </div>
            </div>


          </div>
          <div class="pagination-nav">
            <Pagination
                v-if="total"
                :pageSize="pageSize"
                :total="total"
                @onchange="changePage"
            />
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
import Join from '@/components/Join'
import Pagination from '@/components/Pagination'
import {newsSearch} from '@/service/news'
const bannerImg = require('@/assets/images/about/honour/banner_back.jpg')

export default {
  components: {
    TabBar,
    Join,
    Pagination,
  },
  data() {
    console.log('data')
    return {
      curPath: '/about/honour',
      bannerImg: bannerImg,
      dataArray: [],

      pageSize: 8,
      currentPage: 1,
      total: 0,
      pageData: {}
    }
  },
  mounted() {
    this.getPageData()
  },
  methods: {
    async requestData(params) {
      const res = await newsSearch({
        limit: this.pageSize,
        page: this.currentPage,
        category: [this.pageData.category[0].id],
        ...params
      })
      this.dataArray = res.data
      this.pageSize = res.per_page
      this.currentPage = res.current_page
      this.total = res.total
    },
    changePage(page, pageSize) {
      this.requestData({
        limit: pageSize,
        page: page,
      })
    },
    async getPageData() {
      const menuMap = localStorage.getItem('menuMap') ? JSON.parse(localStorage.getItem('menuMap')) : {}
      const res = await this.$store.dispatch('getPageData',{id: menuMap[this.$nuxt.$route.path]})
      this.pageData = res.data[0]
      this.requestData({limit: this.pageSize, page: 1})
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
      padding: 135px 135px 72px 135px;

    }
    .tab-wrapper {
      position: absolute;
      top: -40px;
      left: 135px;
      right: 135px;
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
    }
  }
  .show-box-nav {
    margin-bottom: 12px;
    @media only screen and (max-width: 760px) {
      text-align: center;
    }
  }
  .pagination-nav {
    text-align: center;
  }
  .show-box {
    position: relative;
    float: left;
    padding: 0 16px 32px 16px;
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
        text-overflow:ellipsis;

        margin-bottom: 4px;

      }

      .subtitle {
        color: #8F92A1;
        font-size: 14px;
        line-height: 20px;
        height: 20px;
        position: relative;
        white-space: nowrap;
        overflow: hidden;
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
    @media only screen and (max-width: 760px) {
        position: relative;
        float: none;
        display: inline-block;
        padding: 0;
        margin-bottom: 64px;
        .box-item {
          width: 100%;
          height: auto;
        }
        .text-wrapper {
          font-weight: 300;
          text-align: center;
          .title {
            color: #171717;
            font-size: 16px;
            font-weight: 400;
            line-height: 22px;
            height: 22px;
            margin-bottom: 4px;
          }
          .subtitle {
            font-size: 14px;
            line-height: 20px;
            height: 20px;
          }
        }
        .img-wrapper {
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
  }

  img {
    width: 100%;
    height: 100%;
  }

</style>
