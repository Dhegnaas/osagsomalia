<template>
  <div class="min-h-screen bg-white flex flex-col items-center py-12 px-4 font-sans">
    
    <!-- Title Section -->
    <div class="text-center mb-8">
      <h1 class="text-4xl font-extrabold text-[#2b6cb0] mb-2">Current Trainings</h1>
      
      <!-- Decorative Colored Bars -->
      <div class="flex justify-center gap-1 mb-6">
        <div class="h-1 w-10 bg-blue-500 rounded-full"></div>
        <div class="h-1 w-10 bg-yellow-400 rounded-full"></div>
        <div class="h-1 w-10 bg-green-800 rounded-full"></div>
      </div>
      
      <p class="text-gray-500 text-lg max-w-2xl mx-auto">
        Below you can find the trainings offered by the Office of the State Attorney General.
      </p>
    </div>

    <!-- Search Bar Section -->
    <div class="w-full max-w-3xl relative mt-4 mb-12">
      <div class="relative flex items-center">
        <input 
          type="text" 
          placeholder="Search bulletins, laws, regulations..." 
          class="w-full py-4 px-6 rounded-full border-2 border-blue-400 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all placeholder-gray-400 shadow-sm"
        />
        <button class="absolute right-2 bg-[#337a8b] hover:bg-[#2a6472] text-white p-3 rounded-full transition-colors flex items-center justify-center shadow-md">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Empty State Message -->
    <div class="mt-8">
      <p class="text-gray-600 text-lg italic">
        Sorry, no data to display.
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CurrentTrainings',
  data() {
    return {
      searchQuery: ''
    }
  }
}
</script>

<style scoped>
/* Wixii habayn dheeraad ah oo ka baxsan Tailwind halkan ayaa lagu dari karaa */
.font-sans {
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}
</style>