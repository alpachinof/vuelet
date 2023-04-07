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
    labels: ['مک', 'ویندوز', 'لینوکس', 'اندروید', 'آیفون'],
    title: {
      text: 'نمودار دایره ای',
      align: 'center',
      style: {
        fontSize: '16px',
        color: '#666',
      },
    },
    legend: {
      position: 'right',
      horizontalAlign: 'left',
      markers: { offsetX: 4, offsetY: 3 },
      labels: { colors: '#b45309' },
      itemMargin: {
        vertical: 10,
        horizontal: 10,
      },
    },
  };
</script>
