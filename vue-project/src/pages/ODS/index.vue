<template>
  <section class="py-12 bg-[var(--wave-blue)]">
    <div class="max-w-[var(--max-width)] mx-auto px-4">
      <h2 class="text-2xl font-semibold text-center mb-8">Objetivos de Desenvolvimento Sustentável</h2>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <div v-for="n in 17" :key="n" class="p-4 rounded shadow-sm flex items-center justify-center text-white"
             :class="tileColor(n)">
          <div class="text-center">
            <div class="text-xl font-bold">ODS {{ n }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const tileColors = [
  'bg-red-500','bg-yellow-500','bg-green-500','bg-teal-500','bg-orange-500',
  'bg-pink-500','bg-amber-500','bg-rose-500','bg-lime-600','bg-cyan-500',
  'bg-indigo-500','bg-violet-500','bg-emerald-500','bg-sky-500','bg-fuchsia-500',
  'bg-slate-700','bg-gray-600'
];

function tileColor(index){
  return tileColors[(index-1) % tileColors.length] + ' rounded-lg h-28 flex items-center justify-center';
}
</script>

<style scoped>
/* ajustes finos para imitar protótipo */
</style>