<template>
  <div class="w-full">
    <button
      @click="success2 = true"
      type="button"
      class="w-11/12 mr-2 inline-flex items-center px-2 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-gray-500 hover:bg-gray-100"
    >
      حمایت از ما
    </button>
    <TransitionRoot as="template" :show="success2">
      <Dialog
        as="div"
        class="fixed z-10 inset-0 overflow-y-auto"
        @close="success2 = false"
      >
        <div
          class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in duration-200"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            />
          </TransitionChild>

          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
            >&#8203;</span
          >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              class="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6"
            >
              <div>
                <div
                  class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100"
                >
                  <HeartIcon class="h-6 w-6 text-red-600" aria-hidden="true" />
                </div>
                <div class="mt-3 text-center sm:mt-5">
                  <DialogTitle
                    as="h3"
                    class="text-lg leading-6 font-medium text-gray-900"
                  >
                    حمایت
                  </DialogTitle>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است
                    </p>
                  </div>
                </div>
              </div>
              <div
                class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense"
              >
                <button
                  type="button"
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-900 text-base font-medium text-white hover:bg-orange-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-700 sm:col-start-2 sm:text-sm"
                  @click="donation"
                >
                  یه قهوه مهمونم کن
                </button>
                <button
                  type="button"
                  class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 sm:mt-0 sm:col-start-1 sm:text-sm"
                  @click="githubstar"
                  ref="cancelButtonRef"
                >
                  <StarIcon
                    class="ml-1 h-4 w-4 self-center text-amber-600"
                    aria-hidden="true"
                  />
                  ستاره بده
                </button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
  } from '@headlessui/vue';
  import {
    HeartIcon,
    StarIcon,
    CurrencyDollarIcon,
  } from '@heroicons/vue/outline';

  const success2 = ref(false);

  const githubstar = () => {
    window.location.href = 'http://github.com/alpachinof/rtl-vue-admin';
  };

  const donation = () => {
    window.location.href = 'https://www.coffeebede.com/codify';
  };
</script>
