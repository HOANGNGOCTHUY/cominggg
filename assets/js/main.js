//TABS UI
var navs = document.querySelectorAll(".menu-items");
// var wraps = document.querySelectorAll('.wrap-item');
var sliders = document.querySelectorAll(".slider-item");

var btns = document.querySelectorAll(".btn");

let currentSlide = 1;

//JS
var manualNav = function (manual) {
  sliders.forEach((wrap) => {
    wrap.classList.remove("active");

    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    navs.forEach((nav) => {
      nav.classList.remove("active");
    });
  });
  sliders[manual].classList.add("active");
  btns[manual].classList.add("active");
  navs[manual].classList.add("active");
};
btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});
navs.forEach((nav, i) => {
  nav.addEventListener("click", () => {
    manualNav(i);
    currentSlide = i;
  });
});

var repeat = function (activeClass) {
  let active = document.getElementsByClassName("active");
  let i = 1;

  var repeater = () => {
    setTimeout(function () {
      [...active].forEach((activeSlide) => {
        activeSlide.classList.remove("active");
      });
      navs[i].classList.add("active");
      sliders[i].classList.add("active");
      btns[i].classList.add("active");
      i++;

      if (sliders.length == i) {
        i = 0;
      }
      if (i >= sliders.length) {
        return;
      }
      repeater();
    }, 10000);
  };
  repeater();
};
repeat();

// Count down

const countDown = () => {
  //Đặt ngày đếm ngược
  var countDate = new Date("september 13 , 2022 00:00:00 ").getTime();

  //Lấy ngày và giờ hôm nay
  var now = new Date().getTime();
  //Tìm khoảng cách giữa ngày bây giờ và giờ đếm ngược
  var distance = countDate - now;

  //
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  //Kiểm tra
  days = days < 100 ? "0" + days : days;
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  // Hiển thị
  document.querySelector("#days").innerHTML = days;
  document.querySelector("#hours").innerHTML = hours;
  document.querySelector("#minutes").innerHTML = minutes;
  document.querySelector("#seconds").innerHTML = seconds;
};

setInterval(countDown, 1000);
