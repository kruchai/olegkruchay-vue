<template>
  <main class="ok-page page--about">
    <AboutMe
      :title="content.about.title"
      :skills-title="content.about.skillsTitle"
      :career-title="content.about.careerTitle"
      :location="content.about.location"
      :weather="content.about.weather"
      :greeting="content.about.greeting"
      :current-company-uri="content.about.currentCompanyUri"
      :current-company-name="content.about.currentCompanyName"
      :tech-stack="content.about.techStack"
      :story="content.about.story"
    />
  </main>
</template>

<script>
import AboutMe from '@/components/AboutMe.vue'
import { seo } from '@/static/data/seo'

export default {
  components: { AboutMe },
  async asyncData({ $axios }) {
    const content = await $axios.$get(
      'https://script.google.com/macros/s/AKfycbw_Wn7WgRVr7NtGe58b_Dr1j_pciXlVikYfnpfo0PmUwxXegyLSRknglf6Q_Z-I3QMxEA/exec'
    )
    return { content }
  },
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
