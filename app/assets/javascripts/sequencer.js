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

// var intervalID = window.setInterval(gridCycle, 1000);
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
  intervalCounter++;

}

$("button#start-timer").on('click', function(){
  intervalID = window.setInterval(gridCycle, 1000);
});
$("button#pause-timer").on('click', function(){
  // var intervalID = window.setInterval(gridCycle, 1000);
  clearInterval(intervalID);
});
$("button#reset-timer").on('click', function(){
  intervalCounter = 1;
  gridCycle();
});
