const title = "Bloggy";
const description = "A blog app built with Nuxt3 + TailwindCSS + Contentv2";

export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: ["~/assets/css/main.css"],

  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@nuxt/content",
    "nuxt-headlessui",
    "@vueuse/nuxt",
  ],
  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      "DM Serif Text": [400],
    },
  },

  runtimeConfig: {
    public: {
      SITE_NAME: process.env.SITE_NAME,
    },
  },

  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },

  app: {
    head: {
      title,
      titleTemplate: `%s - ${title}`,
    },
  },

  // healdes ui config
  headlessui: {
    prefix: "H",
  },

  // content config
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: "github-dark",
        // Theme used if `html.dark`
        dark: "one-dark-pro",
      },
    },
  },
});
