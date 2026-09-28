var layers = document.querySelectorAll(".parallax-layer");
var revealItems = document.querySelectorAll(".reveal");

function scrollEffects() {
  var scroll = window.scrollY;

  for (var i = 0; i < layers.length; i++) {
    var speed = layers[i].getAttribute("data-speed");
    var sectionTop = layers[i].parentElement.offsetTop;
    var distance = scroll - sectionTop;

    layers[i].style.transform = "translateY(" + distance * speed + "px)";
  }

  for (var j = 0; j < revealItems.length; j++) {
    var top = revealItems[j].getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {
      revealItems[j].classList.add("show");
    }
  }
}

window.addEventListener("scroll", scrollEffects);
scrollEffects();
