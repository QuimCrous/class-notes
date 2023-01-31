<template>
  <div id="coloredContainer" class="blue-box" :class="isRed && 'red-box'"></div>
  <button id="colorButton" @click="changeColor()">Change the color</button>
</template>

<script setup>
import { ref, reactive } from "vue";

const isRed = ref(true);

const changeColor = () => {
  isRed.value ? (isRed.value = false) : (isRed.value = true);
  //console.log(isRed.value);
};
</script>

<style scoped>
.blue-box {
  width: 500px;
  height: 500px;
  background-color: blue;
}

.red-box {
  background-color: red;
}
</style>
