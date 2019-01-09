$(function () {
  var count = 0,
    output = $('#output');

  setInterval(function () {
    output.html(count)
  }, 1); // update continually


  $('#add').click(function () {
    count += 1
  });

  $('#subtract').click(function () {
    count -= 1
  });

});