<template>
  <main class="ok-page page--contacts">
    <Contacts
      :title="content.contacts.title"
      :mail="content.contacts.mail"
      :msg-section-title="content.contacts.msgSectionTitle"
    />
  </main>
</template>

<script>
import Contacts from '@/components/Contacts'
import { seo } from '@/static/data/seo'

export default {
  components: { Contacts },
  async asyncData({ $axios }) {
    const content = await $axios.$get(
      'https://script.google.com/macros/s/AKfycbw_Wn7WgRVr7NtGe58b_Dr1j_pciXlVikYfnpfo0PmUwxXegyLSRknglf6Q_Z-I3QMxEA/exec'
    )
    return { content }
  },
  layout: 'default',
  data() {
    return {
      seo,
    }
  },
  head() {
    return {
      title: seo.contacts.title,
    }
  },
  transition: {
    name: 'intro',
  },
}
</script>
