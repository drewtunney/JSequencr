// DOM SETTUP

function settupDOM(){
  var songLength = 8;
  var suiteWrapper = $("suite-wrapper");
  for (var col = 0; col < songLength; col++) {
    $('.suite-wrapper').append($("<div class='column' id='column"+ col+ "'>"));
  }

  var row = 0;
  for (var key in soundURLs) {//for loop for hash
    var dropDown = $("<select class='drop-down'>");
    dropDown.attr("name", row).appendTo('#drop-column');
    
    for (var i = 0; i < songLength; i++) {
      $("#column" + i).append($("<div class='note row" + row +"' data-sound=" + key + ">"));
    }
    row++;
  }
  addSoundsToDropDown();
  triggerEventListeners();
  selectSoundOfRow();
}