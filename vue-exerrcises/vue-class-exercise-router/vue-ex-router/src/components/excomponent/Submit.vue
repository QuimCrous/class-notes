<template>
  <button @click="$emit('submit')">Submit</button>
</template>

<script setup>
const emit = defineEmits(["submit"]);
</script>

<style scoped></style>
