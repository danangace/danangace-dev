<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

function backToHomepage () {
  router.push('/')
}
</script>

<template>
  <div role="button" @click="backToHomepage" class="font-bold flex items-center">
    <span
      :class="[
        'text-white text-xs font-bold bg-ace-blue-200',
        'px-1 py-1',
        'rounded-lg mr-1'
      ]">
      &lt;/>
    </span>
    <span class="text-slate-200 text-lg">
      danang<span class="text-ace-blue-200">ace</span>
    </span>
  </div>
</template>