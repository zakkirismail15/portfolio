<template>
  <button
    class="border-b-2 border-green pb-1 text-white hover:text-green flex justify-center items-center tracking-[2.286px]"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'BaseButton',
  methods: {
    handleClick() {
      this.$emit('click')
    },
  },
}
</script>

<style></style>
