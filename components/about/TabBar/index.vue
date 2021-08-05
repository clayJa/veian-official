<template>
  <div class="tab-bar-nav">
    <div class="tab-item" v-for="(item, i) in menus" :key="i">
      <a :class="`tab-text ${activePath === item.path ? 'active' : ''}`" :href="item.path" :key="item.name"  >{{item.name}}</a>
      <Divider v-if="i !== menus.length - 1" class="divider" type="vertical" :key="i" />
    </div>

  </div>

</template>

<script>
import Divider from '@/components/Divider'

export default {
  name: 'TabBar',
  components: {
    Divider,
  },
  props: {
    active: {
      type: String,
      default: ''
    },
    menus: {
      type: Array,
      default() {
        return [
          {
            name: '我们是谁',
            path: '/about/introduce',
          },
          {
            name: '未苒文化',
            path: '/about/culture',
          },
          {
            name: '发展历程',
            path: '/about/development',
          },
          {
            name: '资质荣誉',
            path: '/about/honour',
          },
          {
            name: '未苒模样',
            path: '/about/show',
          },
          {
            name: '加入未苒',
            path: '/about/join',
          },
        ]
      }
    }
  },
  data() {
    return {
      activePath: this.active,
    }
  },

}
</script>

<style lang="less" scoped>
.tab-bar-nav {

  height: 80px;
  line-height: 80px;
  text-align: center;
  padding: 0 16px;
  background: #FFFFFF;
  box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  white-space: nowrap;
  .divider {
    margin: 0 12px;
  }
  .tab-text {
    padding: 10px 12px;
  }
  .tab-item {
    display: inline-block;
  }
  @media only screen and (max-width: 760px) {
    height: 80px;
    line-height: 80px;
    text-align: center;
    padding: 0 16px;
    background: #FFFFFF;
    box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    overflow: scroll;
    .divider {
      margin: 0 12px;
    }
    .tab-text {
      padding: 10px 12px;
    }
}
}
a {
  background-color: transparent;

  cursor: pointer;
  outline: none;
  text-decoration: none;
  -webkit-text-decoration-skip: objects;
  transition: color .3s;
  color: @fontColor2;

  &:hover {
    color: @mainColor;
  }
  &.active {
    color: @mainColor;
  }

}


</style>
