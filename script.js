document.addEventListener("DOMContentLoaded", function () {
  const incrementButtons = document.querySelectorAll(".increment");
  const decrementButtons = document.querySelectorAll(".decrement");

  incrementButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const quantityElement = this.parentElement.querySelector(".quantity");
      let currentQuantity = parseInt(quantityElement.innerText);
      quantityElement.innerText = currentQuantity + 1;
    });
  });

  decrementButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const quantityElement = this.parentElement.querySelector(".quantity");
      let currentQuantity = parseInt(quantityElement.innerText);
      if (currentQuantity > 0) {
        quantityElement.innerText = currentQuantity - 1;
      }
    });
  });
});

function justGap() {
  const heroElement = document.querySelector(".hero");
  const screenWidth = window.innerWidth;
  let gapSize;

  if (screenWidth >= 1800) {
    gapSize = "209px";
  } else if (screenWidth >= 1400) {
    gapSize = "130px";
  } else if (screenWidth >= 1200) {
    gapSize = "60px";
  } else if (screenWidth >= 1000) {
    gapSize = "40px";
  } else if (screenWidth >= 800) {
    gapSize = "20px";
  } else {
    gapSize = "10px";
  }

  heroElement.style.gap = gapSize;
}

window.addEventListener("resize", justGap);
window.addEventListener("load", justGap);
