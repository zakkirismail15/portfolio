<template>
  <div class="flex justify-between items-center pb-16">
    <h3 class="text-[32px] text-[white]">zakkirismail</h3>
    <div class="flex justify-around gap-4">
      <span><IconGithub /></span>
      <span><IconLinkedin /></span>
      <span><IconTwiter /></span>
    </div>
  </div>
</template>

<script>
import IconGithub from '@/assets/svg/icon-github.svg'
import IconLinkedin from '@/assets/svg/icon-linkedin.svg'
import IconTwiter from '@/assets/svg/icon-twitter.svg'

export default {
  name: 'BaseBar',
  components: {
    IconGithub,
    IconLinkedin,
    IconTwiter,
  },
}
</script>

<style></style>
