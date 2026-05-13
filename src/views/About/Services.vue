<template>
  <div class="min-h-screen bg-gray-50 py-10 px-4 font-sans text-gray-800">
    <!-- Header Section -->
    <div class="max-w-4xl mx-auto text-center mb-10">
      <h1 class="text-3xl font-bold text-slate-800">Office of the State Attorney General</h1>
      <div class="flex justify-center my-2">
        <div class="h-1 w-10 bg-blue-500"></div>
        <div class="h-1 w-10 bg-yellow-400"></div>
        <div class="h-1 w-10 bg-green-500"></div>
      </div>
      <p class="text-sm text-gray-500 italic mt-4">
        Below you can find the services provided by the Office of the State Attorney General.
      </p>
    </div>

    <!-- Main Content Container -->
    <div class="max-w-4xl mx-auto space-y-8">
      
      <!-- Section 1: Establishment and Authority -->
      <section class="bg-white rounded-xl shadow-sm border-l-4 border-yellow-400 p-8 relative">
        <div class="absolute top-6 right-6 bg-blue-100 text-blue-500 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
          1
        </div>
        <h2 class="text-2xl font-bold text-slate-800 mb-4">Establishment and Authority</h2>
        <p class="text-gray-600 leading-relaxed text-sm">
          The Office of the State Attorney General is an independent institution in accordance with Article 114 of the FGS Constitution, established by Law No. 18 issued on January 29, 1975.
        </p>
      </section>

      <!-- Section 2: Office Responsibilities -->
      <section class="bg-white rounded-xl shadow-sm border-l-4 border-blue-500 p-8 relative">
        <div class="absolute top-6 right-6 bg-blue-100 text-blue-500 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
          2
        </div>
        <h2 class="text-2xl font-bold text-slate-800 mb-2">Office Responsibilities</h2>
        <p class="text-gray-500 text-sm mb-6 italic">The Office is responsible for the following duties:</p>

        <div class="space-y-4">
          <!-- Card A: Legal Advisory -->
          <div class="bg-blue-50 rounded-lg p-6 flex gap-4 border border-blue-100">
            <div class="bg-blue-500 text-white w-10 h-10 rounded flex items-center justify-center shrink-0 font-bold">
              A
            </div>
            <div>
              <h3 class="text-lg font-bold text-slate-800 flex items-center gap-2 mb-2">
                <span class="text-blue-500">⚖️</span> Legal Advisory
              </h3>
              <p class="text-sm text-gray-600 leading-relaxed">
                Providing legal advice on matters requested or referred from the Presidency of the Federal Republic, and other government branches stated in Article 2 of the aforementioned law, to ensure that government agency actions comply with the law. The Office provides binding legal opinions on all matters referred by the Presidency and all government members.
              </p>
            </div>
          </div>

          <!-- Card B: Government Defense -->
          <div class="bg-blue-50 rounded-lg p-6 flex gap-4 border border-blue-100">
            <div class="bg-blue-500 text-white w-10 h-10 rounded flex items-center justify-center shrink-0 font-bold">
              B
            </div>
            <div>
              <h3 class="text-lg font-bold text-slate-800 flex items-center gap-2 mb-2">
                <span class="text-blue-500">🛡️</span> Government Defense
              </h3>
              <p class="text-sm text-gray-600 leading-relaxed mb-4">
                Protecting the rights and public interest of the government, defending the government and its various branches before courts in the following cases:
              </p>
              
              <ul class="space-y-3 text-sm text-gray-700">
                <li class="flex items-start gap-2">
                  <span class="text-yellow-500 mt-1">—</span>
                  <span><strong class="text-blue-400">Civil Cases:</strong> Representing the government in transactions with individuals or companies such as purchases or construction projects.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-yellow-500 mt-1">—</span>
                  <span><strong class="text-blue-400">Administrative Cases:</strong> Defending binding decisions issued by senior government officials when challenged.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-yellow-500 mt-1">—</span>
                  <span><strong class="text-blue-400">Employment Cases:</strong> Defending government agencies in employment rights disputes.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-yellow-500 mt-1">—</span>
                  <span><strong class="text-blue-400">Financial Cases:</strong> Handling cases related to government finances.</span>
                </li>
                <li class="flex items-start gap-2">
                  <span class="text-yellow-500 mt-1">—</span>
                  <span><strong class="text-blue-400">International Cases:</strong> Defending the Somali government in foreign courts.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AttorneyGeneralLayout',
}
</script>

<style scoped>
/* Wixii habayn dheeraad ah oo ka baxsan Tailwind halkan ayaa lagu dari karaa */
</style>