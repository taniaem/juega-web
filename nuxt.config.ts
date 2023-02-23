import vuetify from 'vite-plugin-vuetify';
//langs
import es from "./lang/es-MX.js";
import en from "./lang/en-US.js";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    //"vuetify/lib/styles/main.sass",
    "vuetify/styles",
    "@fortawesome/fontawesome-svg-core/styles.css",
    "~/assets/styles/main.scss",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    ssr: {
      noExternal: ["vuetify"], // add the vuetify vite plugin
    },
  },
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `defineStore`
          "defineStore", // import { defineStore } from 'pinia'
          // automatically imports `defineStore` as `definePiniaStore`
          ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
        ],
      },
    ],
    "@nuxtjs/i18n", // https://i18n.nuxtjs.org/
		async (options, nuxt) => {
			// @ts-ignore
			nuxt.hooks.hook("vite:extendConfig", (config) => config.plugins.push(vuetify()));
		},
    "nuxt-icon",
  ],
  i18n: {
    strategy: "prefix",
    locales: ["es", "en"],
    // locales: [
    //   {
    //     code: 'en',
    //     file: 'en-US.js'
    //   },
    //   {
    //     code: 'es',
    //     file: 'es-MX.js'
    //   },
    // ],
    // lazy: true,
    // langDir: 'lang/',
    defaultLocale: "es",
    vueI18n: {
      fallbackLocale: "es",
      messages: {
        es,
        en,
      },
    },
  },
});
