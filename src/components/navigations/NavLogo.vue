<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function backToHomepage () {
  router.push('/')
}

</script>
<template>
  <div role="button" @click="backToHomepage" class="font-bold flex items-center">
    <span class="text-white px-1 py-1 bg-ace-blue-200 rounded-lg text-xs mr-1">&lt;/></span>
    <span class="text-slate-200 text-lg">danang<span class="text-ace-blue-200">ace</span></span>
  </div>
</template>