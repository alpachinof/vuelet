<template>
  <div class="bg-white shadow rounded-lg">
    <apexchart type="bar" :options="options" :series="lineseries"></apexchart>
  </div>
</template>

<script setup>
  const columnColors = {
    series1: '#2563eb',
    series2: '#d2b0ff',
    bg: '#e2e8f0',
  };

  const options = {
    chart: {
      offsetX: -10,
      stacked: true,
      parentHeightOffset: 0,
      toolbar: { show: false },
    },
    fill: { opacity: 1 },
    dataLabels: { enabled: false },
    colors: [columnColors.series1, columnColors.series2],
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      labels: { colors: '#dc2626' },
      markers: {
        offsetY: 1,
        offsetX: 3,
      },
      itemMargin: {
        vertical: 3,
        horizontal: 10,
      },
    },
    stroke: {
      show: true,
      colors: ['transparent'],
    },
    plotOptions: {
      bar: {
        columnWidth: '15%',
        colors: {
          backgroundBarRadius: 10,
          backgroundBarColors: [
            columnColors.bg,
            columnColors.bg,
            columnColors.bg,
            columnColors.bg,
            columnColors.bg,
          ],
        },
      },
    },
    grid: {
      borderColor: '#cbd5e1',
      xaxis: {
        lines: { show: true },
      },
    },
    yaxis: {
      labels: {
        style: { colors: '#d1d5db' },
      },
    },
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { color: '#2dd4bf' },
      categories: [
        '7/12',
        '8/12',
        '9/12',
        '10/12',
        '11/12',
        '12/12',
        '13/12',
        '14/12',
        '15/12',
      ],
      crosshairs: {
        stroke: { color: '#4f46e5' },
      },
      labels: {
        style: { colors: '#64748b' },
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
    responsive: [
      {
        breakpoint: 600,
        options: {
          plotOptions: {
            bar: {
              columnWidth: '35%',
            },
          },
        },
      },
    ],
  };

  const lineseries = [
    {
      name: 'نمونه اول',
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ];
</script>
