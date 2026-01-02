<script setup>
import { ref, computed } from 'vue'

const workoutPlanList = [
  {
    id: 1,
    title: 'WORKOUT PLAN FOR BUILD YOUR ENDURANCE',
    img: '/anastase-maragos-7kEpUPB8vNk-unsplash.jpg',
    stars: '★★★★★',
    sets: '2-3',
    reps: '1-5',
    rest: '2-4',
    day1: [
      'Bent-Over Row',
      'Lat Pulldown',
      'Barbell Curl',
      'Incline Dumbbell Curl',
      'Dumbbell Preacher Curl',
    ],
    day2: [
      'Leg Extension',
      'Leg Curl',
      'Latpull Down',
      'Rowing',
      'Back Extension',
      'Chest Press',
      'Decline Press',
      'Letaral Raises (B/O)',
      'Barbell Curl',
      'Tricep Extension',
    ],
    day3: ['Jumping Jacks', 'Burpees', 'Jump Rope', 'Squat Jumps', 'Plank'],
  },
  {
    id: 2,
    title: 'GROW/BUILD MUSCLE WORKOUT PLAN',
    img: '/anastase-maragos-fG0p4Qh_aWI-unsplash.jpg',
    stars: '★★★★★',
    sets: '3-5',
    reps: '1-5',
    rest: '2-5',
    day1: [
      'Dumbbell Squeeze Press',
      'Incline barbell bench press',
      'Incline dumbbell bench press',
      'Close-grip barbell bench press',
      'Decline press-up',
    ],
    day2: [
      'Bent-Over Row',
      'Lat Pulldown',
      'Barbell Curl',
      'Incline Dumbbell Curl',
      'Dumbbell Preacher Curl',
      'Lat pulldown',
      'Wide dumbbell row',
      'Barbell deadlift',
      'Hyperextension',
      'Single-arm dumbbell row',
    ],
    day3: [
      'Barbell shrug',
      'Barbell upright row',
      'Dumbbell Overhead press',
      'Dumbbell lateral raise',
      'Alternating dumbbell front raise',
    ],
  },
  {
    id: 3,
    title: 'EXTREME WEIGHT LOSS WORKOUT PLAN',
    img: '/anastase-maragos-i6zMB3yy-jE-unsplash.jpg',
    stars: '★★★★★',
    sets: '3-4',
    reps: '18-20',
    rest: '1-2',
    day1: [
      'Cable fly',
      'Decline barbell bench press',
      'Staggered press-up',
      'Jumping Jacks',
      'Burpees',
    ],
    day2: [
      'Quadruped dumbbell row',
      'Resistance band pull apart',
      'Single arm dumbbell preacher curl',
      'Incline dumbbell curl',
      'Dumbbell hammer curl',
      'Chest Press',
      'Decline Press',
      'Letaral Raises (B/O)',
      'Barbell Curl',
      'Tricep Extension',
    ],
    day3: ['Cycling', 'Battle Ropes', 'Sledgehammer Slams', 'Plank', 'Squat Jumps'],
  },
  // more can be added...
]

// Define `searchTextDietPlan` as a `ref` for reactivity
const searchTextWorkoutPlan = ref('')

// Use `computed` to create a reactive version of `filteredDietPlanList`
const filteredWorkoutPlanList = computed(() => {
  return workoutPlanList.filter((plan) => {
    return plan.title.toLowerCase().includes(searchTextWorkoutPlan.value.toLowerCase())
  })
})
</script>

<template>
  <div class="center">
    <h3>Search Over 100+ Workout Plans</h3>
    <div class="padding-16">
      <input
        type="text"
        class="searchinput"
        placeholder="Search Workout Plans"
        v-model.trim="searchTextWorkoutPlan"
      />
    </div>
    <div v-if="searchTextWorkoutPlan && !(filteredWorkoutPlanList.length == 0)">
      <span>Showing results for:</span
      ><span class="large"
        ><b> {{ searchTextWorkoutPlan }} </b></span
      >
      <br />
      <span>Total:</span
      ><span class="large"
        ><b> {{ filteredWorkoutPlanList.length }} </b></span
      ><span>result(s) found.</span>
    </div>
    <div v-if="filteredWorkoutPlanList.length == 0">
      <p>No results containing all your search terms were found.</p>
      <p>
        Your search - <b>{{ searchTextWorkoutPlan }}</b> - did not match any workout plans.
      </p>
      <p>Suggestions:</p>
      <ul>
        <li>Make sure that all words are spelled correctly.</li>
        <li>Try different keywords.</li>
        <li>Try more general keywords.</li>
      </ul>
    </div>
    <div class="row-padding" style="margin-top: 64px">
      <template v-for="plan in filteredWorkoutPlanList" :key="plan.id">
        <div class="third section center">
          <ul class="ul white hover-shadow light-grey">
            <li class="xlarge padding-32">
              <img style="width: 100%" v-bind:src="plan.img" />
              <h2>{{ plan.title }}</h2>
              <h3>{{ plan.stars }}</h3>
              <h4>{{ plan.sets }} SETS</h4>
              <h4>{{ plan.reps }} REPS</h4>
              <h4>{{ plan.rest }} MIN REST</h4>
            </li>
            <li class="padding-16">
              <h4>DAY 1</h4>
              <p v-for="(workout, index) in plan.day1" :key="index">{{ workout }}</p>
            </li>
            <li class="padding-16">
              <h4>DAY 2</h4>
              <p v-for="(workout, index) in plan.day2" :key="index">{{ workout }}</p>
            </li>
            <li class="padding-16">
              <h4>DAY 3</h4>
              <p v-for="(workout, index) in plan.day3" :key="index">{{ workout }}</p>
            </li>
            <li class="padding-16">
              <h3 class="wide">
                by<br /><i class="fas fa-dumbbell large margin-right"></i><b>APOLLOFIT</b>
              </h3>
            </li>
          </ul>
        </div>
      </template>
    </div>
  </div>
</template>

<style scoped>
/* Search Bar */
.searchinput[type='text'] {
  color: #8bc34a;
  padding: 16px;
  font-size: 17px;
  font-family: Arial, Helvetica, sans-serif;
  border: 3px solid #8bc34a;
  width: 75%;
  background: white;
  border-radius: 5px 5px 5px 5px;
  outline: none;
}
.searchinput[type='text']:hover {
  background: #f1f1f1;
}
.searchinput[type='text']:focus {
  color: #8bc34a;
}
</style>
