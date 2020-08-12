<template>
  <div v-if="!searched" class="text-h1 flex flex-center i-logo">
    <span class="text-bold text-italic text-red">I</span>
    <span class="text-bold text-yellow">m</span>
    <span class="text-italic text-green">a</span>
    <span class="text-italic text-blue">g</span>
    <span >o</span>
    <span class="text-orange text-bold">P</span>
    <span class="text-orange text-bold">H</span>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    searched: Boolean
  }
}
</script>

<style>

</style>
