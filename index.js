function validateEmail(email) {
  var regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
}

validateEmail("reygian2000@gmail.com");
validateEmail("@gmail.com");

module.exports = { validateEmail };