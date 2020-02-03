$(function(){
  // jqueryUI меню...........
  $( "#menu" ).menu();
  $('.bars').click(function(){
    $('.burger').toggleClass('menu-opened');
    $('.mouk').toggleClass('menu-opened');
  });

  $(document).on('click', function(e) {
    if (!$(e.target).closest(".bars").length) {
      $('.burger').removeClass('menu-opened');
      $('.mouk').removeClass('menu-opened');
    }
    e.stopPropagation();
  });
  // конец jqueryUI меню.....

  // slick слайдер...........
  $('.sl').slick({
  dots: true,
  infinite: false,
  speed: 500,
//   fade: true,
  cssEase: 'linear',
//   autoplay: true,
  prevArrow: '<span class="angle left"><i class="fa fa-angle-left"></i></span>',
  nextArrow: '<span class="angle right"><i class="fa fa-angle-right"></i></span>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }
  ]
});
// конец slick слайдера............

//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Спасибо! Заявка отправлена.");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});

$("#phone, #phone1, #phone2, #phone3, #phone4, #phone5, #phone6, #phone7 ").mask("+7 (999) 999-99-99");

new WOW().init();