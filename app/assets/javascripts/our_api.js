//THIS PROJECT'S API

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
  BPS = 60.0/BPM;
  eightNotes = BPS/2; //make eights notes!
  return (1000 * eightNotes);
}

//DOM Manipulation
function addSoundsToDropDown() {
  $.each(Object.keys(soundURLs), function( index, url) {
    // formating fileNames to discard the filetype
    var splitName = url.split('.');
    noWav = splitName[0];
    $("select").append($("<option>").append(noWav).attr('data-sound', noWav));
  });
}


// get value of selected row sound 
function selectSoundOfRow(){
  $("select").on('change', function() {
    console.log("hey");
    var soundSelection = $(this).val();
    var row = $(this).attr("name");
    $.each($(".row" + row), function(i, note){
      $(note).attr("data-sound", soundSelection);
    });
  });
}


// to upcase if we need it
function toUpCase() {
  noWav = noWav.charAt(0).toUpperCase() + noWav.slice(1);
}




