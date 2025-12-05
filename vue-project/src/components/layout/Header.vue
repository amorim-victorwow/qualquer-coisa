<template>
  <header class="w-full bg-[var(--brand-blue)] text-white shadow">
    <div class="max-w-[var(--max-width)] mx-auto flex items-center justify-between py-4 px-4">
      <a class="flex items-center gap-3" href="#home">
        <div class="w-12 h-12 bg-[var(--placeholder-gray)] rounded-md flex items-center justify-center">
          <!-- placeholder de logo -->
          <span class="text-xs text-gray-700">LOGO</span>
        </div>
        <span class="font-semibold text-lg">Projeto Bacia</span>
      </a>

      <nav class="hidden md:flex gap-6 items-center text-sm">
        <a href="#home" class="hover:underline">Início</a>
        <a href="#comite" class="hover:underline">Comitê</a>
        <a href="#ods" class="hover:underline">ODS</a>
        <a href="#midias" class="hover:underline">Mídias</a>
        <a href="#cartilha" class="hover:underline">Cartilha</a>
        <a href="#jogos" class="hover:underline">Jogos</a>
        <a href="#contato" class="hover:underline">Contato</a>
      </nav>

      <button @click="open = !open" class="md:hidden p-2">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!open" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <div v-if="open" class="md:hidden bg-[var(--brand-blue)] px-4 pb-4">
      <a href="#home" class="block py-2">Início</a>
      <a href="#comite" class="block py-2">Comitê</a>
      <a href="#ods" class="block py-2">ODS</a>
      <a href="#midias" class="block py-2">Mídias</a>
      <a href="#cartilha" class="block py-2">Cartilha</a>
      <a href="#jogos" class="block py-2">Jogos</a>
      <a href="#contato" class="block py-2">Contato</a>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';
const open = ref(false);
</script>

<style scoped>
/* finos ajustes aqui se necessário */
</style>