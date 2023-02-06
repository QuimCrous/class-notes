<script setup>
import { ref, computed } from "vue";
import { useSongsStore } from "../stores/songs";

const songsList = useSongsStore().mySongs;
const songTitle = ref("");
const addSong = useSongsStore().addSong;
const cleanSongs = useSongsStore().cleanSongs;
</script>
<template>
  <div>Hola desde songs</div>
  <div class="big-container">
    <div class="sm-container-one">
      <div v-if="songsList.length !== 0">
        <h2>Lista de canciones</h2>
        <ul>
          <li v-for="(song, index) in songsList">{{ song }}</li>
        </ul>
      </div>
      <div v-else>
        <h2>La lista de canciones está vacía</h2>
      </div>
    </div>
    <div class="sm-container-two">
      <label for="title">Escribe el título de la canción a añadir:</label>
      <input type="text" id="title" v-model="songTitle" />
      <button @click.prevent="addSong(songTitle)">
        Click para añadir la canción!
      </button>
      <button @click.prevent="cleanSongs">Click para vaciar la lista</button>
    </div>
  </div>
</template>

<style scoped>
.big-container {
  width: 90%;
  margin: 20px 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
}

.sm-container-one > div > h2 {
  margin: 0;
}

.sm-container-two {
  margin: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
