"use strict";

var menuBtn = document.querySelector('.menu-btn');
var menuOpen = false;
var mobailMenu = document.querySelector('.mobailMenu');
menuBtn.addEventListener('click', function () {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
    mobailMenu.style.left = '0'; // mobailMenu.style.display='block'
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    mobailMenu.style.left = '-80%'; // mobailMenu.style.display='none'
  }
});
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");
var carouselVp = document.querySelector("#carousel-vp");
var cCarouselInner = document.querySelector("#cCarousel-inner");
var carouselInnerWidth = cCarouselInner.getBoundingClientRect().width;
var leftValue = 0; // Variable used to set the carousel movement value (card's width + gap)

var totalMovementSize = parseFloat(document.querySelector(".cCarousel-item").getBoundingClientRect().width, 10) + parseFloat(window.getComputedStyle(cCarouselInner).getPropertyValue("gap"), 10);
prev.addEventListener("click", function () {
  if (!leftValue == 0) {
    leftValue -= -totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
  }
});
next.addEventListener("click", function () {
  var carouselVpWidth = carouselVp.getBoundingClientRect().width;

  if (carouselInnerWidth - Math.abs(leftValue) > carouselVpWidth) {
    leftValue -= totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
  }
});
var mediaQuery510 = window.matchMedia("(max-width: 300px)");
var mediaQuery770 = window.matchMedia("(max-width: 770px)");
mediaQuery510.addEventListener("change", mediaManagement);
mediaQuery770.addEventListener("change", mediaManagement);
var oldViewportWidth = window.innerWidth;

function mediaManagement() {
  var newViewportWidth = window.innerWidth;

  if (leftValue <= -totalMovementSize && oldViewportWidth < newViewportWidth) {
    leftValue += totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
    oldViewportWidth = newViewportWidth;
  } else if (leftValue <= -totalMovementSize && oldViewportWidth > newViewportWidth) {
    leftValue -= totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
    oldViewportWidth = newViewportWidth;
  }
}