<script setup>
import { reactive } from 'vue'

const data = reactive({
  errors: [],
  show: false,
  date: '',
  time: '',
  userName: null,
  gender: null,
  age: null,
  height: null,
  weight: null,
  waist: null,
  neck: null,
  showHip: false,
  hip: null,
  lifestyle: null,
  lifestyleOptions: [
    { option: 'Sedentary lifestyle', description: 'Little or no exercise' },
    { option: 'Lightly active', description: 'Light exercise/sports 1-3 days/week' },
    { option: 'Moderately active', description: 'Medium exercise/sports 3-5 days/week' },
    { option: 'Active lifestyle', description: 'Hard exercise/sports 6-7 days a week' },
    {
      option: 'Very active lifestyle',
      description: 'Intense exercise/sports, physical job or twice/day training',
    },
  ],
  bmi: 0,
  bmr: 0,
  totalDailyCalorieNeeds: 0,
  bodyFat: 0,
  bmiCategorie: null,
  monday: {
    breakfast: [],
    lunch: [],
    dinner: [],
    snack: [],
  },
  tuesday: {
    breakfast: [],
    lunch: [],
    dinner: [],
    snack: [],
  },
  wednesday: {
    breakfast: [],
    lunch: [],
    dinner: [],
    snack: [],
  },
  thursday: {
    breakfast: [],
    lunch: [],
    dinner: [],
    snack: [],
  },
  friday: {
    breakfast: [],
    lunch: [],
    dinner: [],
    snack: [],
  },
  saturday: {
    breakfast: [],
    lunch: [],
    dinner: [],
    snack: [],
  },
  sunday: {
    breakfast: [],
    lunch: [],
    dinner: [],
    snack: [],
  },
})

function computeBMI() {
  data.bmi = (data.weight / ((data.height / 100) * (data.height / 100))).toFixed(1)
  if (data.bmi < 18.5 || data.bmi == 18.5) {
    data.bmiCategorie = 'Underweight'
  }
  if ((18.5 < data.bmi && data.bmi < 24.9) || data.bmi == 24.9) {
    data.bmiCategorie = 'Normal weight'
  }
  if ((24.9 < data.bmi && data.bmi < 29.9) || data.bmi == 29.9) {
    data.bmiCategorie = 'Overweight'
  }
  if (data.bmi > 30) {
    data.bmiCategorie = 'Obesity'
  }
  return [data.bmi, data.bmiCategorie]
}

function computeBMR() {
  if (data.gender == 'Male') {
    data.bmr = (10 * data.weight + 6.25 * data.height - 5 * data.age + 5).toFixed()
  }
  if (data.gender == 'Female') {
    data.bmr = (10 * data.weight + 6.25 * data.height - 5 * data.age - 161).toFixed()
  }
  return data.bmr
}

function computeTotalDailyCalorieNeeds() {
  if (data.lifestyle == 'Sedentary lifestyle') {
    data.totalDailyCalorieNeeds = (data.bmr * 1.2).toFixed()
  }
  if (data.lifestyle == 'Lightly active') {
    data.totalDailyCalorieNeeds = (data.bmr * 1.375).toFixed()
  }
  if (data.lifestyle == 'Moderately active') {
    data.totalDailyCalorieNeeds = (data.bmr * 1.55).toFixed()
  }
  if (data.lifestyle == 'Active lifestyle') {
    data.totalDailyCalorieNeeds = (data.bmr * 1.725).toFixed()
  }
  if (data.lifestyle == 'Very active lifestyle') {
    data.totalDailyCalorieNeeds = (data.bmr * 1.9).toFixed()
  }
  return data.totalDailyCalorieNeeds
}

function computeBodyFat() {
  // if user selects male calculate their bodyfat percentage using this formula
  if (data.gender == 'Male') {
    data.bodyFat = (
      86.01 * Math.log10(data.waist / 2.54 - data.neck / 2.54) -
      70.041 * Math.log10(data.height / 2.54) +
      36.76
    ).toFixed()
  }
  // if user selects female calculate their bodyfat percentage using this formula
  if (data.gender == 'Female') {
    data.bodyFat = (
      163.205 * Math.log10(data.waist / 2.54 + data.hip / 2.54 - data.neck / 2.54) -
      97.684 * Math.log10(data.height / 2.54) -
      78.387
    ).toFixed()
  }
  return data.bodyFat
}

function checkForm() {
  data.errors = []

  if (!data.age) data.errors.push('Age required.')
  if (!data.gender) data.errors.push('Select your gender.')
  if (!data.height) data.errors.push('Enter your height.')
  if (!data.weight) data.errors.push('Enter your weight.')
  if (!data.neck) data.errors.push('Enter your neck measurment.')
  if (!data.waist) data.errors.push('Enter your waist measurment.')
  if (!data.lifestyle) data.errors.push('Select your lifestyle.')
  if (data.gender == 'Female' && !data.hip)
    data.errors.push('Enter your hip measurment.(Only for women)')
}

