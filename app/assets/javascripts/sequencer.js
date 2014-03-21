var intervalID;
var intervalCounter = 1;
var BPM = 120;

//create a transpose function
function transpose(array) {
  return Object.keys(array[0]).map(
    function (column) {
      return array.map(function (row) { return row[column]; }); }
  );
}

//Event listeners
$("div.note").on("click", function(){
  $(this).toggleClass("selected");
});
$("button#start-timer").on('click', function(){
  intervalID = window.setInterval(gridCycle, bpmToBeatVal(BPM));
});
$("button#pause-timer").on('click', function(){
  clearInterval(intervalID);
});
$("button#reset-timer").on('click', function(){
  intervalCounter = 1;
  gridCycle();
});
$("#tempo").on("submit", function(e) {
  e.preventDefault();
  BPM = parseInt($(this).find("input[type=number]").val());
}); // end on submit


// Set the tempo
function bpmToBeatVal(BPM) {
  BPS = BPM/60.0;
  beatVal = 1.0/BPS;
  return (1000 * beatVal);
}

// Cycling through the grid
function gridCycle(){
  var columnCount = $("div.column").length;
  $("div.column").children().removeClass("loop-timer");
  if (intervalCounter > columnCount) {
    intervalCounter = 1;
  }
  // console.log(intervalCounter);
  $("div#column" + intervalCounter).children().toggleClass("loop-timer");
  playSelectedNotes();
  intervalCounter++;
}

// THIS SHOULDNT BE AN EACH BUT IS CLOSE TO WORKING
function playSelectedNotes() {
  var notes = $(".loop-timer");
  $.each(notes, function(i, note){
    var result = $(note).hasClass("selected");
    result ? playSound(soundSources, i) : null;
  });
}





