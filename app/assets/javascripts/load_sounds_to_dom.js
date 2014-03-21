// $.each(buddies, function( index, value ) {
//     $("aside").append($("<li>").addClass("buddies").append(value))
//   });


$.each(fileNames, function( index, value) {
  var splitName = value.split('.')
  formattedName = splitName[0] 
  $("select").append($("<option>").append(formattedName))
})