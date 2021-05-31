<template>
  <div class="header-nav">
    <div class="header">
      <div class="container header-wrapper">
        <div class="logo" @click="$router.push('/')"></div>
        <div class="nav-wrapper ml-auto">
          <div :class="['nav-item', {active: $nuxt.$route.path === item.path || ($nuxt.$route.path.includes(item.path) && item.path !== '/')}]" v-for="item in menu" :key="item.name">
            <a :href="item.path">
              {{ item.name }}
               <InlineSvg
                  v-if="item.subMenu && item.subMenu.length > 0"
                  :src="require('@/assets/images/icon_triangle.svg')" class="nav-icon" />
            </a>
            <div class="sub-nav-wrapper" v-if="item.subMenu && item.subMenu.length > 0" >
              <div :class="['sub-nav-item', {active: $nuxt.$route.path === subItem.path || $nuxt.$route.path.includes(subItem.path) }]"
                v-for="subItem in item.subMenu" :key="subItem.name">
                <a :href="computePath(subItem)">{{subItem.name}}</a>
                <div class="third-nav-wrapper" v-if="subItem.subMenu && subItem.subMenu.length > 0" >
                  <div :class="['sub-nav-item', {active: $nuxt.$route.path === thirdItem.path }]"
                    v-for="thirdItem in subItem.subMenu" :key="thirdItem.name">
                    <a :href="thirdItem.path">{{thirdItem.name}}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="search-wrapper">
            <div class="search-item">
              <InlineSvg :src="require('@/assets/images/icon_search.svg')" class="icon" @click="showSearch"/>
            </div>
            <InlineSvg :src="require('@/assets/images/icon_phone.svg')" class="icon" />
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
  </div>
</template>
<script lang="ts">
import { computeLayout } from '@/static/js/flexibility';
import InlineSvg from 'vue-inline-svg';
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
      menu: [
        { name: '首页', path: '/' },
        { name: '简单', path: '/uncomplicated' },
        { name: '信任', path: '/confidence',
          subMenu: [
            { name: '创意', path: '/confidence/creativity',
              subMenu: [
                { name: '创意交互设计', path: '/confidence/creativity/cyjhsj' },
                { name: '视频数字化应用', path: '/confidence/creativity/spszhyy' },
                { name: '视觉识别系统 (VI)', path: '/confidence/creativity/sjsbxt' },
                { name: '全景虚拟现实 (VR)', path: '/confidence/creativity/qjxnxs' },
                { name: '年度设计服务', path: '/confidence/creativity/ndsjfw' },
              ]
            },
            { name: '开发', path: '/confidence/develop',
              subMenu: [
                { name: '高端网站定制', path: '/confidence/develop/gdwzdz' },
                { name: '小程序定制开发', path: '/confidence/develop/xcxdzkf' },
                { name: 'APP定制开发', path: '/confidence/develop/appdzkf' },
                { name: 'H5定制开发', path: '/confidence/develop/h5dzkf' },
                { name: '电商定制开发', path: '/confidence/develop/dsdzkf' },
                { name: '业务系统定制开发', path: '/confidence/develop/ywxtdz' },
              ]
            },
            { name: '营销', path: '/confidence/marketing',
              subMenu: [
                { name: 'SEO&SEM', path: '/confidence/marketing/seo' },
                { name: '新媒体营销', path: '/confidence/marketing/xmtyx' },
                { name: '海外营销', path: '/confidence/marketing/hwyx' },
              ]
            },
            { name: '运营', path: '/confidence/operation',
              subMenu: [
                { name: '电商代运营', path: '/confidence/operation/dsdyy' },
                { name: '网站代运营', path: '/confidence/operation/wzdyy' },
                { name: '新媒体代运营', path: '/confidence/operation/xmtdyy' },
              ]
            },
          ]
        },
        { name: '快乐', path: '/information',
          subMenu: [
            { name: '未苒资讯', path: '/information' },
            { name: '帮助中心', path: '/information/help' },
          ]
        },
        { name: '我们', path: '/about/introduce' },
        { name: '联系', path: '/contact' },
      ]
    }
  },
  methods: {
    showSearch() {
      this.modalShow = true
      this.text = ''
    },
    handleEnter() {
      this.$router.push('/search')
    },
    computePath(item) {
      if(item.subMenu && item.subMenu.length > 0) {
        return item.subMenu[0].path
      } else {
        return item.path
      }
    }
  },
  mounted() {
    console.log(this.$nuxt.$route.path)
  },
  components: {
    InlineSvg,
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
        width: 158px;
        height: 43px;
        line-height: 43px;
        text-indent: 32px;
        font-weight: 500;
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
      background: #fff;
      z-index: 200;
      &:hover,&.active {
        background: #F7F7F7;
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
  &:hover {
    .nav-icon {
      transform: rotate(-180deg);
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
</style>
