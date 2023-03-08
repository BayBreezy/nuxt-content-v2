import type { RouterConfig } from "@nuxt/schema";

// https://router.vuejs.org/api/interfaces/routeroptions.html
export default <RouterConfig>{
  scrollBehavior(to, from, savedPosition) {
    // If we have a saved position, use it
    if (savedPosition) {
      return savedPosition;
    }
    // smooth scroll to hash
    if (to.hash) {
      return { el: to.hash, behavior: "smooth", top: 80 };
    }
    // Otherwise, return to top
    return { top: 0, left: 0 };
  },
};
