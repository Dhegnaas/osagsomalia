<template>
  <footer class="bg-[#1e2d3d] text-gray-300 py-12 px-6 md:px-20 font-sans">
    <div class="max-w-7xl mx-auto">
      <!-- Qaybta Sare -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        
        <!-- Logo iyo Sharaxaad -->
        <div class="col-span-1 md:col-span-1">
          <div class="flex items-center mb-4">
            <img src="/so.png" alt="Logo" class="h-20 w-auto mr-3" />
          </div>
          <h2 class="text-white font-bold text-lg mb-4 border-b-2 border-blue-500 pb-1 inline-block">
            The Office of the State Attorney General
          </h2>
          <p class="text-sm leading-relaxed mb-6">
            Upholding justice, transparency, and the rule of law for the Federal Republic of Somalia.
          </p>
          <!-- Social Icons -->
          <div class="flex space-x-3">
            <a href="#" class="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-600 transition-colors">
              <i class="fab fa-facebook-f text-xs"></i>
            </a>
            <a href="#" class="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-400 transition-colors">
              <i class="fab fa-twitter text-xs"></i>
            </a>
            <a href="#" class="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-blue-700 transition-colors">
              <i class="fab fa-linkedin-in text-xs"></i>
            </a>
            <a href="#" class="w-8 h-8 rounded-full bg-blue-900/50 flex items-center justify-center hover:bg-red-600 transition-colors">
              <i class="fab fa-youtube text-xs"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-white font-bold mb-4 border-b-2 border-blue-500 w-12 pb-1">Quick Links</h3>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="hover:text-white">Home</a></li>
            <li><a href="#" class="hover:text-white">About Us</a></li>
            <li><a href="#" class="hover:text-white">Services</a></li>
            <li><a href="#" class="hover:text-white">News</a></li>
            <li><a href="#" class="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        <!-- Documents -->
        <div>
          <h3 class="text-white font-bold mb-4 border-b-2 border-blue-500 w-12 pb-1">Documents</h3>
          <ul class="space-y-3 text-sm">
            <li><a href="#" class="hover:text-white">Legislation</a></li>
            <li><a href="#" class="hover:text-white">Official Bulletins</a></li>
            <li><a href="#" class="hover:text-white">Constitution</a></li>
            <li><a href="#" class="hover:text-white">Organizations</a></li>
            <li><a href="#" class="hover:text-white">Training</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-white font-bold mb-4 border-b-2 border-blue-500 w-12 pb-1">Contact Info</h3>
          <ul class="space-y-4 text-sm">
            <li class="flex items-start">
              <span class="text-blue-400 mr-3"><i class="fas fa-map-marker-alt"></i></span>
              Villa Somalia, Mogadishu
            </li>
            <li class="flex items-center">
              <span class="text-blue-400 mr-3"><i class="fas fa-phone-alt"></i></span>
              +252 613242015
            </li>
            <li class="flex items-center">
              <span class="text-blue-400 mr-3"><i class="fas fa-envelope"></i></span>
              archive@sag.gov.so
            </li>
          </ul>
        </div>
      </div>

      <!-- Qaybta Hoose (Copyright) -->
      <div class="border-t border-gray-700 pt-6 flex flex-col md:row justify-between items-center text-xs">
        <p>&copy; {{ new Date().getFullYear() }} OSAG. All Rights Reserved.</p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <a href="#" class="hover:text-white">Privacy Policy</a>
          <a href="#" class="hover:text-white">Terms & Conditions</a>
        </div>
      </div>
    </div>

    <!-- Scroll to Top Button -->
    <div class="fixed bottom-10 right-10">
      <button class="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all">
        <i class="fas fa-arrow-up"></i>
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style scoped>
/* Waxaad halkan ku dari kartaa Font-ka ama icon-nada haddii aysan ku jirin mashruucaaga */
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
</style>