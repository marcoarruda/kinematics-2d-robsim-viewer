<script setup lang="ts">
import SimulatorWorld from "../components/Simulator/SimulatorWorld.vue";

const dimension = { x: 20, y: 20 };

const objects = [
  {
    object: { id: "" },
    position: { x: 5, y: 15 },
  },
];
</script>

<template>
  <main>
    <SimulatorWorld :dimension="dimension" :objects="objects" />
  </main>
</template>
