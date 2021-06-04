<template>
  <div class="discover-wrapper clearfix">
    <div class="discover">
      <img src="@/static/trust/creativity/discover_image.jpg" alt="">
      <div class="text-wrapper">
        <div class="text">
          <div class="title">发现不同</div>
          <div class="info">让每一个梦想脱颖而出</div>
          <div class="button">更多发现，由你开启</div>
        </div>
      </div>
    </div>
    <div class="join">
       <img src="@/static/trust/creativity/join_image.jpg" alt="">
      <div class="text-wrapper">
       <div class="text">
        <div class="title">用户 最亲密的朋友</div>
        <div class="info">下一个故事·由你讲述</div>
        <div class="button">详细了解</div>
       </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
    }
  },
  methods: {
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
.discover-wrapper {
  img {
    width: 100%;
    height: 100%;
  }
  .discover,.join {
    width: 50%;
    position: relative;
    float: left;
  }
  .text-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: #FFFFFF;
    background: fade(#192030,60);
    &:hover {
      background: fade(#1A82FF,80);
      transition: all 1s;
    }
    .text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        text-align: center;
    }
    .title {
      font-size: 56px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 78px;
      white-space: nowrap;
    }
    .info {
      font-size: 20px;
      white-space: nowrap;
    }
    .button {
      display: inline-block;
      padding: 16px 32px;
      border-radius: 28px;
      border: 1px solid #FFFFFF;
      cursor: pointer;
      font-size: 18px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 25px;
      margin-top: 48px;
      min-width: 226px;
      text-align: center;
    }
  }
  @media only screen and (max-width: 760px) {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .discover,.join {
      width: 100%;
      height: 448px;
      float: none;
    }
    .text-wrapper {
      .title {
        font-size: 40px;
        line-height: 56px;
      }
      .info {
        font-size: 20px;
      }
      .button {
        white-space: nowrap;
        padding: 16px 32px;
        border-radius: 28px;
        border: 1px solid #FFFFFF;
        font-size: 18px;
        line-height: 25px;
        margin-top: 48px;
        min-width: 226px;
      }
    }
  }
}
</style>
