<template>
<div>
  <div class="container header-wrapper">
    <div class="logo">
      <img src="@/assets/images/logo.png" alt="logo">
    </div>
    <div class="nav-wrapper ml-auto mr-auto">
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
    <div class="search-wrapper ml-auto">
        <div class="search-item">
          <b-form-input
            id="input-search"
            v-model="text"
            placeholder="客户案例"
            :style="{ visibility: visible ? 'visible' : 'hidden'}"
          ></b-form-input>
          <InlineSvg :src="require('@/assets/images/icon_search.svg')" class="icon" @click="showSearch"/>
        </div>
        <InlineSvg :src="require('@/assets/images/icon_phone.svg')" class="icon" />
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
      if(!this.visible) {
        this.visible = true
      } else {
        console.log('search',this.text)
      }
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
  img {
    width: 100%;
  }
}
a {
  color: #474747;
  &:hover {
    text-decoration: none;
    color:#1A82FF;
  }
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
    &:focus {
      box-shadow: none;
    }
  }
}
</style>
