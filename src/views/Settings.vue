<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="fixed inset-0 z-40 flex md:hidden"
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
            class="relative max-w-xs w-full bg-white pt-5 pb-4 flex-1 flex flex-col"
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
              <div class="absolute top-0 right-0 -mr-14 p-1">
                <button
                  type="button"
                  class="h-12 w-12 rounded-full flex items-center justify-center focus:outline-none focus:bg-gray-600"
                  @click="sidebarOpen = false"
                >
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  <span class="sr-only">Close sidebar</span>
                </button>
              </div>
            </TransitionChild>
            <div class="flex-shrink-0 px-4 flex items-center">
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/easywire-logo-blue-600-mark-gray-900-text.svg"
                alt="Easywire"
              />
            </div>
            <div class="mt-5 flex-1 h-0 overflow-y-auto">
              <nav class="h-full flex flex-col">
                <div class="space-y-1">
                  <a
                    v-for="item in navigation"
                    :key="item.name"
                    :href="item.href"
                    :class="[
                      item.current
                        ? 'bg-blue-50 border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group border-l-4 py-2 px-3 flex items-center text-base font-medium',
                    ]"
                    :aria-current="item.current ? 'page' : undefined"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        item.current
                          ? 'text-blue-500'
                          : 'text-gray-400 group-hover:text-gray-500',
                        'mr-4 flex-shrink-0 h-6 w-6',
                      ]"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </a>
                </div>
                <div class="mt-auto pt-10 space-y-1">
                  <a
                    v-for="item in secondaryNavigation"
                    :key="item.name"
                    :href="item.href"
                    class="group border-l-4 border-transparent py-2 px-3 flex items-center text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  >
                    <component
                      :is="item.icon"
                      class="mr-4 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->

    <!-- Content area -->
    <div class="">
      <div class="max-w-4xl mx-auto flex flex-col md:px-8 xl:px-0">
        <main class="flex-1">
          <div class="relative max-w-4xl mx-auto md:px-8 xl:px-0">
            <div class="pt-10 pb-16">
              <div class="px-4 sm:px-6 md:px-0">
                <h1 class="text-3xl font-extrabold text-gray-900">تنظیمات</h1>
              </div>
              <div class="px-4 sm:px-6 md:px-0">
                <div class="py-6">
                  <!-- Tabs -->
                  <div class="lg:hidden">
                    <label for="selected-tab" class="sr-only"
                      >Select a tab</label
                    >
                    <select
                      id="selected-tab"
                      name="selected-tab"
                      class="mt-1 block w-full pr-3 pl-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                    >
                      <option
                        v-for="tab in tabs"
                        :key="tab.name"
                        :selected="tab.current"
                      >
                        {{ tab.name }}
                      </option>
                    </select>
                  </div>
                  <div class="hidden lg:block">
                    <div class="border-b border-gray-200">
                      <nav class="-mb-px flex space-x-8 space-x-reverse">
                        <a
                          v-for="tab in tabs"
                          :key="tab.name"
                          :href="tab.href"
                          :class="[
                            tab.current
                              ? 'border-blue-500 text-blue-600'
                              : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                            'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
                          ]"
                        >
                          {{ tab.name }}
                        </a>
                      </nav>
                    </div>
                  </div>

                  <!-- Description list with inline editing -->
                  <div class="mt-10 divide-y divide-gray-200">
                    <div class="space-y-1">
                      <h3 class="text-lg leading-6 font-medium text-gray-900">
                        مشخصات
                      </h3>
                      <p class="max-w-2xl text-sm text-gray-500">
                        این اطلاعات به صورت عمومی نمایش داده می شود، بنابراین
                        مراقب آنچه به اشتراک می گذارید باشید.
                      </p>
                    </div>
                    <div class="mt-6">
                      <dl class="divide-y divide-gray-200">
                        <div
                          class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"
                        >
                          <dt class="text-sm font-medium text-gray-500">نام</dt>
                          <dd
                            class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                          >
                            <span class="flex-grow">لیندزی والتون</span>
                            <span class="mr-4 flex-shrink-0">
                              <button
                                type="button"
                                class="rounded-md font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                              >
                                بروزرسانی
                              </button>
                            </span>
                          </dd>
                        </div>
                        <div
                          class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5"
                        >
                          <dt class="text-sm font-medium text-gray-500">
                            آواتار
                          </dt>
                          <dd
                            class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                          >
                            <span class="flex-grow">
                              <img
                                class="h-8 w-8 rounded-full"
                                src="/avatar.jpg"
                                alt="avatar"
                              />
                            </span>
                            <span
                              class="mr-4 flex-shrink-0 flex items-start space-x-4 space-x-reverse"
                            >
                              <button
                                type="button"
                                class="rounded-md font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                              >
                                یروزرسانی
                              </button>
                              <span class="text-gray-300" aria-hidden="true"
                                >|</span
                              >
                              <button
                                type="button"
                                class="rounded-md font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                              >
                                حذف
                              </button>
                            </span>
                          </dd>
                        </div>
                        <div
                          class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5"
                        >
                          <dt class="text-sm font-medium text-gray-500">
                            ایمیل
                          </dt>
                          <dd
                            class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                          >
                            <span class="flex-grow"
                              >lindsy.walton@example.com</span
                            >
                            <span class="mr-4 flex-shrink-0">
                              <button
                                type="button"
                                class="rounded-md font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                              >
                                بروزرسانی
                              </button>
                            </span>
                          </dd>
                        </div>
                        <div
                          class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200"
                        >
                          <dt class="text-sm font-medium text-gray-500">سمت</dt>
                          <dd
                            class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                          >
                            <span class="flex-grow">برنامه نویس فرانت اند</span>
                            <span class="mr-4 flex-shrink-0">
                              <button
                                type="button"
                                class="rounded-md font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                              >
                                بروزرسانی
                              </button>
                            </span>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>

                  <div class="mt-10 divide-y divide-gray-200">
                    <div class="space-y-1">
                      <h3 class="text-lg leading-6 font-medium text-gray-900">
                        حساب کاربری
                      </h3>
                      <p class="max-w-2xl text-sm text-gray-500">
                        نحوه نمایش اطلاعات در حساب خود را مدیریت کنید.
                      </p>
                    </div>
                    <div class="mt-6">
                      <dl class="divide-y divide-gray-200">
                        <div
                          class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4"
                        >
                          <dt class="text-sm font-medium text-gray-500">
                            زبان
                          </dt>
                          <dd
                            class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                          >
                            <span class="flex-grow">فارسی</span>
                            <span class="mr-4 flex-shrink-0">
                              <button
                                type="button"
                                class="rounded-md font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                              >
                                بروزرسانی
                              </button>
                            </span>
                          </dd>
                        </div>
                        <div
                          class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5"
                        >
                          <dt class="text-sm font-medium text-gray-500">
                            فرمت تاریخ
                          </dt>
                          <dd
                            class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                          >
                            <span class="flex-grow">DD-MM-YYYY</span>
                            <span
                              class="mr-4 flex-shrink-0 flex items-start space-x-4 space-x-reverse"
                            >
                              <button
                                type="button"
                                class="rounded-md font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                              >
                                بروزرسانی
                              </button>
                              <span class="text-gray-300" aria-hidden="true"
                                >|</span
                              >
                              <button
                                type="button"
                                class="rounded-md font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                              >
                                حذف
                              </button>
                            </span>
                          </dd>
                        </div>
                        <SwitchGroup
                          as="div"
                          class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:pt-5"
                        >
                          <SwitchLabel
                            as="dt"
                            class="text-sm font-medium text-gray-500"
                            passive
                          >
                            منطقه زمانی خودکار
                          </SwitchLabel>
                          <dd
                            class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                          >
                            <Switch
                              v-model="automaticTimezoneEnabled"
                              :class="[
                                automaticTimezoneEnabled
                                  ? 'bg-blue-600'
                                  : 'bg-gray-200',
                                'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-auto',
                              ]"
                            >
                              <span
                                aria-hidden="true"
                                :class="[
                                  automaticTimezoneEnabled
                                    ? 'translate-x-0'
                                    : '-translate-x-5',
                                  'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                                ]"
                              />
                            </Switch>
                          </dd>
                        </SwitchGroup>
                        <SwitchGroup
                          as="div"
                          class="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:border-b sm:border-gray-200"
                        >
                          <SwitchLabel
                            as="dt"
                            class="text-sm font-medium text-gray-500"
                            passive
                          >
                            به روز رسانی خودکار داده های متقاضی
                          </SwitchLabel>
                          <dd
                            class="mt-1 flex text-sm text-gray-900 sm:mt-0 sm:col-span-2"
                          >
                            <Switch
                              v-model="autoUpdateApplicantDataEnabled"
                              :class="[
                                autoUpdateApplicantDataEnabled
                                  ? 'bg-blue-600'
                                  : 'bg-gray-200',
                                'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-auto',
                              ]"
                            >
                              <span
                                aria-hidden="true"
                                :class="[
                                  autoUpdateApplicantDataEnabled
                                    ? 'translate-x-0'
                                    : '-translate-x-5',
                                  'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                                ]"
                              />
                            </Switch>
                          </dd>
                        </SwitchGroup>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import {
    Dialog,
    DialogOverlay,
    Switch,
    SwitchGroup,
    SwitchLabel,
    TransitionChild,
    TransitionRoot,
  } from '@headlessui/vue';
  import {
    BellIcon,
    BriefcaseIcon,
    ChatIcon,
    CogIcon,
    DocumentSearchIcon,
    HomeIcon,
    MenuAlt2Icon,
    QuestionMarkCircleIcon,
    UsersIcon,
    XIcon,
  } from '@heroicons/vue/outline';
  import { SearchIcon } from '@heroicons/vue/solid';

  const navigation = [
    { name: 'Home', href: '#', icon: HomeIcon, current: false },
    { name: 'Jobs', href: '#', icon: BriefcaseIcon, current: false },
    {
      name: 'Applications',
      href: '#',
      icon: DocumentSearchIcon,
      current: false,
    },
    { name: 'Messages', href: '#', icon: ChatIcon, current: false },
    { name: 'Team', href: '#', icon: UsersIcon, current: false },
    { name: 'Settings', href: '#', icon: CogIcon, current: true },
  ];
  const secondaryNavigation = [
    { name: 'Help', href: '#', icon: QuestionMarkCircleIcon },
    { name: 'Logout', href: '#', icon: CogIcon },
  ];
  const tabs = [
    { name: 'عمومی', href: '#', current: true },
    { name: 'امنیتی', href: '#', current: false },
    { name: 'پیام ها', href: '#', current: false },
    { name: 'تعرفه', href: '#', current: false },
    { name: 'صورت حساب', href: '#', current: false },
  ];

  export default {
    components: {
      Dialog,
      DialogOverlay,
      Switch,
      SwitchGroup,
      SwitchLabel,
      TransitionChild,
      TransitionRoot,
      BellIcon,
      MenuAlt2Icon,
      SearchIcon,
      XIcon,
    },
    setup() {
      const sidebarOpen = ref(false);
      const automaticTimezoneEnabled = ref(false);
      const autoUpdateApplicantDataEnabled = ref(true);

      return {
        navigation,
        secondaryNavigation,
        tabs,
        sidebarOpen,
        automaticTimezoneEnabled,
        autoUpdateApplicantDataEnabled,
      };
    },
  };
</script>
