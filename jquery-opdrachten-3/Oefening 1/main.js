$(function () {
  var count = 0,
    countRate = 0,
    output = $('#output');

  setInterval(function () {
    output.html(count)
  }, 1); // update continually


  $('#click').click(function () {
    count += 1
  });
});