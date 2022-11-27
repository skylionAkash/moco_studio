// expertise slider started

var $swiperSelector = $(".expertise-slider-container");

$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slider-" + index);

  // var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 175;

  if ($(window).width() < 768) {
    var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 50;
  } else if ($(window).width() >= 768 && $(window).width() < 1024) {
    var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 100;
  } else {
    var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 175;
  }

  var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
  var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 4;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 3;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 1;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 20;
  var watchOverflow = $this.data("watch-overflow")
    ? $this.data("watch-overflow")
    : true;

  var swiper = new Swiper(".swiper-slider-" + index, {
    direction: "horizontal",
    loop: loop,
    freeMode: freeMode,
    watchOverflow: watchOverflow,
    spaceBetween: spaceBetween,
    // effect: "fade",
    keyboard: {
      enabled: true,
    },
    mousewheel: true,
    grabCursor: true,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
      480: {
        slidesPerView: slidesMobile,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: dragSize,
    },
  });
});

// expertise slider ended

// expertise slider started

var $swiperSelector = $(".expertise-details-slider-container");

$swiperSelector.each(function (index) {
  var $this = $(this);
  $this.addClass("swiper-slider-" + index);

  // var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 175;

  if ($(window).width() < 768) {
    var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 75;
  } else if ($(window).width() >= 768 && $(window).width() < 1024) {
    var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 100;
  } else {
    var dragSize = $this.data("drag-size") ? $this.data("drag-size") : 175;
  }

  var freeMode = $this.data("free-mode") ? $this.data("free-mode") : false;
  var loop = $this.data("loop") ? $this.data("loop") : false;
  var slidesDesktop = $this.data("slides-desktop")
    ? $this.data("slides-desktop")
    : 1;
  var slidesTablet = $this.data("slides-tablet")
    ? $this.data("slides-tablet")
    : 1;
  var slidesMobile = $this.data("slides-mobile")
    ? $this.data("slides-mobile")
    : 1;
  var spaceBetween = $this.data("space-between")
    ? $this.data("space-between")
    : 20;
  var watchOverflow = $this.data("watch-overflow")
    ? $this.data("watch-overflow")
    : true;

  var swiper = new Swiper(".swiper-slider-" + index, {
    direction: "horizontal",
    loop: loop,
    freeMode: freeMode,
    watchOverflow: watchOverflow,
    spaceBetween: spaceBetween,
    keyboard: {
      enabled: true,
    },
    mousewheel: true,
    grabCursor: true,
    breakpoints: {
      1920: {
        slidesPerView: slidesDesktop,
      },
      992: {
        slidesPerView: slidesTablet,
      },
      480: {
        slidesPerView: slidesMobile,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
      dragSize: dragSize,
    },
  });
});

// expertise slider ended

// onclick sidebar submenu start

$(".submenu-li").click(function () {
  $(".submenu-ul").toggleClass("active");
  $(".exp-details-sidebar-ul").toggleClass("active");
});

// onclick sidebar submenu end

// mob menu started
$(".mob-menu").click(function () {
  $(".mob-menu").toggleClass("active");
  $(".menu-list").toggleClass("active");
});

// mob menu ended

// on click mobile submenu started
$(".exp-details-exp-btn").click(function () {
  $(".exp-details-exp-btn").toggleClass("active1");
  $(".exp-details-sidebar-ul").toggleClass("active1");
  $(".expertise-details-right-sidebar").toggleClass("active1");
});
// onclick mobile submenu ended

// to calculate height in mob
const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
};
window.addEventListener("resize", documentHeight);
documentHeight();

// on mouse over redirect to expertise
$("#expertise").hover(function (e) {
  var href = $(this).attr("href");
  window.location.href = href;
});

// on scroll redirect to expertise
// function scrollToExpertise() {
//   window.location.href = "https://www.mocodesignstudio.com/expertise";
// }

document.getElementById("onscrollId").addEventListener("wheel", myFunction);

function myFunction() {
  // window.location.href = "https://www.mocodesignstudio.com/expertise";
  var href = $(this).attr("expertise");
  window.location.href = expertise;
}
