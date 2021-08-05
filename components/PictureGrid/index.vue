<template>
  <div class="picture-grid">
    <div class="clearfix">
      <div class="picture-item" v-for="item in list" :key="item.name">
        <img :src="`/imageHost/${getObject(item,'content_body.first_image')}`" alt="">
        <div class="mask" @click="toPath(`/uncomplicated/example${item.case_study_id}?id=${item.id}`)">
          {{ item.title }}
        </div>
      </div>
    </div>
    <div class="more-wrapper" v-if="hasMore && (lastPage === null || currentPage < lastPage) ">
      <div class="more-buttom" @click="nextPage">查看更多案例 <i class="iconfont">&#xe61e;</i></div>
    </div>
  </div>
</template>

<script lang="ts">
import { caseList } from '@/service/news'
import _get from 'lodash/get'
// type DataProps = {
// }
export default {
  props: {
    // list: {
    //   default() {
    //     return [
    //       { name: '白塔岭画室官网', url: '', img: require('@/static/image-test/白塔岭画室官网.png')},
    //       { name: '南孚电池官网', url: '/uncomplicated/example1', img: require('@/static/image-test/南孚电池官网.png')},
    //       { name: '奇瑞控股官网', url: '', img: require('@/static/image-test/奇瑞控股官网.png')},
    //       { name: '新日电动车官网', url: '', img: require('@/static/image-test/新日电动车官网.png')},
    //       { name: '徐工集团官网', url: '', img: require('@/static/image-test/徐工集团官网.png')},
    //       { name: '张裕集团官网', url: '', img: require('@/static/image-test/张裕集团官网.png')},
    //       { name: '中联重科官网', url: '', img: require('@/static/image-test/中联重科官网.png')},
    //       { name: 'G42', url: '', img: require('@/static/image-test/G42.png')},
    //       { name: '瑰珀翠官网', url: '/uncomplicated/example3', img: require('@/static/image-test/瑰珀翠官网.png')},
    //       { name: '喜临门官网', url: '/uncomplicated/example2', img: require('@/static/image-test/喜临门官网.png')},
    //       { name: 'CCTV', url: '', img: require('@/static/image-test/CCTV.png')},
    //       { name: '李宁官网', url: '', img: require('@/static/image-test/李宁官网.png')},
    //     ]
    //   }
    // },
    hasMore: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      list: [],
      currentPage: 1,
      lastPage: null,
    }
  },
  mounted() {
    this.requestData(this.currentPage)
  },
  methods: {
    toPath(path: string) {
      if(path) {
        this.$router.push(path)
      }
    },
    getObject(obj,key,defaultValue) {
      return _get(obj,key,defaultValue)
    },
    nextPage() {
      this.requestData(this.currentPage + 1)
    },
    async requestData(page) {
      const res: any = await caseList({
        limit: 16,
        page: page,
      })
      // Math.ceil(2/16)
      console.log(res,'2324343')
      this.list = page === this.currentPage ? res.data : [...this.list,...res.data]
      this.currentPage = res.current_page
      this.lastPage = res.last_page
    },
  },
  components: {
  }
}
</script>

<style lang="less" >
.picture-grid {
  background: #1A82FF;
  .picture-item {
    float: left;
    position: relative;
    width: 25%;
    cursor: pointer;
    @media only screen and (max-width: 760px) {
      width: 100%;
      float: none;
    }
    img {
      width: 100%;
    }
    &:hover {
      .mask {
        visibility: visible;
        opacity: 1;
      }
    }
    .mask {
      visibility: hidden;
      opacity: 0;
      transition: 1s all;
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background: rgba(26, 130, 255, 0.9);
      font-size: 22px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      line-height: 26px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .more-wrapper {
    background: #1A82FF;
    width: 100%;
    text-align: center;
    padding: 48px 0;
    padding-top: 0;
    cursor: pointer;
    .more-buttom {
      display: inline-block;
      font-size: 20px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #FFFFFF;
      width: 230px;
      height: 70px;
      line-height: 70px;
      border-radius: 35px;
      border: 1px solid rgba(255, 255, 255, 0.5);
      margin-top: 48px;
    }
    @media only screen and (max-width: 760px) {
      padding: 48px 0;
      .more-buttom {
        width: 230px;
        height: 70px;
        border-radius: 35px;
        line-height: 70px;
        font-size: 20px;
        margin-top: 0;
      }
    }
  }
}
</style>
