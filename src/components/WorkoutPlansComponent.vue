<script setup>
import { reactive } from 'vue'

// Reactive states
const data = reactive({
  aim: '',
  bodyType: '',
  errors: [],
  sets: '',
  reps: '',
  rest: '',
  day1: [],
  day2: [],
  day3: [],
  day4: [],
  date: '',
  time: '',
  show: false,
})

// Form validation
function checkForm() {
  data.errors = []
  if (!data.aim) data.errors.push('Aim required.')
  if (!data.bodyType) data.errors.push('Select your body type.')
}

// Create workout plan based on aim and bodyType
function createWorkoutPlan() {
  data.date = new Date().toLocaleDateString()
  data.time = new Date().toLocaleTimeString()
  if (data.aim == 'Build Strength') {
    // if user selects Build Strength as their aim, current values of sets, reps and rest will adopt following values in ther workput plan
    data.sets = '3-5'
    data.reps = '1-5'
    data.rest = '2-5 MIN'
    if (data.bodyType == 'Ectomorph') {
      // if user slects Build Strength as their aim and Ectomorph as their bodyType they will get following exercies in their workout plan
      data.day1 = [
        'Incline Bench Press',
        'Bench Press',
        'Decline Fly',
        'Overhead Dumbbell Press',
        'Upright Row',
        'Bent-Over Lateral Raise',
        'Bench Dip',
        'Close-Grip Bench Press',
        'Lying Triceps Extension',
      ]
      data.day2 = [
        'Bent-Over Row',
        'Lat Pulldown',
        'Barbell Curl',
        'Incline Dumbbell Curl',
        'Dumbbell Preacher Curl',
      ]
      data.day3 = [
        'Squat',
        'Leg Pres',
        'Lunge',
        'Leg Extension',
        'Leg Curl',
        'Squat',
        'Leg Pres',
        'Lunge',
        'Leg Extension',
        'Leg Curl',
        'Leg-Pree Calf Raise',
        'Seated Dumbbell Calf Raise',
        'AB Crunches',
        'Reverse Crunch',
      ]
      data.day4 = ['Cycling', 'Battle Ropes', 'Sledgehammer Slams']
    }
    if (data.bodyType == 'Mesomorph') {
      // if user slects Build Strength as their aim and Mesomorph as their bodyType they will get following exercies in their workout plan
      data.day1 = [
        'Incline Bench Press',
        'Bench Press',
        'Decline Fly',
        'Overhead Dumbbell Press',
        'Upright Row',
        'Bent-Over Lateral Raise',
        'Bench Dip',
        'Close-Grip Bench Press',
        'Lying Triceps Extension',
      ]
      data.day2 = [
        'Lat pulldown',
        'Wide dumbbell row',
        'Barbell deadlift',
        'Hyperextension',
        'Single-arm dumbbell row',
        'Quadruped dumbbell row',
        'Resistance band pull apart',
        'Single arm dumbbell preacher curl',
        'Incline dumbbell curl',
        'Dumbbell hammer curl',
      ]
      data.day3 = [
        'Squat',
        'Leg Pres',
        'Lunge',
        'Leg Extension',
        'Leg Curl',
        'Squat',
        'Leg Pres',
        'Lunge',
        'Leg Extension',
        'Leg Curl',
        'Leg-Pree Calf Raise',
        'Seated Dumbbell Calf Raise',
        'AB Crunches',
        'Reverse Crunch',
      ]
      data.day4 = [
        'Burpees',
        'Brisk walking',
        'Jogging in place',
        'Battle Ropes',
        'Sledgehammer Slams',
      ]
    }
    if (data.bodyType == 'Endomorph') {
      // if user slects Build Strength as their aim and Endomorph as their bodyType they will get following exercies in their workout plan
      data.day1 = [
        'Dumbbell Squeeze Press',
        'Incline barbell bench press',
        'Incline dumbbell bench press',
        'Close-grip barbell bench press',
        'Decline press-up',
        'Cable fly',
        'Decline barbell bench press',
        'Staggered press-up',
        'Barbell shrug',
        'Barbell upright row',
        'Dumbbell Overhead press',
        'Dumbbell lateral raise',
        'Alternating dumbbell front raise',
      ]
      data.day2 = [
        'Bent-Over Row',
        'Lat Pulldown',
        'Barbell Curl',
        'Incline Dumbbell Curl',
        'Dumbbell Preacher Curl',
      ]
      data.day3 = [
        'Squats',
        'Lunges',
        'Plank leg lifts',
        'Single-leg deadlifts',
        'Stability ball knee tucks',
        'Step-ups',
        'Box jumps',
        'Speedskater jumps',
        'High Plank',
        'Leg raises',
        'Plank knee crosses',
        'V-ups & V-sit',
      ]
      data.day4 = ['Cycling', 'Battle Ropes', 'Sledgehammer Slams']
    }
  }
  if (data.aim == 'Build Muscle') {
    // if user selects Build Muscle as their aim, current values of sets, reps and rest will adopt following values in ther workput plan
    data.sets = '3-5'
    data.reps = '6-12'
    data.rest = '1-2 MIN'
    if (data.bodyType == 'Ectomorph') {
      // if user slects Build Muscle as their aim and Ectomorph as their bodyType they will get following exercies in their workout plan
      data.day1 = [
        'Wide Bench Press',
        'Incline Bench Press',
        'Decline Bench Press',
        'Bent-Over Row',
        'Lat Pulldown',
        'Barbell Curl',
        'Incline Dumbbell Curl',
        'Dumbbell Preacher Curl',
      ]
      data.day2 = [
        'Bent-Over Row',
        'Lat Pulldown',
        'Barbell Curl',
        'Incline Dumbbell Curl',
        'Dumbbell Preacher Curl',
      ]
      data.day3 = [
        'Squats',
        'Lunges',
        'Plank leg lifts',
        'Single-leg deadlifts',
        'Stability ball knee tucks',
        'Step-ups',
        'Box jumps',
        'Speedskater jumps',
        'High Plank',
        'Leg raises',
        'Plank knee crosses',
        'V-ups & V-sit',
      ]
      data.day4 = ['HIIT', 'Battle Ropes', 'Sledgehammer Slams', 'Tyre Flip']
    }
    if (data.bodyType == 'Mesomorph') {
      // if user slects Build Muscle as their aim and Mesomorph as their bodyType they will get following exercies in their workout plan
      data.day1 = [
        'Dumbbell Squeeze Press',
        'Incline barbell bench press',
        'Incline dumbbell bench press',
        'Close-grip barbell bench press',
        'Decline press-up',
        'Cable fly',
        'Decline barbell bench press',
        'Staggered press-up',
        'Barbell shrug',
        'Barbell upright row',
        'Dumbbell Overhead press',
        'Dumbbell lateral raise',
        'Alternating dumbbell front raise',
      ]
      data.day2 = [
        'Lat pulldown',
        'Wide dumbbell row',
        'Barbell deadlift',
        'Hyperextension',
        'Single-arm dumbbell row',
        'Quadruped dumbbell row',
        'Resistance band pull apart',
        'Single arm dumbbell preacher curl',
        'Incline dumbbell curl',
        'Dumbbell hammer curl',
      ]
      data.day3 = [
        'Squats',
        'Lunges',
        'Plank leg lifts',
        'Single-leg deadlifts',
        'Stability ball knee tucks',
        'Step-ups',
        'Box jumps',
        'Speedskater jumps',
        'High Plank',
        'Leg raises',
        'Plank knee crosses',
        'V-ups & V-sit',
      ]
      data.day4 = [
        'Burpees',
        'Brisk walking',
        'Jogging in place',
        'Battle Ropes',
        'Sledgehammer Slams',
      ]
    }
    if (data.bodyType == 'Endomorph') {
      // if user slects Build Muscle as their aim and Endomorph as their bodyType they will get following exercies in their workout plan
      data.day1 = [
        'Wide Bench Press',
        'Incline Bench Press',
        'Decline Bench Press',
        'Bent-Over Row',
        'Lat Pulldown',
        'Barbell Curl',
        'Incline Dumbbell Curl',
        'Dumbbell Preacher Curl',
      ]
      data.day2 = [
        'Lat pulldown',
        'Wide dumbbell row',
        'Barbell deadlift',
        'Hyperextension',
        'Single-arm dumbbell row',
        'Quadruped dumbbell row',
        'Resistance band pull apart',
        'Single arm dumbbell preacher curl',
        'Incline dumbbell curl',
        'Dumbbell hammer curl',
      ]
      data.day3 = [
        'Squat',
        'Leg Pres',
        'Lunge',
        'Leg Extension',
        'Leg Curl',
        'Squat',
        'Leg Pres',
        'Lunge',
        'Leg Extension',
        'Leg Curl',
        'Leg-Pree Calf Raise',
        'Seated Dumbbell Calf Raise',
        'AB Crunches',
        'Reverse Crunch',
      ]
      data.day4 = ['Running', 'Cycling', 'Swimming', 'Battle Ropes', 'Sledgehammer Slams']
    }
  }
  if (data.aim == 'Build Endurance') {
    // if user selects Build Endurance as their aim, current values of sets, reps and rest will adopt following values in ther workput plan
    data.sets = '2-3'
    data.reps = '12-20+'
    data.rest = '30-75 SEC'
    if (data.bodyType == 'Ectomorph') {
      // if user slects Build Endurance as their aim and Ectomorph as their bodyType they will get following exercies in their workout plan
      data.day1 = [
        'Incline Bench Press',
        'Bench Press',
        'Decline Fly',
        'Overhead Dumbbell Press',
        'Upright Row',
        'Bent-Over Lateral Raise',
        'Bench Dip',
        'Close-Grip Bench Press',
        'Lying Triceps Extension',
      ]
      data.day2 = [
        'Bent-Over Row',
        'Lat Pulldown',
        'Barbell Curl',
        'Incline Dumbbell Curl',
        'Dumbbell Preacher Curl',
      ]
      data.day3 = [
        'Squat',
        'Leg Pres',
        'Lunge',
        'Leg Extension',
        'Leg Curl',
        'Squat',
        'Leg Pres',
        'Lunge',
        'Leg Extension',
        'Leg Curl',
        'Leg-Pree Calf Raise',
        'Seated Dumbbell Calf Raise',
        'AB Crunches',
        'Reverse Crunch',
      ]
      data.day4 = ['HIIT', 'Battle Ropes', 'Sledgehammer Slams', 'Tyre Flip']
    }
    if (data.bodyType == 'Mesomorph') {
      // if user slects Build Endurance as their aim and Mesomorph as their bodyType they will get following exercies in their workout plan
      data.day1 = [
        'Wide Bench Press',
        'Incline Bench Press',
        'Decline Bench Press',
        'Bent-Over Row',
        'Lat Pulldown',
        'Barbell Curl',
        'Incline Dumbbell Curl',
        'Dumbbell Preacher Curl',
      ]
      data.day2 = [
        'Lat pulldown',
        'Wide dumbbell row',
        'Barbell deadlift',
        'Hyperextension',
        'Single-arm dumbbell row',
        'Quadruped dumbbell row',
        'Resistance band pull apart',
        'Single arm dumbbell preacher curl',
        'Incline dumbbell curl',
        'Dumbbell hammer curl',
      ]
      data.day3 = [
        'Squats',
        'Lunges',
        'Plank leg lifts',
        'Single-leg deadlifts',
        'Stability ball knee tucks',
        'Step-ups',
        'Box jumps',
        'Speedskater jumps',
        'High Plank',
        'Leg raises',
        'Plank knee crosses',
        'V-ups & V-sit',
      ]
      data.day4 = [
        'Burpees',
        'Brisk walking',
        'Jogging in place',
        'Battle Ropes',
        'Sledgehammer Slams',
      ]
    }
    if (data.bodyType == 'Endomorph') {
      // if user slects Build Endurance as their aim and Endomorph as their bodyType they will get following exercies in their workout plan
      data.day1 = [
        'Dumbbell Squeeze Press',
        'Incline barbell bench press',
        'Incline dumbbell bench press',
        'Close-grip barbell bench press',
        'Decline press-up',
        'Cable fly',
        'Decline barbell bench press',
        'Staggered press-up',
        'Barbell shrug',
        'Barbell upright row',
        'Dumbbell Overhead press',
        'Dumbbell lateral raise',
        'Alternating dumbbell front raise',
      ]
      data.day2 = [
        'Lat pulldown',
        'Wide dumbbell row',
        'Barbell deadlift',
        'Hyperextension',
        'Single-arm dumbbell row',
        'Quadruped dumbbell row',
        'Resistance band pull apart',
        'Single arm dumbbell preacher curl',
        'Incline dumbbell curl',
        'Dumbbell hammer curl',
      ]
      data.day3 = [
        'Squat',
        'Leg Pres',
        'Lunge',
        'Leg Extension',
        'Leg Curl',
        'Squat',
        'Leg Pres',
        'Lunge',
        'Leg Extension',
        'Leg Curl',
        'Leg-Pree Calf Raise',
        'Seated Dumbbell Calf Raise',
        'AB Crunches',
        'Reverse Crunch',
      ]
      data.day4 = ['Running', 'Cycling', 'Swimming', 'Battle Ropes', 'Sledgehammer Slams']
    }
  }
}

