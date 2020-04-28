$(function(){
	function closePopup(){
		$('.form__container').fadeOut(400);
		$('html, body').removeClass('dont-move');
    $(document).unbind('touchmove');
	}
    // callback form 
    $('.callback').click(function(){
        $('.form__container').fadeIn(400).css("display", "flex");
        $('html, body').addClass('dont-move');
        $(document).bind('touchmove', false);
    });

    $('.form__container').click(function(event){
        if(event.target == this){
            $(this).fadeOut(400);
            $('html, body').removeClass('dont-move');
            $(document).unbind('touchmove');
        };
    });

	$('.form__container_close').click(function(){
		closePopup();
	});


	// validation 
	$('input[type="tel"]').inputmask({"mask": "+7 (999) 999-9999"}); 
	
	$('form').each(function () {
		$(this).validate({
			errorPlacement(error, element) {
				return true;
			},
			focusInvalid: false,
			rules: {
				Телефон: {
					required: true,
				},
				Имя: {
					required: true,
					minlength: 3,
				}
			},
			submitHandler(form) {
				let doneMsg = $('<div class="done-msg"><div class="callback__done">Заявка получена.</div><p>Спасибо! Я свяжусь с вами в ближайшее время.</p></div>');
				let th = $(form);
				$.ajax({
					type: 'POST',
					url: 'scripts/mail.php',
					data: th.serialize(),
				// eslint-disable-next-line func-names
				}).done(() => {
					th.trigger('reset');
					th.replaceWith(doneMsg);
					setTimeout(() => closePopup(),2500);
				});
				return false;
			},
		});
	});

});