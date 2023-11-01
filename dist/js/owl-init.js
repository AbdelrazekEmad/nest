const dir = $("html").attr("dir");

$(".owl-carousel--hero").owlCarousel({
  rtl: dir == "rtl" ? true : false,
  loop: true,
  margin: 0,
  nav: false,
  dots: true,
  items: 1,
  animateOut: "fadeOut",
});

$(".owl-carousel--categories").owlCarousel({
  rtl: dir == "rtl" ? true : false,
  loop: false,
  margin: 0,
  nav: true,
  dots: false,
  items: 1,
  animateOut: "fadeOut",
  navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
    },
  },
});

$(".owl-carousel--products").owlCarousel({
  rtl: dir == "rtl" ? true : false,
  loop: false,
  margin: 20,
  nav: true,
  dots: false,
  items: 1,
  animateOut: "fadeOut",
  navText: ["<i class='fa-solid fa-angle-left'></i>", "<i class='fa-solid fa-angle-right'></i>"],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});
