<template>
  <div>
    <Header />
    <div>
      <div class="banner" :style="{background: `url('${bannerImg}') no-repeat center/100%`}">
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
                <div class="list-item" v-for="item in infoList" :key="item.id">
                  <div class="item-title-wrapper clearfix">
                    <div class="item-title">{{item.title}}</div>
                    <PillButton class="action-button">查看</PillButton>
                  </div>
                  <div class="item-content">{{item.content}}</div>
                </div>
                <!-- <div class="pagination-nav">
                  <Pagination
                      :pageSize="pageSize"
                      :total="total"
                      @onchange="changePage"
                  />
                </div> -->
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
    const query = this.$route.query
    console.log('query', query)
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
    requestData(params) {
      const {limit = 15, page = 1} = params
      const arr = []
      for (let i = 0; i < limit; i++) {
        arr.push({})
      }

      this.infoList = [
        {
          title: '浙江广播电台 FM 104.5《浙商读书会》司…',
          updateAt: '2020.09.17',
          content: '近日，我们鼎易科技的创始人刘总受邀参加了浙江广播电台FM104.5的《浙商读书会》访谈节目。《浙商读书会》是浙江广播电台推出的一档读书推荐交流类节目，邀请浙江',

        },
        {
          title: '浙江广播电台 FM 104.5《浙商读书会》司…',
          updateAt: '2021.04.14',
          content: '在目前经济受创的市场大环境下可以说各大行业市场都处于发展停滞阶段，想要突出重围就必须要有所“创新”不可在走老路，而“知识付费”即处于创新领域，又算是内容变现的',
        },
        {
          title: '大数据环境下，网站建设更需创新学习能力',
          updateAt: '2021.03.25',
          content: '在创新时代，网站建设的到底有什么实际的意义呢？我们能够切实的体会到网站在日常生活中起着不可替代的作用，更切实际的来讲，整个社会也已经离不开网络了。网站其实',
        },
      ]
    },
    requestHotInfo() {
      const arr = []
      for (let i = 0; i < 10; i++) {
        arr.push({})
      }

      this.hotInfoList = dataList
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
  }
  .pagination-nav {
    text-align: right;
    margin-top: 40px;
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
  }
  img {
    width: 100%;
    height: 100%;
  }

</style>
