// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/image",
    "nuxt-icon",
    "@nuxt/content",
  ],
  colorMode: {
    classSuffix: "",
  },
  content: {
    sources: ["docs"],
  },
  image: {},

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config.js",
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true,
  },

  imports: {
    dirs: ["composables"],
  },

  routeRules: {
    "/docs": {
      redirect: "/docs/intro",
    },
  },
});
