<template>
  <footer class="v-footer">
    <!--  Cell 1  -->
    <div class="v-cell first">&copy; {{ copyright }} {{ new Date().getFullYear() }}</div>

    <!--  Cell 2  -->
    <div class="v-cell second">
      <div>Build on <a href="#">Vue</a>.</div>
      <div>Hosted on <a href="#">Netlify</a>.</div>
      <div>The code is open-source on <a href="#">Github</a>.</div>
    </div>

    <!--  Cell 3  -->
    <div class="v-cell third">
      <div class="social-networks">
        <img alt="Oleg Kruchay logo" src="../../assets/insta.png" />
        <img alt="Oleg Kruchay logo" src="../../assets/linkedin.png" />
        <img alt="Oleg Kruchay logo" src="../../assets/facebook.png" />
        <img alt="Oleg Kruchay logo" src="../../assets/drupal.png" />
        <img alt="Oleg Kruchay logo" src="../../assets/codepen.png" />
      </div>
    </div>

    <!--  Absolute section  -->
    <div class="brand-name">
      <img alt="Oleg Kruchay logo" src="../../assets/footer-logo-cropped.png" />
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    copyright: String
  }
};
</script>
