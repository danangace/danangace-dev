<script setup>
import Navigation from './components/navigations/Navigation.vue';
</script>

<template>
  <div class="bg-ace-blue-100 text-slate-200">
    <Navigation />
    <div class="pt-36">
      <p v-for="data in 100" :key="data">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia ex deserunt voluptatibus similique ullam labore placeat nostrum. Aliquam quasi voluptas deleniti molestiae nisi quibusdam dolore, reprehenderit laborum quae rem iure?
      </p>
    </div>
  </div>
</template>

<style scoped>
</style>
