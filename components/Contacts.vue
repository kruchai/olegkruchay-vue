<template>
  <main class="ok-section--main page--contacts">
    <div class="ok-column first">
      <h1 class="ok-title section">{{ contacts.title }}</h1>
      <div class="ok-box wrapper-email">
        <div
          class="tooltip email"
          v-clipboard:copy="contacts.mail"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
        >
          {{ contacts.mail }}
          <span class="tooltip--text" v-if="copied === true">
            <code>Copied</code>
          </span>
          <span class="tooltip--text" v-if="copied !== true">
            <code>Copy to clipboard</code>
          </span>
        </div>
      </div>
      <h2 class="ok-title section">{{ contacts.msgSectionTitle }}</h2>
      <div class="ok-box wrapper-social bg">
        <a
          v-for="(msg, i) in contacts.messengers"
          :key="i"
          :href="msg.uri"
          :class="'v-link social tooltip ' + msg.class"
        >
          <fa :icon="msg.faIcon" />
          <span class="tooltip--text">
            <code>{{ msg.title }}</code>
          </span>
        </a>
      </div>
    </div>
  </main>
</template>

<script>
import { contacts } from '@/static/data/data.json'

export default {
  name: 'Contacts',
  data() {
    return {
      contacts,
      copied: null,
    }
  },
  methods: {
    onCopy: function () {
      this.copied = true
    },
    onError: function () {
      alert('Failed to copy')
    },
  },
}
</script>
