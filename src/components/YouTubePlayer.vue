<script setup lang="ts">
const videoId = "8TLSR6vfFa0";
</script>

<template>
  <iframe
    :src="`https://www.youtube.com/embed/${videoId}`"
    title="YouTube video"
    allowfullscreen
  />
</template>

<style scoped>
iframe {
  width: 100%;
  aspect-ratio: 16 / 9;
  border: none;
}
</style>