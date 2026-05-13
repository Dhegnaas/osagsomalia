<template>
  <div class="font-sans">
    <div
      class="bg-gradient-to-r from-[#3e87d0] to-[#1e5799] text-white text-sm"
    >
      <div
        class="max-w-7xl mx-auto px-10 py-4 flex items-center justify-between"
      >
        <div class="flex items-center gap-6">
          <a
            href="mailto:archive@sag.gov.so"
            class="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity no-underline text-white"
          >
            <svg
              class="w-3.5 h-3.5 shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
              />
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
              />
            </svg>
            archive@sag.gov.so
          </a>
          <a
            href="tel:+252613242015"
            class="flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity no-underline text-white"
          >
            <svg
              class="w-3.5 h-3.5 shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
              />
            </svg>
            +252 613242015
          </a>
        </div>

        <div class="flex items-center gap-3">
          <a
            href="#"
            aria-label="Facebook"
            class="opacity-80 bg-white/20 p-2 rounded-full hover:bg-[#ffd700] hover:text-black hover:opacity-100 transition-all"
          >
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
              />
            </svg>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            class="opacity-80 bg-white/20 p-2 rounded-full hover:text-black hover:bg-[#ffd700] hover:opacity-100 transition-all"
          >
            <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
              />
            </svg>
          </a>

          <button
            @click="toggleDark"
            class="opacity-80 bg-white/20 p-2 rounded-full hover:bg-[#ffd700] ring-2 ring-white/20 hover:text-black hover:opacity-100 transition-all focus:outline-none"
            :aria-label="isDark ? 'Light mode' : 'Dark mode'"
          >
            <svg
              v-if="!isDark"
              class="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
            </svg>
            <svg
              v-else
              class="w-3.5 h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
          </button>

          <div
            class="flex items-center gap-1 border border-white/40 rounded-full px-4 py-2 text-xs font-semibold cursor-pointer hover:bg-white/15 transition-colors"
          >
            <span>EN</span>
            <svg
              class="w-2.5 h-2.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <nav class="bg-white border-b border-gray-100 shadow-sm">
      <div class="max-w-7xl mx-auto px-6 flex items-center gap-6 h-20">
        <router-link
          to="/"
          class="flex items-center gap-2.5 shrink-0 no-underline"
        >
          <img
            src="/so.png"
            alt="OSAG Logo"
            class="w-[100px] h-16 object-contain"
          />
          <div class="flex flex-col leading-none">
            <span
              class="text-[24px] font-extrabold text-[#3e87d0] tracking-wide"
              >OSAG</span
            >
            <span
              class="text-[11px] font-bold text-gray-500 tracking-[0.15em] uppercase mt-0.5"
              >Somalia</span
            >
          </div>
        </router-link>

        <ul class="hidden lg:flex items-center gap-1 mx-auto list-none p-0 m-0">
          <li>
            <router-link
              to="/"
              class="px-4 py-2.5 rounded-lg text-sm font-semibold text-[#3e87d0] bg-blue-50 no-underline"
              >Home</router-link
            >
          </li>

          <li class="relative group">
            <!-- Main Link: About -->
            <router-link
              to="/about"
              class="flex items-center gap-0.5 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-[#3e87d0] transition-colors no-underline"
              active-class="bg-blue-50 text-[#3e87d0]"
            >
              About
              <svg
                class="w-3.5 h-3.5 opacity-50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </router-link>

            <!-- Dropdown Menu -->
            <ul
              class="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-100 rounded-xl shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-1 group-hover:translate-y-0 transition-all duration-200 z-50 list-none"
            >
              <li>
                <router-link
                  to="/about"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#3e87d0] no-underline"
                >
                  About Us
                </router-link>
              </li>
              <li>
                <!-- Hubi in xarfaha yaryar/waawayn (case-sensitive) ay la mid yihiin router-kaaga (tusaale: /about/attorney) -->
                <router-link
                  to="/about/attorney-general"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#3e87d0] no-underline"
                >
                  Attorney General
                </router-link>
              </li>
              <li>
                <router-link
                  to="/about/services"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#3e87d0] no-underline"
                >
                  Services
                </router-link>
              </li>
              <li>
                <router-link
                  to="/about/organizational-structure"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#3e87d0] no-underline"
                >
                  Organizational Structure
                </router-link>
              </li>
            </ul>
          </li>

          <li class="relative group">
            <router-link
              to="/documents"
              class="flex items-center gap-0.5 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-[#3e87d0] transition-colors no-underline"
            >
              Documents
              <svg
                class="w-3.5 h-3.5 opacity-50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </router-link>

            <div
              class="absolute top-full left-0 mt-2 w-[520px] bg-white border border-gray-100 rounded-2xl shadow-xl p-6 flex gap-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-50"
            >
              <div class="flex-1">
                <h3
                  class="text-[#3e87d0] font-bold text-[15px] mb-4 px-2 uppercase tracking-wider"
                >
                  Legal Documents
                </h3>
                <ul class="space-y-1 list-none p-0">
                  <li>
                    <router-link
                      to="/documents/legal-documents"
                      class="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-[#3e87d0] rounded-lg no-underline transition-colors"
                    >
                      Legislation
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/documents/legal-documents/agreements"
                      class="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-[#3e87d0] rounded-lg no-underline transition-colors"
                    >
                      Agreements
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/documents/legal-documents/cabinet-decisions"
                      class="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-[#3e87d0] rounded-lg no-underline transition-colors"
                    >
                      Cabinet decisions
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/documents/legal-documents/budget"
                      class="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-[#3e87d0] rounded-lg no-underline transition-colors"
                    >
                      Budget
                    </router-link>
                  </li>
                  <li>
                    <router-link
                      to="/documents/legal-documents/resolutions"
                      class="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-[#3e87d0] rounded-lg no-underline transition-colors"
                    >
                      Resolutions
                    </router-link>
                  </li>
                </ul>
              </div>

              <div class="w-px bg-gray-100 self-stretch"></div>

              <div class="flex-1">
                <h3
                  class="text-[#3e87d0] font-bold text-[15px] mb-4 px-2 uppercase tracking-wider"
                >
                  Public Documents
                </h3>
                <ul class="space-y-1 list-none p-0">
                  <li>
                    <router-link
                      to="/documents/legal-documents/official-bulletins"
                      class="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-[#3e87d0] rounded-lg no-underline transition-colors"
                    >
                      Official Bullets
                    </router-link>
                  </li>

                  <li>
                    <router-link
                      to="/documents/Publications/bulletins-contents"
                      class="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-[#3e87d0] rounded-lg no-underline transition-colors"
                    >
                      Bulletin Contents
                    </router-link>
                  </li>

                  <li>
                    <router-link
                      to="/documents/Publications/constitution"
                      class="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-[#3e87d0] rounded-lg no-underline transition-colors"
                    >
                      Constitution
                    </router-link>
                  </li>

                  <li>
                    <router-link
                      to="/documents/Publications/tax-exemption"
                      class="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-[#3e87d0] rounded-lg no-underline transition-colors"
                    >
                      Tax Exemptions
                    </router-link>
                  </li>

                  <li>
                    <router-link
                      to="/documents/Publications/PublicNotary"
                      class="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-[#3e87d0] rounded-lg no-underline transition-colors"
                    >
                      Public Notices
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li v-for="link in simpleLinks" :key="link.href">
            <router-link
              :to="link.href"
              class="px-4 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-[#3e87d0] transition-colors no-underline"
              >{{ link.label }}</router-link
            >
          </li>
        </ul>

        <router-link
          to="/contact"
          class="hidden lg:inline-flex items-center bg-[#ffd700] hover:bg-[#ffcc00] text-gray-900 font-bold text-sm px-6 py-2.5 rounded-full shadow-lg shadow-yellow-200/50 transition-all hover:-translate-y-0.5 no-underline"
        >
          Contact Us
        </router-link>

        <button
          @click="mobileOpen = !mobileOpen"
          class="lg:hidden ml-auto p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none"
        >
          <svg
            class="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path v-if="!mobileOpen" d="M3 6h18M3 12h18M3 18h18" />
            <path v-else d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div
          v-show="mobileOpen"
          class="lg:hidden border-t border-gray-100 bg-white px-4 pb-6 pt-2 flex flex-col gap-1 shadow-inner"
        >
          <router-link
            to="/"
            class="px-4 py-3 rounded-lg text-sm font-semibold text-[#3e87d0] bg-blue-50 no-underline"
            >Home</router-link
          >
          <router-link
            v-for="link in allMobileLinks"
            :key="link.href"
            :to="link.href"
            class="px-4 py-3 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-50 no-underline"
            >{{ link.label }}</router-link
          >
          <router-link
            to="/contact"
            class="mt-4 text-center bg-[#ffd700] text-gray-900 font-bold text-sm py-3 rounded-xl no-underline"
            >Contact Us</router-link
          >
        </div>
      </transition>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Topbar",
  data() {
    return {
      isDark: false,
      mobileOpen: false,
      simpleLinks: [
        { href: "/institutions", label: "Institutions" },
        { href: "/trainings", label: "Training" },
        { href: "/news", label: "News" },
      ],
      allMobileLinks: [
        { href: "/about", label: "About" },
        { href: "/documents", label: "Documents" },
        { href: "/institutions", label: "Institutions" },
        { href: "/training", label: "Training" },
        { href: "/news", label: "News" },
      ],
    };
  },
  methods: {
    toggleDark() {
      this.isDark = !this.isDark;
      document.documentElement.classList.toggle("dark", this.isDark);
    },
  },
};
</script>

<style scoped>
/* Wixii transition ah oo dheeri ah halkan ayaad ku dari kartaa */
</style>
