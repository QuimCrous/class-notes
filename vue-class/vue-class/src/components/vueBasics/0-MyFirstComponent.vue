<!-- HTML -->
<template>
  <!-- HTML - puesto a pelo -->
  <section>
    <div>
      <p>Mi nombre es Quim, nací en España y tengo 35 años.</p>
    </div>

    <!-- HTML - puesto con interpolacion de texto - mejor conocido como nuetro claudators de bigote!!! -->
    <div>
      <p>
        Mi nombre es {{ myName }}, nací en {{ countryOfBirth }} y tengo
        {{ age }} años.
      </p>

      <p>
        Mi nombre es {{ myInfo.myName }}, nací en {{ myInfo.countryOfBirth }} y
        tengo {{ myInfo.age }} años.
      </p>
    </div>
  </section>

  <section>
    <div class="counter">
      <button @click="decreaseCounter">-</button>
      <p>{{ counter.count }}</p>
      <button @click="increaseCounter">+</button>
    </div>
  </section>

  <section class="quim">
    <p>
      Me llamo {{ myObject.name }}, tengo {{ myObject.age }} años y naci el
      {{ myObject.dob }}
    </p>
    <p>Mis hobbies son:</p>
    <li v-for="(hobby, index) in myObject.hobbies" :key="index">
      {{ hobby }}
    </li>
    <p>Mis centros educativos son:</p>
    <li v-for="(nombre, valor) in myObject.education" :key="(nombre, valor)">
      {{ valor }}: {{ nombre }}
    </li>

    <p>Mi grupo favorito es: {{ myObject.favouriteMusicGroup }}</p>

    <p>Mi peli favorita es: {{ favouriteMovie }}</p>
    <p>La he visto: {{ movieCounter }}</p>
    <p>Mi comida favorita es: {{ favouriteFood }}</p>
  </section>
</template>

<!-- JS -->
<script setup>
import { ref, reactive } from "vue";

const myName = ref("Scaramouche");
//const myName = "Scaramouche";

const countryOfBirth = ref("Catalunya");
const age = ref(35);

const myInfo = reactive({
  myName: "Quim",
  countryOfBirth: "Catalunya",
  age: 35,
});

// -------

const counter = reactive({
  count: 0,
  title: "My Counter",
});

const increaseCounter = () => {
  counter.count++;
};

const decreaseCounter = () => {
  counter.count--;
};

// ej 01 -----------

const favouriteMovie = ref("Rebuild of Evangelion: 3.0+1.0 thrice upon a time");
const movieCounter = ref(10);
const favouriteFood = ref("PASTA (en general XD)");

const myObject = reactive({
  name: "Quim",
  age: 35,
  dob: "04/05/1987",
  hobbies: ["play videogames", "listen music", "reading when i have time XD"],
  education: {
    primaria: "CEIP Puig d'Arques",
    secundaria: "IES Cassà de la Selva",
    universidad: "UB",
  },
  favouriteMusicGroup: "Blind Guardian",
});
</script>

<!-- CSS -->
<style scoped>
section .counter {
  display: flex;
  margin: 2rem 0;
  padding: 0 3rem;
}

section .counter button {
  padding: 2rem;
  font-size: 2em;
}

section .counter p {
  font-size: 3em;
  padding: 0 2rem;
}
</style>
