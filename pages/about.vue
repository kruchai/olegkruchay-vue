<template>
  <main class="ok-page page--about">
    <AboutMe />
  </main>
</template>

<script>
import AboutMe from '@/components/AboutMe.vue'
import { seo } from '@/static/data/seo'

export default {
  components: { AboutMe },
  layout: 'default',
  data() {
    return {
      seo,
    }
  },
  head() {
    return {
      title: seo.aboutMe.title,
    }
  },
  transition: {
    name: 'intro',
  },
}
</script>
