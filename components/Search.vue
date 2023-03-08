<template>
  <div>
    <button @click="openModal()" class="btn-icon">
      <Icon name="heroicons:magnifying-glass" />
    </button>
    <HTransitionRoot appear :show="isOpen" as="template">
      <HDialog as="div" @close="closeModal" class="relative z-50">
        <HTransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/80 backdrop-blur" />
        </HTransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4">
            <HTransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <HDialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle text-zinc-800 shadow-xl transition-all dark:bg-zinc-900 dark:text-zinc-50"
              >
                <HDialogTitle as="h3" class="text-lg font-medium leading-6">
                  Search for article
                </HDialogTitle>
                <div class="mt-7">
                  <input
                    v-model="search"
                    type="search"
                    name="search"
                    id="search"
                    class="block w-full rounded-lg border bg-transparent px-4 py-3 outline-none focus:border-primary focus:ring-primary"
                  />
                </div>

                <div v-if="articles.length" class="mt-3">
                  <small class="mb-5 inline-block opacity-60">Articles</small>
                  <div class="mb-3" v-for="a in articles" :key="a.title">
                    <NuxtLink
                      class="flex items-start gap-5"
                      @click="
                        closeModal();
                        search = '';
                      "
                      :to="a._path"
                      ><img
                        height="80px"
                        width="80px"
                        class="h-20 w-20 rounded-lg object-cover"
                        :src="a.image.src"
                        :alt="a.image.alt"
                      />
                      <div>
                        <h3 class="font-medium">{{ a.title }}</h3>
                        <p class="mt-1 text-sm opacity-60 line-clamp-1">
                          {{ a.description }}
                        </p>
                      </div>
                    </NuxtLink>
                  </div>
                </div>
              </HDialogPanel>
            </HTransitionChild>
          </div>
        </div>
      </HDialog>
    </HTransitionRoot>
  </div>
</template>

<script setup lang="ts">
import { ParsedContent } from "@nuxt/content/dist/runtime/types";
import { useFuse } from "@vueuse/integrations/useFuse";

const isOpen = ref(false);

function closeModal() {
  isOpen.value = false;
}
function openModal() {
  isOpen.value = true;
}

const search = ref("");

const articles = ref<ParsedContent[]>([]);

watchEffect(async () => {
  if (search.value.length > 1) {
    queryContent("articles")
      .find()
      .then((a) => {
        let { results } = useFuse(search, a, {
          matchAllWhenSearchEmpty: false,
          resultLimit: 10,
          fuseOptions: {
            keys: ["title", "description"],
          },
        });
        articles.value = results.value.map((r) => r.item);
      });
  } else {
    articles.value = [];
  }
});
</script>

<style scoped></style>
