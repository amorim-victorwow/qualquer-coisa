<template>
  <section class="py-12 bg-[var(--wave-blue)]">
    <div class="max-w-[var(--max-width)] mx-auto px-4">
      <h2 class="text-2xl font-semibold text-center mb-8">Sobre o Comitê</h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div v-for="i in 6" :key="i" class="bg-white rounded shadow p-6 text-center">
          <div class="w-28 h-28 bg-[var(--placeholder-gray)] rounded-full mx-auto mb-4"></div>
          <h3 class="font-semibold">Nome {{ i }}</h3>
          <p class="text-sm text-gray-500">Breve bio / cargo</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>
