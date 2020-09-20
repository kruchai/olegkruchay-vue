<template>
  <footer class="v-footer">
    <!--  Cell 1  -->
    <div class="v-cell first">
      &copy; {{ footer.copyright }} {{ new Date().getFullYear() }}
    </div>

    <!--  Cell 2  -->
    <div class="v-cell second">
      <div>Build on <a href="#">NuxtJS</a>.</div>
      <div>Hosted on <a href="#">Netlify</a>.</div>
      <div>The code is open-source on <a href="#">Github</a>.</div>
    </div>

    <!--  Cell 3  -->
    <div class="v-cell third">
      <div class="social-networks">
        <img alt="Oleg Kruchay logo" src="../assets/images/insta.png" />
        <img alt="Oleg Kruchay logo" src="../assets/images/linkedin.png" />
        <img alt="Oleg Kruchay logo" src="../assets/images/facebook.png" />
        <img alt="Oleg Kruchay logo" src="../assets/images/drupal.png" />
        <img alt="Oleg Kruchay logo" src="../assets/images/codepen.png" />
      </div>
    </div>

    <!--  Absolute section  -->
    <div class="brand-name">
      <img alt="Oleg Kruchay logo" src="../assets/images/footer-logo-cropped.png" />
    </div>
  </footer>
</template>

<script>
import { footer } from '~/static/data/data.json'

export default {
  name: 'Footer',
  data() {
    return {
      footer,
    }
  },
}
</script>
