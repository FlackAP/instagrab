$('#tags').tagsInput({
  "width":"200px"
});


$('.start').click(function(){
	$('.nav').addClass('nav-full')
	$('.tagsinput').css('opacity', "1")
	$('.hide-button').css('opacity', "1")
	$('.start').css('opacity', '0')
	$('.nav').css('height', '200px')
  $('.dates').css('opacity', "1")
})

$('.hide-button').click(function(){
	$('.nav').css('height', '120px')
	$('.tagsinput').css('opacity', '0')
	$('.start').css('opacity', '1')
	$('.hide-button').css('opacity', "0")
  $('.dates').css('opacity', "0")
})

$(function() {
    $( "#from" ).datepicker({
      defaultDate: "-1d",
      changeMonth: true,
      changeYear:true,
      numberOfMonths: 1,
      onClose: function( selectedDate ) {
        $( "#to" ).datepicker( "option", "minDate", selectedDate );
      }
    });
    $( "#to" ).datepicker({
      defaultDate: "+1d",
      changeMonth: true,
      changeYear: true,
      numberOfMonths: 1,
      onClose: function( selectedDate ) {
        $( "#from" ).datepicker( "option", "maxDate", selectedDate );
      }
    });
  });