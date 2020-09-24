<template>
  <div class="back-to-home">
    <NuxtLink exact-active-class="v-link active" class="v-link hello" to="/">{{ '🏡 Back to Home page' }}</NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'BackToHome',
}
</script>