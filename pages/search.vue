<template>
  <div>
    <Header />
    <div>
      <div class="banner" :style="{background: `url('${bannerImg}')`}">
        <div class="wrapper">
          <div class="text-wrapper">
            <div class="title-desc">Welcome to weiran technology</div>
            <div class="title">搜索</div>
            <div class="subtitle">通过精准的内容传达 促成与消费者的有效沟通</div>
          </div>
        </div>
      </div>
      <div class="third-block">
        <div class="wrapper">
          <div class="page-content-wrapper ">
            <Breadcrumb :data="routes" />
            <div class="clearfix">
              <div class="list-nav">
                <div class="search-wrapper">
                  <div class="input-wrapper">
                    <b-form-input
                      id="help-search"
                      placeholder="查找相关咨询内容…"
                      v-model="searchText"
                    ></b-form-input>
                    <i class="iconfont input-search" @click="handleTextSearch">&#xe63a;</i>
                  </div>
                  <div class="total-wrapper clearfix">
                    <div class="total">{{ total }}条咨询</div>
                    <div class="select">
                      <SelfSelect :value="select" @onChange="handleSelectChange" :options="options" />
                    </div>
                  </div>
                </div>
                <div class="list-item clearfix" v-for="item in infoList" :key="item.id" @click="toDetail(item.id)">
                  <div class="item-title-wrapper clearfix">
                    <div class="item-title">{{item.title}}</div>
                    <PillButton class="action-button d-md-none">查看</PillButton>
                  </div>
                  <div class="item-content">{{item.description}}</div>
                  <PillButton class="action-button d-md-block d-none">查看</PillButton>
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
              <div class="card-wrapper">
                <InfoCard title="热门资讯"  :data="hotInfoList" path="/information/detail" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import TabBar from '~/components/information/TabBar/index'
import SelfSelect from '~/components/SelfSelect/index'
import Pagination from '~/components/Pagination/index'
import InfoCard from '~/components/information/InfoCard/index'
import { newsSearch, newsTagsList } from '@/service/news'

