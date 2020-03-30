const validate = () => {
  const validForm = document.querySelector("form:valid");
  const submitButton = document.querySelector("#submit");
  submitButton.disabled = validForm == null;
};

validate();

document.querySelectorAll("input,textarea").forEach(input => {
  input.addEventListener("input", validate);
});
