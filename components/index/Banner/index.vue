<template>
  <div class="banner-container">
    <div class="my-swiper" v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="content">
            <img src="@/static/home_banner_1.png" alt="">
            <div class="text">
                <div class="home_banner_title1 mt241">Welcome to weiran technology</div>
                <div class="home_banner_title2">我们的价值是成就客户需求！</div>
                <div class="home_banner_title3">即：客户需求为先的价值取向</div>
                <PillButton @click="toPath">联系我们</PillButton>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="content">
            <img src="@/static/home_banner_2.png" alt="">
            <div class="text container">
              <div class="banner_title_wrapper2">
                <div class="home_banner_title1 mt229">Welcome to weiran technology</div>
                <div class="home_banner_title2">简单、信任、 快乐</div>
                <PillButton @click="toPath" :style="{ background: '#fff', color: '#1A82FF', marginTop: '48px' }">联系我们</PillButton>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="content">
            <img src="@/static/home_banner_3.png" alt="">
            <div class="text container">
              <div class="banner_title_wrapper2 vertical-center" style="max-width: 70%;">
                <div class="home_banner_title1 mt229">Welcome to weiran technology</div>
                <div class="home_banner_title2">帮助客户在时代中完成数字化、品牌化升级</div>
                <PillButton @click="toPath" :style="{ background: '#fff', color: '#1A82FF', marginTop: '48px' }">联系我们</PillButton>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script lang="ts">
import PillButton from '@/components/PillButton/index.vue'
type DataProps = {
  swiperOption: any
}
export default {
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: 10000,
        spaceBetween: 0,
        pagination: '.swiper-pagination',
        paginationClickable :true,
        onSlideChangeStart() {
          console.log('on slide change start')
        }
      }
    } as DataProps
  },
  methods: {
    toPath() {
      console.log(1111)
    }
  },
  components: {
    PillButton,
  }
}
</script>

<style lang="less" scoped>
.my-swiper {
  position: relative;
  height: 770px;
  width: 100%;
}
.banner-container {
  margin-top: 100px;
}
.content {
  position: relative;
  img {
    width: 100%;
  }
  .text {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    text-align: center;
  }
}
.swiper-pagination {
  display: inline-block;
  position: absolute;
  bottom: 48px;
  margin-left: 50%;
  transform: translateX(-50%);
  &-switch  {
    cursor: pointer;
    display: inline-block;
    height: 2px;
    width: 64px;
    background-color: fade(#fff,60);
    margin-right: 24px;
    &.swiper-active-switch {
      background-color: transparent;
      background-image:
					linear-gradient(
						to right,
						#1A82FF 0,
            #1A82FF 50%,
						fade(#fff,60) 50%,
						fade(#fff,60) 100%,
					);
    }
  }
}
.mt241 {
  padding-top: 241px;
}
.mt229 {
  padding-top: 229px;
}
.home_banner_title1 {
  font-family: PingFangSC-Regular;
  font-size: 18px;
  color: #FFFFFF;
  line-height: 32px;
  text-transform: uppercase;
}
.home_banner_title2 {
  padding: 24px 0;
  font-family: PingFangSC-Semibold;
  font-size: 72px;
  color: #FFFFFF;
  letter-spacing: 0.51px;
}
.home_banner_title3 {
  font-family: PingFangSC-Light;
  font-size: 32px;
  color: #FFFFFF;
  letter-spacing: 0.4px;
  line-height: 42px;
  padding-bottom: 48px;
}
.banner_title_wrapper2 {
  text-align: left;
  max-width: 40%;
}
.carousel-indicators .active {
  background-color: #1A82FF;
}
</style>
