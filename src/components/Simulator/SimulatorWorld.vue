<script setup lang="ts">
import type { ISimulationObject } from "@/interfaces";

defineProps<{
  dimension: { x: number; y: number };
  objects: Array<ISimulationObject>;
}>();

const objectsAt = (
  objects: ISimulationObject[],
  position: { x: number; y: number }
): ISimulationObject[] => {
  return objects.filter(
    (objectWrapper) =>
      objectWrapper.position.x === position.x &&
      objectWrapper.position.y === position.y
  );
};
</script>

<template>
  <div class="viewer">
    <div
      v-for="row in dimension.y"
      class="row"
      :key="`row-${row}`"
      :ref="`row-${row}`"
    >
      <div
        v-for="column in dimension.x"
        class="column"
        :id="`row-${row}-column-${column}`"
        :key="`row-${row}-column-${column}`"
        :ref="`row-${row}-column-${column}`"
      >
        <div
          v-for="objectWrapper in objectsAt(objects, {
            x: column,
            y: row,
          })"
          class="object"
          :key="`object-${objectWrapper.object.id}`"
          :ref="`object-${objectWrapper.object.id}`"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
div.viewer {
  display: inline-block;
  width: auto;
  border: 1px solid #333;
  /* display: flex; */
  flex-direction: column;
}

div.row {
  display: flex;
  flex-direction: row;
}

div.column {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid #e5e5e5;
  background-color: #f0f0f0;
}

div.object {
  width: 20px;
  height: 20px;
  background-color: blue;
  border-radius: 40%;
}
</style>
