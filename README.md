# APOLLOFIT

**APOLLOFIT** is a fitness web application designed to help users achieve their
health and wellness goals through personalized diet and workout plans.

Live site: [apollofit.org](https://apollofit.org)

## About

APOLLOFIT turns a few simple inputs into a plan that fits the user's body,
goals, and lifestyle. Users can also browse and search a library of pre-made
diet and workout plans to find one that suits them.

### Key Features

- **Personalized Diet Plans**: Generate a weekly meal plan, with breakfast,
  lunch, dinner, and snacks for every day, based on your gender, age, height,
  weight, body measurements, and activity level.

- **Personalized Workout Plans**: Choose your goal (build strength, build
  muscle, or build endurance) and your body type (ectomorph, mesomorph, or
  endomorph) to get a matching training plan.

- **Health Calculations**: See your BMI (Body Mass Index) and weight category,
  BMR (Basal Metabolic Rate), total daily calorie needs, and body fat
  percentage. All calculations run in the browser using standard formulas: the
  Mifflin-St Jeor equation for BMR, activity multipliers for daily calories,
  and the U.S. Navy method for body fat.

- **Plan Library and Search**: Browse pre-made diet and workout plans and
  filter them instantly as you type.

## Tech Stack

- [Vue 3](https://vuejs.org/) (Composition API, single-file components)
- [Vue Router](https://router.vuejs.org/)
- [Vite](https://vitejs.dev/)
- Hand-written CSS
- ESLint and Prettier
- Deployed on [Vercel](https://vercel.com/) with Vercel Analytics

## Getting Started

```sh
npm install
npm run dev       # start the development server
npm run build     # build for production
npm run preview   # preview the production build
npm run lint      # lint and auto-fix
npm run format    # format the source with Prettier
```

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for
details.
