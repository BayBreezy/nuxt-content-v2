---
title: "How to Create Rainbow Text With TailwindCSS"
description: "This article outlines how to create Rainbow Text With TailwindCSS"
image:
  src: "https://tailwindcss.com/_next/static/media/social-card-large.a6e71726.jpg"
  alt: "TailwindCSS Image"
---

# How to Create Rainbow Text With TailwindCSS

Rainbow text is a fun and colorful way to add some personality to your website or application. In this article, we'll walk through the steps to create rainbow text with Tailwind CSS.

We are assuming that you already created a Nuxt3 application and have it running on your local machine. If you haven't done that, you can follow the steps in the [Nuxt 3 Installation](https://nuxt.com/docs/getting-started/installation). We are also assuming that you already added Tailwind CSS to your Nuxt 3 application. If you haven't done that, you can follow the steps in the [How to Add Tailwind CSS to a Nuxt 3 Application](/articles/tailwindcss/how-to-add-to-nuxt3).

## Step 1: Add classes to your HTML

```html
<h1
  class="bg-gradient-to-tr from-green-500 to-orange-700 bg-clip-text text-4xl font-bold text-transparent"
>
  Unable to locate your article
</h1>
```

## Things to note

- The <strong>bg-clip-text</strong> class is used to clip the background to the text.
- The <strong>text-transparent</strong> class is used to make the text transparent.
- The <strong>bg-gradient-to</strong>tr</strong> class is used to create a gradient from the top left to the bottom right.
- The <strong>from-green-500</strong> class is used to set the starting color of the gradient.
- The <strong>to-orange-700</strong> class is used to set the ending color of the gradient.
