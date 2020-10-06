<template>
  <main class="ok-section--main extra-section page--about">

    <div class="ok-column first">
      <h3 class="ok-title section">{{ aboutMe.title }}</h3>

      <div class="ok-container col-2">
        <div class="ok-column first">
          <img src="@/assets/images/ok.jpg" alt="Oleg">
        </div>
        <div class="ok-column second">
          <h1 class="about--pre v-title--bold-sm">
            <span class="">{{ aboutMe.preStory.greeting }}</span>
            <a class="ok-link" :href="aboutMe.preStory.currectCompany.uri">{{ aboutMe.preStory.currectCompany.name }}</a>
            <span>{{ "on their " + aboutMe.preStory.currectCompany.techStack + " projects in sunny" }}</span>
            <span>{{ aboutMe.location }}</span>
          </h1>
          <div class="about--story v-text">{{ aboutMe.story }}</div>
        </div>
      </div>

      <h2 class="ok-title section">{{ "Professional Skills" }}</h2>

      <div class="ok-box wrapper-social">
        <span class="tooltip" v-for="(skill, i) in aboutMe.pofessionalSkills" :key="i">
          <fa :class="'social ' + skill.class" :icon="skill.faIcon" />
          <span class="tooltip--text">
            <code>{{ skill.title }}</code>
          </span>
        </span>
      </div>
      <h2 class="ok-title section">{{ "Career" }}</h2>
      <article class="ok-box">
        <div class="career--items">
          <div class="career--item" v-for="(item, i) in career" :key="i">
            <span>
              <span>{{ item.startDate.month + " " + item.startDate.year }}</span>
              <span>{{ " – " }}</span>
              <span v-if="item.endDate.present">{{ "Present" }}</span>
              <span v-else>{{ item.endDate.month + " " + item.endDate.year }}</span>
            </span>
            <span>{{ item.position }} {{ "at" }} <a class="ok-link" :href="item.company.webSite">{{ item.company.name }}</a></span>
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
