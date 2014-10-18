$(document).ready(function() {

  $('#welcomePage').show();

  $('#bOne').click(function() {
    $('#bOne').css("background-color","#f3f3f3");
    $('#welcomePage').show();
    $('#aboutPage').hide();
    $('#contactPage').hide();
    $('#booksPage').hide();
    $('#bTwo').css("background-color","silver");
    $('#bThree').css("background-color","silver");
    $('#bFour').css("background-color","silver");
  })

  $('#bTwo').click(function() {
    $('#bTwo').css("background-color","#f3f3f3");
    $('#aboutPage').show();
    $('#welcomePage').hide();
    $('#contactPage').hide();
    $('#booksPage').hide();
    $('#bOne').css("background-color","silver");
    $('#bThree').css("background-color","silver");
    $('#bFour').css("background-color","silver");
  })

$('#bThree').click(function() {
  $('#bThree').css("background-color","#f3f3f3");
  $('#contactPage').show();
  $('#welcomePage').hide();
  $('#aboutPage').hide();
  $('#booksPage').hide();
  $('#bOne').css("background-color","silver");
  $('#bTwo').css("background-color","silver");
  $('#bFour').css("background-color","silver");
})

$('#bFour').click(function() {
  $('#bFour').css("background-color","#f3f3f3");
  $('#booksPage').show();
  $('#welcomePage').hide();
  $('#aboutPage').hide();
  $('#contactPage').hide();
  $('#bOne').css("background-color","silver");
  $('#bTwo').css("background-color","silver");
  $('#bThree').css("background-color","silver");
})


})
