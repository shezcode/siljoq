document.addEventListener("DOMContentLoaded", function () {
  const checkDivs = document.querySelectorAll(
    ".main__product--filter--checkbox"
  );
  checkDivs.forEach(function (check) {
    check.addEventListener("click", () => {
      const checkbox = check.querySelector('input[type="checkbox"]');
      checkbox.checked = !checkbox.checked;
    });
  });
});
