<template>
  <!--
      This example requires updating your template:
  
      ```
      <html class="h-full bg-gray-100">
      <body class="h-full">
      ```
    -->
  <div class="min-h-full">
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="fixed inset-0 flex z-40 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div
            class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-cyan-700"
          >
            <TransitionChild
              as="template"
              enter="ease-in-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in-out duration-300"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  @click="sidebarOpen = false"
                >
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <div class="flex-shrink-0 flex items-center px-4">
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
                alt="Easywire logo"
              />
            </div>
            <nav
              class="mt-5 flex-shrink-0 h-full divide-y divide-cyan-800 overflow-y-auto"
              aria-label="Sidebar"
            >
              <div class="px-2 space-y-1">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  :class="[
                    item.current
                      ? 'bg-cyan-800 text-white'
                      : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
                    'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                  ]"
                  :aria-current="item.current ? 'page' : undefined"
                >
                  <component
                    :is="item.icon"
                    class="ml-4 flex-shrink-0 h-6 w-6 text-cyan-200"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </a>
              </div>
              <div class="mt-6 pt-6">
                <div class="px-2 space-y-1">
                  <a
                    v-for="item in secondaryNavigation"
                    :key="item.name"
                    :href="item.href"
                    class="group flex items-center px-2 py-2 text-base font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600"
                  >
                    <component
                      :is="item.icon"
                      class="mr-4 h-6 w-6 text-cyan-200"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col flex-grow bg-white pt-5 pb-4 overflow-y-auto">
        <div class="flex items-center flex-shrink-0 px-4">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
            alt="Easywire logo"
          />
        </div>
        <nav
          class="mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto"
          aria-label="Sidebar"
        >
          <div class="px-2 space-y-1">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :class="[
                item.current
                  ? 'bg-cyan-800 text-white'
                  : 'text-gray-500 hover:text-white hover:bg-cyan-600',
                'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md',
              ]"
              :aria-current="item.current ? 'page' : undefined"
            >
              <component
                :is="item.icon"
                class="ml-4 flex-shrink-0 h-6 w-6 text-gray-500"
                aria-hidden="true"
              />
              {{ item.name }}
            </a>
          </div>
          <div class="mt-6 pt-6">
            <div class="px-2 space-y-1">
              <a
                v-for="item in secondaryNavigation"
                :key="item.name"
                :href="item.href"
                class="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-gray-500 hover:text-white hover:bg-cyan-600"
              >
                <component
                  :is="item.icon"
                  class="ml-4 h-6 w-6 text-gray-500"
                  aria-hidden="true"
                />
                {{ item.name }}
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <div class="lg:pr-64 flex flex-col flex-1">
      <div
        class="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none"
      >
        <button
          type="button"
          class="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <MenuAlt1Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <!-- Search bar -->
        <div
          class="flex-1 px-4 flex justify-between sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8"
        >
          <div class="flex-1 flex">
            <form class="w-full flex md:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <div
                class="relative w-full text-gray-400 focus-within:text-gray-600"
              >
                <div
                  class="absolute inset-y-0 right-0 flex items-center pointer-events-none"
                  aria-hidden="true"
                >
                  <SearchIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search-field"
                  name="search-field"
                  class="block w-full h-full pr-8 pl-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-0 focus:border-transparent sm:text-sm"
                  placeholder="جستجو"
                  type="search"
                />
              </div>
            </form>
          </div>
          <div class="mr-4 flex items-center md:mr-6">
            <button
              type="button"
              class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="mr-3 relative">
              <div>
                <MenuButton
                  class="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50"
                >
                  <img
                    class="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                  <span
                    class="hidden mr-3 text-gray-700 text-sm font-medium lg:block"
                    ><span class="sr-only">Open user menu for </span
                    >ممدوفسکی</span
                  >
                  <ChevronDownIcon
                    class="hidden flex-shrink-0 mr-1 h-5 w-5 text-gray-400 lg:block"
                    aria-hidden="true"
                  />
                </MenuButton>
              </div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <MenuItems
                  class="origin-top-left absolute left-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                      >حساب کاربری</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="/settings"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                      >تنظیمات</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                      >خروج</a
                    >
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
      <main class="flex-1 pb-8">
        <!-- Page header -->

        <div class="mt-8">
          <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-lg leading-6 font-medium text-gray-900">پیشخوان</h2>
            <div
              class="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
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
                    <span
                      class="flex-1 flex space-x-2 space-x-reverse truncate"
                    >
                      <CashIcon
                        class="flex-shrink-0 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span
                        class="flex flex-col text-gray-500 text-sm truncate"
                      >
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
    </div>
  </div>
</template>
<script setup>
  import { ref } from 'vue';
  import {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
  } from '@headlessui/vue';
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
