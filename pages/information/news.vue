<template>
  <div>
    <Header />
    <div>
      <div class="banner" :style="{background: `url('${bannerImg}')  no-repeat center center`}">
        <div class="wrapper">
          <div class="text-wrapper">
            <div class="title-desc">Welcome to weiran technology</div>
            <div class="title">Our Voice down-to-earth and creative</div>
            <div class="subtitle">我们的声音，务实求新</div>
          </div>

        </div>
      </div>
      <div class="third-block">
        <div class="wrapper">
          <div class="page-content-wrapper">


          <div class="list-nav">
            <div class="list-item" v-for="item in infoList" :key="item.title" @click="toDetail(item.id)">
              <div class="show-box" >
                <div class="box-item clearfix">
                  <div class="img-wrapper">
                    <img class="img" :src="item.cover_picture" alt="">
                  </div>
                  <div class="text-wrapper right">
                    <div class="title-desc">{{item.updated_at}}</div>
                    <div class="title">{{item.title}}</div>
                    <div class="content">{{item.description}}</div>
                    <a :href="`/information/detail${item.id ? '?id='+ item.id : ''}`" class="action">查看更多<InlineSvg :src="require('assets/images/icon_arrow_right.svg')" class="icon" />
                    </a>
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
          <div class="card-wrapper">
            <InfoCard title="热门资讯"  :data="hotInfoList" path="/information/detail" />
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
import InlineSvg from 'vue-inline-svg';

import TabBar from '~/components/about/TabBar/index'
import Join from '~/components/Join/index'
import Pagination from '~/components/Pagination/index'
import InfoCard from '~/components/information/InfoCard/index'
import { newsSearch } from '@/service/news'
import { getMenu } from '@/service/public'

const bannerImg = require('assets/images/information/banner_back.jpg')

const img = require('assets/images/information/photo.jpg')

