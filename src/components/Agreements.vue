<template>
  <div class="min-h-screen bg-[#f8fafc] py-16 px-4 font-sans">
    <div class="text-center mb-16">
      <h2 class="text-3xl font-bold text-[#1e3a8a] mb-2">{{ title }}</h2>
      <div class="flex justify-center gap-1 mb-4">
        <div class="h-1 w-8 bg-blue-500 rounded-full"></div>
        <div class="h-1 w-8 bg-yellow-400 rounded-full"></div>
        <div class="h-1 w-8 bg-green-700 rounded-full"></div>
      </div>
      <p class="text-gray-500 text-sm max-w-2xl mx-auto">
        {{ description }}
      </p>
    </div>

    <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-16 justify-items-center">
      <div 
        v-for="item in items" 
        :key="item.year"
        class="flex flex-col items-center group cursor-pointer transition-all duration-300 transform hover:-translate-y-2"
      >
        <div class="w-20 h-20 rounded-full bg-gradient-to-b from-[#4facfe] to-[#0061ff] flex items-center justify-center shadow-lg mb-5 relative overflow-hidden">
          <svg class="w-10 h-10 text-white opacity-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <div class="absolute inset-0 rounded-full shadow-inner pointer-events-none"></div>
        </div>

        <h3 class="text-2xl font-extrabold text-gray-700 mb-3 tracking-wide">
          {{ item.year }}
        </h3>

        <div class="bg-[#fbbf24] hover:bg-[#f59e0b] text-black text-[11px] font-bold px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm transition-colors">
          <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
          </svg>
          {{ item.count }} Documents
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocumentGrid',
  props: {
    title: {
      type: String,
      default: 'Agreements'
    },
    description: {
      type: String,
      default: 'Below you can find all the annual laws and regulations issued by the government.'
    },
    items: {
      type: Array,
      default: () => [
        { year: '2020', count: 4 },
        { year: '2019', count: 2 },
        { year: '2017', count: 1 },
        { year: '2016', count: 1 },
        { year: '2015', count: 1 },
        { year: '2014', count: 1 },
        { year: '1988', count: 1 }
      ]
    }
  }
}
</script>

<style scoped>
/* Wixii dheeri ah oo CSS ah halkan geli, inkastoo Tailwind uu ku filan yahay */
</style>