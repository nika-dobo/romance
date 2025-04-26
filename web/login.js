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

let users = {};

function User(
  firstName,
  lastName,
  nickname,
  email,
  phone,
  age,
  country,
  password,
  confirmPassword
) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.nickname = nickname;
  this.email = email;
  this.phone = phone;
  this.age = age;
  this.country = country;
  this.password = password;
  this.confirmPassword = confirmPassword;
}

function createId(users) {
  return Object.keys(users).length;
}

button.addEventListener("click", () => {
  const firstNameUser = firstName.value;
  const lastNameUser = lastName.value;
  const nicknameUser = nickname.value;
  const emailUser = email.value;
  const phoneUser = phone.value;
  const ageUser = age.value;
  const countryUser = country.value;
  const passwordUser = password.value;
  const confirmPasswordUser = confirmPassword.value;

  const user = new User(
    firstNameUser,
    lastNameUser,
    nicknameUser,
    emailUser,
    phoneUser,
    ageUser,
    countryUser,
    passwordUser,
    confirmPasswordUser
  );

  

  const userId = "User" + createId(users);
  users[userId] = user;

  console.log(users);

  alert(`${nicknameUser}, You have registered.`);
});
