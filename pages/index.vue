<template>
  <Main />
</template>

<script>
import Vue from 'vue'
import Main from '@/components/Main.vue'
import { seo } from '@/static/data/seo'

export default Vue.extend({
  components: { Main },
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
})
</script>
