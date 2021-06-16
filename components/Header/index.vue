<template>
  <div :class="['header-nav', scroll ? 'scroll' : 'static']">
    <div class="header  d-md-none">
      <div class="container header-wrapper">
        <div class="logo" @click="$router.push('/')"></div>
        <div class="nav-wrapper ml-auto">
          <div :class="['nav-item', {active: $nuxt.$route.path === item.sub_path || ($nuxt.$route.path.includes(item.sub_path) && item.sub_path !== '/')}]" v-for="item in menus" :key="item.id">
            <a @click.stop="toPath(item)">
              {{ item.title }}
              <i class="iconfont nav-icon" v-if="getChilds(item).length > 0" >&#xe629;</i>
            </a>
            <div class="sub-nav-wrapper" v-if="getChilds(item).length > 0" >
              <!-- <div :class="['sub-nav-item', {active: $nuxt.$route.path === subItem.sub_path || $nuxt.$route.path.includes(subItem.sub_path) }]" -->
              <div :class="['sub-nav-item']"
                v-for="subItem in getChilds(item)" :key="subItem.id">
                <a @click.stop="toPath(subItem)">{{subItem.title}}</a>
                <div class="third-nav-wrapper" v-if="getChilds(subItem).length > 0" >
                  <div :class="['sub-nav-item', {active: $nuxt.$route.path === thirdItem.sub_path }]"
                    v-for="thirdItem in getChilds(subItem)" :key="thirdItem.id">
                    <a @click.stop="toPath(thirdItem)">{{thirdItem.title}}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="search-wrapper">
            <div class="search-item">
              <i class="iconfont icon" @click="showSearch">&#xe63a;</i>
            </div>
            <i class="iconfont icon">&#xe63b;</i>
        </div>
      </div>
      <div class="search-alert" v-if="modalShow">
        <span class="close" @click="modalShow = false"></span>
        <div class="center-form">
          <b-form-input
            id="input-search"
            v-model="text"
            @keyup.enter="handleEnter"
          ></b-form-input>
        </div>
      </div>
    </div>
    <div class="mobile-header d-none d-md-block clearfix">
      <div class="logo" @click="$router.push('/')"></div>
      <div class="menu" @click="showMobileMenu = true"></div>
    </div>
    <div class="d-none d-md-block mobile-menu" v-if="showMobileMenu">
      <div class="top">
        <div class="search clearfix">
          <i class="iconfont icon-search">&#xe63a;</i>
          <b-form-input
            id="input"
            v-model="text"
            @keyup.enter="handleEnter"
          ></b-form-input>
          <div class="button">搜索</div>
        </div>
        <div class="close-icon" @click="showMobileMenu = false"></div>
      </div>
      <div class="mobile-nav-wrapper">
        <div
          @click="changeActivePath(item)"
          :class="['mobile-nav-item', {active: activePath === item.sub_path || $nuxt.$route.path === item.sub_path || ($nuxt.$route.path.includes(item.sub_path) && item.sub_path !== '/')}]"
          v-for="item in menus" :key="item.id">
          <a class="clearfix"  @click.stop="changeActivePath(item)">
            {{ item.title }}
            <i class="iconfont mobile-nav-icon" v-if="getChilds(item).length > 0" >&#xe629;</i>
          </a>
          <div :class="['mobile-sub-nav-wrapper']"
            v-if="getChilds(item).length > 0" >
            <div :class="['mobile-sub-nav-item',  {active: $nuxt.$route.path === subItem.sub_path || $nuxt.$route.path.includes(subItem.sub_path) }]"
              v-for="subItem in getChilds(item)" :key="subItem.id">
              <a @click.stop="toPath(subItem)">{{subItem.title}}</a>
              <div class="mobile-third-nav-wrapper" v-if="getChilds(subItem).length > 0" >
                <div :class="['mobile-sub-nav-item', {active: $nuxt.$route.path === thirdItem.sub_path }]"
                  v-for="thirdItem in getChilds(subItem)" :key="thirdItem.id">
                  <a @click.stop="toPath(thirdItem)">{{thirdItem.title}}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { getMenu } from '@/service/public';
