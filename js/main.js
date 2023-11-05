$(".increment").click(function(){
  let counter = $(this).prev(".value").text();
  counter++
  $(this).prev(".value").text(counter);
  console.log("lkjhgfd")
})
$(".decrement").click(function(){
  let counter = $(this).next(".value").text();
  if(counter > 1) {
    counter--;
  }
  // if(counter <= 0) {
  //   $(this).parent().prev().removeClass("d-none");
  //   if(document.querySelector(".add-to-cart")) {
  //     $(this).parent().removeClass("d-flex");
  //   }
  //   if(document.querySelector(".shopping-cart")) {
  //     $(this).parents(".row-item").remove();
  //   }
  // }
  $(this).next(".value").text(counter);
})

