<script setup>
import { ref, computed } from 'vue'

const dietPlanList = [
  {
    id: 1,
    title: 'WEEKLY MEAL PLAN',
    img: '/ella-olsson-lMcRyBx4G50-unsplash.jpg',
    stars: '★★★★★',
    mon: {
      breakfast: 'Eggs & Fruit',
      lunch: 'Chicken Fajita Salad',
      dinner: 'Crockpot Mexican Chicken',
      snack1: 'Chocolate Almond Shakeology w/ 1/2 banana',
      snack2: 'Orange String Cheese',
      snack3: 'Veggies & Hummus',
    },
    tue: {
      breakfast: 'Steel-cut Oats w/ Berries & Pecans',
      lunch: 'Meatloaf',
      dinner: 'Ground Turkey Lettuce Wraps',
      snack1: 'Chocolate Mint Shakeology',
      snack2: 'Veggies & Hummus',
      snack3: 'Cottage Cheese & Veggies',
    },
    wed: {
      breakfast: 'Breakfast Sandwitch Ham & Egg on Thinwich',
      lunch: 'Rice Cake w/ Turkey & Avacado',
      dinner: 'Loaded Baked Sweet Potato',
      snack1: 'Chocolate Almond Shakeology w/ 1/2 banana',
      snack2: 'Celery w/ Almond Butter',
      snack3: 'Veggies & Hummus',
    },
    thu: {
      breakfast: 'Steel-cut Oats w/ Berries & Pecans',
      lunch: 'Meatloaf',
      dinner: 'Chicken Enchilada Soup',
      snack1: 'Chocolate Mint Shakeology',
      snack2: 'Veggies & Hummus',
      snack3: 'Cottage Cheese & Veggies',
    },
    fri: {
      breakfast: 'Eggs & Fruit',
      lunch: 'Orange & String Cheese',
      dinner: 'Spaghetti',
      snack1: 'Chocolate Almond Shakeology w/ 1/2 banana',
      snack2: 'Chocolate Almond Shakeology w/ 1/2 banana',
      snack3: 'Orange String Cheese',
    },
    sat: {
      breakfast: 'Steel-cut Oats w/ Berries & Pecans',
      lunch: 'Rice Cake w/ Turkey & Avacado',
      dinner: 'Chicken Tostada Bar',
      snack1: 'Chocolate Mint Shakeology',
      snack2: 'Celery w/ Almond Butter',
      snack3: 'Apple w/ Almond Butter',
    },
    sun: {
      breakfast: 'Steel-cut Oats w/ Berries & Pecans',
      lunch: 'Chef Salad',
      dinner: 'Pot Roast & Vegetables',
      snack1: 'Chocolate Mint Shakeology',
      snack2: 'Veggies & Hummus',
      snack3: 'Cottage Cheese & Veggies',
    },
  },
  {
    id: 2,
    title: 'WEIGHT LOSS DIET PLAN',
    img: '/birgith-roosipuu-hom5fPULf4I-unsplash.jpg',
    stars: '★★★★★',
    mon: {
      breakfast: '3 hard boiled egs, 1 Grapefruit',
      lunch: '2 hard boiled eggs, 1 Banana or 1 Toast',
      dinner: '3 hard boiled eggs, Vegetable Salad',
      snack1: '',
      snack2: '',
      snack3: '',
    },
    tue: {
      breakfast: '1 hard boiled egg, 1 Grapefruit',
      lunch: '2 hard boiled eggs. 1 grapefruit, 1 banana or 1 toast',
      dinner: 'Beef steak 200g, Vegetable Slad',
      snack1: '',
      snack2: '',
      snack3: '',
    },
    wed: {
      breakfast: '1 hard boiled egg, 1 grapefruit',
      lunch: 'Vegetable salad, 1 grapefruit, 1 banana or 1 toast',
      dinner: '1 hard boiled egg, 1 chicken breast',
      snack1: '',
      snack2: '',
      snack3: '',
    },
    thu: {
      breakfast: '1 hard boiled egg, 1 grapefruit',
      lunch: 'Vegetable salad, 1 grapefruit, 1 banana or 1 toast',
      dinner: '3 hard boiled eggd boiled spinich',
      snack1: '',
      snack2: '',
      snack3: '',
    },
    fri: {
      breakfast: '1 hard boiled egg, 1 grapefruit',
      lunch: '3 hard boiled eggs, boiled spinich, 1 banana or 1 toast',
      dinner: '1 piece of white fish, vegetable salad, 1 banana or 1 toast',
      snack1: '',
      snack2: '',
      snack3: '',
    },
    sat: {
      breakfast: '2 hard boiled eggs, 1 grapefruit',
      lunch: 'Fruit salad',
      dinner: 'Beef steak 200 g , Celery Tomato',
      snack1: '',
      snack2: '',
      snack3: '',
    },
    sun: {
      breakfast: '2 hard boiled eggs, 1 grapefruit',
      lunch: '1 chicken breast, Celery tomato, 1 grapefruit',
      dinner: '1 chicken breast, tomato, 1 grapefruit, Steamed Cabbage',
      snack1: '',
      snack2: '',
      snack3: '',
    },
  },
  {
    id: 3,
    title: 'WEIGHT GAIN DIET PLAN',
    img: '/agto-nugroho-8clQnz1iu68-unsplash.jpg',
    stars: '★★★★★',
    mon: {
      breakfast: 'Zucchini-Feta Pasta, Spinch Salad',
      lunch: 'Whole Grain Bagels w/Turkey Slics & Cult. Cream Cheese, Fresh Cherries',
      dinner: 'Fruit-on-the-Bottom Yogurt w/Peach Preserves, Boiled Eggs',
      snack1: 'Chocolate Almond Shakeology w/ 1/2 banana',
      snack2: 'Orange String Cheese',
      snack3: 'Veggies & Hummus',
    },
    tue: {
      breakfast: 'Grilled Herb Chicken, Cherry Caprese, Wild Rice',
      lunch: 'Tuna Salad w/Grain-Free Crackers, Grapes',
      dinner: 'Spelt English Muffin Egg & Cheese Sandwich, Fresh Diced Peaches',
      snack1: 'Chocolate Mint Shakeology',
      snack2: 'Veggies & Hummus',
      snack3: 'Cottage Cheese & Veggies',
    },
    wed: {
      breakfast: 'Fully-Loaded Baked Potatoes w/Chives, Sour Cream',
      lunch: 'Nut Butter Banana & Raw Honey Wrap, Vanilla Yogurt w/Peaches',
      dinner: 'Soaked Oatmeal w/Fresh Raspberries & Raw Honey',
      snack1: 'Chocolate Almond Shakeology w/ 1/2 banana',
      snack2: 'Celery w/ Almond Butter',
      snack3: 'Veggies & Hummus',
    },
    thu: {
      breakfast: 'Grilled Chicken Quesadilla Sandwiches, Refried Beans',
      lunch: 'Avocado Egg Salad Sandwiches',
      dinner: 'Lemonberry Muffins, Scrambled Eggs, Fruit Smoothie',
      snack1: 'Chocolate Mint Shakeology',
      snack2: 'Veggies & Hummus',
      snack3: 'Cottage Cheese & Veggies',
    },
    fri: {
      breakfast: 'Seared Scallops, Saffron Rice w/Peas',
      lunch: 'Refried 5-Layer Bean Dip w/Homemade Torillas',
      dinner: 'Spaghetti',
      snack1: 'Homemade Granala with Fresh Berries & Almond Milk',
      snack2: 'Chocolate Almond Shakeology w/ 1/2 banana',
      snack3: 'Orange String Cheese',
    },
    sat: {
      breakfast: 'Carrot-Cheddar Sandwiches, Tomato Soup, Cultered Pickles',
      lunch: 'Pizza Bagels, Raw Veggies w/Ranch Dip',
      dinner: 'Strawberry Shortcakes, Scrambled Eggs',
      snack1: 'Chocolate Mint Shakeology',
      snack2: 'Celery w/ Almond Butter',
      snack3: 'Apple w/ Almond Butter',
    },
    sun: {
      breakfast: 'Grilled Steak, Mashed Potatoes, Steamed Asparagus',
      lunch: 'Grilled Cheese Sandwishes w/Leftover Tomato Soup',
      dinner: 'Cheesy-Basil, Shortcake Biscuits w/Peach Preserves',
      snack1: 'Chocolate Mint Shakeology',
      snack2: 'Veggies & Hummus',
      snack3: 'Cottage Cheese & Veggies',
    },
  },
  // more can be added...
]

