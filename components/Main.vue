<template>
  <main class="v-main">
    <!--  Cell 1  -->
    <div class="v-cell first">
      <div class="hello">{{ main.greeting }} &#x1F44B;</div>
      <div class="who-i-am">
        {{ main.message }}
      </div>

      <div class="cv-container">
        <div class="download-cv">
          <a :href="main.cvLink.cvLinkUri" class="cta">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">
              {{ main.cvLink.cvLinkTitle }}
            </span>
          </a>
        </div>
        <div class="message-me">
          <a :href="main.contactLink.contactLinkUri" class="cta">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">{{
              main.contactLink.contactLinkTitle
            }}</span>
          </a>
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
