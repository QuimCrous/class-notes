<template>
  <h1 v-text="myName"></h1>
</template>

<script setup>
import { ref, reactive } from "vue";

const myName = ref("Quim");
</script>

<style scoped></style>
