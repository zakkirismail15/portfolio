<template>
  <div class="px-40 py-10">
    <BaseBar />
    <div class="text-white pb-60">
      <!-- background pattern -->
      <PatternRings class="absolute left-[-3rem]" /><PatternCircle
        class="absolute top-[30rem] left-[48rem]"
      />
      <!-- start content -->
      <h1 class="text-[88px] leading-[88px] tracking-[-2.5px]">
        Nice to meet you! <br />I'm <u class="decoration-green">Zakkir</u>.
      </h1>

      <p class="text-grey py-10 text-[18px]">
        Based in the Malaysia,I'm a back-end developer <br />
        passionate about building accessible web apps <br />
        that users love.
      </p>

      <BaseButton @click="consoleLog">CONTACT ME</BaseButton>
    </div>
    <hr class="border-grey" />
    <div class="grid grid-cols-3">
      <BaseTile :header="'Java'" :desc="'2 Years Experiences'" />
      <BaseTile :header="'Spring Boot'" :desc="'2 Years Experiences'" />
      <BaseTile :header="'Vue'" :desc="'1 Years Experience'" />
      <BaseTile :header="'Linux'" :desc="'1 Years Experience'" />
      <BaseTile :header="'SQL'" :desc="'3 Years Experiences'" />
      <BaseTile :header="'Javascript'" :desc="'1 Years Experiences'" />
    </div>
    <div class="mt-10">
      <div class="flex flex-row justify-between align-center">
        <h1 class="inline-block text-white text-[88px]">Projects</h1>
        <BaseButton class="self-center h-fit">CONTACT ME</BaseButton>
      </div>
      <div class="grid grid-cols-2 gap-5">
        <BaseProjectTile
          :imgSrc="require('../assets/img/thumbnail-project-1-large.webp')"
          :header="'BUSINESS LANDING PAGE'"
          :desc="'HTML CSS JAVASCRIPT'"
        />
        <BaseProjectTile
          :imgSrc="require('../assets/img/thumbnail-project-2-large.webp')"
          :header="'BUSINESS LANDING PAGE'"
          :desc="'HTML CSS JAVASCRIPT'"
        />
        <BaseProjectTile
          :imgSrc="require('../assets/img/thumbnail-project-3-large.webp')"
          :header="'BUSINESS LANDING PAGE'"
          :desc="'HTML CSS JAVASCRIPT'"
        />
        <BaseProjectTile
          :imgSrc="require('../assets/img/thumbnail-project-4-large.webp')"
          :header="'BUSINESS LANDING PAGE'"
          :desc="'HTML CSS JAVASCRIPT'"
        />
        <BaseProjectTile
          :imgSrc="require('../assets/img/thumbnail-project-5-large.webp')"
          :header="'BUSINESS LANDING PAGE'"
          :desc="'HTML CSS JAVASCRIPT'"
        />
        <BaseProjectTile
          :imgSrc="require('../assets/img/thumbnail-project-6-large.webp')"
          :header="'BUSINESS LANDING PAGE'"
          :desc="'HTML CSS JAVASCRIPT'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import PatternCircle from '@/assets/svg/pattern-circle.svg'
import PatternRings from '@/assets/svg/pattern-rings.svg'

export default {
  name: 'LandingView',
  components: {
    PatternCircle,
    PatternRings,
  },
  methods: {
    consoleLog() {
      console.log('Hello Testing QA')
    },
  },
}
</script>

<style></style>
