<template>
  <div>
    <Header class="blue-theme" />
    <div>
      <div class="first-block">
        <div class="wrapper">
          <div class="text-wrapper">
            <!-- <div class="title-desc">Welcome to weiran technology</div>
            <div class="title">我们的价值是成就客户需求！</div>
            <div class="subtitle">即：客户需求为先的价值取向</div> -->
            <div class="title-desc">{{ contactData.contact_title_en }}</div>
            <div class="title">{{ contactData.contact_title1 }}</div>
            <div class="subtitle">{{ contactData.contact_title2 }}</div>
          </div>
          <div class="show-img">
            <InlineSvg :src="require('@/assets/images/combined_shape.svg')" class="icon-bg" @error="log($event)" />

            <div class="img-wrapper">

              <!-- <img src="@/assets/images/contact/business.jpg" alt=""> -->
              <img :src="contactData.contact_first_image" alt="">

            </div>
          </div>
          <div class="footer-desc row row-no-gutters">
          <div class="col-md-6 col-xs-12">
            <div class="address-desc">
              我们的位置
            </div>
            <div class="address">
              <!-- 浙江省 杭州市 西湖区 紫荆花北路 宝港广场A座4F -->
              {{contactData.address}}
            </div>
          </div>
          <div class="col-md-6 col-xs-12 action-bar-wrapper">
            <div class="action-bar">
            <a class="action-button secondary" target="_blank" rel="nofollow" :href="contactData.address_link">
              <img :src="require('@/assets/images/contact/icon_map.png')" class="icon" />

              <span style="color: #fff;">一键导航</span>
            </a>
            <span class="action-button secondary">
              <img :src="require('@/assets/images/contact/icon_advisory.png')" class="icon" />

              <span>业务咨询</span>
            </span>
            </div>
          </div>

        </div>
        </div>
      </div>
      <div class="secondary-block">
        <div class="row row-no-gutters d-md-none">
          <div class="col-md-6 col-xs-6 pd-r-36">
            <div class="text-wrapper">
              <div class="sharp"></div>
              <div class="title-desc"><span>Online consultation</span></div>
              <div class="title">一对一线上咨询</div>
              <div class="subtitle">为保证一对一服务效果，请如实详细填写</div>
            </div>
            <div class="img-wrapper">
              <img class="back" src="@/assets/images/contact/people_back.png" alt="">

              <img class="people" src="@/assets/images/contact/people.png" alt="">

            </div>
          </div>
          <div class="col-md-6 col-xs-6 contact-form pd-l-36">
            <div class="form-wrapper">
              <div class="title">被信任，是种快乐…</div>
              <form>
                <div class="form-group">
                  <input type="email" class="form-control" id="contact-people" placeholder="联系人">
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" id="phone" placeholder="手机号码">
                </div>
                <div class="form-group">
                  <input type="input" class="form-control" id="email" placeholder="邮箱">
                </div>
                <div class="form-group">
                  <select class="form-control" id="needs" placeholder="我的需求">
                    <option>我的需求</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div class="form-group">
                  <textarea class="form-control" rows="4" id="suggestion" placeholder="您有什么想对我们说？"></textarea>
                </div>
                <div class="form-group">
                  <input type="input" class="form-control" id="code" placeholder="验证码">
                </div>
                <button type="submit" class="btn action-button primary">提交</button>
              </form>
            </div>
          </div>
        </div>
        <div class="row row-no-gutters d-none d-md-block">
          <div class="text-wrapper">
            <!-- <InlineSvg :src="require('@/assets/images/contact/combined_shape_black.svg')" class="icon" /> -->
            <div class="sharp"></div>
            <div class="title-desc"><span>Online consultation</span></div>
            <div class="title">一对一线上咨询</div>
            <div class="subtitle">为保证一对一服务效果，请如实详细填写</div>
          </div>
          <div class="contact-form">
            <div class="form-wrapper">
              <div class="title">被信任，是种快乐…</div>
              <form>
                <div class="form-group">
                  <input type="email" class="form-control" id="contact-people" placeholder="联系人">
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" id="phone" placeholder="手机号码">
                </div>
                <div class="form-group">
                  <input type="input" class="form-control" id="email" placeholder="邮箱">
                </div>
                <div class="form-group">
                  <select class="form-control" id="needs" placeholder="我的需求">
                    <option>我的需求</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div class="form-group">
                  <textarea class="form-control" rows="4" id="suggestion" placeholder="您有什么想对我们说？"></textarea>
                </div>
                <div class="form-group">
                  <input type="input" class="form-control" id="code" placeholder="验证码">
                </div>
                <button type="submit" class="btn action-button primary">提交</button>
              </form>
            </div>
          </div>
          <div class="img-wrapper">
            <img class="back" src="@/assets/images/contact/people_back.png" alt="">
            <img class="people" src="@/assets/images/contact/people.png" alt="">
          </div>
        </div>
      </div>
      <div class="third-block">
        <div class="row row-no-gutters d-md-none">
          <div class="col-md-6 col-xs-6">
            <div class="text-wrapper">
              <div class="title">联系方式</div>
              <div class="subtitle">
                <InlineSvg :src="require('@/assets/images/contact/phone_circle.svg')" class="icon" />
                <!-- <span class="text"><span>周经理</span><span>  156 6900 6932</span></span> -->
                <span class="text"><span>{{concatUser.name}}</span><span>{{concatUser.phone}}</span></span>
              </div>
              <div class="subtitle">
                <InlineSvg :src="require('@/assets/images/contact/email_circle.svg')" class="icon" />
                <!-- <span class="text">info@company.com</span> -->
                <span class="text">{{concatUser.email}}</span>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xs-6">
            <div class="contact-wrapper row">
              <div class="wrapper">
              <InlineSvg :src="require('@/assets/images/combined_shape.svg')" class="back-icon" />
              <div class="contact-item col-md-6 col-xs-6"><InlineSvg :src="require('@/assets/images/contact/icon_wechat.svg')" class="icon" /></div>
              <!-- <div class="contact-item col-md-6 col-xs-6"><img src="@/assets/images/contact/qrcode.png" alt="" class="img"></div> -->
              <div class="contact-item col-md-6 col-xs-6"><img :src="qrcodeImage" alt="" class="img"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="d-md-block d-none">
          <div class="text-wrapper">
            <div class="title">联系方式</div>
            <div class="subtitle">
              <InlineSvg :src="require('@/assets/images/contact/phone_circle.svg')" class="icon" />
              <!-- <span class="text"><span>周经理</span><span>  156 6900 6932</span></span> -->
              <span class="text"><span>{{concatUser.name}}</span><span>{{concatUser.phone}}</span></span>
            </div>
            <div class="subtitle">
              <InlineSvg :src="require('@/assets/images/contact/email_circle.svg')" class="icon" />
              <!-- <span class="text">info@company.com</span> -->
              <span class="text">{{concatUser.email}}</span>
            </div>
          </div>
          <div class="contact-wrapper row">
            <div class="wrapper">
            <InlineSvg :src="require('@/assets/images/combined_shape.svg')" class="back-icon" />
            <div class="contact-item"><InlineSvg :src="require('@/assets/images/contact/icon_wechat.svg')" class="icon" /></div>
            <!-- <div class="contact-item"><img src="@/assets/images/contact/qrcode.png" alt="" class="img"></div> -->
            <div class="contact-item"><img :src="qrcodeImage" alt="" class="img"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import InlineSvg from 'vue-inline-svg';
