<template>
  <div class="mx-auto mt-20 max-w-6xl px-5 md:px-0">
    <div class="mb-10 grid max-w-3xl grid-cols-2 gap-5">
      <NextPrev v-if="prev" :article="prev" title="Previous article" />
      <NextPrev v-if="next" :article="next" title="Next article" />
    </div>
    <h1 class="mb-10 font-serif text-2xl">Check out our other articles</h1>
    <div class="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      <template v-for="(article, i) in q2" :key="i">
        <NuxtLink
          v-if="article && article._path"
          :to="article._path"
          class="group"
        >
          <img
            class="h-[120px] w-full rounded-lg object-cover"
            :src="article.image.src"
            :alt="article.image.alt"
          />
          <h2
            class="mt-5 text-lg font-semibold decoration-primary group-hover:underline"
          >
            {{ article.title }}
          </h2>
          <p class="mt-2 text-sm line-clamp-2">{{ article.description }}</p>
        </NuxtLink>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const { prev, next } = useContent();

const q2 = await queryContent().limit(3).findSurround(route.path, {
  after: 2,
  before: 2,
});
</script>

<style scoped></style>
