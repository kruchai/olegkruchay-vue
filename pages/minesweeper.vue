<template>
  <h1>{{ seo.minesweeper.title }}</h1>
</template>

<script>
import { seo } from '~/static/data/seo'

export default {
  layout: 'default',
  data() {
    return {
      seo,
    }
  },
  head() {
    return {
      title: seo.minesweeper.title,
    }
  },
  middleware({ redirect }) {
    return redirect('https://hub.olegkruchay.com/minesweeper-vue')
  },
}
</script>
