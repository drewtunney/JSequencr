//THIS PROJECT'S API
var rowUserWantsToChange;

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
  $('#display').html("BPM: " + BPM);  
  $("h3").on("click", function(){
    $(".page-overlay").css("display", "block");
    rowUserWantsToChange = $(this).attr("name");
  });
  $(".exit-button").on("click", function(){
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
  var songLength = 8;
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

// //Add sounds to dropdown (outdated)
// function addSoundsToDropDown() {
//   $.each(Object.keys(soundURLs), function( index, url) {
//     // formating fileNames to discard the filetype
//     var splitName = url.split('.');
//     noWav = splitName[0];
//     $("select").append($("<option>").append(noWav).attr('data-sound', noWav));
//   });
// }

function listSoundChoices() {
  $.each(Object.keys(soundURLs), function( index, url) {
    $(".all-sounds ul").append($("<li>").append(url).addClass("sound-choices"));
  });
  $(".sound-choices").on("click", function(){  //user is clicking on overlay to change a row's sound
    var soundSelection = $(this).text();
    var rowNumber = rowUserWantsToChange;  //The var rowUserWantsToChange is stored globally, and updated when the user clicks a the soundTitle of a row to change
    $.each($(".row" + rowNumber), function(i, note){
      $(note).attr("data-sound", soundSelection);
      $("h3[name="+rowNumber+"]").text(soundSelection);
    });
  });
}



// to upcase if we need it
function toUpCase() {
  noWav = noWav.charAt(0).toUpperCase() + noWav.slice(1);
}



