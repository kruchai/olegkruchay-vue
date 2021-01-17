<template>
  <div>
    <span :class="$colorMode.preference === 'dark' ? ' ok-show' : ' ok-hide'">
      <span class="ok-mode-switcher" @click="$colorMode.preference = 'light'">🌝</span>
    </span>
    <span :class="$colorMode.preference === 'light' ? ' ok-show' : ' ok-hide'">
      <span class="ok-mode-switcher" @click="$colorMode.preference = 'dark'">🌚</span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'ColorModeSwitcher',
}
</script>
