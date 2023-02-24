<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import MyFirstComponent from "./components/vueBasics/0-MyFirstComponent.vue";
import BinDirectiveExercise from "./components/vueBasics/bin-directive-ex.vue";
import ConditionalDirectives from "./components/vueBasics/ConditionalDirectives.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="Vue class" />
    </div>
  </header>

  <!-- Declarar los componentes creados de clase dentro del main -->
  <main>
    <!-- <MyFirstComponent /> -->
    <!-- <BinDirectiveExercise /> -->
    <ConditionalDirectives />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
