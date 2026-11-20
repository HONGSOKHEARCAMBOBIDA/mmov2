<template>
  <el-button v-bind="$attrs">
    <template v-if="icon" #icon>
      <component :is="icon" />
    </template>
    <slot />
  </el-button>
</template>

<script setup lang="ts">
defineOptions({ inheritAttrs: false });
defineProps<{ icon?: string }>();
</script>
