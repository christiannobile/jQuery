//Write your solution here
function positionCheck($element) {
  if (parseInt($element.css("top")) < 0) {
    $element.css("top", window.innerHeight);
  }
  else if (parseInt($element.css("top")) > window.innerHeight) {
    $element.css("top", 0);
  }
  else if (parseInt($element.css("left")) < 0) {
    $element.css("left", window.innerWidth);
  }
  else if (parseInt($element.css("left")) > window.innerWidth) {
    $element.css("left", 0);
  }
}

let $controller = $("#controller");
let $square = $("#square");

$square.css("position", "absolute");

$controller.keydown(function(event) {
  switch (event.key) {
    case "ArrowUp": $square.css("top", "-=10");
      break;
    case "ArrowDown": $square.css("top", "+=10");
      break;
    case "ArrowLeft": $square.css("left", "-=10");
      break;
    case "ArrowRight": $square.css("left", "+=10");
  }
  positionCheck($square);
});