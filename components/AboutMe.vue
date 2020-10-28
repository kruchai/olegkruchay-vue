<template>
  <main class="ok-section--main extra-section page--about">
    <div class="ok-column first">
      <h3 class="ok-title section">{{ aboutMe.title }}</h3>
      <div class="ok-container col-2">
        <div class="ok-column first">
          <figure class="picture">
            <picture>
              <source
                :data-srcset="require(`@/assets/images/${aboutMe.portraitPhoto.image}`) + '?webp'"
                type="image/webp"
              />
              <source
                :data-srcset="require(`@/assets/images/${aboutMe.portraitPhoto.image}`)"
                type="image/jpeg"
              />
              <img
                :data-src="require(`@/assets/images/ok-placeholder.jpg`)"
                :src="require(`@/assets/images/ok-placeholder.jpg`)"
                class="lazyload"
                :alt="aboutMe.portraitPhoto.alt"
              />
            </picture>
          </figure>
        </div>
        <div class="ok-column second">
          <h1 class="about--pre ok-title--bold-sm">
            <span class="">{{ aboutMe.preStory.greeting }}</span>
            <a class="ok-link" :href="aboutMe.preStory.currectCompany.uri">{{
              aboutMe.preStory.currectCompany.name
            }}</a>
            <span>{{
              'on their ' + aboutMe.preStory.currectCompany.techStack + ' projects in sunny'
            }}</span>
            <span>{{ aboutMe.location }}</span>
          </h1>
          <div class="about--story ok-text">{{ aboutMe.story }}</div>
        </div>
      </div>

      <h2 class="ok-title section">{{ 'Professional Skills' }}</h2>
      <div class="ok-box wrapper-social">
        <span class="tooltip" v-for="(skill, i) in aboutMe.pofessionalSkills" :key="i">
          <fa :class="'social ' + skill.class" :icon="skill.faIcon" />
          <span class="tooltip--text">
            <code>{{ skill.title }}</code>
          </span>
        </span>
      </div>

      <h2 class="ok-title section">{{ 'Career' }}</h2>
      <div class="ok-box">
        <div class="career--items">
          <div class="career--item" v-for="(item, i) in career" :key="i">
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
  </main>
</template>

<script>
import { aboutMe } from '@/static/data/data.json'
import { career } from '@/static/data/career.json'
import BackToHome from '@/components/BackToHome'

export default {
  name: 'AboutMe',
  components: { BackToHome },
  data() {
    return {
      aboutMe,
      career,
    }
  },
}
</script>
