<!-- HTML HERE -->
<template>
  <h3 v-if="booleanValue" v-text="booleanText"></h3>
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";

const booleanValue = ref(true);
const booleanText = ref("This text is showed cause booleanValue is true");
</script>
<!-- CSS HERE -->
<style scoped></style>
