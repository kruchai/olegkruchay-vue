<template>
  <h1>{{ seo.api.title }}</h1>
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
      title: seo.api.title,
    }
  },
  middleware({ redirect }) {
    return redirect(
      'https://script.google.com/macros/s/AKfycbw_Wn7WgRVr7NtGe58b_Dr1j_pciXlVikYfnpfo0PmUwxXegyLSRknglf6Q_Z-I3QMxEA/exec'
    )
  },
}
</script>
