<template>
  <header class="text-sm w-full">
    <div class="h-16 fixed top-0 left-0 w-full">
      <div class="flex items-center flex-nowrap border-b h-full px-12">
        <a
          data-testid="test-hover"
          href="/"
          class="hover:cursor-pointer"
          @mouseover="handleHover"
          @mouseleave="handleLeave"
        >
          <img class="w-48" :src="logoUrl" alt="logo" />
        </a>
        <div class="ml-12">
          <ul class="flex items-center h-full text-lg">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="ml-8 first:ml-0 h-full flex items-center"
            >
              <a class="text-zinc-600 hover:text-zinc-950" href="">{{ menuItem }}</a>
            </li>
          </ul>
        </div>
        <div class="ml-auto flex items-center h-full">
          <profile-image v-if="isLoggedIn" @click="showToggle" />
          <action-button v-else type="primary" text="Sign in" @click="LoginUser" />
          <div class="absolute right-7 top-[3.75rem] bg-white ring-1 ring-zinc-900 rounded-lg">
            <action-button
              v-if="isShowToggle"
              type="secondary"
              text="Logout"
              class="py-2"
              @click="LogoutUser"
            />
          </div>
        </div>
      </div>
      <SubNav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
import mainLogo from '@/assets/mainLogo.png'
import hoverLogo from '@/assets/hoverLogo.png'
import ActionButton from './ActionButton.vue'
import ProfileImage from './ProfileImage.vue'
import SubNav from './SubNav.vue'

export default {
  name: 'MainNav',
  components: { ActionButton, ProfileImage, SubNav },
  data() {
    return {
      logoUrl: mainLogo,
      logoDefault: mainLogo,
      logoHover: hoverLogo,
      menuItems: ['Locations', 'Teams', 'Benefits', 'Jobs', 'Students'],
      isLoggedIn: false,
      isShowToggle: false
    }
  },
  methods: {
    handleHover() {
      this.logoUrl = this.logoHover
    },
    handleLeave() {
      this.logoUrl = this.logoDefault
    },
    LoginUser() {
      this.isLoggedIn = true
    },
    LogoutUser() {
      this.isLoggedIn = false
      this.isShowToggle = false
    },
    showToggle() {
      this.isShowToggle = !this.isShowToggle
    }
  }
}
</script>
