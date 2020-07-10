function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML= seconds;
        setTimeout(tick, 1000);
    if(seconds==-1) {
        alert("time's up!");
    }
        }
    tick();
}

var slideIndex = 1;
showslides(slideIndex);

// Next/previous controls
function plusslides(n) {
  showslides(slideIndex += n);
}

// Thumbnail image controls
function pic(n) {
  showslides(slideIndex = n);
}

function showslides(n) {
  var i;
  var slides = document.getElementsByClassName("ocean");
  var dots = document.getElementsByClassName("dot");
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
}