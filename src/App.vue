<script setup>
  import { RouterView } from 'vue-router';
  import AppLayout from './layout/AppLayout.vue';
</script>

<template>
  <AppLayout />
  <RouterView class="lg:pr-64 mt-8" />
</template>

<style scoped></style>
