<template>
  <div>
    <Header />
    <div>
      <div class="banner" :style="{background: `url('${bannerImg}')  no-repeat center center`}">
        <div class="wrapper">
          <div class="text-wrapper">
            <div class="title-desc">Welcome to weiran technology</div>
            <div class="title">加入未苒</div>
            <div class="subtitle">我们的声音，务实求新</div>
          </div>

        </div>
      </div>
      <div class="secondary-block ">
        <div class="tab-wrapper">
          <TabBar :active="curPath" />

        </div>
        <div class="wrapper">
          <div class="show-box clearfix" v-for="(item, i) in showInfoList">
            <div class="box-item row row-no-gutters">
              <div :class="`text-wrapper col-md-6 col-xs-12 ${i % 2 !== 0 ? 'right' : ''}`">
                <div class="title-desc">{{item.titleDesc}}</div>
                <div class="title">{{item.title}}</div>
                <div class="content">{{item.content}}</div>
              </div>
              <div :class="`img-wrapper col-md-6 col-xs-12`">
                <img class="img" :src="item.img" alt="">

              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="third-block">
        <div class="wrapper">
          <div class="page-title-nav">
            <div class="title-desc">join us</div>
            <div class="title">十大人才岗位，期待你的加入</div>
            <div class="subtitle">如有兴趣加入我们欢迎把您的简历和作品投递到以下邮箱，简历投递邮箱：service@veianweb.com</div>
          </div>
          <div class="list-nav">
            <div class="list-item" v-for="item in jobDescriptionList" :key="item.title">
              <div class="item-title clearfix">
                <div class="title-text">{{item.title}}</div>
                <div class="extra">{{item.updateAt}}</div>
              </div>
              <div class="item-content">{{item.content}}</div>
            </div>
          </div>
        </div>
      </div>

      <Join />
    </div>
    <Footer />
  </div>
</template>

<script>
import TabBar from '@/components/about/TabBar'
import Join from '@/components/Join'
const bannerImg = require('@/assets/images/about/join/banner_back.jpg')

const img = require('@/assets/images/about/join/photo.jpg')

export default {
  components: {
    TabBar,
    Join,
  },
  data() {
    return {
      curPath: '/about/join',
      bannerImg: bannerImg,
      showInfoList: [
        {
          img: img,
          titleDesc: 'About us',
          title: '我们是',
          content: `我们是在做好公司，更在努力成为好伙伴。
                  世上总有那家别人的公司，
                  未苒则一直努力成为"我们的公司"。
                  从开始到现在，值得同事始终留恋、合作伙伴恒久信任，
                  这是坚定不移的目标。
                  要每一步走得踏实，方能下一步更加稳固。`,

        },
        {
          img: img,
          titleDesc: 'About us',
          title: '我想要',
          content: `我们需要仍有传统美德的人
                  他应该热爱生活，热爱工作，善于发现美好。
                  技术大拿，或者设计大咖。
                  不会自持，只懂得如何竭力共担的拼搏。
                  喜欢说“我们”而非“我”。
                  把工作当成自己的事业去做。`,

        },
        {
          img: img,
          titleDesc: 'About us',
          title: '我可以',
          content: `我能大胆启用，为梦想提供停留的地方。
                  在未苒，衡量标准并不唯一。
                  学历并不代表能力，文凭只是参考。
                  对老员工心生感恩，对新伙伴诚心对待。
                  把未苒人的梦想，当做自己的梦想去努力实现。
                  不为嘉奖，只为让所行之事存在价值。`,

        },
      ],
      jobDescriptionList: [
        {
          title: 'UI/UX 设计',
          updateAt: '2021.03.25',
          content: '负责web端和移动端页面UIUX（交互）设计关注全球设计行业动态与发展方向，准确把握web端和移动端的设计风格和质量配合前端软件工程师完成人机交互界面设计工作要求：本科及以上学历（不限于艺术类科班出身），平面功底深厚熟练使用Sketch、PS、AI等设计软件能对立思考和完成产品的设计积极理解产品的需求，同时快速的生成新的设计方案注重细节',

        },
        {
          title: 'WEB前端开发',
          updateAt: '2021.03.25',
          content: '负责移动端、PC端项目界面的构建和各类前端交互实现； 2. 做为项目核心成员负责指导前端人员，前端架构和难点攻克。 3. 与后端工程师协作，高效完成数据交互、动态展现； 岗位要求： 1. 计算机或相关专业专科以上，4年前端开发经验，具有互联网应用或者企业管理平台开发经验。 2. 精通各种 Web 前端技术，对符合 Web 标准的网站重构有丰富经验，精通H5编写。 3. 掌握 JS 语言核心技术，对 JS 框架（jQueryZeptoVueReact等）有实际使用经验。',
        },
        {
          title: 'IOS开发',
          updateAt: '2021.03.25',
          content: '熟练掌握iOS平台上的应用开发技术，有独立的App开发能力；3. 熟练掌握C、objective-c语言，Xcode开发环境，及CocoaTouch各种相关开发框架技术；4. 能提供DEMO或AppStore上架产品、具有C/C 或Android开发经验或参加过一个完整的商业级手机应用开发项目者优先；5. 有良好的编程风格和面向对象经验，具备必要的网络、服务器端开发知识。',
        },
        {
          title: 'ANDROID开发',
          updateAt: '2021.03.25',
          content: '1年以上Android平台开发经验，熟悉Android开发平台及框架原理，具有一定的Android手机适配经验者优先；2.熟练掌握Android界面布局及绘制、数据存储、网络通信机制等，对Socket和HTTP访问有实际开发经验;2.具有2个以上安卓APP客户端产品经验',
        },
      ],
    }
  },
  methods: {

  },

}
</script>

