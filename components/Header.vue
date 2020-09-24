<template>
  <header class="v-header">
    <!--  Cell 1  -->
    <div class="v-cell first">
      <NuxtLink exact-active-class="v-link active" class="v-link about-me" :to="header.contactsLink.contactsLinkUri">
        <span class="v-hide mobile">{{ header.contactsLink.contactsLinkTitle }}</span>
        <span class="v-show mobile">{{ '📨' }}</span>
      </NuxtLink>
    </div>

    <!--  Cell 2  -->
    <div class="v-cell second">
      <NuxtLink to="/" class="logo v-link">
        <span>o</span>
        <span>k</span>
      </NuxtLink>
    </div>

    <!--  Cell 3  -->
    <div class="v-cell third">
      <NuxtLink exact-active-class="v-link active" class="v-link about-me" :to="header.aboutLink.aboutLinkUri">
        <span class="v-hide mobile">{{ header.aboutLink.aboutLinkTitle }}</span>
        <span class="v-show mobile">{{ 'i' }}</span>
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
