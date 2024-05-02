<script setup lang="ts">
  import Nav from './components/Nav.vue'
  import { RouterView } from 'vue-router'
  import Loading from './components/loading.vue'
</script>

<template>
  <Nav/>
  <Loading/>
   <Suspense>
      <router-view></router-view>
          <!-- loading state -->
          <template #fallback>
            <Loading/>
          </template>
      </Suspense>
</template>

