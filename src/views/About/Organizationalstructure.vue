<template>
  <div class="min-h-screen bg-white py-12 px-4 font-sans text-slate-800">
    <!-- Header Section -->
    <div class="text-center mb-16">
      <h1 class="text-4xl font-extrabold flex justify-center items-center gap-2">
        <span class="text-slate-900">Organizational</span>
        <span class="text-blue-400">structure</span>
      </h1>
      <div class="flex justify-center gap-1 mt-3 mb-4">
        <div class="h-1 w-8 bg-blue-500"></div>
        <div class="h-1 w-8 bg-yellow-400"></div>
        <div class="h-1 w-8 bg-green-800"></div>
      </div>
      <p class="text-gray-500">Team members are grouped by role from leadership through staff.</p>
    </div>

    <!-- Hierarchy Tree -->
    <div class="max-w-5xl mx-auto flex flex-col items-center">
      
      <!-- Level 1: Chairperson -->
      <div class="relative flex flex-col items-center">
        <div class="bg-blue-50 text-slate-700 px-6 py-1 rounded-full text-xs font-bold border border-blue-100 mb-4 tracking-widest uppercase">
          Chairperson
        </div>
        
        <div class="w-64 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden text-center pb-6">
          <img src="https://via.placeholder.com/300x300" alt="Dr. Osman Elmi Guled" class="w-full h-48 object-cover mb-4">
          <h3 class="font-bold text-lg px-2">Dr. Osman Elmi Guled</h3>
          <p class="text-blue-500 text-xs font-semibold mb-2">State Attorney General, FGS</p>
          <div class="flex items-center justify-center gap-1 text-[10px] text-gray-400">
            <span class="material-icons text-xs">email</span> sag@sag.gov.so
          </div>
        </div>

        <!-- Connection Line Down -->
        <div class="h-12 w-px bg-blue-200 relative"></div>
      </div>

      <!-- Level 2: Director General -->
      <div class="relative flex flex-col items-center w-full">
        <div class="bg-blue-50 text-slate-700 px-6 py-1 rounded-full text-xs font-bold border border-blue-100 mb-4 tracking-widest uppercase z-10">
          Director General
        </div>

        <!-- Horizontal Connection Line -->
        <div class="absolute top-[58px] left-0 right-0 h-px bg-blue-200"></div>
        
        <!-- Yellow Dot connector -->
        <div class="w-2 h-2 bg-yellow-400 rounded-full border border-white absolute top-[54px] z-20"></div>

        <div class="w-64 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden text-center pb-6 mt-4 z-10">
          <img src="https://via.placeholder.com/300x300" alt="Mohamed Salad Hassan" class="w-full h-48 object-cover mb-4">
          <h3 class="font-bold text-lg px-2 text-slate-700">Mohamed Salad Hassan</h3>
          <p class="text-blue-500 text-xs font-semibold mb-2">Director General</p>
          <div class="flex items-center justify-center gap-1 text-[10px] text-gray-400">
            <span class="material-icons text-xs">email</span> dg@sag.gov.so
          </div>
        </div>

        <!-- Connection Line Down -->
        <div class="h-12 w-px bg-blue-200 relative"></div>
      </div>

      <!-- Level 3: Directors -->
      <div class="relative flex flex-col items-center w-full">
        <div class="bg-blue-50 text-slate-700 px-6 py-1 rounded-full text-xs font-bold border border-blue-100 mb-8 tracking-widest uppercase z-10">
          Director
        </div>

        <!-- Horizontal Connection Line for bottom row -->
        <div class="absolute top-[65px] left-[25%] right-[25%] h-px bg-blue-200"></div>

        <div class="flex justify-center gap-8 w-full relative">
          
          <!-- Yellow Dots for each card -->
          <div class="w-2 h-2 bg-yellow-400 rounded-full border border-white absolute top-[-19px] left-[calc(35.5%)] z-20"></div>
          <div class="w-2 h-2 bg-yellow-400 rounded-full border border-white absolute top-[-19px] right-[calc(35.5%)] z-20"></div>

          <!-- Card 1 -->
          <div class="w-64 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden text-center pb-6 z-10">
            <img src="https://via.placeholder.com/300x300" alt="Abdiwali Omar Abdulle" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-md px-2 text-slate-700 leading-tight">Abdiwali Omar Abdulle</h3>
            <p class="text-blue-500 text-[10px] font-semibold mb-2 uppercase">Director of Admin & Finance</p>
            <div class="flex items-center justify-center gap-1 text-[10px] text-gray-400">
              <span class="material-icons text-xs">email</span> mrabdiwali1@gmail.com
            </div>
          </div>

          <!-- Card 2 -->
          <div class="w-64 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden text-center pb-6 z-10">
            <img src="https://via.placeholder.com/300x300" alt="Abukar Abdullahi Moallim" class="w-full h-48 object-cover mb-4">
            <h3 class="font-bold text-md px-2 text-slate-700 leading-tight">Abukar Abdullahi Moallim</h3>
            <p class="text-blue-500 text-[10px] font-semibold mb-2 uppercase">Director of ICT</p>
            <div class="flex items-center justify-center gap-1 text-[10px] text-gray-400">
              <span class="material-icons text-xs">email</span> abukarmocallim@gmail.com
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'OrganizationalStructure',
}
</script>

<style scoped>
/* Google Material Icons for the email symbol */
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

.font-sans {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
</style>