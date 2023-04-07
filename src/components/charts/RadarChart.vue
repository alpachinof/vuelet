<template>
  <div class="bg-white shadow rounded-lg">
    <apexchart
      type="radar"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script setup>
  const series = [
    {
      name: 'نمونه اول',
      data: [80, 50, 30, 40, 100, 20],
    },
    {
      name: 'نمونه دوم',
      data: [20, 30, 40, 80, 20, 80],
    },
    {
      name: 'نمونه سوم',
      data: [44, 76, 78, 13, 43, 10],
    },
  ];
  const chartOptions = {
    chart: {
      height: 350,
      type: 'radar',
      dropShadow: {
        enabled: true,
        blur: 1,
        left: 1,
        top: 1,
      },
      toolbar: { show: false },
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'left',
      markers: { offsetX: 4, offsetY: 3 },
      labels: { colors: '#b45309' },
      itemMargin: {
        vertical: 10,
        horizontal: 10,
      },
    },
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.1,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      categories: ['2011', '2012', '2013', '2014', '2015', '2016'],
    },
    title: {
      text: 'نمودار رادار',
      align: 'center',
      style: {
        fontSize: '16px',
        color: '#666',
      },
    },
  };
</script>
