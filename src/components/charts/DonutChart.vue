<template>
  <div class="bg-white shadow rounded-lg">
    <apexchart
      type="donut"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script setup>
  const series = [44, 55, 41, 17, 15];
  const chartOptions = {
    chart: {
      type: 'donut',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    title: {
      text: 'نمودار دونات',
      align: 'center',
      style: {
        fontSize: '16px',
        color: '#666',
      },
    },
  };
</script>
