<script setup></script>

<template>
  <div id="app">
    <header>
      <img src="./images/Ironhack_logo.svg" alt="" class="logo-iron" />
      <img src="./images/Burger_menu.svg" alt="" class="ham-menu" />
    </header>
    <section class="intro">
      <img src="./images/Vue_logo.svg" alt="" class="vue-logo" />
      <h1>Welcome to Vue.js</h1>
      <p>Become a coding ninja with the fastest-growing JavaScript framework</p>
      <button>Awesome!</button>
    </section>
    <section class="usps">
      <div class="card">
        <img src="./images/USP-1.svg" alt="" class="card-logo" />
        <h3>Performant</h3>
        <p>
          Truly reactive, compiler-optimized rendering system that rarely
          requires manual optimization.
        </p>
      </div>
      <div class="card">
        <img src="./images/USP-2.svg" alt="" class="card-logo" />
        <h3>Approachable</h3>
        <p>
          Builds on top of standard HTML, CSS and JavaScript with intuitive API
          and world-class documentation.
        </p>
      </div>
      <div class="card">
        <img src="./images/USP-3.svg" alt="" class="card-logo" />
        <h3>Versatile</h3>
        <p>
          A rich, incrementally adoptable ecosystem that scales between a
          library and a full-featured framework.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Cinzel&family=Roboto:wght@100;300;400;500;800&display=swap");

#app {
  margin: 2% 15%;
  font-family: "roboto", "sans-serif";
}
header {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.intro {
  margin-top: 5%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.intro > h1 {
  font-size: 50px;
  margin: 10px;
}

.intro > p {
  margin: 10px;
  font-size: 14px;
  max-width: 20%;
  text-align: center;
  font-weight: bold;
}

.intro > button {
  margin: 20px;
  background-color: #34495e;
  border-radius: 13px;
  color: white;
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
}

.usps {
  background-color: #39b983;
  padding: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 10%;
}

.card {
  width: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card > p {
  text-align: center;
}
</style>
