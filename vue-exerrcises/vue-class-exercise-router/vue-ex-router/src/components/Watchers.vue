<script setup>
import { ref, reactive, watch } from "vue";
import jsonAnserFile from "../assets/jsonAnswer.json";
const answer = ref();
const bool = ref(false);
const text = ref();
const image = ref();

watch(answer, async (newAnswer) => {
  if (answer.value.toLowerCase() === "yes") {
    text.value = jsonAnserFile.yes.answer;
    image.value = jsonAnserFile.yes.imgSrc;
  } else if (answer.value.toLowerCase() === "no") {
    text.value = jsonAnserFile.no.answer;
    image.value = jsonAnserFile.no.imgSrc;
  } else {
    text.value = jsonAnserFile.other.answer;
    image.value = jsonAnserFile.other.imgSrc;
  }
});

const seeAnswer = () => {
  bool.value = !bool.value;
};
</script>

<template>
  <div>
    <label for="answer" v-text="'Te gusta la pizza?'"></label>
    <input type="text" id="answer" v-model="answer" maxlength="3" />
    <!-- <button @click="seeAnswer">Click to see the answer</button> -->
    <p v-if="text" v-text="text"></p>
    <img v-if="image" :src="image" alt="" />
  </div>
</template>

<style scoped></style>
