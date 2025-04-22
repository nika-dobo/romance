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

let content8 = document.querySelector(".info8");
let strry8_button1 = document.querySelector("#story8");
let strry8_button2 = document.querySelector("#story8-close");

strry8_button1.addEventListener("click", function (evt) {
  evt.preventDefault();
  content8.classList.remove("info8-hidden");
  content8.classList.add("info8-View");
});

strry8_button2.addEventListener("click", function (evt) {
  evt.preventDefault();
  content8.classList.remove("info8-View");
  content8.classList.add("info8-hidden");
});

let content9 = document.querySelector(".info9");
let strry9_button1 = document.querySelector("#story9");
let strry9_button2 = document.querySelector("#story9-close");

strry9_button1.addEventListener("click", function (evt) {
  evt.preventDefault();
  content9.classList.remove("info9-hidden");
  content9.classList.add("info9-View");
});

strry9_button2.addEventListener("click", function (evt) {
  evt.preventDefault();
  content9.classList.remove("info9-View");
  content9.classList.add("info9-hidden");
});

let content10 = document.querySelector(".info10");
let strry10_button1 = document.querySelector("#story10");
let strry10_button2 = document.querySelector("#story10-close");

strry10_button1.addEventListener("click", function (evt) {
  evt.preventDefault();
  content10.classList.remove("info10-hidden");
  content10.classList.add("info10-View");
});

strry10_button2.addEventListener("click", function (evt) {
  evt.preventDefault();
  content10.classList.remove("info10-View");
  content10.classList.add("info10-hidden");
});

let content11 = document.querySelector(".info11");
let strry11_button1 = document.querySelector("#story11");
let strry11_button2 = document.querySelector("#story11-close");

strry11_button1.addEventListener("click", function (evt) {
  evt.preventDefault();
  content11.classList.remove("info11-hidden");
  content11.classList.add("info11-View");
});

strry11_button2.addEventListener("click", function (evt) {
  evt.preventDefault();
  content11.classList.remove("info11-View");
  content11.classList.add("info11-hidden");
});

let content12 = document.querySelector(".info12");
let strry12_button1 = document.querySelector("#story12");
let strry12_button2 = document.querySelector("#story12-close");

strry12_button1.addEventListener("click", function (evt) {
  evt.preventDefault();
  content12.classList.remove("info12-hidden");
  content12.classList.add("info12-View");
});

strry12_button2.addEventListener("click", function (evt) {
  evt.preventDefault();
  content12.classList.remove("info12-View");
  content12.classList.add("info12-hidden");
});

const upload = document.querySelector(".upload1");
const openUpload = document.querySelector(".upload");
const closeUpload = document.querySelector("#close");

openUpload.addEventListener("click", function (evt) {
  evt.preventDefault();
  upload.classList.add("upload1-View");
  upload.classList.remove("upload1-hidden");
});

closeUpload.addEventListener("click", function (evt) {
  evt.preventDefault();
  upload.classList.add("upload1-hidden");
  upload.classList.remove("upload1-View");
});
