<script setup>
import { ref, reactive } from "vue";
const bool = ref(false);
const seeImg = () => {
  bool.value = !bool.value;
};
</script>

<template>
  <div id="proba">
    <slot />
    <h1 v-text="'Blind Guardian'"></h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quas eum
      dolorem enim, quia harum omnis nemo ad ducimus mollitia beatae perferendis
      blanditiis molestias temporibus labore voluptas. Repellendus, laboriosam
      accusantium!
    </p>

    <button @click="seeImg">Click to see the image :)</button>
    <img
      src="https://m.media-amazon.com/images/I/814T8IjIl0L._SL1300_.jpg"
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

.no-vista {
  display: none;
}

.vista {
  width: 200px;
}
</style>
