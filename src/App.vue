<script setup>
import { RouterView } from 'vue-router'
import NavBarComponent from './components/NavBarComponent.vue'
import HomeHeaderComponent from './components/HomeHeaderComponent.vue'
import HomeFooterComponent from './components/HomeFooterComponent.vue'
import { Analytics } from "@vercel/analytics/react"
</script>

<template>
  <NavBarComponent />
  <HomeHeaderComponent />
  <RouterView />
  <HomeFooterComponent />
  <Analytics />
</template>
