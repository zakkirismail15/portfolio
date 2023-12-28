<template>
  <div class="flex flex-col py-10">
    <h2 class="text-white text-[48px]">{{ header }}</h2>
    <p class="text-grey text-[18px]">{{ desc }}</p>
  </div>
</template>

<script>
export default {
  name: 'BaseTile',
  props: {
    header: String,
    desc: String,
  },
}
</script>

<style></style>
