<template>
  <div>
    <Header />
    <div>
      <div class="third-block">
        <div class="breadcrumb-wrapper">
          <Breadcrumb :data="routes" />
        </div>
        <div class="wrapper">

          <div class="page-content-wrapper">
          <div class="article-wrapper">
            <ArticleDetail />
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
import Divider from '@/components/Divider'
import ArticleDetail from '@/components/information/ArticleDetail'


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
    InlineSvg,
    Pagination,
    InfoCard,
    Divider,
    ArticleDetail,
  },
  data() {

    return {
      curPath: '/information/detail',
      hotInfoList: [], //热门资讯
      popularityInfoList: [], //人气排名
      routes: [
        {
          name: '未苒网络科技',
          path: '/',
        },
        {
          name: '未苒资讯',
          path: '/information',
        },
        {
          name: '正文',
          path: '/information/detail2',
        },
      ],

    }
  },
  created() {
    this.requestHotInfo()
    this.requestPopularityInfo()

  },
  methods: {
    requestHotInfo() {
      const arr = []
      for (let i = 0; i < 10; i++) {
        arr.push({})
      }

      this.hotInfoList = dataList
    },
    requestPopularityInfo() {
      const arr = []
      for (let i = 0; i < 10; i++) {
        arr.push({})
      }

      this.popularityInfoList = dataList
    },


    changePage(page, pageSize) {
      console.log('page, pageSize', page, pageSize)
      this.requestData({
        limit: pageSize,
        page: page,
      })
    }
  },

}
</script>

<style lang="less" scoped>
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
      padding: 48px 135px;

      .page-content-wrapper {
        display: table;

      }
    }
    .article-wrapper {
      background: #fff;
      border: 1px solid #E5E5E5;
      padding: 32px 64px 64px 64px;
    }

  }
  .breadcrumb-wrapper {
    padding: 0 135px;
    background: #fff;

  }


  img {
    width: 100%;
    height: 100%;
  }

</style>
