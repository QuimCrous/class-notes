<template>
  <button @click="emitFunction">Emit me</button>
</template>

<script setup>
import { ref, reactive } from "vue";
const emits = defineEmits(["buttonEmit"]);
const emitFunction = () => {
  emits("buttonEmit");
};
</script>

<style scoped></style>
