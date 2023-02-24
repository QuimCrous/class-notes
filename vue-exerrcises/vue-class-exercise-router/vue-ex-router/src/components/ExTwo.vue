<template>
  <div class="container-style-quim">
    <div>
      <h1>Fav series</h1>
      <div v-for="(serie, index) in myWatchlist" :key="index">
        <h3>{{ serie.title }}</h3>
        <h4>{{ serie.year }}</h4>
        <h4>Where to Watch:</h4>
        <p v-for="(platform, index) in serie.whereToWatch">{{ platform }}</p>
        <br />
      </div>
    </div>
    <div>
      <h1>Fav series on Netflix</h1>
      <div v-for="(serie, index) in watchOnNetflix" :key="index">
        <h3>{{ serie.title }}</h3>
        <h4>{{ serie.year }}</h4>
        <h4>Where to Watch:</h4>
        <p v-for="(platform, index) in serie.whereToWatch">{{ platform }}</p>
        <br />
      </div>
    </div>
    <div>
      <form>
        <label for="title">Title</label>
        <input type="text" id="title" v-model="title" />
        <label for="year">Year</label>
        <input type="number" id="year" v-model="year" /><br />
        <label for="streaming">Choose a Streaming platform:</label><br />
        <input
          type="checkbox"
          name="streaming"
          value="Disney+"
          v-model="streaming.streamApp"
        />
        Disney +<br />
        <input
          type="checkbox"
          name="streaming"
          value="Netflix"
          v-model="streaming.streamApp"
        />
        Netflix<br />
        <input
          type="checkbox"
          name="streaming"
          value="HBO"
          v-model="streaming.streamApp"
        />
        HBO<br />
        <button @click.prevent="addSerie">Submit</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
const title = ref("");
const year = ref("");
const streaming = reactive({
  streamApp: [],
});

const myWatchlist = reactive([
  {
    title: "My little Pony",
    year: 1998,
    whereToWatch: ["Netflix", "HBO", "Disney+"],
  },
  {
    title: "My Cat Adventures",
    year: 2050,
    whereToWatch: ["HBO", "Disney+"],
  },
  {
    title: "Game of Chairs",
    year: 2005,
    whereToWatch: ["Netflix", "Disney+"],
  },
]);

const watchOnNetflix = computed(() => {
  return myWatchlist.filter((element) =>
    element.whereToWatch.includes("Netflix")
  );
});

const addSerie = () => {
  myWatchlist.push({
    title: title.value,
    year: year.value,
    whereToWatch: streaming.streamApp,
  });
  console.log(streaming);
};
</script>

<style scoped>
.container-style-quim {
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  flex-direction: row;
}
.container-style-quim > div {
  padding: 10px;
}
</style>
