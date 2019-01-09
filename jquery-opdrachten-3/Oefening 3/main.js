// Write your solution here

let $button = $("#button");
let $check = $("#check");
randomNumber = Math.floor(Math.random() * 101);

let checkValue

$button.on("click", function () {
  checkValue = $check.val();
  if (parseInt(checkValue) < randomNumber) {
    alert("Insert a higher number");
  } else if (parseInt(checkValue) > randomNumber) {
    alert("Insert a lower number");
  } else if (parseInt(checkValue) === randomNumber) {
    alert("Correct");
  }
})