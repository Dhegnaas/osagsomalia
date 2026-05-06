<template>
  <section class="py-12 bg-white font-sans">
    <div class="max-w-7xl mx-auto px-4">
      
      <!-- Main Vision Card -->
      <div class="relative max-w-5xl mx-auto bg-white rounded-[40px] border border-slate-100 shadow-xl shadow-blue-50/50 p-8 md:p-14 flex flex-col md:flex-row items-center gap-12 overflow-hidden">
        
        <!-- Left Border Gradient Effect -->
        <div class="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-500 via-yellow-400 to-green-600"></div>

        <!-- Content Area (Left Side) -->
        <div class="flex-grow text-left order-2 md:order-1">
          <div class="flex items-center gap-3 mb-6">
            <div class="p-2 bg-blue-50 rounded-lg text-[#4285f4]">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 class="text-3xl font-black text-[#1a365d]">Our Vision</h3>
          </div>

          <p class="text-slate-600 text-lg leading-relaxed mb-8">
            To provide legal advisory and representation services to the Federal Government of Somalia based on progress and national interest in accordance with the laws and regulations of the country.
          </p>

          <!-- Key Points List -->
          <ul class="space-y-4">
            <li v-for="(point, index) in points" :key="index" class="flex items-center gap-3 text-slate-700 font-medium">
              <span class="flex-shrink-0 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
              </span>
              {{ point }}
            </li>
          </ul>
        </div>

        <!-- Right Side: Circular Icon & Floating Number -->
        <div class="relative flex-shrink-0 order-1 md:order-2">
          <!-- Floating Number (02) -->
          <div class="absolute -top-6 -right-6 w-16 h-16 bg-[#d2e3fc] rounded-full flex items-center justify-center text-[#4285f4] font-black text-2xl shadow-inner z-10">
            02
          </div>

          <!-- Large Vision Icon Container -->
          <div class="w-56 h-56 bg-gradient-to-br from-[#4285f4] to-[#1a365d] rounded-full flex items-center justify-center shadow-2xl shadow-blue-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-28 w-28 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'OurVision',
  data() {
    return {
      points: [
        'Excellence in legal services',
        'National interest priority',
        'Constitutional compliance'
      ]
    }
  }
}
</script>

<style scoped>
.shadow-xl {
  box-shadow: 0 25px 50px -12px rgba(66, 133, 244, 0.08);
}
</style>