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
    <p>Mail: customer@hypermood.it</p>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
h2 {
  color: #55ccd9;
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
  border-color: rgba(85, 204, 217, 0.5);
  box-shadow: none;
  border-width: 1px;
  border-style: solid;
  padding: 8px 20px 8px 20px;
  color: #55ccd9;
  resize: none;
}

textarea:focus,
input:focus {
  outline-color: rgba(85, 204, 217, 1);
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #bce0fd;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #bce0fd;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #bce0fd;
}

#submit {
  width: 95px;
  min-width: 95px;
  height: 43px;
  border-radius: 30px;
  border-width: 0px;
  cursor: pointer;
  background: #55ccd9;
  color: white;
  font-weight: bold;
}

p {
  padding-left: 10%;
  color: #7a8d9f;
  font-size: 15px;
  padding-right: 5%;
}
</style>
