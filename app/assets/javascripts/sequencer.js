//create a transpose function
function transpose(array) {
  return Object.keys(array[0]).map(
    function (column) {
      return array.map(function (row) { return row[column]; }); }
  );
}

//User can change color on click
$("div.note").on("click", function(){
  $(this).toggleClass("selected");
});


//Cyclying through the grid

var intervalID;
var intervalCounter = 1;

function gridCycle(){
  var columnCount = $("div.column").length;
  $("div.column").children().removeClass("loop-timer");
  if (intervalCounter > columnCount) {
    intervalCounter = 1;
  }
  // console.log(intervalCounter);
  $("div#column" + intervalCounter).children().toggleClass("loop-timer");

  playSound(soundSources, 2);
  intervalCounter++;
}

//THIS SHOULDNT BE AN EACH BUT IS CLOSE TO WORKING
function playSelectedNotes() {
  // var notesToPlay = $("div.note.loop-timer.selected");
}



//Event listeners
$("button#start-timer").on('click', function(){
  intervalID = window.setInterval(gridCycle, 1000);
  playSelectedNotes();
});
$("button#pause-timer").on('click', function(){
  clearInterval(intervalID);
});
$("button#reset-timer").on('click', function(){
  intervalCounter = 1;
  gridCycle();
});


