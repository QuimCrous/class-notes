<template>
  <p></p>

  <h1 :id="exOne">ex 1</h1>

  <h2 :class="exTwoBoolean ? 'class-one' : 'class-two'">ex 2</h2>

  <h3 :style="[style, styleTwo]">ex 3</h3>

  <h4 :class="[isRed && 'red-class', isBordered && 'border-class']">ex 4</h4>
</template>

<style scoped>
#exerciseOne {
  color: aqua;
  text-decoration: underline;
}

.class-one {
  color: blueviolet;
}

.class-two {
  display: none;
}

.red-class {
  color: red;
}

.border-class {
  border: 1px solid green;
}
</style>

<script setup>
import { ref, reactive } from "vue";
const exOne = ref("exerciseOne");

const exTwoBoolean = ref(true);

const color = ref("blue");
const size = ref(40);

const style = reactive({
  color: "blue",
  fontSize: "40px",
});

const styleTwo = reactive({
  border: "5px solid red",
  textDecoration: "underline",
});

const isRed = ref(true);
const isBordered = ref(true);
</script>