// Define `searchTextDietPlan` as a `ref` for reactivity
const searchTextDietPlan = ref('')

// Use `computed` to create a reactive version of `filteredDietPlanList`
const filteredDietPlanList = computed(() => {
  return dietPlanList.filter((plan) => {
    return plan.title.toLowerCase().includes(searchTextDietPlan.value.toLowerCase())
  })
})
</script>

<template>
  <div class="center">
    <h3>Search Over 100+ Diet Plans</h3>
    <div class="padding-16">
      <input
        type="text"
        class="searchinput"
        placeholder="Search Diet Plans"
        v-model.trim="searchTextDietPlan"
      />
    </div>
    <div v-if="searchTextDietPlan && !(filteredDietPlanList.length == 0)">
      <span>Showing results for:</span
      ><span class="large"
        ><b> {{ searchTextDietPlan }} </b></span
      >
      <br />
      <span>Total:</span
      ><span class="large"
        ><b> {{ filteredDietPlanList.length }} </b></span
      ><span>result(s) found.</span>
    </div>
    <div v-if="filteredDietPlanList.length == 0">
      <p>No results containing all your search terms were found.</p>
      <p>
        Your search - <b>{{ searchTextDietPlan }}</b> - did not match any diet plans.
      </p>
      <p>Suggestions:</p>
      <ul>
        <li>Make sure that all words are spelled correctly.</li>
        <li>Try different keywords.</li>
        <li>Try more general keywords.</li>
      </ul>
    </div>
    <div class="row-padding" style="margin-top: 64px">
      <template v-for="plan in filteredDietPlanList" :key="plan.id">
        <div class="third section center">
          <ul class="ul white hover-shadow pale-green">
            <li class="xlarge padding-32">
              <img style="width: 100%" v-bind:src="plan.img" />
              <h2>{{ plan.title }}</h2>
              <h3>{{ plan.stars }}</h3>
            </li>
            <li class="padding-16">
              <img src="https://img.icons8.com/ios/50/000000/monday.png" />
              <p><b>Breakfast: </b>{{ plan.mon.breakfast }}</p>
              <p v-show="plan.mon.snack1"><b>Snack: </b>{{ plan.mon.snack1 }}</p>
              <p><b>Lunch: </b>{{ plan.mon.lunch }}</p>
              <p v-show="plan.mon.snack2"><b>Snack: </b>{{ plan.mon.snack2 }}</p>
              <p><b>Dinner: </b>{{ plan.mon.dinner }}</p>
              <p v-show="plan.mon.snack3"><b>Snack: </b>{{ plan.mon.snack3 }}</p>
            </li>
            <li class="padding-16">
              <img src="https://img.icons8.com/ios/50/000000/tuesday.png" />
              <p><b>Breakfast: </b>{{ plan.tue.breakfast }}</p>
              <p v-show="plan.tue.snack1"><b>Snack: </b>{{ plan.tue.snack1 }}</p>
              <p><b>Lunch: </b>{{ plan.tue.lunch }}</p>
              <p v-show="plan.tue.snack2"><b>Snack: </b>{{ plan.tue.snack2 }}</p>
              <p><b>Dinner: </b>{{ plan.tue.dinner }}</p>
              <p v-show="plan.tue.snack3"><b>Snack: </b>{{ plan.tue.snack3 }}</p>
            </li>
            <li class="padding-16">
              <img src="https://img.icons8.com/ios/50/000000/wednesday.png" />
              <p><b>Breakfast: </b>{{ plan.wed.breakfast }}</p>
              <p v-show="plan.wed.snack1"><b>Snack: </b>{{ plan.wed.snack1 }}</p>
              <p><b>Lunch: </b>{{ plan.wed.lunch }}</p>
              <p v-show="plan.wed.snack2"><b>Snack: </b>{{ plan.wed.snack2 }}</p>
              <p><b>Dinner: </b>{{ plan.wed.dinner }}</p>
              <p v-show="plan.wed.snack3"><b>Snack: </b>{{ plan.wed.snack3 }}</p>
            </li>
            <li class="padding-16">
              <img src="https://img.icons8.com/ios/50/000000/thursday.png" />
              <p><b>Breakfast: </b>{{ plan.thu.breakfast }}</p>
              <p v-show="plan.thu.snack1"><b>Snack: </b>{{ plan.thu.snack1 }}</p>
              <p><b>Lunch: </b>{{ plan.thu.lunch }}</p>
              <p v-show="plan.thu.snack2"><b>Snack: </b>{{ plan.thu.snack2 }}</p>
              <p><b>Dinner: </b>{{ plan.thu.dinner }}</p>
              <p v-show="plan.thu.snack3"><b>Snack: </b>{{ plan.thu.snack3 }}</p>
            </li>
            <li class="padding-16">
              <img src="https://img.icons8.com/ios/50/000000/friday.png" />
              <p><b>Breakfast: </b>{{ plan.fri.breakfast }}</p>
              <p v-show="plan.fri.snack1"><b>Snack: </b>{{ plan.fri.snack1 }}</p>
              <p><b>Lunch: </b>{{ plan.fri.lunch }}</p>
              <p v-show="plan.fri.snack2"><b>Snack: </b>{{ plan.fri.snack2 }}</p>
              <p><b>Dinner: </b>{{ plan.fri.dinner }}</p>
              <p v-show="plan.fri.snack3"><b>Snack: </b>{{ plan.fri.snack3 }}</p>
            </li>
            <li class="padding-16">
              <img src="https://img.icons8.com/ios/50/000000/saturday.png" />
              <p><b>Breakfast: </b>{{ plan.sat.breakfast }}</p>
              <p v-show="plan.sat.snack1"><b>Snack: </b>{{ plan.sat.snack1 }}</p>
              <p><b>Lunch: </b>{{ plan.sat.lunch }}</p>
              <p v-show="plan.sat.snack2"><b>Snack: </b>{{ plan.sat.snack2 }}</p>
              <p><b>Dinner: </b>{{ plan.sat.dinner }}</p>
              <p v-show="plan.sat.snack3"><b>Snack: </b>{{ plan.sat.snack3 }}</p>
            </li>
            <li class="padding-16">
              <img src="https://img.icons8.com/ios/50/000000/sunday.png" />
              <p><b>Breakfast: </b>{{ plan.sun.breakfast }}</p>
              <p v-show="plan.sun.snack1"><b>Snack: </b>{{ plan.sun.snack1 }}</p>
              <p><b>Lunch: </b>{{ plan.sun.lunch }}</p>
              <p v-show="plan.sun.snack2"><b>Snack: </b>{{ plan.sun.snack2 }}</p>
              <p><b>Dinner: </b>{{ plan.sun.dinner }}</p>
              <p v-show="plan.sun.snack3"><b>Snack: </b>{{ plan.sun.snack3 }}</p>
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
