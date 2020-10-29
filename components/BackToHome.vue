<template>
  <div class="back-to-home">
    <NuxtLink exact-active-class="ok-link active" class="ok-link" to="/">{{
      '🏡 back to home'
    }}</NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'BackToHome',
}
</script>
