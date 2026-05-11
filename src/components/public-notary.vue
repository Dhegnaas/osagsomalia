<template>
  <section class="py-16 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-[#2b6cb0] mb-2">Public-Notary</h2>
        <div class="flex justify-center gap-1 mb-4">
          <div class="w-8 h-1 bg-blue-500 rounded-full"></div>
          <div class="w-8 h-1 bg-yellow-400 rounded-full"></div>
          <div class="w-8 h-1 bg-green-600 rounded-full"></div>
        </div>
        <p class="text-gray-500 text-lg max-w-2xl mx-auto">
          Below you can find all the annual laws and regulations issued by the government.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 gap-x-8">
        <div 
          v-for="item in notaryData" 
          :key="item.year" 
          class="flex flex-col items-center group cursor-pointer"
        >
          <div class="relative w-24 h-24 bg-gradient-to-b from-[#3182ce] to-[#2c5282] rounded-full flex items-center justify-center shadow-xl mb-5 transition-transform duration-300 group-hover:scale-110">
            <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>

          <h3 class="text-3xl font-extrabold text-slate-800 mb-4">{{ item.year }}</h3>

          <div class="bg-[#ffb300] hover:bg-[#ffa000] text-black px-5 py-2 rounded-full flex items-center gap-2 shadow-md transition-all">
            <svg class="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
            </svg>
            <span class="text-sm font-bold">{{ item.docs }} Documents</span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'PublicNotary',
  data() {
    return {
      // Xogta halkan ayaad ku dari kartaa ama ka saari kartaa
      notaryData: [
        { year: '2023', docs: 1 },
        { year: '2022', docs: 1 },
        { year: '2018', docs: 1 },
        { year: '2016', docs: 1 },
        { year: '2015', docs: 1 },
        { year: '2013', docs: 1 },
        { year: '1989', docs: 1 },
        { year: '1988', docs: 1 },
      ]
    }
  }
}
</script>

<style scoped>
/* Wixii smooth effect ah Tailwind ayaa qabanaya, laakiin halkan ayaad wax kasta ku dari kartaa */
</style>