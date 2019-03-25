document.querySelector(".nav-toggle").addEventListener("click", function () {
  const navs = document.querySelectorAll(".nav-link");
  navs.forEach(nav => nav.classList.toggle("nav-toggle-show"));
  document.querySelector(".nav-content").classList.toggle("nav-toggle-show");
});
