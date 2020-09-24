<template>
  <ErrorComponent :statusCode="error.statusCode" />
</template>

<script>
import ErrorComponent from '@/components/ErrorComponent'

export default {
  components: {ErrorComponent},
  props: ['error'],
  layout: 'default'
}
</script>