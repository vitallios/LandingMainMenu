const weekBtn = document.querySelectorAll(".weekDey");
const categoryBtn = document.querySelectorAll(".categoryBtn");
const menuProductList = document.querySelector(".menu__product-list");
const mobailMenuBtn = document.querySelector('.menu-btn')
const mobailMenu = document.querySelector('.mobailMenu')
let menuOpen = false;


const category = [
  "Салаты",
  "Супы",
  "Горячие закуски",
  "Мясо/птица",
  "Рыба/морепродукты",
  "Паста/Ризотто",
  "Гарниры",
];

const weeks = {
  weekOne: {
    Салаты: [
      {title: "Руккола с апельсином, вяленым томатом и слабо соленой семгой", img: "./assets/img/IMG_20210818_184437.png"},
      {title: "Цезарь с курицей", img: "./assets/img/IMG-20210916-WA0050.png"},
      {title: "Салат с рукколой ростбифом и говяжей вырезки", img: "./assets/img/IMG_20210818_184437.png"},
      {title: "Теплый салат с морепродуктами (Семга, кальмар, мидии)", img: "./assets/img/IMG_20210818_184437.png"},
      {title: "Салат с ростбифом и яйцом пашот", img: "./assets/img/IMG-20210916-WA0050.png"},
      {title: "Салат греческий", img: "./assets/img/IMG_20210818_184437.png"},
      {title: "Салат из моркови с курагой", img: "./assets/img/IMG_20210818_184437.png"},
      {title: "Салат из томата с красным луком", img: "./assets/img/1572516916525.png"},
    ],
    Супы: [
            {title: "Куриный суп с яйцом пашот", img: "./assets/img/IMG-20210916-WA0050.png"},
            {title: "Грибной крем суп с трюфельным маслом", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Борщ с говядиной", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Минестроне", img: "./assets/img/IMG_20210818_184437.png"},
    ],
    ГорячиеЗакуски: [
            {title: "Кокот грибной", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Кесадилья с курицей", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Сельдь с картофелем и красным луком", img: "./assets/img/IMG_20210818_184437.png"},
    ],
    МясоПтица: [
            {title: "Оссобуко из говядины с костным мозгом", img: "./assets/img/IMG-20210916-WA0050.png"},
            {title: "Цыпленок табака", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Филе миньон с аджикой", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Оладьи из индейки с ореховым соусом", img: "./assets/img/IMG-20210916-WA0050.png"},
            {title: "Фрикасе из грудки с овощами", img: "./assets/img/IMG_20210818_184437.png"},
    ],
    РыбаМорепродукты: [
            {title: "Кусочки форели с шпинатом и славками", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Стейктрески с соусом песто", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Филе морского языка с лимоном", img: "./assets/img/IMG-20210916-WA0050.png"},
            {title: "Дорадо на гриле", img: "./assets/img/IMG_20210818_184437.png"},
    ],
    ПастаРизотто: [
      {title: "Паста с телятиной и паприкой с томатным соусом", img: "./assets/img/IMG_20210818_184437.png"},
      {title: "Лингвини с песто и креветками", img: "./assets/img/IMG_20210818_184437.png"},
      {title: "Ризотто с вешенками, кроликом в сливочном соусе", img: "./assets/img/IMG-20210916-WA0050.png"},
    ],
    Гарниры: [
      {title: "Картофельное пюре", img: "./assets/img/IMG-20210916-WA0050.png"},
      {title: "Рис отварной жасмин", img: "./assets/img/IMG-20210916-WA0050.png"},
      {title: "Кукуруза на гриле", img: "./assets/img/IMG_20210818_184437.png"},
      {title: "Капуста тушеная с тмином", img: "./assets/img/IMG_20210818_184437.png"},
      {title: "Батат запеченый с розмарином", img: "./assets/img/IMG_20210818_184437.png"},
      {title: "Чечевица отварная", img: "./assets/img/IMG-20210916-WA0050.png"},
    ],
  },
  weekTwo: {
    Салаты: [
                  {title: "Салат с спелым манго, куриной грудкой и гранатовым соусом", img: "./assets/img/IMG-20210916-WA0050.png"},
            {title: "Английский салат", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Салат с молодой свеклой, моцареллой и рукколой", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Салат Нисуаз с тунцом", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Салат из свежих помидоров с фетой", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Салат с куриной печенью", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Салат деревенский со сметаной", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Капуста с огурцом и лимонно-оливковой заправкой", img: "./assets/img/IMG_20210818_184437.png"},
    ],
    Супы: [
                  {title: "Куриный суп с яйцом пашот", img: "./assets/img/IMG-20210916-WA0050.png"},
            {title: "Уха с сёмгой", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Суп из морепродуктов", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Салат из красной чечевицы с говядиной", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Гаспачо томатный", img: "./assets/img/IMG_20210818_184437.png"},
    ],
    ГорячиеЗакуски: [
                  {title: "Куриный суп с яйцом пашот", img: "./assets/img/IMG-20210916-WA0050.png"},
            {title: "Кокот из курицы", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Кесадилья с говяжьей вырезкой", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Колбаски мюнхенские", img: "./assets/img/IMG_20210818_184437.png"},
    ],
    МясоПтица: [
                  {title: "Куриный суп с яйцом пашот", img: "./assets/img/IMG-20210916-WA0050.png"},
            {title: "Бефстроганов с грибами и картофельным пюре", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Антрекот из говяжей вырезки", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Бризоль из свиной вырезки с прованскими травами", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Куриное филе с цукини, курагой и сладким чили", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Бифштекс рубленный с луком фри", img: "./assets/img/IMG_20210818_184437.png"},
    ],
    РыбаМорепродукты: [
                  {title: "Куриный суп с яйцом пашот", img: "./assets/img/IMG-20210916-WA0050.png"},
            {title: "Нежный кальмар в сливочном соусе", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Спинка трески на гриле с тимьяном", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Филе скумбрии с сладким чили", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Стейк сёмги", img: "./assets/img/IMG_20210818_184437.png"},
    ],
    ПастаРизотто: [
                  {title: "Куриный суп с яйцом пашот", img: "./assets/img/IMG-20210916-WA0050.png"},
            {title: "Фарфале четыре сыра", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Сливочное пенне с курицей и овощами", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Ризотто по-милански с индейкой и шафраном", img: "./assets/img/IMG_20210818_184437.png"},
    ],
    Гарниры: [
                  {title: "Куриный суп с яйцом пашот", img: "./assets/img/IMG-20210916-WA0050.png"},
            {title: "Картофель гратен", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Рис басмати с овощами", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Овощи гриль", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Цветная капуста с кунжутом", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Брюсельская капуста жареная", img: "./assets/img/IMG_20210818_184437.png"},
            {title: "Маш", img: "./assets/img/IMG_20210818_184437.png"},
    ],
  },
  weekFree: {
    Салаты: [
      {title: "Спринг-роллы с копченым лососеми пекинской капустой", img: "./assets/img/IMG-20210916-WA0050.png"},
      {title: "Вителло тонато", img: "./assets/img/IMG_20210818_184437.png"},
      {title: "Оливье с говяжьим языком и домашиним майонезом", img: "./assets/img/IMG-20210916-WA0050.png"},
      {title: "Салат с красной фасолью, томатами и грецким орехом", img: "./assets/img/IMG_20210818_184437.png"},
      {title: "Трио из томатов с рукколой (розовые, желтые, сливовидные)", img: "./assets/img/IMG_20210818_184437.png"},
      {title: "Салат с морковью, апельсинами и орехими", img: "./assets/img/IMG_20210818_184437.png"},
      {title: "Яблочно-изюмный Коул Слоу", img: "./assets/img/IMG_20210818_184437.png"},
      {title: "Поке с креветкой", img: "./assets/img/IMG_20210818_184437.png"},
    ],
    Супы: [
      {title: "Куриный суп с лапшой и фрикадельками", img: "./assets/img/IMG-20210916-WA0050.png"},
      {title: "Суп рыбный Корфу с треской", img: "./assets/img/IMG_20210818_184437.png"},
      {title: "Суп харчо с бараниной", img: "./assets/img/IMG-20210916-WA0050.png"},
      {title: "Свекольный муп с апельсином и рикоттой", img: "./assets/img/IMG_20210818_184437.png"},
      {title: "Горячие закуски", img: "./assets/img/IMG_20210818_184437.png"},
    ],
    ГорячиеЗакуски: [
            {title: "Кокот из тигровых креветок", img: "./assets/img/IMG-20210916-WA0050.png"},
      {title: "Куриные крылья", img: "./assets/img/IMG_20210818_184437.png"},
      {title: "Колбаски мергес", img: "./assets/img/IMG-20210916-WA0050.png"},
    ],
    МясоПтица: [
            {title: "Бифштекс из говяжьей вырезки", img: "./assets/img/IMG-20210916-WA0050.png"},
      {title: "Стейк из индейки с томатной сальсой", img: "./assets/img/IMG_20210818_184437.png"},
      {title: "Язык говяжий на гриле с сливочным хреном", img: "./assets/img/IMG-20210916-WA0050.png"},
      {title: "Куриное филе на пару или на гриле", img: "./assets/img/IMG_20210818_184437.png"},
      {title: "Мясные тефтели с моцареллой в томатном соусе", img: "./assets/img/IMG_20210818_184437.png"},
    ],
    РыбаМорепродукты: [
            {title: "Мидии киви с сливочным соусом и сыром пармезан", img: "./assets/img/IMG-20210916-WA0050.png"},
      {title: "Котлета из щуки с зеленью", img: "./assets/img/IMG_20210818_184437.png"},
      {title: "Филе нерки запечёное с прованскими травами", img: "./assets/img/IMG-20210916-WA0050.png"},
      {title: "Сибас на гриле", img: "./assets/img/IMG_20210818_184437.png"},
    ],
    ПастаРизотто: [
            {title: "Паста с морепродуктами", img: "./assets/img/IMG-20210916-WA0050.png"},
      {title: "Спагетти болоньезе", img: "./assets/img/IMG_20210818_184437.png"},
      {title: "Ризотто с кабачками и моцареллой", img: "./assets/img/IMG-20210916-WA0050.png"},
    ],
    Гарниры: [
            {title: "Жареный картофель с грибами", img: "./assets/img/IMG-20210916-WA0050.png"},
      {title: "Рис жареный с соевым соусом и яйцом", img: "./assets/img/IMG_20210818_184437.png"},
      {title: "Фузилли с сыром", img: "./assets/img/IMG-20210916-WA0050.png"},
      {title: "Брокколи на пару с зеленью и кунжутным маслом", img: "./assets/img/IMG_20210818_184437.png"},
      {title: "Фасоль стручковая с овощами", img: "./assets/img/IMG_20210818_184437.png"},
      {title: "Бамия с томатным соусом", img: "./assets/img/IMG_20210818_184437.png"},

    ],
  },
};



function productItem(product) {
  while (menuProductList.hasChildNodes()) {
    menuProductList.removeChild(menuProductList.firstChild);
  }
  product.forEach((element) => {
    console.dir(element.title);
    const li = document.createElement("li");
    menuProductList.append(li);
    //
    li.innerHTML = `
    <button type="button" class="card">
     <img src="${element.img}" alt="" class="card__img">
     <div class="card__text">
      <h2>${element.title}</h2>
     </div>
   </button>
  `;
  });
}



// category
function categoryItem(weekNumber) {
  categoryBtn.forEach((item) => {
    item.addEventListener("click", (it) => {
    // сброс стилей на кнопках категорий      
      categoryBtn.forEach((act) => {
        act.classList.remove("active");
      });

      if (it.target.id === "SaladsAndSnacks") {
        it.target.classList.add("active");
        productItem(weekNumber.Салаты);
      }
      if (it.target.id === "Soups") {
        it.target.classList.add("active");
        productItem(weekNumber.Супы);
      }
      if (it.target.id === "HotAppetizers") {
        it.target.classList.add("active");
        productItem(weekNumber.ГорячиеЗакуски);
      }
      if (it.target.id === "MeatPoultry") {
        it.target.classList.add("active");
        productItem(weekNumber.МясоПтица);
      }
      if (it.target.id === "FishSeafood") {
        it.target.classList.add("active");
        productItem(weekNumber.РыбаМорепродукты);
      }
      if (it.target.id === "PastaRisotto") {
        it.target.classList.add("active");
        productItem(weekNumber.ПастаРизотто);
      }
      if (it.target.id === "SideDishes") {
        it.target.classList.add("active");
        productItem(weekNumber.Гарниры);
      }
    // сброс стилей на кнопках категорий
    });
  });
}
// category

// week dey
weekBtn.forEach((week) => {
  // 
  // 
  week.addEventListener("click", (e) => {
    // сброс стилей на кнопках недели
    weekBtn.forEach((act) => {
      act.classList.remove("active");
    });
    categoryBtn.forEach((categAct) => {
      categAct.classList.remove("active")
    })
    // сброс стилей на кнопках недели
    
    if (e.target.id === "week1") {
      e.target.classList.add("active");
      categoryItem(weeks.weekOne);
    }
    if (e.target.id === "week2") {
      e.target.classList.add("active");
      categoryItem(weeks.weekTwo);
    }
    if (e.target.id === "week3") {
      e.target.classList.add("active");
      categoryItem(weeks.weekFree);
    }
  });
  // 
});
// week dey




function startPositon() {
  window.addEventListener('load', function(){
    'use strict';
    var el = weekBtn[0]
    var cat = categoryBtn[0]
    setTimeout(function(){
      el.click();
      cat.click()
    }, 0);
  });
}

startPositon();



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

