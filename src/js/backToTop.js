const btnTop = document.querySelector(".btn-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 200) {
    btnTop.classList.add("show");
  } else {
    btnTop.classList.remove("show");
  }
});
