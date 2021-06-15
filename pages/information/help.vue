<template>
  <div>
    <Header />
    <div>
      <div class="banner" :style="{backgroundImage: `url('${bannerImg}')`}">
        <div class="wrapper">
          <div class="text-wrapper">
            <div class="title-desc">Welcome to weiran technology</div>
            <div class="title">Our Voice down-to-earth and creative</div>
            <div class="subtitle">我们的声音，务实求新</div>
          </div>
        </div>
      </div>
      <!-- <div class="secondary-block">
        <div class="tab-wrapper">
          <TabBar :active="active" :menus="menus" @onChange="handleTabBarChange" />
        </div>
      </div> -->
      <div class="third-block">
        <div class="wrapper">
          <div class="page-content-wrapper ">
            <div class="title">帮助中心</div>
            <div class="clearfix">
              <div class="list-nav">
                <div class="search-wrapper">
                  <b-form-input
                    id="help-search"
                    placeholder="查找相关咨询内容…"
                    v-model="searchText"
                  ></b-form-input>
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
                      :pageSize="pageSize"
                      :total="total"
                      @onchange="changePage"
                  />
                </div>
              </div>
              <div class="card-wrapper">
                <RankList title="热门资讯"  :data="hotInfoList" path="/information/detail" />
                <RankList class="mt60" title="人气排行"  :data="hotInfoList.slice(0,5)" path="/information/detail" />
                <div class="tag-wrapper mt60">
                  <div class="tag-title">关键词</div>
                  <div class="tag-list clearfix">
                    <div class="tag" v-for="tag in tags" :key="tag.vlaue">
                      {{ tag.name }}
                    </div>
                  </div>
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
import TabBar from '~/components/information/TabBar/index'
import Join from '~/components/Join/index'
import SelfSelect from '~/components/SelfSelect/index'
import Pagination from '~/components/Pagination/index'
import RankList from '~/components/information/RankList/index'
import { newsSearch, newsHot } from '@/service/news'

const bannerImg = require('assets/images/information/information_help_banner.jpg')

const tags = [
  { name: '新能源', value: 1},
  { name: '移动互联网大数据', value: 1},
  { name: '微信小程序如何实现...', value: 1},
  { name: '健康医疗', value: 1},
]
const menus = [
  {
    name: '服务文档',
    value: 1,
  },
  {
    name: '网站建设',
    value: 2,
  },
  {
    name: '网站优化',
    value: 3,
  },
  {
    name: 'IT基本知识',
    value: 4,
  },
]
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
    Pagination,
    RankList,
    SelfSelect,
  },
  data() {
    return {
      active: 1,
      bannerImg: bannerImg,
      infoList: [],
      hotInfoList: [],
      menus,
      pageSize: 3,
      currentPage: 1,
      total: 20,
      tags,
      searchText: '',
      select: 1,
      options: [
        { label: '网址建设', value: 1},
        { label: '移动互联', value: 2},
        { label: '网址运维', value: 3},
        { label: '影像创意与制作', value: 4},
      ]
    }
  },
  created() {
    // const query = this.$route.query
    // console.log('query', query)
    this.requestData({limit: this.pageSize})
    this.requestHotInfo()
  },
  methods: {
    handleSelectChange(value) {
      this.select = value
    },
    handleTabBarChange(value) {
      console.log(value)
      this.active = value
    },
    async requestData(params) {
      const res = await newsSearch(params)
      this.infoList = res.data
      this.pageSize = res.per_page
      this.currentPage = res.current_page
      this.total = res.total
    },
    async requestHotInfo() {
      const res = await newsHot()
      this.hotInfoList = res.data
    },

    changePage(page, pageSize) {
      // console.log('page, pageSize', page, pageSize)
      this.requestData({
        limit: pageSize,
        page: page,
      })
    },
    toDetail(id) {
      this.$router.push(`/information/detail?id=${id}`)
    }
  },

}
</script>

<style lang="less" scoped>

  .banner {
    height: 600px;
    color: @white;
    background-size: 100% 100%;
    background-repeat: no-repeat;
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

  // .tab-wrapper {
  //   z-index: 10;
  // }
  // .secondary-block {
  //   background: @white;
  //   position: relative;
  //   .tab-wrapper {
  //     position: absolute;
  //     top: -40px;
  //     left: 135px;
  //     right: 135px;
  //   }
  // }
  .third-block {
    background: #fff;
    position: relative;
    .wrapper {
      padding: 104px 135px;
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
        width: 755px;
        border-bottom: 1px solid #E5E5E5;
        cursor: pointer;
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
  .tag-wrapper {
    .tag-title {
      font-size: 24px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #03101F;
      line-height: 33px;
      padding-bottom: 20px;
      border-bottom: 1px solid #E5E5E5;
    }
    .tag-list {
      padding-top: 30px;
      max-width: 350px;
      .tag {
        cursor: pointer;
        float: left;
        padding: 8px 24px;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #A6AAB1;
        line-height: 20px;
        margin-right: 12px;
        margin-bottom: 16px;
        border-radius: 4px;
        border: 1px solid #E5E5E5;
        max-width: 186px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow:ellipsis;
        &:hover {
          background: #FF424C;
          border-color: #FF424C;
          color: #fff;
        }
      }
    }
    @media only screen and (max-width: 760px) {
      .tag-title {
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #03101F;
        line-height: 33px;
        padding-bottom: 20px;
        border-bottom: 1px solid #E5E5E5;
      }
      .tag-list {
        padding-top: 30px;
        max-width: 350px;
        .tag {
          cursor: pointer;
          float: left;
          padding: 8px 24px;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #A6AAB1;
          line-height: 20px;
          margin-right: 12px;
          margin-bottom: 16px;
          border-radius: 4px;
          border: 1px solid #E5E5E5;
          max-width: 186px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow:ellipsis;
          &:hover {
            background: #FF424C;
            border-color: #FF424C;
            color: #fff;
          }
        }
      }
    }
  }
  img {
    width: 100%;
    height: 100%;
  }

</style>
