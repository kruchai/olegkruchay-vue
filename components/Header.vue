<template>
  <header class="ok-header">
    <!--  Column 1  -->
    <div class="ok-column first">
      <NuxtLink exact-active-class="ok-link active" class="ok-link ok-link-header" :to="header.contactsLink.contactsLinkUri">
        <span class="ok-hide mobile">{{ header.contactsLink.contactsLinkTitle }}</span>
        <span class="ok-show mobile">{{ '📨' }}</span>
      </NuxtLink>
    </div>

    <!--  Column 2  -->
    <div class="ok-column second">
      <NuxtLink to="/" class="logo ok-link">
        <span>o</span>
        <span>k</span>
      </NuxtLink>
    </div>

    <!--  Column 3  -->
    <div class="ok-column third">
      <NuxtLink exact-active-class="ok-link active" class="ok-link ok-link-header" :to="header.aboutLink.aboutLinkUri">
        <span class="ok-hide mobile">{{ header.aboutLink.aboutLinkTitle }}</span>
        <span class="ok-show mobile">{{ 'i' }}</span>
      </NuxtLink>
    </div>
  </header>
</template>

<script>
import { header } from '~/static/data/data.json'

export default {
  name: 'Header',
  data() {
    return {
      header,
    }
  },
}
</script>
