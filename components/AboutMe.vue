<template>
  <main class="v-section--main">
    <div class="v-cell first">
      <h1 class="v-heading">{{ aboutMe.title }}</h1>
      <div class="about--greeting">{{ aboutMe.greeting }}</div>
      <div class="about--pre">{{ aboutMe.preStory }}</div>
      <div class="about--story">{{ aboutMe.story }}</div>
      <BackToHome />
    </div>
  </main>
</template>

<script>
import {aboutMe} from '@/static/data/data.json'
import BackToHome from '@/components/BackToHome'

export default {
  name: 'AboutMe',
  components: {BackToHome},
  data() {
    return {
      aboutMe,
    }
  },
}
</script>
