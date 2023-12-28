<template>
  <div class="flex flex-col py-10">
    <img :src="imgSrc" />
    <h2 class="text-white text-[24px] my-3">{{ header }}</h2>
    <p class="text-grey text-[18px]">{{ desc }}</p>
  </div>
</template>

<script>
export default {
  name: 'BaseProjectTile',
  props: {
    imgSrc: String,
    header: String,
    desc: String,
  },
}
</script>

<style></style>
