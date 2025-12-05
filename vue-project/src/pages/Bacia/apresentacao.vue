<template>
  <section class="py-12 bg-[var(--wave-blue)]">
    <div class="max-w-[var(--max-width)] mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div class="md:col-span-2">
          <h2 class="text-3xl font-semibold mb-4">A Bacia</h2>
          <p class="text-gray-700 mb-4">Texto de apresentação sobre a bacia. Substitua pelo conteúdo do protótipo quando disponível.</p>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="p-4 bg-white rounded shadow">
              <div class="w-full h-40 bg-[var(--placeholder-gray)] rounded mb-3"></div>
              <h4 class="font-semibold">Destaque</h4>
              <p class="text-sm text-gray-500">Resumo curto.</p>
            </div>

            <div class="p-4 bg-white rounded shadow">
              <div class="w-full h-40 bg-[var(--placeholder-gray)] rounded mb-3"></div>
              <h4 class="font-semibold">Vídeo / Mídia</h4>
              <p class="text-sm text-gray-500">Player ou imagem aqui.</p>
            </div>
          </div>
        </div>

        <aside class="hidden md:block">
          <div class="p-4 bg-white rounded shadow">
            <h4 class="font-semibold mb-2">Links Rápidos</h4>
            <ul class="text-sm text-gray-600">
              <li class="mb-2"><a href="#ods" class="text-blue-600">ODS</a></li>
              <li class="mb-2"><a href="#comite" class="text-blue-600">Comitê</a></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>
