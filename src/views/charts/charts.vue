<template>
  <div class="mx-4 grid grid-cols-1 md:grid-cols-2 gap-4">
    <div class="bg-white shadow rounded-lg">
      <apexchart
        type="line"
        :options="chartOptions"
        :series="series"
      ></apexchart>
    </div>

    <div class="bg-white shadow rounded-lg">
      <apexchart type="bar" :options="options" :series="lineseries"></apexchart>
    </div>

    <div class="bg-white shadow rounded-lg">
      <apexchart
        type="pie"
        :options="piechartOptions"
        :series="pieseries"
      ></apexchart>
    </div>
  </div>
</template>

<script setup>
  const series = [
    {
      name: 'Sales',
      data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
    },
  ];

  const chartOptions = {
    chart: {
      type: 'line',
      toolbar: {
        show: false,
      },
    },

    forecastDataPoints: {
      count: 7,
    },
    stroke: {
      width: 5,
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      categories: [
        '1/11/2000',
        '2/11/2000',
        '3/11/2000',
        '4/11/2000',
        '5/11/2000',
        '6/11/2000',
        '7/11/2000',
        '8/11/2000',
        '9/11/2000',
        '10/11/2000',
        '11/11/2000',
        '12/11/2000',
        '1/11/2001',
        '2/11/2001',
        '3/11/2001',
        '4/11/2001',
        '5/11/2001',
        '6/11/2001',
      ],
      tickAmount: 10,
      labels: {
        formatter: function (value, timestamp, opts) {
          return opts.dateFormatter(new Date(timestamp), 'dd MMM');
        },
      },
    },
    title: {
      text: 'نمودار خطی',
      align: 'center',
      style: {
        fontSize: '16px',
        color: '#666',
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: ['#FDD835'],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100, 100, 100],
      },
    },
    yaxis: {
      min: -10,
      max: 40,
    },
  };

  const options = {
    chart: {
      id: 'vuechart-example',
      toolbar: {
        show: false,
      },
    },
    title: {
      text: 'نمودار میله ای',
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

  const pieseries = [44, 55, 13, 43, 22];

  const piechartOptions = {
    chart: {
      type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  };
</script>
