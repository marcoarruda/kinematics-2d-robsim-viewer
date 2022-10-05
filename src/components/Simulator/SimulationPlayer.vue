<script setup lang="ts">
import type { ISimulation } from "@/interfaces";
import { defineProps, ref } from "vue";

enum EnumSimulationControl {
  PAUSE,
  PLAY,
}

const state = ref<EnumSimulationControl>(EnumSimulationControl.PAUSE);
const pause = () => {
  state.value = EnumSimulationControl.PAUSE;
};
const play = () => {
  state.value = EnumSimulationControl.PLAY;
};

defineProps<{
  currentStepIndex: number;
  totalSteps: number;
}>();
</script>

<template>
  <div class="controls">
    <button class="prev">prev</button>
    <button
      class="pause"
      ref="pause"
      :disabled="state === EnumSimulationControl.PAUSE"
      @click="pause"
    >
      pause
    </button>
    <div class="steps">{{ currentStepIndex }} / {{ totalSteps }}</div>
    <button
      class="play"
      ref="play"
      :disabled="state === EnumSimulationControl.PLAY"
      @click="play"
    >
      play
    </button>

    <button class="next">next</button>
  </div>
</template>

<style scoped>
div.controls {
  display: flex;
}
.pause,
.next {
  margin-left: auto;
}
</style>
