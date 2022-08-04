const form = document.getElementById("form");
const email = document.getElementById("email");
const btn = document.getElementById("btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validate();

  clearValue();
});

function validate() {
  const emailValue = email.value.trim();
  if (emailValue === "") {
    setErrorFor(email, "Email address cannot be blank");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Please provide a valid email address");
  } else {
    setSuccessFor(email);
  }
}

function clearValue() {
  email.value = "";
}

function setErrorFor(input, message) {
  const formControl = input.parentElement.parentElement;
  formControl.classList.add("error");
  const feedback = document.querySelector(".feedback");
  feedback.classList.add("showItem");
  feedback.innerText = message;
  setTimeout(function () {
    feedback.classList.remove("showItem");
  }, 5000);
}

function setSuccessFor(input) {
  const formControl = input.parentElement.parentElement;
  formControl.classList.add("success");
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
