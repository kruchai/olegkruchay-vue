<template>
  <div class="container">
    <AnimatedGrid />
    <Header />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import AnimatedGrid from '../components/AnimatedGrid'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  components: { AnimatedGrid, Footer, Header },
}
</script>
