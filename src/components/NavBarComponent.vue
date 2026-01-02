<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

// Reactive variables to manage sidebar and dropdown visibility
const isSidebarVisible = ref(false)
const isDropdownVisible = ref(false)

// Toggle sidebar visibility
function toggleSidebar() {
  isSidebarVisible.value = !isSidebarVisible.value
}

// Toggle dropdown visibility within the sidebar
function toggleDropdown() {
  isDropdownVisible.value = !isDropdownVisible.value
}

// Close sidebar
function closeSidebar() {
  isSidebarVisible.value = false
}
</script>

<template>
  <!-- Navbar fixed on top Desktop Screen -->
  <div class="top custom-font">
    <div class="bar white card" id="navbar">
      <RouterLink to="/" class="bar-item button wide hover-none">
        <i class="fas fa-dumbbell large margin-right"></i>
        <b>APOLLOFIT</b>
      </RouterLink>
      <!-- Right-sided navbar links -->
      <div class="right hide-small hide-medium">
        <RouterLink to="/about" class="bar-item button hover-green">ABOUT</RouterLink>
        <div class="dropdown-hover">
          <button class="button hover-green">
            WHAT WE OFFER<i class="fa fa-caret-down margin-left"></i>
          </button>
          <div class="dropdown-content card-4 bar-block">
            <RouterLink to="/diet-plans" class="bar-item button hover-green">
              PERSONALIZE DIET PLANS
            </RouterLink>
            <RouterLink to="/workout-plans" class="bar-item button hover-green">
              PERSONALIZE WORKOUT PLANS
            </RouterLink>
          </div>
        </div>
        <RouterLink to="/workouts" class="bar-item button hover-green">WORKOUTS</RouterLink>
        <RouterLink to="/contact" class="bar-item button hover-green">CONTACT</RouterLink>
        <RouterLink to="/search" class="bar-item button hover-green">
          <i class="fa fa-search margin-right"></i> SEARCH
        </RouterLink>
      </div>

      <!-- Menu icon for small screens -->
      <a href="javascript:void(0)" class="bar-item button right hide-large" @click="toggleSidebar">
        <i class="fa fa-bars"></i>
      </a>
    </div>
  </div>

  <!-- Sidebar for Mobile Screen -->
  <nav
    class="sidebar bar-block black card animate-left custom-font"
    :class="{ 'hide-large': true }"
    v-show="isSidebarVisible"
    id="sidebar"
  >
    <a
      href="javascript:void(0)"
      @click="closeSidebar"
      class="bar-item button large padding-16 hover-green"
    >
      Close <i class="fa fa-close"></i>
    </a>
    <RouterLink to="/search" @click="closeSidebar" class="bar-item button hover-green">
      <i class="fa fa-search"></i> SEARCH
    </RouterLink>
    <RouterLink to="/about" @click="closeSidebar" class="bar-item button hover-green"
      >ABOUT</RouterLink
    >
    <a
      href="javascript:void(0)"
      @click="toggleDropdown"
      class="button block left-align hover-green"
    >
      WHAT WE OFFER<i class="fa fa-caret-down margin-left"></i>
    </a>
    <div v-show="isDropdownVisible" class="bar-block margin-left">
      <RouterLink to="/diet-plans" class="bar-item button hover-green"
        >PERSONALIZE DIET PLANS</RouterLink
      >
      <RouterLink to="workout-plans" class="bar-item button hover-green"
        >PERSONALIZE WORKOUT PLANS</RouterLink
      >
    </div>
    <RouterLink to="/workouts" @click="closeSidebar" class="bar-item button hover-green"
      >WORKOUTS</RouterLink
    >
    <RouterLink to="/contact" @click="closeSidebar" class="bar-item button hover-green"
      >CONTACT</RouterLink
    >
    <RouterLink to="/" @click="closeSidebar" class="bar-item button hover-green wide">
      <i class="fas fa-dumbbell large margin-right"></i><b>APOLLOFIT</b>
    </RouterLink>
  </nav>
</template>

<style scoped>
.custom-font {
  font-family: 'Raleway', sans-serif;
}
.bar .button {
  padding: 16px;
}
</style>
