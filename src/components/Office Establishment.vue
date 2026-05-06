<template>
  <section class="py-16 bg-white font-sans">
    <div class="max-w-7xl mx-auto px-4">
      
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h2 class="text-[40px] font-black text-[#1e3a8a] mb-4 tracking-tight leading-tight">
          The Office Of The State Attorney General
        </h2>
        
        <!-- Xariiqyada Midabada leh (Decorative Lines) -->
        <div class="flex justify-center gap-1.5 mb-6">
          <span class="w-12 h-1.5 bg-[#4285f4] rounded-full"></span>
          <span class="w-12 h-1.5 bg-[#fbcc05] rounded-full"></span>
          <span class="w-12 h-1.5 bg-[#34a853] rounded-full"></span>
        </div>

        <p class="max-w-2xl mx-auto text-slate-500 text-lg font-medium opacity-80">
          Below you can find all the annual laws and regulations issued by the government.
        </p>
      </div>

      <!-- Main Establishment Card -->
      <div class="relative max-w-5xl mx-auto bg-white rounded-[40px] border border-slate-100 shadow-xl shadow-blue-50/50 p-8 md:p-14 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
        
        <!-- Left Border Gradient Effect -->
        <div class="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-500 via-yellow-400 to-green-600"></div>

        <!-- Left Side: Circular Icon -->
        <div class="relative flex-shrink-0">
          <div class="w-56 h-56 bg-[#7fb1f3] rounded-full flex items-center justify-center shadow-2xl shadow-blue-100">
            <!-- Building Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="h-28 w-28 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
        </div>

        <!-- Content Area -->
        <div class="flex-grow text-left relative">
          <!-- Floating Number (01) -->
          <div class="absolute -top-6 -right-6 w-16 h-16 bg-[#d2e3fc] rounded-full flex items-center justify-center text-[#4285f4] font-black text-2xl shadow-inner z-10">
            01
          </div>

          <!-- Title with Mini Icon -->
          <div class="flex items-center gap-3 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#4285f4]" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" />
            </svg>
            <h3 class="text-3xl font-black text-[#1a365d]">Office Establishment</h3>
          </div>

          <!-- Official Description -->
          <p class="text-slate-600 text-lg leading-relaxed mb-8 font-medium">
            The Office of the State Attorney General is an independent institution in accordance with Article 114 of the FGS Constitution, established by Law No. 18 issued on January 29, 1976.
          </p>

          <!-- Badges Section -->
          <div class="flex flex-wrap gap-3">
            <div class="flex items-center gap-2 bg-[#bcd6ff] text-[#1e3a8a] px-5 py-2 rounded-full text-sm font-bold shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              Est. 1976
            </div>
            <div class="flex items-center gap-2 bg-[#bcd6ff] text-[#1e3a8a] px-5 py-2 rounded-full text-sm font-bold shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
              </svg>
              Article 114
            </div>
            <div class="flex items-center gap-2 bg-[#bcd6ff] text-[#1e3a8a] px-5 py-2 rounded-full text-sm font-bold shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
              Law No. 18
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'EstablishmentSection'
}
</script>

<style scoped>
h2 {
  font-family: 'Inter', sans-serif;
}
</style>