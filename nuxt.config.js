export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Hey, I\'m Oleg 👋 Front-end web developer 👨🏻‍💻',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Special for SPA mode on Netlify.
  generate: {
    fallback: true
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/styles/styles.scss'
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
    }]
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/robots',
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
