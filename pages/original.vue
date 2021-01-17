<template>
  <h1>{{ seo.original.title }}</h1>
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
      title: seo.original.title,
    }
  },
  middleware({ redirect }) {
    return redirect('https://hub.olegkruchay.com/ok')
  },
}
</script>
