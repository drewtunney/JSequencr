//BASIC SEQUENCER FUNCTIONALITY

var intervalID;
var intervalCounter = 0;
var BPM = 120;
var songIsPlaying = false;

// Looping function
function gridCycle(){
  var columnCount = $("div.column").length;
  $("div.column").children().removeClass("in-time");
  if (intervalCounter > columnCount - 1) {
    intervalCounter = 0;
  }
  // console.log(intervalCounter);
  $("div#column" + intervalCounter).children().toggleClass("in-time");
  playSelectedNotes();
  intervalCounter++;
}

// Target notes to play
function playSelectedNotes() {
  var notesToPlay = $(".in-time.selected"); //all selected and in-time notes 
  $.each(notesToPlay, function(i, note){
    var soundToPlay = $(note).attr("data-sound"); //
    playSound(soundToPlay);
  });
}



