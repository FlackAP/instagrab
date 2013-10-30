$( document ).ready(function() {

});


//disable inputs on load

$('input').prop('disabled', true);

// Nav Bar functions

$('.start').click(function(){
	$('.nav').addClass('nav-full')
	$('.tagsinput').css('opacity', "1")
	$('.hide-button').css('opacity', "1")
	$('.start').css('opacity', '0')
	$('.nav').css('height', '320px')
  $('.dates').css('opacity', "1")
  $('input').prop('disabled', false);
})

$('.hide-button').click(function(){
	$('.nav').css('height', '120px')
	$('.tagsinput').css('opacity', '0')
	$('.start').css('opacity', '1')
	$('.hide-button').css('opacity', "0")
  $('.dates').css('opacity', "0")
  $('input').prop('disabled', true);
})

//CONVERT DATES TO UNIX RANGE

function unixConvert(from, to) {
  var from = $('#from').val();
  var to   = $('#to').val();

  var unixFrom = moment(from).unix();
  var unixTo   = moment(to).unix()

  console.log(unixFrom + " to " + unixTo)  
  return (unixFrom + "-" + unixTo)
}

// Remove duplicate spans
function removeDuplicate(){
  var seen = {};
  $('.tag').each(function() {
      var txt = $(this).text();
      if (seen[txt])
          $(this).remove();
      else
          seen[txt] = true;
  });
}

// Add message for filtering tags

$('.grab').click(function(){
  $('.iso-tags').append('<p>Filter by Tag: </p><div class="tag all">All</div>')
})

//Date Picker

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
  })