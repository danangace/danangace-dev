<script setup>
import NavLogo from './NavLogo.vue';
import { onMounted, onUnmounted, ref } from 'vue'

const isUserScroll = ref(false)

const navLink = [
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'W.I.L', href: '/what-i-learned' },
  { label: 'Skills & Tools', href: '/work/skills-and-tools' },
  { label: 'Experience', href: '/work/experience' },
  { label: 'Studio', href: '/work/studio' },
  { label: 'Contact', href: '/work/contact' }
]

function handleScroll () {
  isUserScroll.value = window.scrollY !== 0
}

onMounted(() => {
  document.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  document.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header :class="[
      'fixed left-0 top-0 right-0',
      isUserScroll && 'z-50'
    ]"
  >
    <div
      :class="[
        'flex justify-start items-center',
        'px-8 h-20 gap-x-5',
        'bg-ace-blue-100 text-slate-200',
        isUserScroll && 'inset-0 border-b border-gray-600 backdrop-blur',
        isUserScroll && 'dark:bg-slate-900/80'
      ]"
    >
      <NavLogo />
      <nav>
        <ul
          :class="[
            'flex justify-start gap-x-5'
          ]"
        >
          <RouterLink
            v-for="(nav, navIndex) in navLink"
            class="text-sm text-ace-blue-150 hover:text-ace-blue-400"
            :key="`nav-${navIndex}`"
            :to="nav.href">
            {{ nav.label }}
          </RouterLink>
        </ul>
      </nav>
    </div>
  </header>
</template>