let content7 = document.querySelector(".info7");
let strry7_button1 = document.querySelector("#story7");
let strry7_button2 = document.querySelector("#story7-close");

strry7_button1.addEventListener("click", function (evt) {
  evt.preventDefault();
  content7.classList.remove("info7-hidden");
  content7.classList.add("info7-View");
});

strry7_button2.addEventListener("click", function (evt) {
  evt.preventDefault();
  content7.classList.remove("info7-View");
  content7.classList.add("info7-hidden");
});
