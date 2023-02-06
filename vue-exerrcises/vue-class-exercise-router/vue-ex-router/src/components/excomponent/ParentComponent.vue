<script setup>
import { ref, reactive } from "vue";
import ChildComponent from "../excomponent/ChildComponent.vue";

const myAlert = () => {
  alert("Emit realizado con exito!");
};
</script>

<template>
  <h1>hola</h1>
  <ChildComponent @buttonEmit="myAlert" />
</template>

<style scoped></style>
