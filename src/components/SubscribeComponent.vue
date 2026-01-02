<template>
  <!-- Subscribe -->
  <div class="container light-gray custom-font">
    <div class="container padding-16 black">
      <h4 class="center">SUBSCRIBE TO OUR NEWSLETTER</h4>
    </div>
    <div class="container white">
      <p>Enter your details below and get notified on the latest plans from <b>APOLLOFIT</b>.</p>
      <!-- HTML Form Validation -->
      <form onsubmit="alert('Thank You for Subscribing!');event.preventDefault()">
        <p>
          <input
            class="input border"
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </p>
        <p>
          <input
            class="input border"
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="example@mail.com"
            required
          />
        </p>
        <p>
          <button class="button block dark-grey hover-light-green" type="submit">SUBSCRIBE</button>
        </p>
      </form>
    </div>
  </div>
</template>

<style scoped>
.custom-font {
  font-family: 'Raleway', sans-serif;
}
</style>
