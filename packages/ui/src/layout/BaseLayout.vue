<template>
  <div>
    <BaseHeader :menu="menu" :changeTheme="changeTheme" />
    <main class="main">
      <slot></slot>
    </main>
    <BaseFooter />
  </div>
</template>

<script setup lang="ts">
import BaseHeader, { HeaderMenuItem } from './BaseHeader.vue'
import BaseFooter from './BaseFooter.vue'
import { PropType } from 'vue'

defineProps({
  menu: {
    type: Array as PropType<HeaderMenuItem[]>,
    default: () => []
  },
  changeTheme: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.main {
  min-height: calc(100vh - 100px);
}
</style>
