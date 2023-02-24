<template>
  <div id="exOne">
    <h1 v-if="exOneBoolean">
      I'm showing up beacuse our reactive data is true!
    </h1>
    <h1 v-else>
      I'm the option anytime our reactive data cannot be read as true
    </h1>
  </div>
  <hr />
  <div id="exTwo">
    <p v-if="language === 'HTML'">Today we are learing {{ language }}</p>
    <p v-else-if="language === 'CSS'">Today we are learing {{ language }}</p>
    <p v-else-if="language === 'JS'">Today we are learing {{ language }}</p>
    <p v-else>Today there's no class!</p>
  </div>
  <hr />
  <div id="exThree" v-if="show">
    <h1>{{ quimBio.name }}</h1>
    <p v-if="quimBio.age > 18">I am an adult! :)</p>
    <p v-else>I'm still a minor :(</p>

    <p v-if="quimBio.hasCodedBefore === true">
      This is not my first time at the javascript and vue rodeo
    </p>
    <p v-else>I am still a newbie to code but I'm learning fast</p>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const exOneBoolean = ref(true);
const language = ref("HTML");

const quimBio = reactive({
  name: "Quim",
  age: 35,
  hasCodedBefore: true,
});

const show = ref(true);
</script>

<style scoped></style>
