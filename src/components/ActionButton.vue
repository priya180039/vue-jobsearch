<template>
  <button :class="buttonClass">{{ text }}</button>
</template>
<script>
export default {
  name: 'ActionButton',
  props: { text: { type: String, required: true }, type: { type: String, required: true } },
  computed: {
    buttonClass() {
      return { primary: this.type === 'primary', secondary: this.type === 'secondary' }
    }
  }
}
</script>
<style scoped>
button {
  @apply text-lg px-4 py-2 flex items-center rounded-md font-medium border-0;
}
.primary {
  @apply bg-blue-500 text-white hover:shadow-blue;
}
.secondary {
  @apply bg-transparent text-blue-600/90 hover:bg-blue-600/90 hover:text-white;
}
</style>
