# APOLLOFIT

A fitness web app built with **Vue 3** and **Vite**. It works out your health metrics from a few measurements, then builds a diet or workout plan that fits your body type, goals and lifestyle. It also includes a searchable library of ready-made plans.

**Live demo:** [apollofit.vercel.app](https://apollofit.vercel.app/) · **Case study:** [brianjcaldera.com/projects/apollofit](https://brianjcaldera.com/projects/apollofit/)

![APOLLOFIT home page](https://brianjcalderaportfolio.wordpress.com/wp-content/uploads/2025/05/apollofit_home_page_ss.png?w=1024)

![Vue.js](https://img.shields.io/badge/Vue-3-4FC08D?logo=vuedotjs&logoColor=white)
![Vue Router](https://img.shields.io/badge/Vue_Router-4-4FC08D?logo=vuedotjs&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?logo=javascript&logoColor=black)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

---

## Contents

- [Features](#features)
- [Tech stack](#tech-stack)
- [How it works](#how-it-works)
- [Project structure](#project-structure)
- [Getting started](#getting-started)
- [Scripts](#scripts)
- [Credits](#credits)
- [Disclaimer](#disclaimer)
- [License](#license)

## Features

**Diet plans**
- Enter your gender, age, height, weight, body measurements and activity level
- Get a weekly meal plan with breakfast, lunch, dinner and snacks for every day
- Plans are chosen by BMI category and built around your daily calorie needs

**Workout plans**
- Choose a goal: build strength, build muscle or build endurance
- Choose a body type: ectomorph, mesomorph or endomorph
- Get a matching training plan, with sets, reps and rest times set by your goal

**Health metrics**
- BMI and weight category (WHO adult ranges)
- BMR and total daily calorie needs
- Body fat percentage

**Explore**
- Searchable library of ready-made diet and workout plans that filters as you type
- Workout library with exercise illustrations

## Tech stack

| Area | Technology |
|---|---|
| Framework | Vue 3 (Composition API, single-file components) |
| Routing | Vue Router 4 |
| Build tool | Vite 5 |
| Styling | Hand-written CSS with custom colour variables and page transitions |
| Code quality | ESLint and Prettier |
| Hosting | Vercel, with Vercel Analytics |

## How it works

All calculations run in the browser, so there's no backend and no data leaves your device.

| Metric | Method |
|---|---|
| **BMI** | Weight (kg) ÷ height (m)², grouped into the WHO adult ranges: under 18.5, 18.5–24.9, 25–29.9 and 30+ |
| **BMR** | Mifflin-St Jeor equation, with separate formulas for men and women |
| **Daily calories** | BMR × an activity multiplier, from 1.2 (sedentary) to 1.9 (very active) |
| **Body fat %** | U.S. Navy method, using waist and neck measurements (plus hips for women) |

Forms check every input before a plan is generated and show clear error messages for anything missing. The plan search uses Vue computed properties, so results update instantly as you type.

## Project structure

```
src/
├── App.vue
├── main.js
├── router/index.js        # Routes: home, workouts, diet and workout plans, search, about, contact
├── views/                 # One view per route
├── components/
│   ├── DietPlansComponent.vue           # Health metrics and weekly meal plans
│   ├── WorkoutPlansComponent.vue        # Workout plans by goal and body type
│   ├── SearchDietPlansComponent.vue     # Searchable diet plan library
│   ├── SearchWorkoutPlansComponent.vue  # Searchable workout plan library
│   └── ...                              # Navbar, header, footer, about, contact, subscribe
└── css/                   # Colours, layout, normalize and transitions
public/                    # Photos, exercise illustrations, icons and logos
```

## Getting started

### Prerequisites

- Node.js 18 or later

### Installation

```bash
git clone https://github.com/BrianJCal99/Apollofit.git
cd Apollofit
npm install
npm run dev
```

Open the local address Vite prints (usually [http://localhost:5173](http://localhost:5173)) in your browser. No environment variables or API keys are needed.

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint and auto-fix with ESLint |
| `npm run format` | Format the source with Prettier |

## Credits

- Photos from [Unsplash](https://unsplash.com/)
- Exercise illustrations from [VectorStock](https://www.vectorstock.com/)
- Icons from [Icons8](https://icons8.com/) and [Font Awesome](https://fontawesome.com/)

## Disclaimer

APOLLOFIT is a portfolio project for learning and demonstration. Its plans and health metrics are general estimates, not medical or nutritional advice.

## License

Released under the [MIT License](LICENSE). © 2026 Brian Caldera.

Built by [Brian Caldera](https://brianjcaldera.com) · [GitHub](https://github.com/BrianJCal99) · [LinkedIn](https://www.linkedin.com/in/brianjcal/)
