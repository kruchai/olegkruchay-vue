<template>
  <main class="ok-page page--error">
    <ErrorComponent
      :statusCode="errors.accessDenied.code"
      :heading="errors.accessDenied.heading"
      :description="errors.accessDenied.description"
    />
  </main>
</template>

<script>
import ErrorComponent from '~/components/ErrorComponent'
import { errors } from '~/static/data/errors.json'

export default {
  components: { ErrorComponent },
  layout: 'default',
  data() {
    return {
      errors,
    }
  },
}
</script>
