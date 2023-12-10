<template>
  <main>
    <section class="flex h-screen flex-col pb-20 pt-10">
      <div class="grid grid-cols-12">
        <div class="col-span-1 col-start-1"></div>
        <div class="col-span-5 col-start-2"><TheHeadline /></div>
        <div class="col-span-5 col-start-7 self-center justify-self-center">
          <img
            alt="icon job"
            :src="iconJobUrl"
            class="h-[25rem] w-[25rem] object-contain rounded-full"
          />
        </div>
        <div class="col-span-1 col-start-12"></div>
      </div>
    </section>
  </main>
</template>

<script>
import TheHeadline from '@/components/JobSearch/TheHeadline.vue'
import iconUrl from '@/assets/undraw_interview.svg'

export default {
  name: 'TheHero',
  components: { TheHeadline },
  data() {
    return {
      iconJobUrl: iconUrl
    }
  }
}
</script>
