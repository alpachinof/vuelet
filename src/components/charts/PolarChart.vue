<template>
  <div class="bg-white shadow rounded-lg">
    <apexchart
      type="polarArea"
      :options="chartOptions"
      :series="series"
      :labels="labels"
    ></apexchart>
  </div>
</template>

<script setup>
  const series = [14, 23, 21, 17, 15, 10, 12, 17, 21];
  const labels = ['Apple', 'Mango', 'Banana', 'Papaya', 'Orange'];
  const chartOptions = {
    chart: {
      type: 'polarArea',
    },
    labels: [
      'نمونه یک',
      'نمونه دو',
      'نمونه سه',
      'نمونه چهار',
      'نمونه پنج',
      'نمونه شش',
      'نمونه هفت',
      'نمونه هشت',
      'نمونه نه',
    ],
    legend: {
      position: 'right',
      horizontalAlign: 'left',
      markers: { offsetX: 4, offsetY: 2 },
      labels: { colors: '#b45309' },
      itemMargin: {
        vertical: 2,
        horizontal: 10,
      },
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
