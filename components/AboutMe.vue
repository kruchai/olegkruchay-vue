<template>
  <main class="v-section--main extra-section page--about">

    <div class="v-cell first">
      <h3 class="v-title section">{{ aboutMe.title }}</h3>

      <div class="v-container col-2">
        <div class="v-cell first">
          <img src="@/assets/images/ok.jpg" alt="Oleg">
        </div>
        <div class="v-cell second">
          <h1 class="about--pre v-title--bold-sm">
            <span class="">{{ aboutMe.preStory.greeting }}</span>
            <a class="v-link" :href="aboutMe.preStory.currectCompany.uri">{{ aboutMe.preStory.currectCompany.name }}</a>
            <span>{{ "on their " + aboutMe.preStory.currectCompany.techStack + " projects in sunny" }}</span>
            <span>{{ aboutMe.location }}</span>
          </h1>
          <div class="about--story v-text">{{ aboutMe.story }}</div>
        </div>
      </div>

      <h2 class="v-title section">{{ "Professional Skills" }}</h2>

      <div class="v-box wrapper-social">
        <span class="tooltip" v-for="(skill, i) in aboutMe.pofessionalSkills" :key="i">
          <fa :class="'social ' + skill.class" :icon="skill.faIcon" />
          <span class="tooltip--text">
            <code>{{ skill.title }}</code>
          </span>
        </span>
      </div>
      <h2 class="v-title section">{{ "Career" }}</h2>
      <article class="v-box">
        <div class="career--items">
          <div class="career--item" v-for="(item, i) in career" :key="i">
            <span>
              <span>{{ item.startDate.month + " " + item.startDate.year }}</span>
              <span>{{ " – " }}</span>
              <span v-if="item.endDate.present">{{ "Present" }}</span>
              <span v-else>{{ item.endDate.month + " " + item.endDate.year }}</span>
            </span>
            <span>{{ item.position }} {{ "at" }} <a class="v-link" :href="item.company.webSite">{{ item.company.name }}</a></span>
            <span>{{ item.location }}</span>
          </div>
        </div>
      </article>
    </div>
  </main>
</template>

<script>
import {aboutMe} from '@/static/data/data.json'
import {career} from '@/static/data/career.json'
import BackToHome from '@/components/BackToHome'

export default {
  name: 'AboutMe',
  components: {BackToHome},
  data() {
    return {
      aboutMe,
      career,
    }
  }
}
</script>
