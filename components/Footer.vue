<template>
  <footer class="v-footer">
    <!--  Cell 4  -->
    <div class="v-cell fourth text-center">
      <span>{{ 'v0.6' }}</span>
      <span>
        {{ 'βeta' }}
      </span>
    </div>

    <!--  Cell 1  -->
    <div class="v-cell first">
      &copy; {{ footer.copyright }} {{ new Date().getFullYear() }}
    </div>

    <!--  Cell 2  -->
    <div class="v-cell second">
      <div class="footer-description">{{ 'Build on' }} <a href="#" class="v-link">{{ 'NuxtJS' }}</a>.</div>
      <div class="footer-description">{{ 'Hosted on' }} <a href="#" class="v-link">{{ 'Netlify' }}</a>.</div>
      <div class="footer-description">{{ 'The code is open - source on' }} <a href="#" class="v-link">{{ 'Github' }}</a>.</div>
    </div>

    <!--  Cell 3  -->
    <div class="v-cell third">
      <div class="social-networks">
        <a href="#" class="v-link social">
          <img alt="instagram logo" src="@/assets/images/insta.png"/>
        </a>
        <a href="#" class="v-link social">
          <img alt="linkedin logo" src="@/assets/images/linkedin.png"/>
        </a>
        <a href="#" class="v-link social">
          <img alt="facebook logo" src="@/assets/images/facebook.png"/>
        </a>
        <a href="#" class="v-link social">
          <img alt="drupal logo" src="@/assets/images/drupal.png"/>
        </a>
        <a href="#" class="v-link social">
          <img alt="codepen logo" src="@/assets/images/codepen.png"/>
        </a>

      </div>
    </div>

    <!--  Absolute section  -->
    <div class="brand-name">
      <img alt="Oleg Kruchay logo" src="@/assets/images/footer-logo-cropped.png"/>
    </div>
  </footer>
</template>

<script>
import {footer} from '@/static/data/data.json'

export default {
  name: 'Footer',
  data() {
    return {
      footer,
    }
  },
}
</script>
