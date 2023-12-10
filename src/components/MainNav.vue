<template>
  <header :class="['text-sm', 'w-full', heightClass]">
    <div class="h-16 fixed top-0 left-0 w-full">
      <div class="flex items-center flex-nowrap border-b h-full px-12 bg-white">
        <router-link
          data-testid="test-hover"
          to="/"
          class="hover:cursor-pointer"
          @mouseover="handleHover"
          @mouseleave="handleLeave"
        >
          <img class="w-48" :src="logoUrl" alt="logo" />
        </router-link>
        <div class="ml-12">
          <ul class="flex items-center h-full text-lg">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem"
              class="ml-8 first:ml-0 h-full flex items-center"
            >
              <router-link :to="menuItem.url" class="text-zinc-600 hover:text-zinc-950" href="">{{
                menuItem.text
              }}</router-link>
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
      menuItems: [
        { text: 'Locations', url: '/locations' },
        { text: 'Teams', url: '/teams' },
        { text: 'Benefits', url: '/benefits' },
        { text: 'Jobs', url: '/jobs' },
        { text: 'Students', url: '/students' }
      ],
      isLoggedIn: false,
      isShowToggle: false
    }
  },
  computed: {
    heightClass() {
      return { 'h-16': !this.isLoggedIn, 'h-32': this.isLoggedIn }
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
