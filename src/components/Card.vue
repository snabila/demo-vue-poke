<template>
  <div
    class="bg-white px-3 py-6 text-center rounded flex flex-col items-center drop-shadow-md"
  >
    <span class="text-xs bg-slate-200 text-slate-700 py-1 px-2 mb-2"
      >No. {{ poke.id }}</span
    >
    <!-- <p class="text-sm mb-2">Gen 3</p> -->
    <img :src="poke.sprite" :alt="poke.name" class="h-full" />

    <h2 class="mb-3">
      {{ poke.name[0].toUpperCase() + poke.name.substring(1) }}
    </h2>
    <div class="text-sm flex space-x-2">
      <PokeType
        v-for="type in poke.types"
        :key="type.slot"
        :type="type.type.name"
      />
    </div>
  </div>
</template>

<script>
import PokeType from "./PokeType.vue";
export default {
  props: {
    poke: Object,
  },
  components: {
    PokeType,
  },
};
</script>
