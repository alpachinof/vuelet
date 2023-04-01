<template>
  <div class="bg-white shadow rounded-lg">
    <apexchart
      type="polarArea"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script setup>
  const series = [14, 23, 21, 17, 15, 10, 12, 17, 21];
  const chartOptions = {
    chart: {
      type: 'polarArea',
    },
    stroke: {
      colors: ['#fff'],
    },
    fill: {
      opacity: 0.8,
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
      text: 'نمودار قطبی',
      align: 'center',
      style: {
        fontSize: '16px',
        color: '#666',
      },
    },
  };
</script>
