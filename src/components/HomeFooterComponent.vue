<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="black padding-64 custom-font">
    <div class="row-padding container">
      <!-- Brand Section -->
      <div class="col m4 s12 margin-bottom">
        <RouterLink to="/" class="xxlarge wide" style="text-decoration: none">
          <i class="fas fa-dumbbell margin-right"></i><b>APOLLOFIT</b>
        </RouterLink>
        <p class="text-grey margin-top">
          Your ultimate companion for fitness and health. Join us to transform your life through
          personalized diet and workout plans.
        </p>
      </div>

      <!-- Quick Links -->
      <div class="col m4 s12 margin-bottom">
        <h3>QUICK LINKS</h3>
        <ul class="ul">
          <li style="border: none; padding: 4px 0">
            <RouterLink to="/" class="hover-text-grey" style="text-decoration: none">Home</RouterLink>
          </li>
          <li style="border: none; padding: 4px 0">
            <RouterLink to="/about" class="hover-text-grey" style="text-decoration: none">About</RouterLink>
          </li>
          <li style="border: none; padding: 4px 0">
            <RouterLink to="/contact" class="hover-text-grey" style="text-decoration: none">Contact</RouterLink>
          </li>
        </ul>
      </div>

      <!-- Social & Info -->
      <div class="col m4 s12 margin-bottom">
        <h3>CONNECT</h3>
        <div class="xlarge margin-bottom">
          <i class="fa fa-facebook-official hover-opacity margin-right"></i>
          <i class="fa fa-instagram hover-opacity margin-right"></i>
          <i class="fa fa-snapchat hover-opacity margin-right"></i>
          <i class="fa fa-pinterest-p hover-opacity margin-right"></i>
          <i class="fa fa-twitter hover-opacity margin-right"></i>
          <i class="fa fa-linkedin hover-opacity"></i>
        </div>
        <p class="small">Stay motivated, stay fit.</p>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="center border-top border-dark-grey padding-24 margin-top">
      <p>&copy; 2024 APOLLOFIT. All rights reserved.</p>
      <p class="small text-grey">Designed for Excellence in Fitness.</p>
    </div>
  </footer>
</template>

<style scoped>
.custom-font {
  font-family: 'Raleway', sans-serif;
}
.text-grey {
  color: #9e9e9e !important;
}
.border-dark-grey {
  border-color: #333 !important;
}
</style>
