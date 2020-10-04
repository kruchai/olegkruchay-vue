<template>
  <main class="v-section--main">
    <div class="v-cell first">
      <h1 class="v-heading">{{ 'Contacts' }}</h1>
      <div class="contacts-wrapper email">
        <h2>
          <span>{{ 'Email me to ' }}</span>
          <a class="v-link" :href="'email:' + contacts.email">{{ contacts.email }}</a>
          <span>{{ ' Copy to clipboard functionality' }}</span>
        </h2>
      </div>
      <div class="contacts-wrapper telegram">
        <h3>
          <a class="v-link" :href="'https://t.me/' + contacts.id">{{ '🔗 Message me in telegram' }}</a>
        </h3>
      </div>
      <div class="contacts-wrapper social-networks">
        <h3>
          <a class="v-link" :href="'https://linkedin.com/in/' + contacts.id">{{ '🔗 Hire me in LinkedIn' }}</a>
        </h3>
        <h3>
          <a class="v-link" :href="'https://facebook.com/' + contacts.id">{{ '🔗 Follow me in Facebook' }}</a>
        </h3>
        <h3>
          <a class="v-link" :href="'https://instagram.com/' + contacts.id">{{ '🔗 Watch my stories at Insta' }}</a>
        </h3>
      </div>
      <h4>
        <span>{{ '🧐 My Id all across the social networks is' }}</span>
        <code>{{ contacts.id }}</code>
      </h4>
      <BackToHome />
    </div>
  </main>
</template>

<script>
import {contacts} from '@/static/data/data.json'
import BackToHome from '@/components/BackToHome'

export default {
  name: 'Contacts',
  components: {BackToHome},
  data() {
    return {
      contacts,
    }
  },
}
</script>
