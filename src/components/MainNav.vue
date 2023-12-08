<template>
  <header class="text-sm w-full h-16 border-b">
    <div class="flex items-center flex-nowrap h-full mx-12 justify-between">
      <a
        data-testid="test-hover"
        href="/"
        class="hover:cursor-pointer"
        @mouseover="handleHover"
        @mouseleave="handleLeave"
      >
        <img class="w-48" :src="logoUrl" alt="logo" />
      </a>
      <div>
        <div class="text-xl">Profile</div>
      </div>
    </div>
  </header>
</template>

<script>
import mainLogo from '@/assets/mainLogo.png'
import hoverLogo from '@/assets/hoverLogo.png'

export default {
  name: 'MainNav',
  data() {
    return {
      logoUrl: mainLogo,
      logoDefault: mainLogo,
      logoHover: hoverLogo
    }
  },
  methods: {
    handleHover() {
      this.logoUrl = this.logoHover
    },
    handleLeave() {
      this.logoUrl = this.logoDefault
    }
  }
}
</script>
