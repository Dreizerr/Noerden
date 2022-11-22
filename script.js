let sliderImages = document.querySelectorAll(".watch__img");
let arrowLeft = document.querySelector(".arrow-1");
let arrowRight = document.querySelector(".arrow-2");
let likes = document.querySelectorAll(".review__like-img");
let commentOpeners = document.querySelectorAll(".review__read-next");

for (let commentOpener of commentOpeners) {
  commentOpener.onclick = function () {
    if (commentOpener.parentNode.classList.contains("active")) {
      commentOpener.innerHTML = "Читать далее...";
    }
    else {
      commentOpener.innerHTML = "Скрыть";
    }
    commentOpener.parentNode.classList.toggle("active");
  }
}

for (let like of likes) {
  like.nextElementSibling.innerHTML = Math.floor(Math.random() * 99);
  like.onclick = function () {
    if (like.classList.contains("active")) {
      like.nextElementSibling.innerHTML--;
    } else {
      like.nextElementSibling.innerHTML++;
    }
    like.classList.toggle("active");
  };
}

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
