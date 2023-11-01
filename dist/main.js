const menuBtn = document.querySelecto('.menu-btn');

const mobailMenu = document.querySelector('.mobailMenu');
const btnTop = document.querySelector('.btnTop');
const navs = document.querySelector('.navs')
// console.log(btnTop);

const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
let carouselVp = document.querySelector("#carousel-vp");
let cCarouselInner = document.querySelector("#cCarousel-inner");
let carouselInnerWidth = cCarouselInner.getBoundingClientRect().width;
let leftValue = 0;
let menuOpen = false;

// модал 
const navEmail = document.querySelectorAll('.modalEmail')
const modalEmail = document.querySelector('.modal')
const modalClose = document.querySelector('.modal__close')
const mobItemMenu = document.querySelectorAll('.mobailMenu__menu-item')

const openMenu = () => {
  menuBtn.classList.add('open');
  menuOpen = true;
  mobailMenu.style.left = '0'
}
const closeMenu = () => {
  menuBtn.classList.remove('open');   
  menuOpen = false;
  mobailMenu.style.left = '-80%'
}
                                          
// console.dir(window.outerHeight);



// menu burger
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    openMenu()
  } else {
    closeMenu()
  }
})



mobItemMenu.forEach((item) => {
  item.addEventListener('click', () => {
    closeMenu()
  })
})

navEmail.forEach(e => {
  e.addEventListener('click', () => {
    modalEmail.classList.remove('none')
    document.body.classList.add('hidden')
  })
})

modalClose.addEventListener('click', () => {
  modalEmail.classList.add('none')
  document.body.classList.remove('hidden')
})



// Variable used to set the carousel movement value (card's width + gap)
const totalMovementSize =
  parseFloat(
    document.querySelector(".cCarousel-item").getBoundingClientRect().width,
    10
  ) +
  parseFloat(
    window.getComputedStyle(cCarouselInner).getPropertyValue("gap"),
    10
  );

prev.addEventListener("click", () => {
  if (!leftValue == 0) {
    leftValue -= -totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
  }
});

next.addEventListener("click", () => {
  const carouselVpWidth = carouselVp.getBoundingClientRect().width;
 
  if (carouselInnerWidth - Math.abs(leftValue) > carouselVpWidth) {
    leftValue -= totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
  }
});

const mediaQuery510 = window.matchMedia("(max-width: 300px)");
const mediaQuery770 = window.matchMedia("(max-width: 770px)");

mediaQuery510.addEventListener("change", mediaManagement);
mediaQuery770.addEventListener("change", mediaManagement);

let oldViewportWidth = window.innerWidth;

function mediaManagement() {
  const newViewportWidth = window.innerWidth;

  if (leftValue <= -totalMovementSize && oldViewportWidth < newViewportWidth) {
    leftValue += totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
    oldViewportWidth = newViewportWidth;
  } else if (
    leftValue <= -totalMovementSize &&
    oldViewportWidth > newViewportWidth
  ) {
    leftValue -= totalMovementSize;
    cCarouselInner.style.left = leftValue + "px";
    oldViewportWidth = newViewportWidth;
  }
}





