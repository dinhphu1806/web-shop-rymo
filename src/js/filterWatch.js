const filterBtns = document.querySelectorAll(".filter-btn");
const filterItems = document.querySelectorAll(".filter-item");

function showContentFilter(btn) {
  filterItems.forEach((item) => {
    if (item.classList.contains(btn.id)) {
      removeFilterBtn();
      btn.classList.add("active-btn");
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    showContentFilter(btn);
  });
});

function removeFilterBtn() {
  filterBtns.forEach((btn) => {
    btn.classList.remove("active-btn");
  });
}

// gach duoi dau tien
window.addEventListener("DOMContentLoaded", () => {
  filterBtns[0].classList.add("active-btn");
});
