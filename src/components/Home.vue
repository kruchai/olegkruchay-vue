<template>
  <div class="container">
    <Header
      :status="header.status"
      :aboutUri="header.aboutLink.aboutLinkUri"
      :aboutTitle="header.aboutLink.aboutLinkTitle"
    />
    <Main
      :greeting="main.greeting"
      :message="main.message"
      :cvLinkUri="main.cvLink.cvLinkUri"
      :cvLinkTitle="main.cvLink.cvLinkTitle"
      :contactLinkUri="main.contactLink.contactLinkUri"
      :contactLinkTitle="main.contactLink.contactLinkTitle"
    />
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
        aboutLink: {
          aboutLinkUri: "#",
          aboutLinkTitle: "about me"
        }
      },
      main: {
        greeting: 'Hey, it\'s Oleg',
        message: 'I\'m a front-end web developer',
        cvLink: {
          cvLinkUri: '#',
          cvLinkTitle: 'Download my cv'
        },
        contactLink: {
          contactLinkUri: '#',
          contactLinkTitle: 'Contact me'
        }
      },
      footer: {
        copyright: 'olegkruchay.com'
      }
    };
  }
};
</script>
