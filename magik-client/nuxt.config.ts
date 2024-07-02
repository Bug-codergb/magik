export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {},
  devServer: {
    port: 7877
  },
  // nitro: {
  //   devProxy: {
  //     "/api": {
  //       target: "http://localhost:8888/",
  //       changeOrigin: true,
  //       prependPath: true
  //     }
  //   },
  //   routeRules: {
  //     "/server/**": {
  //       proxy: "http://localhost:8888/**"
  //     }
  //   }
  // },
  modules: ["@element-plus/nuxt", "@pinia/nuxt", "@vueuse/nuxt"]
});
