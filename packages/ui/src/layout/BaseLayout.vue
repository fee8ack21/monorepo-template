<template>
  <div>
    <BaseHeader />
    <main>
      <slot></slot>
    </main>
    <BaseFooter />
  </div>
</template>

<script setup>
import BaseHeader from './BaseHeader.vue'
import BaseFooter from './BaseFooter.vue'
</script>
