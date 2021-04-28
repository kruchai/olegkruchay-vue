<template>
  <div class="ok-main">
    <!--  Column 1  -->
    <div class="ok-column first">
      <div class="ok-title">{{ main.greeting }}</div>
      <div class="ok-heading">
        {{ main.message }}
      </div>
      <div class="ok-container col-2">
        <div class="download-cv">
          <a :href="main.cvLink.cvLinkUri" class="ok-cta">
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
          <NuxtLink exact-active-class="ok-link-active" to="/contacts" class="ok-cta">
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
    <!--  Column 2  -->
    <div class="ok-column second">
      <AnniversarySvg class="ok-anniversary" />
    </div>
  </div>
</template>

<script>
import { main } from '~/static/data/data.json'
import AnniversarySvg from '~/assets/images/five-years-anniversary.svg?inline'

export default {
  name: 'Main',
  components: { AnniversarySvg },
  data() {
    return {
      main,
    }
  },
}
</script>
