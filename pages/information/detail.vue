<template>
  <div class="detail-wrapper">
    <Header />
    <div>
      <div class="third-block">
        <div class="wrapper">
          <ol class="breadcrumb-nav breadcrumb">
            <i class="icon iconfont icon-icon_wechat">&#xe600;</i>
            <li><a class="black" href="/">未苒网络科技</a></li>
            <li><a class="black" href="/information">未苒资讯</a></li>
            <li class="active"><a>正文</a></li>
          </ol>
          <Divider />
          <div class="page-content-wrapper clearfix">
          <div class="article-wrapper">
            <ArticleDetail :data="articleData" />
          </div>

          <div class="card-wrapper">
            <InfoCard class="card-item" title="推荐资讯" :data="hotInfoList" path="/information/detail" />
            <InfoCard class="card-item" title="人气排名" :data="popularityInfoList" path="/information/detail" />
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

import TabBar from '~/components/about/TabBar/index'
import Join from '~/components/Join/index'
import Pagination from '~/components/Pagination/index'
import InfoCard from '~/components/information/InfoCard/index'
import Divider from '@/components/Divider'
import ArticleDetail from '@/components/information/ArticleDetail'
import { newsDetail, newsSearch } from '@/service/news'

const bannerImg = require('assets/images/information/banner_back.jpg')

const img = require('assets/images/information/photo.jpg')

const dataList = [
  {
    id: '',
    title: '=大数据环境下，网站建设更需创新学习能力 浙江广播电台 FM 104.5《浙商读书会》司马对话… 小程序商城能给企业带来哪些优势？ 哪些行业比较适合做裂变类小程序？ 传统电商怎样利用小程序获客？ 做一个高端的网站是小微企业品牌营销的第一步 这些网络营销推广渠道你知道吗？ 开发APP的关键名词解释 微信小程序如何实现知识付费？ 便利店如何利用小程序营业？',
    updateAt: '2020.09.17',
  },
  {
    title: '浙江广播电台FM104.5的《浙商读书会》访谈节目',
    updateAt: '2021.04.14',
    content: '在目前经济受创的市场大环境下可以说各大行业市场都处于发展停滞阶段，想要突出重围就必须要有所“创新”不可在走老路，而“知识付费”即处于创新领域，又算是内容变现的',

  },
  {
    title: '小程序商城能给企业带来哪些优势？',
    updateAt: '2021.04.14',
    content: '在目前经济受创的市场大环境下可以说各大行业市场都处于发展停滞阶段，想要突出重围就必须要有所“创新”不可在走老路，而“知识付费”即处于创新领域，又算是内容变现的',

  },
  {
    title: '哪些行业比较适合做裂变类小程序？',
    updateAt: '2021.04.14',
    content: '在目前经济受创的市场大环境下可以说各大行业市场都处于发展停滞阶段，想要突出重围就必须要有所“创新”不可在走老路，而“知识付费”即处于创新领域，又算是内容变现的',

  },
  {
    title: '传统电商怎样利用小程序获客？',
    updateAt: '2021.04.14',
    content: '在目前经济受创的市场大环境下可以说各大行业市场都处于发展停滞阶段，想要突出重围就必须要有所“创新”不可在走老路，而“知识付费”即处于创新领域，又算是内容变现的',

  },
  {
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
    Pagination,
    InfoCard,
    Divider,
    ArticleDetail,
  },
  data() {
    console.log('this.$route:', this.$route)

    return {
      curPath: '/information/detail',
      articleData: {},
      hotInfoList: [], //热门资讯
      popularityInfoList: [], //人气排名

      pageSize: 3,
      currentPage: 1,
      total: 20,
    }
  },
  created() {
    this.requestData()
    this.requestHotInfo()
    this.requestPopularityInfo()

  },
  methods: {
    async requestData() {
    const query = this.$route.query
    const res = await newsDetail({id: query.id})
    console.log(res,'requestData')
    this.articleData = res
      // this.articleData = {
      //   next: {
      //     id: 123,
      //     title: '诚贺复星集团品牌官网正式上线，重塑全新品牌形象'
      //   },
      //   prev: {
      //     id: 456,
      //     title: '新鸿儒再次牵手安恒信息，为数字经济高速发展护航',
      //   },
      //   title: '大数据环境下，网站建设更需创新学习能力',
      //   updateAt: '2020-09-17',
      //   source: '鼎易科技',
      // }
    },
    async requestHotInfo() {
      const res = await newsSearch({order: 'recommend'})
      this.hotInfoList = res.data
    },
    async requestPopularityInfo() {
      const res = await newsSearch({order: 'hot'})
      this.popularityInfoList = res.data
    },
  },

}
</script>

<style lang="less" scoped>
  .detail-wrapper {
    @media only screen and (max-width: 760px) {
      /deep/ .header-nav {
        .mobile-header {
          .logo {
            background-image: url('@/assets/images/logo.png');
          }
          .menu {
            background-image: url('@/assets/images/menu_icon_dark.png');
          }
        }
      }
    }
  }
  .third-block {
    //background: @white;
    position: relative;
    .wrapper {
      padding: 0 135px 96px 135px;

      .page-content-wrapper {
        display: table;

      }
    }
    .article-wrapper {
      display: table-cell;

    }
    .card-wrapper {
      display: table-cell;
      vertical-align: top;
      .card-item {
        &+.card-item {
          margin-top: 32px;
        }
      }
    }
    @media only screen and (max-width: 760px) {
      .wrapper {
        padding: 0;
        padding-top: 86px;
        .page-content-wrapper {
          display: block;
          width: 100%;
        }
      }
      .article-wrapper {
        display: inherit;
      }
      .card-wrapper {
        display: block;
        padding: 64px 16px 96px 16px;
        .card-item {
          &+.card-item {
            margin-top: 32px;
          }
        }
      }
    }
  }

  .breadcrumb-nav {
    height: 63px;
    line-height: 63px;
    background: #fff;
    a {
      font-size: 13px;
      font-weight: 400;
      color: #A6AAB1;
    }
    .active {
      a {
        color: @mainColor;
      }
    }
    .icon {
      color: @mainColor;
      margin-right: 10px;
    }
    @media only screen and (max-width: 760px) {
      height: 63px;
      line-height: 63px;
      a {
        font-size: 13px;
      }
      .icon {
        margin-right: 10px;
      }
    }
  }


  img {
    width: 100%;
    height: 100%;
  }

</style>
