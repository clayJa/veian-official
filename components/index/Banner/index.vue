<template>
  <div>
    <b-carousel
      id="carousel"
      v-model="slide"
      :interval="10000"
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide img-src="@/static/home_banner_1.png">
        <div class="home_banner_title1 mt241">Welcome to weiran technology</div>
        <div class="home_banner_title2">我们的价值是成就客户需求！</div>
        <div class="home_banner_title3">即：客户需求为先的价值取向</div>
        <PillButton @click="toPath">联系我们</PillButton>
      </b-carousel-slide>

      <b-carousel-slide img-src="@/static/home_banner_2.png">
        <div class="container">
          <div class="banner_title_wrapper2">
            <div class="home_banner_title1 mt229">Welcome to weiran technology</div>
            <div class="home_banner_title2">简单、信任、 快乐</div>
            <PillButton @click="toPath" :style="{ background: '#fff', color: '#1A82FF', marginTop: '48px' }">联系我们</PillButton>
          </div>
        </div>
      </b-carousel-slide>

      <b-carousel-slide img-src="@/static/home_banner_3.png">
        <div class="container">
          <div class="banner_title_wrapper2 vertical-center" style="max-width: 70%;">
            <div class="home_banner_title1 mt229">Welcome to weiran technology</div>
            <div class="home_banner_title2">帮助客户在时代中完成数字化、品牌化升级</div>
            <PillButton @click="toPath" :style="{ background: '#fff', color: '#1A82FF', marginTop: '48px' }">联系我们</PillButton>
          </div>
        </div>
      </b-carousel-slide>

    </b-carousel>
  </div>
</template>

<script lang="ts">
import PillButton from '@/components/PillButton/index.vue'
type DataProps = {
  slide: number,
  sliding: null | boolean
}
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    } as DataProps
  },
  methods: {
    onSlideStart(slide: any) {
      this.sliding = true
    },
    onSlideEnd(slide: any) {
      this.sliding = false
    },
    toPath() {
      console.log(1111)
    }
  },
  components: {
    PillButton,
  }
}
</script>

<style lang="less" >
#carousel .carousel-caption {
    top: 0;
    left: 0;
    right: 0;
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