import _get from 'lodash/get'
export default {
  components: {
    InlineSvg
  },
  data() {
    return {
      qrcodeImage: '',
      concatUser: {}
    }
  },
  computed: {
    moduleConfig() {
      return this.$store.getters['getModuleConfig']
    },
    contactData() {
      return _get(this.moduleConfig,'contactData',{})
    },
  },
  mounted() {
    this.fetchModuleConfig()
    this.fetchGlobalSetting()
  },
  methods: {
    async fetchModuleConfig() {
      const menuMap = localStorage.getItem('menuMap') ? JSON.parse(localStorage.getItem('menuMap')) : {}
      await this.$store.dispatch('fetchModuleConfig',{id: menuMap[this.$nuxt.$route.path]})
    },
    async fetchGlobalSetting() {
      const res1 = await this.$store.dispatch('fetchGlobalSetting',{name: 'contact_user_qrcode'})
      const res2 = await this.$store.dispatch('fetchGlobalSetting',{name: 'concat_user'})
      this.qrcodeImage = res1.data[0].value
      this.concatUser = JSON.parse(res2.data[0].value)
    }
  },
}
</script>

<style lang="less" scoped>
  // header
  /deep/ .blue-theme{
    .header {
      background: @mainColor !important;
      .logo {
        background-image: url('~/assets/images/logo_white.png');
      }
    }
    .nav-item {
      &.active a {
        color: @white;
      }
      a {
        color: @white;
      }
      .nav-icon {
        color: @white;
      }
      &:hover {
        .nav-icon {
          color: @white2;
        }
        &>a {
          //background: #F7F7F7;
          color: @white2 !important;
        }
      }
    }
    .search-wrapper .icon{
      color: #fff;
    }
  }

  .first-block {
    background: @mainColor;
    color: @white;
    .wrapper {
      padding: 120px 135px 70px 135px;
    }
    .text-wrapper {
      position: relative;
      margin-bottom: 68px;
      .title-desc {
        font-size: 18px;
        font-weight: 400;
        line-height: 32px;
        text-transform: uppercase;
      }
      .title {
        font-size: 72px;
        font-weight: 600;
        margin: 24px 0;
      }
      .subtitle {
        font-size: 32px;
        font-weight: 300;
      }
    }
    .show-img {
      position: relative;
      .icon-bg {
        position: absolute;
        width: 176px;
        height: 176px;
        opacity: 0.3;
        right: -44px;
        top: -44px;
      }
      .img-wrapper {
        height: 332px;
        background: @white2;
        border-radius: 16px;
        padding: 16px;
        position: relative;
        z-index: 1;

        img {
          border-radius: 16px;
          width: 100%;
          height: 100%;
          object-fit: fill;
        }
      }
    }
    .footer-desc {
      margin-top: 50px;
      .action-bar-wrapper {
        position: relative;
        height: 108px;
      }
      .action-bar {
        right: 0;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        .action-button {
          .icon {
            width: 20px;
            vertical-align: middle;
          }
          &+.action-button {
            margin-left: 45px;
          }
        }
      }
      .address-desc {
        font-size: 44px;
        line-height: 64px;
        margin-bottom: 12px;
      }
      .address {
        font-size: 20px;
        line-height: 32px;
      }
    }
    @media only screen and (max-width: 760px) {
      .wrapper {
        padding: 144px 16px 68px 16px;
      }
      .text-wrapper {
        position: relative;
        margin-bottom: 68px;
        .title-desc {
          font-size: 14px;
          line-height: 32px;
        }
        .title {
          font-size: 40px;
          line-height: 56px;
          margin: 24px 0;
        }
        .subtitle {
          font-size: 24px;
          line-height: 42px;
        }
      }
      .show-img {
        .icon-bg {
          display: none;
        }
        .img-wrapper {
          height: 332px;
          border-radius: 16px;
          padding: 16px;
          img {
            border-radius: 16px;
            width: 100%;
            height: 100%;
            object-fit: fill;
          }
        }
      }
      .footer-desc {
        margin-top: 48px;
        .action-bar-wrapper {
          position: relative;
          height: 108px;
        }
        .action-bar {
          right: 0;
          position: absolute;
          top: 50%;
          width: 100%;
          text-align: center;
          transform: translateY(-50%);
          .action-button {
            padding: 12px 32px;
            border-radius: 24px;
            .icon {
              width: 18px;
              margin-right: 12px;
            }
            &+.action-button {
              margin-left: 0;
            }
          }
        }
        .address-desc {
          font-size: 32px;
          line-height: 64px;
          margin-bottom: 12px;
        }
        .address {
          font-size: 20px;
          line-height: 32px;
        }
      }
    }
  }
  .secondary-block {
    //height: 880px;
    background: @white2;

    padding: 108px 135px 0 135px;

    .text-wrapper {
      .sharp {
        position: absolute;
        color: #03101F;
        width: 176px;
        height: 176px;
        //opacity: 0.1;
        right: 44px;
        top: 44px;
        z-index: 0;
        background-image: url('@/static/Combined_Shape_333.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
      }

      .title-desc {
        font-size: 18px;
        font-weight: 400;
        line-height: 32px;
        text-transform: uppercase;
        position: relative;
      }
      .title {
        font-size: 55px;
        font-weight: 600;
        margin: 24px 0;
      }
      .subtitle {
        font-size: 16px;
        color: #A6AAB1;
      }
    }
    .img-wrapper {
      position: relative;
      .back {
        object-fit: fill;
        max-width: 470px;
        height: 532px;
      }
      .people {
        position: absolute;
        left: -63px;
        bottom: 0;
        max-width: 441px;
        height: 346px
      }
    }
    .contact-form {
      height: 100%;

      .form-wrapper {
        //width: 566px;
        //height: 665px;
        padding: 48px;
        background: #FFFFFF;
        box-shadow: 20px 20px 40px 0px rgba(0, 0, 0, 0.1);
        border-radius: 16px;

        .title {
          font-size: 24px;
          color: @fontColor;
          margin-bottom: 26px;
          text-align: center;
        }

        form {

          .form-control {
            border: 1px solid #E5E5E5;
            box-shadow: none;
          }
          input.form-control {
            height: 48px;
          }
          select.form-control {
            height: 48px;
          }
          .form-group {
            margin-bottom: 16px;
          }
        }
      }
    }
    @media only screen and (max-width: 760px) {
      padding: 144px 16px 0 16px;
      position: relative;
      .text-wrapper {
        .sharp {
          width: 176px;
          height: 176px;
          right: 16px;
          top: 48px;
        }

        .title-desc {
          font-size: 18px;
          line-height: 32px;
        }
        .title {
          font-size: 40px;
          line-height: 64px;
          margin: 24px 0;
        }
        .subtitle {
          font-size: 16px;
          color: #A6AAB1;
          margin-bottom: 48px;
        }
      }
      .img-wrapper {
        position: relative;
        .back {
          object-fit: fill;
          max-width: 470px;
          height: 532px;
        }
        .people {
          position: absolute;
          left: 0;
          bottom: 0;
          max-width: 441px;
          height: 346px
        }
      }
      .contact-form {
        height: 100%;
        .form-wrapper {
          padding: 48px 16px;
          box-shadow: 20px 20px 40px 0px rgba(0, 0, 0, 0.1);
          border-radius: 16px;
          .title {
            font-size: 24px;
            margin-bottom: 26px;
          }
          form {
            .form-control {
              border: 1px solid #E5E5E5;
              box-shadow: none;
            }
            input.form-control {
              height: 48px;
            }
            select.form-control {
              height: 48px;
            }
            .form-group {
              margin-bottom: 16px;
            }
            .action-button {
              padding: 12px 68px;
              border-radius: 24px;
              font-size: 18px;
              line-height: 25px;
              margin-top: 32px;
            }
          }
        }
      }
    }
  }
  .third-block {
    color: @white;
    background: @mainColor;
    padding: 108px 135px;

    .text-wrapper {

      .title {
        font-size: 56px;
        margin-bottom: 24px;
      }
      .subtitle {
        font-size: 16px;
        line-height: 32px;
        height: 32px;
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
          margin-top: 8px;
        }
      }
    }
    .contact-wrapper {
      position: relative;
      height: 176px;
      .wrapper {
        position: absolute;
        top: 50%;
        right: 0;
        //transform: translateY(-50%);
        margin-top: -64px;
      }
      .contact-item {
        width: 128px;
        height: 128px;
        background: @white;
        position: relative;
        border-radius: 16px;
        padding: 10px;
        .icon {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 64px;
          height: 52px;
          margin-left: -32px;
          margin-top: -26px;

          //transform: translateY(-50%) translateX(-50%);

        }
        &+.contact-item {
          margin-left: 64px;
        }

      }
      .back-icon {
        position: absolute;
        left: -28%;
        top: -19%;
        opacity: 0.3;
      }

    }
    @media only screen and (max-width: 760px) {
        padding: 55px 16px 120px 16px;
        .text-wrapper {
          .title {
            font-size: 56px;
            line-height: 78px;
            margin-bottom: 24px;
          }
          .subtitle {
            font-size: 16px;
            line-height: 32px;
            height: 32px;
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
              margin-top: 8px;
            }
          }
        }
        .contact-wrapper {
          position: relative;
          height: 176px;
          margin-top: 32px;
          .wrapper {
            position: absolute;
            top: 50%;
            right: auto;
            left: auto;
            width: 100%;
            text-align: center;
            margin-top: -64px;
          }
          .contact-item {
            width: 128px;
            height: 128px;
            border-radius: 16px;
            padding: 10px;
            display: inline-block;
            vertical-align: middle;
            .icon {
              position: absolute;
              top: 50%;
              left: 50%;
              width: 64px;
              height: 52px;
              margin-left: -32px;
              margin-top: -26px;
            }
            &+.contact-item {
              margin-left: 64px;
            }
          }
          .back-icon {
            position: absolute;
            left: 24px;
            top: -19%;
            opacity: 0.3;
          }

        }
      }
  }
  .action-button {
    display: inline-block;
    border-radius: 24px;
    //border: 1px solid #3b8070;
    text-decoration: none;
    padding: 10px 30px;
    &.primary {
      color: @white;
      background: @mainColor;
    }
    &.secondary {
      color: @white;
      background: @mainColor1;
    }

    .icon {
      margin-right: 12px;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
  .pd-r-36 {
    padding-right: 36px;
  }
  .pd-l-36 {
    padding-left: 36px;
  }
</style>
