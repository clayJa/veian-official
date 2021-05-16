<template>
<div class="header">
  <div class="container header-wrapper">
    <div class="logo"></div>
    <div class="nav-wrapper ml-auto">
      <div class="nav-item" v-for="item in menu" :key="item.name">
        <a href="#">
          {{ item.name }}
           <InlineSvg
              v-if="item.subMenu && item.subMenu.length > 0"
              :src="require('@/assets/images/icon_triangle.svg')" class="nav-icon" />
        </a>
        <div class="sub-nav-wrapper" v-if="item.subMenu && item.subMenu.length > 0" >
          <div class="sub-nav-item">
            <a href="#">创意</a>
          </div>
          <div class="sub-nav-item">
            <a href="#">开发</a>
          </div>
          <div class="sub-nav-item">
            <a href="#">营销</a>
          </div>
          <div class="sub-nav-item">
            <a href="#">运营</a>
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
      ></b-form-input>
    </div>
  </div>
</div>
</template>
<script lang="ts">
import InlineSvg from 'vue-inline-svg';
export default {
  data () {
    return {
      text: '',
      visible: false,
      modalShow: false,
      menu: [
        { name: '首页', path: '#' },
        { name: '简单', path: '#' },
        { name: '信任', path: '#',
          subMenu: [
            { name: '创意', path: '#' },
            { name: '开发', path: '#' },
            { name: '营销', path: '#' },
            { name: '运营', path: '#' },
          ]
        },
        { name: '快乐', path: '#',
          subMenu: [
            { name: '创意交互设计', path: '#' },
            { name: '视频数字化应用', path: '#' },
            { name: '视觉识别系统 (VI)', path: '#' },
            { name: '全景虚拟现实 (VR)', path: '#' },
            { name: '年度设计服务', path: '#' },
          ]
        },
        { name: '我们', path: '#' },
        { name: '联系', path: '#' },
      ]
    }
  },
  methods: {
    showSearch() {
      this.modalShow = true
      this.text = ''
    }
  },
  components: {
    InlineSvg,
  }
}
</script>
<style lang="less" scoped>
.logo {
  width: 175px;
  height: 54px;
  background-image: url('@/assets/images/logo.png');
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
.header {
  position: fixed;
  background: #fff;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
.header-wrapper {
  display: flex;
  align-items: center;
  height: 100px;
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
        &:hover {
          background: #F7F7F7;
          a {
            color: #1A82FF;
          }
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
  height: 100px;
  line-height: 100px;
  color: #474747;
  &:hover {
    .nav-icon {
      transform: rotate(-180deg);
      color: #1A82FF;
    }
    a {
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
  z-index: 100;
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
    background: url('@/assets/images/icon_x_white.png') no-repeat center;
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
      background: none;
      font-family: "Base-font";
      padding-left: 88px;
      padding-right: 80px;
      background: url('@/assets/images/icon_search_white.png') no-repeat 44px 44px;
      box-shadow: none;
    }
  }
}
</style>
