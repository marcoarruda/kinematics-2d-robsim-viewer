<script setup lang="ts">
import SimulatorWorld from "../components/Simulator/SimulatorWorld.vue";

const dimension = { x: 20, y: 20 };
</script>

<template>
  <main>
    <SimulatorWorld :dimension="dimension" />
  </main>
</template>
