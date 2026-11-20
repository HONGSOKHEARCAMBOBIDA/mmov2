<template>
  <div>
    <h3>Rent detail - {{ customerName }}</h3>
    <el-alert
      type="info"
      :closable="false"
      title="Paste your full CustomerRentDetail component into this file."
    />
    <p>branchId: {{ branchId }} / customerRentRoomId: {{ customerRentRoomId }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ branchId: number; customerRentRoomId: number; customerName: string }>();
</script>
