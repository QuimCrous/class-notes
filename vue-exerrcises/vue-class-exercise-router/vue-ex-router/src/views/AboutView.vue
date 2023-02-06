<script setup>
import ParentComponent from "../components/excomponent/ParentComponent.vue";
import General from "../components/excomponent/General.vue";
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <ParentComponent /> -->
    <General />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
    align-items: center;
    justify-content: center;
    flex-direction: center;
  }
}
</style>
