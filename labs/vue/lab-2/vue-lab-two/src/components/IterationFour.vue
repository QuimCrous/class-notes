<template>
  <div id="iterationThree">
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <h3 v-text="post.title"></h3>
        <h4 v-text="post.description"></h4>
        <p v-text="post.content"></p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const posts = reactive([
  {
    title: "Sunday",
    description: "What is the best of sundays",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam similique doloremque quae suscipit illum iure voluptatem et error praesentium. Ipsum aperiam aliquid consequuntur at quisquam voluptatem perferendis. Nobis, minus qui.",
  },
  {
    title: "Photo",
    description: "The best phoyo's of the year",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam similique doloremque quae suscipit illum iure voluptatem et error praesentium. Ipsum aperiam aliquid consequuntur at quisquam voluptatem perferendis. Nobis, minus qui.",
  },
  {
    title: "JavaScript",
    description: "How to learn JavaScript",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam similique doloremque quae suscipit illum iure voluptatem et error praesentium. Ipsum aperiam aliquid consequuntur at quisquam voluptatem perferendis. Nobis, minus qui.",
  },
]);
</script>

<style scoped></style>
