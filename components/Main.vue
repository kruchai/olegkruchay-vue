<template>
  <main class="v-main">
    <!--  Cell 1  -->
    <div class="v-cell first">
      <div class="v-title">{{ main.greeting }} &#x1F44B;</div>
      <div class="v-heading">
        {{ main.message }}
      </div>

      <div class="cv-container">
        <div class="download-cv">
          <a :href="main.cvLink.cvLinkUri" class="v-cta">
            <span class="circle">
              <span class="icon-wrapper">
                <span class="icon download"></span>
              </span>
              <span class="button-text">
                {{ main.cvLink.cvLinkTitle }}
              </span>
            </span>
          </a>
        </div>
        <div class="message-me">
          <NuxtLink exact-active-class="v-link-active" to="/contacts" class="v-cta v-link">
            <span class="circle">
              <span class="icon-wrapper">
                <span class="icon letter"></span>
              </span>
              <span class="button-text">
                {{ main.contactLink.contactLinkTitle }}
              </span>
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { main } from '~/static/data/data.json'

export default {
  name: 'Main',
  data() {
    return {
      main,
    }
  },
}
</script>
