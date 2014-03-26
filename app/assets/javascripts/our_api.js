//General App Functionality

//Global Variables
var songLength = 8;
var globalRowCounter = 0;

//Behavior of overlay should be to edit the sound when overlay is initiated from a sound row's title
function setOverlayEventListenersFromH3(rowUserWantsToChange){
  $(".sound-choices").off();
  $(".sound-choices").on("click", function(){  //user is clicking on overlay to change a row's sound
    var soundSelection = $(this).text();
    var rowNumber = rowUserWantsToChange;  //The var rowUserWantsToChange is stored globally, and updated when the user clicks a the soundTitle of a row to change
    
    $.each($(".row" + rowNumber), function(i, note){
      $(note).attr("data-sound", soundSelection);
      $("h3[name="+rowNumber+"]").text(soundSelection);
      $(".page-overlay").css("display", "none");
    });

  });
}

//Behavior of overlay should be to add a new row when the overlay is initiated from the add row ("plus") button
function setOverlayEventListenersFromPlus(){
  $(".sound-choices").off();
  $(".sound-choices").on("click", function(){
    var newNote;
    var newSoundTitle;
    var rowCount = $("h3.sound-title").length;
    var newSound = $(this).text();
    var columnCount = $(".sequencer-column").length;
    var allColumns = $(".sequencer-column");
    var includeX = $("<p>").text("x").addClass("remove-row");
    var lastRowNumber = $("h3.sound-title").last().attr("name");

    if ( rowCount > 0) {  //if there are existing columns add a the new notes to each column
      $.each(allColumns, function(index, column){
        newNote = $("<div>").addClass("note row" + (parseInt(lastRowNumber)+1)).attr("data-sound", newSound);
        $(column).append(newNote);
      });
      newSoundTitle = $("<h3>").addClass("sound-title").attr("name", (parseInt(lastRowNumber)+1)).text(newSound);
      $(newSoundTitle).appendTo("#drop-column");
      $(includeX).attr("id", (parseInt(lastRowNumber)+1)).appendTo("#drop-column");
      globalRowCounter++;
      console.log(lastRowNumber)
    } else {  //create the same number of columns determined by the songLength variable and add the notes to the columns
      
      for (var i = 0; i < songLength; i++){
        newNote = $("<div>").addClass("note row" + globalRowCounter).attr("data-sound", newSound);
        $('.suite-wrapper').append($("<div class='sequencer-column' id='column"+ i + "'>").append(newNote));
      }
        newSoundTitle = $("<h3>").addClass("sound-title").attr("name", globalRowCounter).text(newSound);
      $(newSoundTitle).appendTo("#drop-column");
      $(includeX).attr("id", globalRowCounter).appendTo("#drop-column");
      globalRowCounter++;
    }
    $(".page-overlay").css("display", "none");
  });
}

//List all sounds on server in overlay
function listSoundChoices() {
  $.each(Object.keys(soundURLs), function( index, url) {
    $(".all-sounds ul").append($("<li>").append(url).addClass("sound-choices"));
  });
}

// Set the tempo of the song
function bpmToBeatVal(BPM) {
  BPS = 60.0/BPM; //Transform beats per minute to beats per second
  eighthNotes = BPS/2; //make eighth notes!
  return (1000 * eighthNotes);
}


//Sample Sequencer
//This is a premade sequencer settup, created on function execution
function settupSequencer() {
  $(".suite-wrapper").children(".sequencer-column").remove();
  $(".suite-wrapper").children("#drop-column").children().remove();
  var suiteWrapper = $("suite-wrapper");
  for (var col = 0; col < songLength; col++) {
    $('.suite-wrapper').append($("<div class='sequencer-column' id='column"+ col+ "'>"));
  }

  var rowCounter = 0;
  for (var key in soundURLs) {//for loop for hash
    var soundTitle = $("<h3 class='sound-title'>");
    soundTitle.text(key);
    soundTitle.attr("name", rowCounter).appendTo('#drop-column');
    
    for (var i = 0; i < songLength; i++) {
      $("#column" + i).append($("<div class='note row" + rowCounter +"' data-sound=" + key + ">"));
    }
    rowCounter++;
  }
}
