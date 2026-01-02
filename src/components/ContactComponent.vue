<template>
  <!-- Contact Section -->
  <div class="container light-grey custom-font" style="padding: 128px 16px" id="contact">
    <p class="center large">LETS GET IN TOUCH. SEND US A MESSAGE.</p>
    <p class="center medium">
      We value your enquiry and we will make every effort to contact you as soon as possible.
    </p>
    <div style="margin-top: 48px">
      <p><i class="fa fa-map-marker fa-fw xxlarge margin-right"></i> Colombo, SL</p>
      <p><i class="fa fa-phone fa-fw xxlarge margin-right"></i> Phone: +94 77 015 5873</p>
      <p><i class="fa fa-envelope fa-fw xxlarge margin-right"> </i> Email: brianjanaka@gmail.com</p>
      <br />
      <!-- HTML Form Validation -->
      <form
        onsubmit="alert('Your query received. One of our team will be in contact with you shortly.');event.preventDefault()"
      >
        <p>
          <input
            class="input border"
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            required
          />
        </p>
        <p>
          <input
            class="input border"
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            title="example@mail.com"
            required
          />
        </p>
        <p>
          <input
            class="input border"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Telephone Number"
            pattern="[0-9]{1} [0-9]{4} [0-9]{4}"
            title="x xxxx xxxx"
            required
          />
        </p>
        <p>
          <input
            class="input border"
            type="text"
            id="subject"
            name="Subject"
            placeholder="Subject"
            required
          />
        </p>
        <p>
          <input
            class="input border"
            type="text"
            id="message"
            name="Message"
            placeholder="Message"
            required
          />
        </p>
        <p>
          <button class="button black hover-light-green" type="submit">
            <i class="fa fa-paper-plane"></i> SEND MESSAGE
          </button>
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
