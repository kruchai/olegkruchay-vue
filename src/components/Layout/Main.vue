<template>
  <main class="main">
    <!--  Cell 1  -->
    <div class="cell first">
      <div class="hello">
        {{ greeting }}
      </div>
      <div class="who-i-am">
        {{ message }}
      </div>

      <div class="cv-container">
        <div class="download-cv">
          <button class="cta">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">
              Download my CV
            </span>
          </button>
        </div>
        <div class="message-me">
          <button class="cta">
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">Message me</span>
          </button>
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
    message: String
  }
};
</script>
