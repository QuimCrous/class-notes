<!-- HTML HERE -->
<template>
  <div id="exOne">
    <h1>My favorite movies:</h1>
    <ul>
      <li v-for="(movie, index) in favMovies" :key="index">{{ movie }}</li>
    </ul>
  </div>
  <div id="exTwo">
    <li v-for="(value, key) in favThings" :key="key">
      {{ key }} - {{ value }}
    </li>
  </div>
  <div id="exThree">
    <div v-for="student in students">
      <h4>{{ student.name }}</h4>
      <p v-if="student.age >= 18">
        I can go for a few drinks with {{ student.name }} after class
      </p>
      <p v-else>
        {{ student.name }} is still too young, they'll have to go home tonight
      </p>
      <br />
      <h5>Favourite coding languages</h5>
      <ul>
        <li v-for="language in student.favouriteLanguages">{{ language }}</li>
      </ul>
    </div>
  </div>
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";
// Ejercicios Iterating Elements
// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.
// Ej.1: Creamos una variable reactiva que contenga un array con vuestras cinco películas preferidas. En el template pondremos un título de My favorite Movies y después una <ol>. Dentro de la ordered list recorreremos el array de películas y crearemos un <li> para cada una que nos las printee en pantalla. A cada <li> le daremos el index del elemento en el array como key.
// Ej.2:  Creamos una variable reactiva que contenga un objeto con cinco keys: favoriteFood, favoriteDrink, favoriteSport, favoriteCountry y favoriteArrayMethod. En el template vamos a recorrer el objeto para mostrar cada key y su valor en una unoredered list (en pantalla deberíamos ver algo como "favoriteFood: Sushi").
// Ej.3***: Creamos una variable reactiva students que contenga un array con al menos tres objetos. Cada objeto representará uno de vuestros compañeros y tendrá las keys name (string), age(number) y favoriteLanguages(array de strings). Tendremos que recorrer el array en el template y para cada objeto printear el nombre de vuestro compañero. Según si su edad es mayor o menor a 18 printearemos "I can go for a few drinks with NAME after class" o "NAME is still too young, they'll have to go home tonight". Finalmente, loopeamos el array de sus lenguajes de programación favoritos dentro de una unordered list.
const favMovies = reactive([
  "RoE: 1.11",
  "RoE: 2.22",
  "RoE: 3.33",
  "RoE: 3.0+1.0",
  "The End of Evangelion",
]);

const favThings = reactive({
  favoriteFood: "Pizzaaaa (&++)",
  favouriteDrink: "Soda",
  favouriteCountry: "Italy",
  favouriteArrayMethod: "pop and push",
});

const students = reactive([
  {
    name: "Jhon",
    age: 45,
    favouriteLanguages: ["Java", "JavaScript", "Jenkins"],
  },
  {
    name: "Walter",
    age: 16,
    favouriteLanguages: ["Java", "JavaScript", "Jenkins"],
  },
  {
    name: "Lumile",
    age: 18,
    favouriteLanguages: ["Java", "JavaScript", "Jenkins"],
  },
]);
</script>
<!-- CSS HERE -->
<style scoped>
h4 {
  text-decoration: underline;
}
</style>