// Show plan if no errors
function toggleForm() {
  if (data.errors.length === 0) {
    data.show = true
  } else {
    data.show = false
  }
}
</script>

<template>
  <!-- Customize Workout Plan Section -->
  <div class="container center light-grey" style="padding: 128px 16px" id="create-workout-plans">
    <!-- User input form -->
    <form
      class="row-padding"
      style="margin-top: 64px"
      v-if="!data.show"
      @submit.prevent="checkForm(), createWorkoutPlan(), toggleForm()"
    >
      <!-- Call events on form submission -->
      <h3>LET US HELP CHOOSE THE BEST DIET PLAN FOR YOU</h3>
      <p class="large">PLEASE SELECT FROM THE OPTIONS BELOW</p>
      <div class="row-padding">
        <p class="large">WHAT'S YOUR AIM?</p>
        <p class="medium">I want to,</p>
        <label for="buildStrength">
          <input
            type="radio"
            class="radio margin"
            id="buildStrength"
            name="buildStrength"
            value="Build Strength"
            v-model="data.aim"
          />
          <span>Build Strength</span>
        </label>
        <br />
        <label for="buildMuscle">
          <input
            type="radio"
            class="radio margin"
            id="buildMuscle"
            name="buildMuscle"
            value="Build Muscle"
            v-model="data.aim"
          />
          <span>Build Muscles</span>
        </label>
        <br />
        <label for="buildEndurance">
          <input
            type="radio"
            class="radio margin"
            id="buildEndurance"
            name="buildEndurance"
            value="Build Endurance"
            v-model="data.aim"
          />
          <span>Build Endurance</span>
        </label>
      </div>
      <div class="row-padding">
        <p class="large">WHAT'S YOUR BODY TYPE?</p>
        <div class="third padding-16">
          <label for="ectomorph">
            <img src="/Vectors/b-ecto.png" style="width: 75px" />
            <br />
            <input
              type="radio"
              class="radio margin"
              id="ectomorph"
              name="ectomorph"
              value="Ectomorph"
              v-model="data.bodyType"
            />
            <span class="large">Ectomorph</span>
            <ul style="list-style-type: none; padding-left: 0">
              <li>Relative predominance of linearity and fragility.</li>
              <li>
                Greatest skin surface area relative to body mass causes greater sensory exposure.
              </li>
            </ul>
          </label>
        </div>
        <div class="third padding-16">
          <label for="mesomorph">
            <img src="/Vectors/b-meso.png" style="width: 100px" />
            <br />
            <input
              type="radio"
              class="radio margin"
              id="mesomorph"
              name="mesomorph"
              value="Mesomorph"
              v-model="data.bodyType"
            />
            <span class="large">Mesomorph</span>
            <ul style="list-style-type: none; padding-left: 0">
              <li>
                Relative predominance of muscle, bone, and connective tissue that dominates bodily
                economy.
              </li>
              <li>Heavy, hard, and rectangular in outline.</li>
            </ul>
          </label>
        </div>
        <div class="third padding-16">
          <label for="endomorph">
            <img src="/Vectors/b-endo.png" style="width: 100px" />
            <br />
            <input
              type="radio"
              class="radio margin"
              id="endomorph"
              name="endomorph"
              value="Endomorph"
              v-model="data.bodyType"
            />
            <span class="large">Endomorph</span>
            <ul style="list-style-type: none; padding-left: 0">
              <li>
                Relative predominance of soft roundness throughout various regions of the body.
              </li>
              <li>Digestive viscera are more massive and relatively dominate bodily economy.</li>
            </ul>
          </label>
        </div>
      </div>
      <div class="row-padding" style="margin-top: 64px">
        <button type="submit" class="button black padding-large large margin-top hover-light-green">
          FIND
        </button>
      </div>
    </form>
    <!-- Show Empty Fields -->
    <div v-if="data.errors.length" class="row-padding" style="margin-top: 64px">
      <b>Please input the following field(s):</b>
      <ul style="list-style-type: none; padding-left: 0">
        <li v-for="error in data.errors" :key="error">{{ error }}</li>
      </ul>
    </div>

    <!-- Personalized Workout Plan -->
    <div v-if="data.show" class="container center light-gray" style="padding: 128px 16px">
      <div class="row-padding">
        <div class="col section center padding-16">
          <h3>Here is your personalized workout plan.</h3>
          <p><b>Aim:</b> {{ data.aim }}</p>
          <p><b>Body Type:</b> {{ data.bodyType }}</p>
          <p class="small text-grey">
            Always warm up before attempting any strength training exercises. Failure to warm up can
            cause injuries to cold muscles. Remember to use proper lifting procedures for safety
            sake.
            <br />
            In addition, to avoid harm, make sure that you have a spotter with you if you are using
            free weights.
          </p>
          <!-- Workout Plan Days -->
          <div
            class="col section center padding-16"
            v-for="(workouts, index) in [
              ['Chest Shoulders & Triceps', data.day1],
              ['Back and Biceps', data.day2],
              ['Legs and Core', data.day3],
              ['Crossfit / Cardio', data.day4],
            ]"
            :key="index"
          >
            <ul class="ul white" style="list-style-type: none; padding-left: 0">
              <li class="xlarge padding-32 grey">
                <h2>Day {{ index + 1 }}</h2>
                <h3>{{ workouts[0] }}</h3>
              </li>
              <li class="padding-16 gray">
                <p class="medium">{{ data.sets }} SETS</p>
                <p class="medium">{{ data.reps }} REPS</p>
                <p class="medium">{{ data.rest }} REST</p>
              </li>
              <li class="padding-16" v-for="workout in workouts[1]" :key="workout">
                {{ workout }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p class="large">Created on {{ data.date }} at {{ data.time }}</p>
      <h3 class="wide">by <i class="fas fa-dumbbell large margin-right"></i><b>APOLLOFIT</b></h3>
      <p class="large">Not happy with the result?</p>
      <button
        class="button black padding-large large margin-top hover-light-green"
        style="margin: auto"
        @click="data.show = false"
      >
        TRY AGAIN<i class="fa fa-refresh margin-left" aria-hidden="true"></i>
      </button>
      <p class="large">Boost your progress with the help of a diet plan.</p>
      <RouterLink to="/diet-plans"
        ><button
          class="button black padding-large large margin-top hover-light-green"
          style="margin: auto"
          onClick="window.location.reload();"
        >
          TRY NOW<i class="fa fa-arrow-right margin-left" aria-hidden="true"></i></button
      ></RouterLink>
    </div>
  </div>
</template>
