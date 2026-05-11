<template>
  <div class="bg-gray-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-4xl font-extrabold text-blue-950 mb-2">Official Bulletins</h1>
        <div class="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6 rounded"></div>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Here you can find all the bulletins issued by the Office of the State Attorney General.
        </p>
      </div>

      <div class="mb-16">
        <div class="relative max-w-xl mx-auto">
          <input 
            v-model="searchQuery" 
            type="text" 
            placeholder="Search bulletins, laws, regulations..." 
            class="w-full pl-6 pr-14 py-3 border border-gray-300 rounded-full shadow-inner bg-white focus:ring-2 focus:ring-blue-300 focus:border-blue-400 text-gray-700"
          >
          <button class="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center hover:bg-teal-700 transition duration-150">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        <div v-for="(bulletin, index) in filteredBulletins" :key="index" class="text-center">
          <div class="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
            <div class="mb-6">
              <div class="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-md">
                <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
            </div>
            
            <div class="text-gray-900 font-bold text-2xl mb-1">{{ bulletin.year }}</div>
            <div class="text-xs text-gray-500 mb-4">{{ bulletin.id }}</div>
            
            <div class="bg-amber-400 text-xs font-bold px-3 py-1.5 rounded-full inline-flex items-center space-x-1.5">
              <svg class="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <span class="text-black">{{ bulletin.type }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OfficialBulletins',
  data() {
    return {
      searchQuery: '',
      bulletins: [
        { year: 2026, id: 'Lr. 1', type: 'Monthly' },
        { year: 2026, id: 'Lr. 2', type: 'Monthly' },
        { year: 2025, id: 'Lr. 3', type: 'Monthly' },
        { year: 2025, id: 'Lr. 2', type: 'Monthly' },
        { year: 2025, id: 'Lr. 4', type: 'Monthly' },
        { year: 2025, id: 'Lr. 1', type: 'Monthly' },
        { year: 2024, id: 'Lr. 5', type: 'Monthly' },
        { year: 2024, id: 'Lr. 4', type: 'Monthly' },
        // ... add more bulletin items here
      ]
    }
  },
  computed: {
    filteredBulletins() {
      if (!this.searchQuery) {
        return this.bulletins;
      }
      const query = this.searchQuery.toLowerCase();
      return this.bulletins.filter(b => 
        b.year.toString().includes(query) || 
        b.id.toLowerCase().includes(query) ||
        b.type.toLowerCase().includes(query)
      );
    }
  }
}
</script>