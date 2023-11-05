$(document).ready(function () {
  $(".filtration__wrapper__item.open").find(".filtration__wrapper__item__dropdown").slideDown();

  $(".filtration__wrapper__item").click(function () {
    $(this).find(".filtration__wrapper__item__dropdown").slideToggle();
    $(this).toggleClass("open");
  });
});
