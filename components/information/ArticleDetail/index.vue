<template>
  <div class="article-nav">
    <div class="article-item">
      <div class="text-wrapper">
        <div class="title">
          {{articleData.title}}
        </div>
        <div class="subtitle">
          <span>时间：{{articleData.updateAt}}</span>
          <span> 来源：{{articleData.source}}</span>
        </div>

      </div>
      <Divider />
<!--      <div class="article-content" v-html="articleData.content" />-->
      <div class="article-content"><TemplateArticle /></div>

      <Divider />
      <div class="article-footer">
        <div class="share-nav clearfix">
          <div class="share-wrapper">分享未苒网络科技至：
            <span>
              <i class="icon iconfont icon-icon_wechat">&#xe620;</i>
              <i class="icon iconfont icon-icon_sina_weibo">&#xe61f;</i>
              <i class="icon iconfont icon-facebook">&#xe601;</i>
              <i class="icon iconfont icon-twitter-round">&#xe602;</i>
              <i class="icon iconfont icon-youtube-round">&#xe6a2;</i>
              <i class="icon iconfont icon-phone-round">&#xe69f;</i>
              <i class="icon iconfont icon-email-round">&#xe663;</i>

            </span>
          </div>

        </div>

        <div class="back-nav clearfix">
          <div class="other-article">
            <nuxt-link class="other-title black" :to="{path: '/information/detail', query: {id: articleData.prev.id}}">上一篇：{{articleData.prev.title}}</nuxt-link >
            <nuxt-link class="other-title black" :to="{path: '/information/detail', query: {id: articleData.next.id}}">下一篇：{{articleData.next.title}}</nuxt-link >
          </div>
          <div class="action">
            <Button @click="pageBack">返回</Button>
          </div>
        </div>

      </div>

    </div>
  </div>

</template>

<script>
import TemplateArticle from '@/components/information/TemplateArticle'

export default {
  name: 'ArticleDetail',
  components: {
    TemplateArticle,
  },
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      articleData: this.data
    }
  },
  created() {
    const query = this.$route.query
    if (query.id) {
      this.requestData(query)
    }
  },
  methods: {
    requestData(params) {
      const payload = {...params}
      console.log('payload', payload)
      this.articleData = {
        ...payload,
        next: {
          id: 123,
          title: '诚贺复星集团品牌官网正式上线，重塑全新品牌形象'
        },
        prev: {
          id: 456,
          title: '新鸿儒再次牵手安恒信息，为数字经济高速发展护航',
        },
        title: '大数据环境下，网站建设更需创新学习能力',
        updateAt: '2020-09-17',
        source: '鼎易科技',
        //       content: `
        // <p style="text-align: center;">
        //   <img title="TinyMCE Logo" src="//www.tiny.cloud/images/glyph-tinymce@2x.png" alt="TinyMCE Logo" width="110" height="97" />
        // </p>
        //
        // <h2 style="text-align: center;">Welcome to the TinyMCE editor demo!</h2>
        //
        // <h2>Got questions or need help?</h2>
        //
        // <ul>
        //   <li>Our <a href="https://www.tiny.cloud/docs/">documentation</a> is a great resource for learning how to configure TinyMCE.</li>
        //   <li>Have a specific question? Try the <a href="https://stackoverflow.com/questions/tagged/tinymce" target="_blank" rel="noopener"><code>tinymce</code> tag at Stack Overflow</a>.</li>
        //   <li>We also offer enterprise grade support as part of <a href="https://www.tiny.cloud/pricing">TinyMCE premium plans</a>.</li>
        // </ul>
        //
        // <h2>A simple table to play with</h2>
        //
        // <table style="border-collapse: collapse; width: 100%;" border="1">
        //   <thead>
        //     <tr>
        //       <th>Product</th>
        //       <th>Cost</th>
        //       <th>Really?</th>
        //     </tr>
        //   </thead>
        //   <tbody>
        //     <tr>
        //       <td>TinyMCE</td>
        //       <td>Free</td>
        //       <td>YES!</td>
        //     </tr>
        //     <tr>
        //       <td>Plupload</td>
        //       <td>Free</td>
        //       <td>YES!</td>
        //     </tr>
        //   </tbody>
        // </table>
        //
        // <h2>Found a bug?</h2>
        //
        // <p>
        //   If you think you have found a bug please create an issue on the <a href="https://github.com/tinymce/tinymce/issues">GitHub repo</a> to report it to the developers.
        // </p>
        //
        // <h2>Finally ...</h2>
        //
        // <p>
        //   Don't forget to check out our other product <a href="http://www.plupload.com" target="_blank">Plupload</a>, your ultimate upload solution featuring HTML5 upload support.
        // </p>
        // <p>
        //   Thanks for supporting TinyMCE! We hope it helps you and your users create great content.<br>All the best from the TinyMCE team.
        // </p>`,

      }
    },
    pageBack() {
      this.$router.go(-1)
    }
  }

}
</script>

<style lang="less" scoped>
.article-nav {
  position: relative;
  .article-item{
    //height: 590px;
    height: 228px;
    padding-right: 48px;
  }
  .text-wrapper {
    position: relative;
    vertical-align: top;
    padding: 32px 39px 0 39px;
    //&.right {
    //  float: right;
    //}
    .title-desc {
      color: #474747;
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      height: 24px;

      white-space: nowrap;
      overflow: hidden;
      text-overflow:ellipsis;
    }
    .title {
      height: 28px;
      font-size: 20px;
      font-weight: 500;
      color: #474747;
      line-height: 28px;
      text-align: center;

      white-space: nowrap;
      overflow: hidden;
      text-overflow:ellipsis;

      margin-bottom: 24px;
    }
    .subtitle {
      height: 24px;
      font-size: 14px;
      font-weight: 400;
      color: #A6AAB1;
      line-height: 24px;
      position: relative;
      text-align: center;

      white-space: nowrap;
      overflow: hidden;
      text-overflow:ellipsis;

    }
    .content {
      color: #A6AAB1;
      font-size: 14px;
      line-height: 24px;
      font-weight: 400;
      position: relative;
      //white-space: pre-line;
      margin: 20px 0;
    }
    .action {
      position: absolute;
      bottom: 20px;
      font-size: 14px;
      font-weight: 500;
      color: #E5E5E5;
      line-height: 20px;
      .icon {
        margin-left: 20px;
      }

      &:hover {
        color: @mainColor;
      }

    }
  }
  .img-wrapper {
    width: 300px;
    height: 100%;
    position: relative;
    img {
      object-fit: cover;
      border-radius: 16px;

    }

  }
  .img-back {
    position: absolute;
    width: 176px;
    height: 176px;
    bottom: -50px;
    left: -50px;
  }
  .article-content {
    padding: 20px 0;
  }
  .article-footer {

    .share-nav {
      padding: 36px 0;
      .share-wrapper {
        float: right;
        font-size: 16px;
        font-weight: 400;
        color: #474747;
        line-height: 30px;
      }
      .icon {
        margin-left: 24px;
        font-size: 30px;
        color: #A6AAB1;
        cursor: pointer;
        &:hover {
          color: @mainColor1;
        }
      }
    }
    .back-nav {
      margin-top: 12px;
      .other-article {
        float: left;
        .other-title {
          line-height: 24px;
          display: block;
          color: #A6AAB1;

        }
      }
      .action {
        float: right;
        button {
          width: 170px;
          color: @fontColor3;
        }
      }
    }
  }


}


</style>
