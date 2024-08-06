const formEl = document.querySelector(".login-form");
const onFormSubmit = (event) => {
  event.preventDefault();
  const formData = {
    email: formEl.elements.email.value.trim(),
    password: formEl.elements.password.value.trim(),
  };

  if (formData.email === "" || formData.password === "") {
    return alert("All form fields must be filled in");
  }
  console.log(formData);
  formEl.reset();
};
formEl.addEventListener("submit", onFormSubmit);
