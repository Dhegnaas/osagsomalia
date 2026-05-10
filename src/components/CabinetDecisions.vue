<template>
  <div class="min-h-screen bg-white py-12 px-4">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold text-[#2b5a91] mb-2 tracking-tight">Cabinet-Decisions</h2>
      <div class="flex justify-center gap-1 mb-4">
        <div class="h-[3px] w-8 bg-blue-500"></div>
        <div class="h-[3px] w-8 bg-yellow-400"></div>
        <div class="h-[3px] w-8 bg-green-700"></div>
      </div>
      <p class="text-gray-500 text-[14px] max-w-2xl mx-auto leading-relaxed">
        Below you can find all the annual laws and regulations issued by the government.
      </p>
    </div>

    <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-16">
      <div 
        v-for="item in decisions" 
        :key="item.year"
        class="flex flex-col items-center group cursor-pointer transition-all duration-300"
      >
        <div class="relative w-20 h-20 mb-6 transition-transform duration-300 group-hover:scale-110">
          <div class="w-full h-full rounded-full bg-gradient-to-b from-[#4182b5] to-[#1e4a6d] flex items-center justify-center shadow-lg border-2 border-white/10">
            <svg class="w-10 h-10 text-white opacity-95" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>

        <h3 class="text-2xl font-black text-gray-700 mb-3 tracking-tighter">
          {{ item.year }}
        </h3>

        <div class="bg-[#fbb016] hover:bg-[#e09e14] text-black px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm transition-colors duration-200">
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
          </svg>
          <span class="text-[11px] font-bold uppercase">{{ item.docs }} Documents</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CabinetDecisions',
  data() {
    return {
      decisions: [
        { year: '2026', docs: 7 },
        { year: '2025', docs: 15 },
        { year: '2024', docs: 11 },
        { year: '2023', docs: 12 },
        { year: '2020', docs: 1 },
        { year: '2019', docs: 3 },
        { year: '2018', docs: 5 },
        { year: '2016', docs: 2 }
      ]
    }
  }
}
</script>

<style scoped>
/* Wixii font ah oo dheeri ah waad ku dari kartaa halkan */
</style>