<template>
  <div class="article-nav">
    <div class="article-item">
      <div class="text-wrapper">
        <div class="title">
          {{articleData.title}}
        </div>
        <div class="subtitle">
          <span>时间：{{articleData.updated_at}}</span>
          <!-- <span> 来源：{{articleData.source}}</span> -->
        </div>

      </div>
      <Divider />
     <div class="article-content" v-html="articleData.content" />
      <!-- <div class="article-content"><TemplateArticle /></div> -->

      <Divider />
      <div class="article-footer">
        <div class="share-nav clearfix">
          <div class="share-wrapper">分享未苒网络科技至：
            <br class="d-md-block" />
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
            <nuxt-link class="other-title black" v-if="articleData.previous" :to="{path: '/information/detail', query: {id: articleData.previous && articleData.previous.id}}">上一篇：{{ articleData.previous && articleData.previous.title}}</nuxt-link >
            <nuxt-link class="other-title black" v-if="articleData.next" :to="{path: '/information/detail', query: {id: articleData.next && articleData.next.id}}">下一篇：{{ articleData.next &&articleData.next.title}}</nuxt-link >
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
      default() {return {}}
    }
  },
  data() {
    return {
      // articleData: this.data
    }
  },
  computed: {
    articleData() {
      return this.data
    }
  },
  created() {
  },
  methods: {
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
  .article-content {
    // min-height: 600px;
    min-width: 755px;
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
        span {
          display: inline-block;
          margin-top: 1em;
        }
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
          border-color: #E5E5E5;
          &:hover {
            color: @mainColor !important;
          }
        }
      }
    }
  }
  @media only screen and (max-width: 760px) {
    position: relative;
    .article-item{
      height: auto;
      padding-right: 0;
      padding: 0 16px;
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
      width: 100%;
      height: 100%;
      position: relative;
      img {
        object-fit: cover;
        border-radius: 16px;

      }

    }
    .article-content {
      padding: 20px 0;
      min-width: 100%;
    }
    .article-footer {

      .share-nav {
        padding: 36px 0;
        .share-wrapper {
          float: none;
          font-size: 16px;
          line-height: 30px;
        }
        span {
          display: inline-block;
          margin-top: 18px;
        }
        .icon {
          margin-left: 0;
          margin-right: 14px;
          font-size: 30px;
          &:last-child {
            margin-right: 0;
          }
        }
      }
      .back-nav {
        margin-top: 12px;
        .other-article {
          float: none;
          .other-title {
            line-height: 24px;
          }
        }
        .action {
          float: none;
          button {
            width: 170px;
            height: 48px;
            border-radius: 24px;
            margin-top: 32px;
            color: @fontColor3;
          }
        }
      }
    }
  }
}


</style>
