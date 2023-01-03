// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      apikey: ""
    }
  },
  app:{
    head:{
      script:[
        {
          src:"https://kit.fontawesome.com/9f3463b573.js",
          crossorigin:"anonymous"
        }
      ]
    }
  }
})