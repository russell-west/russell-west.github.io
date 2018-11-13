$(function() {

$(".header-menu a").mPageScroll2id();
$(".footer-mnu a").mPageScroll2id();
$(".my-menu a").mPageScroll2id();
$(".button-request a").mPageScroll2id();
$(".button-header a").mPageScroll2id();
$(".button-prices a").mPageScroll2id();

$(window).scroll(function(){
    if ($(this).scrollTop() > $(this).height()){
        $('.top').addClass('active');
    } else {
        $('.top').removeClass('active');
    }
});

$('.top').click(function(){
    $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});

$('.carousel-reviews').owlCarousel({
    loop: true,
    items: 1,
    smartSpeed: 700,
    nav:true,
    navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    dots:true,
});

	
$('.slider-area').owlCarousel({
    loop: true,
    items: 1,
    smartSpeed: 700,
    nav:false,
    dots:true,
});



$('#my-menu').mmenu({
		extensions: [ 'widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black' ],
		navbar: {
			title: 'FLER'
		},
		offCanvas: {
			position  : 'right'
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('opened', function () {
		$('.hamburger').addClass('is-active');
	}).bind('closed', function () {
		$('.hamburger').removeClass('is-active');
	});



var mixer = mixitup('.portfolio-table', {
    selectors: {
        target: '.portfolio-item'
    },
   "animation": {
        "duration": 300,
        "nudge": true,
        "reverseOut": true,
        "effects": "fade scale(0.17) translateX(35%) translateY(44%) translateZ(-22px) rotateX(18deg) rotateY(53deg) rotateZ(55deg) stagger(38ms)"
    }
});

 // Для магнифик попап
$('.popup-content').magnificPopup({type:"inline"});

$(".portfolio-item").each(function(i){
	$(this).find("a").attr("href", "#work_" + i);
	$(this).find(".port_descr").attr("id", "work_" + i);
});
// Конец кода для магнифик попап


$('.counter').counterUp({
    delay: 10,
    time: 1000
});




});


//E-mail Ajax Send
    $("form.callback").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

$(window).on('load', function(){
    $('.preloader').delay(1000).fadeOut('slow');
})