const bannerImg = require('@/static/search_banner.jpg')

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
    Pagination,
    InfoCard,
    SelfSelect,
  },
  data() {
    return {
      routes: [
        {
          name: '首页',
          path: '/',
        },
        {
          name: '搜索结果',
          path: '/search',
        },
        // {
        //   name: 'app',
        //   path: '/search?key=app',
        // },
      ],
      active: 1,
      bannerImg: bannerImg,
      infoList: [],
      hotInfoList: [],
      pageSize: 3,
      currentPage: 1,
      total: 20,
      searchText: '',
      select: '',
      options: [
        { label: '网址建设', value: 1},
        { label: '移动互联', value: 2},
        { label: '网址运维', value: 3},
        { label: '影像创意与制作', value: 4},
      ]
    }
  },
  created() {
    const query = this.$route.query
    console.log('query', query)
    if (process.browser){
      this.searchText = window.localStorage.getItem('searchText')
      window.localStorage.setItem('searchText','')
    }
    this.getNewsTagsList()
    this.requestData({limit: this.pageSize})
    this.requestHotInfo()
  },
  methods: {
    handleSelectChange(value) {
      this.select = value
      this.requestData()
    },
    handleTextSearch () {
      this.requestData()
    },
    handleTabBarChange(value) {
      console.log(value)
      this.active = value
    },
    async requestData(params) {
      const res = await newsSearch({
        keyword: this.searchText,
        limit: this.pageSize,
        page: this.currentPage,
        tags: this.select,
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
    async getNewsTagsList() {
      const res = await newsTagsList()
      const options = res.data.map(it => ({ label: it.name, value: it.id}))
      this.options = [
        { label: '全部', value: ''},
        ...options
      ]
      console.log(res, 'getNewsTagsList')
    },
    handleTextSearch () {
      this.requestData()
    },
    changePage(page, pageSize) {
      this.requestData({
        limit: pageSize,
        page: page,
      })
    },
  },

}
</script>

<style lang="less" scoped>

  .banner {
    height: 600px;
    color: @white;
    background-size: 100% 100%;
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
      background-size: cover;
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
  .third-block {
    background: #fff;
    position: relative;
    .wrapper {
      padding: 48px 135px;
      .page-content-wrapper {
      }
    }
    .title {
      font-size: 32px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #03101F;
      line-height: 45px;
      padding-bottom: 23px;
      margin-bottom: 40px;
      border-bottom: 1px solid #E5E5E5;
    }
    .list-nav {
      float: left;
      width: 755px;
      .search-wrapper {
        #help-search {
          height: 60px;
          background: #FFFFFF;
          border-radius: 4px;
          border: 1px solid #E5E5E5;
        }
        .total-wrapper {
          padding: 30px 0;
          border-bottom: 1px solid #E5E5E5;
          .total {
            float: left;
            font-size: 24px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #03101F;
            line-height: 33px;
          }
          .select {
            position: relative;
            float: right;
            width: 300px;
            &::after {
              position: absolute;
              left: 0;
              top: 50%;
              transform: translate(-100%,-50%);
              content: '筛选：';
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #03101F;
              line-height: 17px;
            }
          }
          .label {
            display: inline-block;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #03101F;
            line-height: 17px;
            vertical-align: middle;
          }
        }
      }
      .list-item {
        padding-top: 28px;
        padding-bottom: 20px;
        width: 732px;
        border-bottom: 1px solid #E5E5E5;
        .item-title {
          float: left;
          max-width: 654px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow:ellipsis;
          font-size: 20px;
          font-family: PingFangSC-Medium, PingFang SC;
          font-weight: 500;
          color: #474747;
          line-height: 28px;
          margin-bottom: 20px;
        }
        .action-button {
          padding: 4px 20px;
          font-size: 14px;
          line-height: 20px;
          float: right;
        }
        .item-content {
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #989CA2;
          line-height: 30px;
          max-height: 60px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      }

    }
    .card-wrapper {
      float: right;
      .mt60 {
        margin-top: 60px;
      }
    }
    @media only screen and (max-width: 760px) {
      .wrapper {
        padding: 96px 16px;
        padding-top: 0;
      }
      .title {
        font-size: 32px;
        line-height: 45px;
        padding-bottom: 23px;
        margin-bottom: 40px;
        border-bottom: 1px solid #E5E5E5;
      }
      .list-nav {
        float: none;
        width: 100%;
        .search-wrapper {
          #help-search {
            height: 60px;
            background: #FFFFFF;
            border-radius: 4px;
            border: 1px solid #E5E5E5;
          }
          .total-wrapper {
            padding: 30px 0;
            border-bottom: 1px solid #E5E5E5;
            .total {
              float: left;
              font-size: 16px;
              line-height: 22px
            }
            .select {
              position: relative;
              float: right;
              width: 106px;
              &::after {
                content: '筛选：';
                font-size: 12px;
                line-height: 17px;
              }
            }
            .label {
              display: inline-block;
              font-size: 12px;
              font-family: PingFangSC-Regular, PingFang SC;
              font-weight: 400;
              color: #03101F;
              line-height: 17px;
              vertical-align: middle;
            }
          }
        }
        .list-item {
          padding-top: 28px;
          padding-bottom: 20px;
          width: 100%;
          border-bottom: 1px solid #E5E5E5;
          .item-title {
            float: left;
            max-width: 100%;
            max-height: 56px;
            white-space: normal;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            font-size: 20px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #474747;
            line-height: 28px;
            margin-bottom: 20px;
          }
          .action-button {
            padding: 4px 20px;
            font-size: 14px;
            line-height: 20px;
            float: right;
          }
          .item-content {
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #989CA2;
            line-height: 30px;
            max-height: 120px;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
            margin-bottom: 12px;
          }
        }

      }
      .card-wrapper {
        float: none;
        margin-top: 60px;
        .mt60 {
          margin-top: 60px;
        }
      }
    }
  }
  .pagination-nav {
    text-align: right;
    margin-top: 40px;
    @media only screen and (max-width: 760px) {
      text-align: left;
      margin-top: 40px;
      margin-bottom: 64px;
    }
  }
  img {
    width: 100%;
    height: 100%;
  }
  .input-wrapper {
    position: relative;
    .input-search {
      display: inline-block;
      font-size: 18px;
      position: absolute;
      right: 24px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
    }
    @media only screen and (max-width: 760px) {
      .input-search {
        font-size: 18px;
        right: 24px;
      }
    }
  }
</style>
