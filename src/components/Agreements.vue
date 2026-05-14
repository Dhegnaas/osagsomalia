<template>
  <div class="min-h-screen bg-white py-16 px-4 font-sans">
    <!-- Header Section -->
    <div class="text-center mb-16">
      <h2 class="text-[32px] font-extrabold text-[#3b6ea5] mb-2 tracking-tight">{{ title }}</h2>
      <div class="flex justify-center gap-1.5 mb-6">
        <div class="h-1 w-8 bg-[#4285f4]"></div>
        <div class="h-1 w-8 bg-[#fbbc05]"></div>
        <div class="h-1 w-8 bg-[#34a853]"></div>
      </div>
      <p class="text-gray-400 text-[15px] max-w-2xl mx-auto font-medium">
        {{ description }}
      </p>
    </div>

    <!-- Grid Section -->
    <div class="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-20 justify-items-center">
      <div 
        v-for="item in items" 
        :key="item.year"
        class="flex flex-col items-center group cursor-pointer transition-transform duration-300 hover:scale-105"
      >
        <!-- Icon Circle with Exact Gradient from image_b091b1.jpg -->
        <div class="w-[90px] h-[90px] rounded-full bg-gradient-to-b from-[#3a72a9] via-[#2d5c8a] to-[#1d3a31] flex items-center justify-center shadow-lg mb-5 relative">
          <!-- Bold Calendar Icon -->
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M16 2V6" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8 2V6" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3 10H21" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <!-- Year Text - More Bold -->
        <h3 class="text-[32px] font-[900] text-[#444] mb-3 tracking-tighter">
          {{ item.year }}
        </h3>

        <!-- Document Badge - Exact Yellow and Pill Shape -->
        <div class="bg-[#ffbd14] text-[#222] px-4 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
          <!-- Simple File Icon -->
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
            <polyline points="13 2 13 9 20 9"></polyline>
          </svg>
          <span class="text-[12px] font-bold">{{ item.count }} Documents</span>
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