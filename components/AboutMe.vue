<template>
  <div class="ok-section--main extra-section">
    <div class="ok-column first">
      <h3 v-if="title" class="ok-title section">{{ title }}</h3>
      <div class="ok-container col-2">
        <div class="ok-column first">
          <figure class="picture">
            <picture>
              <source
                :data-srcset="require(`~/assets/images/${aboutMe.portraitPhoto.image}`) + '?webp'"
                type="image/webp"
              />
              <source
                :data-srcset="require(`~/assets/images/${aboutMe.portraitPhoto.image}`)"
                type="image/jpeg"
              />
              <img
                :data-src="require(`~/assets/images/ok-placeholder.jpg`)"
                :src="require(`~/assets/images/ok-placeholder.jpg`)"
                class="lazyload"
                :alt="aboutMe.portraitPhoto.alt"
              />
            </picture>
          </figure>
        </div>
        <div class="ok-column second">
          <h1 class="about--pre ok-title--bold-sm">
            <span v-if="greeting">{{ greeting }}</span>
            <a
              v-if="currectCompanyUri && currectCompanyName"
              class="ok-link"
              :href="currectCompanyUri"
              >{{ currectCompanyName }}</a
            >
            <span v-if="weather && techStack">{{
              'on their ' + techStack + ' projects in ' + weather
            }}</span>
            <span v-if="location">{{ location }}</span>
          </h1>
          <div v-if="story" class="about--story ok-text">{{ story }}</div>
        </div>
      </div>

      <h2 v-if="skillsTitle" class="ok-title section">{{ skillsTitle }}</h2>
      <div class="ok-box wrapper-social">
        <span v-for="(skill, i) in aboutMe.pofessionalSkills" :key="i" class="tooltip">
          <fa :class="'social ' + skill.class" :icon="skill.faIcon" />
          <span class="tooltip--text">
            <code>{{ skill.title }}</code>
          </span>
        </span>
      </div>

      <h2 v-if="careerTitle" class="ok-title section">{{ careerTitle }}</h2>
      <div class="ok-box">
        <div class="career--items">
          <div v-for="(item, i) in career" :key="i" class="career--item">
            <span class="ok-column first">
              <span>{{ item.startDate.month + ' ' + item.startDate.year }}</span>
              <span>{{ ' – ' }}</span>
              <span v-if="item.endDate.present">{{ 'Present' }}</span>
              <span v-else>{{ item.endDate.month + ' ' + item.endDate.year }}</span>
            </span>
            <span class="ok-column second"
              >{{ item.position }} {{ 'at' }}
              <a class="ok-link" :href="item.company.webSite">{{ item.company.name }}</a>
            </span>
            <span class="ok-column third">{{ item.location }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { aboutMe } from '~/static/data/aboutMe.json'
import { career } from '~/static/data/career.json'

export default {
  name: 'AboutMe',
  props: {
    title: {
      type: String,
      required: true,
    },
    skillsTitle: {
      type: String,
      required: true,
    },
    careerTitle: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    weather: {
      type: String,
      required: true,
    },
    greeting: {
      type: String,
      required: true,
    },
    currentCompanyUri: {
      type: String,
      required: true,
    },
    currentCompanyName: {
      type: String,
      required: true,
    },
    techStack: {
      type: String,
      required: true,
    },
    story: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      aboutMe,
      career,
    }
  },
}
</script>
