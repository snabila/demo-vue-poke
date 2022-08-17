<template>
  <div class="bg-gray-200 w-full min-h-screen">
    <div
      class="max-w-4xl mx-auto py-10 px-5 selection:bg-red-600 selection:text-white"
    >
      <Header />
      <router-view v-slot="{ Component }">
        <transition
          enter-active-class="duration-300 ease-out delay-300"
          enter-from-class="transform opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="duration-200 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="transform opacity-0"
        >
          <component :is="Component" :key="$route.path" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>
