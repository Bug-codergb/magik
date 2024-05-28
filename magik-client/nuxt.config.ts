export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    baseURL:"/"
  },
  devServer: {
    port:7877
  },
  nitro: {
    devProxy: {
      "/api": {
        target: "http://localhost:8888/",
        changeOrigin: true,
        prependPath: true,
      }
    },
    devServer: {
      watch:[]
    }
  },
  modules: [
    '@element-plus/nuxt',
    '@pinia/nuxt',
  ],
})
