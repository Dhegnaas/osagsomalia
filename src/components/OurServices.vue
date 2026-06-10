<template>
  <section class="py-16 bg-gray-50 font-sans">
    <div class="max-w-7xl mx-auto px-4 text-center">
      
      <h2 class="text-4xl font-extrabold text-slate-900 mb-4">Our Services</h2>
      
      <div class="flex justify-center gap-1 mb-8">
        <span class="w-10 h-1 bg-blue-500 rounded"></span>
        <span class="w-10 h-1 bg-yellow-400 rounded"></span>
        <span class="w-10 h-1 bg-green-700 rounded"></span>
      </div>

      <p class="max-w-3xl mx-auto text-slate-600 mb-12 text-lg leading-relaxed">
        The Office of the State Attorney General is an independent institution...
        <a href="#" class="text-blue-600 font-bold ml-1">Read more →</a>
      </p>

      <!-- Slider -->
      <div class="relative flex items-center">

        <!-- LEFT -->
        <button
          @click="prev"
          class="absolute -left-4 z-20 p-4 bg-blue-500 text-white rounded-full shadow-xl hover:bg-blue-600"
        >
          ←
        </button>

        <!-- Cards Wrapper -->
        <div class="overflow-hidden w-full">
          <div
            class="flex transition-all duration-500"
            :style="{ transform: `translateX(-${currentIndex * 100 / 3}%)` }"
          >
            <div
              v-for="(service, index) in displayServices"
              :key="index"
              class="w-full md:w-1/3 px-4 flex-shrink-0"
            >
              <div class="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all text-left">
                
                <div class="text-blue-600 mb-6 bg-blue-50 inline-block p-3 rounded-lg">
                  <component :is="service.icon" class="w-8 h-8" />
                </div>

                <h3 class="text-2xl font-bold text-slate-800 mb-4">
                  {{ service.title }}
                </h3>

                <p class="text-slate-500 leading-relaxed">
                  {{ service.description }}
                </p>

              </div>
            </div>
          </div>
        </div>

        <!-- RIGHT -->
        <button
          @click="next"
          class="absolute -right-4 z-20 p-4 bg-blue-500 text-white rounded-full shadow-xl hover:bg-blue-600"
        >
          →
        </button>
      </div>

      <!-- VIEW ALL -->
      <div class="mt-16">
        <button
          @click="toggleView"
          class="px-8 py-4 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-600 shadow-lg"
        >
          {{ showAll ? 'Show Less' : 'View All Services →' }}
        </button>
      </div>

    </div>
  </section>
</template>

<script>
import {
  ScaleIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
  ClipboardDocumentListIcon,
  BookOpenIcon,
  AcademicCapIcon,
  NewspaperIcon,
  BuildingLibraryIcon
} from '@heroicons/vue/24/outline'

export default {
  data() {
    return {
      currentIndex: 0,
      showAll: false,

      services: [
        {
          title: "Legal Advisory",
          description: "Providing legal advice on matters requested or referred from the Presidency of the Federal Republic and other government branches.",
          icon: ScaleIcon
        },
        {
          title: "Government Defense",
          description: "Protecting the rights and public interest of the government, defending the government and its various branches before courts.",
          icon: ShieldCheckIcon
        },
        {
          title: "Contracts",
          description: "Preparation and review of contracts issued by the government, whether with individuals or companies.",
          icon: DocumentTextIcon
        },
        {
          title: "Agreements",
          description: "Preparation and review of agreements to which the government is a party, before signing, whether international or domestic.",
          icon: ClipboardDocumentListIcon
        },
        {
          title: "Legislative Drafting",
          description: "Preparation or advice on legislative drafts submitted to Parliament for approval, and answering questions from the Council of Ministers.",
          icon: BookOpenIcon
        },
        {
          title: "Legal Dispute Resolution",
          description: "The Office works to mediate any legal disputes arising between government members, with binding advisory opinions.",
          icon: BuildingLibraryIcon
        },
        {
          title: "Official Gazette",
          description: "Compilation and publication of the Official Gazette to inform government agencies and the public of government activities and laws.",
          icon: NewspaperIcon
        },
        {
          title: "Legal Research",
          description: "Conducting scientific research on national laws and international regulations, especially those issued by international organizations.",
          icon: AcademicCapIcon
        }
      ]
    }
  },

  computed: {
    displayServices() {
      return this.showAll ? this.services : this.services.slice(0, 6)
    }
  },

  methods: {
    next() {
      if (this.currentIndex < this.displayServices.length - 3) {
        this.currentIndex++
      }
    },
    prev() {
      if (this.currentIndex > 0) {
        this.currentIndex--
      }
    },
    toggleView() {
      this.showAll = !this.showAll
      this.currentIndex = 0
    }
  }
}
</script>

<style scoped>
/* Wixii styling dheeraad ah oo Tailwind ka baxsan halkan geli */
</style>