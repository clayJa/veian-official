<template>
  <div class="tab-bar-nav">
    <template class="tab-item" v-for="(item, i) in menus" >
      <a :class="`tab-text ${activePath === item.path ? 'active' : ''}`" :href="item.path"  >{{item.name}}</a>
      <Divider v-if="i !== menus.length - 1" class="divider" type="vertical" />
    </template>

  </div>

</template>

<script>
const Divider = () => import('@/components/Divider/index.vue');

// import {Vue, Component, Prop} from 'vue-property-decorator';
//
// @Component({
//   Divider
// } as any)
// export default class App extends Vue{
//   @Prop({
//     type: String,
//     default: ''
//   }) active!: string;
//   activePath: string = this.active;
//   menus: any[] = [
//     {
//       name: '我们是谁',
//       path: '/about/introduce',
//     },
//     {
//       name: '未苒文化',
//       path: '/about/culture',
//     },
//     {
//       name: '发展历程',
//       path: '/about/development',
//     },
//     {
//       name: '资质荣誉',
//       path: '/about/honour',
//     },
//     {
//       name: '未苒模样',
//       path: '/about/show',
//     },
//     {
//       name: '加入未苒',
//       path: '/about/join',
//     },
//   ];
//
// }
export default {
  name: 'TabBar',
  components: {
    Divider,
  },
  props: {
    active: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      activePath: this.active,
      menus: [
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
      ],
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
  .divider {
    margin: 0 24px;
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
