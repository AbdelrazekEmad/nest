// const navigationList = document.querySelector(".contain-navbar");
// const navgation = document.querySelector(".navgation");

// navigationList.addEventListener("click", (e) => {
//   if (e.target.closest(".dropdown.active")) {
//     $(".dropdown").classList.remove("active");
//   } else if (e.target.closest(".dropdown")) {
//     navigationList.querySelector(".dropdown.active")?.classList.remove("active");
//     e.target.closest(".dropdown").classList.add("active");
//   }

//   if (e.target.closest(".hamburger.is-active")) {
//     e.target.closest(".hamburger").classList.remove("is-active");
//     $(".navgation").slideUp();
//   } else if (e.target.closest(".hamburger")) {
//     e.target.closest(".hamburger").classList.add("is-active");
//     $(".navgation").slideDown();
//   }
// });

// document.addEventListener("click", (e) => {
//   if (!e.target.closest(".dropdown.active") && !e.target.closest(".dropdown__list")) {
//     navigationList?.querySelector(".dropdown.active")?.classList.remove("active");
//   }
// });

$(".dropdown").click(function () {
  if ($(this).hasClass("open")) {
    $(this).find(".dropdown__list").slideUp();
    $(this).removeClass("open");
  } else {
    $(".dropdown").find(".dropdown__list").slideUp();
    $(".dropdown").removeClass("open");
    $(this).find(".dropdown__list").slideDown();
    $(this).addClass("open");
  }
});

$(document).click(function (e) {
  if (!$(e.target).is(".dropdown") && !$(e.target).parents().is(".dropdown")) {
    $(".dropdown__list").slideUp();
    $(".dropdown").removeClass("open");
  }
});

$(".hamburger").click(function () {
  if ($(this).hasClass("is-active")) {
    $(this).removeClass("is-active");
    $(".navgation").slideUp();
    $(".dropdown").removeClass("open");
  } else {
    $(this).addClass("is-active");
    $(".navgation").slideDown();
  }
});
