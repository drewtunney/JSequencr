//BASIC SEQUENCER FUNCTIONALITY

var intervalID;
var intervalCounter = 0;
var BPM = 120;
var songIsPlaying = false;


//Create slider (i.e. slider setter)
$( "#slider" ).slider({
  min: 20,
  max: 240,
  value: BPM,
  slide: function(event, ui) {
    BPM = $('#slider').slider('option', 'value');
    $('#display').html("BPM: " + BPM);
  }
});

//Slider getter methods
$( ".slider" ).on( "slide", function( event, ui ) {
  BPM = $('#slider').slider('option', 'value');
} );


// Looping function
function gridCycle(){
  var columnCount = $("div.sequencer-column").length;
  $("div.sequencer-column").children().removeClass("in-time");
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

//Manipulate the DOM for Sequencing!
function settupDOM(){
  //Prepare overlay with available sounds
  listSoundChoices();
  songId = 0; //this means there is no song saved already
  JSequencr.currentUserId = parseInt(JSequencr.currentUserId) || 0;
  addSignUpSubmitEventListener();
  addLoginSubmitEventListener();
  addLogoutSubmitEventListener();
  updateLoginForm();
  loadUserSongsListener();
}


