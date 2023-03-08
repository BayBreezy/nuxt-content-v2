<template>
  <div>
    <main class="py-10">
      <div class="mx-auto lg:flex lg:justify-center lg:gap-10">
        <ContentDoc
          class="prose prose-zinc px-5 dark:prose-invert lg:prose-lg prose-headings:font-serif prose-headings:before:opacity-40 prose-h2:before:mr-2 prose-h2:before:content-['#'] prose-h3:before:mr-2 prose-h3:before:content-['#'] prose-a:decoration-primary prose-a:transition-colors hover:prose-a:text-primary lg:w-4/5 lg:px-0"
        >
          <!-- Not found slot -->
          <template #not-found>
            <NotFound>
              <template #title>
                <h1
                  class="mt-7 mb-5 bg-gradient-to-tr from-primary to-orange-700 bg-clip-text text-4xl font-bold text-transparent"
                >
                  Unable to locate your article
                </h1>
              </template>
            </NotFound>
          </template>
        </ContentDoc>
        <div class="sticky top-20 hidden self-start lg:block lg:w-1/5">
          <p class="mb-5 font-serif font-light">Table of contents</p>
          <ul>
            <li
              :class="[
                {
                  'pl-4': item.depth == 2,
                  'pl-6': item.depth == 3,
                  'pl-8': item.depth == 4,
                },
              ]"
              v-for="item in toc.links"
              :key="item.id"
            >
              <NuxtLink
                class="mb-1 inline-block text-sm hover:text-primary hover:underline dark:font-light"
                :to="`#${item.id}`"
              >
                {{ item.text }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <ArticleNav />
    </main>
  </div>
</template>

<script lang="ts" setup>
const { toc } = useContent();
</script>
