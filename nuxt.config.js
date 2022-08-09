export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Gricd-assesment',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    script: [
      {
        src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA5PVxIof2Tpz89xxQQcwJyR7bisgEAb98&libraries=places',
        // src: 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=initialize',
        // src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA5PVxIof2Tpz89xxQQcwJyR7bisgEAb98&callback=showUserLocationOnMap()',
        src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyA5PVxIof2Tpz89xxQQcwJyR7bisgEAb98',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css',
      },
    ],
  },
  //Customize the progress-bar color
  loading: { color: '#ff9f00', height: '3px', duration: 5000 },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  ssr: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxt/postcss8',
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
}
