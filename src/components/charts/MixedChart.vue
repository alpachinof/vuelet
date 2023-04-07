<template>
  <div class="bg-white shadow rounded-lg">
    <apexchart
      type="line"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script setup>
  const series = [
    {
      name: 'وبلاگ',
      type: 'column',
      data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
    },
    {
      name: 'شبکه های اجتماعی',
      type: 'line',
      data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
    },
  ];
  const chartOptions = {
    chart: {
      type: 'line',
      toolbar: { show: false },
    },
    stroke: {
      width: [0, 4],
    },
    title: {
      text: 'Traffic Sources',
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    labels: [
      '01 Jan 2001',
      '02 Jan 2001',
      '03 Jan 2001',
      '04 Jan 2001',
      '05 Jan 2001',
      '06 Jan 2001',
      '07 Jan 2001',
      '08 Jan 2001',
      '09 Jan 2001',
      '10 Jan 2001',
      '11 Jan 2001',
      '12 Jan 2001',
    ],
    xaxis: {
      type: 'datetime',
    },
    yaxis: [
      {
        title: {
          text: 'وبلاگ',
        },
      },
      {
        opposite: true,
        title: {
          text: 'شبکه های اجتماعی',
        },
      },
    ],
    title: {
      text: 'نمودار ترکیبی',
      align: 'center',
      style: {
        fontSize: '16px',
        color: '#666',
      },
    },
  };
</script>
