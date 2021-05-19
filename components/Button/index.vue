<template>
  <button class="btn action-button" v-bind="$props" @click="() => this.$emit('click')">
    <span><slot></slot></span>
  </button>
</template>
<script lang="ts">
export default {
  name: 'Button',
}
</script>
<style lang="less" scoped>
.action-button {
  display: inline-block;
  border-radius: 24px;
  //border: 1px solid #3b8070;
  text-decoration: none;
  padding: 10px 30px;
  color: @fontColor;
  background: #fff;
  border: 1px solid #e5e5e5;
  &:not([disabled]):active {
    box-shadow: none;
  }
  &:active, &:focus, &:hover {
    outline: 0;
    border-color: @mainColor1 !important;
    color: @mainColor1 !important;
  }

  &.primary {
    color: @white;
    background: @mainColor;
    &:active, &:focus, &:hover {
      opacity: 0.9;
    }
  }
  &.secondary {
    color: @white;
    background: @mainColor1;
    &:active, &:focus, &:hover {
      opacity: 0.9;
    }
  }

  .icon {
    margin-right: 12px;
  }
}

</style>
