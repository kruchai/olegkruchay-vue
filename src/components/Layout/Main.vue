<template>
  <main class="v-main">
    <!--  Cell 1  -->
    <div class="v-cell first">
      <div class="hello">
        {{ greeting }} &#x1F44B;
      </div>
      <div class="who-i-am">
        {{ message }}
      </div>

      <div class="cv-container">
        <div class="download-cv">
          <a :href="cvLinkUri" class="cta">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">
              {{ cvLinkTitle }}
            </span>
          </a>
        </div>
        <div class="message-me">
          <a :href="contactLinkUri" class="cta">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">{{ contactLinkTitle }}</span>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Main",
  props: {
    greeting: String,
    message: String,
    cvLinkUri: String,
    cvLinkTitle: String,
    contactLinkUri: String,
    contactLinkTitle: String
  }
};
</script>
