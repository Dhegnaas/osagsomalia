<template>
  <div>
    <!-- 1. Hero Section -->
    <section class="bg-[#1a365d] min-h-screen flex items-center justify-center relative overflow-hidden font-sans">
      <!-- Background Overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-blue-900/90 to-blue-800/80 z-10"></div>
      
      <!-- Background Image -->
      <img 
        src="/so.png" 
        alt="Background" 
        class="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      <!-- Main Content -->
      <div class="container mx-auto px-6 relative z-20 text-white">
        <div class="max-w-3xl">
          <!-- Badge -->
          <div class="inline-flex items-center space-x-2 bg-yellow-500/20 border border-yellow-500/50 rounded-full px-4 py-1 mb-8">
            <span class="text-yellow-400 text-sm">★</span>
            <span class="text-yellow-400 text-xs font-bold tracking-widest uppercase">Federal Government Institution</span>
          </div>

          <!-- Heading -->
          <h1 class="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            The Office of the State <br/>
            <span class="text-yellow-500">Attorney General</span>
          </h1>

          <!-- Subheading -->
          <p class="text-lg md:text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl">
            Upholding Justice, Transparency, and the Rule of Law for the Federal Republic of Somalia
          </p>

          <!-- Buttons -->
          <div class="flex flex-wrap gap-4 mb-16">
            <button class="bg-yellow-500 hover:bg-yellow-600 text-blue-950 font-bold py-4 px-8 rounded-full flex items-center transition-all shadow-lg shadow-yellow-500/20">
              Learn More <span class="ml-2">→</span>
            </button>
            <button class="border border-white/50 hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-full flex items-center transition-all">
              Contact Us <span class="ml-2">✉</span>
            </button>
          </div>

          <!-- Info Cards -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-xl flex items-center space-x-4">
              <div class="bg-yellow-500 p-3 rounded-lg text-blue-900 font-bold text-2xl">⚖</div>
              <div>
                <p class="text-2xl font-bold">100%</p>
                <p class="text-xs uppercase tracking-widest text-gray-300">Justice</p>
              </div>
            </div>
            <div class="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-xl flex items-center space-x-4">
              <div class="bg-yellow-500 p-3 rounded-lg text-blue-900 font-bold text-2xl">🛡</div>
              <div>
                <p class="text-2xl font-bold">100%</p>
                <p class="text-xs uppercase tracking-widest text-gray-300">Integrity</p>
              </div>
            </div>
            <div class="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-xl flex items-center space-x-4">
              <div class="bg-yellow-500 p-3 rounded-lg text-blue-900 font-bold text-2xl">🔨</div>
              <div>
                <p class="text-2xl font-bold">100%</p>
                <p class="text-xs uppercase tracking-widest text-gray-300">Rule of Law</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll Down -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-center flex flex-col items-center opacity-70">
         <div class="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1 mb-2">
            <div class="w-1 h-2 bg-white rounded-full animate-bounce"></div>
         </div>
         <span class="text-[10px] uppercase tracking-widest">Scroll Down</span>
      </div>
    </section>

    <!-- 2. Services Section -->
    <OurServices />
    <RecentBulletins />
    <LatestNews />
    <GovernmentOrganizations />
    
  </div>
</template>

<script>
import OurServices from '@/components/OurServices.vue';
import RecentBulletins from '@/components/RecentBulletins.vue';
import LatestNews from '@/components/LatestNews.vue';
import GovernmentOrganizations from '@/components/GovernmentOrganizations.vue';

export default {
  name: 'Home',
  components: {
    OurServices,
    RecentBulletins,
    LatestNews,
    GovernmentOrganizations
  }
}

</script>

<style scoped>
/* Wixii dheeraad ah oo ka baxsan Tailwind halkan geli */
.animate-bounce {
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
  40% {transform: translateY(-5px);}
  60% {transform: translateY(-3px);}
}
</style>