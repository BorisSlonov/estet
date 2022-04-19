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

//shop-select
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

  // tabs
  $(".js-tab-trigger").click(function () {
    var id = $(this).attr("data-tab"),
      content = $('.js-tab-content[data-tab="' + id + '"]');

    $(".js-tab-trigger.active").removeClass("active");
    $(this).addClass("active");

    $(".js-tab-content.active").removeClass("active");
    content.addClass("active");
  });

  //accardion

  $(window).on("resize", function () {
    if ($(window).width() <= 1024) {
      var allPanels = $(".accordion__text").hide();

      $(".accordion__title").click(function () {
        $this = $(this);
        $target = $this.next();

        if (!$target.hasClass("active-acc")) {
          allPanels.removeClass("active-acc").slideUp();
          $target.addClass("active-acc").slideDown();
        }

        return false;
      });
    }
  });

  //scrollUp
  // при нажатии на кнопку scrollup
  $(".scrollup").click(function () {
    // переместиться в верхнюю часть страницы
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
// при прокрутке окна (window)
$(window).scroll(function () {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop() > 200) {
    // то сделать кнопку scrollup видимой
    $(".scrollup").fadeIn();
  }
  // иначе скрыть кнопку scrollup
  else {
    $(".scrollup").fadeOut();
  }
});

//tabs-slider
const swiper = new Swiper(".swiper-types-doors", {
  // Optional parameters
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  spaceBetween: 20,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is <= 499px
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});
