<template>
  <div class="app-container">
    <Cover
      title="Contact us"
      preview-text="Thank you for your interest in Hypermood! Please fill out the form to contact us and don't forget to check the box if you'd like to receive news, articles and insights.
"
      thumbnail="https://www.noor-uvc.com/wp-content/uploads/2020/10/cover-contactus-1.jpg"
    />
    <a id="contact-form" name="contact-form" class="anchor"></a>
    <div id="container">
      <div>
        <form>
          <h1>Get in touch with us!</h1>
          <h2>We will get back to you as soon as possible.</h2>
          <input
            aria-label="Your name"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            aria-label="Your surname"
            type="text"
            placeholder="Surname"
            name="surname"
            required
          />
          <input
            aria-label="Your email"
            type="email"
            placeholder="Email"
            name="email"
            required
          />

          <textarea
            aria-label="Your message"
            name="message"
            cols="40"
            rows="5"
            placeholder="Write your message here"
          ></textarea>
          <div>
            <input id="news" type="checkbox" />
            <label id="news-label" for="news"
              >I confirm that I want to receive news via mail<br />and that I
              have read and accept the Hypermood<br />Privacy Policy.</label
            ><br />
          </div>

          <input id="submit" type="submit" value="SUBMIT" />
        </form>
      </div>
      <div id="gap-box"></div>
      <div>
        <h3>Or contact us directly via:</h3>
        <p>Tel.: +39 347 2049382</p>
        <p id="last-element">
          Mail:
          <a href="mailto:customer@hypermood.it">customer@hypermood.it</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Contact us - Hypermood',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'If you have any questions we’re here to help. Check here to get in touch with us.',
        },
      ],
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.$route.hash) {
        const el = document.querySelector(this.$route.hash)
        if (el) {
          window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        }
      }
    })
  },
}
</script>

<style scoped>
.app-container {
  padding-bottom: 90px;
}
h1 {
  color: var(--blue);
  margin-top: 0px;
}
h3 {
  color: var(--blue);
  font-size: 25px;
  margin-top: 0px;
}
form {
  display: flex;
  flex-direction: column;
}
#submit {
  margin-top: 20px;
}
#container {
  display: flex;
  align-content: center;
  align-items: center;
  justify-items: center;
  /* justify-content: space-around; */
  padding-left: 10%;
  padding-right: 10%;
  flex-wrap: wrap;
}

#gap-box {
  flex: 0.65 0 100px;
}

@media (max-width: 574px) {
  #gap-box {
    flex: 0 0 0px;
  }
}

input,
textarea {
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 10px;
  width: 70%;
  min-width: 185px;
  border-radius: 6px;
  border-color: var(--blue);
  box-shadow: none;
  border-width: 1px;
  border-style: solid;
  padding: 8px 20px 8px 20px;
  color: var(--blue);
  resize: none;
}

textarea:focus,
input:focus {
  outline-color: var(--blue);
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: var(--blue);
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: var(--blue);
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: var(--blue);
}

#submit {
  width: 95px;
  min-width: 95px;
  height: 43px;
  border-radius: 30px;
  border-width: 0px;
  cursor: pointer;
  background: var(--blue);
  color: white;
  font-weight: bold;
}

p {
  color: var(--blue);
  font-size: 15px;
}

#news {
  min-width: 30px;
  max-width: 30px;
  color: var(--blue);
}

#news-label {
  color: var(--blue);
  font-size: 13px;
  max-width: 185px;
}

h2 {
  color: var(--blue);
  display: flex;
  justify-content: center;
  font-size: 17px;
  margin-top: -10px;
}
@media (max-width: 350px) {
  h2 {
    font-size: 15px;
  }
}

@media (max-width: 350px) {
  h1 {
    font-size: 25px;
  }
}
@media (max-width: 1475px) {
  h3 {
    margin-top: 30px;
  }
}
</style>
