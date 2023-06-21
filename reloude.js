
function page() {

 let timer; // пока пустая переменная
let x = 5; // стартовое значение обратного отсчета
countdown(); // вызов функции
function countdown() {
  // функция обратного отсчета
  // let nums = 
  document.getElementById("rocket").innerHTML = x;
  x--; // уменьшаем число на единицу
  if (x < 0) {
    clearTimeout(timer); // таймер остановится на нуле
    stepHomePage(); // вызываем функцию перехода на стартовую страницу
  } else {
    timer = setTimeout(countdown, 1000);
  }
}



        console.log(window.location.pathname);


 setTimeout(()=>{
   window.location.pathname = '/index.html';
 }, 5000)
}

page()
