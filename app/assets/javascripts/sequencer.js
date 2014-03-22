var intervalID;
var intervalCounter = 0;
var BPM = 120;
var songIsPlaying = false;

//Event listeners
function triggerEventListeners(){
  $("div.note").on("click", function(){
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
  $("#tempo").on("submit", function(e) {
    e.preventDefault();
    BPM = parseInt($(this).find("input[type=number]").val(), 10);
  }); // end on submit
}


// Set the tempo
function bpmToBeatVal(BPM) {
  BPS = BPM/60.0;
  beatVal = 1.0/BPS;
  return (1000 * beatVal);
}

// Cycling through the grid
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

// THIS SHOULDNT BE AN EACH BUT IS CLOSE TO WORKING
function playSelectedNotes() {
  var notesToPlay = $(".in-time.selected"); //all selected and in-time notes 
  $.each(notesToPlay, function(i, note){
    var soundToPlay = $(note).data("sound"); //
    playSound(soundToPlay);
  });
}