function createDietPlan() {
  data.date = new Date().toLocaleDateString()
  data.time = new Date().toLocaleTimeString()
  if (data.bmiCategorie == 'Underweight') {
    if (data.lifestyle == 'Sedentary lifestyle') {
      // if user's BMI categorie is undewrweight and slects Sedentary lifestyle as his/her lifestyle they will get following meals in their diet plan
      data.monday.breakfast = [
        'Ham & cheese omlet prepared in 1 Tbs olive oil (2 eggs, 1oz. ham, 1/4 c cheese)',
        'Cranberry juice (1 c)',
        '413 cal, 18 gm pro',
      ]
      data.monday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)', 'Potato salad (1/2 c)']
      data.monday.dinner = [
        'Spagetti with meatballs (1-1.5 c)',
        'Garlic bread (1 slice)',
        'Fruit (1/2 c)',
        'Whole milk (1 c)',
        '615 cal, 26 gm pro',
      ]
      data.monday.snack = ['Greek yogurt parfalt (1 c)', '126 cal, 5 gm pro']

      data.tuesday.breakfast = [
        'Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)',
        'Greek yogurt with fruit (1 single serve container)',
        'Whole milk (1 c)',
        '644 cal, 22 gm pro',
      ]
      data.tuesday.lunch = [
        'Ham salad sandwich (1/2 c on 2 pc bread)',
        'Edamame (1/2 c)',
        'Whole milk (1 c)',
        '710 cal, 35 gm pro',
      ]
      data.tuesday.dinner = [
        'Lasagna (1/2 c)',
        'Roll (1) with butter (1 Tbs)',
        'Whole milk (1 c)',
        '608 cal, 24 gm pro',
      ]
      data.tuesday.snack = [
        'Cottage cheese (1/2 c)',
        'Canned fruit (1 snack pack)',
        '180 cal, 11 gm pro',
      ]

      data.wednesday.breakfast = [
        'Srambled eggs (1 large)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Fruit juice (1/2 c)',
        '284 cal, 10 gm pro',
      ]
      data.wednesday.lunch = [
        'Cheseburger with bun (1 sand)',
        'Fries (1 small serving)',
        'Chocolate milk shake (1 c)',
        '1021 cal, 40 gm pro',
      ]
      data.wednesday.dinner = [
        'Salmon (1 sm fillet) prepared in butter (1 Tbs)',
        'Rice (1/2 c)',
        'Broccoli (1/2 c)',
        'Whole milk (1 c)',
        '595 cal, 55 gm pro',
      ]
      data.wednesday.snack = ['Banana (1) with peanut butter (2 Tbs)', '295 cal, 8 gm pro']

      data.thursday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.thursday.lunch = [
        'Tuna salad sandwich (1/2 c on 2 pc bread)',
        'Baby carrots (5)',
        'Whole milk (1 c)',
        '627 cal, 38 gm pro',
      ]
      data.thursday.dinner = [
        'Ground beef tacos (1 taco)',
        'Refried beans (1/2 c)',
        'Rice (1/2 c)',
        'Whole milk (1 c)',
        '579 cal, 30 gm pro',
      ]
      data.thursday.snack = [
        'Banana (1) with peanut butter (2 Tbs)',
        'Whole milk (1 c)',
        '445 cal, 16 gm pro',
      ]

      data.friday.breakfast = [
        'English muffin (1) with nut butter (2 Tbs)',
        'Whole milk (1 c)',
        '540 cal, 22 gm pro',
      ]
      data.friday.lunch = [
        'Chicken & cheese pita (1 pita) with avocado (2 Tbs)',
        'Cherry tomatoes (1 c)',
        'Whole milk (1 c)',
        '555 cal, 32 gm pro',
      ]
      data.friday.dinner = [
        'Fettuccine alfredo (3/4 cup prepared) with shrimp (1/2 c) & broccoli (1/2 c)',
        'Garlic bread (1 slice)',
        'Whole milk (1 c)',
        '744 cal, 48 gm pro',
      ]
      data.friday.snack = [
        'String cheese (1 stick)',
        'Crackers (5)',
        'Whole milk (1 c)',
        '280 cal,14 gm pro',
      ]

      data.saturday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.saturday.lunch = [
        'Chicken stir fry (1 c) with veggies (1/2 c)',
        'Pineapple (1/2 c)',
        'Whole milk (1 c)',
        '482 cal, 24 gm pro',
      ]
      data.saturday.dinner = [
        'Meat with potatoes & gravy (1 c total meal)',
        'Cooked carrots (1/2 c)',
        'Roll (1) with butter (1 Tbs)',
        'Whole milk (1 c)',
        '593 cal, 26 gm pro',
      ]
      data.saturday.snack = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]

      data.sunday.breakfast = [
        'Hard-boilded egg (1 large)',
        'Fruit (1/2 c)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Whole milk (1 c)',
        '422 cal, 18 gm pro',
      ]
      data.sunday.lunch = [
        'Tomato soup (1 c) made with milk',
        'Grilled cheese (1/2 sandwich)',
        'Whole milk (1 c)',
        'Whole milk (1 c)',
        '624 cal, 28 gm pro',
      ]
      data.sunday.dinner = [
        'Meatloaf with gravy (5 oz)',
        'Green beans (1/2 c)',
        'Bread (1 slice) & butter (2 Tbs)',
        'Whole milk (1 c)',
        '490 cal, 31 gm pro',
      ]
      data.sunday.snack = ['Cookies (3)', 'Whole milk (1 c)', '375 cal, 10 gm pro']
    }
    if (data.lifestyle == 'Lightly active') {
      // if user's BMI categorie is undewrweight and slects Lightly active as his/her lifestyle they will get following meals in their diet plan
      data.monday.breakfast = [
        'Tomato soup (1 c) made with milk',
        'Grilled cheese (1/2 sandwich)',
        'Whole milk (1 c)',
        'Whole milk (1 c)',
        '624 cal, 28 gm pro',
      ]
      data.monday.lunch = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]
      data.monday.dinner = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.monday.snack = ['Cookies (3)', 'Whole milk (1 c)', '375 cal, 10 gm pro']

      data.tuesday.breakfast = [
        'English muffin (1) with nut butter (2 Tbs)',
        'Whole milk (1 c)',
        '540 cal, 22 gm pro',
      ]
      data.tuesday.lunch = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.tuesday.dinner = [
        'Tuna salad sandwich (1/2 c on 2 pc bread)',
        'Baby carrots (5)',
        'Whole milk (1 c)',
        '627 cal, 38 gm pro',
      ]
      data.tuesday.snack = [
        'String cheese (1 stick)',
        'Crackers (5)',
        'Whole milk (1 c)',
        '280 cal,14 gm pro',
      ]

      data.wednesday.breakfast = [
        'Chicken & cheese pita (1 pita) with avocado (2 Tbs)',
        'Cherry tomatoes (1 c)',
        'Whole milk (1 c)',
        '555 cal, 32 gm pro',
      ]
      data.wednesday.lunch = [
        'Salmon (1 sm fillet) prepared in butter (1 Tbs)',
        'Rice (1/2 c)',
        'Broccoli (1/2 c)',
        'Whole milk (1 c)',
        '595 cal, 55 gm pro',
      ]
      data.wednesday.dinner = [
        'Tuna salad sandwich (1/2 c on 2 pc bread)',
        'Baby carrots (5)',
        'Whole milk (1 c)',
        '627 cal, 38 gm pro',
      ]
      data.wednesday.snack = ['Greek yogurt parfalt (1 c)', '126 cal, 5 gm pro']

      data.thursday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.thursday.lunch = [
        'Salmon (1 sm fillet) prepared in butter (1 Tbs)',
        'Rice (1/2 c)',
        'Broccoli (1/2 c)',
        'Whole milk (1 c)',
        '595 cal, 55 gm pro',
      ]
      data.thursday.dinner = ['Barbeque (2 Tbs) chicken (3.5 oz)', 'Potato salad (1/2 c)']
      data.thursday.snack = ['Banana (1) with peanut butter (2 Tbs)', '295 cal, 8 gm pro']

      data.friday.breakfast = [
        'Ham salad sandwich (1/2 c on 2 pc bread)',
        'Edamame (1/2 c)',
        'Whole milk (1 c)',
        '710 cal, 35 gm pro',
      ]
      data.friday.lunch = [
        'Tomato soup (1 c) made with milk',
        'Grilled cheese (1/2 sandwich)',
        'Whole milk (1 c)',
        'Whole milk (1 c)',
        '624 cal, 28 gm pro',
      ]
      data.friday.dinner = [
        'Meatloaf with gravy (5 oz)',
        'Green beans (1/2 c)',
        'Bread (1 slice) & butter (2 Tbs)',
        'Whole milk (1 c)',
        '490 cal, 31 gm pro',
      ]
      data.friday.snack = ['Cookies (3)', 'Whole milk (1 c)', '375 cal, 10 gm pro']

      data.saturday.breakfast = [
        'Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)',
        'Greek yogurt with fruit (1 single serve container)',
        'Whole milk (1 c)',
        '644 cal, 22 gm pro',
      ]
      data.saturday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)', 'Potato salad (1/2 c)']
      data.saturday.dinner = [
        'Spagetti with meatballs (1-1.5 c)',
        'Garlic bread (1 slice)',
        'Fruit (1/2 c)',
        'Whole milk (1 c)',
        '615 cal, 26 gm pro',
      ]
      data.saturday.snack = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]

      data.sunday.breakfast = [
        'Srambled eggs (1 large)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Fruit juice (1/2 c)',
        '284 cal, 10 gm pro',
      ]
      data.sunday.lunch = [
        'Spagetti with meatballs (1-1.5 c)',
        'Garlic bread (1 slice)',
        'Fruit (1/2 c)',
        'Whole milk (1 c)',
        '615 cal, 26 gm pro',
      ]
      data.sunday.dinner = [
        'Meatloaf with gravy (5 oz)',
        'Green beans (1/2 c)',
        'Bread (1 slice) & butter (2 Tbs)',
        'Whole milk (1 c)',
        '490 cal, 31 gm pro',
      ]
      data.sunday.snack = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]
    }
    if (data.lifestyle == 'Moderately active') {
      // if user's BMI categorie is undewrweight and slects Mederately active as his/her lifestyle they will get following meals in their diet plan
      data.monday.breakfast = [
        'Ham & cheese omlet prepared in 1 Tbs olive oil (2 eggs, 1oz. ham, 1/4 c cheese)',
        'Cranberry juice (1 c)',
        '413 cal, 18 gm pro',
      ]
      data.monday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)', 'Potato salad (1/2 c)']
      data.monday.dinner = [
        'Spagetti with meatballs (1-1.5 c)',
        'Garlic bread (1 slice)',
        'Fruit (1/2 c)',
        'Whole milk (1 c)',
        '615 cal, 26 gm pro',
      ]
      data.monday.snack = ['Greek yogurt parfalt (1 c)', '126 cal, 5 gm pro']

      data.tuesday.breakfast = [
        'Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)',
        'Greek yogurt with fruit (1 single serve container)',
        'Whole milk (1 c)',
        '644 cal, 22 gm pro',
      ]
      data.tuesday.lunch = [
        'Ham salad sandwich (1/2 c on 2 pc bread)',
        'Edamame (1/2 c)',
        'Whole milk (1 c)',
        '710 cal, 35 gm pro',
      ]
      data.tuesday.dinner = [
        'Lasagna (1/2 c)',
        'Roll (1) with butter (1 Tbs)',
        'Whole milk (1 c)',
        '608 cal, 24 gm pro',
      ]
      data.tuesday.snack = [
        'Cottage cheese (1/2 c)',
        'Canned fruit (1 snack pack)',
        '180 cal, 11 gm pro',
      ]

      data.wednesday.breakfast = [
        'Srambled eggs (1 large)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Fruit juice (1/2 c)',
        '284 cal, 10 gm pro',
      ]
      data.wednesday.lunch = [
        'Cheseburger with bun (1 sand)',
        'Fries (1 small serving)',
        'Chocolate milk shake (1 c)',
        '1021 cal, 40 gm pro',
      ]
      data.wednesday.dinner = [
        'Salmon (1 sm fillet) prepared in butter (1 Tbs)',
        'Rice (1/2 c)',
        'Broccoli (1/2 c)',
        'Whole milk (1 c)',
        '595 cal, 55 gm pro',
      ]
      data.wednesday.snack = ['Banana (1) with peanut butter (2 Tbs)', '295 cal, 8 gm pro']

      data.thursday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.thursday.lunch = [
        'Tuna salad sandwich (1/2 c on 2 pc bread)',
        'Baby carrots (5)',
        'Whole milk (1 c)',
        '627 cal, 38 gm pro',
      ]
      data.thursday.dinner = [
        'Ground beef tacos (1 taco)',
        'Refried beans (1/2 c)',
        'Rice (1/2 c)',
        'Whole milk (1 c)',
        '579 cal, 30 gm pro',
      ]
      data.thursday.snack = [
        'Banana (1) with peanut butter (2 Tbs)',
        'Whole milk (1 c)',
        '445 cal, 16 gm pro',
      ]

      data.friday.breakfast = [
        'English muffin (1) with nut butter (2 Tbs)',
        'Whole milk (1 c)',
        '540 cal, 22 gm pro',
      ]
      data.friday.lunch = [
        'Chicken & cheese pita (1 pita) with avocado (2 Tbs)',
        'Cherry tomatoes (1 c)',
        'Whole milk (1 c)',
        '555 cal, 32 gm pro',
      ]
      data.friday.dinner = [
        'Fettuccine alfredo (3/4 cup prepared) with shrimp (1/2 c) & broccoli (1/2 c)',
        'Garlic bread (1 slice)',
        'Whole milk (1 c)',
        '744 cal, 48 gm pro',
      ]
      data.friday.snack = [
        'String cheese (1 stick)',
        'Crackers (5)',
        'Whole milk (1 c)',
        '280 cal,14 gm pro',
      ]

      data.saturday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.saturday.lunch = [
        'Chicken stir fry (1 c) with veggies (1/2 c)',
        'Pineapple (1/2 c)',
        'Whole milk (1 c)',
        '482 cal, 24 gm pro',
      ]
      data.saturday.dinner = [
        'Meat with potatoes & gravy (1 c total meal)',
        'Cooked carrots (1/2 c)',
        'Roll (1) with butter (1 Tbs)',
        'Whole milk (1 c)',
        '593 cal, 26 gm pro',
      ]
      data.saturday.snack = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]

      data.sunday.breakfast = [
        'Hard-boilded egg (1 large)',
        'Fruit (1/2 c)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Whole milk (1 c)',
        '422 cal, 18 gm pro',
      ]
      data.sunday.lunch = [
        'Tomato soup (1 c) made with milk',
        'Grilled cheese (1/2 sandwich)',
        'Whole milk (1 c)',
        'Whole milk (1 c)',
        '624 cal, 28 gm pro',
      ]
      data.sunday.dinner = [
        'Meatloaf with gravy (5 oz)',
        'Green beans (1/2 c)',
        'Bread (1 slice) & butter (2 Tbs)',
        'Whole milk (1 c)',
        '490 cal, 31 gm pro',
      ]
      data.sunday.snack = ['Cookies (3)', 'Whole milk (1 c)', '375 cal, 10 gm pro']
    }
    if (data.lifestyle == 'Active lifestyle') {
      // if user's BMI categorie is undewrweight and slects Active lifestyle as his/her lifestyle they will get following meals in their diet plan
      data.monday.breakfast = [
        'Tomato soup (1 c) made with milk',
        'Grilled cheese (1/2 sandwich)',
        'Whole milk (1 c)',
        'Whole milk (1 c)',
        '624 cal, 28 gm pro',
      ]
      data.monday.lunch = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]
      data.monday.dinner = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.monday.snack = ['Cookies (3)', 'Whole milk (1 c)', '375 cal, 10 gm pro']

      data.tuesday.breakfast = [
        'English muffin (1) with nut butter (2 Tbs)',
        'Whole milk (1 c)',
        '540 cal, 22 gm pro',
      ]
      data.tuesday.lunch = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.tuesday.dinner = [
        'Tuna salad sandwich (1/2 c on 2 pc bread)',
        'Baby carrots (5)',
        'Whole milk (1 c)',
        '627 cal, 38 gm pro',
      ]
      data.tuesday.snack = [
        'String cheese (1 stick)',
        'Crackers (5)',
        'Whole milk (1 c)',
        '280 cal,14 gm pro',
      ]

      data.wednesday.breakfast = [
        'Chicken & cheese pita (1 pita) with avocado (2 Tbs)',
        'Cherry tomatoes (1 c)',
        'Whole milk (1 c)',
        '555 cal, 32 gm pro',
      ]
      data.wednesday.lunch = [
        'Salmon (1 sm fillet) prepared in butter (1 Tbs)',
        'Rice (1/2 c)',
        'Broccoli (1/2 c)',
        'Whole milk (1 c)',
        '595 cal, 55 gm pro',
      ]
      data.wednesday.dinner = [
        'Tuna salad sandwich (1/2 c on 2 pc bread)',
        'Baby carrots (5)',
        'Whole milk (1 c)',
        '627 cal, 38 gm pro',
      ]
      data.wednesday.snack = ['Greek yogurt parfalt (1 c)', '126 cal, 5 gm pro']

      data.thursday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.thursday.lunch = [
        'Salmon (1 sm fillet) prepared in butter (1 Tbs)',
        'Rice (1/2 c)',
        'Broccoli (1/2 c)',
        'Whole milk (1 c)',
        '595 cal, 55 gm pro',
      ]
      data.thursday.dinner = ['Barbeque (2 Tbs) chicken (3.5 oz)', 'Potato salad (1/2 c)']
      data.thursday.snack = ['Banana (1) with peanut butter (2 Tbs)', '295 cal, 8 gm pro']

      data.friday.breakfast = [
        'Ham salad sandwich (1/2 c on 2 pc bread)',
        'Edamame (1/2 c)',
        'Whole milk (1 c)',
        '710 cal, 35 gm pro',
      ]
      data.friday.lunch = [
        'Tomato soup (1 c) made with milk',
        'Grilled cheese (1/2 sandwich)',
        'Whole milk (1 c)',
        'Whole milk (1 c)',
        '624 cal, 28 gm pro',
      ]
      data.friday.dinner = [
        'Meatloaf with gravy (5 oz)',
        'Green beans (1/2 c)',
        'Bread (1 slice) & butter (2 Tbs)',
        'Whole milk (1 c)',
        '490 cal, 31 gm pro',
      ]
      data.friday.snack = ['Cookies (3)', 'Whole milk (1 c)', '375 cal, 10 gm pro']

      data.saturday.breakfast = [
        'Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)',
        'Greek yogurt with fruit (1 single serve container)',
        'Whole milk (1 c)',
        '644 cal, 22 gm pro',
      ]
      data.saturday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)', 'Potato salad (1/2 c)']
      data.saturday.dinner = [
        'Spagetti with meatballs (1-1.5 c)',
        'Garlic bread (1 slice)',
        'Fruit (1/2 c)',
        'Whole milk (1 c)',
        '615 cal, 26 gm pro',
      ]
      data.saturday.snack = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]

      data.sunday.breakfast = [
        'Srambled eggs (1 large)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Fruit juice (1/2 c)',
        '284 cal, 10 gm pro',
      ]
      data.sunday.lunch = [
        'Spagetti with meatballs (1-1.5 c)',
        'Garlic bread (1 slice)',
        'Fruit (1/2 c)',
        'Whole milk (1 c)',
        '615 cal, 26 gm pro',
      ]
      data.sunday.dinner = [
        'Meatloaf with gravy (5 oz)',
        'Green beans (1/2 c)',
        'Bread (1 slice) & butter (2 Tbs)',
        'Whole milk (1 c)',
        '490 cal, 31 gm pro',
      ]
      data.sunday.snack = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]
    }
    if (data.lifestyle == 'Very active lifestyle') {
      // if user's BMI categorie is undewrweight and slects Very active lifestyle as his/her lifestyle they will get following meals in their diet plan
      data.monday.breakfast = [
        'Ham & cheese omlet prepared in 1 Tbs olive oil (2 eggs, 1oz. ham, 1/4 c cheese)',
        'Cranberry juice (1 c)',
        '413 cal, 18 gm pro',
      ]
      data.monday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)', 'Potato salad (1/2 c)']
      data.monday.dinner = [
        'Spagetti with meatballs (1-1.5 c)',
        'Garlic bread (1 slice)',
        'Fruit (1/2 c)',
        'Whole milk (1 c)',
        '615 cal, 26 gm pro',
      ]
      data.monday.snack = ['Greek yogurt parfalt (1 c)', '126 cal, 5 gm pro']

      data.tuesday.breakfast = [
        'Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)',
        'Greek yogurt with fruit (1 single serve container)',
        'Whole milk (1 c)',
        '644 cal, 22 gm pro',
      ]
      data.tuesday.lunch = [
        'Ham salad sandwich (1/2 c on 2 pc bread)',
        'Edamame (1/2 c)',
        'Whole milk (1 c)',
        '710 cal, 35 gm pro',
      ]
      data.tuesday.dinner = [
        'Lasagna (1/2 c)',
        'Roll (1) with butter (1 Tbs)',
        'Whole milk (1 c)',
        '608 cal, 24 gm pro',
      ]
      data.tuesday.snack = [
        'Cottage cheese (1/2 c)',
        'Canned fruit (1 snack pack)',
        '180 cal, 11 gm pro',
      ]

      data.wednesday.breakfast = [
        'Srambled eggs (1 large)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Fruit juice (1/2 c)',
        '284 cal, 10 gm pro',
      ]
      data.wednesday.lunch = [
        'Cheseburger with bun (1 sand)',
        'Fries (1 small serving)',
        'Chocolate milk shake (1 c)',
        '1021 cal, 40 gm pro',
      ]
      data.wednesday.dinner = [
        'Salmon (1 sm fillet) prepared in butter (1 Tbs)',
        'Rice (1/2 c)',
        'Broccoli (1/2 c)',
        'Whole milk (1 c)',
        '595 cal, 55 gm pro',
      ]
      data.wednesday.snack = ['Banana (1) with peanut butter (2 Tbs)', '295 cal, 8 gm pro']

      data.thursday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.thursday.lunch = [
        'Tuna salad sandwich (1/2 c on 2 pc bread)',
        'Baby carrots (5)',
        'Whole milk (1 c)',
        '627 cal, 38 gm pro',
      ]
      data.thursday.dinner = [
        'Ground beef tacos (1 taco)',
        'Refried beans (1/2 c)',
        'Rice (1/2 c)',
        'Whole milk (1 c)',
        '579 cal, 30 gm pro',
      ]
      data.thursday.snack = [
        'Banana (1) with peanut butter (2 Tbs)',
        'Whole milk (1 c)',
        '445 cal, 16 gm pro',
      ]

      data.friday.breakfast = [
        'English muffin (1) with nut butter (2 Tbs)',
        'Whole milk (1 c)',
        '540 cal, 22 gm pro',
      ]
      data.friday.lunch = [
        'Chicken & cheese pita (1 pita) with avocado (2 Tbs)',
        'Cherry tomatoes (1 c)',
        'Whole milk (1 c)',
        '555 cal, 32 gm pro',
      ]
      data.friday.dinner = [
        'Fettuccine alfredo (3/4 cup prepared) with shrimp (1/2 c) & broccoli (1/2 c)',
        'Garlic bread (1 slice)',
        'Whole milk (1 c)',
        '744 cal, 48 gm pro',
      ]
      data.friday.snack = [
        'String cheese (1 stick)',
        'Crackers (5)',
        'Whole milk (1 c)',
        '280 cal,14 gm pro',
      ]

      data.saturday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.saturday.lunch = [
        'Chicken stir fry (1 c) with veggies (1/2 c)',
        'Pineapple (1/2 c)',
        'Whole milk (1 c)',
        '482 cal, 24 gm pro',
      ]
      data.saturday.dinner = [
        'Meat with potatoes & gravy (1 c total meal)',
        'Cooked carrots (1/2 c)',
        'Roll (1) with butter (1 Tbs)',
        'Whole milk (1 c)',
        '593 cal, 26 gm pro',
      ]
      data.saturday.snack = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]

      data.sunday.breakfast = [
        'Hard-boilded egg (1 large)',
        'Fruit (1/2 c)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Whole milk (1 c)',
        '422 cal, 18 gm pro',
      ]
      data.sunday.lunch = [
        'Tomato soup (1 c) made with milk',
        'Grilled cheese (1/2 sandwich)',
        'Whole milk (1 c)',
        'Whole milk (1 c)',
        '624 cal, 28 gm pro',
      ]
      data.sunday.dinner = [
        'Meatloaf with gravy (5 oz)',
        'Green beans (1/2 c)',
        'Bread (1 slice) & butter (2 Tbs)',
        'Whole milk (1 c)',
        '490 cal, 31 gm pro',
      ]
      data.sunday.snack = ['Cookies (3)', 'Whole milk (1 c)', '375 cal, 10 gm pro']
    }
  }
  if (data.bmiCategorie == 'Normal weight') {
    if (data.lifestyle == 'Sedentary lifestyle') {
      // if user's BMI categorie is Normal weight and slects Sedentary lifestyle as his/her lifestyle they will get following meals in their diet plan
      data.monday.breakfast = [
        'Ham & cheese omlet prepared in 1 Tbs olive oil (2 eggs, 1oz. ham, 1/4 c cheese)',
        'Cranberry juice (1 c)',
        '413 cal, 18 gm pro',
      ]
      data.monday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)', 'Potato salad (1/2 c)']
      data.monday.dinner = [
        'Spagetti with meatballs (1-1.5 c)',
        'Garlic bread (1 slice)',
        'Fruit (1/2 c)',
        'Whole milk (1 c)',
        '615 cal, 26 gm pro',
      ]
      data.monday.snack = ['Greek yogurt parfalt (1 c)', '126 cal, 5 gm pro']

      data.tuesday.breakfast = [
        'Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)',
        'Greek yogurt with fruit (1 single serve container)',
        'Whole milk (1 c)',
        '644 cal, 22 gm pro',
      ]
      data.tuesday.lunch = [
        'Ham salad sandwich (1/2 c on 2 pc bread)',
        'Edamame (1/2 c)',
        'Whole milk (1 c)',
        '710 cal, 35 gm pro',
      ]
      data.tuesday.dinner = [
        'Lasagna (1/2 c)',
        'Roll (1) with butter (1 Tbs)',
        'Whole milk (1 c)',
        '608 cal, 24 gm pro',
      ]
      data.tuesday.snack = [
        'Cottage cheese (1/2 c)',
        'Canned fruit (1 snack pack)',
        '180 cal, 11 gm pro',
      ]

      data.wednesday.breakfast = [
        'Srambled eggs (1 large)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Fruit juice (1/2 c)',
        '284 cal, 10 gm pro',
      ]
      data.wednesday.lunch = [
        'Cheseburger with bun (1 sand)',
        'Fries (1 small serving)',
        'Chocolate milk shake (1 c)',
        '1021 cal, 40 gm pro',
      ]
      data.wednesday.dinner = [
        'Salmon (1 sm fillet) prepared in butter (1 Tbs)',
        'Rice (1/2 c)',
        'Broccoli (1/2 c)',
        'Whole milk (1 c)',
        '595 cal, 55 gm pro',
      ]
      data.wednesday.snack = ['Banana (1) with peanut butter (2 Tbs)', '295 cal, 8 gm pro']

      data.thursday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.thursday.lunch = [
        'Tuna salad sandwich (1/2 c on 2 pc bread)',
        'Baby carrots (5)',
        'Whole milk (1 c)',
        '627 cal, 38 gm pro',
      ]
      data.thursday.dinner = [
        'Ground beef tacos (1 taco)',
        'Refried beans (1/2 c)',
        'Rice (1/2 c)',
        'Whole milk (1 c)',
        '579 cal, 30 gm pro',
      ]
      data.thursday.snack = [
        'Banana (1) with peanut butter (2 Tbs)',
        'Whole milk (1 c)',
        '445 cal, 16 gm pro',
      ]

      data.friday.breakfast = [
        'English muffin (1) with nut butter (2 Tbs)',
        'Whole milk (1 c)',
        '540 cal, 22 gm pro',
      ]
      data.friday.lunch = [
        'Chicken & cheese pita (1 pita) with avocado (2 Tbs)',
        'Cherry tomatoes (1 c)',
        'Whole milk (1 c)',
        '555 cal, 32 gm pro',
      ]
      data.friday.dinner = [
        'Fettuccine alfredo (3/4 cup prepared) with shrimp (1/2 c) & broccoli (1/2 c)',
        'Garlic bread (1 slice)',
        'Whole milk (1 c)',
        '744 cal, 48 gm pro',
      ]
      data.friday.snack = [
        'String cheese (1 stick)',
        'Crackers (5)',
        'Whole milk (1 c)',
        '280 cal,14 gm pro',
      ]

      data.saturday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.saturday.lunch = [
        'Chicken stir fry (1 c) with veggies (1/2 c)',
        'Pineapple (1/2 c)',
        'Whole milk (1 c)',
        '482 cal, 24 gm pro',
      ]
      data.saturday.dinner = [
        'Meat with potatoes & gravy (1 c total meal)',
        'Cooked carrots (1/2 c)',
        'Roll (1) with butter (1 Tbs)',
        'Whole milk (1 c)',
        '593 cal, 26 gm pro',
      ]
      data.saturday.snack = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]

      data.sunday.breakfast = [
        'Hard-boilded egg (1 large)',
        'Fruit (1/2 c)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Whole milk (1 c)',
        '422 cal, 18 gm pro',
      ]
      data.sunday.lunch = [
        'Tomato soup (1 c) made with milk',
        'Grilled cheese (1/2 sandwich)',
        'Whole milk (1 c)',
        'Whole milk (1 c)',
        '624 cal, 28 gm pro',
      ]
      data.sunday.dinner = [
        'Meatloaf with gravy (5 oz)',
        'Green beans (1/2 c)',
        'Bread (1 slice) & butter (2 Tbs)',
        'Whole milk (1 c)',
        '490 cal, 31 gm pro',
      ]
      data.sunday.snack = ['Cookies (3)', 'Whole milk (1 c)', '375 cal, 10 gm pro']
    }
    if (data.lifestyle == 'Lightly active') {
      // if user's BMI categorie is Normal weight and slects Lightly active as his/her lifestyle they will get following meals in their diet plan
      data.monday.breakfast = [
        'Tomato soup (1 c) made with milk',
        'Grilled cheese (1/2 sandwich)',
        'Whole milk (1 c)',
        'Whole milk (1 c)',
        '624 cal, 28 gm pro',
      ]
      data.monday.lunch = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]
      data.monday.dinner = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.monday.snack = ['Cookies (3)', 'Whole milk (1 c)', '375 cal, 10 gm pro']

      data.tuesday.breakfast = [
        'English muffin (1) with nut butter (2 Tbs)',
        'Whole milk (1 c)',
        '540 cal, 22 gm pro',
      ]
      data.tuesday.lunch = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.tuesday.dinner = [
        'Tuna salad sandwich (1/2 c on 2 pc bread)',
        'Baby carrots (5)',
        'Whole milk (1 c)',
        '627 cal, 38 gm pro',
      ]
      data.tuesday.snack = [
        'String cheese (1 stick)',
        'Crackers (5)',
        'Whole milk (1 c)',
        '280 cal,14 gm pro',
      ]

      data.wednesday.breakfast = [
        'Chicken & cheese pita (1 pita) with avocado (2 Tbs)',
        'Cherry tomatoes (1 c)',
        'Whole milk (1 c)',
        '555 cal, 32 gm pro',
      ]
      data.wednesday.lunch = [
        'Salmon (1 sm fillet) prepared in butter (1 Tbs)',
        'Rice (1/2 c)',
        'Broccoli (1/2 c)',
        'Whole milk (1 c)',
        '595 cal, 55 gm pro',
      ]
      data.wednesday.dinner = [
        'Tuna salad sandwich (1/2 c on 2 pc bread)',
        'Baby carrots (5)',
        'Whole milk (1 c)',
        '627 cal, 38 gm pro',
      ]
      data.wednesday.snack = ['Greek yogurt parfalt (1 c)', '126 cal, 5 gm pro']

      data.thursday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.thursday.lunch = [
        'Salmon (1 sm fillet) prepared in butter (1 Tbs)',
        'Rice (1/2 c)',
        'Broccoli (1/2 c)',
        'Whole milk (1 c)',
        '595 cal, 55 gm pro',
      ]
      data.thursday.dinner = ['Barbeque (2 Tbs) chicken (3.5 oz)', 'Potato salad (1/2 c)']
      data.thursday.snack = ['Banana (1) with peanut butter (2 Tbs)', '295 cal, 8 gm pro']

      data.friday.breakfast = [
        'Ham salad sandwich (1/2 c on 2 pc bread)',
        'Edamame (1/2 c)',
        'Whole milk (1 c)',
        '710 cal, 35 gm pro',
      ]
      data.friday.lunch = [
        'Tomato soup (1 c) made with milk',
        'Grilled cheese (1/2 sandwich)',
        'Whole milk (1 c)',
        'Whole milk (1 c)',
        '624 cal, 28 gm pro',
      ]
      data.friday.dinner = [
        'Meatloaf with gravy (5 oz)',
        'Green beans (1/2 c)',
        'Bread (1 slice) & butter (2 Tbs)',
        'Whole milk (1 c)',
        '490 cal, 31 gm pro',
      ]
      data.friday.snack = ['Cookies (3)', 'Whole milk (1 c)', '375 cal, 10 gm pro']

      data.saturday.breakfast = [
        'Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)',
        'Greek yogurt with fruit (1 single serve container)',
        'Whole milk (1 c)',
        '644 cal, 22 gm pro',
      ]
      data.saturday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)', 'Potato salad (1/2 c)']
      data.saturday.dinner = [
        'Spagetti with meatballs (1-1.5 c)',
        'Garlic bread (1 slice)',
        'Fruit (1/2 c)',
        'Whole milk (1 c)',
        '615 cal, 26 gm pro',
      ]
      data.saturday.snack = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]

      data.sunday.breakfast = [
        'Srambled eggs (1 large)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Fruit juice (1/2 c)',
        '284 cal, 10 gm pro',
      ]
      data.sunday.lunch = [
        'Spagetti with meatballs (1-1.5 c)',
        'Garlic bread (1 slice)',
        'Fruit (1/2 c)',
        'Whole milk (1 c)',
        '615 cal, 26 gm pro',
      ]
      data.sunday.dinner = [
        'Meatloaf with gravy (5 oz)',
        'Green beans (1/2 c)',
        'Bread (1 slice) & butter (2 Tbs)',
        'Whole milk (1 c)',
        '490 cal, 31 gm pro',
      ]
      data.sunday.snack = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]
    }
    if (data.lifestyle == 'Moderately active') {
      // if user's BMI categorie is Normal weight and slects Moderately active as his/her lifestyle they will get following meals in their diet plan
      data.monday.breakfast = [
        'Ham & cheese omlet prepared in 1 Tbs olive oil (2 eggs, 1oz. ham, 1/4 c cheese)',
        'Cranberry juice (1 c)',
        '413 cal, 18 gm pro',
      ]
      data.monday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)', 'Potato salad (1/2 c)']
      data.monday.dinner = [
        'Spagetti with meatballs (1-1.5 c)',
        'Garlic bread (1 slice)',
        'Fruit (1/2 c)',
        'Whole milk (1 c)',
        '615 cal, 26 gm pro',
      ]
      data.monday.snack = ['Greek yogurt parfalt (1 c)', '126 cal, 5 gm pro']

      data.tuesday.breakfast = [
        'Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)',
        'Greek yogurt with fruit (1 single serve container)',
        'Whole milk (1 c)',
        '644 cal, 22 gm pro',
      ]
      data.tuesday.lunch = [
        'Ham salad sandwich (1/2 c on 2 pc bread)',
        'Edamame (1/2 c)',
        'Whole milk (1 c)',
        '710 cal, 35 gm pro',
      ]
      data.tuesday.dinner = [
        'Lasagna (1/2 c)',
        'Roll (1) with butter (1 Tbs)',
        'Whole milk (1 c)',
        '608 cal, 24 gm pro',
      ]
      data.tuesday.snack = [
        'Cottage cheese (1/2 c)',
        'Canned fruit (1 snack pack)',
        '180 cal, 11 gm pro',
      ]

      data.wednesday.breakfast = [
        'Srambled eggs (1 large)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Fruit juice (1/2 c)',
        '284 cal, 10 gm pro',
      ]
      data.wednesday.lunch = [
        'Cheseburger with bun (1 sand)',
        'Fries (1 small serving)',
        'Chocolate milk shake (1 c)',
        '1021 cal, 40 gm pro',
      ]
      data.wednesday.dinner = [
        'Salmon (1 sm fillet) prepared in butter (1 Tbs)',
        'Rice (1/2 c)',
        'Broccoli (1/2 c)',
        'Whole milk (1 c)',
        '595 cal, 55 gm pro',
      ]
      data.wednesday.snack = ['Banana (1) with peanut butter (2 Tbs)', '295 cal, 8 gm pro']

      data.thursday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.thursday.lunch = [
        'Tuna salad sandwich (1/2 c on 2 pc bread)',
        'Baby carrots (5)',
        'Whole milk (1 c)',
        '627 cal, 38 gm pro',
      ]
      data.thursday.dinner = [
        'Ground beef tacos (1 taco)',
        'Refried beans (1/2 c)',
        'Rice (1/2 c)',
        'Whole milk (1 c)',
        '579 cal, 30 gm pro',
      ]
      data.thursday.snack = [
        'Banana (1) with peanut butter (2 Tbs)',
        'Whole milk (1 c)',
        '445 cal, 16 gm pro',
      ]

      data.friday.breakfast = [
        'English muffin (1) with nut butter (2 Tbs)',
        'Whole milk (1 c)',
        '540 cal, 22 gm pro',
      ]
      data.friday.lunch = [
        'Chicken & cheese pita (1 pita) with avocado (2 Tbs)',
        'Cherry tomatoes (1 c)',
        'Whole milk (1 c)',
        '555 cal, 32 gm pro',
      ]
      data.friday.dinner = [
        'Fettuccine alfredo (3/4 cup prepared) with shrimp (1/2 c) & broccoli (1/2 c)',
        'Garlic bread (1 slice)',
        'Whole milk (1 c)',
        '744 cal, 48 gm pro',
      ]
      data.friday.snack = [
        'String cheese (1 stick)',
        'Crackers (5)',
        'Whole milk (1 c)',
        '280 cal,14 gm pro',
      ]

      data.saturday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.saturday.lunch = [
        'Chicken stir fry (1 c) with veggies (1/2 c)',
        'Pineapple (1/2 c)',
        'Whole milk (1 c)',
        '482 cal, 24 gm pro',
      ]
      data.saturday.dinner = [
        'Meat with potatoes & gravy (1 c total meal)',
        'Cooked carrots (1/2 c)',
        'Roll (1) with butter (1 Tbs)',
        'Whole milk (1 c)',
        '593 cal, 26 gm pro',
      ]
      data.saturday.snack = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]

      data.sunday.breakfast = [
        'Hard-boilded egg (1 large)',
        'Fruit (1/2 c)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Whole milk (1 c)',
        '422 cal, 18 gm pro',
      ]
      data.sunday.lunch = [
        'Tomato soup (1 c) made with milk',
        'Grilled cheese (1/2 sandwich)',
        'Whole milk (1 c)',
        'Whole milk (1 c)',
        '624 cal, 28 gm pro',
      ]
      data.sunday.dinner = [
        'Meatloaf with gravy (5 oz)',
        'Green beans (1/2 c)',
        'Bread (1 slice) & butter (2 Tbs)',
        'Whole milk (1 c)',
        '490 cal, 31 gm pro',
      ]
      data.sunday.snack = ['Cookies (3)', 'Whole milk (1 c)', '375 cal, 10 gm pro']
    }
    if (data.lifestyle == 'Active lifestyle') {
      // if user's BMI categorie is Normal weight and slects Active lifestyle as his/her lifestyle they will get following meals in their diet plan
      data.monday.breakfast = [
        'Tomato soup (1 c) made with milk',
        'Grilled cheese (1/2 sandwich)',
        'Whole milk (1 c)',
        'Whole milk (1 c)',
        '624 cal, 28 gm pro',
      ]
      data.monday.lunch = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]
      data.monday.dinner = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.monday.snack = ['Cookies (3)', 'Whole milk (1 c)', '375 cal, 10 gm pro']

      data.tuesday.breakfast = [
        'English muffin (1) with nut butter (2 Tbs)',
        'Whole milk (1 c)',
        '540 cal, 22 gm pro',
      ]
      data.tuesday.lunch = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.tuesday.dinner = [
        'Tuna salad sandwich (1/2 c on 2 pc bread)',
        'Baby carrots (5)',
        'Whole milk (1 c)',
        '627 cal, 38 gm pro',
      ]
      data.tuesday.snack = [
        'String cheese (1 stick)',
        'Crackers (5)',
        'Whole milk (1 c)',
        '280 cal,14 gm pro',
      ]

      data.wednesday.breakfast = [
        'Chicken & cheese pita (1 pita) with avocado (2 Tbs)',
        'Cherry tomatoes (1 c)',
        'Whole milk (1 c)',
        '555 cal, 32 gm pro',
      ]
      data.wednesday.lunch = [
        'Salmon (1 sm fillet) prepared in butter (1 Tbs)',
        'Rice (1/2 c)',
        'Broccoli (1/2 c)',
        'Whole milk (1 c)',
        '595 cal, 55 gm pro',
      ]
      data.wednesday.dinner = [
        'Tuna salad sandwich (1/2 c on 2 pc bread)',
        'Baby carrots (5)',
        'Whole milk (1 c)',
        '627 cal, 38 gm pro',
      ]
      data.wednesday.snack = ['Greek yogurt parfalt (1 c)', '126 cal, 5 gm pro']

      data.thursday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.thursday.lunch = [
        'Salmon (1 sm fillet) prepared in butter (1 Tbs)',
        'Rice (1/2 c)',
        'Broccoli (1/2 c)',
        'Whole milk (1 c)',
        '595 cal, 55 gm pro',
      ]
      data.thursday.dinner = ['Barbeque (2 Tbs) chicken (3.5 oz)', 'Potato salad (1/2 c)']
      data.thursday.snack = ['Banana (1) with peanut butter (2 Tbs)', '295 cal, 8 gm pro']

      data.friday.breakfast = [
        'Ham salad sandwich (1/2 c on 2 pc bread)',
        'Edamame (1/2 c)',
        'Whole milk (1 c)',
        '710 cal, 35 gm pro',
      ]
      data.friday.lunch = [
        'Tomato soup (1 c) made with milk',
        'Grilled cheese (1/2 sandwich)',
        'Whole milk (1 c)',
        'Whole milk (1 c)',
        '624 cal, 28 gm pro',
      ]
      data.friday.dinner = [
        'Meatloaf with gravy (5 oz)',
        'Green beans (1/2 c)',
        'Bread (1 slice) & butter (2 Tbs)',
        'Whole milk (1 c)',
        '490 cal, 31 gm pro',
      ]
      data.friday.snack = ['Cookies (3)', 'Whole milk (1 c)', '375 cal, 10 gm pro']

      data.saturday.breakfast = [
        'Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)',
        'Greek yogurt with fruit (1 single serve container)',
        'Whole milk (1 c)',
        '644 cal, 22 gm pro',
      ]
      data.saturday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)', 'Potato salad (1/2 c)']
      data.saturday.dinner = [
        'Spagetti with meatballs (1-1.5 c)',
        'Garlic bread (1 slice)',
        'Fruit (1/2 c)',
        'Whole milk (1 c)',
        '615 cal, 26 gm pro',
      ]
      data.saturday.snack = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]

      data.sunday.breakfast = [
        'Srambled eggs (1 large)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Fruit juice (1/2 c)',
        '284 cal, 10 gm pro',
      ]
      data.sunday.lunch = [
        'Spagetti with meatballs (1-1.5 c)',
        'Garlic bread (1 slice)',
        'Fruit (1/2 c)',
        'Whole milk (1 c)',
        '615 cal, 26 gm pro',
      ]
      data.sunday.dinner = [
        'Meatloaf with gravy (5 oz)',
        'Green beans (1/2 c)',
        'Bread (1 slice) & butter (2 Tbs)',
        'Whole milk (1 c)',
        '490 cal, 31 gm pro',
      ]
      data.sunday.snack = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]
    }
    if (data.lifestyle == 'Very active lifestyle') {
      // if user's BMI categorie is Normal weight and slects Very active lifestyle as his/her lifestyle they will get following meals in their diet plan
      data.monday.breakfast = [
        'Ham & cheese omlet prepared in 1 Tbs olive oil (2 eggs, 1oz. ham, 1/4 c cheese)',
        'Cranberry juice (1 c)',
        '413 cal, 18 gm pro',
      ]
      data.monday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)', 'Potato salad (1/2 c)']
      data.monday.dinner = [
        'Spagetti with meatballs (1-1.5 c)',
        'Garlic bread (1 slice)',
        'Fruit (1/2 c)',
        'Whole milk (1 c)',
        '615 cal, 26 gm pro',
      ]
      data.monday.snack = ['Greek yogurt parfalt (1 c)', '126 cal, 5 gm pro']

      data.tuesday.breakfast = [
        'Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)',
        'Greek yogurt with fruit (1 single serve container)',
        'Whole milk (1 c)',
        '644 cal, 22 gm pro',
      ]
      data.tuesday.lunch = [
        'Ham salad sandwich (1/2 c on 2 pc bread)',
        'Edamame (1/2 c)',
        'Whole milk (1 c)',
        '710 cal, 35 gm pro',
      ]
      data.tuesday.dinner = [
        'Lasagna (1/2 c)',
        'Roll (1) with butter (1 Tbs)',
        'Whole milk (1 c)',
        '608 cal, 24 gm pro',
      ]
      data.tuesday.snack = [
        'Cottage cheese (1/2 c)',
        'Canned fruit (1 snack pack)',
        '180 cal, 11 gm pro',
      ]

      data.wednesday.breakfast = [
        'Srambled eggs (1 large)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Fruit juice (1/2 c)',
        '284 cal, 10 gm pro',
      ]
      data.wednesday.lunch = [
        'Cheseburger with bun (1 sand)',
        'Fries (1 small serving)',
        'Chocolate milk shake (1 c)',
        '1021 cal, 40 gm pro',
      ]
      data.wednesday.dinner = [
        'Salmon (1 sm fillet) prepared in butter (1 Tbs)',
        'Rice (1/2 c)',
        'Broccoli (1/2 c)',
        'Whole milk (1 c)',
        '595 cal, 55 gm pro',
      ]
      data.wednesday.snack = ['Banana (1) with peanut butter (2 Tbs)', '295 cal, 8 gm pro']

      data.thursday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.thursday.lunch = [
        'Tuna salad sandwich (1/2 c on 2 pc bread)',
        'Baby carrots (5)',
        'Whole milk (1 c)',
        '627 cal, 38 gm pro',
      ]
      data.thursday.dinner = [
        'Ground beef tacos (1 taco)',
        'Refried beans (1/2 c)',
        'Rice (1/2 c)',
        'Whole milk (1 c)',
        '579 cal, 30 gm pro',
      ]
      data.thursday.snack = [
        'Banana (1) with peanut butter (2 Tbs)',
        'Whole milk (1 c)',
        '445 cal, 16 gm pro',
      ]

      data.friday.breakfast = [
        'English muffin (1) with nut butter (2 Tbs)',
        'Whole milk (1 c)',
        '540 cal, 22 gm pro',
      ]
      data.friday.lunch = [
        'Chicken & cheese pita (1 pita) with avocado (2 Tbs)',
        'Cherry tomatoes (1 c)',
        'Whole milk (1 c)',
        '555 cal, 32 gm pro',
      ]
      data.friday.dinner = [
        'Fettuccine alfredo (3/4 cup prepared) with shrimp (1/2 c) & broccoli (1/2 c)',
        'Garlic bread (1 slice)',
        'Whole milk (1 c)',
        '744 cal, 48 gm pro',
      ]
      data.friday.snack = [
        'String cheese (1 stick)',
        'Crackers (5)',
        'Whole milk (1 c)',
        '280 cal,14 gm pro',
      ]

      data.saturday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.saturday.lunch = [
        'Chicken stir fry (1 c) with veggies (1/2 c)',
        'Pineapple (1/2 c)',
        'Whole milk (1 c)',
        '482 cal, 24 gm pro',
      ]
      data.saturday.dinner = [
        'Meat with potatoes & gravy (1 c total meal)',
        'Cooked carrots (1/2 c)',
        'Roll (1) with butter (1 Tbs)',
        'Whole milk (1 c)',
        '593 cal, 26 gm pro',
      ]
      data.saturday.snack = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]

      data.sunday.breakfast = [
        'Hard-boilded egg (1 large)',
        'Fruit (1/2 c)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Whole milk (1 c)',
        '422 cal, 18 gm pro',
      ]
      data.sunday.lunch = [
        'Tomato soup (1 c) made with milk',
        'Grilled cheese (1/2 sandwich)',
        'Whole milk (1 c)',
        'Whole milk (1 c)',
        '624 cal, 28 gm pro',
      ]
      data.sunday.dinner = [
        'Meatloaf with gravy (5 oz)',
        'Green beans (1/2 c)',
        'Bread (1 slice) & butter (2 Tbs)',
        'Whole milk (1 c)',
        '490 cal, 31 gm pro',
      ]
      data.sunday.snack = ['Cookies (3)', 'Whole milk (1 c)', '375 cal, 10 gm pro']
    }
  }
  if (data.bmiCategorie == 'Overweight') {
    if (data.lifestyle == 'Sedentary lifestyle') {
      // if user's BMI categorie is Overweight and slects Sedentary lifestyle as his/her lifestyle they will get following meals in their diet plan
      data.monday.breakfast = [
        'Ham & cheese omlet prepared in 1 Tbs olive oil (2 eggs, 1oz. ham, 1/4 c cheese)',
        'Cranberry juice (1 c)',
        '413 cal, 18 gm pro',
      ]
      data.monday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)', 'Potato salad (1/2 c)']
      data.monday.dinner = [
        'Spagetti with meatballs (1-1.5 c)',
        'Garlic bread (1 slice)',
        'Fruit (1/2 c)',
        'Whole milk (1 c)',
        '615 cal, 26 gm pro',
      ]
      data.monday.snack = ['Greek yogurt parfalt (1 c)', '126 cal, 5 gm pro']

      data.tuesday.breakfast = [
        'Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)',
        'Greek yogurt with fruit (1 single serve container)',
        'Whole milk (1 c)',
        '644 cal, 22 gm pro',
      ]
      data.tuesday.lunch = [
        'Ham salad sandwich (1/2 c on 2 pc bread)',
        'Edamame (1/2 c)',
        'Whole milk (1 c)',
        '710 cal, 35 gm pro',
      ]
      data.tuesday.dinner = [
        'Lasagna (1/2 c)',
        'Roll (1) with butter (1 Tbs)',
        'Whole milk (1 c)',
        '608 cal, 24 gm pro',
      ]
      data.tuesday.snack = [
        'Cottage cheese (1/2 c)',
        'Canned fruit (1 snack pack)',
        '180 cal, 11 gm pro',
      ]

      data.wednesday.breakfast = [
        'Srambled eggs (1 large)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Fruit juice (1/2 c)',
        '284 cal, 10 gm pro',
      ]
      data.wednesday.lunch = [
        'Cheseburger with bun (1 sand)',
        'Fries (1 small serving)',
        'Chocolate milk shake (1 c)',
        '1021 cal, 40 gm pro',
      ]
      data.wednesday.dinner = [
        'Salmon (1 sm fillet) prepared in butter (1 Tbs)',
        'Rice (1/2 c)',
        'Broccoli (1/2 c)',
        'Whole milk (1 c)',
        '595 cal, 55 gm pro',
      ]
      data.wednesday.snack = ['Banana (1) with peanut butter (2 Tbs)', '295 cal, 8 gm pro']

      data.thursday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.thursday.lunch = [
        'Tuna salad sandwich (1/2 c on 2 pc bread)',
        'Baby carrots (5)',
        'Whole milk (1 c)',
        '627 cal, 38 gm pro',
      ]
      data.thursday.dinner = [
        'Ground beef tacos (1 taco)',
        'Refried beans (1/2 c)',
        'Rice (1/2 c)',
        'Whole milk (1 c)',
        '579 cal, 30 gm pro',
      ]
      data.thursday.snack = [
        'Banana (1) with peanut butter (2 Tbs)',
        'Whole milk (1 c)',
        '445 cal, 16 gm pro',
      ]

      data.friday.breakfast = [
        'English muffin (1) with nut butter (2 Tbs)',
        'Whole milk (1 c)',
        '540 cal, 22 gm pro',
      ]
      data.friday.lunch = [
        'Chicken & cheese pita (1 pita) with avocado (2 Tbs)',
        'Cherry tomatoes (1 c)',
        'Whole milk (1 c)',
        '555 cal, 32 gm pro',
      ]
      data.friday.dinner = [
        'Fettuccine alfredo (3/4 cup prepared) with shrimp (1/2 c) & broccoli (1/2 c)',
        'Garlic bread (1 slice)',
        'Whole milk (1 c)',
        '744 cal, 48 gm pro',
      ]
      data.friday.snack = [
        'String cheese (1 stick)',
        'Crackers (5)',
        'Whole milk (1 c)',
        '280 cal,14 gm pro',
      ]

      data.saturday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.saturday.lunch = [
        'Chicken stir fry (1 c) with veggies (1/2 c)',
        'Pineapple (1/2 c)',
        'Whole milk (1 c)',
        '482 cal, 24 gm pro',
      ]
      data.saturday.dinner = [
        'Meat with potatoes & gravy (1 c total meal)',
        'Cooked carrots (1/2 c)',
        'Roll (1) with butter (1 Tbs)',
        'Whole milk (1 c)',
        '593 cal, 26 gm pro',
      ]
      data.saturday.snack = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]

      data.sunday.breakfast = [
        'Hard-boilded egg (1 large)',
        'Fruit (1/2 c)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Whole milk (1 c)',
        '422 cal, 18 gm pro',
      ]
      data.sunday.lunch = [
        'Tomato soup (1 c) made with milk',
        'Grilled cheese (1/2 sandwich)',
        'Whole milk (1 c)',
        'Whole milk (1 c)',
        '624 cal, 28 gm pro',
      ]
      data.sunday.dinner = [
        'Meatloaf with gravy (5 oz)',
        'Green beans (1/2 c)',
        'Bread (1 slice) & butter (2 Tbs)',
        'Whole milk (1 c)',
        '490 cal, 31 gm pro',
      ]
      data.sunday.snack = ['Cookies (3)', 'Whole milk (1 c)', '375 cal, 10 gm pro']
    }
    if (data.lifestyle == 'Lightly active') {
      // if user's BMI categorie is Overweight and slects Lightly active as his/her lifestyle they will get following meals in their diet plan
      data.monday.breakfast = [
        'Tomato soup (1 c) made with milk',
        'Grilled cheese (1/2 sandwich)',
        'Whole milk (1 c)',
        'Whole milk (1 c)',
        '624 cal, 28 gm pro',
      ]
      data.monday.lunch = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]
      data.monday.dinner = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.monday.snack = ['Cookies (3)', 'Whole milk (1 c)', '375 cal, 10 gm pro']

      data.tuesday.breakfast = [
        'English muffin (1) with nut butter (2 Tbs)',
        'Whole milk (1 c)',
        '540 cal, 22 gm pro',
      ]
      data.tuesday.lunch = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.tuesday.dinner = [
        'Tuna salad sandwich (1/2 c on 2 pc bread)',
        'Baby carrots (5)',
        'Whole milk (1 c)',
        '627 cal, 38 gm pro',
      ]
      data.tuesday.snack = [
        'String cheese (1 stick)',
        'Crackers (5)',
        'Whole milk (1 c)',
        '280 cal,14 gm pro',
      ]

      data.wednesday.breakfast = [
        'Chicken & cheese pita (1 pita) with avocado (2 Tbs)',
        'Cherry tomatoes (1 c)',
        'Whole milk (1 c)',
        '555 cal, 32 gm pro',
      ]
      data.wednesday.lunch = [
        'Salmon (1 sm fillet) prepared in butter (1 Tbs)',
        'Rice (1/2 c)',
        'Broccoli (1/2 c)',
        'Whole milk (1 c)',
        '595 cal, 55 gm pro',
      ]
      data.wednesday.dinner = [
        'Tuna salad sandwich (1/2 c on 2 pc bread)',
        'Baby carrots (5)',
        'Whole milk (1 c)',
        '627 cal, 38 gm pro',
      ]
      data.wednesday.snack = ['Greek yogurt parfalt (1 c)', '126 cal, 5 gm pro']

      data.thursday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.thursday.lunch = [
        'Salmon (1 sm fillet) prepared in butter (1 Tbs)',
        'Rice (1/2 c)',
        'Broccoli (1/2 c)',
        'Whole milk (1 c)',
        '595 cal, 55 gm pro',
      ]
      data.thursday.dinner = ['Barbeque (2 Tbs) chicken (3.5 oz)', 'Potato salad (1/2 c)']
      data.thursday.snack = ['Banana (1) with peanut butter (2 Tbs)', '295 cal, 8 gm pro']

      data.friday.breakfast = [
        'Ham salad sandwich (1/2 c on 2 pc bread)',
        'Edamame (1/2 c)',
        'Whole milk (1 c)',
        '710 cal, 35 gm pro',
      ]
      data.friday.lunch = [
        'Tomato soup (1 c) made with milk',
        'Grilled cheese (1/2 sandwich)',
        'Whole milk (1 c)',
        'Whole milk (1 c)',
        '624 cal, 28 gm pro',
      ]
      data.friday.dinner = [
        'Meatloaf with gravy (5 oz)',
        'Green beans (1/2 c)',
        'Bread (1 slice) & butter (2 Tbs)',
        'Whole milk (1 c)',
        '490 cal, 31 gm pro',
      ]
      data.friday.snack = ['Cookies (3)', 'Whole milk (1 c)', '375 cal, 10 gm pro']

      data.saturday.breakfast = [
        'Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)',
        'Greek yogurt with fruit (1 single serve container)',
        'Whole milk (1 c)',
        '644 cal, 22 gm pro',
      ]
      data.saturday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)', 'Potato salad (1/2 c)']
      data.saturday.dinner = [
        'Spagetti with meatballs (1-1.5 c)',
        'Garlic bread (1 slice)',
        'Fruit (1/2 c)',
        'Whole milk (1 c)',
        '615 cal, 26 gm pro',
      ]
      data.saturday.snack = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]

      data.sunday.breakfast = [
        'Srambled eggs (1 large)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Fruit juice (1/2 c)',
        '284 cal, 10 gm pro',
      ]
      data.sunday.lunch = [
        'Spagetti with meatballs (1-1.5 c)',
        'Garlic bread (1 slice)',
        'Fruit (1/2 c)',
        'Whole milk (1 c)',
        '615 cal, 26 gm pro',
      ]
      data.sunday.dinner = [
        'Meatloaf with gravy (5 oz)',
        'Green beans (1/2 c)',
        'Bread (1 slice) & butter (2 Tbs)',
        'Whole milk (1 c)',
        '490 cal, 31 gm pro',
      ]
      data.sunday.snack = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]
    }
    if (data.lifestyle == 'Moderately active') {
      // if user's BMI categorie is Overweight and slects Moderately active as his/her lifestyle they will get following meals in their diet plan
      data.monday.breakfast = [
        'Ham & cheese omlet prepared in 1 Tbs olive oil (2 eggs, 1oz. ham, 1/4 c cheese)',
        'Cranberry juice (1 c)',
        '413 cal, 18 gm pro',
      ]
      data.monday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)', 'Potato salad (1/2 c)']
      data.monday.dinner = [
        'Spagetti with meatballs (1-1.5 c)',
        'Garlic bread (1 slice)',
        'Fruit (1/2 c)',
        'Whole milk (1 c)',
        '615 cal, 26 gm pro',
      ]
      data.monday.snack = ['Greek yogurt parfalt (1 c)', '126 cal, 5 gm pro']

      data.tuesday.breakfast = [
        'Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)',
        'Greek yogurt with fruit (1 single serve container)',
        'Whole milk (1 c)',
        '644 cal, 22 gm pro',
      ]
      data.tuesday.lunch = [
        'Ham salad sandwich (1/2 c on 2 pc bread)',
        'Edamame (1/2 c)',
        'Whole milk (1 c)',
        '710 cal, 35 gm pro',
      ]
      data.tuesday.dinner = [
        'Lasagna (1/2 c)',
        'Roll (1) with butter (1 Tbs)',
        'Whole milk (1 c)',
        '608 cal, 24 gm pro',
      ]
      data.tuesday.snack = [
        'Cottage cheese (1/2 c)',
        'Canned fruit (1 snack pack)',
        '180 cal, 11 gm pro',
      ]

      data.wednesday.breakfast = [
        'Srambled eggs (1 large)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Fruit juice (1/2 c)',
        '284 cal, 10 gm pro',
      ]
      data.wednesday.lunch = [
        'Cheseburger with bun (1 sand)',
        'Fries (1 small serving)',
        'Chocolate milk shake (1 c)',
        '1021 cal, 40 gm pro',
      ]
      data.wednesday.dinner = [
        'Salmon (1 sm fillet) prepared in butter (1 Tbs)',
        'Rice (1/2 c)',
        'Broccoli (1/2 c)',
        'Whole milk (1 c)',
        '595 cal, 55 gm pro',
      ]
      data.wednesday.snack = ['Banana (1) with peanut butter (2 Tbs)', '295 cal, 8 gm pro']

      data.thursday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.thursday.lunch = [
        'Tuna salad sandwich (1/2 c on 2 pc bread)',
        'Baby carrots (5)',
        'Whole milk (1 c)',
        '627 cal, 38 gm pro',
      ]
      data.thursday.dinner = [
        'Ground beef tacos (1 taco)',
        'Refried beans (1/2 c)',
        'Rice (1/2 c)',
        'Whole milk (1 c)',
        '579 cal, 30 gm pro',
      ]
      data.thursday.snack = [
        'Banana (1) with peanut butter (2 Tbs)',
        'Whole milk (1 c)',
        '445 cal, 16 gm pro',
      ]

      data.friday.breakfast = [
        'English muffin (1) with nut butter (2 Tbs)',
        'Whole milk (1 c)',
        '540 cal, 22 gm pro',
      ]
      data.friday.lunch = [
        'Chicken & cheese pita (1 pita) with avocado (2 Tbs)',
        'Cherry tomatoes (1 c)',
        'Whole milk (1 c)',
        '555 cal, 32 gm pro',
      ]
      data.friday.dinner = [
        'Fettuccine alfredo (3/4 cup prepared) with shrimp (1/2 c) & broccoli (1/2 c)',
        'Garlic bread (1 slice)',
        'Whole milk (1 c)',
        '744 cal, 48 gm pro',
      ]
      data.friday.snack = [
        'String cheese (1 stick)',
        'Crackers (5)',
        'Whole milk (1 c)',
        '280 cal,14 gm pro',
      ]

      data.saturday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.saturday.lunch = [
        'Chicken stir fry (1 c) with veggies (1/2 c)',
        'Pineapple (1/2 c)',
        'Whole milk (1 c)',
        '482 cal, 24 gm pro',
      ]
      data.saturday.dinner = [
        'Meat with potatoes & gravy (1 c total meal)',
        'Cooked carrots (1/2 c)',
        'Roll (1) with butter (1 Tbs)',
        'Whole milk (1 c)',
        '593 cal, 26 gm pro',
      ]
      data.saturday.snack = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]

      data.sunday.breakfast = [
        'Hard-boilded egg (1 large)',
        'Fruit (1/2 c)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Whole milk (1 c)',
        '422 cal, 18 gm pro',
      ]
      data.sunday.lunch = [
        'Tomato soup (1 c) made with milk',
        'Grilled cheese (1/2 sandwich)',
        'Whole milk (1 c)',
        'Whole milk (1 c)',
        '624 cal, 28 gm pro',
      ]
      data.sunday.dinner = [
        'Meatloaf with gravy (5 oz)',
        'Green beans (1/2 c)',
        'Bread (1 slice) & butter (2 Tbs)',
        'Whole milk (1 c)',
        '490 cal, 31 gm pro',
      ]
      data.sunday.snack = ['Cookies (3)', 'Whole milk (1 c)', '375 cal, 10 gm pro']
    }
    if (data.lifestyle == 'Active lifestyle') {
      // if user's BMI categorie is Overweight and slects Active lifestyle as his/her lifestyle they will get following meals in their diet plan
      data.monday.breakfast = [
        'Tomato soup (1 c) made with milk',
        'Grilled cheese (1/2 sandwich)',
        'Whole milk (1 c)',
        'Whole milk (1 c)',
        '624 cal, 28 gm pro',
      ]
      data.monday.lunch = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]
      data.monday.dinner = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.monday.snack = ['Cookies (3)', 'Whole milk (1 c)', '375 cal, 10 gm pro']

      data.tuesday.breakfast = [
        'English muffin (1) with nut butter (2 Tbs)',
        'Whole milk (1 c)',
        '540 cal, 22 gm pro',
      ]
      data.tuesday.lunch = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.tuesday.dinner = [
        'Tuna salad sandwich (1/2 c on 2 pc bread)',
        'Baby carrots (5)',
        'Whole milk (1 c)',
        '627 cal, 38 gm pro',
      ]
      data.tuesday.snack = [
        'String cheese (1 stick)',
        'Crackers (5)',
        'Whole milk (1 c)',
        '280 cal,14 gm pro',
      ]

      data.wednesday.breakfast = [
        'Chicken & cheese pita (1 pita) with avocado (2 Tbs)',
        'Cherry tomatoes (1 c)',
        'Whole milk (1 c)',
        '555 cal, 32 gm pro',
      ]
      data.wednesday.lunch = [
        'Salmon (1 sm fillet) prepared in butter (1 Tbs)',
        'Rice (1/2 c)',
        'Broccoli (1/2 c)',
        'Whole milk (1 c)',
        '595 cal, 55 gm pro',
      ]
      data.wednesday.dinner = [
        'Tuna salad sandwich (1/2 c on 2 pc bread)',
        'Baby carrots (5)',
        'Whole milk (1 c)',
        '627 cal, 38 gm pro',
      ]
      data.wednesday.snack = ['Greek yogurt parfalt (1 c)', '126 cal, 5 gm pro']

      data.thursday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.thursday.lunch = [
        'Salmon (1 sm fillet) prepared in butter (1 Tbs)',
        'Rice (1/2 c)',
        'Broccoli (1/2 c)',
        'Whole milk (1 c)',
        '595 cal, 55 gm pro',
      ]
      data.thursday.dinner = ['Barbeque (2 Tbs) chicken (3.5 oz)', 'Potato salad (1/2 c)']
      data.thursday.snack = ['Banana (1) with peanut butter (2 Tbs)', '295 cal, 8 gm pro']

      data.friday.breakfast = [
        'Ham salad sandwich (1/2 c on 2 pc bread)',
        'Edamame (1/2 c)',
        'Whole milk (1 c)',
        '710 cal, 35 gm pro',
      ]
      data.friday.lunch = [
        'Tomato soup (1 c) made with milk',
        'Grilled cheese (1/2 sandwich)',
        'Whole milk (1 c)',
        'Whole milk (1 c)',
        '624 cal, 28 gm pro',
      ]
      data.friday.dinner = [
        'Meatloaf with gravy (5 oz)',
        'Green beans (1/2 c)',
        'Bread (1 slice) & butter (2 Tbs)',
        'Whole milk (1 c)',
        '490 cal, 31 gm pro',
      ]
      data.friday.snack = ['Cookies (3)', 'Whole milk (1 c)', '375 cal, 10 gm pro']

      data.saturday.breakfast = [
        'Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)',
        'Greek yogurt with fruit (1 single serve container)',
        'Whole milk (1 c)',
        '644 cal, 22 gm pro',
      ]
      data.saturday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)', 'Potato salad (1/2 c)']
      data.saturday.dinner = [
        'Spagetti with meatballs (1-1.5 c)',
        'Garlic bread (1 slice)',
        'Fruit (1/2 c)',
        'Whole milk (1 c)',
        '615 cal, 26 gm pro',
      ]
      data.saturday.snack = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]

      data.sunday.breakfast = [
        'Srambled eggs (1 large)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Fruit juice (1/2 c)',
        '284 cal, 10 gm pro',
      ]
      data.sunday.lunch = [
        'Spagetti with meatballs (1-1.5 c)',
        'Garlic bread (1 slice)',
        'Fruit (1/2 c)',
        'Whole milk (1 c)',
        '615 cal, 26 gm pro',
      ]
      data.sunday.dinner = [
        'Meatloaf with gravy (5 oz)',
        'Green beans (1/2 c)',
        'Bread (1 slice) & butter (2 Tbs)',
        'Whole milk (1 c)',
        '490 cal, 31 gm pro',
      ]
      data.sunday.snack = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]
    }
    if (data.lifestyle == 'Very active lifestyle') {
      // if user's BMI categorie is Overweight and slects Very active lifestyle as his/her lifestyle they will get following meals in their diet plan
      data.monday.breakfast = [
        'Ham & cheese omlet prepared in 1 Tbs olive oil (2 eggs, 1oz. ham, 1/4 c cheese)',
        'Cranberry juice (1 c)',
        '413 cal, 18 gm pro',
      ]
      data.monday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)', 'Potato salad (1/2 c)']
      data.monday.dinner = [
        'Spagetti with meatballs (1-1.5 c)',
        'Garlic bread (1 slice)',
        'Fruit (1/2 c)',
        'Whole milk (1 c)',
        '615 cal, 26 gm pro',
      ]
      data.monday.snack = ['Greek yogurt parfalt (1 c)', '126 cal, 5 gm pro']

      data.tuesday.breakfast = [
        'Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)',
        'Greek yogurt with fruit (1 single serve container)',
        'Whole milk (1 c)',
        '644 cal, 22 gm pro',
      ]
      data.tuesday.lunch = [
        'Ham salad sandwich (1/2 c on 2 pc bread)',
        'Edamame (1/2 c)',
        'Whole milk (1 c)',
        '710 cal, 35 gm pro',
      ]
      data.tuesday.dinner = [
        'Lasagna (1/2 c)',
        'Roll (1) with butter (1 Tbs)',
        'Whole milk (1 c)',
        '608 cal, 24 gm pro',
      ]
      data.tuesday.snack = [
        'Cottage cheese (1/2 c)',
        'Canned fruit (1 snack pack)',
        '180 cal, 11 gm pro',
      ]

      data.wednesday.breakfast = [
        'Srambled eggs (1 large)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Fruit juice (1/2 c)',
        '284 cal, 10 gm pro',
      ]
      data.wednesday.lunch = [
        'Cheseburger with bun (1 sand)',
        'Fries (1 small serving)',
        'Chocolate milk shake (1 c)',
        '1021 cal, 40 gm pro',
      ]
      data.wednesday.dinner = [
        'Salmon (1 sm fillet) prepared in butter (1 Tbs)',
        'Rice (1/2 c)',
        'Broccoli (1/2 c)',
        'Whole milk (1 c)',
        '595 cal, 55 gm pro',
      ]
      data.wednesday.snack = ['Banana (1) with peanut butter (2 Tbs)', '295 cal, 8 gm pro']

      data.thursday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.thursday.lunch = [
        'Tuna salad sandwich (1/2 c on 2 pc bread)',
        'Baby carrots (5)',
        'Whole milk (1 c)',
        '627 cal, 38 gm pro',
      ]
      data.thursday.dinner = [
        'Ground beef tacos (1 taco)',
        'Refried beans (1/2 c)',
        'Rice (1/2 c)',
        'Whole milk (1 c)',
        '579 cal, 30 gm pro',
      ]
      data.thursday.snack = [
        'Banana (1) with peanut butter (2 Tbs)',
        'Whole milk (1 c)',
        '445 cal, 16 gm pro',
      ]

      data.friday.breakfast = [
        'English muffin (1) with nut butter (2 Tbs)',
        'Whole milk (1 c)',
        '540 cal, 22 gm pro',
      ]
      data.friday.lunch = [
        'Chicken & cheese pita (1 pita) with avocado (2 Tbs)',
        'Cherry tomatoes (1 c)',
        'Whole milk (1 c)',
        '555 cal, 32 gm pro',
      ]
      data.friday.dinner = [
        'Fettuccine alfredo (3/4 cup prepared) with shrimp (1/2 c) & broccoli (1/2 c)',
        'Garlic bread (1 slice)',
        'Whole milk (1 c)',
        '744 cal, 48 gm pro',
      ]
      data.friday.snack = [
        'String cheese (1 stick)',
        'Crackers (5)',
        'Whole milk (1 c)',
        '280 cal,14 gm pro',
      ]

      data.saturday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.saturday.lunch = [
        'Chicken stir fry (1 c) with veggies (1/2 c)',
        'Pineapple (1/2 c)',
        'Whole milk (1 c)',
        '482 cal, 24 gm pro',
      ]
      data.saturday.dinner = [
        'Meat with potatoes & gravy (1 c total meal)',
        'Cooked carrots (1/2 c)',
        'Roll (1) with butter (1 Tbs)',
        'Whole milk (1 c)',
        '593 cal, 26 gm pro',
      ]
      data.saturday.snack = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]

      data.sunday.breakfast = [
        'Hard-boilded egg (1 large)',
        'Fruit (1/2 c)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Whole milk (1 c)',
        '422 cal, 18 gm pro',
      ]
      data.sunday.lunch = [
        'Tomato soup (1 c) made with milk',
        'Grilled cheese (1/2 sandwich)',
        'Whole milk (1 c)',
        'Whole milk (1 c)',
        '624 cal, 28 gm pro',
      ]
      data.sunday.dinner = [
        'Meatloaf with gravy (5 oz)',
        'Green beans (1/2 c)',
        'Bread (1 slice) & butter (2 Tbs)',
        'Whole milk (1 c)',
        '490 cal, 31 gm pro',
      ]
      data.sunday.snack = ['Cookies (3)', 'Whole milk (1 c)', '375 cal, 10 gm pro']
    }
  }
  if (data.bmiCategorie == 'Obesity') {
    if (data.lifestyle == 'Sedentary lifestyle') {
      // if user's BMI categorie is Obesity and slects Sedentary lifestyle as his/her lifestyle they will get following meals in their diet plan
      data.monday.breakfast = [
        'Ham & cheese omlet prepared in 1 Tbs olive oil (2 eggs, 1oz. ham, 1/4 c cheese)',
        'Cranberry juice (1 c)',
        '413 cal, 18 gm pro',
      ]
      data.monday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)', 'Potato salad (1/2 c)']
      data.monday.dinner = [
        'Spagetti with meatballs (1-1.5 c)',
        'Garlic bread (1 slice)',
        'Fruit (1/2 c)',
        'Whole milk (1 c)',
        '615 cal, 26 gm pro',
      ]
      data.monday.snack = ['Greek yogurt parfalt (1 c)', '126 cal, 5 gm pro']

      data.tuesday.breakfast = [
        'Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)',
        'Greek yogurt with fruit (1 single serve container)',
        'Whole milk (1 c)',
        '644 cal, 22 gm pro',
      ]
      data.tuesday.lunch = [
        'Ham salad sandwich (1/2 c on 2 pc bread)',
        'Edamame (1/2 c)',
        'Whole milk (1 c)',
        '710 cal, 35 gm pro',
      ]
      data.tuesday.dinner = [
        'Lasagna (1/2 c)',
        'Roll (1) with butter (1 Tbs)',
        'Whole milk (1 c)',
        '608 cal, 24 gm pro',
      ]
      data.tuesday.snack = [
        'Cottage cheese (1/2 c)',
        'Canned fruit (1 snack pack)',
        '180 cal, 11 gm pro',
      ]

      data.wednesday.breakfast = [
        'Srambled eggs (1 large)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Fruit juice (1/2 c)',
        '284 cal, 10 gm pro',
      ]
      data.wednesday.lunch = [
        'Cheseburger with bun (1 sand)',
        'Fries (1 small serving)',
        'Chocolate milk shake (1 c)',
        '1021 cal, 40 gm pro',
      ]
      data.wednesday.dinner = [
        'Salmon (1 sm fillet) prepared in butter (1 Tbs)',
        'Rice (1/2 c)',
        'Broccoli (1/2 c)',
        'Whole milk (1 c)',
        '595 cal, 55 gm pro',
      ]
      data.wednesday.snack = ['Banana (1) with peanut butter (2 Tbs)', '295 cal, 8 gm pro']

      data.thursday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.thursday.lunch = [
        'Tuna salad sandwich (1/2 c on 2 pc bread)',
        'Baby carrots (5)',
        'Whole milk (1 c)',
        '627 cal, 38 gm pro',
      ]
      data.thursday.dinner = [
        'Ground beef tacos (1 taco)',
        'Refried beans (1/2 c)',
        'Rice (1/2 c)',
        'Whole milk (1 c)',
        '579 cal, 30 gm pro',
      ]
      data.thursday.snack = [
        'Banana (1) with peanut butter (2 Tbs)',
        'Whole milk (1 c)',
        '445 cal, 16 gm pro',
      ]

      data.friday.breakfast = [
        'English muffin (1) with nut butter (2 Tbs)',
        'Whole milk (1 c)',
        '540 cal, 22 gm pro',
      ]
      data.friday.lunch = [
        'Chicken & cheese pita (1 pita) with avocado (2 Tbs)',
        'Cherry tomatoes (1 c)',
        'Whole milk (1 c)',
        '555 cal, 32 gm pro',
      ]
      data.friday.dinner = [
        'Fettuccine alfredo (3/4 cup prepared) with shrimp (1/2 c) & broccoli (1/2 c)',
        'Garlic bread (1 slice)',
        'Whole milk (1 c)',
        '744 cal, 48 gm pro',
      ]
      data.friday.snack = [
        'String cheese (1 stick)',
        'Crackers (5)',
        'Whole milk (1 c)',
        '280 cal,14 gm pro',
      ]

      data.saturday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.saturday.lunch = [
        'Chicken stir fry (1 c) with veggies (1/2 c)',
        'Pineapple (1/2 c)',
        'Whole milk (1 c)',
        '482 cal, 24 gm pro',
      ]
      data.saturday.dinner = [
        'Meat with potatoes & gravy (1 c total meal)',
        'Cooked carrots (1/2 c)',
        'Roll (1) with butter (1 Tbs)',
        'Whole milk (1 c)',
        '593 cal, 26 gm pro',
      ]
      data.saturday.snack = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]

      data.sunday.breakfast = [
        'Hard-boilded egg (1 large)',
        'Fruit (1/2 c)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Whole milk (1 c)',
        '422 cal, 18 gm pro',
      ]
      data.sunday.lunch = [
        'Tomato soup (1 c) made with milk',
        'Grilled cheese (1/2 sandwich)',
        'Whole milk (1 c)',
        'Whole milk (1 c)',
        '624 cal, 28 gm pro',
      ]
      data.sunday.dinner = [
        'Meatloaf with gravy (5 oz)',
        'Green beans (1/2 c)',
        'Bread (1 slice) & butter (2 Tbs)',
        'Whole milk (1 c)',
        '490 cal, 31 gm pro',
      ]
      data.sunday.snack = ['Cookies (3)', 'Whole milk (1 c)', '375 cal, 10 gm pro']
    }
    if (data.lifestyle == 'Lightly active') {
      // if user's BMI categorie is Obesity and slects Lightly active lifestyle as his/her lifestyle they will get following meals in their diet plan
      data.monday.breakfast = [
        'Tomato soup (1 c) made with milk',
        'Grilled cheese (1/2 sandwich)',
        'Whole milk (1 c)',
        'Whole milk (1 c)',
        '624 cal, 28 gm pro',
      ]
      data.monday.lunch = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]
      data.monday.dinner = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.monday.snack = ['Cookies (3)', 'Whole milk (1 c)', '375 cal, 10 gm pro']

      data.tuesday.breakfast = [
        'English muffin (1) with nut butter (2 Tbs)',
        'Whole milk (1 c)',
        '540 cal, 22 gm pro',
      ]
      data.tuesday.lunch = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.tuesday.dinner = [
        'Tuna salad sandwich (1/2 c on 2 pc bread)',
        'Baby carrots (5)',
        'Whole milk (1 c)',
        '627 cal, 38 gm pro',
      ]
      data.tuesday.snack = [
        'String cheese (1 stick)',
        'Crackers (5)',
        'Whole milk (1 c)',
        '280 cal,14 gm pro',
      ]

      data.wednesday.breakfast = [
        'Chicken & cheese pita (1 pita) with avocado (2 Tbs)',
        'Cherry tomatoes (1 c)',
        'Whole milk (1 c)',
        '555 cal, 32 gm pro',
      ]
      data.wednesday.lunch = [
        'Salmon (1 sm fillet) prepared in butter (1 Tbs)',
        'Rice (1/2 c)',
        'Broccoli (1/2 c)',
        'Whole milk (1 c)',
        '595 cal, 55 gm pro',
      ]
      data.wednesday.dinner = [
        'Tuna salad sandwich (1/2 c on 2 pc bread)',
        'Baby carrots (5)',
        'Whole milk (1 c)',
        '627 cal, 38 gm pro',
      ]
      data.wednesday.snack = ['Greek yogurt parfalt (1 c)', '126 cal, 5 gm pro']

      data.thursday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.thursday.lunch = [
        'Salmon (1 sm fillet) prepared in butter (1 Tbs)',
        'Rice (1/2 c)',
        'Broccoli (1/2 c)',
        'Whole milk (1 c)',
        '595 cal, 55 gm pro',
      ]
      data.thursday.dinner = ['Barbeque (2 Tbs) chicken (3.5 oz)', 'Potato salad (1/2 c)']
      data.thursday.snack = ['Banana (1) with peanut butter (2 Tbs)', '295 cal, 8 gm pro']

      data.friday.breakfast = [
        'Ham salad sandwich (1/2 c on 2 pc bread)',
        'Edamame (1/2 c)',
        'Whole milk (1 c)',
        '710 cal, 35 gm pro',
      ]
      data.friday.lunch = [
        'Tomato soup (1 c) made with milk',
        'Grilled cheese (1/2 sandwich)',
        'Whole milk (1 c)',
        'Whole milk (1 c)',
        '624 cal, 28 gm pro',
      ]
      data.friday.dinner = [
        'Meatloaf with gravy (5 oz)',
        'Green beans (1/2 c)',
        'Bread (1 slice) & butter (2 Tbs)',
        'Whole milk (1 c)',
        '490 cal, 31 gm pro',
      ]
      data.friday.snack = ['Cookies (3)', 'Whole milk (1 c)', '375 cal, 10 gm pro']

      data.saturday.breakfast = [
        'Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)',
        'Greek yogurt with fruit (1 single serve container)',
        'Whole milk (1 c)',
        '644 cal, 22 gm pro',
      ]
      data.saturday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)', 'Potato salad (1/2 c)']
      data.saturday.dinner = [
        'Spagetti with meatballs (1-1.5 c)',
        'Garlic bread (1 slice)',
        'Fruit (1/2 c)',
        'Whole milk (1 c)',
        '615 cal, 26 gm pro',
      ]
      data.saturday.snack = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]

      data.sunday.breakfast = [
        'Srambled eggs (1 large)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Fruit juice (1/2 c)',
        '284 cal, 10 gm pro',
      ]
      data.sunday.lunch = [
        'Spagetti with meatballs (1-1.5 c)',
        'Garlic bread (1 slice)',
        'Fruit (1/2 c)',
        'Whole milk (1 c)',
        '615 cal, 26 gm pro',
      ]
      data.sunday.dinner = [
        'Meatloaf with gravy (5 oz)',
        'Green beans (1/2 c)',
        'Bread (1 slice) & butter (2 Tbs)',
        'Whole milk (1 c)',
        '490 cal, 31 gm pro',
      ]
      data.sunday.snack = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]
    }
    if (data.lifestyle == 'Moderately active') {
      // if user's BMI categorie is Obesity and slects Moderately active lifestyle as his/her lifestyle they will get following meals in their diet plan
      data.monday.breakfast = [
        'Ham & cheese omlet prepared in 1 Tbs olive oil (2 eggs, 1oz. ham, 1/4 c cheese)',
        'Cranberry juice (1 c)',
        '413 cal, 18 gm pro',
      ]
      data.monday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)', 'Potato salad (1/2 c)']
      data.monday.dinner = [
        'Spagetti with meatballs (1-1.5 c)',
        'Garlic bread (1 slice)',
        'Fruit (1/2 c)',
        'Whole milk (1 c)',
        '615 cal, 26 gm pro',
      ]
      data.monday.snack = ['Greek yogurt parfalt (1 c)', '126 cal, 5 gm pro']

      data.tuesday.breakfast = [
        'Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)',
        'Greek yogurt with fruit (1 single serve container)',
        'Whole milk (1 c)',
        '644 cal, 22 gm pro',
      ]
      data.tuesday.lunch = [
        'Ham salad sandwich (1/2 c on 2 pc bread)',
        'Edamame (1/2 c)',
        'Whole milk (1 c)',
        '710 cal, 35 gm pro',
      ]
      data.tuesday.dinner = [
        'Lasagna (1/2 c)',
        'Roll (1) with butter (1 Tbs)',
        'Whole milk (1 c)',
        '608 cal, 24 gm pro',
      ]
      data.tuesday.snack = [
        'Cottage cheese (1/2 c)',
        'Canned fruit (1 snack pack)',
        '180 cal, 11 gm pro',
      ]

      data.wednesday.breakfast = [
        'Srambled eggs (1 large)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Fruit juice (1/2 c)',
        '284 cal, 10 gm pro',
      ]
      data.wednesday.lunch = [
        'Cheseburger with bun (1 sand)',
        'Fries (1 small serving)',
        'Chocolate milk shake (1 c)',
        '1021 cal, 40 gm pro',
      ]
      data.wednesday.dinner = [
        'Salmon (1 sm fillet) prepared in butter (1 Tbs)',
        'Rice (1/2 c)',
        'Broccoli (1/2 c)',
        'Whole milk (1 c)',
        '595 cal, 55 gm pro',
      ]
      data.wednesday.snack = ['Banana (1) with peanut butter (2 Tbs)', '295 cal, 8 gm pro']

      data.thursday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.thursday.lunch = [
        'Tuna salad sandwich (1/2 c on 2 pc bread)',
        'Baby carrots (5)',
        'Whole milk (1 c)',
        '627 cal, 38 gm pro',
      ]
      data.thursday.dinner = [
        'Ground beef tacos (1 taco)',
        'Refried beans (1/2 c)',
        'Rice (1/2 c)',
        'Whole milk (1 c)',
        '579 cal, 30 gm pro',
      ]
      data.thursday.snack = [
        'Banana (1) with peanut butter (2 Tbs)',
        'Whole milk (1 c)',
        '445 cal, 16 gm pro',
      ]

      data.friday.breakfast = [
        'English muffin (1) with nut butter (2 Tbs)',
        'Whole milk (1 c)',
        '540 cal, 22 gm pro',
      ]
      data.friday.lunch = [
        'Chicken & cheese pita (1 pita) with avocado (2 Tbs)',
        'Cherry tomatoes (1 c)',
        'Whole milk (1 c)',
        '555 cal, 32 gm pro',
      ]
      data.friday.dinner = [
        'Fettuccine alfredo (3/4 cup prepared) with shrimp (1/2 c) & broccoli (1/2 c)',
        'Garlic bread (1 slice)',
        'Whole milk (1 c)',
        '744 cal, 48 gm pro',
      ]
      data.friday.snack = [
        'String cheese (1 stick)',
        'Crackers (5)',
        'Whole milk (1 c)',
        '280 cal,14 gm pro',
      ]

      data.saturday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.saturday.lunch = [
        'Chicken stir fry (1 c) with veggies (1/2 c)',
        'Pineapple (1/2 c)',
        'Whole milk (1 c)',
        '482 cal, 24 gm pro',
      ]
      data.saturday.dinner = [
        'Meat with potatoes & gravy (1 c total meal)',
        'Cooked carrots (1/2 c)',
        'Roll (1) with butter (1 Tbs)',
        'Whole milk (1 c)',
        '593 cal, 26 gm pro',
      ]
      data.saturday.snack = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]

      data.sunday.breakfast = [
        'Hard-boilded egg (1 large)',
        'Fruit (1/2 c)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Whole milk (1 c)',
        '422 cal, 18 gm pro',
      ]
      data.sunday.lunch = [
        'Tomato soup (1 c) made with milk',
        'Grilled cheese (1/2 sandwich)',
        'Whole milk (1 c)',
        'Whole milk (1 c)',
        '624 cal, 28 gm pro',
      ]
      data.sunday.dinner = [
        'Meatloaf with gravy (5 oz)',
        'Green beans (1/2 c)',
        'Bread (1 slice) & butter (2 Tbs)',
        'Whole milk (1 c)',
        '490 cal, 31 gm pro',
      ]
      data.sunday.snack = ['Cookies (3)', 'Whole milk (1 c)', '375 cal, 10 gm pro']
    }
    if (data.lifestyle == 'Active lifestyle') {
      // if user's BMI categorie is Obesity and slects Active lifestyle as his/her lifestyle they will get following meals in their diet plan
      data.monday.breakfast = [
        'Tomato soup (1 c) made with milk',
        'Grilled cheese (1/2 sandwich)',
        'Whole milk (1 c)',
        'Whole milk (1 c)',
        '624 cal, 28 gm pro',
      ]
      data.monday.lunch = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]
      data.monday.dinner = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.monday.snack = ['Cookies (3)', 'Whole milk (1 c)', '375 cal, 10 gm pro']

      data.tuesday.breakfast = [
        'English muffin (1) with nut butter (2 Tbs)',
        'Whole milk (1 c)',
        '540 cal, 22 gm pro',
      ]
      data.tuesday.lunch = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.tuesday.dinner = [
        'Tuna salad sandwich (1/2 c on 2 pc bread)',
        'Baby carrots (5)',
        'Whole milk (1 c)',
        '627 cal, 38 gm pro',
      ]
      data.tuesday.snack = [
        'String cheese (1 stick)',
        'Crackers (5)',
        'Whole milk (1 c)',
        '280 cal,14 gm pro',
      ]

      data.wednesday.breakfast = [
        'Chicken & cheese pita (1 pita) with avocado (2 Tbs)',
        'Cherry tomatoes (1 c)',
        'Whole milk (1 c)',
        '555 cal, 32 gm pro',
      ]
      data.wednesday.lunch = [
        'Salmon (1 sm fillet) prepared in butter (1 Tbs)',
        'Rice (1/2 c)',
        'Broccoli (1/2 c)',
        'Whole milk (1 c)',
        '595 cal, 55 gm pro',
      ]
      data.wednesday.dinner = [
        'Tuna salad sandwich (1/2 c on 2 pc bread)',
        'Baby carrots (5)',
        'Whole milk (1 c)',
        '627 cal, 38 gm pro',
      ]
      data.wednesday.snack = ['Greek yogurt parfalt (1 c)', '126 cal, 5 gm pro']

      data.thursday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.thursday.lunch = [
        'Salmon (1 sm fillet) prepared in butter (1 Tbs)',
        'Rice (1/2 c)',
        'Broccoli (1/2 c)',
        'Whole milk (1 c)',
        '595 cal, 55 gm pro',
      ]
      data.thursday.dinner = ['Barbeque (2 Tbs) chicken (3.5 oz)', 'Potato salad (1/2 c)']
      data.thursday.snack = ['Banana (1) with peanut butter (2 Tbs)', '295 cal, 8 gm pro']

      data.friday.breakfast = [
        'Ham salad sandwich (1/2 c on 2 pc bread)',
        'Edamame (1/2 c)',
        'Whole milk (1 c)',
        '710 cal, 35 gm pro',
      ]
      data.friday.lunch = [
        'Tomato soup (1 c) made with milk',
        'Grilled cheese (1/2 sandwich)',
        'Whole milk (1 c)',
        'Whole milk (1 c)',
        '624 cal, 28 gm pro',
      ]
      data.friday.dinner = [
        'Meatloaf with gravy (5 oz)',
        'Green beans (1/2 c)',
        'Bread (1 slice) & butter (2 Tbs)',
        'Whole milk (1 c)',
        '490 cal, 31 gm pro',
      ]
      data.friday.snack = ['Cookies (3)', 'Whole milk (1 c)', '375 cal, 10 gm pro']

      data.saturday.breakfast = [
        'Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)',
        'Greek yogurt with fruit (1 single serve container)',
        'Whole milk (1 c)',
        '644 cal, 22 gm pro',
      ]
      data.saturday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)', 'Potato salad (1/2 c)']
      data.saturday.dinner = [
        'Spagetti with meatballs (1-1.5 c)',
        'Garlic bread (1 slice)',
        'Fruit (1/2 c)',
        'Whole milk (1 c)',
        '615 cal, 26 gm pro',
      ]
      data.saturday.snack = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]

      data.sunday.breakfast = [
        'Srambled eggs (1 large)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Fruit juice (1/2 c)',
        '284 cal, 10 gm pro',
      ]
      data.sunday.lunch = [
        'Spagetti with meatballs (1-1.5 c)',
        'Garlic bread (1 slice)',
        'Fruit (1/2 c)',
        'Whole milk (1 c)',
        '615 cal, 26 gm pro',
      ]
      data.sunday.dinner = [
        'Meatloaf with gravy (5 oz)',
        'Green beans (1/2 c)',
        'Bread (1 slice) & butter (2 Tbs)',
        'Whole milk (1 c)',
        '490 cal, 31 gm pro',
      ]
      data.sunday.snack = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]
    }
    if (data.lifestyle == 'Very active lifestyle') {
      // if user's BMI categorie is Obesity and slects Very active lifestyle as his/her lifestyle they will get following meals in their diet plan
      data.monday.breakfast = [
        'Ham & cheese omlet prepared in 1 Tbs olive oil (2 eggs, 1oz. ham, 1/4 c cheese)',
        'Cranberry juice (1 c)',
        '413 cal, 18 gm pro',
      ]
      data.monday.lunch = ['Barbeque (2 Tbs) chicken (3.5 oz)', 'Potato salad (1/2 c)']
      data.monday.dinner = [
        'Spagetti with meatballs (1-1.5 c)',
        'Garlic bread (1 slice)',
        'Fruit (1/2 c)',
        'Whole milk (1 c)',
        '615 cal, 26 gm pro',
      ]
      data.monday.snack = ['Greek yogurt parfalt (1 c)', '126 cal, 5 gm pro']

      data.tuesday.breakfast = [
        'Waffles (1) with butter (1 Tbs) & syrup (2 Tbs)',
        'Greek yogurt with fruit (1 single serve container)',
        'Whole milk (1 c)',
        '644 cal, 22 gm pro',
      ]
      data.tuesday.lunch = [
        'Ham salad sandwich (1/2 c on 2 pc bread)',
        'Edamame (1/2 c)',
        'Whole milk (1 c)',
        '710 cal, 35 gm pro',
      ]
      data.tuesday.dinner = [
        'Lasagna (1/2 c)',
        'Roll (1) with butter (1 Tbs)',
        'Whole milk (1 c)',
        '608 cal, 24 gm pro',
      ]
      data.tuesday.snack = [
        'Cottage cheese (1/2 c)',
        'Canned fruit (1 snack pack)',
        '180 cal, 11 gm pro',
      ]

      data.wednesday.breakfast = [
        'Srambled eggs (1 large)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Fruit juice (1/2 c)',
        '284 cal, 10 gm pro',
      ]
      data.wednesday.lunch = [
        'Cheseburger with bun (1 sand)',
        'Fries (1 small serving)',
        'Chocolate milk shake (1 c)',
        '1021 cal, 40 gm pro',
      ]
      data.wednesday.dinner = [
        'Salmon (1 sm fillet) prepared in butter (1 Tbs)',
        'Rice (1/2 c)',
        'Broccoli (1/2 c)',
        'Whole milk (1 c)',
        '595 cal, 55 gm pro',
      ]
      data.wednesday.snack = ['Banana (1) with peanut butter (2 Tbs)', '295 cal, 8 gm pro']

      data.thursday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.thursday.lunch = [
        'Tuna salad sandwich (1/2 c on 2 pc bread)',
        'Baby carrots (5)',
        'Whole milk (1 c)',
        '627 cal, 38 gm pro',
      ]
      data.thursday.dinner = [
        'Ground beef tacos (1 taco)',
        'Refried beans (1/2 c)',
        'Rice (1/2 c)',
        'Whole milk (1 c)',
        '579 cal, 30 gm pro',
      ]
      data.thursday.snack = [
        'Banana (1) with peanut butter (2 Tbs)',
        'Whole milk (1 c)',
        '445 cal, 16 gm pro',
      ]

      data.friday.breakfast = [
        'English muffin (1) with nut butter (2 Tbs)',
        'Whole milk (1 c)',
        '540 cal, 22 gm pro',
      ]
      data.friday.lunch = [
        'Chicken & cheese pita (1 pita) with avocado (2 Tbs)',
        'Cherry tomatoes (1 c)',
        'Whole milk (1 c)',
        '555 cal, 32 gm pro',
      ]
      data.friday.dinner = [
        'Fettuccine alfredo (3/4 cup prepared) with shrimp (1/2 c) & broccoli (1/2 c)',
        'Garlic bread (1 slice)',
        'Whole milk (1 c)',
        '744 cal, 48 gm pro',
      ]
      data.friday.snack = [
        'String cheese (1 stick)',
        'Crackers (5)',
        'Whole milk (1 c)',
        '280 cal,14 gm pro',
      ]

      data.saturday.breakfast = [
        'Oatmeal (1/2 c) with nut butter (2 Tbs)',
        'Fruit juice (1/2 c)',
        '405 cal, 14 gm pro',
      ]
      data.saturday.lunch = [
        'Chicken stir fry (1 c) with veggies (1/2 c)',
        'Pineapple (1/2 c)',
        'Whole milk (1 c)',
        '482 cal, 24 gm pro',
      ]
      data.saturday.dinner = [
        'Meat with potatoes & gravy (1 c total meal)',
        'Cooked carrots (1/2 c)',
        'Roll (1) with butter (1 Tbs)',
        'Whole milk (1 c)',
        '593 cal, 26 gm pro',
      ]
      data.saturday.snack = [
        'Hard-boiled egg (1 large)',
        'Cherry tomatoes (1/2 c)',
        '109 cal 8 gm pro',
      ]

      data.sunday.breakfast = [
        'Hard-boilded egg (1 large)',
        'Fruit (1/2 c)',
        'Toast (1 slice) with butter (1 Tbs) & jelly (1 Tbs)',
        'Whole milk (1 c)',
        '422 cal, 18 gm pro',
      ]
      data.sunday.lunch = [
        'Tomato soup (1 c) made with milk',
        'Grilled cheese (1/2 sandwich)',
        'Whole milk (1 c)',
        'Whole milk (1 c)',
        '624 cal, 28 gm pro',
      ]
      data.sunday.dinner = [
        'Meatloaf with gravy (5 oz)',
        'Green beans (1/2 c)',
        'Bread (1 slice) & butter (2 Tbs)',
        'Whole milk (1 c)',
        '490 cal, 31 gm pro',
      ]
      data.sunday.snack = ['Cookies (3)', 'Whole milk (1 c)', '375 cal, 10 gm pro']
    }
  }
}

