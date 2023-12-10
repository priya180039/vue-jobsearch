<template>
  <section class="mb-16">
    <h1 class="text-8xl mb-14 tracking-tighter font-bold">
      <span>{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Myst Corp.</h2>
  </section>
</template>

<script>
export default {
  name: 'TheHeadline',
  data() {
    return {
      action: 'Build'
    }
  }
}
</script>
