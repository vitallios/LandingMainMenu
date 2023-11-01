"use strict";

var menuBtn = document.querySelector('.menu-btn');
var mobailMenu = document.querySelector('.mobailMenu');
var btnTop = document.querySelector('.btnTop');
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");
var carouselVp = document.querySelector("#carousel-vp");
var cCarouselInner = document.querySelector("#cCarousel-inner");
var carouselInnerWidth = cCarouselInner.getBoundingClientRect().width;
var leftValue = 0;
var menuOpen = false; // модал 

var navEmail = document.querySelectorAll('.modalEmail');
var modalEmail = document.querySelector('.modal');
var modalClose = document.querySelector('.modal__close');
var mobItemMenu = document.querySelectorAll('.mobailMenu__menu-item');

var openMenu = function openMenu() {
  menuBtn.classList.add('open');
  menuOpen = true;
  mobailMenu.style.left = '0';
};

var closeMenu = function closeMenu() {
  menuBtn.classList.remove('open');
  menuOpen = false;
  mobailMenu.style.left = '-80%';
};

// menu burger

menuBtn.addEventListener('click', function () {
  if (!menuOpen) {
    openMenu();
  } else {
    closeMenu();
  }
});
mobItemMenu.forEach(function (item) {
  item.addEventListener('click', function () {
    closeMenu();
  });
});
navEmail.forEach(function (e) {
  e.addEventListener('click', function () {
    modalEmail.classList.remove('none');
    document.body.classList.add('hidden');
  });
});
modalClose.addEventListener('click', function () {
  modalEmail.classList.add('none');
  document.body.classList.remove('hidden');
}); // Variable used to set the carousel movement value (card's width + gap)

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
    console.log(leftValue);
    if (window.innerWidth > 899 && leftValue < '-1010') {
      leftValue = 0;
    }
    if (window.innerWidth > 750 && leftValue < '-1050') {
      leftValue = 0;
    }
    if (window.innerWidth > 300 && leftValue < '-1300') {
      leftValue = 0;
    }
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