function toggleForm() {
  if (data.errors.length == 0) {
    data.show = true
  } else {
    data.show = false
  }
}
</script>

<template>
  <!-- Customize Diet Plan Section -->
  <div class="container center light-grey" style="padding: 128px 16px" id="create-diet-plans">
    <!-- User input form -->
    <form
      v-if="!data.show"
      class="row-padding"
      style="margin-top: 64px"
      @submit.prevent="
        checkForm(),
          toggleForm(),
          computeBMI(),
          computeBMR(),
          computeTotalDailyCalorieNeeds(),
          computeBodyFat(),
          createDietPlan()
      "
    >
      <!-- Call events on form submission -->
      <h3>LET US HELP CHOOSE THE BEST DIET PLAN FOR YOU</h3>
      <h4>PLEASE FILL IN THE FIELDS TO CREATE YOUR DIET PLAN</h4>
      <div class="third padding-16">
        <img
          class="margin-bottom jumbo"
          src="https://img.icons8.com/ios-glyphs/50/000000/user--v1.png"
        />
        <p class="large">ENTER YOUR NAME <span class="medium">(Optional)</span></p>
        <input
          type="text"
          class="input"
          id="username"
          name="username"
          v-model.trim="data.userName"
        />
      </div>
      <div class="third padding-16">
        <img
          class="margin-bottom jumbo"
          src="https://img.icons8.com/ios-filled/50/000000/gender.png"
        />
        <p class="large">SELECT YOUR GENDER</p>
        <input
          type="radio"
          class="radio"
          id="male"
          name="male"
          value="Male"
          v-model="data.gender"
          @click="data.showHip = false"
        />
        <label for="male">Male</label>
        <input
          type="radio"
          class="radio"
          id="female"
          name="female"
          value="Female"
          v-model="data.gender"
          @click="data.showHip = true"
        />
        <label for="female">Female</label>
      </div>
      <div class="third padding-16">
        <img
          class="margin-bottom jumbo"
          src="https://img.icons8.com/ios-filled/50/000000/age.png"
        />
        <p class="large">ENTER YOUR AGE</p>
        <input
          class="input"
          type="number"
          min="0"
          @input="validity.valid || (value = '')"
          id="age"
          name="age"
          v-model.number="data.age"
        />
        <label for="age">Years Old</label>
      </div>
      <div class="third padding-16">
        <img
          class="margin-bottom jumbo"
          src="https://img.icons8.com/ios-filled/50/000000/tape-measure.png"
        />
        <p class="large">ENTER YOUR HEIGHT</p>
        <input
          class="input"
          type="number"
          min="0"
          @input="validity.valid || (value = '')"
          id="height"
          name="height"
          v-model.number="data.height"
        />
        <label for="height">cm</label>
      </div>
      <div class="third padding-16">
        <img
          class="margin-bottom jumbo"
          src="https://img.icons8.com/ios-filled/50/000000/weighing.png"
        />
        <p class="large">ENTER YOUR WEIGHT</p>
        <input
          class="input"
          type="number"
          min="0"
          @input="validity.valid || (value = '')"
          id="weight"
          name="weight"
          v-model.number="data.weight"
        />
        <label for="weight">kg</label>
      </div>
      <div class="third padding-16">
        <img
          class="margin-bottom jumbo"
          src="https://img.icons8.com/ios-filled/50/000000/neck2.png"
        />
        <p class="large">ENTER YOUR NECK MEASURMENT</p>
        <input
          class="input"
          type="number"
          min="0"
          @input="validity.valid || (value = '')"
          id="neck"
          name="neck"
          v-model.number="data.neck"
        />
        <label for="neck">cm</label>
      </div>
      <div class="third padding-16">
        <img
          class="margin-bottom jumbo"
          src="https://img.icons8.com/ios-glyphs/50/000000/waist.png"
        />
        <p class="large">ENTER YOUR WAIST MEASURMENT</p>
        <input
          class="input"
          type="number"
          min="0"
          @input="validity.valid || (value = '')"
          id="waist"
          name="waist"
          v-model.number="data.waist"
        />
        <label for="waist">cm</label>
      </div>
      <div v-show="data.showHip" class="third padding-16">
        <img
          class="margin-bottom jumbo"
          src="https://img.icons8.com/ios/50/000000/woman-hips.png"
        />
        <p class="large">ENTER YOUR HIP MEASURMENT</p>
        <input
          class="input"
          type="number"
          min="0"
          @input="validity.valid || (value = '')"
          id="hip"
          name="hip"
          v-model.number="data.hip"
        />
        <label for="hip">cm</label>
      </div>
      <div class="third padding-16">
        <img
          class="margin-bottom jumbo"
          src="https://img.icons8.com/ios-filled/50/000000/hyperactive.png"
        />
        <p class="large">CHOOSE THE LIFESTYLE THAT BEST SUITS YOU</p>
        <select class="select" id="lifestyle" name="lifestyle" v-model="data.lifestyle">
          <!-- Render options for lifestyle -->
          <option v-for="item in data.lifestyleOptions" :value="item.option" :key="item">
            {{ item.option }} - {{ item.description }}
          </option>
        </select>
      </div>
      <div class="row-padding" style="margin-top: 64px">
        <button type="submit" class="button black padding-large large margin-top hover-light-green">
          CREATE
        </button>
      </div>
      <p class="small text-grey">
        This calculator is for informational purposes only, you should consult a healthcare provider
        before making any health decisions.
        <br />
        The calculator is based on the Mifflin-St. Jeor equation, a formula that has been shown to
        be an accurate way of estimating calorie needs in numerous studies.
      </p>
    </form>
    <!-- Show Empty Fields -->
    <div v-if="data.errors.length" class="row-padding" style="margin-top: 64px">
      <b>Please input the following field(s):</b>
      <ul style="list-style-type: none; padding-left: 0">
        <li v-for="error in data.errors" :key="error">{{ error }}</li>
      </ul>
    </div>
    <div v-if="data.show" class="container center" style="padding: 128px 16px" id="content">
      <h3>
        Hi <b>{{ data.userName }}</b
        >, This Is Your Personalized Diet Plan
      </h3>
      <div class="row-padding">
        <!-- Age, Height, Weight, Gender, Lifestyle, Measurements => BMI, BMR, Body Fat, Calories Needed, Lose or Gain Weight -->
        <div class="col section center padding-16">
          <p><b>Gender:</b> {{ data.gender }}</p>
          <p><b>Age:</b> {{ data.age }}</p>
          <p><b>Height:</b> {{ data.height }} cm</p>
          <p><b>Weight:</b> {{ data.weight }} kg</p>
          <p><b>Lifestyle:</b> {{ data.lifestyle }}</p>
          <p><b>BMI (Body mass index):</b> {{ data.bmi }} kg/m<span>&#178;</span></p>
          <p><b>BMI Categorie</b> - {{ data.bmiCategorie }}</p>
          <p><b>BMR (Basal metabolic rate):</b> {{ data.bmr }} kCal / day</p>
          <p><b>Body fat percentage:</b> {{ data.bodyFat }}%</p>
          <p><b>Total Daily Calorie Needs:</b> {{ data.totalDailyCalorieNeeds }} kcal</p>
          <p>Based on your information, we have prepared the following meal plan just for you.</p>
          <p><b>THANK YOU FOR SELECTING APOLLOFIT!</b></p>
          <div
            class="col section center padding-16"
            v-for="(day, index) in [
              ['Monday', data.monday],
              ['Tuesday', data.tuesday],
              ['Wednessday', data.wednesday],
              ['Thursday', data.thursday],
              ['Friday', data.friday],
              ['Saturday', data.saturday],
              ['Sunday', data.sunday],
            ]"
            :key="index"
          >
            <ul class="ul white">
              <li class="xlarge padding-32 pale-green">
                {{ day[0] }}
              </li>
              <li class="padding-16">
                <p><b>Breakfast</b></p>
                <p v-for="food in day[1].breakfast" :key="food">{{ food }}</p>
              </li>
              <li class="padding-16">
                <p><b>Lunch</b></p>
                <p v-for="food in day[1].lunch" :key="food">{{ food }}</p>
              </li>
              <li class="padding-16">
                <p><b>Dinner</b></p>
                <p v-for="food in day[1].dinner" :key="food">{{ food }}</p>
              </li>
              <li class="padding-16">
                <p><b>Snack</b></p>
                <p v-for="food in day[1].snack" :key="food">{{ food }}</p>
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
      <p class="large">Boost your progress with the help of a workout plan.</p>
      <RouterLink to="/workout-plans"
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
