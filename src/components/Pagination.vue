<template>
  <div class="flex justify-between text-slate-600">
    <button @click="clickPrev()" :disabled="prevDisabled">&lt; Previous</button>
    <button @click="clickNext()" :disabled="nextDisabled">Next &gt;</button>
  </div>
</template>

<script>
export default {
  props: {
    prev: String,
    next: String,
  },
  methods: {
    clickPrev() {
      this.$emit("click-prev");
    },
    clickNext() {
      this.$emit("click-next");
    },
  },
  computed: {
    prevDisabled() {
      if (this.prev == null) {
        return true;
      }
      return false;
    },
    nextDisabled() {
      if (this.next == null) {
        return true;
      }
      return false;
    },
  },
};
</script>
