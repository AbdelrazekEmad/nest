$(".single-product__info__sticker__dropdown").on("click", function () {
  $(".single-product__info__sticker__dropdown__list").slideToggle();
});

// Function to copy the current page's URL to the clipboard
function copyCurrentPageURL() {
  // Get the current page's URL
  var currentPageURL = window.location.href;

  // Create a temporary input element to copy the URL
  var tempInput = document.createElement("input");
  tempInput.value = currentPageURL;

  // Append the input element to the document
  document.body.appendChild(tempInput);

  // Select the input element's value
  tempInput.select();

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Remove the temporary input element
  document.body.removeChild(tempInput);

  // Show the Bootstrap toast using jQuery
  $("#copyToast").toast("show");

  // Hide the toast after 5 seconds
  setTimeout(function () {
    $("#copyToast").toast("hide");
  }, 3000);
}

// Add a click event listener to the button using jQuery
$("#copyBtn").click(copyCurrentPageURL);

function playVideo() {
  var video = document.getElementById("video");
  var thumbnail = document.querySelector(".video-thumbnail");
  var playButton = document.querySelector(".play-button");
  video.style.display = "block";
  thumbnail.style.display = "none";
  playButton.style.display = "none";
  video.play();
}
