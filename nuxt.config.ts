// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/styles/main.css"],
  modules: ["@nuxt/image", "@nuxt/ui", "@nuxtjs/i18n"],
  i18n: {
    locales: [
      { code: "en", iso: "en-US", name: "English", file: "en.json" },
      {
        code: "uk",
        iso: "uk-UK",
        name: "Українська",
        file: "uk.json",
      },
    ],
    defaultLocale: "en",
    strategy: "prefix_except_default",
    lazy: true,
    langDir: "locales/",
    vueI18n: "@/i18n/i18n.config.ts",
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
