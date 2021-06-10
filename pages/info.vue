<template>
  <h1>{{ seo.data.title }}</h1>
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
      title: seo.data.title,
    }
  },
  middleware({ redirect }) {
    return redirect(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ3ERZTpDKbzjUqtBZIeUwkg665EwVvuk9DoE0AEdN8fFQEvHCmdm-M0e6Yo8rrj6gjKGqYbRYIPaNn/pubhtml'
    )
  },
}
</script>
