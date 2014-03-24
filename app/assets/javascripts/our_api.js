//THIS PROJECT'S API
var rowUserWantsToChange;
var songLength = 8;
var isBoardSettup = false;

//Event listeners
function triggerEventListeners(){
  $("body").on("click", "div.note", function(){
    $(this).toggleClass("selected");
  });
  $("button#start-pause-timer").on('click', function(){
    if (songIsPlaying) {
      songIsPlaying = false;
      clearInterval(intervalID);
      $(this).text("Start Timer");
    } else {
      songIsPlaying = true;
      intervalID = window.setInterval(gridCycle, bpmToBeatVal(BPM));
      $(this).text("Pause Timer");
    }
  });
  $("button#reset-timer").on('click', function(){
    intervalCounter = 0;
    gridCycle();
  });
  $('#display').html("BPM: " + BPM);
  $("body").on("click", "h3", function(){
    $(".page-overlay").css("display", "block");
    rowUserWantsToChange = $(this).attr("name");
    setOverlayEventListenersFromH3();
  });
  $(".exit-button").on("click", function(){
    $(".page-overlay").css("display", "none");
  });
  $("body").on("click", ".add-row", function(){
    $(".page-overlay").css("display", "block");
    setOverlayEventListenersFromPlus();
  });
}

function setOverlayEventListenersFromH3(){
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

function setOverlayEventListenersFromPlus(){
  $(".sound-choices").off();
  $(".sound-choices").on("click", function(){
    var newNote;
    var newSoundTitle;
    var rowCount = $("h3.sound-title").length;
    var newSound = $(this).text();
    var columnCount = $(".sequencer-column").length;
    var allColumns = $(".sequencer-column");
    if ( rowCount > 0) {  //if there are existing columns add a the new notes to each column
      $.each(allColumns, function(index, column){
        newNote = $("<div>").addClass("note row" + rowCount).attr("data-sound", newSound);
        $(column).append(newNote);
      });
      newSoundTitle = $("<h3>").addClass("sound-title").attr("name", rowCount).text(newSound);
      $(newSoundTitle).appendTo("#drop-column");
    } else {  //create the same number of columns determined by the songLength variable and add the notes to the columns
      for (var i = 0; i < songLength; i++){
        newNote = $("<div>").addClass("note row" + rowCount).attr("data-sound", newSound);
        $('.suite-wrapper').append($("<div class='sequencer-column' id='column"+ i + "'>").append(newNote));
      }
        newSoundTitle = $("<h3>").addClass("sound-title").attr("name", rowCount).text(newSound);
      $(newSoundTitle).appendTo("#drop-column");
    }
    $(".page-overlay").css("display", "none");
  });
}


// Set the tempo
function bpmToBeatVal(BPM) {
  BPS = 60.0/BPM;
  eightNotes = BPS/2; //make eights notes!
  return (1000 * eightNotes);
}

// Display BPM
function displayBPM() {

}


//DOM Manipulation

//Create dropdowns & creates rows
function settupSequencer() {
  isBoardSettup = true;
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

  // list sound choices on the left of the sequencer
function listSoundChoices() {
  $.each(Object.keys(soundURLs), function( index, url) {
    $(".all-sounds ul").append($("<li>").append(url).addClass("sound-choices"));
  });
}



// to upcase if we need it
function toUpCase() {
  noWav = noWav.charAt(0).toUpperCase() + noWav.slice(1);
}



