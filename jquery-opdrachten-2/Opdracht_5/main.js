// Write your solution here

$('#first_name').focus(function () {
    $(this).css({
        'border': '1px solid green',
        'box-shadow': 'none'
    });
});
$('#name').focus(function () {
    $(this).css('border', '1px solid green');
});
$('#first_name').focusout(function () {
    $(this).css('border', '1px solid red');
});
$('#name').focusout(function () {
    $(this).css('border', '1px solid red');
});