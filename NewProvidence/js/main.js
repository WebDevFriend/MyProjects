$(function () {

    // const parallax = document.getElementById('parallax');
    // window.addEventListener('scroll', function () {
    //     let offset = window.pageYOffset;
    //     parallax.style.backgroundPositionY = offset * 0.2 + 'px';
    // });

    // Меню-{
    $('#burger').click(function(){
        $('.menu-dropdown').toggleClass('show');
    });
    $( "#mobile-burger" ).click(function() {
        $('.nav-mobile').toggleClass("show-mobile");
    });

    $( "#menu-close" ).click(function() {
        $('.nav-mobile').removeClass("show-mobile");
    });
    // скрыть меню по клику на пустую область--{
    $(document).on('click', function(e) {
        if (!$(e.target).closest("#burger").length) {
            $('.menu-dropdown').removeClass('show');
        }
        e.stopPropagation();
    });

    // скрыть мобильное меню по клику на пустую область--{
    $(document).on('click', function(e) {
        if (!$(e.target).closest("#mobile-burger").length) {
            $('.nav-mobile').removeClass("show-mobile");
        }
        e.stopPropagation();
    });
    // --}
    // -}

    // Анимация кнопки "Try to hack us"---{
    $('.second').mouseenter(function(){
        $('.fa-arrow-right').toggleClass('shake');
    });
    // ---}

    // Анимация кнопки "Watch Video"----{
    $('.header-main__btn').mouseenter(function(){
        $('.fa-play').toggleClass('flash');
    });
    $('.header-main__btn').mouseleave(function(){
        $('.fa-play').removeClass('flash');
    });
    // ----}

    // Анимация кнопки "DownloadOnTheAppStore"-----{
    $('.Ready-to-Buy__img').mouseenter(function(){
        $('.Ready-to-Buy__img').toggleClass('pulse');
    });
    // -----}

    // Анимация кнопки "DownloadAppStore"-----{
    $('.social__download img').mouseenter(function(){
        $('.social__download img').toggleClass('pulse');
    });
    // -----}

    // Slick Слайдер-----{
    $(".slider-header").slick({
        asNavFor: ".slider-main",
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: !0,
        centerPadding: "20px",
    });
    $(".slider-main").slick({
        arrows: false
    });
    // ------}

    !function(e) {
        e.fn.equalHeights = function() {
            var i = 0
                , n = e(this);
            return n.each(function() {
                var n = e(this).innerHeight();
                n > i && (i = n)
            }),
                n.css("height", i)
        }
            ,
            e("[data-equal]").each(function() {
                var i = e(this)
                    , n = i.data("equal");
                i.find(n).equalHeights()
            })
    }(jQuery),
        $(".tariffs-item-list").equalHeights();

    $(".plan-switch-btns a").click(function(e) {
        e.preventDefault(),
            $(".plan-switch-btns .active").removeClass("active"),
            $(this).addClass("active");
        var i = $(this).attr("href");
        $(".tariffs").not(i).css({
            display: "none"
        }),
            $(i).fadeIn()
    })
	
	//E-mail Ajax Send
	$("#SendInvite").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Sorry, this feature is currently not available.");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	
	//E-mail Ajax Send
	$("#popupResult").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Sorry, this feature is currently not available.");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	
});
new WOW().init();