$( document ).ready(function() {
  // Auto grow of textarea
  $('#autosize').css('overflow', 'hidden').autogrow();


  // Hide show of comma
  $('.comma').addClass("hided");
  $('.commashow').keyup(function() {
    var text = $('.commashow').text();
    if (text=='') {
      $('.comma').removeClass("showed");
      $('.comma').addClass("hided");
    }
    else {
      $('.comma').removeClass("hided");
      $('.comma').addClass("showed");
    };
  });

});