interface Data {
  text: string,
  visible: boolean,
  menu: any[],
}
export default {
  data () {
    return {
      text: '',
      visible: false,
      modalShow: false,
      showMobileMenu: false,
      activePath: '',
      scroll: false,
      // menu: [
      //   { name: '首页', path: '/' },
      //   { name: '简单', path: '/uncomplicated' },
      //   { name: '信任', path: '/confidence',
      //     subMenu: [
      //       { name: '创意', path: '/confidence/creativity',
      //         subMenu: [
      //           { name: '创意交互设计', path: '/confidence/creativity/cyjhsj' },
      //           { name: '视频数字化应用', path: '/confidence/creativity/spszhyy' },
      //           { name: '视觉识别系统 (VI)', path: '/confidence/creativity/sjsbxt' },
      //           { name: '全景虚拟现实 (VR)', path: '/confidence/creativity/qjxnxs' },
      //           { name: '年度设计服务', path: '/confidence/creativity/ndsjfw' },
      //         ]
      //       },
      //       { name: '开发', path: '/confidence/develop',
      //         subMenu: [
      //           { name: '高端网站定制', path: '/confidence/develop/gdwzdz' },
      //           { name: '小程序定制开发', path: '/confidence/develop/xcxdzkf' },
      //           { name: 'APP定制开发', path: '/confidence/develop/appdzkf' },
      //           { name: 'H5定制开发', path: '/confidence/develop/h5dzkf' },
      //           { name: '电商定制开发', path: '/confidence/develop/dsdzkf' },
      //           { name: '业务系统定制开发', path: '/confidence/develop/ywxtdz' },
      //         ]
      //       },
      //       { name: '营销', path: '/confidence/marketing',
      //         subMenu: [
      //           { name: 'SEO&SEM', path: '/confidence/marketing/seo' },
      //           { name: '新媒体营销', path: '/confidence/marketing/xmtyx' },
      //           { name: '海外推广', path: '/confidence/marketing/hwtg' },
      //         ]
      //       },
      //       { name: '运营', path: '/confidence/operation',
      //         subMenu: [
      //           { name: '电商代运营', path: '/confidence/operation/dsdyy' },
      //           { name: '网站代运营', path: '/confidence/operation/wzdyy' },
      //           { name: '新媒体代运营', path: '/confidence/operation/xmtdyy' },
      //         ]
      //       },
      //     ]
      //   },
      //   { name: '快乐', path: '/information',
      //     subMenu: [
      //       { name: '未苒资讯', path: '/information/news' },
      //       { name: '帮助中心', path: '/information/help' },
      //     ]
      //   },
      //   { name: '我们', path: '/about/introduce' },
      //   { name: '联系', path: '/contact' },
      // ]
    }
  },
  computed: {
    menus() {
      return this.$store.getters['getMenus']
    }
  },
  methods: {
    showSearch() {
      this.modalShow = true
      this.text = ''
    },
    handleEnter() {
      localStorage.setItem('searchText',this.text)
      this.modalShow = false
      this.text = ''
      this.$router.push('/search')
    },
    changeActivePath(item) {
      if (this.getChilds(item).length === 0){
        this.$router.push(item.sub_path)
        this.showMobileMenu = false
        localStorage.setItem('currentPageId',item.id)
        return
      }
      if(this.getChilds(item).length > 0 && this.activePath === item.sub_path) {
        console.log(this.activePath,item.sub_path)
        this.activePath = ''
      } else {
        this.activePath = item && item.sub_path
        localStorage.setItem('currentPageId',item.id)
      }
    },
    computePath(item) {
      if(this.getChilds(item).length === 0) {
        localStorage.setItem('currentPageId',item.id)
        return item.sub_path
      } else if(this.getChilds(item).length > 0) {
        if(item.sub_path === '/confidence') {
          localStorage.setItem('currentPageId',item.id)
          return item.sub_path
        }
        localStorage.setItem('currentPageId',this.getChilds(item)[0].id)
        return this.getChilds(item)[0].sub_path
      }
    },
    getChilds(item) {
      if(item.children_menu && item.children_menu.length > 0) {
        return item.children_menu
      } else if(item.sub_menu && item.sub_menu.length > 0) {
        return item.sub_menu
      }
      return []
    },
    getScrollStatus() {
      const doc = document.documentElement
      const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
      if (top > 60) {
        this.scroll = true
      } else if (top < 60) {
        this.scroll = false
      }
    },
    toPath(item) {
      const path = this.computePath(item)
      this.$router.push(path)
    },
    async getMenuData () {
      const res = await getMenu({parent_id: 0})
      this.$store.commit('setMenus',res.data)
      // console.log(res,11111,this.menus)
    }
  },
  mounted() {
    console.log(this.$nuxt.$route.path)
    console.log(this.menus,'menus')
     window.addEventListener('scroll', this.getScrollStatus)
     this.getMenuData()
  },
  components: {
  }
}
</script>
<style lang="less" scoped>
.logo {
  cursor: pointer;
  width: 175px;
  height: 54px;
  background-image: url('~/assets/images/logo.png');
  background-size: 100% 100%;
  @media only screen and (max-width: 760px) {
    background-image: url('~/assets/images/logo_white.png');
    width: 175px;
    height: 54px;
  }
  img {
    width: 100%;
  }
}
a {
  color: #474747;
  text-decoration: none !important;
  &:hover {
    text-decoration: none;
    color:#1A82FF;
  }
}
@headerHeight: 100px;
.header-nav {
  position: relative;
  height: @headerHeight;
  @media only screen and (max-width: 760px) {
      &.scroll {
        background-color: #1A82FF;
        .mobile-header .logo {
          background-image: url('~/assets/images/logo_white.png') !important;
        }
        .mobile-header .menu {
          background-image: url('~/assets/images/menu_icon.png') !important;
        }
      }
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 86px;
      z-index: 200;
      .logo {
        margin-left: 16px;
        margin-top: 16px;
        margin-bottom: 16px;
        float: left;
      }
      .menu {
        float: right;
        width: 48px;
        height: 48px;
        margin-top: 16px;
        margin-right: 16px;
        background-image: url('~/assets/images/menu_icon.png');
        background-size: 100% 100%;
      }
  }
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
  z-index: 100;
}
.header-wrapper {
  display: flex;
  align-items: center;
  height: @headerHeight;
}
.nav-wrapper {
  display: flex;
  height: 100%;
  align-items: center;
  .nav-item {
    position: relative;
    white-space: nowrap;

    .sub-nav-wrapper {
      position: absolute;
      display: none;
      z-index: 100;
      border: 1px solid #E5E5E5;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 500;
      background: #fff;
      .sub-nav-item {
        min-width: 158px;
        height: 43px;
        line-height: 43px;
        padding: 0 32px;
        font-weight: 500;
        background: #fff;
        a {
          color: #474747;
        }
        &:hover,&.active {
          background: #F7F7F7;
          > a {
            color: #1A82FF;
          }
          .third-nav-wrapper {
            display: block;
            // background-color: #fff;
          }
        }
      }
    }
    .third-nav-wrapper {
      position: absolute;
      display: none;
      left: 158px;
      top: 0;
      border: 1px solid #E5E5E5;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 500;
      min-height: 100%;
      border-bottom: none;
      border-right: none;
      // background: #fff;
      z-index: 200;
      &:hover,&.active {
        // background: #F7F7F7;
        > a {
          color: #1A82FF;
        }
      }
    }
  }
}
.nav-item {
  display: inline-block;
  font-size: 16px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 500;
  padding: 0 24px;
  height: @headerHeight;
  line-height: @headerHeight;
  color: #474747;
  &.active > a {
    color: #1A82FF;
  }
  .nav-icon {
    display: inline-block;
    transform: rotate(-180deg) scale(0.5);
    color: fade(#474747,80);
  }
  &:hover {
    .nav-icon {
      transform: rotate(-0deg) scale(0.5);
      color: #1A82FF;
    }
    > a {
      color: #1A82FF;
    }
    .sub-nav-wrapper {
      display: block;
    }
  }
}
.search-wrapper {
  display: flex;
  align-items: center;
}
.search-wrapper .icon {
  color: #A6AAB1;
  cursor: pointer;
  &:last-child {
    margin-left: 24px;
  }
}
.search-item {
  display: inline-flex;
  align-items: center;
  input {
    border-radius: 0;
    border: none;
    border-bottom: 1px solid #E5E5E5;
    visibility: hidden;
    box-shadow: none;
    &:focus {
      box-shadow: none;
    }
  }
}
.search-alert {
  position: fixed;
  z-index: 1000;
  background-color: #1A82FF;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  .close {
    position: absolute;
    top: 38px;
    right: 2.6%;
    display: block;
    width: 24px;
    height: 24px;
    background: url('~/assets/images/icon_x_white.png') no-repeat center;
    cursor: pointer;
  }
  .center-form {
    position: absolute;
    width: 94.8%;
    left: 2.6%;
    top: 50%;
    height: 124px;
    margin-top: -63px;
    border-bottom: 1px solid #fff;
    input {
      border: none;
      font-size: 66px;
      height: 124px;
      line-height: 124px;
      text-align: center;
      width: 100%;
      box-sizing: border-box;
      color: #fff;
      font-family: "Base-font";
      padding-left: 88px;
      padding-right: 80px;
      background: url('~/assets/images/icon_search_white.png') no-repeat 44px 44px;
      box-shadow: none;
    }
  }
}
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  z-index: 999;
  .close-icon {
    position: absolute;
    top: 32px;
    right: 32px;
    width: 14px;
    height: 14px;
    background-image: url('@/assets/images/close.png');
    background-size: 100% 100%;
  }
  .top {
    background: #1A82FF;
    padding: 74px 32px 20px 32px;
    position: relative;
    .search {
      background: #F7F7F7;
      border-radius: 24px;
      padding: 10px;
      position: relative;
      input {
        width: calc(100% - 86px);
        border: none;
        box-shadow: none;
        border-radius: 24px;
        display: inline-block;
        vertical-align: middle;
        background: transparent;
        padding-left: 36px;
      }
      .icon-search {
        position: absolute;
        left: 18px;
        top: 13px;
        color: #D8D8D8;
        font-size: 22px;
      }
      .button {
        vertical-align: middle;
        display: inline-block;
        width: 76px;
        height: 27px;
        background: #1A82FF;
        border-radius: 14px;
        line-height: 27px;
        font-size: 12px;
        font-family: PingFangSC-Light, PingFang SC;
        font-weight: 300;
        color: #FFFFFF;
        text-align: center;
      }
    }
  }
  .mobile-nav-wrapper {
    .mobile-nav-item {
      width: 100%;
      padding-top: 30px;
      padding-bottom: 20px;
      padding-left: 32px;
      background: #1E3850;
      font-size: 24px;
      border-bottom: 1px solid #fff;
      &:last-child {
        border-bottom: none;
      }
      > a {
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        line-height: 33px;
      }
      &.active {
        .mobile-nav-icon {
          transform: rotate(0deg) scale(0.5);
        }
        .mobile-sub-nav-wrapper {
          display: block !important;
        }
      }
    }
    .mobile-nav-icon {
      float: right;
      margin-right: 32px;
      transform: rotate(-180deg) scale(0.5);
    }

    .mobile-sub-nav-wrapper {
      padding-top: 12px;
      padding-bottom: 12px;
      display: none;
      .mobile-sub-nav-item {
        font-size: 18px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        line-height: 25px;
        a > {
          color: #FFFFFF;
        }
        &.active a {
          color: #1A82FF;
        }
      }
      .mobile-third-nav-wrapper {
        padding-bottom: 20px;
        .mobile-sub-nav-item{
          font-size: 14px;
          font-family: PingFangSC-Light, PingFang SC;
          font-weight: 300;
          line-height: 20px;
          padding-left: 14px;
          padding-top: 10px;
          > a {
            color: #FFFFFF;
          }
          &.active a {
            color: #1A82FF;
          }
        }
      }
    }
  }
}
</style>
