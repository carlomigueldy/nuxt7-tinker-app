module.exports = {
  // Nuxt modules
  modules: [
    'nuxt7',
    '@nuxtjs/pwa'
  ],

  // PWA manifest
  // https://github.com/nuxt-community/pwa-module
  manifest: {
    name: 'nuxt7-app',
    description: ''
  },

  // Framework7 Config
  framework7: {
    // app: {
    //   theme: 'ios'
    // },
    themeColor: '#ff2d55',
    // lightTheme: true,
    // darkTheme: false,
  },

  // Build configuration
  build: {
    // Extract CSS in a separated file
    extractCSS: true,

    // You can extend webpack config here
    extend (config) {
      // ...
    }
  },

  // Additional CSS configuration
  css: [
    'assets/app.css'
  ]
}
