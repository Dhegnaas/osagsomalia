<template>
  <section class="py-16 bg-gray-50 font-sans">
    <div class="max-w-7xl mx-auto px-4 text-center">
      
      <!-- Cinwaanka Qaybta -->
      <h2 class="text-4xl font-extrabold text-[#1a365d] mb-4">Recent Bulletins</h2>
      
      <!-- Xariiqyada Midabada leh -->
      <div class="flex justify-center gap-1 mb-6">
        <span class="w-10 h-1 bg-blue-500 rounded"></span>
        <span class="w-10 h-1 bg-yellow-400 rounded"></span>
        <span class="w-10 h-1 bg-green-700 rounded"></span>
      </div>

      <p class="max-w-2xl mx-auto text-slate-500 mb-10 text-lg">
        Below you can find the latest bulletins published by the office.
      </p>

      <!-- Shaxda Bulletins (Table) -->
      <div class="overflow-x-auto bg-white border border-slate-100 rounded-2xl shadow-sm mb-10">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-[#4285f4] text-white uppercase text-[11px] font-bold tracking-widest">
              <th class="px-6 py-5">Number</th>
              <th class="px-6 py-5">Subject</th>
              <th class="px-6 py-5">Organization</th>
              <th class="px-6 py-5">Date</th>
              <th class="px-6 py-5 text-center">Actions</th>
            </tr>
          </thead>
          
          <tbody class="divide-y divide-slate-100">
            <tr v-for="(bulletin, index) in bulletins" :key="index" class="hover:bg-blue-50/40 transition-colors">
              <!-- Number Column -->
              <td class="px-6 py-6 whitespace-nowrap">
                <span class="bg-[#d2e3fc] text-[#1a365d] text-[11px] font-bold px-4 py-2 rounded-full inline-block min-w-[110px] text-center shadow-sm">
                  {{ bulletin.number }}
                </span>
              </td>
              
              <!-- Subject Column -->
              <td class="px-6 py-6">
                <p class="text-[13px] font-semibold text-slate-700 leading-relaxed max-w-md">
                  {{ bulletin.subject }}
                </p>
              </td>
              
              <!-- Organization Column -->
              <td class="px-6 py-6">
                <p class="text-[12px] text-slate-600 font-medium italic">
                  {{ bulletin.organization }}
                </p>
              </td>
              
              <!-- Date Column -->
              <td class="px-6 py-6 whitespace-nowrap">
                <div class="text-[12px] text-slate-500 font-bold text-center uppercase leading-tight">
                  {{ bulletin.date.split(' ')[0] }} <br/>
                  <span class="font-normal">{{ bulletin.date.split(' ')[1] }}</span>
                </div>
              </td>
              
              <!-- Actions Column -->
              <td class="px-6 py-6">
                <div class="flex justify-center gap-3">
                  <!-- View Button -->
                  <button title="View" class="p-2.5 bg-[#d2e3fc] text-blue-600 rounded-lg hover:bg-blue-200 transition-all shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                  <!-- Download Button -->
                  <button title="Download" class="p-2.5 bg-[#fff2cc] text-yellow-600 rounded-lg hover:bg-yellow-200 transition-all shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- View More Button -->
      <button class="inline-flex items-center px-10 py-3.5 bg-[#4285f4] text-white font-bold rounded-full hover:bg-blue-600 transition shadow-lg hover:shadow-blue-200 transform hover:-translate-y-1">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
        View More
      </button>

    </div>
  </section>
</template>

<script>
export default {
  name: 'RecentBulletins',
  data() {
    return {
      bulletins: [
        {
          number: "XEER LR.194",
          subject: "Qaraarla Burinta iyo Baabi'inta dhammaan heshiisyada iyo is-afgaradka u dhaxeeyay heerka maamul ee kala duwan ee Soomaaliya iyo Isutagga Imaaraadkaa Carabta.pdf",
          organization: "Office of Prime Minister",
          date: "Apr 2026"
        },
        {
          number: "XEER LR.193",
          subject: "Xeer-nidaamiyaha Sharciga Dhowrista Xogta Dadwaynaha",
          organization: "Wasaaradda Isgaarsiinta & Teknolojiyadda",
          date: "Apr 2026"
        },
        {
          number: "XEER LR.192",
          subject: "XEERKA DHISMAHA MACHADKA SOOMAALIYEED EE BADAHA",
          organization: "Wasaaradda Kalluumeysiga & Kheyraadka Badda",
          date: "Apr 2026"
        },
        {
          number: "XEER LR.191",
          subject: "Xeer-nidaamiyaha buugga badmaaxa Soomaaliyeed",
          organization: "Wasaaradda Dekedaha & Gaadiidka Badda",
          date: "Apr 2026"
        },
        {
          number: "XEER LR.190",
          subject: "XEER-NIDAAMIYAHA SHIRKADAHA ADEEGYADA SHARCI",
          organization: "Wasaaradda Caddaaladda & Arrimaha Dastuurka",
          date: "Apr 2026"
        }
      ]
    }
  }
}
</script>

<style scoped>
/* Wixii habayn gaar ah halkan geli */
</style>