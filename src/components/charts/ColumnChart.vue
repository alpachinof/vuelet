<template>
  <div class="bg-white shadow rounded-lg">
    <apexchart type="bar" :options="options" :series="lineseries"></apexchart>
  </div>
</template>

<script setup>
  const options = {
    chart: {
      id: 'vuechart-example',
      toolbar: {
        show: false,
      },
    },
    title: {
      text: 'نمودار ستونی',
      align: 'center',
      style: {
        fontSize: '16px',
        color: '#666',
      },
    },
    xaxis: {
      categories: [1395, 1396, 1397, 1398, 1399, 1400, 1401, 1402],
    },
    plotOptions: {
      bar: {
        columnWidth: '40%',
        borderRadius: 5,
        dataLabels: {
          position: 'top',
        },
      },
    },
    colors: ['#1d4ed8'],
  };

  const lineseries = [
    {
      name: 'series-1',
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];
</script>
