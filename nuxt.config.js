export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Hey, I\'m Oleg 👋 Front-end web developer 👨🏻‍💻',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      
      // Reference for Drupal
      { name: 'generator', content: 'Drupal 10 (http://drupal.org)' },
      {
        hid: 'description',
        name: 'description',
        content: 'Front-end web developer (React, Vue, Drupal 7-9). Based in Kyiv, Ukraine. Social: @olegkruchay. Mail: okruchay@gmail.com'
      },
      {
        property: 'og:title',
        content: 'Hey, I\'m Oleg 👋 Front-end web developer 👨🏻‍💻'
      },
      {
        property: 'og:description',
        content: 'Front-end web developer (React, Vue, Drupal 7-9). Based in Kyiv, Ukraine. Social: @olegkruchay. Mail: okruchay@gmail.com'
      },
      {
        property: 'og:url',
        content: 'http://olegkruchay.com'
      },
      {
        property: 'og:url:secure_url',
        content: 'https://olegkruchay.com'
      },
      {
        property: 'og:site_name',
        content: 'Oleg Kruchay | Front-end web developer 👨🏻‍💻'
      },
      {
        property: 'og:image',
        content: 'https://olegkruchay.com/public/oleg.png'
      },
      {
        property: 'og:image:type',
        content: 'image/png'
      },
      {
        property: 'og:image:alt',
        content: 'Oleg Kruchay portrait'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '180x180', type: 'image/png', href: '/favicons/apple-touch-icon.png' },
      { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicons/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicons/site.webmanifest' },
      { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#5bbad5' },
    ]
  },

  // Special for SPA mode on Netlify.
  generate: {
    fallback: true
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/css/styles.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    ['@nuxtjs/google-fonts', {
      families: {
        Niconne: true,
        Righteous: true,
        'Patua+One': true,
        Comfortaa: {
          wght: [300, 400],
        },
      },
      display: 'swap',
      download: true,
    }],
    ['@nuxtjs/fontawesome', {
      component: 'fa',
      icons: {
        regular: [
          'faHeart',
          'faEnvelope'
        ],
        brands: [
          'faInstagram',
          'faFacebook',
          'faFacebookMessenger',
          'faCodepen',
          'faDrupal',
          'faLinkedin',
          'faTelegram',
          'faSkype',
          'faJs',
          'faNodeJs',
          'faReact',
          'faVuejs',
          'faDocker',
          'faSymfony',
          'faPhp',
          'faPiedPiperPp',
        ]
      }
    }]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/robots',
    'nuxt-clipboard2'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
