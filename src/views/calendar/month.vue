<template>
  <div class="lg:flex lg:h-full lg:flex-col mx-8">
    <header
      class="relative z-20 flex items-center justify-between border-b border-gray-200 py-4 px-6 lg:flex-none"
    >
      <h1 class="text-lg font-semibold text-gray-900">
        <time datetime="2023-03">فروردین ۱۴۰۲</time>
      </h1>
      <div class="flex items-center">
        <div
          class="flex flex-row-reverse items-center rounded-md shadow-sm md:items-stretch"
        >
          <button
            type="button"
            class="flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-white py-2 pr-3 pl-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
          >
            <span class="sr-only">Previous month</span>
            <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            class="hidden border-t border-b border-gray-300 bg-white px-3.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 focus:relative md:block"
          >
            امروز
          </button>
          <span class="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
          <button
            type="button"
            class="flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-white py-2 pr-4 pl-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
          >
            <span class="sr-only">Next month</span>
            <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
        <div class="hidden md:mr-4 md:flex md:items-center">
          <Menu as="div" class="relative">
            <MenuButton
              type="button"
              class="flex items-center rounded-md border border-gray-300 bg-white py-2 pr-3 pl-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
            >
              نمای ماه
              <ChevronDownIcon
                class="mr-2 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </MenuButton>

            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95"
            >
              <MenuItems
                class="focus:outline-none absolute right-0 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
              >
                <div class="py-1">
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >نمای روز</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >نمای هفته</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >نمای ماه</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >نمای سال</a
                    >
                  </MenuItem>
                </div>
              </MenuItems>
            </transition>
          </Menu>
          <div class="mr-6 h-6 w-px bg-gray-300" />
          <button
            type="button"
            class="focus:outline-none mr-6 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            افزودن رویداد
          </button>
        </div>
        <Menu as="div" class="relative mr-6 md:hidden">
          <MenuButton
            class="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">Open menu</span>
            <DotsHorizontalIcon class="h-5 w-5" aria-hidden="true" />
          </MenuButton>

          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <MenuItems
              class="focus:outline-none absolute left-0 mt-3 w-36 origin-top-left divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
            >
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    >افزودن رویداد</a
                  >
                </MenuItem>
              </div>
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    >برو به امروز</a
                  >
                </MenuItem>
              </div>
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    >نمای روز</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    >نمای هفته</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    >نمای ماه</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    >نمای سال</a
                  >
                </MenuItem>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </header>
    <div
      class="shadow ring-1 ring-black ring-opacity-5 lg:flex lg:flex-auto lg:flex-col"
    >
      <div
        class="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none"
      >
        <div class="bg-white py-2">
          شنبه<span class="sr-only sm:not-sr-only"></span>
        </div>
        <div class="bg-white py-2">
          یک<span class="sr-only sm:not-sr-only">شنبه</span>
        </div>
        <div class="bg-white py-2">
          دو<span class="sr-only sm:not-sr-only">شنبه</span>
        </div>
        <div class="bg-white py-2">
          سه<span class="sr-only sm:not-sr-only"> شنبه</span>
        </div>
        <div class="bg-white py-2">
          چهار<span class="sr-only sm:not-sr-only">شنبه</span>
        </div>
        <div class="bg-white py-2">
          پنج<span class="sr-only sm:not-sr-only"> شنبه</span>
        </div>
        <div class="bg-white py-2">
          جمعه<span class="sr-only sm:not-sr-only"></span>
        </div>
      </div>
      <div
        class="flex bg-gray-200 text-xs leading-6 text-gray-700 lg:flex-auto"
      >
        <div
          class="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-6 lg:gap-px"
        >
          <div
            v-for="day in days"
            :key="day.date"
            :class="[
              day.isCurrentMonth ? 'bg-white' : 'bg-gray-50 text-gray-500',
              'relative py-2 px-3',
            ]"
          >
            <time
              :datetime="day.date"
              :class="
                day.isToday
                  ? 'flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 font-semibold text-white'
                  : undefined
              "
              >{{ day.date.split('-').pop().replace(/^0/, '') }}</time
            >
            <ol v-if="day.events.length > 0" class="mt-2">
              <li v-for="event in day.events.slice(0, 2)" :key="event.id">
                <a :href="event.href" class="group flex">
                  <p
                    class="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600"
                  >
                    {{ event.name }}
                  </p>
                  <time
                    :datetime="event.datetime"
                    class="mr-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"
                    >{{ event.time }}</time
                  >
                </a>
              </li>
              <li v-if="day.events.length > 2" class="text-gray-500">
                + {{ day.events.length - 2 }} more
              </li>
            </ol>
          </div>
        </div>
        <div
          class="isolate grid w-full grid-cols-7 grid-rows-6 gap-px lg:hidden"
        >
          <button
            v-for="day in days"
            :key="day.date"
            type="button"
            :class="[
              day.isCurrentMonth ? 'bg-white' : 'bg-gray-50',
              (day.isSelected || day.isToday) && 'font-semibold',
              day.isSelected && 'text-white',
              !day.isSelected && day.isToday && 'text-indigo-600',
              !day.isSelected &&
                day.isCurrentMonth &&
                !day.isToday &&
                'text-gray-900',
              !day.isSelected &&
                !day.isCurrentMonth &&
                !day.isToday &&
                'text-gray-500',
              'flex h-14 flex-col py-2 px-3 hover:bg-gray-100 focus:z-10',
            ]"
          >
            <time
              :datetime="day.date"
              :class="[
                day.isSelected &&
                  'flex h-6 w-6 items-center justify-center rounded-full',
                day.isSelected && day.isToday && 'bg-indigo-600',
                day.isSelected && !day.isToday && 'bg-gray-900',
                'ml-auto',
              ]"
              >{{ day.date.split('-').pop().replace(/^0/, '') }}</time
            >
            <p class="sr-only">{{ day.events.length }} events</p>
            <div
              v-if="day.events.length > 0"
              class="-mx-0.5 mt-auto flex flex-wrap-reverse"
            >
              <div
                v-for="event in day.events"
                :key="event.id"
                class="mx-0.5 mb-1 h-1.5 w-1.5 rounded-full bg-gray-400"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="selectedDay?.events.length > 0"
      class="py-10 px-4 sm:px-6 lg:hidden"
    >
      <ol
        class="divide-y divide-gray-100 overflow-hidden rounded-lg bg-white text-sm shadow ring-1 ring-black ring-opacity-5"
      >
        <li
          v-for="event in selectedDay.events"
          :key="event.id"
          class="group flex p-4 pl-6 focus-within:bg-gray-50 hover:bg-gray-50"
        >
          <div class="flex-auto">
            <p class="font-semibold text-gray-900">{{ event.name }}</p>
            <time
              :datetime="event.datetime"
              class="mt-2 flex items-center text-gray-700"
            >
              <ClockIcon
                class="ml-2 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              {{ event.time }}
            </time>
          </div>
          <a
            :href="event.href"
            class="mr-6 flex-none self-center rounded-md border border-gray-300 bg-white py-2 px-3 font-semibold text-gray-700 opacity-0 shadow-sm hover:bg-gray-50 focus:opacity-100 group-hover:opacity-100"
            >ویرایش<span class="sr-only">, {{ event.name }}</span></a
          >
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
  import {
    ChevronDownIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    ClockIcon,
    DotsHorizontalIcon,
  } from '@heroicons/vue/solid';
  import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';

  const days = [
    { date: '۱۴۰۱-۱۲-۲۷', events: [] },
    { date: '۱۴۰۱-۱۲-۲۸', events: [] },
    { date: '۱۴۰۱-۱۲-۲۹', events: [] },
    { date: '۱۴۰۱-۱۲-۳۰', events: [] },
    { date: '۱۴۰۱-۱۲-۳۱', events: [] },
    { date: '۱۴۰۲-۰۱-۰۱', isCurrentMonth: true, events: [] },
    { date: '۱۴۰۲-۰۱-۰۲', isCurrentMonth: true, events: [] },
    {
      date: '۱۴۰۲-۰۱-۰۳',
      isCurrentMonth: true,
      events: [
        {
          id: 1,
          name: 'بررسی طراحی',
          time: '10AM',
          datetime: '2022-01-03T10:00',
          href: '#',
        },
        {
          id: 2,
          name: 'جلسه فروش',
          time: '2PM',
          datetime: '2022-01-03T14:00',
          href: '#',
        },
      ],
    },
    { date: '۱۴۰۲-۰۱-۰۴', isCurrentMonth: true, events: [] },
    { date: '۱۴۰۲-۰۱-۰۵', isCurrentMonth: true, events: [] },
    { date: '۱۴۰۲-۰۱-۰۶', isCurrentMonth: true, events: [] },
    {
      date: '۱۴۰۲-۰۱-۰۷',
      isCurrentMonth: true,
      events: [
        {
          id: 3,
          name: 'استندآپ',
          time: '6PM',
          datetime: '2022-01-08T18:00',
          href: '#',
        },
      ],
    },
    { date: '۱۴۰۲-۰۱-۰۸', isCurrentMonth: true, events: [] },
    { date: '۱۴۰۲-۰۱-۰۹', isCurrentMonth: true, events: [] },
    { date: '۱۴۰۲-۰۱-۱۰', isCurrentMonth: true, events: [] },
    { date: '۱۴۰۲-۰۱-۱۱', isCurrentMonth: true, events: [] },
    {
      date: '۱۴۰۲-۰۱-۱۲',
      isCurrentMonth: true,
      isToday: true,
      events: [
        {
          id: 6,
          name: 'جلسه فلان',
          time: '2PM',
          datetime: '2022-01-25T14:00',
          href: '#',
        },
      ],
    },
    { date: '۱۴۰۲-۰۱-۱۳', isCurrentMonth: true, events: [] },
    { date: '۱۴۰۲-۰۱-۱۴', isCurrentMonth: true, events: [] },
    { date: '۱۴۰۲-۰۱-۱۵', isCurrentMonth: true, events: [] },
    { date: '۱۴۰۲-۰۱-۱۶', isCurrentMonth: true, events: [] },
    { date: '۱۴۰۲-۰۱-۱۷', isCurrentMonth: true, events: [] },
    { date: '۱۴۰۲-۰۱-۱۸', isCurrentMonth: true, events: [] },
    { date: '۱۴۰۲-۰۱-۱۹', isCurrentMonth: true, events: [] },
    { date: '۱۴۰۲-۰۱-۲۰', isCurrentMonth: true, events: [] },
    { date: '۱۴۰۲-۰۱-۲۱', isCurrentMonth: true, events: [] },
    {
      date: '۱۴۰۲-۰۱-۲۲',
      isCurrentMonth: true,
      isSelected: true,
      events: [
        {
          id: 4,
          name: 'جلسه بازاریابی',
          time: '3PM',
          datetime: '2022-01-22T15:00',
          href: '#',
        },
        {
          id: 5,
          name: 'ددلاین پروژه',
          time: '7PM',
          datetime: '2022-01-22T19:00',
          href: '#',
        },
      ],
    },
    { date: '۱۴۰۲-۰۱-۲۵', isCurrentMonth: true, events: [] },
    { date: '۱۴۰۲-۰۱-۲۵', isCurrentMonth: true, events: [] },
    { date: '۱۴۰۲-۰۱-۲۵', isCurrentMonth: true, events: [] },
    { date: '۱۴۰۲-۰۱-۲۶', isCurrentMonth: true, events: [] },
    { date: '۱۴۰۲-۰۱-۲۷', isCurrentMonth: true, events: [] },
    { date: '۱۴۰۲-۰۱-۲۸', isCurrentMonth: true, events: [] },
    { date: '۱۴۰۲-۰۱-۲۹', isCurrentMonth: true, events: [] },
    { date: '۱۴۰۲-۰۱-۳۰', isCurrentMonth: true, events: [] },
    { date: '۱۴۰۲-۰۱-۳۱', isCurrentMonth: true, events: [] },
    { date: '۱۴۰۲-۰۲-۰۱', events: [] },
    { date: '۱۴۰۲-۰۲-۰۲', events: [] },
    {
      date: '۱۴۰۲-۰۲-۰۳',
      events: [
        {
          id: 7,
          name: 'استند آپ',
          time: '9PM',
          datetime: '2022-02-04T21:00',
          href: '#',
        },
      ],
    },
    { date: '۱۴۰۲-۰۲-۰۴', events: [] },
    { date: '۱۴۰۲-۰۲-۰۵', events: [] },
    { date: '۱۴۰۲-۰۲-۰۶', events: [] },
  ];
  const selectedDay = days.find((day) => day.isSelected);

  export default {
    components: {
      Menu,
      MenuButton,
      MenuItem,
      MenuItems,
      ChevronDownIcon,
      ChevronLeftIcon,
      ChevronRightIcon,
      ClockIcon,
      DotsHorizontalIcon,
    },
    setup() {
      return {
        days,
        selectedDay,
      };
    },
  };
</script>
