<script setup lang="ts">
  import { ref } from 'vue'
  import { quantum } from 'ldrs'
  import { dataStore } from './utils/store.js';

  // initialize the store
  const data = dataStore();
  const loading : boolean = data.loading
  // initialize ldrs
  quantum.register()
</script>

<template>
  <div v-if="loading" class="absolute top-[20vh] left-0 w-[100%] h-screen flex justify-center items-center bg-black opacity-70 z-10">
      <l-quantum
        size="45"
        speed="1.75" 
        color="white" 
      ></l-quantum>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>