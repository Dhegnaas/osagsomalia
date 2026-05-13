<template>
  <section class="py-16 bg-white min-h-screen">
    <div class="max-w-7xl mx-auto px-4">
      
      <!-- Section Header -->
      <div class="text-center mb-12">
        <h2 class="text-4xl font-extrabold text-[#2b6cb0] mb-3">
          About Dr. Osman Elmi Guled
        </h2>
        <!-- Decorative colored bars -->
        <div class="flex justify-center gap-1">
          <div class="w-10 h-1.5 bg-blue-500 rounded-full"></div>
          <div class="w-10 h-1.5 bg-yellow-400 rounded-full"></div>
          <div class="w-10 h-1.5 bg-green-700 rounded-full"></div>
        </div>
      </div>

      <!-- Card Container -->
      <div class="flex justify-start items-start">
        <div class="w-full max-w-sm bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden p-6">
          
          <!-- Image Section -->
          <div class="relative mb-6">
            <img 
              src="https://via.placeholder.com/400x400" 
              alt="Dr. Osman Elmi Guled" 
              class="w-full h-80 object-cover rounded-3xl"
            />
            <!-- Yellow Floating Icon -->
            <div class="absolute -bottom-4 right-6 bg-yellow-400 p-3 rounded-full border-4 border-white shadow-lg">
              <svg class="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>

          <!-- Profile Details -->
          <div class="text-center">
            <h3 class="text-2xl font-black text-slate-800 mb-1">
              Dr. Osman Elmi Guled
            </h3>
            <p class="text-blue-600 font-semibold mb-6">
              State Attorney General, FGS
            </p>

            <!-- Contact Buttons -->
            <div class="space-y-3">
              <!-- Email -->
              <a 
                href="mailto:sag@sag.gov.so" 
                class="flex items-center justify-center gap-2 w-full bg-[#bfdbfe] hover:bg-blue-200 text-[#1e40af] py-3 rounded-2xl font-bold transition-colors"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                sag@sag.gov.so
              </a>

              <!-- Phone -->
              <a 
                href="tel:0616658489" 
                class="flex items-center justify-center gap-2 w-full bg-[#bfdbfe] hover:bg-blue-200 text-[#1e40af] py-3 rounded-2xl font-bold transition-colors"
              >
                <svg class="w-5 h-5 transform rotate-90" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                0616658489
              </a>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutDoctor'
}
</script>