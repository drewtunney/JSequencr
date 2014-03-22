// initialize rows with a sample to play
// set default values cooresponding to the order in the array/object
// ideally we don't have to set default values and they are just set to the first item in the drop down list 

function settupDOM(){
  var songLength = 8;
  for (var col = 0; col < songLength; col++) {
    $('.suite-wrapper').append($("<div class='column' id='column"+ col+ "'>"));
  }

  for (var key in soundURLs) {//for loop for hash
    for (var i = 0; i < songLength; i++) {
      $("#column" + i).append($("<div class='note' data-sound="+ key + ">"));
    }
  }
  triggerEventListeners();
}