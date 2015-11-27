$( document ).ready(function() {
  // Auto grow of textarea
  $('#autosize').css('overflow', 'hidden').autogrow();


  // Hide show of comma
  $('.comma').hide();
  $('.commashow').keyup(function() {
    var text = $('.commashow').text();
    if (text=='') {
      $('.comma').fadeOut();
    }
    else {
      $('.comma').fadeIn();
    };
  });

});
