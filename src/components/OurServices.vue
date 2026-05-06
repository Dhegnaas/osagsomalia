<template>
  <section class="py-16 bg-gray-50 font-sans">
    <div class="max-w-7xl mx-auto px-4 text-center">
      
      <!-- Cinwaanka Sare -->
      <h2 class="text-4xl font-extrabold text-slate-900 mb-4">Our Services</h2>
      
      <!-- Xariiqyada midabada leh -->
      <div class="flex justify-center gap-1 mb-8">
        <span class="w-10 h-1 bg-blue-500 rounded"></span>
        <span class="w-10 h-1 bg-yellow-400 rounded"></span>
        <span class="w-10 h-1 bg-green-700 rounded"></span>
      </div>

      <!-- Qoraalka Sharaxaadda -->
      <p class="max-w-3xl mx-auto text-slate-600 mb-12 text-lg leading-relaxed">
        The Office of the State Attorney General is an independent institution in accordance 
        with Article 114 of the FGS Constitution, established by Law No. 18 issued on January 29, 1976. 
        <a href="#" class="text-blue-600 font-bold hover:underline inline-flex items-center ml-1">
          Read more 
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </p>

      <!-- Slider Section -->
      <div class="relative flex items-center group">
        
        <!-- Badhanka Bidix (Slider Arrow) -->
        <button class="absolute -left-4 z-20 p-4 bg-blue-500 text-white rounded-full shadow-xl hover:bg-blue-600 transition-all focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <!-- Kaadhka Adeegyada (v-for Loop) -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4">
          <div 
            v-for="(service, index) in services" 
            :key="index"
            class="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 text-left relative overflow-hidden group-hover:border-blue-100"
          >
            <!-- Icon placeholder - Waxaad isticmaali kartaa FontAwesome ama SVG -->
            <div class="text-blue-600 mb-6 bg-blue-50 inline-block p-3 rounded-lg">
              <component :is="service.icon" class="w-8 h-8" />
            </div>

            <h3 class="text-2xl font-bold text-slate-800 mb-4">{{ service.title }}</h3>
            <p class="text-slate-500 leading-relaxed">
              {{ service.description }}
            </p>
          </div>
        </div>

        <!-- Badhanka Midig (Slider Arrow) -->
        <button class="absolute -right-4 z-20 p-4 bg-blue-500 text-white rounded-full shadow-xl hover:bg-blue-600 transition-all focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Badhanka "View All" -->
      <div class="mt-16">
        <button class="px-8 py-4 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 shadow-lg hover:shadow-blue-200 transition-all transform hover:-translate-y-1">
          View All Services &rarr;
        </button>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'OurServices',
  data() {
    return {
      services: [
        {
          title: "Legal Advisory",
          description: "Providing legal advice on matters requested or referred from the Presidency of the Federal Republic and other government branches.",
          icon: "ScaleIcon" // Placeholder for icon component
        },
        {
          title: "Government Defense",
          description: "Protecting the rights and public interest of the government, defending the government and its various branches before courts.",
          icon: "ShieldCheckIcon"
        },
        {
          title: "Contracts",
          description: "Preparation and review of contracts issued by the government, whether with individuals or companies.",
          icon: "DocumentTextIcon"
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Wixii styling dheeraad ah oo Tailwind ka baxsan halkan geli */
</style>