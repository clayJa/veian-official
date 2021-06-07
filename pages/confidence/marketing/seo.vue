<template>
  <div>
    <Header></Header>
    <ConfidenceBanner
      :imgae="require('@/static/trust/marketing/seo_banner.jpg')"
      :title="`SEO&SEM`"
      info="企业在线最有效的推广方式之一"
     />
     <div class="seo-search clearfix">
        <div class="search-intro">
          <div>TOB企业 85% 的线上流量是来源于搜索引擎网站出现在搜索引擎首页点击量提升 90%，75% 的买家会使用搜索引擎寻找供应商</div>
          <div class="author">—— MILLWARD BROWN调查报告</div>
        </div>
        <div class="search-image">
          <img src="@/static/trust/marketing/seo_search.png" alt="">
        </div>
     </div>
     <div class="seo-info">
       <img src="@/static/trust/marketing/seo_info.jpg" alt="">
       <div class="content">
        <div class="info d-md-none">
          <div>SEO优化策略是一项全面的计划，通过搜索引擎引流让更多访问者访问您的网站。</div>
          <div>成功的SEO包括使用基于关键字的页面内容关联策略; 以及通过其他站点引入入站链接的页外策略。</div>
        </div>
        <div class="info d-md-block d-none">
          <div>SEO优化策略是一项全面的计划，通过搜索引擎引流让更多访问者访问您的网站。成功的SEO包括使用基于关键字的页面内容关联策略; 以及通过其他站点引入入站链接的页外策略。</div>
        </div>
       </div>
     </div>
     <div class="seo-content clearfix">
       <div class="item" v-for="(item, index) in contentList" :key="index">
         <div class="title-wrapper clearfix">
           <div class="title" v-html="item.title"></div>
           <div class="icon"><i class="iconfont" v-html="item.icon" /></div>
         </div>
         <div class="info">{{ item.info }}</div>
       </div>
     </div>
     <div class="image">
       <img src="@/static/trust/marketing/seo_image.png" alt="">
     </div>
    <Discover />
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header/index.vue'
import Footer from '@/components/Footer/index.vue'
import ConfidenceBanner from '@/components/confidence/ConfidenceBanner/index.vue'
import Discover from '@/components/confidence/Discover/index.vue'
export default {
  data() {
    return {
      imageList: [
        { image: require('@/static/trust/develop/ywxtdz_image1.png'), title: '提升效率' },
        { image: require('@/static/trust/develop/ywxtdz_image2.png'), title: '拓展品牌' },
        { image: require('@/static/trust/develop/ywxtdz_image3.png'), title: '降低成本'},
      ],
      contentList: [
        { icon: '&#xe634;',title: '网站引流', info: '能带来大量精准流量的网站才是好网站，SEO优化可以为企业网站带来大量的有效流量' },
        { icon: '&#xe635;',title: `点击<br />零成本`, info: '企业线上免费推广的最重要的途径,没有之一，与竞价完美配合。' },
        { icon: '&#xe632;',title: `同行<br />都在做`, info: '大量订单被同行抢走，因为用户网络搜索到的永远只有同行' },
        { icon: '&#xe633;',title: '24小时<br />广告在线', info: 'SEO排名24小时在线，任何时间都能让客户看到你' },
        { icon: '&#xe639;',title: '低投入<br />高收益', info: '一次投入，享受长久的推广红利,维护好排名、持续产单' },
        { icon: '&#xe638;',title: '提升<br />品牌影响力', info: '百度、360、搜狗、谷歌排名同步提升，实现全网首页霸屏,维护好排名、持续产单' },
        { icon: '&#xe637;',title: '比竞价<br />广告更实惠', info: '支出占比不足竞价广告的1%' },
        { icon: '&#xe636;',title: '精准营销', info: 'SEO属于搜索引擎营销，获取的流量更精准，能够给企业带来持续不断的优质营销订单' },
      ]
    }
  },
  methods: {
  },
  components: {
    Header,
    Footer,
    ConfidenceBanner,
    Discover,
  }
}
</script>

<style lang="less" scoped>
.seo-search {
  padding: 96px 199px 96px 135px;
  .search-intro {
    float: left;
    max-width: 644px;
    font-size: 32px;
    font-family: PingFangSC-Light, PingFang SC;
    font-weight: 300;
    color: #474747;
    line-height: 56px;
    margin-top: 80px;
    .author {
      font-size: 20px;
      text-align: right;
      margin-top: 3em;
    }
  }
  .search-image {
    width: 360px;
    height: 360px;
    border-radius: 50%;
    float: right;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
  @media only screen and (max-width: 760px) {
    padding: 96px 16px;
    .search-intro {
      float: none;
      max-width: 100%;
      font-size: 32px;
      line-height: 56px;
      margin-top: 0;
      .author {
        font-size: 20px;
        margin-top: 3em;
      }
    }
    .search-image {
      width: 100%;
      height: auto;
      margin-top: 48px;
      img {
        width: 100%;
        border-radius: 50%;
      }
    }
  }
}
.seo-info {
  position: relative;
  img {
    width: 100%;
  }
  .content {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    .info {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      font-family: PingFangSC-Regular;
      font-size: 24px;
      color: #FFFFFF;
      letter-spacing: 0.11px;
      text-align: center;
      line-height: 42px;
      white-space: nowrap;
    }
  }
  @media only screen and (max-width: 760px) {
      position: relative;
      img {
        width: 100%;
        height: 444px;
        object-fit: cover;
      }
      .content {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        .info {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          padding: 0 16px;
          transform: translate(0,-50%);
          font-size: 24px;
          letter-spacing: 0.11px;
          line-height: 42px;
          white-space: normal;
        }
      }
  }
}
.seo-content {
  padding: 96px 66px 96px 135px;
  background: #F7F7F7;
  .item {
    float: left;
    width: 270px;
    height: 253px;
    background: #FFFFFF;
    box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.1);
    padding: 32px;
    border-radius: 16px;
    margin-right: 30px;
    margin-bottom: 30px;
    .title-wrapper {
      height: 64px;
      margin-bottom: 25px;
      .title {
        font-size: 24px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #474747;
        line-height: 32px;
        height: 64px;
        display: inline-block;
        vertical-align: top;
      }
      .icon {
        float: right;
        vertical-align: top;
        line-height: 1;
        margin-left: auto;
        i {
          font-size: 40px;
          float: right;
          color: #1A82FF;
        }
      }
    }
    .info {
      font-size: 14px;
      font-family: PingFangSC-Light, PingFang SC;
      font-weight: 300;
      color: #A6AAB1;
      line-height: 32px;
    }
  }
  @media only screen and (max-width: 760px) {
    padding: 96px 52px;
    background: #F7F7F7;
    .item {
      float: none;
      width: 100%;
      height: 253px;
      box-shadow: 0px 20px 40px 0px rgba(0, 0, 0, 0.1);
      padding: 32px;
      border-radius: 16px;
      margin-right: 0;
      margin-bottom: 30px;
      &:last-child {
        margin-bottom: 0;
      }
      .title-wrapper {
        height: 64px;
        margin-bottom: 25px;
        .title {
          font-size: 24px;
          line-height: 32px;
          height: 64px;
        }
        .icon {
          float: right;
          i {
            font-size: 40px;
          }
        }
      }
      .info {
        font-size: 14px;
        line-height: 32px;
      }
    }
  }
}
.image {
  padding: 60px 160px;
  img {
    width: 100%;
  }
  @media only screen and (max-width: 760px) {
    padding: 96px 16px;
  }
}
</style>
