$(function(){

    $('#add-button').click(function(){
        var newName = $('.action-name').val();
        var newText = $('.action-text').val();
        var newList = $('<div class="new-list"><h3>'+newName+'<button class="del-button" type="submit" aria-label="Удалить"></button></h3><button class="hide-button" type="submit" aria-label="Свернуть"></button><p class="list-text">'+newText+'</p></div>');

        if(newName == ''){
            $('.action-name').addClass('empty-field');
            setTimeout(function(){
  				$('.action-name').removeClass('empty-field');
			}, 800);
        } else if(newText == ''){
            $('.action-text').addClass('empty-field');
            setTimeout(function(){
  				$('.action-text').removeClass('empty-field');
			}, 800);
        } else {
            $('#column-left').append(newList);
            $('#list-empty').hide();
        };
        return false; 
    });

    $('#column-left').on('click', '.del-button', function() {
        $(this).parent().parent().remove();
        if($('div').is('.new-list')){
            $('#list-empty').hide();
        } else {
            $('#list-empty').show();
        }
    });

    $('#column-left').on('click', '.hide-button', function() {
    	$(this).toggleClass('more-button')
        $(this).parent().find('p').slideToggle();
    });         
});