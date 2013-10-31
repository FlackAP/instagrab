$( document ).ready(function() {

});

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