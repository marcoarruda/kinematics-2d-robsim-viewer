<script setup lang="ts">
import { computed } from "vue";
import { defineProps, ref } from "vue";

enum EnumSimulationControl {
  PAUSE,
  PLAY,
}

const props = defineProps<{
  currentStepIndex: number;
  totalSteps: number;
}>();

const state = ref<EnumSimulationControl>(EnumSimulationControl.PAUSE);

const pauseDisabled = computed(
  () => state.value === EnumSimulationControl.PAUSE
);
const pause = () => {
  state.value = EnumSimulationControl.PAUSE;
};

const playDisabled = computed(() => state.value === EnumSimulationControl.PLAY);
const play = () => {
  state.value = EnumSimulationControl.PLAY;
};

const emit = defineEmits<{
  (e: "prev"): void;
  (e: "next"): void;
}>();

const prevDisabled = computed(() => props.currentStepIndex === 0);
const prev = () => {
  emit("prev");
};

const nextDisabled = computed(
  () => props.currentStepIndex === props.totalSteps
);
const next = () => {
  emit("next");
};
</script>

<template>
  <div class="controls">
    <button class="prev" ref="prev" :disabled="prevDisabled" @click="prev">
      prev
    </button>

    <button class="pause" ref="pause" :disabled="pauseDisabled" @click="pause">
      pause
    </button>

    <div class="steps">{{ currentStepIndex }} / {{ totalSteps }}</div>

    <button class="play" ref="play" :disabled="playDisabled" @click="play">
      play
    </button>

    <button class="next" ref="next" :disabled="nextDisabled" @click="next">
      next
    </button>
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
