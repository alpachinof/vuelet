<template>
  <div class="mx-4 grid grid-cols-1 md:grid-cols-2 gap-4">
    <LinearChart />
    <ColumnChart />
    <PieChart />
    <DonutChart />
    <PolarChart />
    <RadarChart />
    <ScatterChart />
    <MixedChart />
  </div>
</template>

<script setup>
  import LinearChart from '../../components/charts/LinearChart.vue';
  import ColumnChart from '../../components/charts/ColumnChart.vue';
  import PieChart from '../../components/charts/PieChart.vue';
  import DonutChart from '../../components/charts/DonutChart.vue';
  import PolarChart from '../../components/charts/PolarChart.vue';
  import RadarChart from '../../components/charts/RadarChart.vue';
  import ScatterChart from '../../components/charts/ScatterChart.vue';
  import MixedChart from '../../components/charts/MixedChart.vue';
</script>
