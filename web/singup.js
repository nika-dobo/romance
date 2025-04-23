let email = document.querySelector("#email");
let password = document.querySelector("#password");
let button = document.querySelector("#button");

button.addEventListener("click", (e) => {
  e.preventDefault();

  const emailUser = email.value;
  const passwordUser = password.value;

  let savedUsers = JSON.parse(localStorage.getItem("users")) || {};

  let foundUser = null;

  for (let userId in savedUsers) {
    if (
      savedUsers[userId].email === emailUser &&
      savedUsers[userId].password === passwordUser
    ) {
      foundUser = savedUsers[userId];
      break;
    }
  }

  if (foundUser) {
    alert(`Welcome back, ${foundUser.nickname}!`);

    localStorage.setItem("currentUser", JSON.stringify(foundUser));

    window.location.href = "./profile.html";
  } else {
    alert("Incorrect email or password.");
  }
});
