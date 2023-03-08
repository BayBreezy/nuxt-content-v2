<template>
  <div>
    <main class="pb-10">
      <section
        class="mx-auto w-full max-w-6xl px-5 md:w-2/3 lg:w-1/2 lg:px-0 lg:pt-28"
      >
        <h1
          class="heading mt-20 text-center text-4xl font-black leading-snug opacity-0 lg:mt-0 lg:text-6xl"
        >
          Come & learn the world of coding with us
        </h1>
        <p
          class="sub mt-5 text-center text-lg opacity-0 dark:text-zinc-400 lg:text-xl"
        >
          We blog about coding stuff etc.. stick arround, you might learn
          something
        </p>
      </section>

      <section
        class="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-7 px-5 md:grid-cols-2 lg:mt-32"
      >
        <NuxtLink
          :to="a._path"
          v-for="a in articles"
          :key="a._id"
          class="card group"
        >
          <img
            :title="a.title"
            height="200"
            width="100%"
            class="h-[200px] w-full rounded-lg object-cover shadow transition-transform group-hover:scale-105"
            :src="a.image.src"
            :alt="a.image.alt"
          />
          <div class="mt-4">
            <h2 class="text-lg font-bold group-hover:underline">
              {{ a.title }}
            </h2>
            <p
              class="mt-2 text-sm text-zinc-500 line-clamp-2 dark:text-zinc-400"
            >
              {{ a.description }}
            </p>
          </div>
        </NuxtLink>
      </section>
    </main>
  </div>
</template>

<script lang="ts" setup>
import { gsap } from "gsap";

const { data: articles } = await useAsyncData("content", () =>
  queryContent("articles").find(),
);
onMounted(() => {
  const tl = gsap.timeline();
  setTimeout(() => {
    tl.fromTo(
      ".heading",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.5 },
    ).fromTo(
      ".sub",
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.5 },
    );

    gsap.from(".card", {
      y: 20,
      delay: 1,
      opacity: 0,
      stagger: 0.2,
    });
  }, 350);
});
</script>
