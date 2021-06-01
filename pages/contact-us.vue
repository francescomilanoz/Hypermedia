<template>
  <div>
    <Cover
      title="Contact us"
      preview-text="Thank you for your interest in Hypermood! Please fill out the form to contact us and don't forget to check the box if you'd like to receive news, articles and insights.
"
      thumbnail="https://www.noor-uvc.com/wp-content/uploads/2020/10/cover-contactus-1.jpg"
    />
    <h2>Fill out this form:</h2>
    <form>
      <input type="text" placeholder="Name" name="name" required /><br />
      <input type="text" placeholder="Surname" name="surname" required /><br />
      <input type="email" placeholder="Email" name="email" required /><br />

      <textarea
        name="message"
        cols="40"
        rows="5"
        placeholder="Write your message here"
      ></textarea
      ><br />
      <br />
      <input id="submit" type="submit" value="SUBMIT" />
    </form>
    <br />
    <br />
    <h2>Or use our contacts:</h2>
    <p>Tel.: +39 347 2049382</p>
    <p id="last-element">
      Mail:
      <a href="mailto:customer@hypermood.it">customer@hypermood.it</a>
    </p>
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
}
</script>

<style scoped>
h2 {
  color: var(--blue);
  padding-left: 10%;
  padding-right: 5%;
}
form {
  padding-left: 10%;
}

input,
textarea {
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 10px;
  width: 37%;
  min-width: 185px;
  min-height: 25px;
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
  padding-left: 10%;
  color: var(--blue);
  font-size: 15px;
  padding-right: 5%;
}
#last-element {
  padding-bottom: 100px;
  margin-bottom: 0px;
}
</style>
