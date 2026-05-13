<template>
  <div class="min-h-screen bg-sky-50/30 py-12 px-4 font-sans text-slate-800">
    <!-- Header Section -->
    <div class="max-w-4xl mx-auto text-center mb-12">
      <h1 class="text-3xl font-bold text-blue-700 mb-3">Government & Other Organizations</h1>
      <div class="flex justify-center gap-1 mb-6">
        <div class="h-1 w-10 bg-blue-500 rounded"></div>
        <div class="h-1 w-10 bg-yellow-400 rounded"></div>
        <div class="h-1 w-10 bg-green-700 rounded"></div>
      </div>
      <p class="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
        Below you can find the list of government agencies and departments and the laws and regulations they have issued.
      </p>
    </div>

    <!-- Search Bar -->
    <div class="max-w-xl mx-auto mb-16 relative">
      <input 
        type="text" 
        placeholder="Search bulletins, laws, regulations..." 
        class="w-full py-3 px-6 rounded-full border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
      >
      <button class="absolute right-2 top-1.5 bg-slate-600 hover:bg-slate-700 text-white p-2 rounded-full transition shadow-md">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>

    <!-- Organizations Grid -->
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8">
      <div v-for="(org, index) in organizations" :key="index" class="flex flex-col items-center text-center group">
        <!-- Logo Circle -->
        <div class="w-24 h-24 rounded-full border-2 border-blue-400 flex items-center justify-center p-1 bg-white mb-4 shadow-sm group-hover:shadow-md transition">
          <img :src="org.logo" :alt="org.name" class="w-16 h-16 object-contain grayscale-[0.2] group-hover:grayscale-0">
        </div>
        
        <!-- Name and Abbreviation -->
        <div class="min-h-[6rem] flex flex-col items-center">
          <h3 class="font-bold text-sm md:text-base text-slate-800 px-4 leading-snug">
            {{ org.name }}
          </h3>
          <p class="text-blue-500 text-xs font-semibold mt-1 uppercase">{{ org.abbr }}</p>
        </div>

        <!-- Horizontal Divider -->
        <div class="w-48 h-px bg-gray-100 my-4"></div>

        <!-- Documents Button -->
        <button class="bg-yellow-400 hover:bg-yellow-500 text-slate-800 text-[11px] font-bold py-1.5 px-4 rounded-md shadow-sm flex items-center gap-2 transition transform active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          {{ org.docCount }} Documents
        </button>
      </div>
    </div>

    <!-- Pagination -->
    <div class="max-w-6xl mx-auto mt-20 flex justify-center items-center gap-2 text-xs font-bold text-blue-500">
      <button class="p-2 hover:bg-blue-50 rounded">&laquo;</button>
      <button class="p-2 hover:bg-blue-50 rounded">&lsaquo;</button>
      <button class="w-8 h-8 bg-blue-500 text-white rounded shadow-sm">1</button>
      <button class="w-8 h-8 hover:bg-blue-50 rounded text-gray-500">2</button>
      <button class="w-8 h-8 hover:bg-blue-50 rounded text-gray-500">3</button>
      <button class="p-2 hover:bg-blue-50 rounded">&rsaquo;</button>
      <button class="p-2 hover:bg-blue-50 rounded">&raquo;</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      organizations: [
        { name: "Baarlamaanka Jamhuuriyadda Federaalka Soomaaliya", abbr: "GSH", docCount: 9, logo: "https://via.placeholder.com/64" },
        { name: "Midawga Baarlamaanada Afrika", abbr: "MBA", docCount: 3, logo: "https://via.placeholder.com/64" },
        { name: "Office of Prime Minister", abbr: "OPM", docCount: 9, logo: "https://via.placeholder.com/64" },
        { name: "Qaramada Midoobay", abbr: "United Nations", docCount: 2, logo: "https://via.placeholder.com/64" },
        { name: "Ururka Jaamacadda Carabta", abbr: "Arab League", docCount: 2, logo: "https://via.placeholder.com/64" },
        { name: "Wasaaradda Amniga Gudaha", abbr: "MoIs", docCount: 12, logo: "https://via.placeholder.com/64" },
        { name: "Wasaaradda Arrimaha Dibedda iyo Iskaashiga Caalamiga", abbr: "MFA", docCount: 9, logo: "https://via.placeholder.com/64" },
        { name: "Wasaaradda Arrimaha Gudaha, Federaalka & Dib u Heshiisiinta", abbr: "WAGF&D", docCount: 33, logo: "https://via.placeholder.com/64" },
        { name: "Wasaaradda Batroolka & Macdanta", abbr: "MBM", docCount: 4, logo: "https://via.placeholder.com/64" },
        { name: "Wasaaradda Beeraha iyo Waraabka", abbr: "WBW", docCount: 12, logo: "https://via.placeholder.com/64" },
        { name: "Wasaaradda Caafimaadka", abbr: "MOH", docCount: 9, logo: "https://via.placeholder.com/64" },
        { name: "Wasaaradda Caddaaladda & Arrimaha Dastuura", abbr: "MOJ", docCount: 31, logo: "https://via.placeholder.com/64" }
      ]
    }
  }
}
</script>

<style scoped>
/* Wixii habayn gaar ah halkan ayaa lagu dari karaa */
</style>