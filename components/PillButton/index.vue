<template>
<div class="pill-button" v-bind="$props" @click="() => this.$emit('click')">
  <slot></slot>
</div>
</template>
<script lang="ts">
export default {
  name: 'PillButton',
}
</script>
<style lang="less">
.pill-button {
  display: inline-flex;
  background: #1A82FF;
  border-radius: 24px;
  padding: 12px 48px;
  font-size: 18px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 25px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  text-align: center;
  vertical-align: middle;
  @media only screen and (max-width: 760px) {
    padding: 12px 48px;
    font-size: 18px;
    line-height: 25px;
    border-radius: 24px;
    white-space: nowrap;
  }

}
</style>
