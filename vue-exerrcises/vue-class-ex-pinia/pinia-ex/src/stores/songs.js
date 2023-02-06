import { ref, computed, reactive } from "vue";
import { defineStore } from "pinia";

export const useSongsStore = defineStore("songs", () => {
  const mySongs = reactive([]);

  const addSong = (song) => mySongs.push(song);

  const cleanSongs = () => (mySongs.length = 0);

  return { mySongs, addSong, cleanSongs };
});
