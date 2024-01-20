const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const ctaButtons = document.querySelectorAll(".swiper__btn");
  ctaButtons.forEach(function (btn) {
    btn.addEventListener("click", productsRedirect);
  });

  const gridElements = document.querySelectorAll(".bento__el");
  gridElements.forEach(function (gridEl) {
    gridEl.addEventListener("click", productsRedirect);
  });

  function productsRedirect() {
    window.location.href = "products.html";
  }
});
