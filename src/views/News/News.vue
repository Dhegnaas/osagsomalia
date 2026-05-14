<template>
  <div class="max-w-6xl mx-auto p-6 font-sans text-gray-700">
    <!-- Header Section -->
    <div class="text-center mb-10">
      <h1 class="text-3xl font-bold text-blue-800 mb-2">News & Updates</h1>
      <div class="flex justify-center gap-1 mb-4">
        <span class="w-10 h-1 bg-blue-500 rounded"></span>
        <span class="w-10 h-1 bg-yellow-400 rounded"></span>
        <span class="w-10 h-1 bg-green-800 rounded"></span>
      </div>
      <p class="text-gray-500 max-w-xl mx-auto leading-relaxed">
        Stay informed with the latest news and updates from the Office of the State Attorney General.
      </p>
    </div>

    <!-- Search Bar -->
    <div class="relative max-w-xl mx-auto mb-12">
      <input 
        type="text" 
        placeholder="Search bulletins, laws, regulations..." 
        class="w-full px-6 py-3 border-2 border-blue-200 rounded-full focus:outline-none focus:border-blue-400 shadow-sm transition-all"
      >
      <button class="absolute right-2 top-1.5 bg-cyan-700 text-white p-2.5 rounded-full hover:bg-cyan-800 transition shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>

    <!-- News Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
      <div 
        v-for="(item, index) in newsItems" 
        :key="index" 
        class="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col h-full border border-gray-100"
      >
        <!-- Card Image & Date Badge -->
        <div class="relative h-56 overflow-hidden bg-gray-100">
          <img :src="item.image" :alt="item.title" class="w-full h-full object-cover">
          <!-- Date Badge -->
          <div class="absolute top-4 right-4 bg-gradient-to-b from-blue-400 to-green-900 text-white p-2 rounded-lg text-center min-w-[55px] shadow-lg">
            <div class="text-xl font-bold leading-none">{{ item.day }}</div>
            <div class="text-[10px] font-bold uppercase tracking-tighter">{{ item.month }}</div>
          </div>
        </div>

        <!-- Card Content -->
        <div class="p-6 flex flex-col flex-grow">
          <div class="mb-4">
            <span 
              :class="item.tag === 'Notice' ? 'bg-yellow-400' : 'bg-yellow-500'" 
              class="text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
            >
              {{ item.tag }}
            </span>
          </div>
          
          <h2 class="text-xl font-extrabold text-gray-800 mb-4 leading-tight group-hover:text-blue-700 transition-colors">
            {{ item.title }}
          </h2>
          
          <p class="text-gray-500 text-sm mb-6 line-clamp-3 leading-relaxed">
            {{ item.description }}
          </p>
          
          <div class="mt-auto">
            <button class="text-blue-500 font-bold text-sm flex items-center gap-1 hover:text-blue-700 transition-colors group">
              Read More 
              <span class="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsUpdates',
  data() {
    return {
      newsItems: [
        {
          tag: 'Notice',
          day: '11',
          month: 'JAN',
          image: '/path/to/image1.jpg', // Beddel meeshaan
          title: 'Joojin Xad-gudubka iyo Bur-burin lagu haayo Dhulka Jaamacadda JUS',
          description: 'Xafiiska Garyaqaanka Guud ee Dawladda, oo tixraacaya Warqadda Ref:JUS/MG/GJ/4068/2026, ee ku taariikhaysan 07/01/2026, kana soo baxay Jaamacadda Umma...'
        },
        {
          tag: 'News',
          day: '14',
          month: 'OCT',
          image: '/path/to/image2.jpg', // Beddel meeshaan
          title: 'Joojin Dhismo Sharci darro ah iyo ku Tagri-fal Dhul Dawladeed',
          description: 'tahay MGB/DML/440/2024, ee kahor furan Maxkamadda Gobolka Banaadir, kana dhaxeeya dhinacyada kale ah: Wabillaahi Towfiiq 1. Taliska Ciidanka Xoogga...'
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Wixii faahfaahin dheeraad ah */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}
</style>