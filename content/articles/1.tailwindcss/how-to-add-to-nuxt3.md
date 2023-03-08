---
title: "How to Add Tailwind CSS to a Nuxt 3 Application"
description: "This article outlines how to add TailwindCSS to a Nuxt3 application"
image:
  src: "https://tailwindcss.com/_next/static/media/social-card-large.a6e71726.jpg"
  alt: "TailwindCSS Image"
---

# How to Add Tailwind CSS to a Nuxt 3 Application

In this article, we will be adding Tailwind CSS to a Nuxt 3 application. We are assuming that you already created a Nuxt3 application and have it running on your local machine. If you haven't done that, you can follow the steps in the [Nuxt 3 Installation](https://nuxt.com/docs/getting-started/installation).

## What is Tailwind CSS?

Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.

## Install Tailwind CSS

To install Tailwind CSS, we will be using the [NPM](https://www.npmjs.com/) package manager. To install Tailwind CSS, run the following command in your terminal:

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

This command installs Tailwind CSS, PostCSS, and Autoprefixer as development dependencies in your project.

## Initialize Tailwind CSS

To initialize Tailwind CSS, run the following command in your terminal:

```bash
npx tailwindcss init
```

This command creates a `tailwind.config.js` file in the root of your project. This file contains all of the configuration options for Tailwind CSS.

## Add PostCSS to Nuxt 3 config file

To add PostCSS to the Nuxt 3 config file, open the `nuxt.config.ts` file in your project and add the following code:

```js
// ...
 postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
// ...
```

## Create a CSS file

To create a CSS file, create a new file in the `assets` directory and name it `main.css`. In this file, add the following code:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Import the CSS file

To import the CSS file, open the `nuxt.config.ts` file in your project and add the following code:

```js
// ...
 css: ['~/assets/main.css'],
// ...
```

## Add Tailwind CSS to the HTML file

To add Tailwind CSS to the HTML file, open the `index.vue` file in the `pages` directory and add the following code:

```html
<template>
  <div class="container mx-auto">
    <h1 class="text-center text-4xl font-bold">Hello World</h1>
  </div>
</template>
```

## Run the application

To run the application, run the following command in your terminal:

```bash
npm run dev
```

This command runs the application on your local machine.

## Conclusion

In this article, we learned how to add Tailwind CSS to a Nuxt 3 application. We also learned what Tailwind CSS is and how to install it. We also learned how to initialize Tailwind CSS and how to add PostCSS to the Nuxt 3 config file. We also learned how to create a CSS file and how to import it. We also learned how to add Tailwind CSS to the HTML file and how to run the application.
