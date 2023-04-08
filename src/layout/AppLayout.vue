<template>
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
          enter-from="translate-x-full"
          enter-to="-translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="-translate-x-full"
          leave-to="translate-x-full"
        >
          <div
            class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white"
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
                src="https://tailwindui.com/img/logos/easywire-logo-blue-300-mark-white-text.svg"
                alt="Easywire logo"
              />
            </div>
            <nav
              class="mt-5 flex-shrink-0 h-full divide-y divide-blue-800 overflow-y-auto"
              aria-label="Sidebar"
            >
              <div class="px-2 space-y-1">
                <RouterLink
                  to="/"
                  class="text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                >
                  <component
                    :is="ViewGridIcon"
                    class="ml-4 flex-shrink-0 h-6 w-6 text-gray-500"
                    aria-hidden="true"
                  />
                  داشبورد
                </RouterLink>
                <div class="mx-auto w-full max-w-md rounded-md">
                  <Disclosure v-slot="{ open }">
                    <DisclosureButton
                      class="w-full justify-start rounded-md text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium"
                    >
                      <component
                        :is="TableIcon"
                        class="ml-4 flex-shrink-0 h-7 w-6 text-gray-500"
                        aria-hidden="true"
                      />
                      <span>جدول ها</span>
                      <ChevronLeftIcon
                        :class="open ? '-rotate-90 transform' : ''"
                        class="h-5 w-5 text-blue-500 mr-auto"
                      />
                    </DisclosureButton>
                    <DisclosurePanel
                      class="p-2 space-y-2 text-sm text-gray-500"
                    >
                      <RouterLink
                        to="/tables/plain"
                        class="text-gray-500 hover:bg-gray-100 flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                      >
                        جدول ساده
                      </RouterLink>
                      <RouterLink
                        to="/tables/avatar"
                        class="text-gray-500 hover:bg-gray-100 flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                      >
                        جدول پیشرفته
                      </RouterLink>
                    </DisclosurePanel>
                  </Disclosure>
                </div>
                <RouterLink
                  to="/forms"
                  class="text-gray-500 hover:bg-gray-100 flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                >
                  <component
                    :is="PencilAltIcon"
                    class="ml-4 flex-shrink-0 h-6 w-6 text-gray-500"
                    aria-hidden="true"
                  />
                  فرم ها
                </RouterLink>
                <div class="mx-auto w-full max-w-md rounded-md bg-white">
                  <Disclosure v-slot="{ open }">
                    <DisclosureButton
                      class="w-full justify-start rounded-md text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium"
                    >
                      <component
                        :is="TemplateIcon"
                        class="ml-4 flex-shrink-0 h-6 w-6 text-gray-500"
                        aria-hidden="true"
                      />
                      <span>کامپوننت ها</span>
                      <ChevronLeftIcon
                        :class="open ? '-rotate-90 transform' : ''"
                        class="h-5 w-5 text-blue-500 mr-auto"
                      />
                    </DisclosureButton>

                    <DisclosurePanel
                      class="pt-4 pb-2 space-y-1 text-sm text-gray-500"
                    >
                      <RouterLink
                        to="/components/buttons"
                        class="text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                      >
                        دکمه ها
                      </RouterLink>
                      <RouterLink
                        to="/components/cards"
                        class="text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                      >
                        کارت ها
                      </RouterLink>
                      <RouterLink
                        to="/components/alerts"
                        class="text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                      >
                        هشدار ها
                      </RouterLink>
                      <RouterLink
                        to="/components/modals"
                        class="text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                      >
                        مودال ها
                      </RouterLink>
                      <RouterLink
                        to="/components/badges"
                        class="text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                      >
                        نشان ها
                      </RouterLink>
                    </DisclosurePanel>
                  </Disclosure>
                </div>
                <RouterLink
                  to="/charts"
                  class="text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                >
                  <component
                    :is="CalendarIcon"
                    class="ml-4 flex-shrink-0 h-6 w-6 text-gray-500 group-[.active]:text-white"
                    aria-hidden="true"
                  />
                  نمودار ها
                </RouterLink>
                <div class="mx-auto w-full max-w-md rounded-md bg-white">
                  <Disclosure v-slot="{ open }">
                    <DisclosureButton
                      class="w-full justify-start rounded-md text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium"
                    >
                      <component
                        :is="DocumentDuplicateIcon"
                        class="ml-4 flex-shrink-0 h-6 w-6 text-gray-500"
                        aria-hidden="true"
                      />
                      <span>صفحه ها</span>
                      <ChevronLeftIcon
                        :class="open ? '-rotate-90 transform' : ''"
                        class="h-5 w-5 text-blue-500 mr-auto"
                      />
                    </DisclosureButton>
                    <DisclosurePanel class="pt-4 pb-2 text-sm text-gray-500">
                      <RouterLink
                        to="/404/simple"
                        class="text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                      >
                        404
                      </RouterLink>
                      <RouterLink
                        to="/auth/login"
                        class="text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                      >
                        ورود
                      </RouterLink>
                      <RouterLink
                        to="/auth/register"
                        class="text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                      >
                        ثبت نام
                      </RouterLink>
                    </DisclosurePanel>
                  </Disclosure>
                </div>
              </div>
              <div class="mt-6 pt-6">
                <div class="px-2 space-y-1">
                  <RouterLink
                    v-for="item in secondaryNavigation"
                    :key="item.name"
                    :to="item.to"
                    class="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-gray-500 hover:bg-gray-100"
                  >
                    <component
                      :is="item.icon"
                      class="ml-4 h-6 w-6 text-gray-500 group-[.active]:text-white"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </RouterLink>
                </div>
                <Support />
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
    <div
      class="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 lg:shadow-lg"
    >
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col flex-grow bg-white pt-5 pb-4 overflow-y-auto">
        <div class="flex items-center flex-shrink-0 px-4">
          <img
            class="h-8 w-auto"
            src="https://tailwindui.com/img/logos/easywire-logo-blue-300-mark-white-text.svg"
            alt="Easywire logo"
          />
        </div>
        <nav
          class="mt-5 flex-1 flex flex-col divide-y divide-blue-800 overflow-y-auto"
          aria-label="Sidebar"
        >
          <!-- active class bg-blue-800 text-white -->
          <div class="px-2 space-y-1">
            <RouterLink
              to="/"
              class="text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
            >
              <component
                :is="ViewGridIcon"
                class="ml-4 flex-shrink-0 h-6 w-6 text-gray-500 group-[.active]:text-white"
                aria-hidden="true"
              />
              داشبورد
            </RouterLink>
            <div class="mx-auto w-full max-w-md rounded-md bg-white">
              <Disclosure v-slot="{ open }">
                <DisclosureButton
                  class="w-full justify-start rounded-md text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium"
                >
                  <component
                    :is="TableIcon"
                    class="ml-4 flex-shrink-0 h-6 w-6 text-gray-500 group-[.active]:text-white"
                    aria-hidden="true"
                  />
                  <span>جدول ها</span>
                  <ChevronLeftIcon
                    :class="open ? '-rotate-90 transform' : ''"
                    class="h-5 w-5 text-blue-500 mr-auto"
                  />
                </DisclosureButton>
                <DisclosurePanel
                  class="pt-4 pb-2 space-y-1 text-sm text-gray-500"
                >
                  <RouterLink
                    to="/tables/plain"
                    class="text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                  >
                    جدول ساده
                  </RouterLink>
                  <RouterLink
                    to="/tables/avatar"
                    class="text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                  >
                    جدول پیشرفته
                  </RouterLink>
                </DisclosurePanel>
              </Disclosure>
            </div>
            <RouterLink
              to="/forms"
              class="text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
            >
              <component
                :is="PencilAltIcon"
                class="ml-4 flex-shrink-0 h-6 w-6 text-gray-500 group-[.active]:text-white"
                aria-hidden="true"
              />
              فرم ها
            </RouterLink>
            <div class="mx-auto w-full max-w-md rounded-md bg-white">
              <Disclosure v-slot="{ open }">
                <DisclosureButton
                  class="w-full justify-start rounded-md text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium"
                >
                  <component
                    :is="TemplateIcon"
                    class="ml-4 flex-shrink-0 h-6 w-6 text-gray-500"
                    aria-hidden="true"
                  />
                  <span>کامپوننت ها</span>
                  <ChevronLeftIcon
                    :class="open ? '-rotate-90 transform' : ''"
                    class="h-5 w-5 text-blue-500 mr-auto"
                  />
                </DisclosureButton>

                <DisclosurePanel
                  class="pt-4 pb-2 space-y-1 text-sm text-gray-500"
                >
                  <RouterLink
                    to="/components/buttons"
                    class="text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                  >
                    دکمه ها
                  </RouterLink>
                  <RouterLink
                    to="/components/cards"
                    class="text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                  >
                    کارت ها
                  </RouterLink>
                  <RouterLink
                    to="/components/alerts"
                    class="text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                  >
                    هشدار ها
                  </RouterLink>
                  <RouterLink
                    to="/components/modals"
                    class="text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                  >
                    مودال ها
                  </RouterLink>
                  <RouterLink
                    to="/components/badges"
                    class="text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                  >
                    نشان ها
                  </RouterLink>
                </DisclosurePanel>
              </Disclosure>
            </div>
            <RouterLink
              to="/charts"
              class="text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
            >
              <component
                :is="CalendarIcon"
                class="ml-4 flex-shrink-0 h-6 w-6 text-gray-500 group-[.active]:text-white"
                aria-hidden="true"
              />
              نمودار ها
            </RouterLink>
            <div class="mx-auto w-full max-w-md rounded-md bg-white">
              <Disclosure v-slot="{ open }">
                <DisclosureButton
                  class="w-full justify-start rounded-md text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium"
                >
                  <component
                    :is="DocumentDuplicateIcon"
                    class="ml-4 flex-shrink-0 h-6 w-6 text-gray-500"
                    aria-hidden="true"
                  />
                  <span>صفحه ها</span>
                  <ChevronLeftIcon
                    :class="open ? '-rotate-90 transform' : ''"
                    class="h-5 w-5 text-blue-500 mr-auto"
                  />
                </DisclosureButton>
                <DisclosurePanel class="pt-4 pb-2 text-sm text-gray-500">
                  <RouterLink
                    to="/404/simple"
                    class="text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                  >
                    404
                  </RouterLink>
                  <RouterLink
                    to="/auth/login"
                    class="text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                  >
                    ورود
                  </RouterLink>
                  <RouterLink
                    to="/auth/register"
                    class="text-gray-500 hover:bg-gray-100 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                  >
                    ثبت نام
                  </RouterLink>
                </DisclosurePanel>
              </Disclosure>
            </div>
          </div>
          <div class="mt-6 pt-6">
            <div class="px-2 space-y-1">
              <RouterLink
                v-for="item in secondaryNavigation"
                :key="item.name"
                :to="item.to"
                class="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-gray-500 hover:bg-gray-100"
              >
                <component
                  :is="item.icon"
                  class="ml-4 h-6 w-6 text-gray-500 group-[.active]:text-white"
                  aria-hidden="true"
                />
                {{ item.name }}
              </RouterLink>
            </div>
            <Support />
          </div>
        </nav>
      </div>
    </div>

    <div class="lg:pr-64 lg:mx-8 lg:my-4 rounded flex flex-col flex-1">
      <div
        class="relative z-10 flex-shrink-0 flex h-16 bg-white rounded-lg shadow border-b border-gray-200 lg:border-none"
      >
        <button
          type="button"
          class="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 lg:hidden"
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
              class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Profile dropdown -->
            <Menu as="div" class="mr-3 relative">
              <div>
                <MenuButton
                  class="max-w-xs bg-white rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 lg:p-2 lg:rounded-md lg:hover:bg-gray-50"
                >
                  <img class="h-8 w-8 rounded-full" src="/avatar.jpg" alt="" />
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
    </div>
  </div>
  <RouterView class="lg:pr-64 mt-8" />
</template>

<script setup>
  import { ref } from 'vue';
  import Support from '../components/Support.vue';
  import {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from '@headlessui/vue';
  import {
    BellIcon,
    TableIcon,
    PencilAltIcon,
    CogIcon,
    CreditCardIcon,
    DocumentReportIcon,
    TemplateIcon,
    CalendarIcon,
    DocumentDuplicateIcon,
    HomeIcon,
    ViewGridIcon,
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
    ChevronUpIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    OfficeBuildingIcon,
    SearchIcon,
  } from '@heroicons/vue/solid';

  const secondaryNavigation = [
    { name: 'تنظیمات', to: '/settings', icon: CogIcon },
    { name: 'راهنما', to: 're', icon: QuestionMarkCircleIcon },
    { name: 'حریم خصوصی', to: 'er', icon: ShieldCheckIcon },
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

  const sidebarOpen = ref(false);
</script>
