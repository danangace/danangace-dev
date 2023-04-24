<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function backToHomepage () {
  router.push('/')
}

</script>
<template>
  <div role="button" @click="backToHomepage" class="text-xl font-bold">
    <span class="text-slate-200">danang</span>
    <span class="text-ace-blue-200">ace</span>
  </div>
</template>