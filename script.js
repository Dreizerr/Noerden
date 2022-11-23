let sliderImages = document.querySelectorAll(".watch__img");
let arrowLeft = document.querySelector(".arrow-1");
let arrowRight = document.querySelector(".arrow-2");
let likes = document.querySelectorAll(".review__like-img");
let commentOpeners = document.querySelectorAll(".review__read-next");
let deadline = new Date("Jan 1 2023 00:00:00");

function timer() {
  let today = new Date();
  let timeLeft = deadline - today;
  let days = Math.floor(timeLeft / 1000 / 60 / 60 / 24);
  let hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
  let minutes = Math.floor(timeLeft / 1000 / 60) % 60;
  let seconds = Math.floor(timeLeft / 1000) % 60;

  document.querySelector(".watch__days-num").innerHTML = days;
  document.querySelector(".watch__hours-num").innerHTML = hours;
  document.querySelector(".watch__minutes-num").innerHTML = minutes;
  document.querySelector(".watch__seconds-num").innerHTML = seconds;
}

timer();

setInterval(timer, 1000);

for (let commentOpener of commentOpeners) {
  commentOpener.onclick = function () {
    if (commentOpener.parentNode.classList.contains("active")) {
      commentOpener.innerHTML = "Читать далее...";
    } else {
      commentOpener.innerHTML = "Скрыть";
    }
    commentOpener.parentNode.classList.toggle("active");
  };
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
