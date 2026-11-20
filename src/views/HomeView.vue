
<script setup lang="ts">
import YouTubePlayer from "../components/YouTubePlayer.vue";

const videos = Array.from({ length: 30 }, (_, index) => index + 1);
</script>

<template>
  <div class="video-grid">
    <div
      v-for="video in videos"
      :key="video"
      class="video-item"
    >
      <YouTubePlayer />
    </div>
  </div>
</template>

<style scoped>
.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.video-item {
  min-width: 0;
}
</style>
