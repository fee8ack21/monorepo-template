<script setup lang="ts">
import { ref } from 'vue'
import { type HeaderMenuItem, BaseToTop, BaseLayout, HeaderMenuType } from '@monorepo-template/ui'

const menu = ref<HeaderMenuItem[]>([
  { type: HeaderMenuType.LINK, text: 'Home', url: '/' },
  { type: HeaderMenuType.LINK, text: 'Home 2', url: '/home2' },
  { type: HeaderMenuType.LINK, text: 'About', url: '/about' },
  { type: HeaderMenuType.LINK, text: 'Contact', url: '/contact' }
])
</script>

<template>
  <BaseLayout :menu="menu" :changeTheme="true">
    <router-view></router-view>
  </BaseLayout>
  <BaseToTop></BaseToTop>
</template>
