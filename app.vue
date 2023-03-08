<template>
  <div>
    <Nav />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: "dark:bg-zinc-900 dark:text-zinc-50 text-zinc-800",
  },
});

const { isDark, toggleDark } = useTheme();
</script>
