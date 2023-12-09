<template>
  <img :src="profileImg" alt="profile" class="w-12 h-12 rounded-full object-contain" />
</template>
<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      profileImg: 'https://picsum.photos/id/290/300/300'
    }
  }
}
</script>
