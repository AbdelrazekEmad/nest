const direction = $("html").attr("dir");

$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: ".slider-nav",
  infinite: false,
  rtl: direction == "rtl" ? true : false,
});

$(".slider-nav").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  arrows: true,
  vertical: true,
  infinite: false,
  rtl: direction == "rtl" ? true : false,
});
