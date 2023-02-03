<script setup>
import { ref, reactive } from "vue";
const bool = ref(false);
const seeImg = () => {
  bool.value = !bool.value;
};
</script>

<template>
  <div id="proba">
    <h1>Pizza</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quas eum
      dolorem enim, quia harum omnis nemo ad ducimus mollitia beatae perferendis
      blanditiis molestias temporibus labore voluptas. Repellendus, laboriosam
      accusantium!
    </p>
    <button @mouseleave="seeImg">Get out the mouse to see the image :)</button>
    <img
      src="https://www.laespanolaaceites.com/wp-content/uploads/2019/06/pizza-con-chorizo-jamon-y-queso-1080x671.jpg"
      alt=""
      :class="bool ? 'vista' : 'no-vista'"
    />
  </div>
</template>

<style>
#proba {
  display: flex;
  flex-direction: column;
}

#proba > button {
  height: 80px;
}

.no-vista {
  display: none;
}

.vista {
  width: 200px;
}
</style>
