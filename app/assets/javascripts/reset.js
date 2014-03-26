function reset() {
  songId = 0;
  $(".suite-wrapper").children(".sequencer-column").remove();
  $(".suite-wrapper").children("#drop-column").children().remove();
  BPM = 120; 
  $("#song-title").val("");
}