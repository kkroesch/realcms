// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  srcDir: "app/",

  vue: {
    compilerOptions: {
      // Wichtig: Alle Tags, die mit 'sd-' beginnen, sind Web Components
      isCustomElement: (tag) => tag.startsWith("sd-"),
    },
  },

  css: ["~/assets/css/main.css"],

  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
});
