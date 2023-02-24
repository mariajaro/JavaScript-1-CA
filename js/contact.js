const nameInput = document.querySelector("#nameInput")
const emailInput = document.querySelector("#emailInput")
const messageInput = document.querySelector("#messageInput")
const subjectInput = document.querySelector("#subjectInput")
const contactForm = document.querySelector("#contactForm")
const errorMessage = document.querySelectorAll(".error")

function validate() {
  clearError()
  let errorPass = false

  if (nameInput.value.length < 1) {
    errorMessage[0].innerText = "Please enter name"
    nameInput.classList.add("error")
    errorPass = true
  }

  if (!emailValid(emailInput.value)) {
    errorMessage[1].innerText = "Please enter valid email"
    emailInput.classList.add("error")
    errorPass = true
  }

  if (subjectInput.value.length < 10) {
    errorMessage[2].innerText = "Please enter a valid message(must be atleast 10 characters"
    subjectInput.classList.add("error")
    errorPass = true
  }

  if (messageInput.value.length < 24) {
    errorMessage[3].innerText = "Please enter valid message(atleast 25 characters)"
    messageInput.classList.add("error")
    errorPass = true
  }

  if (!errorPass) {
    alert("The form was submitted")
    contactForm.reset()
  }
}

function clearError() {
  for (let i = 0; i < errorMessage.length; i++) {
    errorMessage[i].innerText = ""
  }
  nameInput.classList.remove("error")
  emailInput.classList.remove("error")
  messageInput.classList.remove("error")
  subjectInput.classList.remove("error")
}

function emailValid(email) {
  let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailPattern.test(email)
}
