<template>
  <header
    class="sticky top-0 z-20 bg-zinc-50/90 px-5 backdrop-blur-md dark:border-zinc-700 dark:bg-zinc-800"
  >
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between">
      <NuxtLink class="text-xl font-semibold" to="/">Bloggy</NuxtLink>
      <div class="flex items-center gap-5">
        <Search />
        <button @click="toggleDark()" class="btn-icon">
          <Icon name="ph:moon" size="18" />
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const { isDark, toggleDark } = useTheme();
</script>
