//KONAMI Code
Mousetrap.bind('up up down down left right left right b a enter', function(e) {
  var unicornFlashingRate = ( 60 / (bpmToBeatVal(BPM) ) * 1000);
  var unicornInterval = window.setInterval(stupidAssFlashingUnicorn, unicornFlashingRate);
});

function stupidAssFlashingUnicorn(){
  $(".unicorn").toggleClass("show-and-hide");
}

//Use Space to Play & Pause a song

Mousetrap.bind('space', function(e) {
  $("#start-pause-timer").click();
});


Mousetrap.bind('command+ctrl+p', function(e) {
  $(".add-row").click();
});

Mousetrap.bind('r', function(e) {
  $("#reset-timer").click();
});

Mousetrap.bind('esc', function(e) {
  $(".exit-button").click();
});

function playAndPauseWithSpaceBar() {
  //
}