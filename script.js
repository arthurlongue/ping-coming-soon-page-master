var form = document.getElementById("form")
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

form.addEventListener("submit", (e) => {
  var email = document.getElementById("email")
  var error = document.querySelector("small")
  e.preventDefault()
  if (email.value.match(validRegex)) {
    email.style.border = "gray solid 1px"
    error.style.display = "none"
  } else {
    email.style.border = "hsl(354, 100%, 66%) solid 1px"
    error.style.display = "flex"
  }
})
