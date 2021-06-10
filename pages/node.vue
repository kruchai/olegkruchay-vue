<template>
  <ErrorComponent
    :status-code="errors.node.code"
    :heading="errors.node.heading"
    :description="errors.node.description"
  />
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
