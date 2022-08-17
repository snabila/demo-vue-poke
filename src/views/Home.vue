<template>
  <div>
    <Pagination
      @click-prev="nextPrev(this.prev)"
      @click-next="nextPrev(this.next)"
      :prev="this.prev"
      :next="this.next"
    />
    <Cards :pokes="pokes" />
    <Pagination
      @click-prev="nextPrev(this.prev)"
      @click-next="nextPrev(this.next)"
      :prev="this.prev"
      :next="this.next"
    />
  </div>
</template>

<script>
import Cards from "../components/Cards.vue";
import Pagination from "../components/Pagination.vue";
export default {
  components: {
    Cards,
    Pagination,
  },
  data() {
    return {
      pokes: [],
      next: null,
      prev: null,
      error: null,
    };
  },
  methods: {
    async fetchPoke(url) {
      const res = await fetch(url);
      const data = await res.json();

      return {
        id: data.id,
        name: data.name,
        sprite: data.sprites.front_default,
        types: data.types,
      };
    },
    async fetchPokes(url) {
      const res = await fetch(url);
      const data = await res.json();

      return data;
    },
    async nextPrev(url) {
      this.pokes = [];
      const data = await this.fetchPokes(url);

      this.next = data.next;
      this.prev = data.previous;

      for (const poke of data.results) {
        const pokeData = await this.fetchPoke(poke.url);
        this.pokes.push(pokeData);
      }

      console.log(url);
    },
  },
  async created() {
    this.pokes = [];
    const data = await this.fetchPokes("https://pokeapi.co/api/v2/pokemon/");

    this.next = data.next;
    this.prev = data.previous;

    for (const poke of data.results) {
      const pokeData = await this.fetchPoke(poke.url);
      this.pokes.push(pokeData);
    }
  },
};
</script>
