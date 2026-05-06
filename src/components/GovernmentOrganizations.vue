<template>
  <section class="py-16 bg-white font-sans relative overflow-hidden">
    <div class="max-w-7xl mx-auto px-4">
      
      <!-- Header Section -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-extrabold text-[#1a365d] mb-4">Government Organizations</h2>
        <div class="flex justify-center gap-1 mb-6">
          <span class="w-10 h-1 bg-blue-500 rounded"></span>
          <span class="w-10 h-1 bg-yellow-400 rounded"></span>
          <span class="w-10 h-1 bg-green-700 rounded"></span>
        </div>
        <p class="text-slate-500 text-lg">Partner organizations and government institutions we work with.</p>
      </div>

      <!-- Slider Container -->
      <div class="relative px-12">
        <swiper
          :slides-per-view="1"
          :space-between="20"
          :navigation="{
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
          }"
          :breakpoints="{
            '640': { slidesPerView: 2 },
            '1024': { slidesPerView: 5 },
          }"
          :modules="modules"
          class="org-swiper"
        >
          <swiper-slide v-for="(org, index) in organizations" :key="index">
            <div class="bg-white border border-blue-50 rounded-2xl p-6 flex flex-col items-center text-center h-[380px] shadow-sm hover:shadow-md transition-shadow">
              <!-- Logo Circle -->
              <div class="w-32 h-32 bg-[#d2e3fc] rounded-full flex items-center justify-center mb-6 overflow-hidden p-4">
                <img :src="org.logo" :alt="org.name" class="max-w-full h-auto object-contain" />
              </div>
              
              <!-- Name -->
              <h3 class="text-[15px] font-bold text-[#1a365d] leading-tight mb-4 flex-grow px-2">
                {{ org.name }}
              </h3>
              
              <!-- Badge -->
              <span class="bg-[#d2e3fc] text-[#4285f4] text-[11px] font-black px-4 py-1.5 rounded-full uppercase tracking-wider">
                {{ org.abbr }}
              </span>
            </div>
          </swiper-slide>
        </swiper>

        <!-- Navigation Buttons -->
        <button class="prev-btn absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#4285f4] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button class="next-btn absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#4285f4] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import so from '/so.png';
export default {
  name: 'GovernmentOrgs',
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
      organizations: [
        {
          name: "Baarlamaanka Jamhuuriyadda Federaalka Soomaaliya",
          abbr: "GSH",
          logo: so
        },
        {
          name: "Midawga Baarlamaanada Afrika",
          abbr: "MBA",
              logo: so        
          },
          {
          name: "Office of Prime Minister",
          abbr: "OPM",
          logo: so
        },
        {
          name: "Qaramada Midoobay",
          abbr: "United Nations",
          logo: so
        },
        {
          name: "Ururka Jaamacadda Carabta",
          abbr: "Arab League",
          logo: so
        }
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
.org-swiper {
  padding: 20px 5px;
}

// Ka dhig badhamada kuwo aan shaqaynayn haddii slide-ku dhamaado
.swiper-button-disabled {
  opacity: 0.5;
  cursor: not-allowed;
  background-color: #cbd5e1 !important;
}
</style>