<template>
<div class="self-modal" v-if="show">
  <div class="self-modal-mask">
  </div>
  <div class="self-modal-content">
    <div class="content">
      <div class="self-modal-header clearfix">
        <div class="title">
          <div>发现不同</div>
          <div>让每一个梦想脱颖而出</div>
        </div>
        <div class="close" @click="changeVisible">
          <img src="@/static/icon_x_dark.png" alt="">
        </div>
      </div>
      <div class="info">
        <div class="contact clearfix">
          <div class="phone">
            <div class="text">立即与项目经理通话</div>
            <div class="phone-number">151 6828 8480</div>
            <div class="text">您也可以在线咨询或预约资深顾问</div>
            <div class="input-wrapper clearfix">
              <b-form-input
                id="model-input"
                v-model="text"
                placeholder="请输入电话号码"
              ></b-form-input>
              <PillButton class="consulting">预约咨询</PillButton>
            </div>
          </div>
          <div class="qrcode">
            <img src="@/static/qrcode_dark.png" alt="">
            <p>扫一扫</p>
            <p>添加客服微信</p>
          </div>
        </div>
        <PillButton class="bottom-button">一对一线上咨询，24h回复</PillButton>
      </div>
    </div>
  </div>
</div>
</template>
<script lang="ts">
export default {
  name: 'Modal',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    visible(val) {
      this.show = val
    }
  },
  data () {
    return {
      text: '',
      show: this.visible
    }
  },
  methods: {
    changeVisible() {
      this.show = false
      this.$emit('visibleChange', false)
    }
  }
}
</script>
<style lang="less" scoped>
.self-modal {
  position: fixed;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  z-index: 9999;
  img {
    width: 100%;
    height: 100%;
  }
}
.self-modal-mask {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  background-color: fade(#1A2234,60);
  z-index: 9999;
}
.self-modal-content {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  height: 100vh;
  z-index: 9999;
  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 48px;
    width: 656px;
    height: 490px;
    background: #FFFFFF;
    border-radius: 12px;
    .title {
      float: left;
      font-size: 32px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #03101F;
      line-height: 42px;
    }
    .close {
      width: 24px;
      height: 24px;
    }
  }
  @media only screen and (max-width: 760px) {
    .content {
      padding: 24px;
      width: calc(100% - 32px);
      height: auto;
      background: #FFFFFF;
      border-radius: 12px;
      .title {
        float: left;
        font-size: 24px;
        line-height: 33px;
      }
      .close {
        width: 24px;
        height: 24px;
      }
    }
  }
}
.info {
  margin-top: 32px;
  @media only screen and (max-width: 760px) {
    margin-top: 30px;
  }
}
.contact {
  .qrcode {
    float: left;
    padding-right: 40px;
    border-right: 1px solid #E5E5E5;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #333333;
    line-height: 22px;
    text-align: center;
    p {
      margin-bottom: 0;
    }
    img {
      width: 120px;
      margin-bottom: 18px;
    }
  }
  .phone {
    padding-left: 0;
    float: right;
    .text {
      font-size: 16px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #474747;
      line-height: 32px;
    }
    .phone-number {
      font-size: 56px;
      font-family: DINCondensed-Bold;
      font-weight: 400;
      color: #1A82FF;
      line-height: 42px;
      margin-top: 12px;
    }
  }
  .input-wrapper {
    margin-top: 12px;
  }
  #model-input {
    vertical-align: middle;
    float: left;
    width: 230px;
    height: 48px;
    border-radius: 24px;
    border: 1px solid #E5E5E5;
    box-shadow: none !important;
    margin-right: 10px;
  }
  .consulting {
    padding: 14px 28px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 22px;
  }
  @media only screen and (max-width: 760px) {
    .qrcode {
      float: none;
      padding-right: 0;
      border-right: none;
      font-size: 16px;
      line-height: 22px;
      p {
        margin-bottom: 0;
      }
      img {
        width: 120px;
        margin-bottom: 18px;
      }
    }
    .phone {
      padding-left: 0;
      .text {
        font-size: 16px;
        line-height: 32px;
      }
      .phone-number {
        font-size: 56px;
        line-height: 42px;
        margin-top: 8px;
      }
    }
    .input-wrapper {
      margin-top: 12px;
      position: relative;
      margin-bottom: 32px;
    }
    #model-input {
      vertical-align: middle;
      float: left;
      width: 100%;
      height: 48px;
      border-radius: 24px;
      border: 1px solid #E5E5E5;
      box-shadow: none !important;
      margin-right: 10px;
      padding-right: 120px;
    }
    .consulting {
      padding: 14px 28px;
      font-size: 16px;
      line-height: 22px;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
}
.bottom-button {
  margin-top: 40px;
  width: 100%;
}
</style>
