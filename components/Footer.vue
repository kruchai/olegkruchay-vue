<template>
  <footer class="ok-footer">
    <!--  Column 1  -->
    <div class="ok-column first text-center">
      <span>{{ site.prefix + site.version }}</span>
      <span>{{ site.status }}</span>
    </div>

    <!--  Column 2  -->
    <div class="ok-column second">&copy; {{ footer.copyright }} {{ new Date().getFullYear() }}</div>

    <!--  Column 3  -->
    <div class="ok-column third">
      <div class="ok-description">
        <div v-for="(description, i) in footer.descriptions" :key="i" class="footer-description">
          {{ description.text }}
          <fa v-if="description.faIcon" :icon="description.faIcon" />
          <a :href="description.link.uri" class="ok-link">{{ description.link.title }}</a>
        </div>
      </div>
      <div class="license">
        <span class="license-text">{{ license.description }}</span>
        <a :href="license.link.uri" rel="license" class="ok-link license-link">
          <span class="license-title">{{ license.link.title }}</span>
          <span class="license-icons">
            <fa v-for="(icon, i) in license.link.icons" :key="i" :icon="icon.faIcon" />
          </span>
        </a>
      </div>
    </div>

    <!--  Column 4  -->
    <div class="ok-column fourth">
      <div class="social-networks">
        <a
          v-for="(network, i) in footer.socialNetworks"
          :key="i"
          :href="network.uri"
          :class="'ok-link social ' + network.class"
        >
          <fa :icon="network.faIcon" />
        </a>
      </div>
    </div>

    <!--  Absolute section  -->
    <div class="brand-name">
      <FooterLogo />
    </div>
  </footer>
</template>

<script>
import { license } from 'olegkruchay-sync/static/data/license.json'
import { footer } from 'olegkruchay-sync/static/data/footer.json'
import FooterLogo from 'olegkruchay-sync/assets/images/logo-full.svg?inline'
import { site } from '~/static/data/data.json'

export default {
  name: 'Footer',
  components: { FooterLogo },
  data() {
    return {
      site,
      license,
      footer,
    }
  },
}
</script>
