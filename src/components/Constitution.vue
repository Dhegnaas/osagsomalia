<template>
  <div class="max-w-5xl mx-auto p-8 font-sans text-gray-700">
    <!-- Header Section -->
    <div class="text-center mb-10">
      <h1 class="text-3xl font-bold text-blue-800 mb-2">Federal Constitutions</h1>
      <div class="flex justify-center gap-1 mb-4">
        <span class="w-8 h-1 bg-blue-500 rounded"></span>
        <span class="w-8 h-1 bg-yellow-400 rounded"></span>
        <span class="w-8 h-1 bg-green-700 rounded"></span>
      </div>
      <p class="text-gray-500 max-w-2xl mx-auto">
        Below you can find the constitutions that the country has gone through, culminating in 
        the provisional constitution of 2012.
      </p>
    </div>

    <!-- Search Bar -->
    <div class="relative max-w-xl mx-auto mb-12">
      <input 
        type="text" 
        placeholder="Search bulletins, laws, regulations..." 
        class="w-full px-6 py-3 border-2 border-blue-300 rounded-full focus:outline-none focus:border-blue-500 shadow-sm"
      >
      <button class="absolute right-2 top-1.5 bg-cyan-700 text-white p-2 rounded-full hover:bg-cyan-800 transition">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </button>
    </div>

    <!-- Table Section -->
    <div class="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      <table class="w-full text-left border-collapse">
        <thead>
          <tr class="bg-blue-500 text-white uppercase text-sm font-semibold">
            <th class="px-6 py-4">Year</th>
            <th class="px-6 py-4">Title</th>
            <th class="px-6 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-100">
          <tr v-for="item in constitutions" :key="item.year + item.title" class="hover:bg-gray-50 transition">
            <td class="px-6 py-4">
              <span class="bg-blue-100 text-blue-600 px-4 py-1 rounded-full font-medium">
                {{ item.year }}
              </span>
            </td>
            <td class="px-6 py-4 font-semibold text-gray-800">
              {{ item.title }}
            </td>
            <td class="px-6 py-4 text-right">
              <button class="bg-yellow-100 text-yellow-500 p-2 rounded-lg hover:bg-yellow-200 transition">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FederalConstitutions',
  data() {
    return {
      constitutions: [
        { year: '1960', title: 'Dastuurka J. Soomaaliya - Carabi' },
        { year: '1960', title: 'Dastuurka Soomaaliya Taliyaani iyo English' },
        { year: '1979', title: 'Dastuurka Jamhuuriyadda Dimoqaraadiga Soomaaliya' },
        { year: '1990', title: 'Dastuurka Soomaaliya' },
        { year: '2000', title: 'Axdiga Qaranka ee Ku-meel gaarka ah' },
        { year: '2004', title: 'Axdiga Ku-meel gaarka ah ee JFS' },
        { year: '2012', title: 'Dastuurka KMG Soomaaliya' }
      ]
    }
  }
}
</script>