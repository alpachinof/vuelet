<template>
  <div class="mx-8 space-y-8">
    <div class="rounded-md bg-green-100 p-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <CheckCircleIcon class="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
        <div class="mr-3">
          <p class="text-sm font-medium text-green-800">با موفقیت ذخیره شد</p>
        </div>
        <div class="mr-auto pr-3">
          <div class="-mx-1.5 -my-1.5">
            <button
              type="button"
              class="inline-flex bg-green-100 rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
            >
              <span class="sr-only">Dismiss</span>
              <XIcon class="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-yellow-100 border-r-4 border-yellow-400 p-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <ExclamationIcon class="h-5 w-5 text-yellow-400" aria-hidden="true" />
        </div>
        <div class="mr-3">
          <p class="text-sm text-yellow-700">
            اعتبار شما به پایان رسیده
            {{ ' ' }}
            <a
              href="#"
              class="font-medium underline text-yellow-700 hover:text-yellow-600"
            >
              ارتقا حساب
            </a>
          </p>
        </div>
      </div>
    </div>

    <div class="rounded-md bg-blue-100 p-4">
      <div class="flex">
        <div class="flex-shrink-0 mt-1">
          <InformationCircleIcon
            class="h-5 w-5 text-blue-400"
            aria-hidden="true"
          />
        </div>
        <div class="mr-3 flex-1 md:flex md:items-center md:justify-between">
          <p class="text-sm text-blue-700">
            نسخه جدیدی از نرم افزار در دسترس است.
          </p>
          <p class="mt-3 text-sm md:mt-0 md:mr-6">
            <a
              href="#"
              class="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600"
              >بروزرسانی
              <span class="text-xl" aria-hidden="true">&larr;</span></a
            >
          </p>
        </div>
      </div>
    </div>

    <div class="rounded-md bg-red-100 p-4">
      <div class="flex">
        <div class="flex-shrink-0">
          <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div class="mr-3">
          <h3 class="text-sm font-medium text-red-800">خطا در ارسال فرم</h3>
          <div class="mt-2 text-sm text-red-700">
            <ul role="list" class="list-disc pr-5 space-y-1">
              <li>رمز عبور حداقل ۸ کاراکتر باشد.</li>
              <li>رمز عبور شامل اعداد باشد.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import {
    CheckCircleIcon,
    XIcon,
    ExclamationIcon,
    InformationCircleIcon,
  } from '@heroicons/vue/solid';
</script>
