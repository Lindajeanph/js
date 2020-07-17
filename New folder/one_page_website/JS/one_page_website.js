// Open the Modal
function openmodal() {
  document.getElementById("mymodal").style.display = "block";
}

// Close the Modal
function closemodal() {
  document.getElementById("mymodal").style.display = "none";
}

var slideIndex = 1;
showslides(slideIndex);

// Next/previous controls
function pic(n) {
  showslides(slideIndex += n);
}

// Thumbnail image controls
function slide(n) {
  showslides(slideIndex = n);
}

function showslides(n) {
  var i;
  var slides = document.getElementsByClassName("pic");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("character");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
