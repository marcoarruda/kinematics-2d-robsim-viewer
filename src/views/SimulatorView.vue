<script setup lang="ts">
import SimulatorWorld from "../components/Simulator/SimulatorWorld.vue";
import SimulationPlayer from "../components/Simulator/SimulationPlayer.vue";
import type { ISimulation } from "@/interfaces";
import { ref } from "vue";

const dimension = { x: 20, y: 20 };

const currentStepIndex = ref<number>(1);

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
  steps: [{ objects: [] }, { objects: [] }, { objects: [] }],
};

const prev = () => {
  currentStepIndex.value--;
};
const next = () => {
  currentStepIndex.value++;
};
</script>

<template>
  <main>
    <SimulationPlayer
      :currentStepIndex="currentStepIndex"
      :totalSteps="simulation.steps.length"
      @prev="prev"
      @next="next"
    />
    <SimulatorWorld :dimension="dimension" :objects="objects" />
  </main>
</template>
