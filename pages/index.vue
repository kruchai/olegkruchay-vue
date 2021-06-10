<template>
  <main class="ok-page page--home">
    <Main :greeting="content.home.greeting" :message="content.home.message" />
  </main>
</template>

<script>
import Vue from 'vue'
import Main from '~/components/Main.vue'
import { seo } from '~/static/data/seo'

export default Vue.extend({
  components: { Main },
  async asyncData({ $axios }) {
    const content = await $axios.$get(
      'https://script.google.com/macros/s/AKfycbw_Wn7WgRVr7NtGe58b_Dr1j_pciXlVikYfnpfo0PmUwxXegyLSRknglf6Q_Z-I3QMxEA/exec'
    )
    return { content }
  },
  data() {
    return {
      seo,
    }
  },
  head() {
    return {
      title: seo.home.title,
    }
  },
  transition: {
    name: 'intro',
  },
})
</script>
