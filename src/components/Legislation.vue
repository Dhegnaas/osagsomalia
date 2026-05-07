<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold text-blue-900 mb-2 tracking-tight">Legislation</h2>
      <div class="flex justify-center mb-4">
        <div class="h-1 w-8 bg-blue-500"></div>
        <div class="h-1 w-8 bg-yellow-400"></div>
        <div class="h-1 w-8 bg-green-600"></div>
      </div>
      <p class="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
        Below you can find all the annual laws and regulations issued by the government.
      </p>
    </div>

    <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-8">
      <div 
        v-for="item in legislationData" 
        :key="item.year"
        class="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:-translate-y-2"
      >
        <div class="relative mb-6">
          <div class="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-800 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-blue-200 transition-shadow">
            <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        <h3 class="text-2xl font-black text-gray-700 mb-3 tracking-wider">{{ item.year }}</h3>

        <div class="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-1.5 rounded-full flex items-center space-x-2 shadow-sm transition-colors">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414L13.586 3H9z" />
            <path d="M3 8V7a1 1 0 011-1h2v10H5a2 2 0 01-2-2v-4z" />
          </svg>
          <span class="text-xs font-bold uppercase tracking-tight">{{ item.docs }} Documents</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LegislationGrid',
  data() {
    return {
      // Xogta sanadaha iyo dukumintiyada
      legislationData: [
        { year: 2026, docs: 5 },
        { year: 2025, docs: 8 },
        { year: 2024, docs: 14 },
        { year: 2023, docs: 12 },
        { year: 2020, docs: 12 },
        { year: 2019, docs: 4 },
        { year: 2018, docs: 2 },
        { year: 2017, docs: 2 }
      ]
    }
  }
}
</script>

<style scoped>
/* Waxaad halkan ku dari kartaa font gaar ah haddii aad u baahato */
</style>