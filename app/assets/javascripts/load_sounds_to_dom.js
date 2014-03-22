$.each(fileNames, function( index, value) {
  // format fileNames
  var splitName = value.split('.');
  noWav = splitName[0];
  $("select").append($("<option>").append(noWav).attr('id', index).attr('data-sound', noWav));
});


// get value of selected row sound 
$("select").on('change', function() {
  var soundSelection = $(this).val();
  console.log(soundSelection);
});



// to upcase if we need it
function toUpCase() {
  noWav = noWav.charAt(0).toUpperCase() + noWav.slice(1);
}




