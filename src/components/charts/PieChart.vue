<template>
  <div class="bg-white shadow rounded-lg">
    <apexchart
      type="pie"
      :options="piechartOptions"
      :series="pieseries"
    ></apexchart>
  </div>
</template>

<script setup>
  const pieseries = [44, 55, 13, 43, 22];

  const piechartOptions = {
    chart: {
      type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    title: {
      text: 'نمودار دایره ای',
      align: 'center',
      style: {
        fontSize: '16px',
        color: '#666',
      },
    },
  };
</script>
