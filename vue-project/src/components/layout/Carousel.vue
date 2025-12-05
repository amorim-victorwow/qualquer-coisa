<template>
  <div class="w-full bg-[var(--placeholder-gray)]">
    <div class="max-w-[var(--max-width)] mx-auto relative overflow-hidden h-64 md:h-80 lg:h-96">
      <!-- placeholder hero image -->
      <div class="absolute inset-0 placeholder"></div>
      <div class="absolute inset-0 flex items-center justify-center">
        <h1 class="text-white text-2xl md:text-4xl font-semibold drop-shadow">Título da Bacia</h1>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.placeholder { background-color: var(--placeholder-gray); }
</style>
