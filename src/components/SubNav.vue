<template>
  <div class="w-full h-14 border-b bg-white">
    <div class="flex items-center h-full px-8">
      <div>
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span><span class="text-green-600/90">1590</span> job matched</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SubNav',
  setup() {
    const text = 'This is SubNav'
    return {
      text
    }
  }
})
</script>
