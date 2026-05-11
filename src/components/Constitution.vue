<template>
  <div class="bg-white min-h-screen py-10 px-4">
    <div class="max-w-7xl mx-auto">
      
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-[#2b6cb0] mb-2">Official Bulletins</h2>
        <div class="flex justify-center gap-1 mb-4">
          <div class="w-8 h-1 bg-blue-500"></div>
          <div class="w-8 h-1 bg-yellow-400"></div>
          <div class="w-8 h-1 bg-green-600"></div>
        </div>
        <p class="text-gray-500">Here you can find all the bulletins issued by the Office of the State Attorney General</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8 items-end">
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Type</label>
          <select class="w-full border border-blue-400 rounded-md p-2 focus:ring-2 focus:ring-blue-300 outline-none">
            <option>----------</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Organization</label>
          <select class="w-full border border-blue-400 rounded-md p-2 focus:ring-2 focus:ring-blue-300 outline-none">
            <option>----------</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Year</label>
          <select class="w-full border border-blue-400 rounded-md p-2 focus:ring-2 focus:ring-blue-300 outline-none">
            <option>----------</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-semibold text-gray-700 mb-1">Search</label>
          <input type="text" placeholder="Search" class="w-full border border-blue-400 rounded-md p-2 focus:ring-2 focus:ring-blue-300 outline-none" />
        </div>
        <button class="bg-[#2d6a4f] text-white font-bold py-2 px-6 rounded-md hover:bg-[#1b4332] transition">
          Filter
        </button>
      </div>

      <div class="overflow-x-auto shadow-sm rounded-lg">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-[#4a90e2] text-white uppercase text-xs">
              <th class="p-4 font-bold">Number</th>
              <th class="p-4 font-bold">Subject</th>
              <th class="p-4 font-bold">Organization</th>
              <th class="p-4 font-bold">Date</th>
              <th class="p-4 font-bold">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr v-for="(item, index) in bulletins" :key="index" class="hover:bg-blue-50 transition">
              <td class="p-4">
                <div class="bg-[#93c5fd] text-[#1e40af] text-[10px] font-bold p-2 rounded-full text-center w-24 leading-tight">
                  {{ item.type }} <br> {{ item.number }}
                </div>
              </td>
              <td class="p-4 text-sm font-semibold text-gray-700 max-w-xs md:max-w-md">
                {{ item.subject }}
              </td>
              <td class="p-4 text-xs text-gray-600 italic">
                {{ item.org }}
              </td>
              <td class="p-4 text-sm text-gray-600 whitespace-nowrap">
                {{ item.date }}
              </td>
              <td class="p-4">
                <div class="flex gap-2">
                  <button class="p-2 bg-[#93c5fd] text-blue-800 rounded hover:bg-blue-300">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/></svg>
                  </button>
                  <button class="p-2 bg-[#fef08a] text-yellow-800 rounded hover:bg-yellow-300">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'OfficialBulletinsTable',
  data() {
    return {
      bulletins: [
        {
          type: 'XEER',
          number: 'LR.193',
          subject: 'Xeer-nidaamiyaha Sharciga Dhowrista Xogta Dadwaynaha',
          org: 'Wasaaradda Isgaarsiinta & Teknolojiyadda',
          date: 'Apr 2026'
        },
        {
          type: 'XEER',
          number: 'LR.544',
          subject: 'SIYAASADDA QARAN EE NAAFADA SOOMAALIYEED',
          org: 'Wasaaradda Haweenka iyo Hormatinta Xuquuqul Aadanaha',
          date: 'Apr 2026'
        },
        {
          type: 'XEER',
          number: 'LR.192',
          subject: 'XEERKA DHISMAHA MACHADKA SOOMAALIYEED EE BADAHA',
          org: 'Wasaaradda Kalluumeysiga & Kheyraadka Badda',
          date: 'Apr 2026'
        },
        {
          type: 'SHARCI',
          number: 'LR.46',
          subject: 'sharciga Dad-dhigista iyo Tirakoobka Xaaladaha Madaniga',
          org: 'Wasaaradda Arrimaha Gudaha, Federaalka & Dib u Heshiisiinta',
          date: 'Apr 2026'
        }
      ]
    }
  }
}
</script>