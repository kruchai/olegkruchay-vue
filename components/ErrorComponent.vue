<template>
  <main class="v-section--main">
    <div class="v-cell first">
      <div v-if="statusCode === 404">
        <span class="hello">{{ errors.notFound.heading }} 🗿</span>
        <h1>
          <span class="who-i-am">{{ errors.notFound.description }}</span>
        </h1>
      </div>
      <div v-else>
        <span class="hello">{{ heading }} 🐣</span>
        <h1>
          <span class="who-i-am">{{ description }}</span>
        </h1>
      </div>
      <BackToHome />
    </div>
  </main>
</template>

<script>
import {errors} from '@/static/data/data.json'
import BackToHome from '@/components/BackToHome'

export default {
  name: 'ErrorComponent',
  components: {BackToHome},
  props: ['statusCode', 'heading', 'description'],
  data() {
    return {
      errors,
    }
  },
}
</script>