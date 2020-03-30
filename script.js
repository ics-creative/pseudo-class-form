const validate = () => {
  const invalidForm = document.querySelector("form:invalid");
  const submitButton = document.querySelector("#submit");
  submitButton.disabled = invalidForm != null;
  console.log(invalidForm)
  // console.log(document.querySelector("form").validity.valid)
};

validate();

document.querySelectorAll("input,textarea").forEach(input => {
  input.addEventListener("input", validate);
});
