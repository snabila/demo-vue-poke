<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10 mt-5">
    <transition-group
      enter-active-class="duration-300 ease-out delay-300"
      enter-from-class="transform opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="transform opacity-0"
    >
      <Card v-for="poke in pokes" :key="poke.id" :poke="poke" />
    </transition-group>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  props: {
    pokes: Array,
  },
  components: {
    Card,
  },
};
</script>
