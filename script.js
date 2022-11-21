let sliderImages = document.querySelectorAll(".watch__img");
let arrowLeft = document.querySelector(".arrow-1");
let arrowRight = document.querySelector(".arrow-2");

arrowLeft.onclick = function () {
  for (let img of sliderImages) {
    if (img.classList.contains("active")) {
      img.classList.remove("active");
      if (img == sliderImages[0]) {
        sliderImages[sliderImages.length - 1].classList.add("active");
      } else {
        img.previousElementSibling.classList.add("active");
      }
      break;
    }
  }
};

arrowRight.onclick = function () {
  for (let img of sliderImages) {
    if (img.classList.contains("active")) {
      img.classList.remove("active");
      if (img == sliderImages[sliderImages.length - 1]) {
        sliderImages[0].classList.add("active");
      } else {
        img.nextElementSibling.classList.add("active");
      }
      break;
    }
  }
};

let date = new Date();
console.log(date);
