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
  const donutColors = {
    series1: '#fdd835',
    series2: '#00d4bd',
    series3: '#826bf8',
    series4: '#32baff',
    series5: '#ffa1a1',
  };

  const series = [44, 55, 41, 17];
  const chartOptions = {
    chart: {
      type: 'donut',
    },
    stroke: { width: 0 },
    labels: ['react', 'vue', 'angular', 'svelte'],
    colors: [
      donutColors.series1,
      donutColors.series5,
      donutColors.series3,
      donutColors.series2,
      donutColors.series4,
    ],
    dataLabels: {
      enabled: true,
      formatter: (val) => `${parseInt(val, 10)}%`,
    },
    legend: {
      position: 'bottom',
      markers: { offsetX: 3 },
      labels: { colors: '#b91c1c' },
      itemMargin: {
        vertical: 5,
        horizontal: 10,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              fontSize: '1.5rem',
            },
            value: {
              fontSize: '1.5rem',
              color: '#0f172a',
              formatter: (val) => `${parseInt(val, 10)}`,
            },
            total: {
              show: true,
              fontSize: '1.5rem',
              label: 'frameworks',
              formatter: () => '31%',
              color: '#64748b',
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 380,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 320,
          },
          plotOptions: {
            pie: {
              donut: {
                labels: {
                  show: true,
                  name: {
                    fontSize: '1rem',
                  },
                  value: {
                    fontSize: '1rem',
                  },
                  total: {
                    fontSize: '1rem',
                  },
                },
              },
            },
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
