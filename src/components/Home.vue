<template>
  <div class="container">
    <Header
      :status="header.status"
      :uri="header.link.uri"
      :title="header.link.title"
    />
    <Main :msg="main.msg" />
    <Footer :copyright="footer.copyright" />
  </div>
</template>

<script>
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import Footer from "./Layout/Footer";

export default {
  name: "Home",
  components: { Footer, Header, Main },
  data() {
    return {
      header: {
        status: "βeta",
        link: {
          uri: "#",
          title: "about me"
        }
      },
      main: {
        greeting: "Hey, it's Oleg 👋",
        message: "I'm a front-end web developer"
      },
      footer: {
        copyright: "olegkruchay.com 2020"
      }
    };
  }
};
</script>
