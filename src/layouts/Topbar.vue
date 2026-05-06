<template>
  <div class="font-sans">

    <!-- ── Info Bar ─────────────────────────────────────── -->
    <div class="bg-gradient-to-r from-[#3e87d0] to-[#1e5799] text-white text-sm">
      <div class="max-w-7xl mx-auto px-10 py-4 flex items-center justify-between">

        <!-- Left: contact info -->
        <div class="flex items-center gap-6">
          <a href="mailto:archive@sag.gov.so"
             class="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
            <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
            </svg>
            archive@sag.gov.so
          </a>
          <a href="tel:+252613242015"
             class="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
            <svg class="w-3.5 h-3.5 shrink-0" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            +252 613242015
          </a>
        </div>

        <!-- Right: socials + dark toggle + lang -->
        <div class="flex items-center gap-3">
          <a href="#" aria-label="Facebook"
             class="opacity-80 bg-white/20 p-2 rounded-full hover:bg-[#ffd700] hover:opacity-100 transition-opacity">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
            </svg>
          </a>
          <a href="#" aria-label="Twitter"
             class="opacity-80 bg-white/20 p-2 rounded-full hover:text-black hover:bg-[#ffd700] hover:opacity-100 transition-opacity">
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
            </svg>
          </a>

          <button @click="toggleDark"
                  class="opacity-80 bg-white/20 p-2 rounded-full hover:bg-[#ffd700] ring-2  ring-white/20  hover:opacity-100 transition-opacity focus:outline-none"
                  :aria-label="isDark ? 'Light mode' : 'Dark mode'">
            <svg v-if="!isDark" class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
            </svg>
            <svg v-else class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"/>
              <line x1="12" y1="1" x2="12" y2="3"/>
              <line x1="12" y1="21" x2="12" y2="23"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="1" y1="12" x2="3" y2="12"/>
              <line x1="21" y1="12" x2="23" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          </button>

          <div class="flex items-center gap-1 bg-gradient-to-r from-[#3e87d0] to-[#1e5799] w-full  p-2 border border-white/40 rounded-full shadow-lg px-4 py-2
                      text-xs font-semibold cursor-pointer hover:bg-white/15 transition-colors">
            <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
            </svg>
            <span>EN</span>
            <svg class="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.5">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </div>
        </div>

      </div>
    </div>

    <!-- ── Main Navbar ──────────────────────────────────── -->
    <nav class="bg-white border-b border-gray-100 shadow-sm">
      <div class="max-w-7xl mx-auto px-6 flex items-center gap-6 h-16">

        <!-- Logo -->
        <a href="/" class="flex items-center gap-2.5 shrink-0 no-underline">
          <div class="">
            <img src="/so.png" alt="OSAG Logo" class="w-[120px] h-20 object-contain">
          </div>
          <div class="flex flex-col leading-none">
            <span class="text-[26px] font-extrabold text-[#3e87d0] tracking-wide">OSAG</span>
            <span class="text-[12px] font-bold text-gray-500 tracking-[0.15em] uppercase mt-0.5">
              Somalia
            </span>
          </div>
        </a>

        <!-- Desktop menu -->
        <ul class="hidden lg:flex items-center gap-1 mx-auto list-none p-0 m-0">

          <li>
            <a href="/"
               class="px-4 py-2.5 rounded-lg text-sm font-semibold
                      text-[#3e87d0]  bg-blue-200  transition-colors no-underline hover:underline">
              Home
            </a>
          </li>

          <!-- About dropdown -->
          <li class="relative group">
            <a href="/about"
               class="flex items-center gap-0.5 px-4 py-2.5 rounded-lg text-sm 
                      font-medium text-gray-700 hover:bg-blue-50 hover:text-[#3e87d0]
                      transition-colors no-underline hover:underline">
              About
              <svg class="w-3.5 h-3.5 opacity-50" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </a>
            <ul class="absolute top-full left-0 mt-2 w-44 bg-white border border-gray-100
                       rounded-xl shadow-lg py-1.5 list-none p-0
                       opacity-0 invisible group-hover:opacity-100 group-hover:visible
                       translate-y-1 group-hover:translate-y-0 transition-all duration-200 z-50">
              <li><a href="/about/overview"
                     class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50
                            hover:text-[#3e87d0] transition-colors no-underline">Overview</a></li>
              <li><a href="/about/mandate"
                     class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50
                            hover:text-[#3e87d0] transition-colors no-underline">Mandate</a></li>
              <li><a href="/about/leadership"
                     class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50
                            hover:text-[#3e87d0] transition-colors no-underline">Leadership</a></li>
            </ul>
          </li>

          <!-- Documents dropdown -->
          <li class="relative group">
            <a href="/documents"
               class="flex items-center gap-0.5 px-4 py-2.5 rounded-lg text-sm
                      font-medium text-gray-700 hover:bg-blue-50 hover:text-[#3e87d0]
                      transition-colors no-underline hover:underline">
              Documents
              <svg class="w-3.5 h-3.5 opacity-50" viewBox="0 0 24 24" fill="none"
                   stroke="currentColor" stroke-width="2">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </a>
            <ul class="absolute top-full left-0 mt-2 w-44 bg-white border border-gray-100
                       rounded-xl shadow-lg py-1.5 list-none p-0
                       opacity-0 invisible group-hover:opacity-100 group-hover:visible
                       translate-y-1 group-hover:translate-y-0 transition-all duration-200 z-50">
              <li><a href="/documents/reports"
                     class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50
                            hover:text-[#3e87d0] transition-colors no-underline">Reports</a></li>
              <li><a href="/documents/publications"
                     class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50
                            hover:text-[#3e87d0] transition-colors no-underline">Publications</a></li>
              <li><a href="/documents/gazettes"
                     class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50
                            hover:text-[#3e87d0] transition-colors no-underline">Gazettes</a></li>
            </ul>
          </li>

          <li v-for="link in simpleLinks" :key="link.href">
            <a :href="link.href"
               class="px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700
                      hover:bg-blue-50 hover:text-[#3e87d0] transition-colors no-underline hover:underline">
              {{ link.label }}
            </a>
          </li>

        </ul>

        <!-- CTA Button -->
        <a href="/contact"
           class="hidden lg:inline-flex items-center shrink-0
                  bg-[#ffd700] hover:bg-[#ffcc00] text-gray-900 font-bold
                  text-sm px-5 py-2 rounded-full shadow shadow-yellow-200
                  transition-all duration-200 hover:-translate-y-0.5 no-underline">
          Contact Us
        </a>

        <!-- Mobile hamburger -->
        <button @click="mobileOpen = !mobileOpen"
                class="lg:hidden ml-auto p-1.5 rounded-lg text-gray-600
                       hover:bg-gray-100 transition-colors focus:outline-none"
                aria-label="Toggle menu">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2">
            <template v-if="!mobileOpen">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </template>
            <template v-else>
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </template>
          </svg>
        </button>

      </div>

      <!-- Mobile Menu -->
      <div v-show="mobileOpen"
           class="lg:hidden border-t border-gray-100 px-4 pb-4 pt-2 flex flex-col gap-1">
        <a href="/"
           class="px-3 py-2.5 rounded-lg text-sm font-semibold text-[#3e87d0]
                  bg-blue-50 no-underline">Home</a>
        <a v-for="link in allMobileLinks" :key="link.href" :href="link.href"
           class="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700
                  hover:bg-blue-50 hover:text-[#3e87d0] transition-colors no-underline hover:underline">
          {{ link.label }}
        </a>
        <a href="/contact"
           class="mt-2 text-center bg-[#ffd700] hover:bg-[#ffcc00] text-gray-900
                  font-bold text-sm py-2.5 rounded-full transition-colors no-underline hover:underline">
          Contact Us
        </a>
      </div>
    </nav>

  </div>
</template>

<script>
export default {
  name: 'Topbar',
  data() {
    return {
      isDark: false,
      mobileOpen: false,
      simpleLinks: [
        { href: '/institutions', label: 'Institutions' },
        { href: '/training',     label: 'Training'     },
        { href: '/news',         label: 'News'         },
      ],
      allMobileLinks: [
        { href: '/about',        label: 'About'        },
        { href: '/documents',    label: 'Documents'    },
        { href: '/institutions', label: 'Institutions' },
        { href: '/training',     label: 'Training'     },
        { href: '/news',         label: 'News'         },
      ],
    }
  },
  methods: {
    toggleDark() {
      this.isDark = !this.isDark
      document.documentElement.classList.toggle('dark', this.isDark)
    },
  },
}
</script>