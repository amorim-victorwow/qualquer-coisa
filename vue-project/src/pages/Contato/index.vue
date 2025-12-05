<template>
  <section class="py-12 bg-white">
    <div class="max-w-[var(--max-width)] mx-auto px-4">
      <h2 class="text-2xl font-semibold mb-6">Contato</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <form class="bg-white p-6 rounded shadow">
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1">Nome</label>
            <input class="w-full border rounded px-3 py-2" />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1">Email</label>
            <input class="w-full border rounded px-3 py-2" />
          </div>
          <div class="mb-4">
            <label class="block text-sm font-medium mb-1">Mensagem</label>
            <textarea class="w-full border rounded px-3 py-2" rows="5"></textarea>
          </div>
          <button class="bg-[var(--brand-blue)] text-white px-4 py-2 rounded">Enviar</button>
        </form>

        <div class="p-6 bg-white rounded shadow">
          <h4 class="font-semibold mb-3">Informações</h4>
          <p class="text-sm text-gray-600">Endereço, telefone e outras informações de contato.</p>
          <div class="w-full h-40 bg-[var(--placeholder-gray)] rounded mt-4"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>
