<script setup lang="ts">
import SimulatorWorld from "../components/Simulator/SimulatorWorld.vue";
import SimulationPlayer from "../components/Simulator/SimulationPlayer.vue";
import type { ISimulation } from "@/interfaces";

const dimension = { x: 20, y: 20 };

const objects = [
  {
    object: { id: "" },
    position: { x: 5, y: 15 },
  },
];

const simulation: ISimulation = {
  world: {
    dimension,
    objects,
  },
  steps: [],
};
</script>

<template>
  <main>
    <SimulationPlayer :steps="simulation.steps" />
    <SimulatorWorld :dimension="dimension" :objects="objects" />
  </main>
</template>
