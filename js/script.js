//burger
window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".header__list"),
    menuItem = document.querySelectorAll(".header__link"),
    hamburger = document.querySelector(".header__burger"),
    overflowHidden = document.querySelector("body");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("burger_active");
    menu.classList.toggle("menu_active");
    overflowHidden.classList.toggle("overflow-hidden-y");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("burger_active");
      menu.classList.toggle("menu_active");
      overflowHidden.classList.toggle("overflow-hidden-y");
    });
  });
});

//countdown
$(document).ready(function () {
  // Grab the current date
  var currentDate = new Date();
  // Set some date in the future. ***change to desired date***
  //var futureDate = new Date(2014, 11, 23, 6, 0, 0);
  var futureDate = new Date(2022, 4); //fixed as per comments
  // Calculate the difference in seconds between the future and current date
  var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

  var clock;
  clock = $(".clock").FlipClock(diff, {
    clockFace: "DailyCounter",
    countdown: true,
    showSeconds: true,
  });
});

//map-select
let select = document.querySelector(".shop-select");
let block = document.querySelectorAll(".shop-block");
let lastIndex = 0; // После каждой смены опции, сохраняем сюда индекс предыдущего блока

select.addEventListener("change", function () {
  block[lastIndex].style.display = "none";
  // Чтобы сразу делать именно его невидимым при следующей смене

  let index = select.selectedIndex; // Определить индекс выбранной опции
  block[index].style.display = "block"; // Показать блок с соответствующим индексом

  lastIndex = index; // Обновить сохраненный индекс.
});
