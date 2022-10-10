<script setup lang="ts">
import SimulatorWorld from "../components/Simulator/SimulatorWorld.vue";
import SimulationPlayer from "../components/Simulator/SimulationPlayer.vue";
import type { ISimulation } from "@/interfaces";
import { ref } from "vue";

const dimension = { x: 20, y: 20 };

const currentStepIndex = ref<number>(1);

const simulation: ISimulation = {
  world: {
    dimension,
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
    <SimulatorWorld
      :dimension="dimension"
      :objects="simulation.steps[currentStepIndex].objects"
    />
  </main>
</template>
