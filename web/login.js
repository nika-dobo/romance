let firstName = document.querySelector("#firstName");
let lastName = document.querySelector("#lastName");
let nickname = document.querySelector("#nickname");
let email = document.querySelector("#email");
let phone = document.querySelector("#phone");
let age = document.querySelector("#age");
let country = document.querySelector("#country");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirmPassword");
let button = document.querySelector("#button");

button.addEventListener("click", (e) => {
  e.preventDefault();

  const firstNameUser = firstName.value;
  const lastNameUser = lastName.value;
  const nicknameUser = nickname.value;
  const emailUser = email.value;
  const phoneUser = phone.value;
  const ageUser = age.value;
  const countryUser = country.value;
  const passwordUser = password.value;
  const confirmPasswordUser = confirmPassword.value;

  if (passwordUser !== confirmPasswordUser) {
    alert("Passwords do not match!");
    return;
  }

  const user = {
    firstName: firstNameUser,
    lastName: lastNameUser,
    nickname: nicknameUser,
    email: emailUser,
    phone: phoneUser,
    age: ageUser,
    country: countryUser,
    password: passwordUser,
  };

  let savedUsers = JSON.parse(localStorage.getItem("users")) || {};
  const userId = "User" + Object.keys(savedUsers).length;
  savedUsers[userId] = user;
  localStorage.setItem("users", JSON.stringify(savedUsers));

  alert(`${nicknameUser}, You have registered.`);
});
