<template>
  <main class="flex-1 pb-8">
    <!-- Page header -->

    <div class="mt-8">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-lg leading-6 font-medium text-gray-900">پیشخوان</h2>
        <div class="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Card -->
          <div
            v-for="card in cards"
            :key="card.name"
            class="bg-white overflow-hidden shadow rounded-lg"
          >
            <div class="p-5">
              <div class="flex items-center">
                <div class="flex-shrink-0">
                  <component
                    :is="card.icon"
                    class="h-6 w-6 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <div class="mr-5 w-0 flex-1">
                  <dl>
                    <dt class="text-sm font-medium text-gray-500 truncate">
                      {{ card.name }}
                    </dt>
                    <dd>
                      <div class="text-lg font-medium text-gray-900">
                        {{ card.amount }}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
            <div class="bg-gray-50 px-5 py-3">
              <div class="text-sm">
                <a
                  :href="card.href"
                  class="font-medium text-cyan-700 hover:text-cyan-900"
                >
                  مشاهده همه
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-6xl mx-auto my-8 px-4 sm:px-6 lg:px-0">
        <div
          class="mx-8 mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6"
        >
          <div class="bg-white col-span-4 shadow rounded-lg">
            <h2 class="m-8 text-sm font-medium text-gray-500 truncate">
              فروش ماهیانه
            </h2>
            <apexchart
              type="bar"
              :options="options"
              :series="series"
            ></apexchart>
          </div>
          <div class="col-span-2 bg-white shadow rounded-lg">
            <h2 class="m-8 text-sm font-medium text-gray-500 truncate">
              آمار فروش
            </h2>
            <apexchart
              type="radialBar"
              height="300"
              :options="radialOptions"
              :series="radialseries"
            ></apexchart>
            <button
              type="button"
              class="w-11/12 mr-4 inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              2003
            </button>
          </div>
        </div>
      </div>

      <h2
        class="max-w-6xl mx-auto mt-8 px-4 text-lg leading-6 font-medium text-gray-900 sm:px-6 lg:px-8"
      >
        فعالیت های اخیر
      </h2>

      <!-- Activity list (smallest breakpoint only) -->
      <div class="shadow sm:hidden">
        <ul
          role="list"
          class="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden"
        >
          <li v-for="transaction in transactions" :key="transaction.id">
            <a
              :href="transaction.href"
              class="block px-4 py-4 bg-white hover:bg-gray-50"
            >
              <span class="flex items-center space-x-4 space-x-reverse">
                <span class="flex-1 flex space-x-2 space-x-reverse truncate">
                  <CashIcon
                    class="flex-shrink-0 h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span class="flex flex-col text-gray-500 text-sm truncate">
                    <span class="truncate">{{ transaction.name }}</span>
                    <span
                      ><span class="text-gray-900 font-medium">{{
                        transaction.amount
                      }}</span>
                      {{ transaction.currency }}</span
                    >
                    <time :datetime="transaction.datetime">{{
                      transaction.date
                    }}</time>
                  </span>
                </span>
                <ChevronRightIcon
                  class="flex-shrink-0 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </a>
          </li>
        </ul>

        <nav
          class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200"
          aria-label="Pagination"
        >
          <div class="flex-1 flex justify-between">
            <a
              href="#"
              class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
            >
              Previous
            </a>
            <a
              href="#"
              class="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-500"
            >
              Next
            </a>
          </div>
        </nav>
      </div>

      <!-- Activity table (small breakpoint and up) -->
      <div class="hidden sm:block">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col mt-2">
            <div
              class="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg"
            >
              <table class="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th
                      class="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      معامله
                    </th>
                    <th
                      class="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      مقدار
                    </th>
                    <th
                      class="hidden px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider md:block"
                    >
                      وضعیت
                    </th>
                    <th
                      class="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      تاریخ
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr
                    v-for="transaction in transactions"
                    :key="transaction.id"
                    class="bg-white"
                  >
                    <td
                      class="max-w-0 w-full px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                    >
                      <div class="flex">
                        <a
                          :href="transaction.href"
                          class="group inline-flex space-x-2 space-x-reverse truncate text-sm"
                        >
                          <CashIcon
                            class="flex-shrink-0 h-5 w-5 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          <p
                            class="text-gray-500 truncate group-hover:text-gray-900"
                          >
                            {{ transaction.name }}
                          </p>
                        </a>
                      </div>
                    </td>
                    <td
                      class="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500"
                    >
                      <span class="text-gray-900 font-medium"
                        >{{ transaction.amount }}
                      </span>
                      {{ transaction.currency }}
                    </td>
                    <td
                      class="hidden px-6 py-4 whitespace-nowrap text-sm text-gray-500 md:block"
                    >
                      <span
                        :class="[
                          statusStyles[transaction.status],
                          'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize',
                        ]"
                      >
                        {{ transaction.status }}
                      </span>
                    </td>
                    <td
                      class="px-6 py-4 text-right whitespace-nowrap text-sm text-gray-500"
                    >
                      <time :datetime="transaction.datetime">{{
                        transaction.date
                      }}</time>
                    </td>
                  </tr>
                </tbody>
              </table>
              <!-- Pagination -->
              <nav
                class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6"
                aria-label="Pagination"
              >
                <div class="hidden sm:block">
                  <p class="text-sm text-gray-700">
                    Showing
                    {{ ' ' }}
                    <span class="font-medium">1</span>
                    {{ ' ' }}
                    to
                    {{ ' ' }}
                    <span class="font-medium">10</span>
                    {{ ' ' }}
                    of
                    {{ ' ' }}
                    <span class="font-medium">20</span>
                    {{ ' ' }}
                    results
                  </p>
                </div>
                <div class="flex-1 flex justify-between sm:justify-end">
                  <a
                    href="#"
                    class="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    قبلی
                  </a>
                  <a
                    href="#"
                    class="mr-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                  >
                    بعدی
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup>
  import { ref } from 'vue';

  import {
    BellIcon,
    ClockIcon,
    CogIcon,
    CreditCardIcon,
    DocumentReportIcon,
    HomeIcon,
    MenuAlt1Icon,
    QuestionMarkCircleIcon,
    ScaleIcon,
    ShieldCheckIcon,
    UserGroupIcon,
    XIcon,
  } from '@heroicons/vue/outline';
  import {
    CashIcon,
    CheckCircleIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    OfficeBuildingIcon,
    SearchIcon,
  } from '@heroicons/vue/solid';

  const options = {
    chart: {
      id: 'vuechart-example',
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [1395, 1396, 1397, 1398, 1399, 1400, 1401, 1402],
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
      },
    },
    colors: ['#1d4ed8'],
  };

  const series = [
    {
      name: 'series-1',
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];

  const radialseries = [70];

  const radialOptions = {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        hollow: {
          size: '70%',
        },
      },
    },
    labels: ['Cricket'],
  };

  const navigation = [
    { name: 'خانه', href: '#', icon: HomeIcon, current: true },
    { name: 'جدول ها', href: '#', icon: ClockIcon, current: false },
    { name: 'فرم ها', href: '#', icon: ScaleIcon, current: false },
    { name: 'کامپوننت ها', href: '#', icon: CreditCardIcon, current: false },
    { name: ' تقویم', href: '#', icon: UserGroupIcon, current: false },
    { name: 'صفحه ها', href: '#', icon: DocumentReportIcon, current: false },
  ];
  const secondaryNavigation = [
    { name: 'تنظیمات', href: '/settings', icon: CogIcon },
    { name: 'راهنما', href: '#', icon: QuestionMarkCircleIcon },
    { name: 'حریم خصوصی', href: '#', icon: ShieldCheckIcon },
  ];
  const cards = [
    {
      name: 'درامد کل',
      href: '#',
      icon: ScaleIcon,
      amount: '۳۰,۶۵۹.۴۵۰',
    },
    {
      name: 'درامد امروز',
      href: '#',
      icon: ScaleIcon,
      amount: '۵۰۰,۰۰۰',
    },
    {
      name: 'فروش روزانه',
      href: '#',
      icon: ScaleIcon,
      amount: '۲۶۴,۰۰۰',
    },
  ];
  const transactions = [
    {
      id: 1,
      name: 'Payment to Molly Sanders',
      href: '#',
      amount: '$20,000',
      currency: 'USD',
      status: 'success',
      date: 'July 11, 2020',
      datetime: '2020-07-11',
    },
    // More transactions...
  ];
  const statusStyles = {
    success: 'bg-green-100 text-green-800',
    processing: 'bg-yellow-100 text-yellow-800',
    failed: 'bg-gray-100 text-gray-800',
  };

  const sidebarOpen = ref(false);
</script>
