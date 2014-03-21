var intervalID;
var intervalCounter = 1;

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
  intervalID = window.setInterval(gridCycle, 400);
  // playSelectedNotes();
});
$("button#pause-timer").on('click', function(){
  clearInterval(intervalID);
});
$("button#reset-timer").on('click', function(){
  intervalCounter = 1;
  gridCycle();
});


//Cyclying through the grid
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

//THIS SHOULDNT BE AN EACH BUT IS CLOSE TO WORKING
function playSelectedNotes() {
  var notes = $(".loop-timer");
  $.each(notes, function(i, note){
    var result = $(note).hasClass("selected");
    result ? playSound(soundSources, i) : null;
  });
}





