'use strict';

$(function(){
	function closePopup(){
		$('.form__container').fadeOut(400);
		$('html, body').removeClass('dont-move');
    $(document).unbind('touchmove');
    $('.callback__email').fadeOut(400);
	};
    // callback form 
  $('.callback').click(function(){
  	let formTitle = $(this).attr("aria-label");
    $('.form__container').fadeIn(400).css("display", "flex");
    $('html, body').addClass('dont-move');
    $(document).bind('touchmove', false);
    $('.callback__title').text(formTitle);
  });

  $('.button_red').click(function(){
    $('.callback__email').show();
  });

  $('.form__container').click(function(event){
    if(event.target == this){
      closePopup();
    };
  });

	$('.form__container_close').click(function(){
		closePopup();
	});


	// validation 
	$('input[type="tel"]').inputmask({"mask": "+7 (999) 999-9999"});
	$('#email').inputmask("email");
	
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
				},
				email: {
					required: true,
					email: true,
				}
			},
			submitHandler(form) {
				let doneMsg = $('<div class="done-msg">Заявка отправлена!</div>');
				let th = $(form);
				$.ajax({
					type: 'POST',
					url: 'scripts/mail.php',
					data: th.serialize(),
				// eslint-disable-next-line func-names
				}).done(() => {
					th.trigger('reset');
					th.replaceWith(doneMsg);
					setTimeout(() => closePopup(),3500);
				});
				return false;
			},
		});
	});

});