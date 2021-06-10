<template>
  <div class="project-step">
    <img src="@/static/trust/creativity/project_step_background.jpg" alt="">
    <div class="wrapper container d-md-none">
      <div class="item" v-for="(item,i) in list" :key="item.title">
        <div class="step">step</div>
        <div class="title">
          <span>{{ item.title }}</span>
          <span class="line">
            <div class="line-active"
              :style="{
                animation: activeIndex === i ? `moveLine 2s linear` : '',
              }"
              @animationend.stop="handleAnimationEnd(i)"
            ></div>
          </span>
        </div>
        <div class="content">
          <div class="content-item" v-for="content in item.contents" :key="content">
            {{ content }}
          </div>
        </div>
      </div>
    </div>
    <div class="mobile-wrapper d-none d-md-block">
       <div class="my-swiper" v-swiper:mySwiper="swiperOption">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in list" :key="item.title">
              <div class="mobile-item">
                <div class="mobile-step">step</div>
                <div class="mobile-title">{{ item.title }}</div>
                <div class="mobile-content">
                  <div class="mobile-content-item" v-for="content in item.contents" :key="content">
                    {{ content }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
       </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      list: [
        { title: '研究', contents: ['用品研究','竞品分析','用户角色'], },
        { title: '概念DEMO', contents: ['DEMO评审'] },
        { title: '产品立项', contents: ['产品定义', '需求文档', '需求评审','立项会议', '排期'] },
        { title: '交互设计', contents: ['竞品分析','低保真交互','可用性测试','交互评审','高保真交互'] },
        { title: '视觉设计', contents: ['竞品分析','视觉设计','视觉评审'] },
        { title: '前端/后台开发', contents: ['开发编程'] },
        { title: '测试走查', contents: ['功能Bug测试','交互走查','视觉走查','产品走查','可用性测试'] },
        { title: '上线', contents: ['产品运营','用户反馈收集','用户流量统计'] },
      ],
      activeIndex: 0,
      swiperOption: {
        loop: false,
        // autoplay: 1000,
        spaceBetween: 24,
        slidesPerView: 2.4,
        paginationClickable :true,
        preventClicks: false,
        pagination: '.swiper-pagination',
      },
    }
  },
  methods: {
    handleAnimationEnd(index) {
      // console.log(index)
      this.activeIndex = index === this.list.length - 1 ? 0 : index + 1
    }
  },
  components: {
  }
}
</script>

<style lang="less" scoped>
.project-step {
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
  @media only screen and (max-width: 760px) {
    height: 472px;
    img {
      object-fit: cover;
    }
  }
  .wrapper {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding-top: 96px;
    .item {
      float: left;
      margin-right: 64px;
      &:last-child {
        margin-right: 0;
      }
    }
    .step {
      font-size: 16px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #FFFFFF;
      line-height: 24px;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .title {
      font-size: 20px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 28px;
      .line {
        display: block;
        width: 45px;
        height: 2px;
        background: #FFFFFF;
        border-radius: 1px;
        margin-top: 30px;
        margin-bottom: 24px;
        position: relative;
      }
      .line .line-active {
        position: absolute;
        left: 0;
        top: 0;
        width: 0;
        height: 2px;
        background: #1A82FF;
      }
      // &::after {
      //   content: '';
      //   display: block;
      //   width: 45px;
      //   height: 2px;
      //   background: #FFFFFF;
      //   border-radius: 1px;
      //   margin-top: 30px;
      //   margin-bottom: 24px;
      // }
    }
    .content {
      font-size: 16px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #FFFFFF;
      line-height: 32px;
    }
  }
}
.mobile-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding-top: 96px;
  .my-swiper {
    padding-left: 16px;
    height: 376px;
  }
  .mobile-item {
    margin-right: 64px;
    &:last-child {
      margin-right: 0;
    }
  }
  .mobile-step {
    font-size: 16px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #FFFFFF;
    line-height: 24px;
    text-transform: uppercase;
    margin-bottom: 12px;
  }
  .mobile-title {
    font-size: 20px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #FFFFFF;
    line-height: 28px;
    &::after {
      content: '';
      display: block;
      width: 45px;
      height: 2px;
      background: #FFFFFF;
      border-radius: 1px;
      margin-top: 30px;
      margin-bottom: 24px;
    }
  }
  .mobile-content {
    font-size: 16px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #FFFFFF;
    line-height: 32px;
  }
  .swiper-pagination {
    display: inline-block;
    position: absolute;
    width: 100%;
    bottom: 24px;
    text-align: center;
    margin-left: -16px;
    /deep/ .swiper-pagination-switch {
      cursor: pointer;
      display: inline-block;
      height: 2px;
      width: 30px;
      background-color: fade(#fff,60);
      margin-right: 0px;
      &.swiper-active-switch {
        background-color: #1A82FF;
      }
    }
  }
}
</style>
