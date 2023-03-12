// On scroll fixed navbar

$(window).scroll(function () {
  if ($(window).scrollTop() >= 100) {
    $('header').addClass('fixed-header');
    $('header div').addClass('visible-title');
  }
  else {
    $('header').removeClass('fixed-header');
    $('header div').removeClass('visible-title');
  }
});

// Counter 

var counted = 0;
$(window).scroll(function() {

  var oTop = $('.counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.num').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-number');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});


