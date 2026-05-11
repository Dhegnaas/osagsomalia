<template>
  <div class="bg-white py-12 px-4">
    <div class="max-w-7xl mx-auto">
      
      <div class="text-center mb-10">
        <h2 class="text-3xl font-bold text-[#2b6cb0] mb-2">Tax Exemption</h2>
        <div class="flex justify-center gap-1 mb-4">
          <div class="w-8 h-1 bg-blue-500"></div>
          <div class="w-8 h-1 bg-yellow-400"></div>
          <div class="w-8 h-1 bg-green-600"></div>
        </div>
        <p class="text-gray-500 max-w-2xl mx-auto">
          Below you can find the tax exemption documents published by the Office of the Attorney General of the Government.
        </p>
      </div>

      <div class="overflow-x-auto rounded-xl shadow-sm border border-gray-100">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-[#4a90e2] text-white uppercase text-[11px] tracking-wider">
              <th class="p-4 font-bold">Reference Number</th>
              <th class="p-4 font-bold">Title</th>
              <th class="p-4 font-bold">Organization</th>
              <th class="p-4 font-bold text-center">Date</th>
              <th class="p-4 font-bold text-center">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-100">
            <tr v-for="(item, index) in exemptions" :key="index" class="hover:bg-blue-50/50 transition">
              
              <td class="p-4 whitespace-nowrap">
                <div class="bg-[#93c5fd] text-[#1e40af] text-[11px] font-bold py-1.5 px-4 rounded-full inline-block">
                  {{ item.ref }}
                </div>
              </td>

              <td class="p-4">
                <h3 class="text-sm font-bold text-gray-800">{{ item.title }}</h3>
                <p class="text-[11px] text-gray-400 mt-0.5">{{ item.subTitle }}</p>
              </td>

              <td class="p-4">
                <div class="bg-blue-50 text-[#3182ce] text-[10px] font-bold py-2 px-3 rounded-md border border-blue-100 text-center uppercase leading-tight max-w-[140px]">
                  {{ item.org }}
                </div>
              </td>

              <td class="p-4 text-center">
                <div class="text-sm text-gray-600 font-medium whitespace-nowrap">
                  {{ item.day }} <br> {{ item.year }}
                </div>
              </td>

              <td class="p-4 text-center">
                <button class="bg-[#fef3c7] text-yellow-600 p-2 rounded hover:bg-yellow-200 transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/>
                  </svg>
                </button>
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
  name: 'TaxExemptionTable',
  data() {
    return {
      exemptions: [
        {
          ref: 'WM/XWD-134/2026',
          title: 'Warbixinta Cashuur Dhaafka Rubuca 4-aad ee 2025',
          subTitle: 'Warbixinta Cashuur Dhaafka Rubuca 4-aad ee 2025',
          org: 'Wasaaradda Maaliyadda',
          day: '16 Apr',
          year: '2026'
        },
        {
          ref: 'MOF/OM/0402/2025',
          title: 'Warbixinta Canshuur-dhaafka ee Rubuca 3-aad ee 2025',
          subTitle: 'Warbixinta Canshuur-dhaafka ee Rubuca 3-aad ee 2025',
          org: 'Wasaaradda Maaliyadda',
          day: '10 Dec',
          year: '2025'
        },
        {
          ref: 'MOF/OM/0290/2025',
          title: 'Warbixinta Cashuur Dhaafka Rubuca 2-aad ee 2025',
          subTitle: 'Warbixinta Cashuur Dhaafka Rubuca 2-aad ee 2025',
          org: 'Wasaaradda Maaliyadda',
          day: '24 Sep',
          year: '2025'
        },
        {
          ref: 'MOF/OM/0160/2025',
          title: 'Warbixinta Cashuur-dhaafka - Rubuca 1-aad ee 2025',
          subTitle: 'Warbixinta Cashuur-dhaafka - Rubuca 1-aad ee 2025',
          org: 'Wasaaradda Maaliyadda',
          day: '25 Jun',
          year: '2025'
        }
      ]
    }
  }
}
</script>