// Page source and inspect hide
// document.addEventListener("contextmenu", (event) => event.preventDefault());

// document.addEventListener("keydown", function (event) {
//   if (
//     (event.ctrlKey &&
//       (event.key === "u" ||
//         event.key === "U" ||
//         event.key === "i" ||
//         event.key === "I")) ||
//     event.key === "F12"
//   ) {
//     event.preventDefault();
//   }
// });

const navToggleBtn = document.querySelector("#navToggleBtn");
const nav = document.querySelector("nav.navigation");
const navlinks = document.querySelectorAll("nav .nav-link");

navToggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});

navlinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});
