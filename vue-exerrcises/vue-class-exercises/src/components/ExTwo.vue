<!-- HTML HERE -->
<template>
  <div id="exTwo">
    <form @submit.prevent="showAlert">
      <div id="myName">
        <label for="name">Name:</label>
        <input
          type="text"
          id="name"
          autocomplete="off"
          v-model="myInfo.myName"
        />
      </div>
      <div id="myAge">
        <label for="age">Age:</label>
        <input type="number" id="age" v-model="myInfo.myAge" />
      </div>
      <div id="myDateOfBirth">
        <label for="dateOfBirth">Date of birth:</label>
        <input
          type="text"
          id="dateOfBirth"
          autocomplete="off"
          v-model="myInfo.dateOfBirth"
        />
      </div>
      <div id="submitButton">
        <input type="submit" value="Submit the info!" />
      </div>
    </form>
  </div>
</template>
<!-- JS HERE -->
<script setup>
import { ref, reactive } from "vue";
// Ejercicios Two Way Binding
// Creamos la estructura básica de un componente de vue en la que vamos a mostrar el resultado de los ejercicios. Recordad importar el componente donde sea necesario para poder ver el avance de vuestros ejercicios.
// Ej.1: Creamos un formulario en vuestro template. El formulario debe tener un evento de submit que bloquee el default behavior del evento y llame a la función handleSubmit. Dentro del formulario debemos tener diversos inputs que nos permitan entrar la siguiente info: name, age, date of birth. Cada uno de los inputs debe estar vinculado a su propia variable reactiva.
// Una vez le demos a submit deberíamos encargarnos de imprimir en una alerta un texto con el nombre que le hayáis inputado, un texto con la edad y un texto con vuestra date de birth.
// approach 1 - guardan cada dato en su variable propia name, age y dob
// approach 2 - guardan los 3 datos dentro de 1 variable que sea un objeto :)
const myInfo = reactive({
  myName: "",
  myAge: "",
  dateOfBirth: "",
});

const showAlert = () => {
  alert(`
    !!EXITO!!
        Hemos recibido tu solicitud correctamente.
        
        Te confirmamos los datos imputados: 
        - Nombre: ${myInfo.myName}
        - Edad: ${myInfo.myAge}
        - Fecha de nacimiento: ${myInfo.dateOfBirth}
    `);
};
</script>
<!-- CSS HERE -->
<style scoped></style>