<style lang="less" scoped>
@DINCondensedFont: DINCondensed-Bold, DINCondensed;
@MontserratFont: Montserrat-ExtraBold, Montserrat;
  .banner {
    height: 600px;
    color: @white;

    .wrapper {
      padding: 182px 135px 0 135px;
      .text-wrapper {
        margin-bottom: 32px;
        .title-desc {
          font-size: 18px;
          font-weight: 400;
          line-height: 32px;
          letter-spacing: 2px;
          text-transform: uppercase;
        }
        .title {
          font-size: 72px;
          font-weight: 600;
          margin: 24px 0;
          line-height: 72px;
          height: 72px;
        }
        .subtitle {
          font-size: 32px;
          line-height: 42px;
          height: 42px;
          position: relative;
          .icon {
            width: 30px;
            height: 30px;
            position: absolute;

          }
          .text {
            margin-left: 48px;
          }
          &+.subtitle {
            //margin-top: 8px;
          }
        }
      }

    }
  }

  .secondary-block {
    background: @white;
    position: relative;
    .wrapper {
      padding: 135px 0;
    }


  }
  .third-block {
    background: @white2;
    position: relative;
    .wrapper {
      padding: 96px 135px;
    }
    .page-title-nav {
      text-align: center;
      margin-bottom: 56px;
      font-weight: 400;

      .title-desc {
        color: #474747;
        font-size: 18px;
        line-height: 32px;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
      .title {
        height: 64px;
        font-size: 56px;
        line-height: 64px;
        overflow: hidden;
        white-space: nowrap;
        margin: 24px 0;
      }
      .subtitle {
        font-size: 16px;
        color: #A6AAB1;
        line-height: 32px;
      }
    }

    .list-nav {
      .list-item {
        padding: 40px 48px;
        //height: 196px;
        background: #FFFFFF;
        box-shadow: 10px 10px 40px 0px rgba(54, 33, 0, 0.1);
        border-radius: 12px;
        &+.list-item {
          margin-top: 24px;
        }

        .item-title {
          margin-bottom: 20px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow:ellipsis;
          .title-text {
            float: left;

            height: 24px;
            font-size: 18px;
            font-weight: 500;
            line-height: 24px;

          }
          .extra {
            float: right;

            font-size: 16px;
            font-weight: 400;
            color: #474747;
          }
        }
        .item-content {

          font-size: 14px;
          font-weight: 400;
          color: #A6AAB1;
          line-height: 24px;
          //white-space: nowrap;

          //overflow: hidden;
          text-overflow:ellipsis;
        }
      }

    }
  }
  .tab-wrapper {
    position: absolute;
    top: -40px;
    left: 135px;
    right: 135px;
  }
  .show-box {
    position: relative;
    .box-item{
      height: 590px;
    }
    .text-wrapper {
      margin-bottom: 32px;
      padding: 127px 0 0 135px;
      &.right {
        float: right;
      }
      .title-desc {
        color: #474747;
        font-size: 18px;
        font-weight: 400;
        line-height: 32px;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
      .title {
        font-size: 56px;
        font-weight: 500;
        line-height: 64px;
        height: 64px;

        margin: 24px 0;

      }
      .subtitle {
        color: rgba(51, 51, 51, 0.5);
        font-size: 16px;
        line-height: 32px;
        font-weight: 400;
        position: relative;
      }
      .content {
        color: rgba(51, 51, 51, 0.5);
        font-size: 16px;
        line-height: 32px;
        font-weight: 400;
        position: relative;
        white-space: pre-line;
      }
    }
    .img-wrapper {
      height: 100%;
      position: relative;
      img {
        object-fit: cover;
      }

    }
    .img-back {
      position: absolute;
      width: 176px;
      height: 176px;
      bottom: -50px;
      left: -50px;
    }

  }

  img {
    width: 100%;
    height: 100%;
  }

</style>
