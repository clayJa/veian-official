<template>
<div class="footer-wrapper">
  <div class="container footer-container">
    <div class="company">
      <div class="logo"><img src="@/assets/images/footer_logo.png" alt=""></div>
      <div class="text">简单、信任、快乐</div>
      <div class="text">周经理  151 6828 8480</div>
      <div class="text">service@veianweb.com</div>
      <div class="social">
        <span class="icon-wrapper">
          <i class="iconfont icon">&#xe620;</i>
          <img src="@/assets/images/qrcode.png" alt="">
        </span>
        <span class="icon-wrapper">
           <i class="iconfont icon">&#xe61f;</i>
        </span>
      </div>
    </div>
    <div class="content">
      <div class="content-item ml-auto">
        <div class="content-title">简单</div>
        <div class="items-wrapper">
          <div class="item">创意案例</div>
          <div class="item">开发案例</div>
          <div class="item">营销案例</div>
          <div class="item">运营案例</div>
        </div>
      </div>
      <div class="content-item ml-auto">
        <div class="content-title">信任</div>
        <div class="items-wrapper">
          <div class="item">创意</div>
          <div class="item">开发</div>
          <div class="item">营销</div>
          <div class="item">运营</div>
        </div>
      </div>
      <div class="content-item ml-auto">
        <div class="content-title">快乐</div>
        <div class="items-wrapper">
          <div class="item">未苒资讯</div>
          <div class="item">帮助中心</div>
        </div>
      </div>
      <div class="content-item ml-auto">
        <div class="content-title">我们</div>
        <div class="items-wrapper">
          <div class="item">我们是谁</div>
          <div class="item">未苒文化</div>
          <div class="item">发展历程</div>
          <div class="item">资质荣誉</div>
          <div class="item">未苒模样</div>
          <div class="item">加入未苒</div>
        </div>
      </div>
    </div>
  </div>
  <div class="container info">
    <div class="copyright mr-auto">
      Copyright © 2021 WeiRan Technology. All Rights Reserved.
    </div>
    <div class="policy e">
      <span>Terms of Conditions</span>
      <span style="cursor: pointer;">Privacy Policy</span>
    </div>
  </div>
</div>
</template>
<script lang="ts">
export default {
  components: {
  }
}
</script>
<style lang="less" scoped>
.footer-wrapper {
  position: relative;
  background: #1E3850;
  color: white;
  height: 550px;
  padding-top: 108px;
  .footer-container {
    display: flex;
    .company,.content {
      flex: 1 0 50%;
    }
  }
  .company .logo {
    width: 143px;
    margin-bottom: 24px;
    img {
      width: 100%;
    }
  }
  .company .text {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    opacity: 0.5;
    line-height: 32px
  }
  .social {
    margin-top: 24px;
    .icon-wrapper {
      cursor: pointer;
      position: relative;
      opacity: 0.2;
      .icon {
        font-size: 30px;
      }
      &:not(:last-child) {
        margin-right: 24px;
      }
      &:hover {
        opacity: 1;
        img {
          display: inline-block;
        }
      }
      img {
        width: 100px;
        height: 100px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 200%;
        display: none;
      }
    }
  }
  .content {
    display: flex;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 32px;
    .content-title {
      font-size: 18px;
      margin-bottom: 1em;
    }
    .items-wrapper {
      .item {
        cursor: pointer;
        font-size: 16px;
        opacity: 0.5;
        &:hover {
          opacity: 1;
        }
      }
    }
  }
  .info {
    position: absolute;
    width: 100%;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 122px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.5);
    line-height: 32px;
    display: flex;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.09);
    @media (min-width: 768px) {
      width: 750px;
    }
    @media (min-width: 992px) {
      width: 970px;
    }
    @media (min-width: 1200px) {
      width: 1170px;
    }
    .policy {
      color: #fff;
      cursor: default;
      span:not(:last-child) {
        display: inline-block;
        margin-right: 2em;
      }
    }
  }
}
</style>
