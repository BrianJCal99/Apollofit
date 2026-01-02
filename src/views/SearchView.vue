<script setup></script>

<template>
  <div class="container center text-black" style="padding: 128px 16px" id="search">
    <span class="xxxlarge hide-small"><b>SEARCH</b></span>
    <span class="xxxlarge hide-medium hide-large"><b>SEARCH</b></span>
    <br />
    <!-- Select route 1 -->
    <RouterLink to="/search/diet-plans"
      ><button class="btn hover-light-green">
        <i class="fa fa-search margin-right"></i>Diet Plans
      </button></RouterLink
    >
    <!-- Select rout 2 -->
    <RouterLink to="/search/workout-plans"
      ><button class="btn hover-light-green">
        <i class="fa fa-search margin-right"></i>Workout Plans
      </button></RouterLink
    >
  </div>
</template>
