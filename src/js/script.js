// 1.
function clock() {
  const date = new Date();
  let hours = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = zero(hours);
  min = zero(min);
  sec = zero(sec);
  const p = document.getElementById("time");
  p.innerHTML = hours + " : " + min + " : " + sec + " " + ampm;

  function zero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
}
setInterval(clock, 1000);
clock();

// 2.

let timeoutId = null,
  intervalId = null;

(function initSliderFn() {
  const slides = document.querySelectorAll(".slide"),
    prevBtn = document.querySelector(".slider-nav .prev"),
    nextBtn = document.querySelector(".slider-nav .next");

  let activeIndex = 0,
    slideIntervalId = null;

  function renderClasses() {
    slides.forEach((slide, index) => {
      if (index === activeIndex) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }
  renderClasses();

  function goToNextSlide() {
    if (activeIndex === slides.length - 1) {
      activeIndex = 0;
    } else {
      activeIndex++;
    }
    renderClasses();
  }

  function goToPrevSlide() {
    if (activeIndex === 0) {
      activeIndex = slides.length - 1;
    } else {
      activeIndex--;
    }
    renderClasses();
  }
  nextBtn.addEventListener("click", goToNextSlide);

  prevBtn.addEventListener("click", goToPrevSlide);

  function startSlides() {
    slideIntervalId = setInterval(goToNextSlide, 5000);
  }

  function stopSlides() {
    if (slideIntervalId) {
      clearInterval(slideIntervalId);
      slideIntervalId = null;
    }
  }

  const sliderContainer = document.querySelector(".slides");

  sliderContainer.addEventListener("mouseenter", stopSlides);
  sliderContainer.addEventListener("mouseleave", startSlides);

  startSlides();
})();

// 3.
function updateCountdown() {
  let countDown = new Date("Nov 28, 2025 20:00:00").getTime(),
    now = new Date().getTime();
  let distance = countDown - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const element = document.getElementById("countdown");
  element.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
const interval = setInterval(updateCountdown, 1000);
updateCountdown();
