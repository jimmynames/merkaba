jQuery(document).ready(function( $ ) {

	// $ Works! You can test it with next line if you like
	// console.log($);
/*

$('.hero').waypoint(function(direction) {
  $('.heroContainer nav').delay(500).addClass(" revealed");
  $('.heroContainer .logoContainer').delay(2000).addClass(" activeL");
},
{
  triggerOnce: true
});
*/


// Trigger Nav Down Appear
setTimeout(() => {
              $('.heroContainer nav').removeClass('hideTop')
              .removeClass('inActive')
              .addClass('active')
              .addClass('revealed');
            }, 500);
// Trigger Nav Menu Li Fade
setTimeout(() => {
            $('.heroContainer nav li').each(function(i) {
              $(this).delay((i+1) * 500).removeClass('inActive').addClass('active');
            });
          }, 1000);

// Trigger Logo Fade
          setTimeout(() => {
                        $('.logoContainer').removeClass('hideTop')
                        .removeClass('inActiveL')
                        .addClass('active')
                      }, 2000);

// Trigger Hero Title Text Fade
setTimeout(() => {
              $('.titleContainer')
              .removeClass('inActive')
              .addClass('active')
            }, 2500);


// Trigger Hero Detail Fade
setTimeout(() => {
              $('.heroInfo')
              .removeClass('inActive')
              .addClass('active')
            }, 3000);


/* Jump to links NAv */
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Fixed Nav

var  mn = $(".main-nav");
    mns = "main-nav-scrolled";
    hdr = $('.hero').height();

$(window).scroll(function() {

  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});

            });
