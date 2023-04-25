<script setup>
import { RouterView } from 'vue-router';
import Navigation from './components/navigations/Navigation.vue';
</script>

<template>
  <div class="bg-ace-blue-100 text-slate-200 min-h-screen">
    <Navigation />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
</style>
