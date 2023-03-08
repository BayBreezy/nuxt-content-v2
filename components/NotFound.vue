<template>
  <section class="flex min-h-[60vh] items-center justify-center">
    <div class="text-center">
      <slot name="media">
        <Icon class="opacity-60" size="48" name="heroicons:newspaper" />
      </slot>
      <slot name="title">
        <h1 class="mt-10 mb-5 text-center text-4xl font-bold">Not Found</h1>
      </slot>
      <slot name="text">
        <p class="text-lg opacity-60">We were unable to locate this article</p>
      </slot>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
