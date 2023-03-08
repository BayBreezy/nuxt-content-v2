const title = "Bloggy";
const shortTitle = "Bloggy";
const description = "A blog app built with Nuxt3 + TailwindCSS + Contentv2";
const image = "https://content2-nuxt3.behonbaker.com/icon.png";
const url = "https://content2-nuxt3.behonbaker.com/";
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
    "@kevinmarrec/nuxt-pwa",
  ],
  googleFonts: {
    families: {
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900],
      "DM Serif Text": [400],
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

  app: {
    head: {
      title,
      titleTemplate: `%s - ${title}`,
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "canonical",
          href: url,
        },
      ],
      meta: [
        {
          hid: "description",
          name: "description",
          content: description,
        },
        { property: "og:site_name", content: title },
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: url,
        },
        {
          hid: "og:image:secure_url",
          property: "og:image:secure_url",
          content: image,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: title,
        },
        {
          hid: "og:description",
          property: "og:description",
          content: description,
        },
        {
          hid: "og:image",
          property: "og:image",
          content: image,
        },
        //Twitter
        { name: "twitter:card", content: "summary_large_image" },
        {
          hid: "twitter:url",
          name: "twitter:url",
          content: url,
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: title,
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content: description,
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: image,
        },
      ],
    },
  },

  pwa: {
    meta: {
      name: title,
      author: "Behon Baker",
      theme_color: "#10b981",
      description: description,
    },
    manifest: {
      name: title,
      short_name: shortTitle,
      theme_color: "#10b981",
      description: description,
    },
  },
});
