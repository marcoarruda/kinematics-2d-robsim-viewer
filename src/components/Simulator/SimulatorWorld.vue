<script setup lang="ts">
defineProps<{
  dimension: { x: number; y: number };
}>();
</script>

<template>
  <div class="viewer">
    <div v-for="row in dimension.x" :key="`row-${row}`" class="row">
      <div
        v-for="column in dimension.y"
        :key="`row-${row}-column-${column}`"
        class="column"
      ></div>
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
  width: 30px;
  height: 30px;
  border: 1px solid #e5e5e5;
  background-color: #f0f0f0;
}
</style>
