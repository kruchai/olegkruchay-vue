<template>
  <main class="ok-page page--contacts">
    <Contacts />
  </main>
</template>

<script>
import Contacts from '@/components/Contacts'
import { seo } from '@/static/data/seo'

export default {
  components: { Contacts },
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
