export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'veian-offical',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: '/js/innersvg.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    //配置全局 css
    '~/assets/style/global.less',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
  ],
  styleResources:{
    less:'./assets/style/variable.less'
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      babelrc: false,
      cacheDirectory: undefined,
      // presets: ['@nuxt/babel-preset-app'],
      // "presets":["es2015"],
      // transpile:[/^sunshine-layout/,/^sunshine-ui/,/^tree-table-vue/,/^view-design/],  //转换解析第三方包
      plugins: ['@babel/plugin-syntax-dynamic-import', [
        '@babel/plugin-transform-runtime',
        {
          'corejs': false,
          'helpers': true,
          'regenerator': true,
          'useESModules': false
        }
      ]],
      'configFile': false,
    },

  },
  alias: {

  }
}
