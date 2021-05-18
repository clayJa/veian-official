<template>
<div :class="`nav-divider ${type=== 'horizontal' ? 'nav-divider-horizontal' : 'nav-divider-vertical'}` " >
</div>
</template>
<script>
export default {
  name: 'Divider',
  props: {
    type: {
      type: String,
      default: 'horizontal'
    },
  },
}
</script>
<style lang="less" scoped>
@borderColor: #e5e5e5;
  .nav-divider{
    border-top: 1px solid @borderColor;
    box-sizing: border-box;
    color: rgba(0,0,0,.85);
    font-feature-settings: "tnum";
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    margin: 0;
    padding: 0;
    &.nav-divider-horizontal {
      clear: both;
      display: flex;
      margin: 24px 0;
      min-width: 100%;
      width: 100%;
    }
    &.nav-divider-vertical {
      border-left: 1px solid @borderColor;
      border-top: 0;
      display: inline-block;
      height: .9em;
      margin: 0 8px;
      position: relative;
      top: -.06em;
      vertical-align: middle;
    }
  }

</style>
