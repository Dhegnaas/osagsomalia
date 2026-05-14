<template>
  <div class="max-w-6xl mx-auto p-10 font-sans text-center bg-white">
    <!-- Header Section -->
    <div class="mb-16">
      <h1 class="text-3xl font-extrabold text-[#3b6ea5] mb-2 tracking-wide">Legislation</h1>
      <div class="flex justify-center gap-1 mb-4">
        <span class="w-8 h-1 bg-[#4285f4]"></span>
        <span class="w-8 h-1 bg-[#fbbc05]"></span>
        <span class="w-8 h-1 bg-[#34a853]"></span>
      </div>
      <p class="text-gray-400 text-lg font-medium">
        Below you can find all the annual laws and regulations issued by the government.
      </p>
    </div>

    <!-- Grid Section -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-8">
      <div 
        v-for="yearData in legislationYears" 
        :key="yearData.year" 
        class="flex flex-col items-center group cursor-pointer"
      >
        <!-- Icon Circle with Exact Gradient and Shadow from image_b0985a.jpg -->
        <div class="w-24 h-24 rounded-full bg-gradient-to-b from-[#3a72a9] via-[#2d5c8a] to-[#1d3a31] flex items-center justify-center shadow-lg mb-5 transition-transform group-hover:scale-105">
          <!-- Calendar Icon -->
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 2V6" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 2V6" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 10H21" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <!-- Year Text -->
        <h2 class="text-3xl font-black text-[#444] mb-3 tracking-tighter">
          {{ yearData.year }}
        </h2>

        <!-- Document Badge - Exact Shape and Color -->
        <div class="bg-[#ffbd14] text-[#222] px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
          <!-- File Icon -->
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
            <polyline points="13 2 13 9 20 9"></polyline>
          </svg>
          <span class="text-[12px] font-bold">{{ yearData.count }} Documents</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LegislationComponent',
  data() {
    return {
      legislationYears: [
        { year: '2026', count: 5 },
        { year: '2025', count: 8 },
        { year: '2024', count: 14 },
        { year: '2023', count: 12 },
        { year: '2020', count: 12 },
        { year: '2019', count: 4 },
        { year: '2018', count: 2 },
        { year: '2017', count: 2 }
      ]
    }
  }
}
</script>