// fixed navbar

window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

const logo = document.querySelector(".header-logo");
const menu = document.querySelector(".menu");
const heroStart = document.querySelector(".hero-start");
const heroHeading = document.querySelector(".hero-heading");
const heroPara = document.querySelector(".hero-para");
const homeBtn = document.querySelector(".btn");
const popUp = document.querySelector(".popup");

window.addEventListener("load", revealAnime);

function revealAnime() {
  const TLFADE = gsap.timeline();

  TLFADE.from(logo, { autoAlpha: 0, y: -50, delay: 0.3 })
    .from(
      menu,
      {
        autoAlpha: 0,
        y: -50,
        delay: 0,
        stagger: 0.1,
      },
      "-=0.2"
    )
    .from(heroStart, { autoAlpha: 0, y: -50, delay: 0 })
    .from(heroHeading, { autoAlpha: 0, y: -50, delay: 0 })
    .from(heroPara, { autoAlpha: 0, y: -50, delay: 0 })
    .from(homeBtn, { autoAlpha: 0, y: -50, delay: 0 })
    .from(popUp, { autoAlpha: 0, y: -50, delay: 0 });
}

// reveal on scroll animation js code

window.addEventListener("scroll", reveal);

function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let revealTop = reveals[i].getBoundingClientRect().top;
    let revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// gsap gallery slider
const btnRight = document.querySelector(".btn-next");
const btnLeft = document.querySelector(".btn-prev");
const container = document.querySelector(".container");
const slides = Array.from(document.querySelectorAll(".slide"));
const indexIndication = document.querySelector(".counter span:nth-child(1)");
let index = 0;

function animRight() {
  const TLRight = gsap.timeline();

  TLRight.set(indexIndication, {
    innerText: index + 1,
  }).to(slides[index], { duration: 0.6, x: 0 });
}

function animLeft() {
  const TLLEFT = gsap.timeline();

  TLLEFT.set(indexIndication, {
    innerText: index,
  }).to(slides[index], { duration: 0.6, x: "-100%" });
}

function negation() {
  gsap.to(container, {
    keyframes: [
      { duration: 0.1, x: -4 },
      { duration: 0.1, x: 4 },
      { duration: 0.1, x: -4 },
      { duration: 0.1, x: 0 },
    ],
  });
}

function handleDirection(direction) {
  if (direction === "next") {
    if (index === slides.length - 1) {
      negation();
      return;
    }

    index++;
    animRight();
  } else if (direction === "prev") {
    if (index === 0) {
      negation();
      return;
    }

    animLeft();
    index--;
  }
}

btnRight.addEventListener("click", () => {
  handleDirection("next");
});

btnLeft.addEventListener("click", () => {
  handleDirection("prev");
});

// copyright footer

const year = document.getElementById("current-year");

year.innerHTML = new Date().getFullYear();

// js code for pop up image

// script.js
const popup = document.getElementById("popup");
const closeButton = document.getElementById("close-button");

// Show the pop-up
function openPopup() {
  popup.style.display = "block";
}

// Close the pop-up
function closePopup() {
  popup.style.display = "none";
}

// Event listeners
window.addEventListener("load", openPopup);
closeButton.addEventListener("click", closePopup);
popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    closePopup();
  }
});
