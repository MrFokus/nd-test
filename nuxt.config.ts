// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr:false,
  modules: ['nuxt-svgo','@vueuse/nuxt','@pinia/nuxt'],
  css: ['~/assets/style/main.scss'],
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL??'/',
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/style/variables.scss" as *;'
        }
      }
    }
  },
  runtimeConfig: {
    public: {
      apiUrl: process.env.API_URL ?? "",
    },
  },
  svgo: {
    defaultImport: "url",
    svgoConfig: {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              cleanupAttrs:false,
              removeDoctype: false,
              removeViewBox: false,
            },
          },
        },
      ],
    }
  },
})
