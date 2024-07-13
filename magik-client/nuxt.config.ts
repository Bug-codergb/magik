export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {},
  devServer: {
    port: 7877
  },
  nitro: {
    routeRules: {
      "/server/**": {
        proxy: "http://localhost:8888/**"
      }
    }
  },
  modules: ["@element-plus/nuxt", "@pinia/nuxt", "@vueuse/nuxt"],
  components: [
    {
      path: "~/components",
      pathPrefix: false
    },
    {
      path: "~/element",
      pathPrefix: false
    }
  ]
});
