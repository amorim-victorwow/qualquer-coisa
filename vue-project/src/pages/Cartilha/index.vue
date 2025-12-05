<template>
  <section class="py-12 bg-[var(--wave-blue)]">
    <div class="max-w-[var(--max-width)] mx-auto px-4">
      <h2 class="text-2xl font-semibold mb-6">Cartilha</h2>

      <div class="bg-white rounded shadow p-6">
        <p class="text-gray-700 mb-4">Descrição da cartilha e acesso aos capítulos. Substitua pelo conteúdo final depois.</p>

        <ul class="space-y-3">
          <li v-for="i in 5" :key="i" class="p-4 border rounded flex items-center justify-between">
            <div>
              <h4 class="font-semibold">Capítulo {{ i }}</h4>
              <p class="text-sm text-gray-500">Resumo curto do capítulo.</p>
            </div>
            <button class="text-blue-600">Ver</button>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>
