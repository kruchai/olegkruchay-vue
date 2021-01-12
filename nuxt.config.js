import { sortRoutes } from '@nuxt/utils'

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s | olegkruchay.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      // Reference for Drupal
      { name: 'generator', content: 'Drupal 10 (http://drupal.org)' },
      {
        name: 'keywords',
        content:
          'oleg kruchay, oleh kruchai, олег кручай, fe, frontend, front-end, dev, developer, github, web-developer, ukraine, drupal, drupal8, drupal9',
      },
      { name: 'author', content: 'Oleg Kruchay' },
      {
        hid: 'description',
        name: 'description',
        // eslint-disable-next-line max-len
        content:
          'Front-end web developer (React, Vue, Drupal 7-9). Based in Kyiv, Ukraine. Social: @olegkruchay. Mail: okruchay@gmail.com',
      },
      {
        property: 'og:title',
        content: "Hey, I'm Oleg 👋 Front-end web developer 👨🏻‍💻",
      },
      {
        property: 'og:description',
        // eslint-disable-next-line max-len
        content:
          'Front-end web developer (React, Vue, Drupal 7-9). Based in Kyiv, Ukraine. Social: @olegkruchay. Mail: okruchay@gmail.com',
      },
      {
        property: 'og:url',
        content: 'http://olegkruchay.com',
      },
      {
        property: 'og:url:secure_url',
        content: 'https://olegkruchay.com',
      },
      {
        property: 'og:site_name',
        content: 'Oleg Kruchay | Front-end web developer 👨🏻‍💻',
      },
      {
        property: 'og:image',
        content: 'https://olegkruchay.com/public/oleg.png',
      },
      {
        property: 'og:image:type',
        content: 'image/png',
      },
      {
        property: 'og:image:alt',
        content: 'Oleg Kruchay portrait',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicons/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        type: 'image/png',
        href: '/favicons/apple-touch-icon.png',
      },
      { rel: 'icon', sizes: '32x32', type: 'image/png', href: '/favicons/favicon-32x32.png' },
      { rel: 'icon', sizes: '16x16', type: 'image/png', href: '/favicons/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicons/site.webmanifest' },
      { rel: 'mask-icon', href: '/favicons/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
  },

  // Special for SPA mode on Netlify.
  generate: {
    fallback: true,
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['@/assets/css/styles.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ['@/plugins/vue-lazysizes.client.js'],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/google-analytics',
    [
      '@nuxtjs/fontawesome',
      {
        component: 'fa',
        icons: {
          regular: ['faHeart', 'faEnvelope'],
          brands: [
            'faInstagram',
            'faFacebook',
            'faFacebookMessenger',
            'faCodepen',
            'faDrupal',
            'faLinkedin',
            'faTelegram',
            'faSkype',
            'faGithub',
            'faJs',
            'faNodeJs',
            'faReact',
            'faVuejs',
            'faDocker',
            'faSymfony',
            'faPhp',
            'faPiedPiperPp',
            'faCreativeCommons',
            'faCreativeCommonsBy',
            'faCreativeCommonsSa',
          ],
        },
      },
    ],
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    },
  },

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          Niconne: true,
          Righteous: true,
          'Patua+One': true,
          Comfortaa: {
            wght: [300, 400, 700],
          },
        },
        display: 'swap',
        download: true,
      },
    ],
    'nuxt-webfontloader',
    '@nuxtjs/robots',
    'nuxt-clipboard2',
    '@aceforth/nuxt-optimized-images',
    '@nuxtjs/svg',
  ],

  webfontloader: {
    google: {
      families: [
        'Niconne&display=swap',
        'Righteous&display=swap',
        'Patua+One&display=swap',
        'Comfortaa:300,400,700&display=swap',
      ],
    },
  },

  optimizedImages: {
    inlineImageLimit: -1,
    handleImages: ['jpeg', 'png', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 85,
    },
    optipng: false,
    pngquant: {
      speed: 7,
      quality: [0.65, 0.8],
    },
    webp: {
      quality: 85,
    },
  },

  googleAnalytics: {
    id: 'UA-131497403-1',
  },

  pageTransition: 'intro',

  router: {
    extendRoutes(routes) {
      // Routes
      routes.push({
        path: '/admin',
        redirect: '/about',
      })
      routes.push({
        path: '/user',
        redirect: '/about',
      })
      routes.push({
        path: '/node/*',
        redirect: '/node',
      })

      // Sorting routes
      sortRoutes(routes)
    },
  },
}
