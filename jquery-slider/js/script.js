$(document).ready(function () {

    $('#slider').after('<button id="next">next</button>').after('<button id="previous">previous</button>');
    let indexSlide = 1;
    let slides = $('img');

    //slide to previous or next image
    function nextPrevious(n) {
        indexSlide += n
        //array for all images with length = 3 & array starting from positon 0 to 2
        console.log(slides);

        //hide slides 
        for (let index = 0; index < slides.length; index++) {
            slides[index].style.display = "none";
        }
        //show slides


        //go to first slide on position 0 if times clicked value indexSlide > array length
        if (indexSlide > slides.length - 1) {
            indexSlide = 0;
        }

        //go to last slide on position 2 if times clicked value indexSlide < array length
        if (indexSlide < 0) {
            indexSlide = (slides.length - 1);
        }
        slides[indexSlide].style.display = "block";

    }

    //
    var myLoop = function () {
        setTimeout(function () {
            nextPrevious(+1);
            myLoop(); // restarts the function
        }, 3000);
    };

    myLoop(); //call function

    //slide to previous img
    $('#previous').click(function () {
        nextPrevious(-1)
    });

    //slide to next img
    $('#next').click(function () {
        nextPrevious(+1)
    });
});


/*

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
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
*/