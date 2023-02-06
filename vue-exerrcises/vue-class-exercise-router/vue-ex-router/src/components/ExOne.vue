<template>
  <div>
    <div class="container-style-quim">
      <h1>{{ myName }}</h1>
    </div>
    <form>
      <label for="firstName">First name</label>
      <input type="text" id="firstName" v-model="name" />
      <br />
      <label for="lastName">Last name</label>
      <input type="text" id="lastName" v-model="lastName" />
    </form>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";

const name = ref("Quim");
const lastName = ref("Crous");

const myName = computed({
  get() {
    return `${name.value} ${lastName.value}`;
  },
  set(value) {
    const newName = value.split(" ");
    name.value = newName[0];
    lastName.value = newName[1];
  },
});
</script>

<style scoped>
.container-style-quim {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}
</style>
