let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
  navbar.classList.toggle("active");
};
window.onscroll = () => {
  navbar.classList.remove("active");
};

GitHubCalendar(".calendar", "sampatil98", { responsive: true });

// var typed = new Typed("#typing", {
//   strings: ["Full Stack-Web developer"],
//   loop: true,
//   typeSpeed: 60,
//   backSpeed: 45,
//   backDelay: 400,
// });

// document.getElementById('resume-button-1').addEventListener("click", () => {
//   window.open("https://drive.google.com/file/d/1UAj5f-fHiInGHRnJJjCvNHGGwzpm3RMo/view?usp=share_link", "_blank");
// });

// document.getElementById('resume-button-2').addEventListener("click", () => {
//   window.open("https://drive.google.com/file/d/1UAj5f-fHiInGHRnJJjCvNHGGwzpm3RMo/view?usp=share_link", "_blank");
// });

