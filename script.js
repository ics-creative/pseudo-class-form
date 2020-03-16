validate();

document.querySelectorAll("input,textarea").forEach(input => {
  input.addEventListener("input", validate);
});

function buttonValidate() {
  const invalidForm = document.querySelector("form:invalid");
  const submitButton = document.querySelector("#submit");
  submitButton.disabled = invalidForm != null;
}


function validate() {
  buttonValidate();
}
