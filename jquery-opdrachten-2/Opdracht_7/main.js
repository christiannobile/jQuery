$(document).ready(function(){
    /* On click: Enlarge the font (120%) */
    $(this).click(function(){
      $('body').css('font-size', '1.2em');
    });

    /* On click: Decrease the font size (80%) */
    $(this).click(function(){
      $('body').css('font-size', '0.8em');
    });

    /* On click: Bold or normalize the green words */
    $('.green').click(function(){
      $('.green').toggleClass('bold');
      $('.green').css('font-weight', '400');
      $('.bold').css('font-weight', 'bold');
    });

    /* On click: Bold or normalize the green words */

    /* On click: Replace the logo with another image */
    $('#content img').click(function(){
      if ( $(this).attr('src') == "images/jquery-logo.png"){
        $(this).attr('src', "images/koala.jpg");
      } else {
        $(this).attr('src', "images/jquery-logo.png");
      }
    });

    /* On hover: Display the URL of links in a tooltip when hovering over links */
    $( document ).tooltip();

    /* On click: add "Chapter 1:" before the 1st title h2 and "Chapter 2:" before the 2nd title h2 */

});