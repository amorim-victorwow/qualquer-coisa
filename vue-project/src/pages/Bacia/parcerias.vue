<template>
  <section class="py-12 bg-white">
    <div class="max-w-[var(--max-width)] mx-auto px-4">
      <h2 class="text-2xl font-semibold mb-6">Parcerias</h2>
      <p class="text-gray-600 mb-6">Lista de parcerias e apoiadores. Substitua por conteúdo real quando disponível.</p>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div v-for="i in 6" :key="i" class="p-4 bg-white rounded shadow">
          <div class="w-full h-36 bg-[var(--placeholder-gray)] rounded mb-4"></div>
          <h3 class="font-semibold">Parceiro {{ i }}</h3>
          <p class="text-sm text-gray-500">Descrição breve do parceiro.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>
