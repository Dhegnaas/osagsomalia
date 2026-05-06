<template>
  <section class="py-12 bg-white font-sans">
    <div class="max-w-7xl mx-auto px-4">
      
      <!-- Main Mission Card -->
      <div class="relative max-w-5xl mx-auto bg-white rounded-[40px] border border-slate-100 shadow-xl shadow-blue-50/50 p-8 md:p-14 flex flex-col md:flex-row items-start gap-12 overflow-hidden">
        
        <!-- Left Border Gradient Effect -->
        <div class="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-500 via-yellow-400 to-green-600"></div>

        <!-- Left Side: Circular Icon -->
        <div class="relative flex-shrink-0 mt-4">
          <!-- Large Mission Icon Container -->
          <div class="w-56 h-56 bg-gradient-to-br from-[#4285f4] to-[#1e3a8a] rounded-full flex items-center justify-center shadow-2xl shadow-blue-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-28 w-28 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
        </div>

        <!-- Content Area (Right Side) -->
        <div class="flex-grow text-left relative">
          <!-- Floating Number (03) -->
          <div class="absolute -top-6 -right-6 w-16 h-16 bg-[#d2e3fc] rounded-full flex items-center justify-center text-[#4285f4] font-black text-2xl shadow-inner z-10">
            03
          </div>

          <div class="flex items-center gap-3 mb-6">
            <div class="p-2 bg-blue-50 rounded-lg text-[#4285f4]">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-3xl font-black text-[#1a365d]">Our Mission</h3>
          </div>

          <div class="text-slate-600 text-lg leading-relaxed mb-10 space-y-4">
            <p>
              To provide professional and skilled legal services based on legal representation of the Federal Government of Somalia in the national interest, to promote the rule of law.
            </p>
            <p>
              To archive and publish laws, regulations, policies, and all government publication services to the government and the public through the Official Gazette and official website.
            </p>
          </div>

          <!-- Feature Boxes -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div v-for="(feature, index) in features" :key="index" 
                 class="bg-[#bcd6ff] p-6 rounded-2xl flex flex-col items-center text-center transition-transform hover:scale-105 duration-300">
              <component :is="feature.icon" class="h-10 w-10 text-[#1e3a8a] mb-3" />
              <span class="text-[#1a365d] font-bold text-sm leading-tight">{{ feature.title }}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import { ShieldCheckIcon, BookOpenIcon, UsersIcon } from '@heroicons/vue/24/outline'

export default {
  name: 'OurMission',
  data() {
    return {
      features: [
        { title: 'Legal Protection', icon: ShieldCheckIcon },
        { title: 'Documentation', icon: BookOpenIcon },
        { title: 'Public Service', icon: UsersIcon }
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