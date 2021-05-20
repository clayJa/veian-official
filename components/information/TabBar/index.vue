<template>
  <div class="tab-bar-nav">
    <template class="tab-item" v-for="(item, i) in menus" >
      <a :class="`tab-text ${activeItem === item.value ? 'active' : ''}`" :key="item.name" @click="handleClick(item.value)">{{item.name}}</a>
      <Divider v-if="i !== menus.length - 1" class="divider" type="vertical" :key="i" />
    </template>

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
      type: String | Number,
      default: ''
    },
    menus: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      activeItem: this.active,
    }
  },
  methods: {
    handleClick(value) {
      this.activeItem = value
      this.$emit('onChange',value)
    }
  }
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
    margin: 0 12px;
  }
  .tab-text {
    padding: 10px 12px;
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
