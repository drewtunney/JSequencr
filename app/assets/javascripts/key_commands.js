//Use Space to Play & Pause a song
Mousetrap.bind('space', function(e) {
  $("#start-pause-timer").click();
});

//Add a sound with cmd ctrl "p"
Mousetrap.bind('command+ctrl+p', function(e) {
  $(".add-row").click();
});

//Reset timer with "r"
Mousetrap.bind('r', function(e) {
  $("#reset-timer").click();
});

//Exit out of overlay with esc
Mousetrap.bind('esc', function(e) {
  $(".exit-button").click();
});

//KONAMI Code!! *easteregg
Mousetrap.bind('up up down down left right left right b a enter', function(e) {
  var unicornFlashingRate = ( 60 / (bpmToBeatVal(BPM) ) * 1000);
  var unicornInterval = window.setInterval(flashingUnicorn, unicornFlashingRate);
});

function flashingUnicorn(){
  $(".unicorn").toggleClass("show-and-hide");
}
