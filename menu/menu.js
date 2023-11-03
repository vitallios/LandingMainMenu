const mobailMenuBtn = document.querySelector('.menu-btn')
const mobailMenu = document.querySelector('.mobailMenu')
const btnTop = document.querySelector('.btnTop');
let menuOpen = false;
// 


const ConstructBtn = document.querySelectorAll('.menu__constructor-function-textBtn')
const Weeks = document.querySelectorAll('.weeks')


// menu Burger
const openMenu = () => {
  mobailMenuBtn.classList.add('open');
  menuOpen = true;
  mobailMenu.style.left = '0'
}
const closeMenu = () => {
  mobailMenuBtn.classList.remove('open');   
  menuOpen = false;
  mobailMenu.style.left = '-80%'
}

mobailMenuBtn.addEventListener('click', ()=>{
  if (!menuOpen) {
    openMenu()
  } else {
    closeMenu()
  }
})






ConstructBtn.forEach( btn => {

  btn.addEventListener('click', (e)=>{
    
    ConstructBtn.forEach(t => {
      t.classList.remove('active');
    });

    if (!e.target.classList[1]) {
      e.target.classList.add('active')
      menuConst(e.target.id)
    } 
  })
})



function menuConst(btnId) {

  Weeks.forEach(week => {
    week.classList.add('opasiti')
    if (week.id === "week-"+`${btnId}`) {
      week.classList.remove('opasiti')
    }
    
  })
}

