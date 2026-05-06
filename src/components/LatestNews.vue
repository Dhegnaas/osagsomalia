<template>
  <section class="py-16 bg-gray-50 font-sans">
    <div class="max-w-7xl mx-auto px-4 text-center">
      
      <!-- Cinwaanka Qaybta -->
      <h2 class="text-4xl font-extrabold text-[#1a365d] mb-4">Latest News</h2>
      
      <!-- Xariiqyada Midabada leh -->
      <div class="flex justify-center gap-1 mb-6">
        <span class="w-10 h-1 bg-blue-500 rounded"></span>
        <span class="w-10 h-1 bg-yellow-400 rounded"></span>
        <span class="w-10 h-1 bg-green-700 rounded"></span>
      </div>

      <p class="max-w-2xl mx-auto text-slate-500 mb-12">
        Stay updated with the latest news and announcements from the Office of the State Attorney General.
      </p>

      <!-- News Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div 
          v-for="(post, index) in newsPosts" 
          :key="index" 
          class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300"
        >
          <!-- Image Container with Badges -->
          <div class="relative h-56 w-full bg-slate-200">
            <img :src="post.image" :alt="post.title" class="w-full h-full object-cover" />
            
            <!-- Date Badge -->
            <div class="absolute top-4 left-4 bg-yellow-400 text-[#1a365d] px-3 py-2 rounded-lg text-center shadow-md">
              <p class="text-lg font-extrabold leading-none">{{ post.day }}</p>
              <p class="text-[10px] font-bold uppercase tracking-wider">{{ post.month }}</p>
            </div>

            <!-- Category Badge -->
            <div class="absolute top-4 right-4 bg-blue-500 text-white text-[10px] font-bold uppercase px-3 py-1.5 rounded-md tracking-widest shadow-sm">
              {{ post.category }}
            </div>
          </div>

          <!-- Content -->
          <div class="p-6 flex flex-col flex-grow text-left">
            <h3 class="text-lg font-bold text-slate-800 mb-4 leading-tight min-h-[3.5rem]">
              {{ post.title }}
            </h3>
            <p class="text-sm text-slate-500 leading-relaxed mb-6 flex-grow">
              {{ post.excerpt }}
            </p>
            
            <a href="#" class="text-blue-500 text-sm font-bold flex items-center hover:text-blue-700 transition-colors">
              Read More 
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <button class="inline-flex items-center px-8 py-3.5 bg-[#4285f4] text-white font-bold rounded-full hover:bg-blue-600 transition shadow-lg hover:shadow-blue-200 transform hover:-translate-y-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
        View All News
      </button>

    </div>
  </section>
</template>

<script>
export default {
  name: 'LatestNews',
  data() {
    return {
      newsPosts: [
        {
          title: "Joojin Xad-gudubka iyo Bur-burin lagu haayo Dhulka Jaamacadda JUS",
          excerpt: "Xafiiska Garyaqaanka Guud ee Dawladda oo tixraacaya Warqadda Ref:JUS/MG/GJ/4068/2026 ee ku taariikhaysan 07/01/2026...",
          day: "11",
          month: "JAN",
          category: "NOTICE",
          image: "/news1.jpg" // Bedel sawirkan
        },
        {
          title: "Joojin Dhismo Sharci darro ah iyo ku Tagri-fal Dhul Dawladeed",
          excerpt: "tahay MGB/DML/440/2024, ee kahor furan Maxkamadda Gobolka Banaadir, kana dhaxeeysa dhinacyada kale ah: Wabillaahi Towfi...",
          day: "14",
          month: "OCT",
          category: "NEWS",
          image: "/news2.jpg" // Bedel sawirkan
        },
        {
          title: "Amar Xayiraad iyo Joojin Dhaqdhaqaaq Dhismo",
          excerpt: "Maxkamadda Gobolka Banaadir, oo ka jawaabeysa codsiga Xafiiska Garyaqaanka Guud ee Dawladda, ayaa xayiraad saartay dhul ...",
          day: "14",
          month: "OCT",
          category: "NEWS",
          image: "/news3.jpg" // Bedel sawirkan
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Wixii styling dheeraad ah halkan geli */
</style>