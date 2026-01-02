<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <HomeHeaderComponent />
  <div class="container custom-font" id="WhatWeOffer">
    <h3 class="center">WHAT WE OFFER</h3>
    <p class="center large">WE HELP YOU TO CREATE YOUR OWN PERSONALIZED DIET/WORKOUT PLAN</p>
    <div class="row-padding" style="margin-top: 64px">
      <!-- Personalize Diet Plans -->
      <div class="half section">
        <div class="card">
          <img
            src="/louis-hansel-MlPD-AzZYMg-unsplash.jpg"
            alt="Perzonalize  Diet Plan Cover Image"
            class="grayscale-min"
            style="width: 100%"
          />
          <div class="container">
            <h3>Personalize Diet Plans</h3>
            <p class="opacity">By <b>APOLLOFIT</b></p>
            <p>
              Best diet for you according to preferences. Personalized 30-day meal plan to lose
              weight. Don't start strict diets. Take test to create customized meal plan based on
              preferences. For all body types. List of healthy recipes. Calorie-torching workouts.
              According to lifestyle.
            </p>
            <div class="center">
              <RouterLink to="/diet-plans"
                ><button class="button black padding-large large margin-top hover-light-green">
                  START NOW<i class="fa fa-arrow-right margin-left"></i></button
              ></RouterLink>
            </div>
            <br />
          </div>
        </div>
      </div>
      <!-- Personalize Workout Plans -->
      <div class="half section">
        <div class="card">
          <img
            src="/adam-wilson-gNzqerPFtWs-unsplash.jpg"
            alt="Perzonalize Workout Plan Cover Image"
            class="grayscale-min"
            style="width: 100%"
          />
          <div class="container">
            <h3>Personalize Workout Plans</h3>
            <p class="opacity">By <b>APOLLOFIT</b></p>
            <p>
              An exercise routine that's based on your fitness goals, your level of fitness, the
              amount of time you can devote to exercise each week, and the kind of fitness
              activities you enjoy. Start building today using our algorithm.
            </p>
            <div class="center">
              <RouterLink to="/workout-plans"
                ><button class="button black padding-large large margin-top hover-light-green">
                  START NOW<i class="fa fa-arrow-right margin-left"></i></button
              ></RouterLink>
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.custom-font {
  font-family: 'Raleway', sans-serif;
}
</style>
