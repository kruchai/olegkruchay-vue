<template>
  <div class="ok-section--main">
    <div class="ok-column first">
      <div v-if="statusCode === 404">
        <span class="ok-title">{{ errors.notFound.heading }} 🗿</span>
        <h1>
          <span class="ok-heading">{{ errors.notFound.description }}</span>
        </h1>
      </div>
      <div v-else>
        <span class="ok-title">{{ heading }} 🐣</span>
        <h1>
          <span class="ok-heading">{{ description }}</span>
        </h1>
      </div>
      <BackToHome />
    </div>
  </div>
</template>

<script>
import { errors } from '~/static/data/errors.json'
import { seo } from '~/static/data/seo'
import BackToHome from '~/components/BackToHome'

export default {
  name: 'ErrorComponent',
  components: { BackToHome },
  props: {
    statusCode: {
      type: Number,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      errors,
      seo,
    }
  },
  head() {
    return {
      title: seo.error.title + ' ' + this.statusCode,
    }
  },
}
</script>
