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

//lazy-load

[].forEach.call(document.querySelectorAll("img[data-src]"), function (img) {
  img.setAttribute("src", img.getAttribute("data-src"));
  img.onload = function () {
    img.removeAttribute("data-src");
  };
});

//мягкий скролл к якорям
const anchors = document.querySelectorAll(".header__link");
for (let anchor of anchors) {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
}

// Отправка данных на сервер
function send(event, php) {
  console.log("Отправка запроса");
  event.preventDefault ? event.preventDefault() : (event.returnValue = false);
  var req = new XMLHttpRequest();
  req.open("POST", php, true);
  req.onload = function () {
    if (req.status >= 200 && req.status < 400) {
      json = JSON.parse(this.response); //  internet explorer 11
      console.log(json);

      // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
      if (json.result == "success") {
        // Если сообщение отправлено

        $.fancybox.open(
          '<div class="message"><h3 class="message__h3">Спасибо за заявку!</h3><p class="message__p">Мы свяжемся с вами в ближайшее время</p></div>'
        );

        function closePopup() {
          $.fancybox.close();
          $.fancybox.close();
        }

        setTimeout(closePopup, 3000);
      } else {
        // Если произошла ошибка
        alert("Ошибка. Сообщение не отправлено");
      }
      // Если не удалось связаться с php файлом
    } else {
      alert("Ошибка сервера. Номер: " + req.status);
    }
  };

  // Если не удалось отправить запрос. Стоит блок на хостинге
  req.onerror = function () {
    alert("Ошибка отправки запроса");
  };
  req.send(new FormData(event.target));
}

//shop-select
let citySelect = document.querySelector(".city-select");
let cityBlock = document.querySelectorAll(".city-block");
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
citySelect.addEventListener("change", function () {
  cityBlock[lastIndex].style.display = "none";
  block[lastIndex].style.display = "none";

  if (citySelect.options.selectedIndex == 0) {
    select.style.display = "block";
    block[0].style.display = "block";
  } else {
    select.style.display = "none";
  }
  // Чтобы сразу делать именно его невидимым при следующей смене

  let index = citySelect.selectedIndex; // Определить индекс выбранной опции
  cityBlock[index].style.display = "block"; // Показать блок с соответствующим индексом

  lastIndex = index; // Обновить сохраненный индекс.
});



$(document).ready(function () {
  //countdown
  // Grab the current date
  var currentDate = new Date();
  // Set some date in the future. ***change to desired date***
  //var futureDate = new Date(2014, 11, 23, 6, 0, 0);
  var futureDate = new Date(2022, 5); //fixed as per comments
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

  // скрывать при прокрутке окна (window)
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

  var $element = $(".footer");
  let counter = 0;
  $(window).scroll(function () {
    var scroll = $(window).scrollTop() + $(window).height();
    //Если скролл до конца елемента
    //var offset = $element.offset().top + $element.height();
    //Если скролл до начала елемента
    var offset = $element.offset().top;

    if (scroll > offset) {
      $(".scrollup").css({
        position: "absolute",
        top: "-80px",
        bottom: "auto",
      });
    } else {
      $(".scrollup").css({ position: "fixed", top: "auto", bottom: "30px" });
    }
  });

  $(".main-form__input_tel").mask("+7(999) 999-9999");
});

//tabs-slider
const swiperTypesDoors = new Swiper(".swiper-types-doors", {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 20,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});

//swiper-photo-portfolio
//tabs-slider
const swiperPhotoPortfolio = new Swiper(".swiper-photo-portfolio", {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 0,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next.swiper-button-next-portfolio",
    prevEl: ".swiper-button-prev.swiper-button-prev-portfolio",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 40,
    },
  },
});

//swiper-video
var swiperVideo = new Swiper(".swiper-video", {
  spaceBetween: 10,
  slidesPerView: 2.5,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    1024: {
      slidesPerView: 4.5,
      spaceBetween: 10,
    },
  },
});
var swiperVideo2 = new Swiper(".swiper-video2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next-video",
    prevEl: ".swiper-button-prev-video",
  },
  thumbs: {
    swiper: swiperVideo,
  },
});
