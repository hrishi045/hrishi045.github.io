document.querySelector(".nav-toggle a").addEventListener("click", function () {
  const navs = document.querySelectorAll(".nav-link");
  console.log(navs);
  navs.forEach(nav => nav.classList.toggle("nav-toggle-show"));
  document.querySelector(".nav-content").classList.toggle("nav-toggle-show");
});
