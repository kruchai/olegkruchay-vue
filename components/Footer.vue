<template>
  <footer class="ok-footer">
    <!--  Cell 4  -->
    <div class="ok-column fourth text-center">
      <span>{{ site.prefix + site.version }}</span>
      <span>{{ site.status }}</span>
    </div>

    <!--  Cell 1  -->
    <div class="ok-column first">
      &copy; {{ footer.copyright }} {{ new Date().getFullYear() }}
    </div>

    <!--  Cell 2  -->
    <div class="ok-column second">
      <div class="footer-description">{{ 'Build on' }} <a href="#" class="ok-link">{{ 'NuxtJS' }}</a>.</div>
      <div class="footer-description">{{ 'Made with' }} <fa :icon="['far', 'heart']" /> <a href="./cv.pdf" class="ok-link">{{ 'by myself' }}</a>.</div>
      <div class="footer-description">{{ 'Hosted on' }} <a href="#" class="ok-link">{{ 'Netlify' }}</a>.</div>
    </div>

    <!--  Cell 3  -->
    <div class="ok-column third">
      <div class="social-networks">
        <a href="#" class="ok-link social instagram">
          <fa :icon="['fab', 'instagram']" />
        </a>
        <a href="#" class="ok-link social linkedin">
          <fa :icon="['fab', 'linkedin']" />
        </a>
        <a href="#" class="ok-link social facebook">
          <fa :icon="['fab', 'facebook']" />
        </a>
        <a href="#" class="ok-link social drupal">
          <fa :icon="['fab', 'drupal']" />
        </a>
        <a href="#" class="ok-link social codepen">
          <fa :icon="['fab', 'codepen']" />
        </a>
        <a href="#" class="ok-link social telegram">
          <fa :icon="['fab', 'telegram']" />
        </a>
        <a href="#" class="ok-link social skype">
          <fa :icon="['fab', 'skype']" />
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
import {site, footer} from '@/static/data/data.json'

export default {
  name: 'Footer',
  data() {
    return {
      site,
      footer
    }
  },
}
</script>
