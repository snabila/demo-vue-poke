<template>
  <header class="text-center mb-10">
    <h1 class="text-4xl mb-4 font-bold">PokeAPI Vue + Tailwind</h1>
    <div class="flex justify-center space-x-4 text-red-600 font-semibold">
      <router-link to="/" active-class="text-black border-black border-b-4 pb-1"
        >Home</router-link
      >
      <router-link
        to="/about"
        active-class="text-black border-black border-b-4 pb-1"
        >About</router-link
      >
    </div>
  </header>
</template>
