<template>
  <footer class="ok-footer">
    <!--  Column 1  -->
    <div class="ok-column first text-center">
      <span>{{ site.prefix + site.version }}</span>
      <span>{{ site.status }}</span>
    </div>

    <!--  Column 2  -->
    <div class="ok-column second">
      &copy; {{ footer.copyright }} {{ new Date().getFullYear() }}
    </div>

    <!--  Column 3  -->
    <div class="ok-column third">
      <div
        class="footer-description"
        v-for="(description, i) in footer.descriptions"
        :key="i"
      >
        {{ description.text }}
        <fa v-if="description.faIcon" :icon="description.faIcon" />
        <a :href="description.link.uri" class="ok-link">{{
          description.link.title
        }}</a>
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
      <img
        :alt="footer.brandLogo.alt"
        :src="require(`@/assets/images/${footer.brandLogo.image}`)"
      />
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
      footer,
    };
  },
};
</script>
