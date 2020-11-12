<template>
  <AboutMe />
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
}
</script>