const generateId = () => {
  return String(new Date().getTime()) + Math.floor(Math.random() * 899 + 100);
};
const dataList = [
  {
    id: generateId(),
    title: '=大数据环境下，网站建设更需创新学习能力 浙江广播电台 FM 104.5《浙商读书会》司马对话… 小程序商城能给企业带来哪些优势？ 哪些行业比较适合做裂变类小程序？ 传统电商怎样利用小程序获客？ 做一个高端的网站是小微企业品牌营销的第一步 这些网络营销推广渠道你知道吗？ 开发APP的关键名词解释 微信小程序如何实现知识付费？ 便利店如何利用小程序营业？',
    updateAt: '2020.09.17',
  },
  {
    id: generateId(),
    title: '浙江广播电台FM104.5的《浙商读书会》访谈节目',
    updateAt: '2021.04.14',
    content: '在目前经济受创的市场大环境下可以说各大行业市场都处于发展停滞阶段，想要突出重围就必须要有所“创新”不可在走老路，而“知识付费”即处于创新领域，又算是内容变现的',

  },
  {
    id: generateId(),
    title: '小程序商城能给企业带来哪些优势？',
    updateAt: '2021.04.14',
    content: '在目前经济受创的市场大环境下可以说各大行业市场都处于发展停滞阶段，想要突出重围就必须要有所“创新”不可在走老路，而“知识付费”即处于创新领域，又算是内容变现的',

  },
  {
    id: generateId(),
    title: '哪些行业比较适合做裂变类小程序？',
    updateAt: '2021.04.14',
    content: '在目前经济受创的市场大环境下可以说各大行业市场都处于发展停滞阶段，想要突出重围就必须要有所“创新”不可在走老路，而“知识付费”即处于创新领域，又算是内容变现的',

  },
  {
    id: generateId(),
    title: '传统电商怎样利用小程序获客？',
    updateAt: '2021.04.14',
    content: '在目前经济受创的市场大环境下可以说各大行业市场都处于发展停滞阶段，想要突出重围就必须要有所“创新”不可在走老路，而“知识付费”即处于创新领域，又算是内容变现的',

  },
  {
    id: generateId(),
    title: '做一个高端的网站是小微企业品牌营销的第一步 ',
    updateAt: '2021.04.14',
    content: '在目前经济受创的市场大环境下可以说各大行业市场都处于发展停滞阶段，想要突出重围就必须要有所“创新”不可在走老路，而“知识付费”即处于创新领域，又算是内容变现的',

  },
  {
    title: '这些网络营销推广渠道你知道吗？',
    updateAt: '2021.04.14',
    content: '在目前经济受创的市场大环境下可以说各大行业市场都处于发展停滞阶段，想要突出重围就必须要有所“创新”不可在走老路，而“知识付费”即处于创新领域，又算是内容变现的',

  },
  {
    title: '开发APP的关键名词解释',
    updateAt: '2021.04.14',
    content: '在目前经济受创的市场大环境下可以说各大行业市场都处于发展停滞阶段，想要突出重围就必须要有所“创新”不可在走老路，而“知识付费”即处于创新领域，又算是内容变现的',

  },
  {
    title: '微信小程序如何实现知识付费？',
    updateAt: '2021.04.14',
    content: '在目前经济受创的市场大环境下可以说各大行业市场都处于发展停滞阶段，想要突出重围就必须要有所“创新”不可在走老路，而“知识付费”即处于创新领域，又算是内容变现的',

  },
  {
    title: '便利店如何利用小程序营业？',
    updateAt: '2021.04.14',
    content: '在目前经济受创的市场大环境下可以说各大行业市场都处于发展停滞阶段，想要突出重围就必须要有所“创新”不可在走老路，而“知识付费”即处于创新领域，又算是内容变现的',

  },
]
export default {
  components: {
    TabBar,
    Join,
    InlineSvg,
    Pagination,
    InfoCard,
  },
  data() {
    return {
      curPath: '/about/join',
      bannerImg: bannerImg,
      infoList: [],
      hotInfoList: [],
      category: [],
      pageSize: 3,
      currentPage: 1,
      total: 20,
    }
  },
  created() {
    // const query = this.$route.query
    // console.log('query', query)
    this.getPageData()
    this.requestHotInfo()
  },
  methods: {
    toDetail(id) {
      this.$router.push(`/information/detail?id=${id}`)
    },
    async requestData(params) {
      const res = await newsSearch({
        limit: this.pageSize,
        page: this.currentPage,
        category: this.category,
        ...params
      })
      this.infoList = res.data
      this.pageSize = res.per_page
      this.currentPage = res.current_page
      this.total = res.total
    },
    async requestHotInfo() {
      const res = await newsSearch({order: 'hot'})
      this.hotInfoList = res.data
    },
    changePage(page, pageSize) {
      this.requestData({
        limit: pageSize,
        page: page,
      })
    },
    async getPageData() {
      const menuMap = localStorage.getItem('menuMap') ? JSON.parse(localStorage.getItem('menuMap')) : {}
      const res = await getMenu({id: menuMap[this.$nuxt.$route.path]})
      const category = res.data[0].category.map(it => it.id)
      this.category = category
      this.requestData({category})
    }
  },

}
</script>

