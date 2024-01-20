document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButtons = document.querySelectorAll(".icon");
  const navList = document.querySelector(".navbar__links");
  const navSearch = document.querySelector(".navbar__search");

  mobileMenuButtons.forEach(function (mobileMenuButton) {
    mobileMenuButton.addEventListener("click", function () {
      navList.classList.toggle("show");
      navSearch.classList.toggle("show");
      mobileMenuButtons.forEach(function (icon) {
        icon.classList.toggle("close");
      });
    });
  });
});
