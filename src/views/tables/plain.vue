<template>
  <div class="mr-8 px-4 sm:px-6 lg:px-8">
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-xl font-semibold text-gray-900">کاربران</h1>
        <p class="mt-2 text-sm text-gray-700">لیست کاربران موجود در سیستم</p>
      </div>
      <div class="mt-4 sm:mt-0 sm:mr-16 sm:flex-none">
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:w-auto"
        >
          کاربر جدید
        </button>
      </div>
    </div>
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div
            class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg"
          >
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    class="py-3.5 pr-4 pl-3 text-right text-sm font-semibold text-gray-900 sm:pr-6"
                  >
                    نام
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-right text-sm font-semibold text-gray-900"
                  >
                    سمت
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-right text-sm font-semibold text-gray-900"
                  >
                    ایمیل
                  </th>
                  <th
                    scope="col"
                    class="px-3 py-3.5 text-right text-sm font-semibold text-gray-900"
                  >
                    نقش
                  </th>
                  <th scope="col" class="relative py-3.5 pr-3 pl-4 sm:pl-6">
                    <span class="sr-only">ویرایش</span>
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="person in people" :key="person.email">
                  <td
                    class="whitespace-nowrap py-4 pr-4 pl-3 text-sm font-medium text-gray-900 sm:pr-6"
                  >
                    {{ person.name }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ person.title }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ person.email }}
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                    {{ person.role }}
                  </td>
                  <td
                    class="relative whitespace-nowrap py-4 pr-3 pl-4 text-right text-sm font-medium sm:pl-6"
                  >
                    <a href="#" class="text-blue-600 hover:text-blue-900"
                      >ویرایش<span class="sr-only">, {{ person.name }}</span></a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const people = [
    {
      name: 'لیندزی والتون',
      title: 'برنامه نویس فرانت اند',
      email: 'lindsay.walton@example.com',
      role: 'کاربر',
    },
  ];
</script>