<style lang="less" scoped>

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
        padding: 160px 16px;
        .text-wrapper {
          margin-bottom: 0px;
          .title-desc {
            font-size: 14px;
            line-height: 32px;
            letter-spacing: 0px;
          }
          .title {
            font-size: 40px;
            margin: 24px 0;
            line-height: 56px;
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
      padding: 135px 0;
    }
  }
  .third-block {
    background: @white2;
    position: relative;
    .wrapper {
      padding: 96px 135px;

      .page-content-wrapper {
        display: table;

      }
    }

    .list-nav {
      display: table-cell;
      vertical-align: top;
      padding-right: 48px;
      .list-item {
        //padding: 40px 48px;
        cursor: pointer;
        border-radius: 16px;
        border: 1px solid #E5E5E5;
        background: #FFFFFF;
        &:hover {
          a {
            color: #1A82FF;
          }
        }
        &+.list-item {
          margin-top: 24px;
        }

        .item-title {
          margin-bottom: 20px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow:ellipsis;
          .title-text {
            float: left;

            height: 24px;
            font-size: 18px;
            font-weight: 500;
            line-height: 24px;

          }
          .extra {
            float: right;

            font-size: 16px;
            font-weight: 400;
            color: #474747;
          }
        }
        .item-content {

          font-size: 14px;
          font-weight: 400;
          color: #A6AAB1;
          line-height: 24px;
          //white-space: nowrap;

          //overflow: hidden;
          text-overflow:ellipsis;
        }
      }

    }
    .card-wrapper {
      display: table-cell;
      vertical-align: top;
    }
    @media only screen and (max-width: 760px) {
      .wrapper {
        padding: 96px 16px 48px 16px;
        .page-content-wrapper {
          display: block;

        }
      }

      .list-nav {
        display: block;
        // vertical-align: top;
        padding-right: 0;
        .list-item {
          border-radius: 16px;
          border: 1px solid #E5E5E5;
          background: #FFFFFF;

          &+.list-item {
            margin-top: 32px;
          }
          .item-title {
            margin-bottom: 20px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow:ellipsis;
            .title-text {
              float: left;
              height: 24px;
              font-size: 18px;
              font-weight: 500;
              line-height: 24px;
            }
            .extra {
              float: right;
              font-size: 16px;
              font-weight: 400;
              color: #474747;
            }
          }
          .item-content {
            font-size: 14px;
            font-weight: 400;
            color: #A6AAB1;
            line-height: 24px;
            text-overflow:ellipsis;
          }
        }

      }
      .card-wrapper {
        display: block;
      }
    }
  }
  .tab-wrapper {
    position: absolute;
    top: -40px;
    left: 135px;
    right: 135px;
  }
  .show-box {
    position: relative;
    .box-item{
      height: 228px;
      display: table;
    }
    .text-wrapper {
      position: relative;
      display: table-cell;
      vertical-align: top;
      padding: 24px 32px 20px 32px;
      //&.right {
      //  float: right;
      //}
      .title-desc {
        color: #474747;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        height: 24px;

        white-space: nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
      }
      .title {
        font-size: 18px;
        font-weight: 500;
        line-height: 24px;
        height: 24px;

        white-space: nowrap;
        overflow: hidden;
        text-overflow:ellipsis;

        margin: 12px 0;

      }
      .subtitle {
        color: #A6AAB1;
        font-size: 16px;
        line-height: 32px;
        font-weight: 400;
        position: relative;
      }
      .content {
        color: #A6AAB1;
        font-size: 14px;
        line-height: 24px;
        font-weight: 400;
        position: relative;
        //white-space: pre-line;
        margin-bottom: 20px;
      }
      .action {
        position: absolute;
        bottom: 20px;
        font-size: 14px;
        font-weight: 500;
        color: #E5E5E5;
        line-height: 20px;
        .icon {
          margin-left: 20px;
          width: 16px;
        }
        &:hover {
          color: @mainColor;
        }

      }
    }
    .img-wrapper {
      display: table-cell;

      width: 300px;
      height: 100%;
      position: relative;
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
    @media only screen and (max-width: 760px) {
      position: relative;
      .box-item{
        height: auto;
        display: block;
      }
      .text-wrapper {
        position: relative;
        display: block;
        padding: 32px 32px 20px 32px;
        .title-desc {
          color: #333;
          font-size: 16px;
          line-height: 24px;
          height: 24px;
        }
        .title {
          font-size: 18px;
          font-weight: 500;
          line-height: 24px;
          height: 24px;
          margin: 12px 0;

        }
        .subtitle {
          color: #A6AAB1;
          font-size: 16px;
          line-height: 32px;
          font-weight: 400;
          position: relative;
        }
        .content {
          font-size: 14px;
          line-height: 24px;
          padding-bottom: 20px;
        }
        .action {
          position: absolute;
          bottom: 20px;
          font-size: 14px;
          font-weight: 500;
          color: #E5E5E5;
          line-height: 20px;
          .icon {
            margin-left: 20px;
            width: 16px;
          }
          &:hover {
            color: @mainColor;
          }
        }
      }
      .img-wrapper {
        display: block;
        width: 100%;
        height: 100%;
        position: relative;
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
  .pagination-nav {
    text-align: center;
    margin-top: 28px;
    @media only screen and (max-width: 760px) {
      margin-top: 48px;
      margin-bottom: 48px;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }

</style>
