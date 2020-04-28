$(function(){
	// slow scroll to point
	$('a[href^="#"]').on('click', function(event) {
	    event.preventDefault();
	    var sc = $(this).attr("href"),
	        dn = $(sc).offset().top;
	    $('html, body').animate({scrollTop: dn}, 1000);
	 });


	// swiper=slider
	new Swiper('.slider', {
		slidesPerView: 1,
		spaceBetween: 35,
		loop: true,
		wrapperClass: 'slider__wrapper',
		slideClass: 'slider__item',
		navigation: {
			nextEl: '.slider__arrow_next',
			prevEl: '.slider__arrow_prev',
		},
		pagination: {
			el: '.slider__pagination',
			type: 'bullets',
			bulletClass: 'pagination__item',
    	bulletActiveClass: 'pagination__item_active',
			clickable: true
		},
		breakpoints: {
			580: {
				slidesPerView: 2
			},
			1024: {
				slidesPerView: 3,
				spaceBetween: 30
			},
		},
		a11y: {
			prevSlideMessage: 'Предыдущий слайд',
			nextSlideMessage: 'Следующий слайд',
			paginationBulletMessage: 'К слайду {{index}}',
		},
	});

	// actual year
	$(function() {
		$(".year-now").text( (new Date).getFullYear() );
	});
    
});