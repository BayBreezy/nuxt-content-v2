<template>
  <NuxtLink
    :to="article._path"
    class="rounded-lg border p-4 transition-all hover:border-primary active:scale-95 dark:border-zinc-700/40 dark:hover:border-primary"
  >
    <p class="mb-1 text-sm opacity-60">{{ title }}</p>
    <p class="font-semibold">{{ article.title }}</p>
  </NuxtLink>
</template>

<script setup lang="ts">
const props = defineProps<{
  article: any;
  title: string;
}>();
</script>

<style scoped></style>
