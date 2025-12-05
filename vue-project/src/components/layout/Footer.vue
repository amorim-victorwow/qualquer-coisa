<template>
  <footer class="bg-[var(--footer-navy)] text-white mt-8">
    <div class="max-w-[var(--max-width)] mx-auto px-4 py-10">
      <div class="flex flex-col md:flex-row md:justify-between gap-6">
        <div>
          <div class="w-24 h-10 bg-[var(--placeholder-gray)] rounded mb-3"></div>
          <p class="text-sm text-gray-300">© {{ new Date().getFullYear() }} Projeto Bacia. Todos os direitos.</p>
        </div>

        <div class="flex gap-6 text-sm text-gray-300">
          <div>
            <h4 class="font-semibold text-white">Links</h4>
            <ul class="mt-2">
              <li><a href="#comite" class="text-gray-300">Comitê</a></li>
              <li><a href="#ods" class="text-gray-300">ODS</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-white">Contato</h4>
            <p class="mt-2 text-gray-300">contato@exemplo.org</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
</style>