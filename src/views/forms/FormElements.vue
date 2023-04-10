<template>
  <div class="mt-10 lg:mr-8 px-4 lg:px-8 pt-8 sm:mt-0">
    <div class="">
      <div class="mt-5 md:mt-0">
        <form action="#" method="POST">
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="first-name"
                    class="block text-sm font-medium text-gray-700"
                    >نام</label
                  >
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autocomplete="given-name"
                    class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="last-name"
                    class="block text-sm font-medium text-gray-700"
                    >نام خانوادگی</label
                  >
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autocomplete="family-name"
                    class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label
                    for="email-address"
                    class="block text-sm font-medium text-gray-700"
                    >ایمیل</label
                  >
                  <input
                    type="text"
                    name="email-address"
                    id="email-address"
                    autocomplete="email"
                    class="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                  />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label
                    for="country"
                    class="block text-sm font-medium text-gray-700"
                    >کشور</label
                  >
                  <select
                    id="country"
                    name="country"
                    autocomplete="country-name"
                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  >
                    <option>آمریکا</option>
                    <option>کانادا</option>
                    <option>مکزیک</option>
                  </select>
                </div>

                <div class="col-span-6">
                  <label class="block text-sm font-medium text-gray-700">
                    عکس
                  </label>
                  <div class="mt-1 flex items-center">
                    <span
                      class="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100"
                    >
                      <svg
                        class="h-full w-full text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </span>
                    <button
                      type="button"
                      class="mr-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                      ویرایش
                    </button>
                  </div>
                </div>

                <div class="col-span-6">
                  <label class="block text-sm font-medium text-gray-700">
                    عکس محصول
                  </label>
                  <div
                    class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                  >
                    <div class="space-y-1 text-center">
                      <svg
                        class="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div class="flex text-sm text-gray-600">
                        <label
                          for="file-upload"
                          class="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                        >
                          <span>آپلود فایل</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            class="sr-only"
                          />
                        </label>
                        <p class="pr-1">یا فایل خود را اینجا رها کنید</p>
                      </div>
                      <p class="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>

                <div class="col-span-6 px-4 py-5 bg-white space-y-6 sm:p-6">
                  <fieldset>
                    <div class="mt-4 space-y-4">
                      <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input
                            id="comments"
                            name="comments"
                            type="checkbox"
                            class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          />
                        </div>
                        <div class="mr-3 text-sm">
                          <label
                            for="comments"
                            class="font-medium text-gray-700"
                            >کامنت ها</label
                          >
                          <p class="text-gray-500">
                            هنگامی که شخصی نظری را در مورد یک پست ارسال می کند
                            مطلع شوید.
                          </p>
                        </div>
                      </div>
                      <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input
                            id="candidates"
                            name="candidates"
                            type="checkbox"
                            class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          />
                        </div>
                        <div class="mr-3 text-sm">
                          <label
                            for="candidates"
                            class="font-medium text-gray-700"
                            >کاندیدها</label
                          >
                          <p class="text-gray-500">
                            هنگامی که یک نامزد برای شغلی درخواست می کند، مطلع
                            شوید.
                          </p>
                        </div>
                      </div>
                      <div class="flex items-start">
                        <div class="flex items-center h-5">
                          <input
                            id="offers"
                            name="offers"
                            type="checkbox"
                            class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                          />
                        </div>
                        <div class="mr-3 text-sm">
                          <label for="offers" class="font-medium text-gray-700"
                            >پیشنهادها</label
                          >
                          <p class="text-gray-500">
                            هنگامی که یک نامزد پیشنهادی را می پذیرد یا رد می کند
                            مطلع شوید.
                          </p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <div>
                      <legend class="text-base font-medium text-gray-900">
                        دکمه رادیویی
                      </legend>
                    </div>
                    <div class="mt-4 space-y-4">
                      <div class="flex items-center">
                        <input
                          id="push-everything"
                          name="push-notifications"
                          type="radio"
                          class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                        />
                        <label
                          for="push-everything"
                          class="mr-3 block text-sm font-medium text-gray-700"
                        >
                          موز
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          id="push-email"
                          name="push-notifications"
                          type="radio"
                          class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                        />
                        <label
                          for="push-email"
                          class="mr-3 block text-sm font-medium text-gray-700"
                        >
                          خیار
                        </label>
                      </div>
                      <div class="flex items-center">
                        <input
                          id="push-nothing"
                          name="push-notifications"
                          type="radio"
                          class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                        />
                        <label
                          for="push-nothing"
                          class="mr-3 block text-sm font-medium text-gray-700"
                        >
                          گوجه
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <Switch
                    v-model="enabled"
                    :class="[
                      enabled ? 'bg-blue-600' : 'bg-gray-200',
                      'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
                    ]"
                  >
                    <span class="sr-only">Use setting</span>
                    <span
                      aria-hidden="true"
                      :class="[
                        enabled ? '-translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                      ]"
                    />
                  </Switch>

                  <Switch
                    v-model="enabled"
                    :class="[
                      enabled ? 'bg-blue-600' : 'bg-gray-200',
                      'mr-2 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
                    ]"
                  >
                    <span class="sr-only">Use setting</span>
                    <span
                      :class="[
                        enabled ? '-translate-x-5' : 'translate-x-0',
                        'pointer-events-none relative inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                      ]"
                    >
                      <span
                        :class="[
                          enabled
                            ? 'opacity-0 ease-out duration-100'
                            : 'opacity-100 ease-in duration-200',
                          'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
                        ]"
                        aria-hidden="true"
                      >
                        <svg
                          class="h-3 w-3 text-gray-400"
                          fill="none"
                          viewBox="0 0 12 12"
                        >
                          <path
                            d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                      <span
                        :class="[
                          enabled
                            ? 'opacity-100 ease-in duration-200'
                            : 'opacity-0 ease-out duration-100',
                          'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
                        ]"
                        aria-hidden="true"
                      >
                        <svg
                          class="h-3 w-3 text-blue-600"
                          fill="currentColor"
                          viewBox="0 0 12 12"
                        >
                          <path
                            d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
                          />
                        </svg>
                      </span>
                    </span>
                  </Switch>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                ذخیره
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { Switch } from '@headlessui/vue';

  const enabled = ref(false);
</script>
