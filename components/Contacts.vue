<template>
  <div class="ok-section--main">
    <div class="ok-column first">
      <h1 v-if="title" class="ok-title section">{{ title }}</h1>
      <div class="ok-box wrapper-email">
        <div
          v-if="mail"
          v-clipboard:copy="contacts.mail"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
          class="tooltip email"
        >
          {{ mail }}
          <span v-if="copied === true" class="tooltip--text">
            <code>{{ 'Copied' }}</code>
          </span>
          <span v-if="copied !== true" class="tooltip--text">
            <code>{{ 'Copy to clipboard' }}</code>
          </span>
        </div>
      </div>
      <h2 v-if="msgSectionTitle" class="ok-title section">{{ msgSectionTitle }}</h2>
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
  </div>
</template>

<script>
import { contacts } from '~/static/data/contacts.json'

export default {
  name: 'Contacts',
  props: {
    title: {
      type: String,
      required: true,
    },
    mail: {
      type: String,
      required: true,
    },
    msgSectionTitle: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      contacts,
      copied: null,
    }
  },
  methods: {
    onCopy() {
      this.copied = true
    },
    onError() {
      alert('Failed to copy')
    },
  },
}
</script>
