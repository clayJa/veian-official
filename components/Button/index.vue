<template>
  <button class="btn action-button primary" v-bind="$props" @click="() => this.$emit('click')">
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
  &.primary {
    color: @white;
    background: @mainColor;
  }
  &.secondary {
    color: @white;
    background: @mainColor1;
  }

  .icon {
    margin-right: 12px;
  }
}

</style>
